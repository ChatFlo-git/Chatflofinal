import { pageMeta } from "@/lib/seo";
import { site } from "@/content/site";
import { LegalPage } from "@/components/LegalPage";

export const metadata = pageMeta({
  title: "Privacy Policy",
  description: "How ChatFlo collects, uses and protects personal data, aligned with India's DPDP Act 2023.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="11 June 2026"
      intro={`This policy explains how ${site.name} collects, uses, stores and protects personal data. We are committed to handling data responsibly and in line with India's Digital Personal Data Protection Act, 2023 (DPDP Act).`}
      sections={[
        {
          heading: "1. This is a template",
          paragraphs: [
            "This document is a starting point and not legal advice. Before launch, have it reviewed by a qualified Indian data-protection lawyer to ensure it reflects your actual data practices and obligations under the DPDP Act 2023.",
          ],
        },
        {
          heading: "2. Data we collect",
          paragraphs: [
            "From business customers: name, business name, contact number, email, city and billing details.",
            "From end users (e.g. patients) processed on behalf of our business customers: name, contact number, appointment details, and any messages exchanged over WhatsApp. The business customer is the data fiduciary for this data; ChatFlo acts as a data processor on their instructions.",
          ],
        },
        {
          heading: "3. How we use data",
          paragraphs: [
            "To provide the service: booking, reminders, payments, records and communication over the WhatsApp Cloud API.",
            "To operate, secure, support and improve the platform, and to comply with legal obligations.",
            "We do not sell personal data.",
          ],
        },
        {
          heading: "4. Consent and lawful basis",
          paragraphs: [
            "We process personal data on the basis of consent and for legitimate, specified purposes as required by the DPDP Act. End users can withdraw consent through the relevant business or by contacting us.",
          ],
        },
        {
          heading: "5. WhatsApp and third parties",
          paragraphs: [
            "Messaging is delivered through the official Meta WhatsApp Cloud API and is subject to Meta's terms and privacy practices. Payment processing is handled by PCI-compliant payment partners. We share data with such processors only to the extent needed to provide the service.",
          ],
        },
        {
          heading: "6. Data security and retention",
          paragraphs: [
            "Data is encrypted in transit and at rest, with role-based access controls. We retain data only as long as needed for the purposes above or as required by law, after which it is deleted or anonymised.",
          ],
        },
        {
          heading: "7. Your rights",
          paragraphs: [
            "Subject to the DPDP Act, you may request access to, correction of, or erasure of your personal data, and may raise grievances. To exercise these rights, contact us at " + site.email + ".",
          ],
        },
        {
          heading: "8. Contact",
          paragraphs: [`Questions about this policy? Email ${site.email}.`],
        },
      ]}
    />
  );
}
