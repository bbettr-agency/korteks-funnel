"use client";

import { Phone } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { siteConfig } from "@/config/site-config";
import { trackEvent, fireAdsConversion } from "@/lib/tracking";
import { cn } from "@/utils/cn";
import Logo from "@/components/ui/logo";

const navLinks = [
  { label: "Our Products", href: "/#products" },
  { label: "Why Zaydtex", href: "/#why" },
];

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

  const wordmark = (
    <span className="font-display text-xl font-extrabold lowercase tracking-tight text-brand-cream">
      zayd<span className="text-brand-accent">tex</span>
    </span>
  );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        isScrolled
          ? "border-b border-brand-cream/10 bg-brand-ink/90 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 lg:px-8",
          isScrolled ? "py-3" : "py-4"
        )}
      >
        <Link href="/" className="flex items-center" aria-label={siteConfig.businessName}>
          <Logo variant="primary" className="h-9 w-auto sm:h-10" markClassName="h-9 w-9" wordmark={wordmark} />
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-brand-cream/75 transition hover:text-brand-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href={siteConfig.phoneLink}
              onClick={onCall}
              aria-label={`Call ${siteConfig.phoneDisplay}`}
              className="hidden items-center gap-2 text-sm font-bold text-brand-cream transition hover:text-brand-accent sm:inline-flex"
            >
              <Phone className="h-4 w-4 text-brand-accent" />
              {siteConfig.phoneDisplay}
            </a>
            <Link
              href={siteConfig.quotePath}
              className="inline-flex items-center rounded-full bg-brand-primary px-5 py-2.5 text-sm font-bold text-brand-cream shadow-glow transition hover:bg-brand-primaryDark"
            >
              {siteConfig.ctaQuote}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
