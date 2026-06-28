import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

import { siteConfig } from "@/config/site-config";
import { footerCta } from "@/config/funnel-config";
import Logo from "@/components/ui/logo";

export default function MinimalFooter() {
  const wordmark = (
    <span className="font-display text-xl font-extrabold lowercase tracking-tight text-brand-cream">
      zayd<span className="text-brand-primaryLight">tex</span>
    </span>
  );

  return (
    <footer id="contact" className="bg-brand-ink text-brand-cream">
      {/* knitting motif top border — the brand textile element */}
      <div className="knit-strip h-8 w-full opacity-90" aria-hidden />

      {/* slim closing CTA — so the footer keeps working */}
      <div className="border-b border-brand-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-center sm:flex-row sm:text-left lg:px-8">
          <p className="font-display text-lg font-bold text-brand-cream">
            {footerCta.text}{" "}
            <span className="text-brand-cream/55">
              Trade &amp; wholesale enquiries welcome.
            </span>
          </p>
          <div className="flex items-center gap-3">
            <Link
              href={siteConfig.quotePath}
              className="group inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-bold text-white shadow-glow transition hover:bg-brand-primaryDark"
            >
              {footerCta.cta}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href={siteConfig.phoneLink}
              className="hidden items-center gap-2 text-sm font-bold text-brand-cream transition hover:text-brand-primaryLight sm:inline-flex"
            >
              <Phone className="h-4 w-4 text-brand-primaryLight" />
              {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-12 md:pb-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <Logo variant="icon" className="h-10 w-auto" markClassName="h-9 w-9" />
              {wordmark}
            </div>
            <p className="mt-5 max-w-xs text-sm leading-7 text-brand-cream/55">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-brand-primaryLight">
              Contact
            </h3>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <a
                href={siteConfig.phoneLink}
                className="inline-flex items-center gap-2.5 font-semibold text-brand-cream transition hover:text-brand-primaryLight"
              >
                <Phone className="h-4 w-4 text-brand-primaryLight" />
                {siteConfig.phoneDisplay}
              </a>
              <a
                href={siteConfig.emailLink}
                className="inline-flex items-center gap-2.5 font-semibold text-brand-cream transition hover:text-brand-primaryLight"
              >
                <Mail className="h-4 w-4 text-brand-primaryLight" />
                {siteConfig.email}
              </a>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-brand-primaryLight">
              Visit
            </h3>
            <p className="mt-4 inline-flex items-start gap-2.5 text-sm leading-6 text-brand-cream/70">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-primaryLight" />
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

        <div className="mt-14 flex flex-col items-center gap-2 border-t border-brand-cream/10 pt-7 text-center text-xs text-brand-cream/40 sm:flex-row sm:justify-between sm:text-left">
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
              className="font-semibold text-brand-cream/55 transition hover:text-brand-primaryLight"
            >
              Bbettr Agency
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
