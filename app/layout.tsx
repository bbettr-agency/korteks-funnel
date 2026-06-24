import "./globals.css";
import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import { createMetadata } from "@/lib/metadata";
import { organizationSchema, faqSchema } from "@/lib/schema";
import TrackingScripts, {
  GtmNoScript,
} from "@/components/funnel/tracking-scripts";

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = createMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${body.variable} ${display.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#0A1A30" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="bg-brand-ink text-white antialiased">
        <GtmNoScript />
        {children}
        <TrackingScripts />
      </body>
    </html>
  );
}
