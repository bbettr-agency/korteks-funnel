import { cn } from "@/utils/cn";

/**
 * Knit braid divider — the official Zaydtex textile motif, used tastefully as a
 * section separator / footer top-border / CTA accent. Never a page background.
 */
export default function KnitDivider({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("knit-braid mx-auto h-[22px] w-44 opacity-60", className)}
    />
  );
}
