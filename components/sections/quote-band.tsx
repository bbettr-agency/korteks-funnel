"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

import { siteConfig } from "@/config/site-config";
import { quoteBand } from "@/config/funnel-config";
import { trackEvent, fireAdsConversion } from "@/lib/tracking";

export default function QuoteBand() {
  const onCall = () => {
    trackEvent("click_to_call", { location: "quote_band" });
    fireAdsConversion(siteConfig.tracking.callConversionLabel);
  };

  return (
    <section className="relative overflow-hidden bg-brand-primary px-6 py-16 text-brand-ink md:py-20 lg:px-8">
      {/* dark woven threads on copper */}
      <div className="texture-weave animate-weave pointer-events-none absolute inset-0 opacity-[0.06] [filter:brightness(0)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-primaryDark/30 via-transparent to-brand-primaryDark/30" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-7 text-center md:flex-row md:justify-between md:text-left"
      >
        <div>
          <h2 className="font-display text-2xl font-extrabold leading-tight md:text-3xl lg:text-4xl">
            {quoteBand.question}
          </h2>
          <p className="mt-2 text-sm font-medium text-brand-ink/70 md:text-base">
            {quoteBand.subline}
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Link
            href={siteConfig.quotePath}
            className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-ink px-8 py-4 text-base font-bold text-brand-cream shadow-ink transition-all duration-300 hover:bg-brand-charcoal"
          >
            {siteConfig.ctaQuote}
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <a
            href={siteConfig.phoneLink}
            onClick={onCall}
            className="inline-flex items-center justify-center gap-2.5 rounded-full border border-brand-ink/25 px-8 py-4 text-base font-bold text-brand-ink transition-all duration-300 hover:bg-brand-ink/10"
          >
            <Phone className="h-5 w-5" />
            Call {siteConfig.phoneDisplay}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
