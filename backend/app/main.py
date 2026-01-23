from fastapi import FastAPI

# The variable name MUST be 'app' because you ran 'app.main:app'
app = FastAPI(title="ALT-V Economic Platform") 

@app.get("/")
def health_check():
    return {"status": "active", "system": "ALT-V"}

@app.get("/items/{item_id}")
async def read_item(item_id):
    return {"item_id": item_id}