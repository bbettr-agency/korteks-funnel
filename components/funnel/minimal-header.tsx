"use client";

import { Phone, Factory } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { siteConfig } from "@/config/site-config";
import { trackEvent, fireAdsConversion } from "@/lib/tracking";
import { cn } from "@/utils/cn";

export default function MinimalHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onCall = () => {
    trackEvent("click_to_call", { location: "header" });
    fireAdsConversion(siteConfig.tracking.callConversionLabel);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        isScrolled
          ? "border-b border-white/10 bg-brand-ink/85 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 lg:px-8",
          isScrolled ? "py-3" : "py-4"
        )}
      >
        {/* Brand lockup — no nav links, keeps focus on the quote action */}
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label={siteConfig.businessName}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-primary text-white shadow-glow">
            <Factory className="h-5 w-5" />
          </span>
          <span className="font-display text-base font-bold tracking-tight text-white sm:text-lg">
            Korteks <span className="text-brand-accent">Textiles</span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          {/* Call — icon-only on mobile, number on larger screens */}
          <a
            href={siteConfig.phoneLink}
            onClick={onCall}
            aria-label={`${siteConfig.ctaCall} — ${siteConfig.phoneDisplay}`}
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-sm font-semibold text-white backdrop-blur-md transition hover:border-brand-accent/60 hover:bg-white/10 sm:px-4"
          >
            <Phone className="h-4 w-4 text-brand-accent" />
            <span className="hidden sm:inline">{siteConfig.phoneDisplay}</span>
            <span className="sm:hidden">Call</span>
          </a>

          {/* Primary — Get a Quote */}
          <Link
            href={siteConfig.quotePath}
            className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-4 py-2 text-sm font-bold text-brand-ink shadow-accent transition hover:bg-white"
          >
            {siteConfig.ctaQuote}
          </Link>
        </div>
      </div>
    </header>
  );
}
