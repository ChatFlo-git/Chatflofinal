import type { IndustryContent } from "./types";

export const clinics: IndustryContent = {
  slug: "clinics",
  metaTitle: "WhatsApp software for medical clinics & polyclinics",
  metaDescription:
    "ChatFlo runs your clinic's front desk on WhatsApp — appointment booking, reminders, payments, visit summaries and NRI family coordination. Built for Kerala clinics.",
  eyebrow: "For Medical Clinics & Polyclinics",
  heroHeadline: "Your clinic's front desk, on WhatsApp",
  heroSubheadline:
    "Let patients book, reschedule and pay on WhatsApp. Cut no-shows with automatic reminders. See every appointment, payment and message on one simple dashboard.",
  painPoints: [
    "Missed calls during peak hours mean lost patients",
    "No-shows leave expensive gaps in the day book",
    "The receptionist is stuck on the phone instead of with patients",
    "Follow-ups and reports get forgotten",
    "NRI children can't easily arrange care for parents back home",
  ],
  features: [
    {
      icon: "📅",
      title: "WhatsApp appointment booking",
      description: "Patients pick a slot in a WhatsApp chat — no calls, no app. Slots sync to your dashboard instantly.",
    },
    {
      icon: "⏰",
      title: "Automatic reminders",
      description: "Reminders at 24 hours and 2 hours before, with one-tap confirm or reschedule. Fewer empty chairs.",
    },
    {
      icon: "💳",
      title: "Payments on WhatsApp",
      description: "Send a secure UPI / card payment link in the chat. Consultation fees collected before the patient arrives.",
    },
    {
      icon: "📋",
      title: "Records & visit summaries",
      description: "Keep patient history and send the doctor's visit summary straight to WhatsApp after each visit.",
    },
    {
      icon: "⭐",
      title: "Feedback & reviews",
      description: "Ask for feedback automatically and turn happy patients into Google reviews that bring in new ones.",
    },
    {
      icon: "🌍",
      title: "NRI family coordination",
      description: "Let a son in the Gulf book, follow up and pay for a parent's care in Kerala — all from his own WhatsApp.",
    },
  ],
  chat: {
    title: "How a booking actually looks",
    contactName: "Sunrise Clinic",
    messages: [
      { from: "in", text: "Hi, I'd like to see Dr. Menon this week", time: "9:14 AM" },
      { from: "out", text: "Sure! Here are Dr. Menon's available slots 👇", time: "9:14 AM" },
      { from: "out", text: "", buttons: ["Tue 10:30 AM", "Wed 4:00 PM", "Thu 11:15 AM"] },
      { from: "in", text: "Wed 4:00 PM please", time: "9:15 AM" },
      { from: "out", text: "Done ✅ You're booked with Dr. Menon, Wed 4:00 PM.\nConsultation fee ₹400 — pay here to confirm:", time: "9:15 AM" },
      { from: "out", text: "🔗 pay.chatflo.in/sunrise", time: "9:15 AM" },
      { from: "in", text: "Paid 👍", time: "9:16 AM" },
      { from: "out", text: "Got it! See you Wednesday. We'll send a reminder a day before. 🙏", time: "9:16 AM" },
    ],
  },
  useCase: {
    title: "A day at Sunrise Clinic with ChatFlo",
    steps: [
      { title: "Morning", description: "Patients message the clinic number on WhatsApp and book themselves in — the front desk phone stays free for walk-ins." },
      { title: "Afternoon", description: "ChatFlo sends reminders for tomorrow's appointments. Two patients reschedule, freeing slots that get filled the same day." },
      { title: "After each visit", description: "The doctor's visit summary and next-visit date go straight to the patient's WhatsApp — and to their family abroad if they're in the care circle." },
      { title: "Evening", description: "The owner opens the dashboard: today's appointments, payments collected, and a couple of new 5-star reviews. No registers, no missed calls." },
    ],
  },
  // No testimonial yet — the template shows an honest "be one of our first
  // clinics" slot until a real, attributable quote is available.
  faqs: [
    {
      q: "Will this work with my existing clinic number?",
      a: "In most cases yes — we help you connect your existing business number to the WhatsApp Cloud API, or set up a new one if you prefer.",
    },
    {
      q: "Can multiple doctors use it?",
      a: "Yes. Each doctor can have their own schedule and slots, and your front desk sees everything in one place. Multi-doctor support is included from the Pro plan.",
    },
    {
      q: "Is patient data handled safely?",
      a: "We are aligned with the DPDP Act 2023 and Telemedicine Practice Guidelines 2020. Data is encrypted, staff access is controlled, and you can export or delete records anytime.",
    },
    {
      q: "How quickly can we start?",
      a: "Most clinics go live within one working day. We set up your booking flow, reminders and dashboard, and train your front desk.",
    },
    {
      q: "How does the NRI family feature work for my patients?",
      a: "You can add a family member abroad to a patient's care circle. They can book, receive visit summaries and pay — all from their own WhatsApp, wherever they are.",
    },
  ],
};
