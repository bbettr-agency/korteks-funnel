import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: siteConfig.website,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.website}${siteConfig.quotePath}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
