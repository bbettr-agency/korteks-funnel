"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Count-up that animates once, when scrolled into view.
 *
 * format:
 *   "auto"    → grouped integer (1,000 / 19,000)   [default]
 *   "compact" → abbreviated (250K / 1M)
 *   "plain"   → no grouping (1997 — for years)
 * Respects prefers-reduced-motion (jumps straight to the final value).
 */
type CountUpProps = {
  value: number;
  format?: string;
  decimals?: number;
  suffix?: string;
  durationMs?: number;
  className?: string;
};

function formatNumber(n: number, format: string, decimals: number): string {
  if (format === "compact") {
    return new Intl.NumberFormat("en-US", {
      notation: "compact",
      maximumFractionDigits: decimals,
    }).format(n);
  }
  if (format === "plain") return String(Math.round(n));
  return decimals > 0
    ? n.toFixed(decimals)
    : Math.round(n).toLocaleString("en-US");
}

export default function CountUp({
  value,
  format = "auto",
  decimals = 0,
  suffix = "",
  durationMs = 1700,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          if (prefersReduced) {
            setCount(value);
            return;
          }
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / durationMs, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
            setCount(eased * value);
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(value);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.45 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value, durationMs]);

  return (
    <span ref={ref} className={className}>
      {formatNumber(count, format, decimals)}
      {suffix}
    </span>
  );
}
