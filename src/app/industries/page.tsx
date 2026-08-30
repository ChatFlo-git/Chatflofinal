import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { verticalGroups, verticalsByGroup } from "@/content/verticals";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata = pageMeta({
  title: "Industries",
  description:
    "ChatFlo is built to run any local business on WhatsApp — starting with clinics, and expanding across healthcare, beauty, food, retail, education and more.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-50 to-white">
        <Container className="py-16 text-center sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Industries</p>
          <h1 className="mx-auto mt-3 max-w-3xl text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
            One platform, built for every local business
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-600">
            We&apos;re live for medical clinics today, and rolling out to dozens more industries. If your customers are
            on WhatsApp, ChatFlo is for you.
          </p>
        </Container>
      </section>

      <Section>
        <div className="space-y-14">
          {verticalGroups.map((group) => (
            <div key={group}>
              <h2 className="mb-6 text-2xl font-bold tracking-tight text-ink-900">{group}</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {verticalsByGroup(group).map((v) => (
                  <Link
                    key={v.slug}
                    href={`/industries/${v.slug}`}
                    className="group flex items-center gap-4 rounded-2xl border border-ink-100 bg-white p-5 transition-colors hover:border-brand-300 hover:bg-brand-50"
                  >
                    <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-brand-50 text-2xl">
                      {v.icon}
                    </span>
                    <span className="flex-1">
                      <span className="block font-semibold text-ink-900">{v.name}</span>
                      <span
                        className={
                          v.live
                            ? "text-xs font-semibold text-brand-600"
                            : "text-xs font-medium text-ink-400"
                        }
                      >
                        {v.live ? "Live now →" : "Coming soon"}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CtaBanner
        title="Don't see your business? We're probably building it."
        subtitle="Tell us what you run and we'll show you how ChatFlo fits — and get you early access."
      />
    </>
  );
}
