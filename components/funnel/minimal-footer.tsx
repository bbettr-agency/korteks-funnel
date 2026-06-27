import { Mail, Phone, MapPin, Facebook } from "lucide-react";

import { siteConfig } from "@/config/site-config";
import Logo from "@/components/ui/logo";

export default function MinimalFooter() {
  const wordmark = (
    <span className="font-display text-xl font-extrabold lowercase tracking-tight text-brand-cream">
      zayd<span className="text-brand-accent">tex</span>
    </span>
  );

  return (
    <footer className="relative overflow-hidden border-t border-brand-cream/10 bg-brand-ink px-6 pb-24 pt-16 text-brand-cream md:pb-16 lg:px-8">
      <div className="texture-weave pointer-events-none absolute inset-0 opacity-[0.03]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <Logo variant="icon" className="h-10 w-auto" markClassName="h-9 w-9" />
              {wordmark}
            </div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-brand-cream/55">
              {siteConfig.tagline} Africa&apos;s largest curtain manufacturer,
              supplying the trade nationwide.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-brand-accent">
              Contact
            </h3>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <a
                href={siteConfig.phoneLink}
                className="inline-flex items-center gap-2.5 font-semibold text-brand-cream transition hover:text-brand-accent"
              >
                <Phone className="h-4 w-4 text-brand-accent" />
                {siteConfig.phoneDisplay}
              </a>
              <a
                href={siteConfig.emailLink}
                className="inline-flex items-center gap-2.5 font-semibold text-brand-cream transition hover:text-brand-accent"
              >
                <Mail className="h-4 w-4 text-brand-accent" />
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 font-semibold text-brand-cream transition hover:text-brand-accent"
              >
                <Facebook className="h-4 w-4 text-brand-accent" />
                facebook.com/zaydtex
              </a>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-brand-accent">
              Visit
            </h3>
            <p className="mt-4 inline-flex items-start gap-2.5 text-sm leading-6 text-brand-cream/70">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" />
              <span>
                {siteConfig.addressLine}
                <br />
                {siteConfig.suburb}, {siteConfig.city}
                <br />
                {siteConfig.postalCode}, {siteConfig.country}
              </span>
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-3 border-t border-brand-cream/10 pt-7 text-center text-xs text-brand-cream/40 sm:flex-row sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} {siteConfig.businessName}. All rights
            reserved. · {siteConfig.legalName} · Reg {siteConfig.registrationNumber}
          </p>
          <p>
            Website by{" "}
            <a
              href="https://bbettragency.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-cream/55 transition hover:text-brand-accent"
            >
              Bbettr Agency
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
