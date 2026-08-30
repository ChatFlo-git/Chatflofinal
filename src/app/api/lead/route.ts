import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// nodemailer needs the Node.js runtime (it uses TCP/TLS sockets), not the edge
// runtime. This forces a Node serverless function on Vercel/Netlify.
export const runtime = "nodejs";

export interface LeadPayload {
  name: string;
  business: string;
  businessType: string;
  city: string;
  phone: string;
  preferredTime?: string;
  // Honeypot field — must be empty. Bots tend to fill every field.
  website?: string;
}

function isValidPhone(phone: string): boolean {
  // Accept Indian/international numbers: 8–15 digits, optional leading +.
  const digits = phone.replace(/[\s-]/g, "");
  return /^\+?\d{8,15}$/.test(digits);
}

/**
 * Lead intake endpoint. Validates input, rejects spam (honeypot), then emails
 * the lead to your inbox via SMTP. To change delivery, edit `storeLead`.
 */
export async function POST(request: Request) {
  let data: LeadPayload;
  try {
    data = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: a filled "website" field means a bot. Pretend success, drop it.
  if (data.website && data.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const required: (keyof LeadPayload)[] = ["name", "business", "businessType", "city", "phone"];
  for (const field of required) {
    if (!data[field] || String(data[field]).trim() === "") {
      return NextResponse.json({ ok: false, error: `Missing field: ${field}` }, { status: 400 });
    }
  }

  if (!isValidPhone(data.phone)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid WhatsApp number." }, { status: 400 });
  }

  await storeLead(data);

  return NextResponse.json({ ok: true });
}

async function storeLead(data: LeadPayload): Promise<void> {
  // Drop the honeypot field; never store it.
  const { website: _hp, ...lead } = data;
  void _hp;
  const receivedAt = new Date().toISOString();

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const port = Number(process.env.SMTP_PORT ?? "587");
  const to = process.env.LEAD_NOTIFY_TO ?? "support@chatflo.in";
  const from = process.env.LEAD_NOTIFY_FROM ?? user;

  // No SMTP configured yet — log so leads aren't silently lost in dev.
  if (!host || !user || !pass) {
    console.log("[lead] (SMTP not configured; logging only)", { ...lead, receivedAt });
    return;
  }

  const rows: [string, string][] = [
    ["Name", lead.name],
    ["Business", lead.business],
    ["Business type", lead.businessType],
    ["City", lead.city],
    ["WhatsApp", lead.phone],
    ["Preferred time", lead.preferredTime || "—"],
    ["Received", receivedAt],
  ];

  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");
  const html = `
    <h2 style="margin:0 0 12px;font-family:sans-serif">New demo request</h2>
    <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
      ${rows
        .map(
          ([k, v]) =>
            `<tr><td style="padding:6px 14px 6px 0;color:#647283">${k}</td><td style="padding:6px 0;font-weight:600">${escapeHtml(v)}</td></tr>`,
        )
        .join("")}
    </table>`;

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // 465 = implicit TLS; 587 = STARTTLS
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"ChatFlo Leads" <${from}>`,
      to,
      replyTo: from,
      subject: `New demo request — ${lead.business} (${lead.city})`,
      text,
      html,
    });
  } catch (err) {
    // Don't fail the user's submission if the email send fails — log it.
    console.error("[lead] SMTP send failed", err);
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
