"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

import { siteConfig } from "@/config/site-config";
import { quoteBand } from "@/config/funnel-config";
import { trackEvent, fireAdsConversion } from "@/lib/tracking";
import KnitDivider from "@/components/ui/knit-divider";

export default function QuoteBand() {
  const onCall = () => {
    trackEvent("click_to_call", { location: "quote_band" });
    fireAdsConversion(siteConfig.tracking.callConversionLabel);
  };

  return (
    <section className="bg-brand-mist px-6 py-24 md:py-32 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto max-w-3xl text-center"
      >
        <KnitDivider className="mb-10 w-40" />
        <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-brand-ink md:text-5xl lg:text-6xl">
          {quoteBand.heading}
        </h2>
        <p className="mx-auto mt-5 max-w-md text-base leading-7 text-brand-ink/60 md:text-lg">
          {quoteBand.sentence}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
            className="inline-flex items-center justify-center gap-2.5 rounded-full border border-brand-ink/20 px-8 py-4 text-base font-bold text-brand-ink transition-all duration-300 hover:border-brand-ink/40 hover:bg-white"
          >
            <Phone className="h-5 w-5 text-brand-primary" />
            Call Now
          </a>
        </div>
      </motion.div>
    </section>
  );
}
