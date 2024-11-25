from fastapi import FastAPI, UploadFile, HTTPException, Depends, Body, File, Header
from fastapi.responses import StreamingResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

from sqlalchemy import select, insert, update, join, Integer
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.sql import func, or_
from jose import jwt, ExpiredSignatureError, JWTError
from datetime import datetime, timezone

# Models
from Modele.models import pages, reviews
from database import get_db

# Старт
# uvicorn main:app --reload

# Свагер
# http://127.0.0.1:8000/docs

app = FastAPI()

# указываем список источников, которым разрешено обращаться к серверу
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3001"],
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


@app.get("/reviews")
async def get_reviews(session: AsyncSession = Depends(get_db)):
    stmt = (
        select(reviews.c.id, reviews.c.name, reviews.c.text, reviews.c.rating, reviews.c.date)
    )
    
    result = await session.execute(stmt)
    reviews_list = result.all()

    return [
        {
            "id": review[0],
            "name": review[1],
            "text": review[2],
            "rating": review[3],
            "date": review[4],
        }
        for review in reviews_list
    ]

class ReviewCreate(BaseModel):
    name: str = Field(..., min_length=1)  # Имя обязательно
    text: str = Field(default="")  # Текст обязательно
    rating: int = Field(..., ge=1, le=5)  # Рейтинг от 1 до 5

@app.post("/reviews")
async def create_review(
    review: ReviewCreate, session: AsyncSession = Depends(get_db)
):
    stmt = insert(reviews).values(
        name=review.name,
        text=review.text,
        rating=review.rating,
        date=datetime.utcnow(),
    )
    await session.execute(stmt)
    await session.commit()

    return {"message": "Review added successfully"}
