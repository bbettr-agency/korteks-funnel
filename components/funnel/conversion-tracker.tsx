"use client";

import { useEffect, useRef } from "react";

import { siteConfig } from "@/config/site-config";
import { trackEvent, fireAdsConversion } from "@/lib/tracking";

/**
 * Fires the primary lead conversion on the /thank-you page (where the lead form
 * redirects after a successful submission).
 *
 * The `generate_lead` dataLayer event is the SINGLE trigger the GTM container
 * (GTM-K6S3H8H9) should fire the Google Ads conversion from — so bind the Ads
 * conversion tag to a Custom Event trigger on `generate_lead` in GTM, NOT to
 * "All Pages". The direct gtag call below stays a no-op while the site's own
 * Ads IDs are placeholders, so the conversion never double-fires: GTM owns it.
 *
 * The ref guard makes this fire EXACTLY ONCE per thank-you visit — it dedupes
 * React's dev double-invoke and any accidental re-mount, while still firing
 * again on a genuine new lead (new page visit = new component instance).
 */
export default function ConversionTracker() {
  const fired = useRef(false);

  useEffect(() => {
    if (fired.current) return;
    fired.current = true;

    trackEvent("generate_lead", {
      form: "ready-made-curtains-trade",
      currency: "ZAR",
    });
    fireAdsConversion(siteConfig.tracking.leadConversionLabel);
  }, []);

  return null;
}
