# ── builder ───────────────────────────────────────────
FROM python:3.12-slim AS builder
WORKDIR /app
RUN pip install --upgrade pip
COPY requirements.txt .
RUN pip install --no-cache-dir --prefix=/install -r requirements.txt

# ── runner ────────────────────────────────────────────
FROM python:3.12-slim AS runner
WORKDIR /app
COPY --from=builder /install /usr/local
COPY . .

RUN adduser --disabled-password --gecos "" appuser
USER appuser

EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
