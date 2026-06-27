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
      <main id="top" className="bg-brand-cream text-brand-ink">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 px-6 pb-24 pt-32 lg:grid-cols-[1fr_0.95fr] lg:gap-16 lg:px-8 lg:pb-28 lg:pt-36">
          {/* LEFT — pitch + trust + who-for + phone */}
          <div>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-brand-primary/25 bg-brand-primary/[0.07] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
              {quotePage.badge}
            </div>

            <h1 className="mt-6 max-w-xl font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-brand-ink sm:text-5xl">
              {quotePage.headlineLead}{" "}
              <span className="text-brand-primary">{quotePage.headlineHighlight}</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-brand-ink/65 md:text-lg">
              {quotePage.subheadline}
            </p>

            <ul className="mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
              {quotePage.trustChips.map((chip) => (
                <li key={chip} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-primary/12 text-brand-primary">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium leading-6 text-brand-ink/80">
                    {chip}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 max-w-xl rounded-2xl border border-brand-bone bg-white p-5">
              <div className="flex items-center gap-2 text-sm font-bold text-brand-ink">
                <Users className="h-4 w-4 text-brand-primary" />
                {quotePage.whoForTitle}
              </div>
              <p className="mt-2 text-sm leading-6 text-brand-ink/65">
                {quotePage.whoFor}
              </p>
            </div>

            <div className="mt-8">
              <p className="text-sm font-semibold text-brand-ink/55">Prefer to talk?</p>
              <a
                href={siteConfig.phoneLink}
                className="group mt-2 inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-primary px-7 py-4 text-base font-bold text-white shadow-glow transition-all duration-300 hover:bg-brand-primaryDark"
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
            <div className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-brand-ink/55">
              <Clock className="h-3.5 w-3.5 text-brand-primary" />
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
