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

export interface LeadPayload {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  businessType: string;
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
      body: JSON.stringify(payload),
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
