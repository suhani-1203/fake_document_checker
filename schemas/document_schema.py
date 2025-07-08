from pydantic import BaseModel
from typing import Optional, List

class DocumentResult(BaseModel):
    document_type: str
    valid_pan_format: Optional[bool]
    grammar_errors: int
    suspicious_places: List[str]
