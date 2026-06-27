import { Check, Phone, Clock, Users } from "lucide-react";

import { siteConfig } from "@/config/site-config";
import { quotePage } from "@/config/funnel-config";
import MinimalHeader from "@/components/funnel/minimal-header";
import MinimalFooter from "@/components/funnel/minimal-footer";
import StickyMobileBar from "@/components/ui/sticky-mobile-bar";
import FormPanel from "@/components/funnel/form-panel";

export default function GetAQuotePage() {
  return (
    <>
      <MinimalHeader />
      <main
        id="top"
        className="relative overflow-hidden bg-brand-ink text-brand-cream"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-brand-ink via-brand-charcoal to-brand-ink" />
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="texture-weave animate-weave pointer-events-none absolute inset-0 opacity-[0.04]" />
        <div className="pointer-events-none absolute -top-32 right-1/3 h-[480px] w-[480px] rounded-full bg-brand-primary/20 blur-[150px]" />

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 px-6 pb-24 pt-32 lg:grid-cols-[1fr_0.95fr] lg:gap-16 lg:px-8 lg:pb-28 lg:pt-36">
          {/* LEFT — pitch + trust + who-for + phone */}
          <div>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-brand-accent/30 bg-brand-accent/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-accent backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-accent shadow-[0_0_8px_rgba(208,138,44,0.9)]" />
              {quotePage.badge}
            </div>

            <h1 className="mt-6 max-w-xl font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl">
              {quotePage.headlineLead}{" "}
              <span className="bg-gradient-to-r from-brand-accent to-brand-primaryLight bg-clip-text text-transparent">
                {quotePage.headlineHighlight}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-brand-cream/70 md:text-lg">
              {quotePage.subheadline}
            </p>

            <ul className="mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
              {quotePage.trustChips.map((chip) => (
                <li key={chip} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-accent/15 text-brand-accent">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium leading-6 text-brand-cream/85">
                    {chip}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 max-w-xl rounded-2xl border border-brand-cream/10 bg-brand-cream/[0.04] p-5 backdrop-blur-xl">
              <div className="flex items-center gap-2 text-sm font-bold text-brand-cream">
                <Users className="h-4 w-4 text-brand-accent" />
                {quotePage.whoForTitle}
              </div>
              <p className="mt-2 text-sm leading-6 text-brand-cream/65">
                {quotePage.whoFor}
              </p>
            </div>

            <div className="mt-8">
              <p className="text-sm font-semibold text-brand-cream/55">
                Prefer to talk?
              </p>
              <a
                href={siteConfig.phoneLink}
                className="group mt-2 inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-primary px-7 py-4 text-base font-bold text-brand-cream shadow-glow transition-all duration-300 hover:bg-brand-primaryDark"
              >
                <Phone className="h-5 w-5" />
                Call {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>

          {/* RIGHT — the quote form */}
          <div id="quote-form" className="scroll-mt-28">
            <FormPanel
              instanceId="quote"
              heading="Request Trade / Wholesale Pricing"
              subheading="Ready-made curtains · Tell us what you need and we'll quote it."
            />
            <div className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-brand-cream/55">
              <Clock className="h-3.5 w-3.5 text-brand-accent" />
              {quotePage.responseNote}
            </div>
          </div>
        </div>
      </main>
      <MinimalFooter />
      <StickyMobileBar />
    </>
  );
}
