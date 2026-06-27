"use client";

import { motion } from "framer-motion";

import { trustStats } from "@/config/funnel-config";

export default function TrustStrip() {
  return (
    <section className="bg-white px-6 py-20 md:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-y-12 lg:grid-cols-4 lg:divide-x lg:divide-brand-bone">
          {trustStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: "-60px" }}
              className="px-4 text-center lg:px-8"
            >
              {"prefix" in stat && stat.prefix ? (
                <div className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
                  {stat.prefix}
                </div>
              ) : null}
              <div className="font-display text-5xl font-extrabold tracking-tight text-brand-ink lg:text-6xl">
                {stat.value}
              </div>
              <div className="mx-auto mt-3 max-w-[11rem] text-sm font-medium text-brand-ink/55">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
