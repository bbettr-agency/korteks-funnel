import { siteConfig } from "@/config/site-config";

const { tracking } = siteConfig;

/**
 * Conversion tracking helpers — Google Tag Manager + Google Ads.
 *
 * Everything here is a no-op while the IDs in site-config contain the "XXXX"
 * placeholder token, so the site runs clean before real IDs are pasted in.
 */
export function isPlaceholder(value: string | undefined): boolean {
  return !value || /X{3,}/.test(value);
}

export const gtmEnabled = !isPlaceholder(tracking.gtmId);
export const googleAdsEnabled = !isPlaceholder(tracking.googleAdsId);

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Push a generic event into the GTM dataLayer (safe before GTM loads). */
export function trackEvent(
  event: string,
  params: Record<string, unknown> = {}
): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

/** Fire a Google Ads conversion — only when Ads + a real label are configured. */
export function fireAdsConversion(
  label: string,
  params: Record<string, unknown> = {}
): void {
  if (typeof window === "undefined") return;
  if (!googleAdsEnabled || isPlaceholder(label)) return;
  window.gtag?.("event", "conversion", {
    send_to: `${tracking.googleAdsId}/${label}`,
    ...params,
  });
}
