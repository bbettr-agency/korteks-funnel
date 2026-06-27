"use client";

import { motion } from "framer-motion";

import { whyZaydtex } from "@/config/funnel-config";
import Icon from "@/components/ui/icon";

export default function WhyZaydtex() {
  return (
    <section
      id="why"
      className="relative bg-brand-mist px-6 py-24 text-brand-ink md:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="text-xs font-bold uppercase tracking-[0.22em] text-brand-primary">
            Why Zaydtex
          </div>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Africa&apos;s leading curtain manufacturer.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {whyZaydtex.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true, margin: "-60px" }}
              className="stitch-border group relative rounded-3xl border border-brand-primary/10 bg-brand-cream p-8 shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary transition-colors duration-500 group-hover:bg-brand-primary group-hover:text-brand-cream">
                <Icon name={item.icon} className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-bold text-brand-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-brand-ink/65">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-sm font-medium text-brand-ink/55">
          Supplying retailers, wholesalers, designers, developers and hospitality
          groups nationwide.
        </p>
      </div>
    </section>
  );
}
