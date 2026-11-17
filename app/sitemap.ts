import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site-config";

// Bump these when a page's content meaningfully changes.
const UPDATED = {
  home: "2026-11-17",
  quote: "2026-11-17",
  privacy: "2026-11-17",
};

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteConfig.website}/`,
      lastModified: UPDATED.home,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.website}${siteConfig.quotePath}`,
      lastModified: UPDATED.quote,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.website}${siteConfig.privacyPath}`,
      lastModified: UPDATED.privacy,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
