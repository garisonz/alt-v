import os
from dotenv import load_dotenv

# Load the .env file
load_dotenv()

class Settings:
    PROJECT_NAME: str = "ALT-V"
    PROJECT_VERSION: str = "1.0.0"
    
    # Database settings
    POSTGRES_USER: str = os.getenv("POSTGRES_USER")
    POSTGRES_PASSWORD: str = os.getenv("POSTGRES_PASSWORD")
    POSTGRES_SERVER: str = "localhost"  # "localhost" works because we run FastAPI locally
    POSTGRES_PORT: str = "5432"
    POSTGRES_DB: str = os.getenv("POSTGRES_DB", "alt_v_db")
    
    # Construct the Database URL
    DATABASE_URL: str = f"postgresql://{POSTGRES_USER}:{POSTGRES_PASSWORD}@{POSTGRES_SERVER}:{POSTGRES_PORT}/{POSTGRES_DB}"

settings = Settings()