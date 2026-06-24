"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { whoWeSupply } from "@/config/funnel-config";
import { siteConfig } from "@/config/site-config";
import SectionContainer from "@/components/layout/section-container";
import SectionHeading from "@/components/ui/section-heading";
import Icon from "@/components/ui/icon";

/**
 * "Who We Supply" — buyer-segment self-recognition.
 *
 * B2B buyers convert harder when they see themselves named. This also qualifies:
 * the segments make clear Korteks supplies the trade, not single-unit consumers.
 */
export default function WhoWeSupply() {
  return (
    <SectionContainer className="bg-brand-ink text-white">
      <div className="pointer-events-none absolute -top-20 right-1/4 h-72 w-72 rounded-full bg-brand-primary/20 blur-[120px]" />

      <SectionHeading
        tone="dark"
        align="center"
        eyebrow="Who We Supply"
        title={
          <>
            Built for trade buyers,
            <br className="hidden sm:block" /> not the high street.
          </>
        }
        description="Korteks supplies businesses that buy in volume — with the capacity, consistency and lead times the trade depends on."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {whoWeSupply.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true, margin: "-60px" }}
            className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-brand-accent/40 hover:bg-white/[0.07]"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/20 text-brand-accent transition-colors duration-500 group-hover:bg-brand-accent group-hover:text-brand-ink">
              <Icon name={item.icon} className="h-6 w-6" />
            </div>
            <h3 className="font-display text-base font-bold text-white">
              {item.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-6 text-white/65">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href="#quote-form"
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-accent px-8 py-4 text-base font-bold text-brand-ink shadow-accent transition-all duration-300 hover:bg-white"
        >
          {siteConfig.cta}
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </SectionContainer>
  );
}
