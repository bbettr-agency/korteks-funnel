"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

import { featuredRange, productRanges } from "@/config/funnel-config";
import { siteConfig } from "@/config/site-config";
import SectionContainer from "@/components/layout/section-container";
import SectionHeading from "@/components/ui/section-heading";
import Icon from "@/components/ui/icon";

/**
 * Product Ranges — Ready-Made Curtains lead the offer.
 *
 * The featured curtains card is visually dominant (large, gold-accented) so the
 * page reads as a ready-made-curtain supplier first; the other ranges are
 * subordinated as "we also manufacture…" to support consolidation without
 * diluting the primary offer.
 */
export default function ProductRanges() {
  return (
    <SectionContainer className="bg-brand-mist text-brand-ink">
      <SectionHeading
        tone="light"
        align="center"
        eyebrow="What We Manufacture"
        title="Ready-made curtains — and the ranges to match."
        description="Curtains are our core offer. We also manufacture complementary textile ranges, so trade buyers can consolidate sourcing with one reliable local supplier."
      />

      {/* Featured — Ready-Made Curtains */}
      <motion.a
        href="#quote-form"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-60px" }}
        className="group relative mb-6 grid overflow-hidden rounded-3xl border border-brand-primary/15 bg-white p-8 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-glow md:grid-cols-[1.3fr_1fr] md:p-10"
      >
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-brand-accent/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-accentDark">
            Primary Offer
          </div>
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-primary text-white shadow-glow">
              <Icon name={featuredRange.icon} className="h-7 w-7" />
            </span>
            <h3 className="font-display text-2xl font-bold text-brand-ink md:text-3xl">
              {featuredRange.title}
            </h3>
          </div>
          <p className="mt-5 max-w-xl text-sm leading-7 text-brand-ink/70 md:text-base">
            {featuredRange.description}
          </p>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-primary">
            {siteConfig.cta}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>

        <ul className="mt-8 grid content-center gap-3 rounded-2xl bg-brand-mist/70 p-6 md:mt-0">
          {featuredRange.points.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
              </span>
              <span className="text-sm font-medium leading-6 text-brand-ink/80">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </motion.a>

      {/* Secondary ranges */}
      <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.18em] text-brand-ink/45">
        We also manufacture & supply
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {productRanges.map((item, index) => (
          <motion.a
            key={item.title}
            href="#quote-form"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true, margin: "-60px" }}
            className="group flex flex-col rounded-2xl border border-brand-ink/[0.07] bg-white p-6 shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-brand-primary/25 hover:shadow-glow"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary transition-colors duration-500 group-hover:bg-brand-primary group-hover:text-white">
              <Icon name={item.icon} className="h-5 w-5" />
            </div>
            <h4 className="font-display text-base font-bold text-brand-ink">
              {item.title}
            </h4>
            <p className="mt-1.5 text-sm leading-6 text-brand-ink/60">
              {item.description}
            </p>
          </motion.a>
        ))}
      </div>
    </SectionContainer>
  );
}
