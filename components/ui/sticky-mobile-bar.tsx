"use client";

import { Phone } from "lucide-react";

import { siteConfig } from "@/config/site-config";
import { trackEvent, fireAdsConversion } from "@/lib/tracking";

/**
 * Sticky mobile Call bar.
 *
 * Mobile only (md:hidden). For B2B, a phone call is the highest-quality lead, so
 * it stays one thumb-tap away at all times. Fires the click-to-call conversion.
 * Honours the device safe-area so it clears the iOS home indicator.
 * (Quote enquiries live on the /get-a-quote page; WhatsApp is not used.)
 */
export default function StickyMobileBar() {
  const onCall = () => {
    trackEvent("click_to_call", { location: "sticky_mobile_bar" });
    fireAdsConversion(siteConfig.tracking.callConversionLabel);
  };

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-brand-ink/95 backdrop-blur-xl md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="px-3 py-2.5">
        <a
          href={siteConfig.phoneLink}
          onClick={onCall}
          className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-brand-accent px-4 text-sm font-bold text-brand-ink shadow-accent active:scale-[0.98]"
        >
          <Phone className="h-5 w-5" />
          Call {siteConfig.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
