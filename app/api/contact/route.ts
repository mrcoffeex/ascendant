import { NextResponse } from "next/server";
import { getMailConfig, sendContactEmail, type ContactPayload } from "@/app/lib/mail";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function parsePayload(body: unknown): ContactPayload | null {
  if (!body || typeof body !== "object") return null;

  const { name, email, message } = body as Record<string, unknown>;

  if (typeof name !== "string" || typeof email !== "string" || typeof message !== "string") {
    return null;
  }

  const trimmed = {
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
  };

  if (!trimmed.name || !trimmed.email || !trimmed.message) return null;
  if (trimmed.name.length > 120 || trimmed.email.length > 254 || trimmed.message.length > 5000) {
    return null;
  }
  if (!isValidEmail(trimmed.email)) return null;

  return trimmed;
}

export async function POST(request: Request) {
  const config = getMailConfig();

  if (!config) {
    return NextResponse.json(
      {
        error:
          "Email is not configured. Add SMTP settings to .env.local (see .env.example).",
      },
      { status: 503 },
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const payload = parsePayload(body);

  if (!payload) {
    return NextResponse.json(
      { error: "Please provide a valid name, email, and project brief." },
      { status: 400 },
    );
  }

  try {
    await sendContactEmail(config, payload);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to send your message right now. Please try again later." },
      { status: 502 },
    );
  }
}
