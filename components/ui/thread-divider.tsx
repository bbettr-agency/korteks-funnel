import { cn } from "@/utils/cn";

/**
 * Braided copper thread divider — a subtle textile brand accent between
 * sections. A faint copper highlight travels slowly along the braid (disabled
 * for prefers-reduced-motion). Decorative only.
 */
export default function ThreadDivider({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "relative h-3.5 w-full overflow-hidden",
        className
      )}
    >
      <div className="thread-braid absolute inset-0 opacity-50" />
      {/* travelling copper shimmer */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 animate-thread bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent blur-[2px]" />
    </div>
  );
}
