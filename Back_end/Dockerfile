FROM python:3.10

COPY --from=ghcr.io/astral-sh/uv:latest /uv /bin/uv

RUN apt update && apt install -y --no-install-recommends \
    build-essential \
    ocl-icd-opencl-dev \
    cmake \
    ffmpeg \
    libsm6 \
    libxext6 && \
    apt clean && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY requirements.txt .

RUN uv pip install -r requirements.txt --system

COPY . .

EXPOSE 35000

CMD ["uvicorn", "main:app", "--port", "35000", "--host", "0.0.0.0"]
