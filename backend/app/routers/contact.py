import smtplib
import logging
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr

from app.config import settings

logger = logging.getLogger(__name__)
router = APIRouter(tags=["contact"])


class ContactRequest(BaseModel):
    name: str
    email: EmailStr
    message: str


class ContactResponse(BaseModel):
    success: bool
    message: str


@router.post("/contact", response_model=ContactResponse)
async def send_contact(body: ContactRequest) -> ContactResponse:
    """
    Receive a contact form submission and optionally email it.
    Falls back gracefully if SMTP is not configured.
    """
    logger.info(f"Contact from {body.email} ({body.name})")

    if not settings.smtp_user or not settings.smtp_pass:
        # Log it, no email configured — good enough for local dev
        logger.warning("SMTP not configured — contact form submission logged only.")
        return ContactResponse(success=True, message="Message received!")

    try:
        msg = MIMEMultipart("alternative")
        msg["Subject"] = f"Portfolio Contact: {body.name}"
        msg["From"] = settings.smtp_user
        msg["To"] = settings.contact_email
        msg["Reply-To"] = body.email

        html = f"""
        <html><body style="font-family: monospace; background: #0a0a0f; color: #f4f1eb; padding: 32px;">
          <h2 style="color: #e8541a;">New message from {body.name}</h2>
          <p><strong>From:</strong> {body.email}</p>
          <hr style="border-color: #2a2a38;" />
          <p style="white-space: pre-wrap;">{body.message}</p>
        </body></html>
        """
        msg.attach(MIMEText(html, "html"))

        with smtplib.SMTP(settings.smtp_host, settings.smtp_port) as server:
            server.starttls()
            server.login(settings.smtp_user, settings.smtp_pass)
            server.send_message(msg)

        return ContactResponse(success=True, message="Message sent successfully!")

    except Exception as e:
        logger.error(f"Email failed: {e}")
        raise HTTPException(status_code=500, detail="Failed to send message. Please try again.")
