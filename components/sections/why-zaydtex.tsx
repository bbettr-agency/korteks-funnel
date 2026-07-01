"use client";

import { motion } from "framer-motion";

import { whyZaydtex } from "@/config/funnel-config";
import Icon from "@/components/ui/icon";

export default function WhyZaydtex() {
  return (
    <section id="why" className="bg-white px-6 py-24 md:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-2xl"
        >
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-primary">
            Why Zaydtex
          </p>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-brand-ink md:text-5xl">
            Built for the long term.
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
          {whyZaydtex.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, margin: "-60px" }}
              className="border-t border-brand-bone pt-7"
            >
              <Icon name={item.icon} className="h-9 w-9 text-brand-primary" />
              <h3 className="mt-6 font-display text-2xl font-bold leading-tight text-brand-ink">
                {item.title}
              </h3>
              <p className="mt-3 max-w-xs text-base leading-7 text-brand-ink/60">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
