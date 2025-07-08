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

import re

def validate_pan(text):
    pattern = r"[A-Z]{5}[0-9]{4}[A-Z]"
    return re.search(pattern, text)

def validate_aadhaar(text):
    pattern = r"\d{4}\s\d{4}\s\d{4}"
    return re.search(pattern, text)

def validate_voterid(text):
    pattern = r"[A-Z]{3}[0-9]{7}"
    return re.search(pattern, text)

