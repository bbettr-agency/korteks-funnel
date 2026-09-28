"use client";

import { useEffect } from "react";

import { captureAttribution } from "@/lib/attribution";

/**
 * Runs the first-touch attribution capture on mount, on every page. Renders
 * nothing. Mounted once in the root layout so paid-traffic params are stored
 * the moment a visitor lands — before they navigate on to the quote form.
 */
export default function AttributionCapture() {
  useEffect(() => {
    captureAttribution();
  }, []);
  return null;
}
