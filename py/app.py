import os
import asyncio
import asyncpg
from fastapi import FastAPI

app = FastAPI()
conn = None

@app.post('/')
async def root():
    data = await conn.fetch(os.getenv('SQL1'))
    if data:
        data = await conn.fetch(os.getenv('SQL2'))
        return data[0]
    return {'data': 'error'}

async def init():
    global conn
    conn = await asyncpg.connect(
        host=os.getenv('DB_HOST'),
        port=5432,
        user='postgres',
        password=os.getenv('DB_PASS'),
        database='main',
    )

asyncio.create_task(init())
