import os
import asyncio
import asyncpg
from fastapi import FastAPI

app = FastAPI()
conn = None

@app.post('/')
async def root():
    data = await conn.fetch('''
        SELECT * FROM "products"
            WHERE TRUE
                AND "products"."updated" > '2022-08-03 17:33:46'
                AND "products"."sex" = 'male'
            ORDER BY "index" ASC
            LIMIT 52
            OFFSET 0
    ''')
    if data:
        data = await conn.fetch('''
            SELECT COUNT(*) FROM "products"
                WHERE TRUE
                    AND "products"."updated" > '2022-08-03 17:33:46'
                    AND "products"."sex" = 'male'
        ''')
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
