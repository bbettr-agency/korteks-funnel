"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Factory } from "lucide-react";

import { siteConfig } from "@/config/site-config";

/**
 * Central, future-proof logo.
 *
 * Renders the brand image from `siteConfig.logo` (single source of truth). If
 * the file isn't present yet (or fails to load) it falls back to a built-in
 * mark + wordmark lockup, so the site never shows a broken image. Drop the real
 * file into public/images/logo/ with the same filename and it updates everywhere
 * automatically — no code changes.
 *
 * The post-mount ref check catches an image that already 404'd during SSR/before
 * hydration (when a plain onError handler would miss the event).
 */
type LogoProps = {
  /** Which asset from siteConfig.logo to use. */
  variant?: "primary" | "icon";
  /** Classes for the <img> (control height, e.g. "h-9 w-auto"). */
  className?: string;
  /** Classes for the fallback mark box (e.g. "h-9 w-9"). */
  markClassName?: string;
  /** Fallback wordmark shown next to the mark when no image is available. */
  wordmark?: ReactNode;
};

export default function Logo({
  variant = "primary",
  className = "h-9 w-auto",
  markClassName = "h-9 w-9",
  wordmark,
}: LogoProps) {
  const src = siteConfig.logo?.[variant];
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    // Catch a load failure that happened before hydration attached onError.
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, [src]);

  if (src && !failed) {
    return (
      // eslint-disable-next-line @next/next/no-img-element -- logo is config-driven; dimensions are unknown until the client supplies the file
      <img
        ref={imgRef}
        src={src}
        alt={`${siteConfig.businessName} logo`}
        className={className}
        onError={() => setFailed(true)}
      />
    );
  }

  // Fallback lockup — used until the real logo files are uploaded.
  return (
    <span className="flex items-center gap-2.5">
      <span
        className={`flex items-center justify-center rounded-lg bg-brand-primary text-white shadow-glow ${markClassName}`}
      >
        <Factory className="h-5 w-5" />
      </span>
      {wordmark}
    </span>
  );
}
