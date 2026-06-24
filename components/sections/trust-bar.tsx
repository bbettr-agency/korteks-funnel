"use client";

import { motion } from "framer-motion";

import {
  trustStats,
  trustStatsConfirmed,
  trustPillars,
  credibilityMarkers,
} from "@/config/funnel-config";
import CountUp from "@/components/ui/count-up";
import Icon from "@/components/ui/icon";

/**
 * Trust & Credibility bar — directly under the hero.
 *
 * Answers the B2B buyer's first fear ("are they a real manufacturer that can
 * handle my order?") before asking for more attention.
 *
 * HONEST PLACEHOLDERS: until the client confirms real figures
 * (trustStatsConfirmed === false), we show qualitative, client-stated strengths
 * — never invented numbers. Once real numbers exist, flip the flag and the
 * animated CountUp stats render instead.
 */
export default function TrustBar() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-brand-charcoal px-5 py-12 text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute -top-16 left-1/2 h-48 w-[36rem] -translate-x-1/2 rounded-full bg-brand-primary/15 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {trustStatsConfirmed ? (
          // Verified numeric stats
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {trustStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true, margin: "-40px" }}
                className="text-center"
              >
                <div className="font-display text-3xl font-bold text-brand-accent sm:text-4xl">
                  <CountUp
                    value={stat.value}
                    decimals={stat.decimals}
                    suffix={stat.suffix}
                  />
                </div>
                <div className="mt-1.5 text-xs font-medium uppercase tracking-[0.12em] text-white/55 sm:text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          // Qualitative pillars (client-stated strengths, no invented numbers)
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            {trustPillars.map((pillar, index) => (
              <motion.div
                key={pillar.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true, margin: "-40px" }}
                className="flex flex-col items-center gap-3 text-center"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-primary/20 text-brand-accent">
                  <Icon name={pillar.icon} className="h-6 w-6" />
                </span>
                <span className="text-sm font-semibold leading-snug text-white/85">
                  {pillar.label}
                </span>
              </motion.div>
            ))}
          </div>
        )}

        {/* Credibility markers */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 border-t border-white/10 pt-8">
          {credibilityMarkers.map((marker) => (
            <span
              key={marker.label}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-white/80 backdrop-blur"
            >
              <Icon name={marker.icon} className="h-4 w-4 text-brand-accent" />
              {marker.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
