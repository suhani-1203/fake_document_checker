from fastapi import FastAPI, UploadFile, File
from services.ocr import ocr_image, extract_text_from_pdf
from services.doc_rules import detect_document_type, validate_pan
from services.nlp_checks import validate_place_names, grammar_check
from services.crosscheck import fuzzy_compare
from data.valid_places import places_list

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Fake Doc Checker API running"}

@app.post("/upload/")
async def upload_document(file: UploadFile = File(...)):
    contents = await file.read()

    if file.content_type.startswith("image/"):
        text = ocr_image(contents)
    elif file.content_type == "application/pdf":
        text = extract_text_from_pdf(contents)
    else:
        text = contents.decode("utf-8")

    doc_type = detect_document_type(text)
    pan_valid = bool(validate_pan(text)) if doc_type == "PAN" else None
    grammar_issues, grammar_details = grammar_check(text)
    suspicious_places = validate_place_names(text, places_list)

    return {
        "document_type": doc_type,
        "valid_pan_format": pan_valid,
        "grammar_errors": grammar_issues,
        "suspicious_places": suspicious_places
    }