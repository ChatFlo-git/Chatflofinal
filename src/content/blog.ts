// Simple file-based blog. Add a post by appending to this array.
// `category` should match a vertical group or "Guides" for cross-vertical posts.

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string; // ISO
  readingMinutes: number;
  /** Body as an array of paragraphs / headings. Keeps content dependency-free. */
  body: { type: "h2" | "p"; text: string }[];
}

export const posts: BlogPost[] = [
  {
    slug: "reduce-clinic-no-shows-whatsapp",
    title: "How Kerala clinics cut no-shows by sending reminders on WhatsApp",
    excerpt:
      "Missed appointments quietly cost a typical clinic thousands every month. Here's how a simple WhatsApp reminder flow brings patients back.",
    category: "Healthcare",
    author: "Team ChatFlo",
    date: "2026-05-20",
    readingMinutes: 5,
    body: [
      { type: "p", text: "Every empty slot in your day book is revenue that doesn't come back. For a busy clinic, missed appointments add up to an estimated ₹15,000–₹40,000 a month — and that's before you count the patients who never reschedule." },
      { type: "h2", text: "Why phone-call reminders fail" },
      { type: "p", text: "Calling every patient the day before is slow, and most calls go unanswered. SMS gets ignored. But WhatsApp messages are opened almost every time, usually within minutes." },
      { type: "h2", text: "A reminder flow that actually works" },
      { type: "p", text: "ChatFlo sends an automatic reminder 24 hours and again 2 hours before the appointment, with a one-tap option to confirm or reschedule. Patients who can't make it free up the slot for someone else — instead of just not showing up." },
      { type: "p", text: "The result: fewer gaps, a fuller day book, and a front desk that isn't stuck on the phone all morning." },
    ],
  },
  {
    slug: "nri-families-elderly-parents-care-kerala",
    title: "Caring for elderly parents in Kerala — from the Gulf",
    excerpt:
      "For NRI families, coordinating a parent's healthcare back home is stressful. WhatsApp makes it possible to book, follow up and pay from anywhere.",
    category: "Healthcare",
    author: "Team ChatFlo",
    date: "2026-05-28",
    readingMinutes: 4,
    body: [
      { type: "p", text: "If your parents live in Kerala and you're working in the Gulf, you know the worry: who's making sure Amma gets to her appointment? Did the follow-up happen? Who's paying the clinic?" },
      { type: "h2", text: "One care circle, on WhatsApp" },
      { type: "p", text: "ChatFlo lets a clinic add family members to a patient's care circle. From your own WhatsApp in Dubai or Doha, you can book your mother's checkup in Kochi, get the doctor's visit summary afterwards, and pay the bill — without a single phone call across time zones." },
      { type: "h2", text: "Peace of mind that travels" },
      { type: "p", text: "Distance shouldn't mean being out of the loop. With everything flowing through WhatsApp, the whole family stays informed and involved in a parent's care." },
    ],
  },
  {
    slug: "whatsapp-business-api-vs-personal-number",
    title: "WhatsApp Business API vs a personal number: what clinics should know",
    excerpt:
      "Using a personal WhatsApp number for your clinic feels free — until it gets banned. Here's why the official Cloud API matters.",
    category: "Guides",
    author: "Team ChatFlo",
    date: "2026-06-02",
    readingMinutes: 6,
    body: [
      { type: "p", text: "Plenty of clinics start by using a staff member's personal WhatsApp to message patients. It works — until the number gets flagged for sending too many messages, and suddenly you've lost your whole patient history." },
      { type: "h2", text: "What the official Cloud API gives you" },
      { type: "p", text: "The Meta WhatsApp Cloud API is the sanctioned way for businesses to send messages at scale. You get a verified business profile, automated flows, multiple staff on one number, and no risk of a surprise ban." },
      { type: "h2", text: "Built for compliance" },
      { type: "p", text: "It also makes it far easier to stay aligned with the DPDP Act 2023 — access is controlled, data is encrypted, and consent is handled properly. ChatFlo runs entirely on this official platform." },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export const blogCategories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];
