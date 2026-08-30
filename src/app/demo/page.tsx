import { pageMeta } from "@/lib/seo";
import { waLink } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { DemoForm } from "@/components/DemoForm";

export const metadata = pageMeta({
  title: "Book a Free Demo",
  description:
    "Book a free ChatFlo demo. See how your clinic or business can run booking, reminders and payments on WhatsApp — set up in a day, no lock-in.",
  path: "/demo",
});

const points = [
  "A 20-minute walkthrough, tailored to your business",
  "See real WhatsApp booking, reminders and payments",
  "Get a setup plan — most go live in one day",
  "No obligation, no lock-in, no setup fee",
];

export default function DemoPage() {
  return (
    <section className="bg-gradient-to-b from-brand-50 to-white">
      <Container className="grid items-start gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div className="lg:pt-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Book a free demo</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
            See ChatFlo working for your business
          </h1>
          <p className="mt-5 max-w-md text-lg text-ink-600">
            Tell us a little about yourself and we&apos;ll set up a free, no-pressure demo on WhatsApp.
          </p>
          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-ink-700">
                <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-100 text-xs text-brand-700">
                  ✓
                </span>
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-2xl border border-ink-100 bg-white p-5">
            <p className="text-sm font-medium text-ink-700">Prefer to chat right now?</p>
            <div className="mt-3">
              <Button href={waLink()} variant="whatsapp" whatsappIcon external>
                Chat with us on WhatsApp
              </Button>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-ink-100 bg-white p-6 shadow-xl shadow-brand-900/5 sm:p-8">
          <DemoForm />
        </div>
      </Container>
    </section>
  );
}
