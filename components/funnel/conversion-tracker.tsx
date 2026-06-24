"use client";

import { useEffect } from "react";

import { siteConfig } from "@/config/site-config";
import { trackEvent, fireAdsConversion } from "@/lib/tracking";

/**
 * Fires the primary lead conversion on the /thank-you page (where the GHL form
 * redirects after a successful submission). No-op while IDs are placeholders.
 */
export default function ConversionTracker() {
  useEffect(() => {
    trackEvent("generate_lead", {
      form: "ready-made-curtains-trade",
      currency: "ZAR",
    });
    fireAdsConversion(siteConfig.tracking.leadConversionLabel);
  }, []);

  return null;
}
