import re

def detect_document_type(text):
    if "Unique Identification Authority" in text:
        return "Aadhaar"
    elif re.search(r"[A-Z]{5}[0-9]{4}[A-Z]", text):
        return "PAN"
    elif "Election Commission" in text:
        return "Voter ID"
    elif "Survey No" in text:
        return "Land Document"
    return "Unknown"

def validate_pan(text):
    pattern = r"[A-Z]{5}[0-9]{4}[A-Z]"
    return re.findall(pattern, text)
