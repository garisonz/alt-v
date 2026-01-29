'''
Edgar API:

Authentication:
no api key
declare via header

Rate Limit:
Max 10 req/s

Usage of edgar api:
1. 
'''
import os
from dotenv import load_dotenv
import json
import httpx

class Edgar:

    BASE_URL: str = "https://data.sec.gov"

    def __init__(self, user_agent: str):

        self.headers = {
            "User-Agent": user_agent,
            "Accept-Encoding": "gzip, deflate"
        }
    
    def get_company_cik():

        tickers_url = "https://www.sec.gov/files/company_tickers.json"
    
    

def main():

    load_dotenv()

    user_agent = os.getenv("EDGAR_USER_AGENT")
    print(user_agent)

    print("Test of edgar api:")

    edgar = Edgar("GarisonZagorski garisonzag88@gmail.com")

    print(edgar.BASE_URL)
    print(edgar.headers["User-Agent"])

if __name__ == '__main__':
    main()