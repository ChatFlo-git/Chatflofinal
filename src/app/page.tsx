import Link from "next/link";
import { site, waLink } from "@/content/site";
import { homeFaqs } from "@/content/faqs";
import { plans } from "@/content/pricing";
import { pageMeta } from "@/lib/seo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { FAQ } from "@/components/ui/FAQ";
import { ChatMockup } from "@/components/ChatMockup";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd, faqSchema } from "@/components/JsonLd";

export const metadata = pageMeta({
  title: "WhatsApp booking, reminders & payments for every business",
  description: site.description,
  path: "",
});

const features = [
  { icon: "📅", title: "Booking on WhatsApp", description: "Customers book and reschedule in a WhatsApp chat — no calls, no app to download." },
  { icon: "⏰", title: "Automated reminders", description: "Cut no-shows with reminders that customers actually open and act on." },
  { icon: "💳", title: "Payment collection", description: "Collect payments with a secure UPI link in the chat. 3 taps and done." },
  { icon: "📋", title: "Customer records", description: "Every conversation auto-builds a profile — visit history, preferences, notes." },
  { icon: "⭐", title: "Feedback & reviews", description: "Turn happy customers into Google reviews, automatically." },
  { icon: "🏭", title: "Works for any industry", description: "Salons, clinics, restaurants, coaching centres, gyms — one platform, every business." },
];

const steps = [
  { num: "1", title: "Customer messages on WhatsApp", description: "They book, reschedule or ask a question on the number they already use every day." },
  { num: "2", title: "ChatFlo handles it", description: "Booking, reminders, payments and updates happen automatically — on the official WhatsApp Cloud API." },
  { num: "3", title: "You see everything on one dashboard", description: "Today's bookings, payments and messages — in one simple screen for you and your team." },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white">
        <Container className="grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-medium text-brand-700 ring-1 ring-brand-100">
              💇 Salons · 🩺 Clinics · 🍽️ Restaurants · 📚 Coaching — and 200+ more
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl lg:text-[3.4rem] lg:leading-[1.1]">
              Your business, on WhatsApp
            </h1>
            <p className="mt-5 max-w-xl text-lg text-ink-600">
              Let customers book, get reminders and pay — all on WhatsApp. No app to download. Your customers already
              have it. You see everything on one simple dashboard.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/demo" variant="primary" size="lg">
                Book a Free Demo
              </Button>
              <Button href={waLink()} variant="whatsapp" whatsappIcon external size="lg">
                Chat with us on WhatsApp
              </Button>
            </div>
            <p className="mt-4 text-sm text-ink-500">Set up in 10 minutes · No technical knowledge needed · No lock-in</p>
          </div>

          <div className="lg:pl-8">
            <ChatMockup
              contactName="Glow Studio"
              status="ChatFlo Assistant · online"
              messages={[
                { from: "in", text: "Hi, I'd like to book a haircut this Saturday", time: "9:14 AM" },
                { from: "out", text: "Hey! 💇 Here are Saturday's available slots:", time: "9:14 AM" },
                { from: "out", text: "", buttons: ["Sat 10:30 AM", "Sat 1:00 PM", "Sat 4:30 PM"] },
                { from: "in", text: "1:00 PM please", time: "9:15 AM" },
                { from: "out", text: "Booked ✅ Haircut at 1:00 PM with Priya.\nPay ₹300 advance to confirm:\n🔗 pay.chatflo.in/glow", time: "9:15 AM" },
                { from: "in", text: "Paid 👍", time: "9:16 AM" },
                { from: "out", text: "You're all set! Reminder coming a day before 💅", time: "9:16 AM" },
              ]}
            />
          </div>
        </Container>
      </section>

      {/* Trust strip — real, verifiable signals (no fabricated logos) */}
      <div className="border-y border-ink-100 bg-white py-8">
        <Container>
          <p className="text-center text-sm font-medium uppercase tracking-wide text-ink-400">
            Built on trusted, compliant foundations
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            {[
              "Official Meta WhatsApp Cloud API",
              "DPDP Act 2023 compliant",
              "200+ industries supported",
              "Made in Kerala 🇮🇳",
            ].map((badge) => (
              <span
                key={badge}
                className="rounded-full bg-ink-50 px-4 py-2 text-sm font-medium text-ink-600 ring-1 ring-ink-100"
              >
                {badge}
              </span>
            ))}
          </div>
        </Container>
      </div>

      {/* How it works */}
      <Section>
        <SectionHeading
          eyebrow="How it works"
          title="Three steps. No app. No training."
          subtitle="If your customers can use WhatsApp, they can use ChatFlo. So can your team."
        />
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.num} className="rounded-2xl border border-ink-100 bg-white p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-600 text-lg font-bold text-white">
                {s.num}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-ink-900">{s.title}</h3>
              <p className="mt-2 text-ink-600">{s.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Features */}
      <Section className="bg-ink-50">
        <SectionHeading
          eyebrow="Everything in one place"
          title="Stop losing customers to missed calls and forgotten follow-ups"
          subtitle="Six things ChatFlo does for your business, all through the chat your customers already use."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-ink-100 bg-white p-6">
              <div className="text-3xl">{f.icon}</div>
              <h3 className="mt-4 text-lg font-semibold text-ink-900">{f.title}</h3>
              <p className="mt-2 text-ink-600">{f.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/features" variant="secondary" size="lg">
            See all features
          </Button>
        </div>
      </Section>

      {/* NRI spotlight */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <ChatMockup
              contactName="Amma's Care · Sunrise Clinic"
              status="Family care circle"
              messages={[
                { from: "in", text: "Can you book Amma's BP checkup for next week? I'm in Dubai", time: "8:30 PM" },
                { from: "out", text: "Of course 💙 Here are slots for your mother with Dr. Menon:", time: "8:30 PM" },
                { from: "out", text: "", buttons: ["Mon 11:00 AM", "Wed 5:00 PM"] },
                { from: "in", text: "Mon 11 AM. And send me the summary after", time: "8:31 PM" },
                { from: "out", text: "Done ✅ We'll share the doctor's summary here, and the ₹400 fee link below.", time: "8:31 PM" },
                { from: "in", text: "Paid. Thank you so much 🙏", time: "8:32 PM" },
              ]}
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">NRI family coordination</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
              Care for your parents in Kerala, from anywhere in the world
            </h2>
            <p className="mt-4 text-lg text-ink-600">
              A son in the Gulf can book his mother&apos;s checkup in Kochi, receive the doctor&apos;s visit summary, and
              pay the bill — all from his own WhatsApp. The whole family stays in the loop, across any distance.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Add family abroad to a patient's care circle",
                "Book and reschedule on a parent's behalf",
                "Get visit summaries and next-visit dates",
                "Pay clinic fees from anywhere",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink-700">
                  <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-100 text-xs text-brand-700">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="/industries/clinics" variant="primary">
                See it for clinics
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Pricing teaser */}
      <Section className="bg-ink-50">
        <SectionHeading
          eyebrow="Simple pricing"
          title="Plans that fit any business budget"
          subtitle="From ₹1,499/month. No setup fee, no lock-in. Annual billing gets you two months free."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl border bg-white p-7 ${p.highlighted ? "border-brand-500 ring-2 ring-brand-500" : "border-ink-100"}`}
            >
              {p.highlighted && (
                <span className="mb-3 inline-block rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white">
                  Most popular
                </span>
              )}
              <h3 className="text-xl font-bold text-ink-900">{p.name}</h3>
              <p className="mt-1 text-sm text-ink-500">{p.tagline}</p>
              <p className="mt-4">
                <span className="text-3xl font-bold text-ink-900">₹{p.monthly.toLocaleString("en-IN")}</span>
                <span className="text-ink-500">/month</span>
              </p>
              <Link href="/pricing" className="mt-4 inline-block text-sm font-semibold text-brand-600 hover:text-brand-700">
                See what&apos;s included →
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/pricing" variant="primary" size="lg">
            Compare all plans
          </Button>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeading eyebrow="Questions" title="Frequently asked questions" />
        <FAQ items={homeFaqs} />
      </Section>

      <CtaBanner />
    </>
  );
}
