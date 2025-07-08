import pytesseract
from PIL import Image
import pdfplumber
import io

def ocr_image(file_bytes):
    image = Image.open(io.BytesIO(file_bytes))
    return pytesseract.image_to_string(image, lang='eng')

def extract_text_from_pdf(file_bytes):
    all_text = ""
    with pdfplumber.open(io.BytesIO(file_bytes)) as pdf:
        for page in pdf.pages:
            text = page.extract_text()
            if text:
                all_text += text + "\n"
    return all_text
