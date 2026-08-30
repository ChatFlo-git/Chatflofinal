import { pageMeta } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata = pageMeta({
  title: "Features",
  description:
    "Everything ChatFlo does for your clinic — appointment booking, reminders, payments, patient records, feedback and analytics, all on WhatsApp.",
  path: "/features",
});

const groups = [
  {
    title: "Patient Experience",
    blurb: "Make it effortless for patients to reach you.",
    items: [
      { icon: "📅", title: "WhatsApp booking", description: "Patients pick a slot in chat — no calls, no app, no forms." },
      { icon: "⏰", title: "Smart reminders", description: "Automatic reminders with one-tap confirm or reschedule." },
      { icon: "💬", title: "Two-way messaging", description: "Answer patient questions from one shared inbox." },
      { icon: "🌍", title: "NRI family coordination", description: "Family abroad can book, follow up and pay for parents' care." },
    ],
  },
  {
    title: "Clinic Operations",
    blurb: "Run the front desk from one calm screen.",
    items: [
      { icon: "🗓️", title: "Unified calendar", description: "Every doctor's schedule and every booking in one view." },
      { icon: "📋", title: "Patient records", description: "History, notes and visit summaries kept neatly per patient." },
      { icon: "👥", title: "Multi-doctor & multi-branch", description: "Separate schedules, shared dashboard across locations." },
      { icon: "🔔", title: "Visit summaries", description: "Send the doctor's notes and next-visit date on WhatsApp." },
    ],
  },
  {
    title: "Payments & Billing",
    blurb: "Get paid faster, with proper records.",
    items: [
      { icon: "💳", title: "Pay-on-WhatsApp", description: "Send a secure UPI/card link; collect fees before the visit." },
      { icon: "🧾", title: "GST invoices", description: "Every payment comes with a proper GST invoice." },
      { icon: "💰", title: "Advance & deposits", description: "Take advance payments for procedures and packages." },
      { icon: "📑", title: "Payment history", description: "See what's collected and what's pending at a glance." },
    ],
  },
  {
    title: "Analytics & Growth",
    blurb: "Understand and grow your practice.",
    items: [
      { icon: "📊", title: "Clinic dashboard", description: "Appointments, payments and no-show trends in one report." },
      { icon: "⭐", title: "Feedback & reviews", description: "Collect feedback and turn it into Google reviews automatically." },
      { icon: "📣", title: "Re-engagement", description: "Bring patients back with checkup and follow-up nudges." },
      { icon: "🌐", title: "Multi-language ready", description: "Built for English now, with Malayalam and Hindi on the way." },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-50 to-white">
        <Container className="py-16 text-center sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Features</p>
          <h1 className="mx-auto mt-3 max-w-3xl text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
            Everything your clinic needs, in the chat patients already use
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-600">
            ChatFlo brings booking, reminders, payments, records and growth tools together — on the official WhatsApp
            Cloud API, with one simple dashboard.
          </p>
        </Container>
      </section>

      {groups.map((group, idx) => (
        <Section key={group.title} className={idx % 2 === 1 ? "bg-ink-50" : undefined}>
          <SectionHeading eyebrow={group.title} title={group.blurb} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {group.items.map((f) => (
              <div key={f.title} className="rounded-2xl border border-ink-100 bg-white p-6">
                <div className="text-3xl">{f.icon}</div>
                <h3 className="mt-4 text-lg font-semibold text-ink-900">{f.title}</h3>
                <p className="mt-2 text-sm text-ink-600">{f.description}</p>
              </div>
            ))}
          </div>
        </Section>
      ))}

      <CtaBanner />
    </>
  );
}
