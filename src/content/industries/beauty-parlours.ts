import type { IndustryContent } from "./types";

export const beautyParlours: IndustryContent = {
  slug: "beauty-parlours",
  metaTitle: "WhatsApp booking for beauty parlours & salons",
  metaDescription:
    "ChatFlo lets your salon take bookings, send reminders and collect advance payments on WhatsApp. Coming soon for beauty parlours across Kerala.",
  eyebrow: "For Beauty Parlours & Salons",
  heroHeadline: "Fill your chairs — bookings on WhatsApp",
  heroSubheadline:
    "Let clients book their cut, colour or bridal package on WhatsApp, take advance payments, and send reminders so no slot goes empty.",
  painPoints: [
    "Bookings scattered across calls, DMs and a paper register",
    "Last-minute cancellations leave stylists idle",
    "No easy way to take advance for bridal or package bookings",
    "Regulars forget to rebook their next appointment",
  ],
  features: [
    { icon: "💇", title: "Service booking on WhatsApp", description: "Clients choose a service and slot in chat. Your register fills itself." },
    { icon: "⏰", title: "Reminders & rebooking", description: "Cut no-shows and nudge regulars to book their next visit." },
    { icon: "💳", title: "Advance payments", description: "Collect a deposit for bridal and package bookings via a WhatsApp link." },
    { icon: "⭐", title: "Reviews that bring footfall", description: "Turn happy clients into Google reviews automatically." },
  ],
  chat: {
    title: "Booking a slot",
    contactName: "Glow Salon",
    messages: [
      { from: "in", text: "Do you have a slot for hair colour Saturday?", time: "11:02 AM" },
      { from: "out", text: "Yes! Pick a time 👇", time: "11:02 AM" },
      { from: "out", text: "", buttons: ["Sat 12:00 PM", "Sat 3:30 PM"] },
      { from: "in", text: "3:30 works", time: "11:03 AM" },
      { from: "out", text: "Booked ✅ See you Saturday 3:30 PM at Glow Salon 💕", time: "11:03 AM" },
    ],
  },
  useCase: {
    title: "A weekend at Glow Salon",
    steps: [
      { title: "Bookings come in", description: "Clients message and book themselves into open slots all week." },
      { title: "Deposits collected", description: "Bridal bookings pay an advance on WhatsApp, so no-shows cost nothing." },
      { title: "Reminders go out", description: "Saturday's clients get a reminder; one reschedules and the slot is refilled." },
    ],
  },
  faqs: [
    { q: "When will this be available for salons?", a: "We're rolling out to beauty parlours soon. Book a demo and we'll add you to the early-access list." },
    { q: "Can I take advance payments?", a: "Yes — you'll be able to send a WhatsApp payment link for deposits and packages." },
  ],
};
