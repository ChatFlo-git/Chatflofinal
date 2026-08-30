import { site } from "@/content/site";

// Renders a <script type="application/ld+json"> block for schema.org markup.
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // schema.org JSON-LD must be inlined; content is fully controlled by us.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    description: site.description,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kochi",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
  };
}

export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: site.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, WhatsApp",
    description: site.description,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: "1499",
      highPrice: "4999",
      offerCount: "3",
    },
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}
