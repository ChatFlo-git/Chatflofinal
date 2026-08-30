import { pageMeta } from "@/lib/seo";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata = pageMeta({
  title: "About",
  description:
    "ChatFlo is built in Kerala, for India's small businesses — starting with the clinics our own families rely on. Our mission and why we're WhatsApp-first.",
  path: "/about",
});

const values = [
  { icon: "📱", title: "WhatsApp-first, always", description: "We meet people where they already are. No apps to download, no behaviour to change." },
  { icon: "🤝", title: "Built for the front desk", description: "If a busy receptionist can't use it in a minute, it doesn't ship." },
  { icon: "🔒", title: "Trust by default", description: "Official Meta Cloud API, DPDP-aligned, your data exportable and yours." },
  { icon: "🇮🇳", title: "Made for India", description: "₹ pricing, Indian workflows, Malayalam and Hindi on the way." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-50 to-white">
        <Container className="py-16 text-center sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Our story</p>
          <h1 className="mx-auto mt-3 max-w-3xl text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
            Built in Kerala, for the businesses we grew up with
          </h1>
        </Container>
      </section>

      <Section>
        <div className="mx-auto max-w-3xl space-y-5 text-lg text-ink-700">
          <p>
            ChatFlo started with a familiar frustration. Trying to book an appointment for a parent at the local clinic
            in Kerala meant calls that went unanswered, queues that wasted a morning, and follow-ups that simply got
            forgotten. Meanwhile, family working in the Gulf had no easy way to help from afar.
          </p>
          <p>
            The strange part? Everyone — the patient, the receptionist, the doctor, the son in Dubai — was already on
            WhatsApp all day. The tool to fix this was sitting in everyone&apos;s pocket. It just hadn&apos;t been built
            for the clinic yet.
          </p>
          <p>
            So we built it. {site.name} runs a clinic&apos;s entire front desk on WhatsApp — booking, reminders,
            payments, visit summaries and family coordination — backed by a simple dashboard the owner actually enjoys
            opening. No app downloads. No training. No technical knowledge needed.
          </p>
          <p>
            We started with clinics because that&apos;s where the need was sharpest and most personal. But the same
            playbook works for salons, restaurants, tuition centres and dozens of other local businesses — so
            that&apos;s where we&apos;re heading next.
          </p>
        </div>
      </Section>

      <Section className="bg-ink-50">
        <SectionHeading eyebrow="Our mission" title="Put every small business on WhatsApp — properly" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-ink-100 bg-white p-6">
              <div className="text-3xl">{v.icon}</div>
              <h3 className="mt-4 text-lg font-semibold text-ink-900">{v.title}</h3>
              <p className="mt-2 text-sm text-ink-600">{v.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBanner title="Want to see ChatFlo for your business?" />
    </>
  );
}
