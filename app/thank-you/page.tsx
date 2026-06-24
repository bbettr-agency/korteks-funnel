import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import ThankYouPage from "@/views/thank-you-page";

export const metadata: Metadata = createMetadata({
  title: "Thank You",
  description:
    "Thank you for your trade enquiry to Korteks Textiles Africa. Our team will review your requirements and reply with ready-made curtain pricing shortly.",
  path: "/thank-you",
  noindex: true,
});

export default function Page() {
  return <ThankYouPage />;
}
