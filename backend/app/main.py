from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from sqlalchemy import text  # Needed for raw SQL
from app.db.session import get_db

app = FastAPI(title="ALT-V Economic Platform")

@app.get("/")
def health_check():
    return {"status": "active", "system": "ALT-V"}

@app.get("/test-db")
def test_db_connection(db: Session = Depends(get_db)):
    try:
        # Try to run a simple SQL command
        result = db.execute(text("SELECT 1"))
        return {"status": "success", "message": "Database connected!"}
    except Exception as e:
        return {"status": "error", "message": str(e)}