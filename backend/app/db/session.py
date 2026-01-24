from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.core.config import settings

# 1. Create the engine
# We use the URL from our config settings
engine = create_engine(settings.DATABASE_URL)

# 2. Create the SessionLocal class
# Each request (e.g., a user asking for GDP data) will get its own temporary session
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# 3. Dependency function
# This is a helper we will use in our API endpoints later
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()