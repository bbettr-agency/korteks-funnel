"use client";

import { Phone, MessageCircle } from "lucide-react";

import { siteConfig } from "@/config/site-config";
import { trackEvent, fireAdsConversion } from "@/lib/tracking";

/**
 * Sticky mobile Call + WhatsApp bar.
 *
 * Mobile only (md:hidden). For B2B, a phone call is the highest-quality lead, so
 * Call sits on the left as the primary action; WhatsApp (SA's default comms
 * channel) sits on the right. Both fire conversion/dataLayer events. Honours the
 * device safe-area so it clears the iOS home indicator.
 */
export default function StickyMobileBar() {
  const { tracking } = siteConfig;

  const onCall = () => {
    trackEvent("click_to_call", { location: "sticky_mobile_bar" });
    fireAdsConversion(tracking.callConversionLabel);
  };

  const onWhatsApp = () => {
    trackEvent("whatsapp_click", { location: "sticky_mobile_bar" });
    fireAdsConversion(tracking.whatsappConversionLabel);
  };

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-brand-ink/95 backdrop-blur-xl md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-2 gap-2 px-3 py-2.5">
        <a
          href={siteConfig.phoneLink}
          onClick={onCall}
          className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-brand-accent px-4 text-sm font-bold text-brand-ink shadow-accent active:scale-[0.98]"
        >
          <Phone className="h-5 w-5" />
          {siteConfig.ctaCall}
        </a>
        <a
          href={siteConfig.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onWhatsApp}
          className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 text-sm font-bold text-white active:scale-[0.98]"
        >
          <MessageCircle className="h-5 w-5" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
