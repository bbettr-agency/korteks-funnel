/**
 * webhook-submit — the standard lead-submission service for the BBETTR
 * Website OS.
 *
 * Forms build a plain LeadPayload and call submitLead(payload); this service
 * owns the transport (POST JSON to the configured webhook, headers, error
 * handling). Swapping the destination is a config change (see
 * @/config/integrations), never a form change.
 */

import { leadWebhook } from "@/config/integrations";
import { getAttribution } from "@/lib/attribution";

export interface LeadPayload {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  /** Backend key preserved for GHL. Now carries the written "Nature of
   *  Business" explanation (free text), not a fixed category. */
  businessType: string;
  /** Required B2B gate — "Yes" (only qualified, registered-business leads
   *  ever reach the webhook; "No" is disqualified before submission). */
  registeredBusiness: string;
  /** Required — comma-separated list of the Zaydtex categories they want.
   *  Serialised to a string (not an array) so GHL can map it to one field. */
  productsInterested: string;
  message: string;
}

export interface SubmitResult {
  ok: boolean;
  status?: number;
  error?: string;
}

/**
 * POST a lead to the configured webhook. Never throws — always resolves to a
 * SubmitResult so callers can drive UI state without try/catch at the call site.
 */
export async function submitLead(payload: LeadPayload): Promise<SubmitResult> {
  try {
    const res = await fetch(leadWebhook.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...leadWebhook.authHeaders,
      },
      // Merge first-touch attribution (gclid / UTM / landing page) so leads are
      // attributable in the CRM and importable as Google Ads offline
      // conversions. Extra keys are ignored by the webhook if unmapped.
      body: JSON.stringify({ ...payload, ...getAttribution() }),
    });

    if (!res.ok) {
      return { ok: false, status: res.status, error: `HTTP ${res.status}` };
    }

    return { ok: true, status: res.status };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : "Network error",
    };
  }
}
