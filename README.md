# 🚀 Adithiya Srinivasan — Portfolio

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Python](https://img.shields.io/badge/Python-3.12-green?style=for-the-badge&logo=python)
![FastAPI](https://img.shields.io/badge/FastAPI-0.111-teal?style=for-the-badge&logo=fastapi)
![Docker](https://img.shields.io/badge/Docker-Compose-2496ED?style=for-the-badge&logo=docker)

**Full-Stack Software Engineer | Backend · Cloud · Embedded Systems**

[Live Site](https://adithiya.dev) · [LinkedIn](https://linkedin.com/in/adithiya-srinivasan) · [GitHub](https://github.com/adithiya-srinivasan)

</div>

---

## 📁 Project Structure

```
adithiya-portfolio/
├── frontend/          # Next.js 15 + TypeScript + Tailwind CSS
├── backend/           # Python FastAPI — contact form & analytics
├── nginx/             # Reverse proxy config
├── docker-compose.yml # One-command local dev & production
└── .github/workflows/ # CI/CD via GitHub Actions
```

## ✨ Tech Stack

| Layer       | Technology                          |
|-------------|-------------------------------------|
| Frontend    | Next.js 15, TypeScript, Tailwind CSS |
| Backend     | Python 3.12, FastAPI, Pydantic       |
| Database    | PostgreSQL (via SQLAlchemy)          |
| Container   | Docker, Docker Compose               |
| Proxy       | Nginx                               |
| CI/CD       | GitHub Actions                      |
| Cloud       | AWS / Azure ready                   |

## 🛠️ Getting Started

### Prerequisites
- Docker & Docker Compose
- Node.js 20+ (for local frontend dev)
- Python 3.12+ (for local backend dev)

### Run with Docker (Recommended)

```bash
git clone https://github.com/adithiya-srinivasan/portfolio.git
cd portfolio
cp .env.example .env
docker compose up --build
```

Visit `http://localhost:3000`

### Local Development

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

**Backend:**
```bash
cd backend
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

API docs at `http://localhost:8000/docs`

## 🐳 Docker Services

| Service   | Port | Description                  |
|-----------|------|------------------------------|
| frontend  | 3000 | Next.js application           |
| backend   | 8000 | FastAPI + auto Swagger UI     |
| nginx     | 80   | Reverse proxy                 |

## 🚀 Deployment

This project is CI/CD ready via GitHub Actions:
- **Push to `main`** → runs lint + type check + tests
- **Tag `v*`** → builds & pushes Docker images to GHCR

## 📬 Contact API

The FastAPI backend exposes:

```
POST /api/contact     — Send a message
GET  /api/health      — Health check
GET  /docs            — Swagger UI
```

## 📄 License

MIT — feel free to fork and adapt for your own portfolio.
