import MinimalHeader from "@/components/funnel/minimal-header";
import MinimalFooter from "@/components/funnel/minimal-footer";
import StickyMobileBar from "@/components/ui/sticky-mobile-bar";
import FunnelHero from "@/components/sections/funnel-hero";
import TrustStrip from "@/components/sections/trust-strip";
import WhatWeMake from "@/components/sections/what-we-make";
import WhyZaydtex from "@/components/sections/why-zaydtex";
import QuoteBand from "@/components/sections/quote-band";

export default function FunnelPage() {
  return (
    <>
      <MinimalHeader />
      <main>
        <FunnelHero />
        <TrustStrip />
        <WhatWeMake />
        <WhyZaydtex />
        <QuoteBand />
      </main>
      <MinimalFooter />
      <StickyMobileBar />
    </>
  );
}
