import Script from "next/script";
import { site } from "@/content/site";

// Analytics slot. Enabled only when the relevant env var is set, so the site
// ships clean by default. Set NEXT_PUBLIC_GA4_ID or NEXT_PUBLIC_PLAUSIBLE_DOMAIN.
export function Analytics() {
  const { ga4Id, plausibleDomain } = site.analytics;

  if (plausibleDomain) {
    return (
      <Script
        defer
        data-domain={plausibleDomain}
        src="https://plausible.io/js/script.js"
        strategy="afterInteractive"
      />
    );
  }

  if (ga4Id) {
    return (
      <>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`} strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${ga4Id}');`}
        </Script>
      </>
    );
  }

  return null;
}
