import MinimalHeader from "@/components/funnel/minimal-header";
import MinimalFooter from "@/components/funnel/minimal-footer";
import StickyMobileBar from "@/components/ui/sticky-mobile-bar";
import KnittingDivider from "@/components/ui/knitting-divider";
import FunnelHero from "@/components/sections/funnel-hero";
import TrustStrip from "@/components/sections/trust-strip";
import Products from "@/components/sections/products";
import WhyZaydtex from "@/components/sections/why-zaydtex";
import Factory from "@/components/sections/factory";
import QuoteBand from "@/components/sections/quote-band";

export default function FunnelPage() {
  return (
    <>
      <MinimalHeader />
      <main>
        <FunnelHero />
        <TrustStrip />
        <KnittingDivider />
        <Products />
        <KnittingDivider />
        <WhyZaydtex />
        <KnittingDivider />
        <Factory />
        <QuoteBand />
      </main>
      <MinimalFooter />
      <StickyMobileBar />
    </>
  );
}
