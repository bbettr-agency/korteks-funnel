/**
 * Attribution capture — the standard paid-traffic attribution layer for the
 * BBETTR Website OS.
 *
 * Google Ads (and other paid channels) append click identifiers and UTM tags
 * to the landing URL, e.g. ?gclid=…&utm_source=google&utm_campaign=curtains.
 * Those params usually only exist on the FIRST page a visitor lands on — by the
 * time they navigate to /get-a-quote they're gone. So we capture them on first
 * touch, persist to sessionStorage, and replay them into every lead submission.
 *
 * This makes leads attributable in the CRM and — critically — lets Google Ads
 * import offline conversions via the stored `gclid`. Nothing here renders or
 * blocks; it's a quiet data layer. No PII, no cross-site tracking.
 */

const STORE_KEY = "zt_attribution";

// URL param → clean payload key (camelCase, easy to map in GHL).
const PARAM_MAP: Record<string, string> = {
  gclid: "gclid",
  gbraid: "gbraid",
  wbraid: "wbraid",
  fbclid: "fbclid",
  msclkid: "msclkid",
  utm_source: "utmSource",
  utm_medium: "utmMedium",
  utm_campaign: "utmCampaign",
  utm_term: "utmTerm",
  utm_content: "utmContent",
};

type Store = Record<string, string>;

function read(): Store {
  try {
    return JSON.parse(sessionStorage.getItem(STORE_KEY) || "{}");
  } catch {
    return {};
  }
}

/**
 * Merge any attribution params from the current URL into the first-touch store.
 * First-touch: existing values are never overwritten, so the campaign that
 * originally acquired the visitor is the one credited. Safe to call on every
 * page load; run it as high in the app as possible (see AttributionCapture).
 */
export function captureAttribution(): void {
  if (typeof window === "undefined") return;
  try {
    const params = new URLSearchParams(window.location.search);
    const store = read();
    let changed = false;

    for (const [param, key] of Object.entries(PARAM_MAP)) {
      const value = params.get(param)?.trim();
      if (value && !store[key]) {
        store[key] = value.slice(0, 512);
        changed = true;
      }
    }
    if (!store.landingPage) {
      store.landingPage = window.location.pathname + window.location.search;
      changed = true;
    }
    if (!store.referrer && document.referrer) {
      store.referrer = document.referrer.slice(0, 512);
      changed = true;
    }
    if (changed) sessionStorage.setItem(STORE_KEY, JSON.stringify(store));
  } catch {
    /* private mode / storage disabled — attribution is best-effort */
  }
}

/**
 * The stored attribution plus the page the lead was submitted from. Returns an
 * empty object when nothing was captured, so it can be spread into any payload.
 */
export function getAttribution(): Store {
  if (typeof window === "undefined") return {};
  const store = read();
  return { ...store, pageUri: window.location.href };
}
