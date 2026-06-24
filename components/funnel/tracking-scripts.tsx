import Script from "next/script";

import { siteConfig } from "@/config/site-config";
import { gtmEnabled, googleAdsEnabled } from "@/lib/tracking";

/**
 * GTM + Google Ads loaders. Renders nothing while the IDs in site-config are
 * still placeholders — so the page stays clean until real IDs are pasted in.
 */
export default function TrackingScripts() {
  const { tracking } = siteConfig;

  return (
    <>
      {gtmEnabled && (
        <Script id="gtm-loader" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${tracking.gtmId}');`}
        </Script>
      )}

      {googleAdsEnabled && (
        <>
          <Script
            id="gtag-loader"
            src={`https://www.googletagmanager.com/gtag/js?id=${tracking.googleAdsId}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${tracking.googleAdsId}');`}
          </Script>
        </>
      )}
    </>
  );
}

/** GTM <noscript> fallback — render immediately after <body>. */
export function GtmNoScript() {
  if (!gtmEnabled) return null;
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${siteConfig.tracking.gtmId}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="gtm"
      />
    </noscript>
  );
}
