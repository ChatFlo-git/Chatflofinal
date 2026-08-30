import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { verticals } from "@/content/verticals";
import { posts } from "@/content/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = [
    "",
    "/features",
    "/pricing",
    "/industries",
    "/about",
    "/demo",
    "/blog",
    "/privacy",
    "/terms",
    "/refund-policy",
  ];

  const entries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  for (const v of verticals) {
    entries.push({
      url: `${site.url}/industries/${v.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: v.live ? 0.8 : 0.4,
    });
  }

  for (const p of posts) {
    entries.push({
      url: `${site.url}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "yearly",
      priority: 0.5,
    });
  }

  return entries;
}
