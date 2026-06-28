"use client";

import { motion } from "framer-motion";

import { trustStats, trustEyebrow } from "@/config/funnel-config";
import Icon from "@/components/ui/icon";
import CountUp from "@/components/ui/count-up";

/**
 * Trust block — the strongest profile facts as animated count-up stats.
 * Premium, compact, scannable: icon · number · label, with thin vertical
 * dividers on desktop and a clean 2×2 stack on mobile.
 */
export default function TrustStrip() {
  return (
    <section className="bg-white px-6 py-14 md:py-16 lg:px-8">
      <p className="mb-10 text-center text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">
        {trustEyebrow}
      </p>
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4 lg:gap-x-0 lg:divide-x lg:divide-brand-bone">
        {trustStats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col items-center px-2 text-center lg:px-8"
          >
            <Icon name={stat.icon} className="h-6 w-6 text-brand-primary" />

            <div className="mt-4 flex min-h-[1rem] items-end">
              {"eyebrow" in stat && stat.eyebrow ? (
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-primary/80">
                  {stat.eyebrow}
                </span>
              ) : null}
            </div>

            <div className="font-display text-4xl font-extrabold leading-none tracking-tight text-brand-ink lg:text-5xl">
              <CountUp value={stat.value} format={stat.format} suffix={stat.suffix} />
            </div>

            <div className="mt-3 text-sm font-medium text-brand-ink/55">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
