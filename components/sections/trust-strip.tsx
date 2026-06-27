"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { trustStats, trustMarkers } from "@/config/funnel-config";

/**
 * Trust strip — the strongest profile facts, scannable in seconds.
 * Four headline stats above a row of supporting markers. Cream section.
 */
export default function TrustStrip() {
  return (
    <section className="relative bg-brand-mist px-6 py-14 text-brand-ink lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4 lg:divide-x lg:divide-brand-primary/15">
          {trustStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true, margin: "-40px" }}
              className="px-2 text-center lg:px-6"
            >
              {"prefix" in stat && stat.prefix ? (
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary/70">
                  {stat.prefix}
                </div>
              ) : null}
              <div className="font-display text-4xl font-extrabold tracking-tight text-brand-primary sm:text-5xl">
                {stat.value}
              </div>
              <div className="mx-auto mt-2 max-w-[12rem] text-sm font-medium leading-snug text-brand-ink/60">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3 border-t border-brand-primary/10 pt-9">
          {trustMarkers.map((marker) => (
            <span
              key={marker}
              className="inline-flex items-center gap-2 rounded-full border border-brand-primary/20 bg-brand-cream px-4 py-2 text-xs font-semibold text-brand-ink/75"
            >
              <Check className="h-3.5 w-3.5 text-brand-primary" strokeWidth={3} />
              {marker}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
