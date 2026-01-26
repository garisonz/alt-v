import os
from dotenv import load_dotenv

# Load the .env file
load_dotenv()

class Settings:
    PROJECT_NAME: str = "ALT-V"
    PROJECT_VERSION: str = "1.0.0"
    
    POSTGRES_USER: str = os.getenv("POSTGRES_USER")
    POSTGRES_PASSWORD: str = os.getenv("POSTGRES_PASSWORD")
    POSTGRES_SERVER: str = "localhost" 
    POSTGRES_PORT: str = "5432"
    POSTGRES_DB: str = os.getenv("POSTGRES_DB", "alt_v_db")
    
    DATABASE_URL: str = f"postgresql://{POSTGRES_USER}:{POSTGRES_PASSWORD}@{POSTGRES_SERVER}:{POSTGRES_PORT}/{POSTGRES_DB}"

    FRED_API_KEY: str = os.getenv("FRED_API_KEY")

settings = Settings()