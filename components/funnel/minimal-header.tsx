"use client";

import { Phone } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { siteConfig } from "@/config/site-config";
import { trackEvent, fireAdsConversion } from "@/lib/tracking";
import { cn } from "@/utils/cn";
import Logo from "@/components/ui/logo";

const navLinks = [
  { label: "Products", href: "/#products" },
  { label: "Why Zaydtex", href: "/#why" },
  { label: "Factory", href: "/#factory" },
  { label: "Contact", href: "/#contact" },
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
    <span className="font-display text-xl font-extrabold lowercase tracking-tight text-brand-ink">
      zayd<span className="text-brand-primary">tex</span>
    </span>
  );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        isScrolled
          ? "border-b border-brand-bone bg-white/90 shadow-[0_10px_30px_-20px_rgba(46,33,23,0.45)] backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 lg:px-8",
          isScrolled ? "py-3" : "py-4"
        )}
      >
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label={siteConfig.businessName}
        >
          <Logo variant="icon" className="h-9 w-auto sm:h-10" markClassName="h-9 w-9" />
          {wordmark}
        </Link>

        <div className="flex items-center gap-7">
          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-brand-ink/70 transition hover:text-brand-primary"
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
              className="hidden items-center gap-2 text-sm font-bold text-brand-ink transition hover:text-brand-primary sm:inline-flex"
            >
              <Phone className="h-4 w-4 text-brand-primary" />
              {siteConfig.phoneDisplay}
            </a>
            <Link
              href={siteConfig.quotePath}
              className="inline-flex items-center rounded-full bg-brand-primary px-5 py-2.5 text-sm font-bold text-white shadow-glow transition hover:bg-brand-primaryDark"
            >
              {siteConfig.ctaShort}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
