/**
 * Integrations config — external endpoints for the BBETTR Website OS.
 *
 * Lead submissions POST to a GoHighLevel (LeadConnector) Inbound Webhook.
 * GHL handles CRM contact creation + automation workflows server-side, so the
 * frontend only needs the webhook URL. The URL is not a secret and is safe to
 * ship in the client bundle.
 *
 * To reuse this OS for another BBETTR site, override the webhook via env
 * (NEXT_PUBLIC_LEAD_WEBHOOK_URL) — no code changes to the form or service.
 *
 * NO API KEYS live here. If GHL later requires auth headers, supply them via
 * LEAD_WEBHOOK_AUTH env (a JSON object of header name → value) so secrets stay
 * out of source control.
 */

const DEFAULT_LEAD_WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/ObWZhJ1kyodB0ELR4hbi/webhook-trigger/e52ba870-bc45-4915-8756-d8fb379ebe3c";

/** Optional auth headers, configured via env only (never hard-coded). */
function parseAuthHeaders(): Record<string, string> {
  const raw = process.env.LEAD_WEBHOOK_AUTH;
  if (!raw) return {};
  try {
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

export const leadWebhook = {
  url: process.env.NEXT_PUBLIC_LEAD_WEBHOOK_URL || DEFAULT_LEAD_WEBHOOK_URL,
  authHeaders: parseAuthHeaders(),
} as const;
