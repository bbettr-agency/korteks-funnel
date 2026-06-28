"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, ShieldCheck } from "lucide-react";

import { factory } from "@/config/funnel-config";
import { siteConfig } from "@/config/site-config";

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
          alt="Inside the Zaydtex textile factory"
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

          {/* process — reinforces real manufacturing */}
          <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-3">
            {factory.steps.map((step, i) => (
              <Fragment key={step}>
                <span className="rounded-full border border-white/25 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-white/90 backdrop-blur-sm">
                  {step}
                </span>
                {i < factory.steps.length - 1 && (
                  <ChevronRight className="h-4 w-4 text-brand-primaryLight" />
                )}
              </Fragment>
            ))}
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
