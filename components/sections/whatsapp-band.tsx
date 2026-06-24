"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";

import { siteConfig } from "@/config/site-config";
import { trackEvent, fireAdsConversion } from "@/lib/tracking";

/**
 * WhatsApp Conversion Band.
 *
 * Captures the form-averse buyer via the lowest-friction channel. In SA,
 * WhatsApp is the default comms channel — many trade buyers will never fill a
 * form but will message a spec or a quick question instantly. The pre-filled
 * message (in site-config) nudges them to self-identify as trade.
 */
export default function WhatsAppBand() {
  const onWhatsApp = () => {
    trackEvent("whatsapp_click", { location: "whatsapp_band" });
    fireAdsConversion(siteConfig.tracking.whatsappConversionLabel);
  };

  return (
    <section className="relative overflow-hidden bg-[#0c1c0f] px-5 py-16 text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0d2a14] via-[#0c1c0f] to-[#0c1c0f]" />
      <div className="pointer-events-none absolute -top-16 right-1/4 h-64 w-64 rounded-full bg-[#25D366]/20 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left"
      >
        <div className="flex items-center gap-5">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-[0_18px_40px_-12px_rgba(37,211,102,0.7)]">
            <MessageCircle className="h-7 w-7" />
          </span>
          <div>
            <h2 className="font-display text-2xl font-bold leading-tight md:text-3xl">
              Prefer to send a quick message?
            </h2>
            <p className="mt-1.5 text-sm leading-6 text-white/65 md:text-base">
              WhatsApp our sales team a spec or a question and get trade pricing
              for ready-made curtains. No forms, no pressure.
            </p>
          </div>
        </div>

        <a
          href={siteConfig.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onWhatsApp}
          className="group inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-8 py-4 text-base font-bold text-white shadow-[0_18px_50px_-18px_rgba(37,211,102,0.8)] transition-all duration-300 hover:scale-105"
        >
          {siteConfig.ctaWhatsApp}
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </motion.div>
    </section>
  );
}
