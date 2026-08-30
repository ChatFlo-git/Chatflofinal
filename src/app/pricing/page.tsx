import { pageMeta } from "@/lib/seo";
import { comparison, pricingFaqs } from "@/content/pricing";
import { waLink } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { FAQ } from "@/components/ui/FAQ";
import { Button } from "@/components/ui/Button";
import { PricingTables } from "@/components/pricing/PricingTables";
import { CtaBanner } from "@/components/CtaBanner";
import { JsonLd, faqSchema } from "@/components/JsonLd";

export const metadata = pageMeta({
  title: "Pricing",
  description:
    "Simple ChatFlo pricing from ₹1,499/month. No setup fee, no lock-in, annual billing gets two months free. Compare Starter, Growth and Pro plans.",
  path: "/pricing",
});

function Cell({ value }: { value: boolean | string }) {
  if (typeof value === "string") return <span className="text-ink-700">{value}</span>;
  return value ? (
    <span className="text-brand-600" aria-label="Included">
      ✓
    </span>
  ) : (
    <span className="text-ink-300" aria-label="Not included">
      –
    </span>
  );
}

export default function PricingPage() {
  return (
    <>
      <JsonLd data={faqSchema(pricingFaqs)} />

      <section className="bg-gradient-to-b from-brand-50 to-white">
        <Container className="py-16 text-center sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Pricing</p>
          <h1 className="mx-auto mt-3 max-w-3xl text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
            Honest pricing for small clinics
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-600">
            No setup fee. No lock-in. Cancel anytime. Pick a plan or message us and we&apos;ll recommend the right one.
          </p>
        </Container>
      </section>

      <Section>
        <PricingTables />
      </Section>

      {/* Comparison matrix */}
      <Section className="bg-ink-50">
        <SectionHeading eyebrow="Compare" title="What's in each plan" />
        <div className="mx-auto max-w-4xl overflow-x-auto">
          <table className="w-full border-collapse rounded-2xl bg-white text-left text-sm">
            <thead>
              <tr className="border-b border-ink-100">
                <th className="px-4 py-4 font-semibold text-ink-900">Feature</th>
                <th className="px-4 py-4 text-center font-semibold text-ink-900">Starter</th>
                <th className="px-4 py-4 text-center font-semibold text-ink-900">Growth</th>
                <th className="px-4 py-4 text-center font-semibold text-ink-900">Pro</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.feature} className="border-b border-ink-50">
                  <td className="px-4 py-3 text-ink-700">{row.feature}</td>
                  <td className="px-4 py-3 text-center">
                    <Cell value={row.starter} />
                  </td>
                  <td className="px-4 py-3 text-center">
                    <Cell value={row.growth} />
                  </td>
                  <td className="px-4 py-3 text-center">
                    <Cell value={row.pro} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-10 text-center">
          <p className="mb-4 text-ink-600">Not sure which plan fits your clinic?</p>
          <Button href={waLink("Hi ChatFlo! Which plan is right for my clinic?")} variant="whatsapp" whatsappIcon external size="lg">
            Talk to us on WhatsApp
          </Button>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Pricing questions" title="Costs, contracts & cancellation" />
        <FAQ items={pricingFaqs} />
      </Section>

      <CtaBanner />
    </>
  );
}
