import sys
import os

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from fastapi import FastAPI, UploadFile, File
from services.ocr import ocr_image, extract_text_from_pdf
from services.doc_rules import detect_document_type, validate_pan, validate_aadhaar, validate_voterid
from services.nlp_checks import validate_place_names, grammar_check
from services.crosscheck import fuzzy_compare
import pandas as pd

# Load places
places_df = pd.read_csv("data/places.csv")
valid_places = set(places_df["City"].str.lower())

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Fake Doc Checker API running"}

@app.post("/upload/")
async def upload_document(file: UploadFile = File(...)):
    contents = await file.read()

    if file.content_type and file.content_type.startswith("image/"):
        text = ocr_image(contents)
    elif file.content_type == "application/pdf":
        text = extract_text_from_pdf(contents)
    else:
        text = contents.decode("utf-8")

    doc_type = detect_document_type(text)

    pan_valid = aadhaar_valid = voterid_valid = None

    if doc_type == "PAN":
        pan_valid = bool(validate_pan(text))
    elif doc_type == "Aadhaar":
        aadhaar_valid = bool(validate_aadhaar(text))
    elif doc_type == "Voter ID":
        voterid_valid = bool(validate_voterid(text))

    grammar_issues, grammar_details = grammar_check(text)
    suspicious_places = validate_place_names(text, valid_places)

    return {
        "document_type": doc_type,
        "valid_pan_format": pan_valid,
        "valid_aadhaar_format": aadhaar_valid,
        "valid_voterid_format": voterid_valid,
        "grammar_errors": grammar_issues,
        "grammar_details": grammar_details,
        "suspicious_places": suspicious_places
    }
