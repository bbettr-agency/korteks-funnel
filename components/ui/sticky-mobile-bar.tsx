"use client";

import Link from "next/link";
import { Phone } from "lucide-react";

import { siteConfig } from "@/config/site-config";
import { trackEvent, fireAdsConversion } from "@/lib/tracking";

/**
 * Sticky mobile action bar.
 *
 * Mobile only (md:hidden). Primary action (Get Trade Pricing → /get-a-quote)
 * stays one thumb-tap away, with Call as the secondary. Honours the device
 * safe-area so it clears the iOS home indicator. No WhatsApp.
 */
export default function StickyMobileBar() {
  const onCall = () => {
    trackEvent("click_to_call", { location: "sticky_mobile_bar" });
    fireAdsConversion(siteConfig.tracking.callConversionLabel);
  };

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-brand-bone bg-white/95 backdrop-blur-xl md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex items-center gap-2.5 px-3 py-2.5">
        <Link
          href={siteConfig.quotePath}
          className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-full bg-brand-primary px-4 text-sm font-bold text-white shadow-glow active:scale-[0.98]"
        >
          {siteConfig.ctaQuote}
        </Link>
        <a
          href={siteConfig.phoneLink}
          onClick={onCall}
          aria-label={`Call ${siteConfig.phoneDisplay}`}
          className="inline-flex min-h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full border border-brand-ink/20 text-brand-ink active:scale-[0.98]"
        >
          <Phone className="h-5 w-5 text-brand-primary" />
        </a>
      </div>
    </div>
  );
}
