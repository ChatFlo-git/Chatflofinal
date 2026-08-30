export interface Plan {
  name: string;
  tagline: string;
  /** Monthly price in ₹. */
  monthly: number;
  /** Annual price billed once (≈ 2 months free). */
  annualTotal: number;
  highlighted?: boolean;
  cta: { label: string; href: string };
  features: string[];
}

export const plans: Plan[] = [
  {
    name: "Starter",
    tagline: "For single-doctor clinics finding their feet on WhatsApp.",
    monthly: 1499,
    annualTotal: 14990,
    cta: { label: "Book a Free Demo", href: "/demo" },
    features: [
      "WhatsApp appointment booking",
      "Automated appointment reminders",
      "Up to 1,000 conversations / month",
      "1 staff login",
      "Simple web dashboard",
      "Email support",
    ],
  },
  {
    name: "Growth",
    tagline: "For busy clinics that want fewer no-shows and faster payments.",
    monthly: 2999,
    annualTotal: 29990,
    highlighted: true,
    cta: { label: "Book a Free Demo", href: "/demo" },
    features: [
      "Everything in Starter",
      "Payment collection on WhatsApp",
      "Patient records & visit summaries",
      "Feedback & Google review requests",
      "Up to 5,000 conversations / month",
      "5 staff logins",
      "Priority WhatsApp support",
    ],
  },
  {
    name: "Pro",
    tagline: "For polyclinics and small hospitals running multiple doctors.",
    monthly: 4999,
    annualTotal: 49990,
    cta: { label: "Book a Free Demo", href: "/demo" },
    features: [
      "Everything in Growth",
      "NRI family coordination",
      "Multi-doctor & multi-branch",
      "Analytics & growth reports",
      "Unlimited staff logins",
      "Up to 15,000 conversations / month",
      "Dedicated onboarding manager",
    ],
  },
];

export const enterprise = {
  name: "Enterprise",
  tagline: "Hospital groups and chains with custom needs.",
  description:
    "Custom conversation volumes, integrations with your HIS/EMR, on-site onboarding and a dedicated success manager.",
  cta: { label: "Talk to us on WhatsApp", href: "" },
};

// Feature comparison matrix. A value can be boolean (✓/–) or a string label.
export const comparison: { feature: string; starter: boolean | string; growth: boolean | string; pro: boolean | string }[] = [
  { feature: "WhatsApp appointment booking", starter: true, growth: true, pro: true },
  { feature: "Automated reminders", starter: true, growth: true, pro: true },
  { feature: "Conversations / month", starter: "1,000", growth: "5,000", pro: "15,000" },
  { feature: "Staff logins", starter: "1", growth: "5", pro: "Unlimited" },
  { feature: "Payment collection", starter: false, growth: true, pro: true },
  { feature: "Patient records & visit summaries", starter: false, growth: true, pro: true },
  { feature: "Feedback & review requests", starter: false, growth: true, pro: true },
  { feature: "NRI family coordination", starter: false, growth: false, pro: true },
  { feature: "Multi-doctor & multi-branch", starter: false, growth: false, pro: true },
  { feature: "Analytics & growth reports", starter: false, growth: false, pro: true },
  { feature: "Support", starter: "Email", growth: "Priority WhatsApp", pro: "Dedicated manager" },
];

export const pricingFaqs = [
  {
    q: "Is there a setup fee?",
    a: "No. Setup and onboarding are included in every plan. Most clinics are live within one working day.",
  },
  {
    q: "What about WhatsApp message costs?",
    a: "WhatsApp charges a small per-conversation fee set by Meta. Your plan includes a generous monthly conversation allowance that covers typical clinic usage. We pass through Meta's rates with no markup beyond your plan, and we'll flag you well before you reach a limit.",
  },
  {
    q: "Do I need to sign a long contract?",
    a: "No lock-in. Plans are month-to-month. Annual billing simply gives you two months free.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. You can cancel at any time and keep access until the end of your billing period. We'll help you export your data.",
  },
  {
    q: "Can I switch plans later?",
    a: "Anytime. Upgrade or downgrade from your dashboard and we'll prorate the difference.",
  },
  {
    q: "Do you offer GST invoices?",
    a: "Yes, every payment comes with a proper GST invoice for your records.",
  },
];
