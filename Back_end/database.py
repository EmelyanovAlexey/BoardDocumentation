from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy import MetaData

metadata = MetaData()

DATABASE_URL = "postgresql+asyncpg://postgres:1111@localhost:5432/Project"

# Создаем асинхронный движок
engine = create_async_engine(DATABASE_URL, echo=True)

# Создаем фабрику асинхронных сессий
AsyncSessionLocal = sessionmaker(bind=engine, class_=AsyncSession, expire_on_commit=False)

# Зависимость для получения асинхронной сессии
async def get_db() -> AsyncSession:
    async with AsyncSessionLocal() as session:
        yield session