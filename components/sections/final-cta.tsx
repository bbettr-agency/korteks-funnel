"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Phone, ArrowRight } from "lucide-react";

import { siteConfig } from "@/config/site-config";
import { heroContent } from "@/config/funnel-config";
import { trackEvent, fireAdsConversion } from "@/lib/tracking";

export default function FinalCta() {
  const onCall = () => {
    trackEvent("click_to_call", { location: "final_cta" });
    fireAdsConversion(siteConfig.tracking.callConversionLabel);
  };

  return (
    <section className="relative overflow-hidden bg-brand-ink px-6 py-20 text-white md:py-28 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-charcoal via-brand-ink to-brand-charcoal" />
      <div className="absolute inset-0 bg-radial-glow" />
      <div className="pointer-events-none absolute -bottom-20 right-1/4 h-80 w-80 rounded-full bg-brand-accent/10 blur-[130px]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        <div className="inline-flex items-center gap-2.5 rounded-full border border-brand-accent/30 bg-brand-accent/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
          Trade & Wholesale Enquiries
        </div>

        <h2 className="mt-6 max-w-2xl font-display text-3xl font-bold leading-[1.08] tracking-tight md:text-4xl lg:text-5xl">
          Request a curtain supply quote.
        </h2>

        <p className="mt-5 max-w-xl text-base leading-7 text-white/70 md:text-lg">
          Send your requirements and our team will come back with trade /
          wholesale pricing, MOQs and lead times. No obligation — we reply within
          1 business day.
        </p>

        <ul className="mt-7 grid gap-3 text-left sm:grid-cols-2">
          {heroContent.trustPoints.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-accent/15 text-brand-accent">
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
              </span>
              <span className="text-sm font-medium leading-6 text-white/85">
                {point}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Link
            href={siteConfig.quotePath}
            className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-accent px-8 py-4 text-base font-bold text-brand-ink shadow-accent transition-all duration-300 hover:bg-white"
          >
            {siteConfig.cta}
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <a
            href={siteConfig.phoneLink}
            onClick={onCall}
            className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-brand-accent/60 hover:bg-white/10"
          >
            <Phone className="h-5 w-5 text-brand-accent" />
            Call {siteConfig.phoneDisplay}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
