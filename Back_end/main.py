from fastapi import FastAPI, UploadFile, HTTPException, Depends, Body, File, Header
from fastapi.responses import StreamingResponse
from fastapi.middleware.cors import CORSMiddleware

from sqlalchemy import select, insert, update, join, Integer
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.sql import func, or_
from jose import jwt, ExpiredSignatureError, JWTError
from datetime import datetime, timezone

# Models
from Modele.models import pages
from database import get_db

# Старт
# uvicorn main:app --reload

# Свагер
# http://127.0.0.1:8000/docs

app = FastAPI()

# указываем список источников, которым разрешено обращаться к серверу
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],  # разрешаем любые методы (GET, POST и т.д.)
    allow_headers=["*"],  # разрешаем любые заголовки
)

# Поиск в БД по тексту
@app.get("/search")
async def search_articles(query: str, session: AsyncSession = Depends(get_db)):
    stmt = (
        select(pages.c.id, pages.c.title, pages.c.content)
        .where(
            or_(
                pages.c.title.ilike(f"%{query}%"),  # Поиск в заголовке
                pages.c.content.ilike(f"%{query}%")  # Поиск в тексте
            )
        )
    )
    
    result = await session.execute(stmt)
    articles_list = result.fetchall()

    return [
        {
            "id": article[0],
            "title": article[1],
            "content": article[2],
        }
        for article in articles_list
    ]

# # получить пост по id
# @app.get("/posts/{post_id}")
# def get_post_id(post_id: int):
#     return getPostId(post_id)