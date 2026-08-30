import { pageMeta } from "@/lib/seo";
import { site } from "@/content/site";
import { LegalPage } from "@/components/LegalPage";

export const metadata = pageMeta({
  title: "Terms of Service",
  description: `The terms governing use of ${site.name}.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="11 June 2026"
      intro={`These terms govern your use of ${site.name}. By using the service you agree to them. This is a template and not legal advice — have it reviewed by a qualified lawyer before launch.`}
      sections={[
        {
          heading: "1. The service",
          paragraphs: [
            `${site.name} provides software for managing bookings, reminders, payments and customer communication over the WhatsApp Cloud API, with a web dashboard.`,
          ],
        },
        {
          heading: "2. Accounts and acceptable use",
          paragraphs: [
            "You are responsible for activity under your account and for keeping credentials secure.",
            "You agree to use the service lawfully, to obtain any necessary consents from your customers, and to comply with WhatsApp's and Meta's policies, including messaging and opt-in rules.",
          ],
        },
        {
          heading: "3. Fees and billing",
          paragraphs: [
            "Plans are billed monthly or annually as selected. WhatsApp conversation charges set by Meta may apply in addition to your plan. All fees are exclusive of applicable taxes unless stated.",
          ],
        },
        {
          heading: "4. Compliance",
          paragraphs: [
            "We aim to operate in line with the DPDP Act 2023 and, for healthcare customers, to support workflows consistent with the Telemedicine Practice Guidelines 2020. You remain responsible for your own regulatory and professional obligations.",
          ],
        },
        {
          heading: "5. Availability and liability",
          paragraphs: [
            "We work to keep the service available but do not guarantee uninterrupted operation. To the extent permitted by law, our liability is limited to the fees you paid in the preceding three months.",
          ],
        },
        {
          heading: "6. Termination",
          paragraphs: [
            "You may cancel at any time and retain access until the end of your billing period. We may suspend or terminate accounts that breach these terms.",
          ],
        },
        {
          heading: "7. Contact",
          paragraphs: [`Questions about these terms? Email ${site.email}.`],
        },
      ]}
    />
  );
}
