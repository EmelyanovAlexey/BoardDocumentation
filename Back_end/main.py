from fastapi import FastAPI, UploadFile, HTTPException, Depends, Body, File, Header
from fastapi.responses import StreamingResponse
from fastapi.middleware.cors import CORSMiddleware

from sqlalchemy import select, insert, update, join, Integer
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.sql import func
from jose import jwt, ExpiredSignatureError, JWTError
from datetime import datetime, timezone

# Models
# from models.models import pages, kpi, users
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
# @app.get("/search")
# def get_search_info():
#     return getPost()

# # получить пост по id
# @app.get("/posts/{post_id}")
# def get_post_id(post_id: int):
#     return getPostId(post_id)