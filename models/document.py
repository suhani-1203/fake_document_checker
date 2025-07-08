from sqlalchemy import Column, Integer, String, JSON, create_engine
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Document(Base):
    __tablename__ = "documents"

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer)
    doc_type = Column(String)
    extracted_text = Column(String)
    extracted_fields = Column(JSON)
    validation_score = Column(Integer)
    suspicious_points = Column(JSON)
