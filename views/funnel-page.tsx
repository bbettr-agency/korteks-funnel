import MinimalHeader from "@/components/funnel/minimal-header";
import MinimalFooter from "@/components/funnel/minimal-footer";
import StickyMobileBar from "@/components/ui/sticky-mobile-bar";
import FunnelHero from "@/components/sections/funnel-hero";
import TrustBar from "@/components/sections/trust-bar";
import WhoWeSupply from "@/components/sections/who-we-supply";
import ProductRanges from "@/components/sections/product-ranges";
import WhyChoose from "@/components/sections/why-choose";
import HowItWorks from "@/components/sections/how-it-works";
import WhatsAppBand from "@/components/sections/whatsapp-band";
import GoogleReviews from "@/components/sections/google-reviews";
import FunnelFaq from "@/components/sections/funnel-faq";
import FinalCta from "@/components/sections/final-cta";

export default function FunnelPage() {
  return (
    <>
      <MinimalHeader />
      <main>
        <FunnelHero />
        <TrustBar />
        <WhoWeSupply />
        <ProductRanges />
        <WhyChoose />
        <HowItWorks />
        <WhatsAppBand />
        <GoogleReviews />
        <FunnelFaq />
        <FinalCta />
      </main>
      <MinimalFooter />
      <StickyMobileBar />
    </>
  );
}
