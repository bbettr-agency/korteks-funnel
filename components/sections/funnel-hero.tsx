"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, Check } from "lucide-react";

import { siteConfig } from "@/config/site-config";
import { heroContent, heroComposition } from "@/config/funnel-config";
import { trackEvent, fireAdsConversion } from "@/lib/tracking";

export default function FunnelHero() {
  const onCall = () => {
    trackEvent("click_to_call", { location: "hero" });
    fireAdsConversion(siteConfig.tracking.callConversionLabel);
  };

  return (
    <section id="top" className="relative bg-brand-cream">
      <div className="mx-auto grid min-h-screen w-full grid-cols-1 lg:grid-cols-2">
        {/* LEFT — message */}
        <div className="flex items-center px-6 pb-16 pt-32 sm:px-10 lg:px-14 lg:py-0 xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-primary">
              {heroContent.eyebrow}
            </p>
            <h1 className="mt-6 font-display text-[2.4rem] font-extrabold leading-[1.05] tracking-tight text-brand-ink sm:text-5xl lg:text-[3.4rem] xl:text-6xl">
              {heroContent.headline}
            </h1>
            <p className="mt-4 font-display text-lg font-bold tracking-tight text-brand-primary sm:text-xl">
              {heroContent.tagline}
            </p>
            <p className="mt-6 max-w-md text-base leading-7 text-brand-ink/65 md:text-lg">
              {heroContent.subheadline}
            </p>

            {/* CTAs */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href={siteConfig.quotePath}
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-primary px-8 py-4 text-base font-bold text-white shadow-glow transition-all duration-300 hover:bg-brand-primaryDark"
              >
                {siteConfig.ctaQuote}
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href={siteConfig.phoneLink}
                onClick={onCall}
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-brand-ink/20 px-8 py-4 text-base font-bold text-brand-ink transition-all duration-300 hover:border-brand-ink/40 hover:bg-brand-ink/[0.04]"
              >
                <Phone className="h-5 w-5 text-brand-primary" />
                Call {siteConfig.phoneDisplay}
              </a>
            </div>

            {/* trust micro-points */}
            <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2.5">
              {heroContent.microPoints.map((point) => (
                <li
                  key={point}
                  className="inline-flex items-center gap-2 text-sm font-medium text-brand-ink/70"
                >
                  <Check className="h-4 w-4 text-brand-primary" strokeWidth={3} />
                  {point}
                </li>
              ))}
            </ul>

            {/* Company slogan — quiet, elegant, understated. */}
            <p className="mt-8 font-display text-lg italic tracking-tight text-brand-ink/45">
              &ldquo;{heroContent.slogan}&rdquo;
            </p>
          </motion.div>
        </div>

        {/* RIGHT — layered factory composition (scale shot + framed panels) */}
        <div className="relative min-h-[62vh] overflow-hidden lg:min-h-screen">
          {/* Dominant "scale" panel — bleeds off the top/right, curved toward
              the copy on the left. This is the LCP image. */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 lg:left-10"
          >
            <div className="relative h-full w-full overflow-hidden rounded-bl-[2.5rem] lg:rounded-l-[3rem]">
              <Image
                src={heroComposition.primary.src}
                alt={heroComposition.primary.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* barely-there brightening so framed panels read cleanly on top */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-brand-ink/10 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Framed panel #1 — machinery / capability. Floats over the lower-left,
              reaching toward the copy like a laid-down print. */}
          <motion.figure
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-6 left-4 w-[52%] max-w-[19rem] rounded-2xl bg-white p-1.5 shadow-2xl ring-1 ring-brand-ink/10 sm:bottom-10 sm:left-8 lg:-left-10 lg:bottom-16"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src={heroComposition.secondary.src}
                alt={heroComposition.secondary.alt}
                fill
                sizes="(max-width: 1024px) 52vw, 20vw"
                className="object-cover"
              />
            </div>
          </motion.figure>

          {/* Framed panel #2 — the product being made. Smaller, upper area.
              Hidden on the smallest screens to keep the stack calm. */}
          <motion.figure
            initial={{ opacity: 0, y: -22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-5 top-8 hidden w-[40%] max-w-[14rem] rounded-2xl bg-white p-1.5 shadow-xl ring-1 ring-brand-ink/10 sm:block lg:right-8 lg:top-24"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src={heroComposition.tertiary.src}
                alt={heroComposition.tertiary.alt}
                fill
                sizes="(max-width: 1024px) 40vw, 15vw"
                className="object-cover"
              />
            </div>
          </motion.figure>

          {/* Capability caption — one quiet, glassy trust line. */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-6 right-4 z-10 inline-flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-xs font-semibold tracking-tight text-brand-ink shadow-lg ring-1 ring-brand-ink/10 backdrop-blur-md sm:bottom-10 sm:right-8 sm:text-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
            {heroComposition.caption}
          </motion.div>

          {/* Soft cream fade on the left so the composition melts into the copy. */}
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-28 bg-gradient-to-r from-brand-cream to-transparent lg:block" />
        </div>
      </div>

      {/* Soft top scrim — keeps the header/nav readable over the photo without
          darkening the hero (cream lightens, never darkens). */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-28 bg-gradient-to-b from-brand-cream/90 via-brand-cream/45 to-transparent"
      />
    </section>
  );
}
