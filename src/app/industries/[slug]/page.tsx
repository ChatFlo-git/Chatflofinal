import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { verticals, getVertical } from "@/content/verticals";
import { getIndustryContent } from "@/content/industries";
import type { IndustryContent } from "@/content/industries/types";
import { pageMeta } from "@/lib/seo";
import { site, waLink } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { FAQ } from "@/components/ui/FAQ";
import { Button } from "@/components/ui/Button";
import { ChatMockup } from "@/components/ChatMockup";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd, faqSchema } from "@/components/JsonLd";

// Statically generate a page for every vertical in the master list.
export function generateStaticParams() {
  return verticals.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const vertical = getVertical(slug);
  if (!vertical) return {};
  const content = getIndustryContent(slug);
  return pageMeta({
    title: content?.metaTitle ?? `${vertical.name} on WhatsApp`,
    description:
      content?.metaDescription ??
      `ChatFlo for ${vertical.name.toLowerCase()} — run bookings, reminders and payments on WhatsApp. Coming soon.`,
    path: `/industries/${slug}`,
  });
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const vertical = getVertical(slug);
  if (!vertical) notFound();

  const content = getIndustryContent(slug);

  // Verticals with no written content yet render a lightweight coming-soon page
  // from the same template — so adding content later is the only step needed.
  if (!content) {
    return <ComingSoon name={vertical.name} icon={vertical.icon} slug={slug} />;
  }

  return <IndustryTemplate content={content} live={!!vertical.live} icon={vertical.icon} name={vertical.name} />;
}

function IndustryTemplate({
  content,
  live,
  icon,
  name,
}: {
  content: IndustryContent;
  live: boolean;
  icon: string;
  name: string;
}) {
  return (
    <>
      <JsonLd data={faqSchema(content.faqs)} />

      {!live && (
        <div className="bg-brand-700 py-2.5 text-center text-sm font-medium text-white">
          🚀 ChatFlo for {name.toLowerCase()} is coming soon —{" "}
          <Link href="/demo" className="underline underline-offset-2">
            join early access
          </Link>
        </div>
      )}

      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 to-white">
        <Container className="grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-medium text-brand-700 ring-1 ring-brand-100">
              {icon} {content.eyebrow}
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">{content.heroHeadline}</h1>
            <p className="mt-5 max-w-xl text-lg text-ink-600">{content.heroSubheadline}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/demo" variant="primary" size="lg">
                {live ? "Book a Free Demo" : "Get Early Access"}
              </Button>
              <Button href={waLink(`Hi ChatFlo! I run a ${name.toLowerCase()} and want to know more.`)} variant="whatsapp" whatsappIcon external size="lg">
                Chat with us
              </Button>
            </div>
          </div>
          <div className="lg:pl-8">
            <ChatMockup contactName={content.chat.contactName} messages={content.chat.messages} />
          </div>
        </Container>
      </section>

      {/* Pain points */}
      <Section>
        <SectionHeading eyebrow="The problem" title="Sound familiar?" />
        <div className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
          {content.painPoints.map((p) => (
            <div key={p} className="flex items-start gap-3 rounded-xl border border-ink-100 bg-white p-4 text-ink-700">
              <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-red-50 text-xs text-red-500">
                ✕
              </span>
              {p}
            </div>
          ))}
        </div>
      </Section>

      {/* Features mapped to vertical */}
      <Section className="bg-ink-50">
        <SectionHeading eyebrow="How ChatFlo helps" title="Built around how you actually work" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-ink-100 bg-white p-6">
              <div className="text-3xl">{f.icon}</div>
              <h3 className="mt-4 text-lg font-semibold text-ink-900">{f.title}</h3>
              <p className="mt-2 text-ink-600">{f.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Use case walkthrough */}
      <Section>
        <SectionHeading eyebrow="A day with ChatFlo" title={content.useCase.title} />
        <div className="mx-auto max-w-3xl space-y-5">
          {content.useCase.steps.map((step, i) => (
            <div key={step.title} className="flex gap-5">
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-brand-600 font-bold text-white">
                {i + 1}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-ink-900">{step.title}</h3>
                <p className="mt-1 text-ink-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonial */}
      <Section className="bg-ink-50">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 text-center shadow-sm sm:p-12">
          {content.testimonial ? (
            <>
              <p className="text-xl font-medium text-ink-800 sm:text-2xl">“{content.testimonial.quote}”</p>
              <p className="mt-6 font-semibold text-ink-900">{content.testimonial.name}</p>
              <p className="text-sm text-ink-500">{content.testimonial.role}</p>
            </>
          ) : (
            <>
              <p className="text-xl font-medium text-ink-400 sm:text-2xl">
                “Your words here.” — be one of our first {name.toLowerCase()} on ChatFlo.
              </p>
              <div className="mt-6">
                <Button href="/demo" variant="primary">
                  Get Early Access
                </Button>
              </div>
            </>
          )}
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeading eyebrow="Questions" title={`${content.eyebrow.replace("For ", "")} FAQs`} />
        <FAQ items={content.faqs} />
      </Section>

      <CtaBanner
        title={live ? `Ready to run your ${name.toLowerCase()} on WhatsApp?` : `Want ChatFlo for your ${name.toLowerCase()}?`}
        subtitle={
          live
            ? "Book a free demo and we'll set you up in a day."
            : "Join early access and we'll reach out the moment we're live for you."
        }
      />
    </>
  );
}

function ComingSoon({ name, icon, slug }: { name: string; icon: string; slug: string }) {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-50 to-white">
        <Container className="py-20 text-center sm:py-28">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-4xl shadow-sm ring-1 ring-brand-100">
            {icon}
          </div>
          <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-brand-600">Coming soon</p>
          <h1 className="mx-auto mt-3 max-w-2xl text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
            ChatFlo for {name}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-ink-600">
            We&apos;re bringing WhatsApp-first bookings, reminders and payments to {name.toLowerCase()}. Join early
            access and we&apos;ll reach out the moment it&apos;s ready.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/demo" variant="primary" size="lg">
              Get Early Access
            </Button>
            <Button
              href={waLink(`Hi ${site.name}! I run a ${name.toLowerCase()} and want early access.`)}
              variant="whatsapp"
              whatsappIcon
              external
              size="lg"
            >
              Chat with us
            </Button>
          </div>
          <p className="mt-8 text-sm text-ink-500">
            Already live for clinics —{" "}
            <Link href="/industries/clinics" className="font-semibold text-brand-600">
              see how it works
            </Link>
          </p>
          <span className="sr-only">{slug}</span>
        </Container>
      </section>
      <CtaBanner />
    </>
  );
}
