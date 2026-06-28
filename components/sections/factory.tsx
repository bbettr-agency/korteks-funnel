"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, ShieldCheck } from "lucide-react";

import { factory } from "@/config/funnel-config";
import { siteConfig } from "@/config/site-config";
import { cn } from "@/utils/cn";

/**
 * Factory — answers "do they manufacture, or just resell?" and concentrates the
 * manufacturer proof: the yarn→finished process, 8 quality checks, SA ownership
 * and B-BBEE. Removes the biggest B2B objections in one image-led section.
 */
export default function Factory() {
  return (
    <section
      id="factory"
      className="relative flex min-h-[80vh] items-center overflow-hidden"
    >
      <motion.div
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="absolute inset-0"
      >
        <Image
          src={factory.image}
          alt={factory.imageAlt}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-ink/88 via-brand-ink/60 to-brand-ink/20" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-2xl text-white"
        >
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-primaryLight">
            {factory.eyebrow}
          </p>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            {factory.heading}
          </h2>
          <p className="mt-6 max-w-lg text-base leading-7 text-white/75 md:text-lg">
            {factory.sentence}
          </p>

          {/* process — reinforces real manufacturing, revealed step by step */}
          <div className="mt-8 flex flex-wrap items-center gap-x-2.5 gap-y-3">
            {factory.steps.map((step, i) => {
              const isQc = /quality/i.test(step);
              return (
                <Fragment key={step}>
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + i * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    viewport={{ once: true }}
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] backdrop-blur-md",
                      isQc
                        ? "border-brand-primaryLight/60 bg-brand-primary/25 text-white shadow-[0_10px_28px_-14px_rgba(188,122,46,0.85)]"
                        : "border-white/30 bg-white/[0.08] text-white/90"
                    )}
                  >
                    {isQc && (
                      <ShieldCheck className="h-3.5 w-3.5 text-brand-primaryLight" />
                    )}
                    {step}
                  </motion.span>
                  {i < factory.steps.length - 1 && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.36 + i * 0.12 }}
                      viewport={{ once: true }}
                    >
                      <ChevronRight className="h-4 w-4 shrink-0 text-brand-primaryLight/80" />
                    </motion.span>
                  )}
                </Fragment>
              );
            })}
          </div>

          {/* trust line — SA owned + B-BBEE */}
          <div className="mt-7 inline-flex items-center gap-2.5 text-sm font-semibold text-white/85">
            <ShieldCheck className="h-4 w-4 text-brand-primaryLight" />
            {factory.trustLine}
          </div>

          <div>
            <Link
              href={siteConfig.quotePath}
              className="group mt-9 inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-primary px-8 py-4 text-base font-bold text-white shadow-glow transition-all duration-300 hover:bg-brand-primaryDark"
            >
              {siteConfig.ctaQuote}
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
