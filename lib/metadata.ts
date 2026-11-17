import type { Metadata } from "next";
import { seoConfig } from "@/config/seo-config";
import { siteConfig } from "@/config/site-config";

type CreateMetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
  noindex?: boolean;
  /** Root-layout defaults: no canonical, so pages without their own metadata
   *  (e.g. the 404) don't inherit the homepage canonical. */
  base?: boolean;
};

export function createMetadata(options: CreateMetadataOptions = {}): Metadata {
  const title = options.title
    ? `${options.title} | ${siteConfig.businessName}`
    : seoConfig.title;

  const description = options.description ?? seoConfig.description;
  const url = options.path
    ? `${siteConfig.website}${options.path}`
    : siteConfig.website;

  return {
    metadataBase: new URL(siteConfig.website),
    title,
    description,
    keywords: seoConfig.keywords,
    authors: [{ name: seoConfig.author }],
    // "index, follow" is the default — only emit robots when opting out, so
    // pages Next marks noindex (404) never get a conflicting second tag.
    ...(options.noindex ? { robots: "noindex, nofollow" } : {}),
    ...(options.base ? {} : { alternates: { canonical: url } }),
    // Browser icon — central, from siteConfig.logo (activates once the square
    // icon file is uploaded; the file-based app/icon.svg covers the gap).
    icons: {
      icon: siteConfig.logo.icon,
      shortcut: siteConfig.logo.icon,
      apple: siteConfig.logo.icon,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.businessName,
      type: "website",
      locale: "en_ZA",
      images: [
        {
          url: siteConfig.logo.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.businessName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: seoConfig.twitterHandle,
      images: [siteConfig.logo.ogImage],
    },
  };
}
