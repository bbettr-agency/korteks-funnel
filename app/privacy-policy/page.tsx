import type { Metadata } from "next";
import Link from "next/link";

import { createMetadata } from "@/lib/metadata";
import { buildSchemaGraph } from "@/lib/schema";
import { siteConfig } from "@/config/site-config";
import JsonLd from "@/components/seo/json-ld";
import MinimalHeader from "@/components/funnel/minimal-header";
import MinimalFooter from "@/components/funnel/minimal-footer";

const title = "Privacy Policy";
const description =
  "How Zaydtex (Korteks Textiles Africa (Pty) Ltd) collects, uses and protects personal information under South Africa's POPIA.";
// Update this whenever the policy text changes.
const lastUpdated = "17 November 2026";

export const metadata: Metadata = createMetadata({
  title,
  description,
  path: siteConfig.privacyPath,
});

/*
 * Baseline POPIA privacy notice, written from how this site actually works
 * (quote form → CRM webhook, GTM / Google Ads, Vercel hosting + analytics).
 * The client should have it reviewed, and confirm the Information Officer
 * details; until then enquiries go to the published sales address.
 */
export default function PrivacyPolicyPage() {
  const h2 = "mt-12 font-display text-2xl font-bold text-brand-ink";
  const p = "mt-4 text-base leading-7 text-brand-ink/70";
  const li = "text-base leading-7 text-brand-ink/70";

  return (
    <>
      <JsonLd
        data={buildSchemaGraph({
          path: siteConfig.privacyPath,
          name: `${title} | ${siteConfig.businessName}`,
          description,
          breadcrumb: title,
        })}
      />
      <MinimalHeader />
      <main className="bg-brand-cream px-6 pb-24 pt-32 lg:px-8 lg:pt-36">
        <article className="mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-primary">
            Legal
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-brand-ink sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-brand-ink/55">
            Last updated: <time dateTime="2026-11-17">{lastUpdated}</time>
          </p>

          <p className={p}>
            This policy explains how {siteConfig.businessName}, a brand of{" "}
            {siteConfig.legalName} (&ldquo;we&rdquo;, &ldquo;us&rdquo;),
            collects and uses personal information through{" "}
            {siteConfig.website.replace("https://", "")}, in line with the
            Protection of Personal Information Act 4 of 2013 (POPIA).
          </p>

          <h2 className={h2}>Who is responsible</h2>
          <p className={p}>
            The responsible party is {siteConfig.legalName}, {siteConfig.addressDisplay},{" "}
            {siteConfig.country}. For any privacy question or request, email{" "}
            <a className="font-semibold text-brand-primary underline" href={siteConfig.emailLink}>
              {siteConfig.email}
            </a>{" "}
            or call{" "}
            <a className="font-semibold text-brand-primary underline" href={siteConfig.phoneLink}>
              {siteConfig.phoneDisplay}
            </a>
            .
          </p>

          <h2 className={h2}>What we collect</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li className={li}>
              <strong>Quote requests:</strong> your name, registered business
              name, email address, phone number, the nature of your business,
              the products you are interested in and any message you add.
            </li>
            <li className={li}>
              <strong>How you found us:</strong> campaign details from the link
              you arrived on (for example UTM tags or an ad click ID such as
              gclid), stored in your browser for the session and attached to a
              quote request.
            </li>
            <li className={li}>
              <strong>Site usage:</strong> anonymous or pseudonymous usage
              data (pages viewed, device and browser type, approximate
              location) collected by our analytics and advertising tools.
            </li>
          </ul>

          <h2 className={h2}>Why we use it</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li className={li}>To reply to your enquiry and prepare trade or wholesale pricing.</li>
            <li className={li}>To follow up on that enquiry and manage our trade relationship with you.</li>
            <li className={li}>To understand which pages and advertising campaigns bring in trade enquiries, and to improve the site.</li>
          </ul>
          <p className={p}>
            We process this information because you asked us for a quote, and
            because we have a legitimate interest in running and improving our
            business. We do not sell your personal information.
          </p>

          <h2 className={h2}>Who we share it with</h2>
          <p className={p}>
            We use trusted service providers (operators under POPIA) who
            process information only on our instructions:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6">
            <li className={li}>our website and marketing partner, and the customer-relationship (CRM) platform it operates for us, which receives quote requests;</li>
            <li className={li}>Vercel, which hosts this website and provides privacy-friendly visit statistics;</li>
            <li className={li}>Google (Tag Manager and Ads, plus Analytics where enabled), which measures site usage and advertising performance.</li>
          </ul>
          <p className={p}>
            Some of these providers store data outside South Africa. Where that
            happens we rely on providers that are bound by data-protection
            laws or agreements offering protection comparable to POPIA.
          </p>

          <h2 className={h2}>Cookies</h2>
          <p className={p}>
            Our analytics and advertising tools use cookies and similar
            technologies. You can block or delete cookies in your browser
            settings; the site and the quote form will still work.
          </p>

          <h2 className={h2}>How long we keep it</h2>
          <p className={p}>
            We keep enquiry details for as long as needed to deal with your
            request and our trade relationship, and as required by law. After
            that we delete or de-identify them.
          </p>

          <h2 className={h2}>Security</h2>
          <p className={p}>
            The site is served over encrypted HTTPS, and access to enquiry
            information is limited to the people who need it to help you.
          </p>

          <h2 className={h2}>Your rights</h2>
          <p className={p}>
            You may ask what personal information we hold about you, ask us to
            correct or delete it, object to its use, or withdraw consent to
            marketing at any time. Contact{" "}
            <a className="font-semibold text-brand-primary underline" href={siteConfig.emailLink}>
              {siteConfig.email}
            </a>
            . If you are unhappy with our response, you may complain to the
            Information Regulator (South Africa) at{" "}
            <a
              className="font-semibold text-brand-primary underline"
              href="https://inforegulator.org.za"
              target="_blank"
              rel="noopener noreferrer"
            >
              inforegulator.org.za
            </a>
            .
          </p>

          <h2 className={h2}>Changes</h2>
          <p className={p}>
            We may update this policy from time to time. The date at the top
            shows when it last changed.
          </p>

          <p className="mt-12">
            <Link href={siteConfig.quotePath} className="font-semibold text-brand-primary underline">
              Back to trade pricing
            </Link>
          </p>
        </article>
      </main>
      <MinimalFooter />
    </>
  );
}
