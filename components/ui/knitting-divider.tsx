"use client";

import { motion } from "framer-motion";

import { cn } from "@/utils/cn";

/**
 * KnittingDivider — the official uploaded Zaydtex knitting motif
 * (public/images/knit-divider.png) as a single, full-width, edge-to-edge
 * decorative divider between sections. Tiles horizontally so it stays crisp on
 * desktop, tablet and mobile. The one decorative brand element on the site —
 * subtle and premium, with a gentle reveal as it scrolls into view.
 */
export default function KnittingDivider({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      role="presentation"
      className={cn("w-full select-none bg-white py-6 sm:py-8", className)}
    >
      <motion.div
        initial={{ opacity: 0, scaleX: 0.85 }}
        whileInView={{ opacity: 0.9, scaleX: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, margin: "-40px" }}
        className="knit-strip h-8 w-full sm:h-9"
      />
    </div>
  );
}
