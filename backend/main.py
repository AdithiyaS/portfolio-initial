"""
Portfolio Backend — FastAPI
Handles contact form submissions and health checks.
"""

from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers import contact, health
from app.config import settings


@asynccontextmanager
async def lifespan(app: FastAPI):
    print(f"🚀 Portfolio API starting — env: {settings.environment}")
    yield
    print("👋 Portfolio API shutting down")


app = FastAPI(
    title="Adithiya Portfolio API",
    description="Backend for adithiya.dev — contact form & health endpoints.",
    version="1.0.0",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://adithiya.dev"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health.router, prefix="/api")
app.include_router(contact.router, prefix="/api")
