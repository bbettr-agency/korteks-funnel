import { siteConfig } from "@/config/site-config";

/**
 * robots.txt — served as a route handler (instead of app/robots.ts) so we can
 * add the Content-Signal line, which Next's Robots metadata type doesn't support.
 *
 * - All crawlers, including AI search/assistant bots (GPTBot, OAI-SearchBot,
 *   ClaudeBot, PerplexityBot, Google-Extended…), are allowed.
 * - /thank-you is NOT disallowed: it carries a meta noindex, and crawlers must
 *   be able to fetch it to see that.
 * - Content-Signal (contentsignals.org): allow search + AI answers that cite
 *   the site. ai-train is left unset — that's the client's call.
 */
export const dynamic = "force-static";

export function GET() {
  const body = [
    "User-Agent: *",
    "Content-Signal: search=yes, ai-input=yes",
    "Allow: /",
    "",
    `Sitemap: ${siteConfig.website}/sitemap.xml`,
    "",
  ].join("\n");
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
