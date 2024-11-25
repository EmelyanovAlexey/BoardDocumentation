from datetime import datetime
from sqlalchemy import ForeignKey, CheckConstraint
from sqlalchemy.dialects.postgresql import BYTEA
from sqlalchemy import MetaData, Table, Column, Integer, String, TIMESTAMP

metadata = MetaData()

# инициализация миграции
# alembic init migrations

# Создаем миграцию (ревизия)
# alembic revision --autogenerate -m "Database create"

# Проворачиваем миграцию
# alembic upgrade (hash)

# простомотр бд
# psql -h localhost -p 5432 -U postgres
# \l
# GRANT ALL PRIVILEGES ON DATABASE "Leason" TO postgres;

pages = Table(
    "pages",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("title", String, nullable=False),
    Column("content", String, nullable=False),
)

reviews = Table(
    "reviews",
    metadata,
    Column("id", Integer, primary_key=True),
    Column("name", String, nullable=False),
    Column("text", String, nullable=True),
    Column("rating", Integer, nullable=False),
    Column("date", TIMESTAMP, default=datetime.utcnow),
    CheckConstraint("rating >= 1 AND rating <= 5", name="check_rating_range")
)