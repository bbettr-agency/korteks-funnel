import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import GetAQuotePage from "@/views/get-a-quote-page";

export const metadata: Metadata = createMetadata({
  title: "Get a Trade Quote — Ready-Made Curtains",
  description:
    "Request trade / wholesale pricing for ready-made curtains from Korteks Textiles Africa. Tell us your requirements and we'll reply within 1 business day.",
  path: "/get-a-quote",
});

export default function Page() {
  return <GetAQuotePage />;
}
