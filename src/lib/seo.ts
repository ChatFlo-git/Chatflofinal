import type { Metadata } from "next";
import { site } from "@/content/site";

interface PageMetaInput {
  title: string;
  description: string;
  path?: string;
  /** Override the OG image path (defaults to dynamic /opengraph-image). */
  image?: string;
}

/** Build per-page metadata with sane OpenGraph + Twitter defaults. */
export function pageMeta({ title, description, path = "", image }: PageMetaInput): Metadata {
  const url = `${site.url}${path}`;
  const fullTitle = path === "" ? `${site.name} — ${site.tagline}` : `${title} | ${site.name}`;
  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      locale: "en_IN",
      type: "website",
      ...(image ? { images: [{ url: image }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}
