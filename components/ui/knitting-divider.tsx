import { cn } from "@/utils/cn";

/**
 * KnittingDivider — the official uploaded Zaydtex knitting motif
 * (public/images/knit-divider.png) as a single, full-width, edge-to-edge
 * decorative divider between sections. Tiles horizontally so it stays crisp on
 * desktop, tablet and mobile. The one decorative brand element on the site —
 * subtle and premium. Place at page level (between full-width sections) so it
 * spans the whole browser width.
 */
export default function KnittingDivider({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      role="presentation"
      className={cn("w-full select-none bg-white py-6 sm:py-8", className)}
    >
      <div className="knit-strip h-8 w-full opacity-90 sm:h-9" />
    </div>
  );
}
