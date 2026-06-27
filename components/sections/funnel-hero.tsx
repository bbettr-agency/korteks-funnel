"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

import { siteConfig } from "@/config/site-config";
import { heroContent } from "@/config/funnel-config";
import { trackEvent, fireAdsConversion } from "@/lib/tracking";

export default function FunnelHero() {
  const onCall = () => {
    trackEvent("click_to_call", { location: "hero" });
    fireAdsConversion(siteConfig.tracking.callConversionLabel);
  };

  return (
    <section id="top" className="relative bg-brand-cream">
      <div className="mx-auto grid min-h-screen w-full grid-cols-1 lg:grid-cols-2">
        {/* LEFT — message */}
        <div className="flex items-center px-6 pb-16 pt-32 sm:px-10 lg:px-14 lg:py-0 xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-primary">
              {heroContent.eyebrow}
            </p>
            <h1 className="mt-6 font-display text-[2.6rem] font-extrabold leading-[1.02] tracking-tight text-brand-ink sm:text-5xl lg:text-6xl xl:text-[4.5rem]">
              {heroContent.headline}
            </h1>
            <p className="mt-7 max-w-md text-base leading-7 text-brand-ink/65 md:text-lg">
              {heroContent.sentence}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href={siteConfig.quotePath}
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-primary px-8 py-4 text-base font-bold text-white shadow-glow transition-all duration-300 hover:bg-brand-primaryDark"
              >
                {siteConfig.ctaQuote}
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href={siteConfig.phoneLink}
                onClick={onCall}
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-brand-ink/20 px-8 py-4 text-base font-bold text-brand-ink transition-all duration-300 hover:border-brand-ink/40 hover:bg-brand-ink/[0.04]"
              >
                <Phone className="h-5 w-5 text-brand-primary" />
                Call Us
              </a>
            </div>
          </motion.div>
        </div>

        {/* RIGHT — full-bleed curtain photography */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-[58vh] lg:min-h-screen"
        >
          <Image
            src={siteConfig.heroImage}
            alt="Premium ready-made curtains by Zaydtex"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          {/* gentle cream feather on the seam (desktop) */}
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-brand-cream to-transparent lg:block" />
        </motion.div>
      </div>
    </section>
  );
}
