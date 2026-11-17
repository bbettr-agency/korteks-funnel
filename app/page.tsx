import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { buildSchemaGraph } from "@/lib/schema";
import { seoConfig } from "@/config/seo-config";
import JsonLd from "@/components/seo/json-ld";
import FunnelPage from "@/views/funnel-page";

export const metadata: Metadata = createMetadata({ path: "/" });

export default function Home() {
  return (
    <>
      <JsonLd
        data={buildSchemaGraph({
          path: "/",
          name: seoConfig.title,
          description: seoConfig.description,
        })}
      />
      <FunnelPage />
    </>
  );
}
