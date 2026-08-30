import crypto from "crypto";
import { sendText } from "@/lib/whatsapp";

// WhatsApp webhooks need the Node.js runtime (we use crypto + raw body for the
// signature check), not the edge runtime.
export const runtime = "nodejs";

/**
 * GET — webhook verification handshake.
 *
 * When you click "Verify and save" in the Meta dashboard, Meta sends a GET
 * request with hub.mode=subscribe, your hub.verify_token, and a hub.challenge.
 * We confirm the token matches WHATSAPP_VERIFY_TOKEN and echo the challenge
 * back as plain text — that's what tells Meta the endpoint is really ours.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  if (mode === "subscribe" && token && token === process.env.WHATSAPP_VERIFY_TOKEN) {
    // Must return the raw challenge string with 200 so Meta accepts the URL.
    return new Response(challenge ?? "", { status: 200 });
  }

  return new Response("Forbidden", { status: 403 });
}

/**
 * POST — incoming events (messages + status updates).
 *
 * Meta calls this every time a patient messages one of your numbers, or a
 * message's delivery status changes. For now we verify the signature, log the
 * incoming message, and ACK with 200. Storing + auto-replying gets built on top
 * of this. Always return 200 quickly, or Meta retries the delivery.
 */
export async function POST(request: Request) {
  // Read the raw body first — the signature is computed over the exact bytes.
  const raw = await request.text();

  if (!verifySignature(request, raw)) {
    return new Response("Invalid signature", { status: 401 });
  }

  let body: WebhookBody;
  try {
    body = JSON.parse(raw) as WebhookBody;
  } catch {
    return new Response("Bad request", { status: 400 });
  }

  // Walk the payload. Each entry can carry multiple changes; each change's value
  // holds the messages + the phone_number_id that identifies WHICH clinic's
  // number received it (the multi-tenant routing key).
  for (const entry of body.entry ?? []) {
    for (const change of entry.changes ?? []) {
      const value = change.value;
      const phoneNumberId = value?.metadata?.phone_number_id;

      for (const message of value?.messages ?? []) {
        // TODO: look up `phoneNumberId` → clinic, store the message, and
        // decide a reply (bot or staff inbox). For now: log it and echo back.
        console.log("[wa] incoming message", {
          phoneNumberId,
          from: message.from,
          type: message.type,
          text: message.text?.body,
          id: message.id,
        });

        // Simple echo bot — proves the two-way loop end to end. The sender just
        // messaged us, so the 24h window is open and free-form text is allowed.
        if (message.type === "text" && message.text?.body) {
          try {
            await sendText(
              message.from,
              `ChatFlo bot 🤖 You said: "${message.text.body}"`,
              { phoneNumberId },
            );
          } catch (err) {
            console.error("[wa] echo reply failed", err);
          }
        }
      }

      for (const status of value?.statuses ?? []) {
        console.log("[wa] status update", {
          phoneNumberId,
          id: status.id,
          status: status.status,
          recipient: status.recipient_id,
        });
      }
    }
  }

  // ACK fast — Meta only needs a 200.
  return new Response("OK", { status: 200 });
}

/**
 * Verifies Meta's X-Hub-Signature-256 header (HMAC-SHA256 of the raw body with
 * your app secret). Skipped if WHATSAPP_APP_SECRET isn't set, so you can test
 * before wiring the secret — but set it before going live.
 */
function verifySignature(request: Request, raw: string): boolean {
  const appSecret = process.env.WHATSAPP_APP_SECRET;
  if (!appSecret) return true; // not configured yet — allow during early testing

  const header = request.headers.get("x-hub-signature-256");
  if (!header) return false;

  const expected =
    "sha256=" + crypto.createHmac("sha256", appSecret).update(raw).digest("hex");

  // Constant-time compare to avoid timing leaks.
  const a = Buffer.from(header);
  const b = Buffer.from(expected);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

// --- Minimal shapes for the bits of the payload we read ---
interface WebhookBody {
  entry?: {
    changes?: {
      value?: {
        metadata?: { phone_number_id?: string; display_phone_number?: string };
        messages?: {
          from: string;
          id: string;
          type: string;
          text?: { body: string };
        }[];
        statuses?: { id: string; status: string; recipient_id: string }[];
      };
    }[];
  }[];
}
