import nodemailer from 'nodemailer';

export type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeField(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function parseContactPayload(body: unknown): ContactPayload {
  const input = typeof body === 'object' && body !== null ? body : {};

  const name = normalizeField((input as Record<string, unknown>).name);
  const email = normalizeField((input as Record<string, unknown>).email);
  const subject = normalizeField((input as Record<string, unknown>).subject);
  const message = normalizeField((input as Record<string, unknown>).message);

  if (!name || !email || !subject || !message) {
    throw new Error('All fields are required');
  }

  if (!emailRegex.test(email)) {
    throw new Error('Invalid email address');
  }

  return { name, email, subject, message };
}

function getTransporter() {
  const user = process.env.EMAIL_USER?.trim();
  const pass = process.env.EMAIL_PASS?.replace(/\s+/g, '');

  if (!user || !pass) {
    throw new Error('Email service is not configured');
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user,
      pass,
    },
  });
}

export async function sendContactEmail(payload: ContactPayload) {
  const transporter = getTransporter();
  const recipient = process.env.EMAIL_USER?.trim();

  if (!recipient) {
    throw new Error('Email recipient is not configured');
  }

  const safeSubject = escapeHtml(payload.subject);
  const safeName = escapeHtml(payload.name);
  const safeEmail = escapeHtml(payload.email);
  const safeMessage = escapeHtml(payload.message).replace(/\n/g, '<br />');

  await transporter.sendMail({
    from: `"Loay Portfolio Contact" <${recipient}>`,
    to: recipient,
    replyTo: payload.email,
    subject: `[Portfolio] ${payload.subject}`,
    text: [
      'New portfolio contact submission',
      '',
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Topic: ${payload.subject}`,
      '',
      'Message:',
      payload.message,
    ].join('\n'),
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111">
        <h2>New portfolio contact submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Topic:</strong> ${safeSubject}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      </div>
    `,
  });
}
