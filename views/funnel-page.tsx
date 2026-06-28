import MinimalHeader from "@/components/funnel/minimal-header";
import MinimalFooter from "@/components/funnel/minimal-footer";
import StickyMobileBar from "@/components/ui/sticky-mobile-bar";
import KnittingDivider from "@/components/ui/knitting-divider";
import FunnelHero from "@/components/sections/funnel-hero";
import TrustStrip from "@/components/sections/trust-strip";
import WhoWeSupply from "@/components/sections/who-we-supply";
import Factory from "@/components/sections/factory";
import Craftsmanship from "@/components/sections/craftsmanship";
import Products from "@/components/sections/products";
import WhyZaydtex from "@/components/sections/why-zaydtex";
import QuoteBand from "@/components/sections/quote-band";

export default function FunnelPage() {
  return (
    <>
      <MinimalHeader />
      <main>
        {/* What is this company? */}
        <FunnelHero />
        {/* Can I trust them? */}
        <TrustStrip />
        {/* Do they supply businesses like mine? */}
        <WhoWeSupply />
        <KnittingDivider />
        {/* Do they manufacture, or just resell? */}
        <Factory />
        <KnittingDivider />
        {/* Can I trust the quality of what I'm buying? */}
        <Craftsmanship />
        {/* Do they have the products I need? */}
        <Products />
        {/* Why buy from them instead of another supplier? */}
        <WhyZaydtex />
        <KnittingDivider />
        {/* What's the easiest next step? */}
        <QuoteBand />
      </main>
      <MinimalFooter />
      <StickyMobileBar />
    </>
  );
}
