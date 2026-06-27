"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

import { siteConfig } from "@/config/site-config";
import { heroContent } from "@/config/funnel-config";
import { trackEvent, fireAdsConversion } from "@/lib/tracking";
import ThreadDivider from "@/components/ui/thread-divider";

export default function FunnelHero() {
  const onCall = () => {
    trackEvent("click_to_call", { location: "hero" });
    fireAdsConversion(siteConfig.tracking.callConversionLabel);
  };

  return (
    <section id="top" className="relative overflow-hidden bg-brand-ink text-brand-cream">
      {/* Dark espresso base + warm copper glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-ink via-brand-charcoal to-brand-ink" />
      <div className="absolute inset-0 bg-radial-glow" />
      {/* Slow textile weave, barely-there */}
      <div className="texture-weave animate-weave pointer-events-none absolute inset-0 opacity-[0.04]" />
      <div className="pointer-events-none absolute -top-40 right-1/4 h-[520px] w-[520px] rounded-full bg-brand-primary/20 blur-[150px]" />

      <div className="relative z-10 mx-auto grid min-h-[92svh] max-w-7xl grid-cols-1 items-center gap-14 px-6 pb-20 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8 lg:pt-36">
        {/* LEFT — message */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-brand-accent/30 bg-brand-accent/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-accent backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-accent shadow-[0_0_8px_rgba(208,138,44,0.9)]" />
            {heroContent.badge}
          </div>

          <h1 className="mt-7 font-display text-[2.15rem] font-extrabold uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-[4.5rem]">
            <span className="block text-brand-cream">{heroContent.headlineTop}</span>
            <span className="block bg-gradient-to-r from-brand-accent via-brand-primaryLight to-brand-accent bg-clip-text text-transparent">
              {heroContent.headlineHighlight}
            </span>
            <span className="block text-brand-cream">{heroContent.headlineBottom}</span>
          </h1>

          <p className="mt-7 max-w-md text-base leading-7 text-brand-cream/70 md:text-lg">
            {heroContent.subheadline}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href={siteConfig.quotePath}
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-primary px-8 py-4 text-base font-bold text-brand-cream shadow-glow transition-all duration-300 hover:bg-brand-primaryDark"
            >
              {siteConfig.ctaQuote}
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href={siteConfig.phoneLink}
              onClick={onCall}
              className="inline-flex items-center justify-center gap-2.5 text-base font-bold text-brand-cream transition hover:text-brand-accent"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-cream/20 text-brand-accent transition group-hover:border-brand-accent/60">
                <Phone className="h-5 w-5" />
              </span>
              Call {siteConfig.phoneDisplay}
            </a>
          </div>

          <p className="mt-9 text-xs font-medium uppercase tracking-[0.18em] text-brand-cream/45">
            {heroContent.microStats}
          </p>
        </motion.div>

        {/* RIGHT — premium drapery visual (or client hero photo if supplied) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="pointer-events-none absolute -inset-5 rounded-[2.5rem] bg-brand-primary/15 blur-3xl" />
          <div className="stitch-border relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-brand-cream/10 shadow-ink">
            {siteConfig.heroImage ? (
              // eslint-disable-next-line @next/next/no-img-element -- client-supplied hero photo, dimensions unknown
              <img
                src={siteConfig.heroImage}
                alt="Zaydtex ready-made curtains"
                className="h-full w-full object-cover"
              />
            ) : (
              <>
                {/* fabric base */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal to-brand-ink" />
                {/* curtain pleats */}
                <div
                  className="absolute inset-0 opacity-90"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(90deg, rgba(0,0,0,0.34) 0px, rgba(0,0,0,0) 18px, rgba(212,160,90,0.07) 26px, rgba(0,0,0,0) 34px, rgba(0,0,0,0.34) 44px)",
                  }}
                />
                {/* top lighting */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/10 via-transparent to-black/40" />
                {/* weave overlay */}
                <div className="texture-weave pointer-events-none absolute inset-0 opacity-[0.05]" />
                {/* Z mark */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="animate-float font-display text-[14rem] font-extrabold leading-none text-transparent [-webkit-text-stroke:2px_rgba(208,138,44,0.7)] drop-shadow-[0_0_40px_rgba(181,116,43,0.45)]">
                    Z
                  </span>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </div>

      {/* braided copper thread divider into the trust strip */}
      <ThreadDivider className="relative z-10" />
    </section>
  );
}
