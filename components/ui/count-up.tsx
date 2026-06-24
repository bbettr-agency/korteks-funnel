"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Lightweight count-up that animates only when scrolled into view.
 *
 * Conversion purpose: rising numbers read as momentum/credibility and draw the
 * eye to the trust stats. Supports decimals (e.g. a 4.9 rating) and respects
 * prefers-reduced-motion (jumps straight to the final value).
 */
type CountUpProps = {
  value: number;
  decimals?: number;
  suffix?: string;
  durationMs?: number;
  className?: string;
};

export default function CountUp({
  value,
  decimals = 0,
  suffix = "",
  durationMs = 1400,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          if (prefersReduced) {
            setCount(value);
            return;
          }
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / durationMs, 1);
            // easeOutCubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(eased * value);
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(value);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value, durationMs, started]);

  const formatted =
    decimals > 0
      ? count.toFixed(decimals)
      : Math.round(count).toLocaleString();

  return (
    <span ref={ref} className={className}>
      {formatted}
      {suffix}
    </span>
  );
}
