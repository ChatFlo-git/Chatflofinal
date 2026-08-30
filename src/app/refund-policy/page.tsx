import { pageMeta } from "@/lib/seo";
import { site } from "@/content/site";
import { LegalPage } from "@/components/LegalPage";

export const metadata = pageMeta({
  title: "Refund Policy",
  description: `${site.name}'s policy on cancellations and refunds.`,
  path: "/refund-policy",
});

export default function RefundPolicyPage() {
  return (
    <LegalPage
      title="Refund Policy"
      updated="11 June 2026"
      intro={`This policy explains cancellations and refunds for ${site.name} subscriptions. This is a template and not legal advice — review it before launch.`}
      sections={[
        {
          heading: "1. No lock-in",
          paragraphs: [
            "All plans are month-to-month with no long-term contract. You can cancel anytime from your dashboard or by contacting us.",
          ],
        },
        {
          heading: "2. Monthly plans",
          paragraphs: [
            "Monthly subscriptions are billed in advance. On cancellation, your plan stays active until the end of the current billing period. Monthly fees already paid are generally non-refundable.",
          ],
        },
        {
          heading: "3. Annual plans",
          paragraphs: [
            "Annual subscriptions may be eligible for a prorated refund of the unused full months, at our discretion, less any discount already applied. Contact us to request this.",
          ],
        },
        {
          heading: "4. WhatsApp conversation charges",
          paragraphs: [
            "Per-conversation charges set by Meta and already incurred are non-refundable, as they are passed through to the platform.",
          ],
        },
        {
          heading: "5. How to request a refund",
          paragraphs: [
            `Email ${site.email} with your account details. We aim to respond within 5 working days, and approved refunds are returned to the original payment method.`,
          ],
        },
      ]}
    />
  );
}
