import type { IndustryContent } from "./types";

export const tuitionCentres: IndustryContent = {
  slug: "tuition-centres",
  metaTitle: "WhatsApp software for tuition & coaching centres",
  metaDescription:
    "ChatFlo helps tuition and coaching centres handle enquiries, fee reminders and parent updates on WhatsApp. Coming soon across Kerala.",
  eyebrow: "For Tuition & Coaching Centres",
  heroHeadline: "Enquiries, fees and parent updates — on WhatsApp",
  heroSubheadline:
    "Capture every admission enquiry, send fee reminders that get paid, and keep parents updated on attendance and tests — all on WhatsApp.",
  painPoints: [
    "Admission enquiries slip through during busy season",
    "Chasing monthly fees eats up staff time",
    "Parents are hard to keep informed about attendance and results",
    "Class reminders and schedule changes get missed",
  ],
  features: [
    { icon: "📝", title: "Admission enquiries", description: "Capture every enquiry on WhatsApp and follow up so none are lost." },
    { icon: "💳", title: "Fee reminders & collection", description: "Send gentle fee reminders with a payment link — and get paid faster." },
    { icon: "📊", title: "Parent updates", description: "Share attendance, test marks and notices with parents automatically." },
    { icon: "⏰", title: "Class reminders", description: "Notify students of timings, demo classes and schedule changes." },
  ],
  chat: {
    title: "An admission enquiry",
    contactName: "Bright Minds Tuition",
    messages: [
      { from: "in", text: "Do you have Class 10 maths batches?", time: "5:20 PM" },
      { from: "out", text: "Yes! We have evening batches starting next week 📘", time: "5:20 PM" },
      { from: "out", text: "Want to book a free demo class?", buttons: ["Book demo", "Send fee details"] },
      { from: "in", text: "Book demo", time: "5:21 PM" },
      { from: "out", text: "Great! Demo booked for Mon 5:00 PM. We'll remind you a day before 🙌", time: "5:21 PM" },
    ],
  },
  useCase: {
    title: "A new admission season",
    steps: [
      { title: "Enquiries captured", description: "Every WhatsApp enquiry is logged and followed up — no lost leads." },
      { title: "Demos booked", description: "Interested parents book a free demo class and get reminders." },
      { title: "Fees collected on time", description: "Monthly fee reminders go out with a payment link, cutting follow-up calls." },
    ],
  },
  faqs: [
    { q: "When will this be available for coaching centres?", a: "We're rolling out to tuition and coaching centres soon. Book a demo to join early access." },
    { q: "Can parents get attendance updates?", a: "Yes — you'll be able to send attendance, test results and notices to parents on WhatsApp." },
  ],
};
