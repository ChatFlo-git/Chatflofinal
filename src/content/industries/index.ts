import type { IndustryContent } from "./types";
import { clinics } from "./clinics";
import { beautyParlours } from "./beauty-parlours";
import { restaurants } from "./restaurants";
import { tuitionCentres } from "./tuition-centres";

// Registry of written industry content. To add a vertical's page content,
// create a file in this folder and register it here. See README.
const registry: Record<string, IndustryContent> = {
  clinics,
  "beauty-parlours": beautyParlours,
  restaurants,
  "tuition-centres": tuitionCentres,
};

export function getIndustryContent(slug: string): IndustryContent | undefined {
  return registry[slug];
}

export function writtenIndustrySlugs(): string[] {
  return Object.keys(registry);
}
