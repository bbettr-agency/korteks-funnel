"use client";

import { motion } from "framer-motion";

import { whoWeSupply } from "@/config/funnel-config";
import Icon from "@/components/ui/icon";

/**
 * Who We Supply — the buyer self-identification moment.
 * Answers "do they supply businesses like mine?" in one glance, so the visitor
 * gives themselves permission to keep going and request trade pricing.
 * A compact strip — relevance, not length.
 */
export default function WhoWeSupply() {
  return (
    <section id="who-we-supply" className="bg-brand-cream px-6 py-14 md:py-16 lg:px-8">
      <div className="mx-auto max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-50px" }}
          className="mx-auto max-w-xl text-base font-medium text-brand-ink/70 md:text-lg"
        >
          {whoWeSupply.intro}
        </motion.p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-5">
          {whoWeSupply.buyers.map((buyer, i) => (
            <motion.div
              key={buyer.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: "-40px" }}
              className="inline-flex items-center gap-2.5 text-sm font-semibold text-brand-ink/80"
            >
              <Icon name={buyer.icon} className="h-5 w-5 text-brand-primary" />
              {buyer.label}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
