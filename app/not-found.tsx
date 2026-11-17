import type { Metadata } from "next";
import Link from "next/link";

import { siteConfig } from "@/config/site-config";
import MinimalHeader from "@/components/funnel/minimal-header";
import MinimalFooter from "@/components/funnel/minimal-footer";

export const metadata: Metadata = {
  // Next.js adds <meta name="robots" content="noindex"> to 404s itself.
  title: `Page not found | ${siteConfig.businessName}`,
};

export default function NotFound() {
  return (
    <>
      <MinimalHeader />
      <main className="flex min-h-[70vh] items-center bg-brand-cream px-6 pb-20 pt-32 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-primary">
            404
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-brand-ink sm:text-5xl">
            We couldn&apos;t find that page
          </h1>
          <p className="mt-5 text-base leading-7 text-brand-ink/65">
            It may have moved. Head back to the Zaydtex home page, or request
            trade pricing for curtains, curtain fabric and our full textile range.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-brand-ink/20 px-7 py-3.5 text-sm font-bold text-brand-ink transition hover:bg-brand-ink/[0.04]"
            >
              Home
            </Link>
            <Link
              href={siteConfig.quotePath}
              className="inline-flex items-center justify-center rounded-full bg-brand-primary px-7 py-3.5 text-sm font-bold text-white shadow-glow transition hover:bg-brand-primaryDark"
            >
              {siteConfig.ctaQuote}
            </Link>
          </div>
        </div>
      </main>
      <MinimalFooter />
    </>
  );
}
