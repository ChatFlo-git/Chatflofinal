// Central site configuration. Edit values here to update across the whole site.

export const site = {
  name: "ChatFlo",
  tagline: "Your business, on WhatsApp",
  description:
    "ChatFlo is a WhatsApp-first platform for Indian salons, clinics, restaurants, coaching centres and small businesses. Booking, reminders, payments and customer updates — all on WhatsApp, with one simple dashboard.",
  // Public site URL — set NEXT_PUBLIC_SITE_URL in production.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://chatflo.in",
  locale: "en",
  // Locales planned for i18n. English live at launch.
  locales: ["en", "ml", "hi"] as const,

  // WhatsApp business number in international format, digits only (no +, no spaces).
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "917356062037",
  whatsappDefaultMessage:
    "Hi ChatFlo! I'd like to know more about running my business on WhatsApp.",

  email: "support@chatflo.in",
  city: "Kochi, Kerala",
  madeIn: "Made in Kerala 🇮🇳",

  // Analytics — fill one of these to enable. Empty = disabled.
  analytics: {
    ga4Id: process.env.NEXT_PUBLIC_GA4_ID ?? "",
    plausibleDomain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? "",
  },
} as const;

export const nav = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
] as const;

/** Build a wa.me click-to-chat link with a prefilled message. */
export function waLink(message?: string): string {
  const text = encodeURIComponent(message ?? site.whatsappDefaultMessage);
  return `https://wa.me/${site.whatsappNumber}?text=${text}`;
}
