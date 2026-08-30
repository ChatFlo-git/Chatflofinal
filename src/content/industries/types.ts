import type { ChatMessage } from "@/components/ChatMockup";

// Content shape for a single industry page. One object per vertical drives the
// entire /industries/[slug] template — no code changes needed to add a vertical.
// See README "Adding a new industry vertical".

export interface IndustryFAQ {
  q: string;
  a: string;
}

export interface IndustryFeature {
  icon: string;
  title: string;
  description: string;
}

export interface IndustryTestimonial {
  quote: string;
  name: string;
  role: string;
}

export interface IndustryContent {
  /** Must match a slug in verticals.ts */
  slug: string;
  /** SEO + hero */
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heroHeadline: string;
  heroSubheadline: string;
  /** Pain points this vertical feels today. */
  painPoints: string[];
  /** Features mapped to this vertical's language. */
  features: IndustryFeature[];
  /** A realistic WhatsApp conversation for this vertical. */
  chat: {
    title: string;
    contactName: string;
    messages: ChatMessage[];
  };
  /** Step-by-step use-case walkthrough. */
  useCase: {
    title: string;
    steps: { title: string; description: string }[];
  };
  /** Optional testimonial. Leave undefined to render a placeholder slot. */
  testimonial?: IndustryTestimonial;
  faqs: IndustryFAQ[];
}
