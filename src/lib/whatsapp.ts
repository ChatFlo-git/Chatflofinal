// Thin client for the WhatsApp Cloud API (the "mouth" — sending messages).
// Receiving is handled by the webhook at src/app/api/whatsapp/webhook/route.ts.

const GRAPH_VERSION = "v22.0";

interface SendOptions {
  /** Override the sending number's Phone Number ID (for multi-clinic later). */
  phoneNumberId?: string;
}

function credentials(opts?: SendOptions) {
  const phoneNumberId = opts?.phoneNumberId ?? process.env.WHATSAPP_PHONE_NUMBER_ID;
  const token = process.env.WHATSAPP_ACCESS_TOKEN;
  if (!phoneNumberId || !token) {
    throw new Error(
      "WhatsApp not configured: set WHATSAPP_PHONE_NUMBER_ID and WHATSAPP_ACCESS_TOKEN.",
    );
  }
  return { phoneNumberId, token };
}

async function postMessage(body: Record<string, unknown>, opts?: SendOptions) {
  const { phoneNumberId, token } = credentials(opts);
  const res = await fetch(
    `https://graph.facebook.com/${GRAPH_VERSION}/${phoneNumberId}/messages`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messaging_product: "whatsapp", ...body }),
    },
  );

  const data = await res.json();
  if (!res.ok) {
    // Surface Meta's error so failures are debuggable in the logs.
    console.error("[wa] send failed", res.status, data);
    throw new Error(data?.error?.message ?? `WhatsApp send failed (${res.status})`);
  }
  return data as { messages?: { id: string }[] };
}

/**
 * Send a free-form text message. Only allowed within the 24-hour customer
 * service window (i.e. after the recipient messaged you). To start a new
 * conversation outside that window, use sendTemplate instead.
 */
export function sendText(to: string, body: string, opts?: SendOptions) {
  return postMessage({ to, type: "text", text: { preview_url: false, body } }, opts);
}

/**
 * Send a pre-approved template message (for business-initiated messages like
 * appointment reminders). `components` carries the variable values, if any.
 */
export function sendTemplate(
  to: string,
  name: string,
  languageCode = "en_US",
  components?: unknown[],
  opts?: SendOptions,
) {
  return postMessage(
    {
      to,
      type: "template",
      template: {
        name,
        language: { code: languageCode },
        ...(components ? { components } : {}),
      },
    },
    opts,
  );
}
