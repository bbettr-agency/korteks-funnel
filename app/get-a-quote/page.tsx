import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { buildSchemaGraph } from "@/lib/schema";
import JsonLd from "@/components/seo/json-ld";
import GetAQuotePage from "@/views/get-a-quote-page";

const title = "Get a Trade Quote — Curtains & Textiles";
const description =
  "Request trade or wholesale pricing for ready-made curtains, curtain fabric and the full Zaydtex textile range. Trade only — we reply within 1 business day.";

export const metadata: Metadata = createMetadata({
  title,
  description,
  path: "/get-a-quote",
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={buildSchemaGraph({
          path: "/get-a-quote",
          name: `${title} | Zaydtex`,
          description,
          type: ["WebPage", "ContactPage"],
          breadcrumb: "Get a Trade Quote",
          faq: true,
        })}
      />
      <GetAQuotePage />
    </>
  );
}
