"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import {
  featuredProduct,
  productStyles,
  productsNote,
} from "@/config/funnel-config";
import { siteConfig } from "@/config/site-config";
import Icon from "@/components/ui/icon";

export default function WhatWeMake() {
  return (
    <section
      id="products"
      className="relative overflow-hidden bg-brand-ink px-6 py-24 text-brand-cream md:py-28 lg:px-8"
    >
      <div className="texture-weave animate-weave pointer-events-none absolute inset-0 opacity-[0.035]" />
      <div className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-brand-primary/15 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <div className="text-xs font-bold uppercase tracking-[0.22em] text-brand-accent">
            What We Make
          </div>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Curtains that combine
            <br className="hidden sm:block" /> style and performance.
          </h2>
        </div>

        {/* Featured — Ready-Made Curtains */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-60px" }}
          className="mb-6 grid overflow-hidden rounded-3xl border border-brand-cream/10 bg-brand-charcoal md:grid-cols-[0.9fr_1.1fr]"
        >
          {/* drapery visual */}
          <div className="relative min-h-[200px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal to-brand-ink" />
            <div
              className="absolute inset-0 opacity-90"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, rgba(0,0,0,0.34) 0px, rgba(0,0,0,0) 16px, rgba(212,160,90,0.07) 24px, rgba(0,0,0,0) 32px, rgba(0,0,0,0.34) 40px)",
              }}
            />
            <div className="texture-weave pointer-events-none absolute inset-0 opacity-[0.05]" />
          </div>
          {/* copy */}
          <div className="p-8 md:p-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-accent/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-accent">
              {featuredProduct.tag}
            </span>
            <h3 className="mt-4 font-display text-2xl font-bold md:text-3xl">
              {featuredProduct.title}
            </h3>
            <p className="mt-3 max-w-md text-sm leading-7 text-brand-cream/70 md:text-base">
              {featuredProduct.description}
            </p>
            <Link
              href={siteConfig.quotePath}
              className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-accent"
            >
              {siteConfig.ctaQuote}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        {/* Curtain styles */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {productStyles.map((style, i) => (
            <motion.div
              key={style.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Link
                href={siteConfig.quotePath}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-brand-cream/10 bg-brand-cream/[0.04] p-6 transition-colors duration-500 hover:border-brand-accent/40 hover:bg-brand-cream/[0.07]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/20 text-brand-accent transition-colors duration-500 group-hover:bg-brand-accent group-hover:text-brand-ink">
                  <Icon name={style.icon} className="h-6 w-6" />
                </div>
                <h4 className="font-display text-lg font-bold">{style.title}</h4>
                <p className="mt-1.5 text-sm leading-6 text-brand-cream/60">
                  {style.description}
                </p>
                {/* copper thread hover accent */}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-brand-primary transition-all duration-500 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="mt-7 text-center text-sm text-brand-cream/45">{productsNote}</p>
      </div>
    </section>
  );
}
