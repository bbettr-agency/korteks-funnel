"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Phone, ArrowRight, Clock } from "lucide-react";

import { siteConfig } from "@/config/site-config";
import { heroContent } from "@/config/funnel-config";
import { trackEvent, fireAdsConversion } from "@/lib/tracking";

export default function FunnelHero() {
  const onCall = () => {
    trackEvent("click_to_call", { location: "hero" });
    fireAdsConversion(siteConfig.tracking.callConversionLabel);
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-brand-ink text-white"
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-ink via-brand-charcoal to-brand-ink" />
        <div className="absolute inset-0 bg-radial-glow" />
      </div>

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse at center, black 0%, transparent 78%)",
        }}
      />

      {/* Soft orbs */}
      <div className="pointer-events-none absolute -top-32 right-1/3 h-[480px] w-[480px] rounded-full bg-brand-primary/25 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[360px] w-[360px] rounded-full bg-brand-accent/10 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-7xl grid-cols-1 items-center gap-12 px-6 pb-16 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8 lg:pb-20 lg:pt-32">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-brand-accent/30 bg-brand-accent/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-accent backdrop-blur">
            <span className="flex h-1.5 w-1.5 rounded-full bg-brand-accent shadow-[0_0_8px_rgba(201,162,75,0.9)]" />
            {heroContent.badge}
          </div>

          <h1 className="mt-6 max-w-2xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.5rem]">
            {heroContent.headlineLead}{" "}
            <span className="bg-gradient-to-r from-brand-accent to-brand-accentDark bg-clip-text text-transparent">
              {heroContent.headlineHighlight}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/70 md:text-lg">
            {heroContent.subheadline}
          </p>

          {/* Trust points */}
          <ul className="mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
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

          {/* Primary + secondary CTA — quote page + phone */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={siteConfig.quotePath}
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-accent px-7 py-4 text-base font-bold text-brand-ink shadow-accent transition-all duration-300 hover:bg-white"
            >
              {siteConfig.ctaQuote}
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href={siteConfig.phoneLink}
              onClick={onCall}
              className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-brand-accent/60 hover:bg-white/10"
            >
              <Phone className="h-5 w-5 text-brand-accent" />
              Call {siteConfig.phoneDisplay}
            </a>
          </div>
        </motion.div>

        {/* RIGHT — quote prompt card (drives to /get-a-quote) */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative">
            <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-brand-accent/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl sm:p-10">
              <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-brand-accent/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-accent">
                Trade & Wholesale Only
              </div>
              <h2 className="font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
                Get trade pricing for ready-made curtains
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/65">
                Send your requirements and our team replies with trade /
                wholesale pricing, MOQs and lead times.
              </p>

              <ul className="mt-6 space-y-2.5">
                {[
                  "Quote tailored to your volume",
                  "Stock-ready or made-to-spec",
                  "No obligation — trade enquiries only",
                ].map((point) => (
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

              <Link
                href={siteConfig.quotePath}
                className="group mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-brand-primary px-7 py-4 text-base font-bold text-white shadow-glow transition-all duration-300 hover:bg-brand-primaryDark"
              >
                {siteConfig.cta}
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-white/50">
                <Clock className="h-3.5 w-3.5 text-brand-accent" />
                We reply within 1 business day · or call {siteConfig.phoneDisplay}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
