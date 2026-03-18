from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    environment: str = "development"
    smtp_host: str = "smtp.gmail.com"
    smtp_port: int = 587
    smtp_user: str = ""
    smtp_pass: str = ""
    contact_email: str = "adithiya.srinivasan99@gmail.com"

    class Config:
        env_file = ".env"


settings = Settings()
