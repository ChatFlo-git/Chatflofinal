import type { IndustryContent } from "./types";

export const restaurants: IndustryContent = {
  slug: "restaurants",
  metaTitle: "WhatsApp ordering & reservations for restaurants & cafés",
  metaDescription:
    "ChatFlo helps restaurants take table reservations, orders and feedback on WhatsApp. Coming soon for cafés and restaurants across Kerala.",
  eyebrow: "For Restaurants & Cafés",
  heroHeadline: "Reservations and orders — on WhatsApp",
  heroSubheadline:
    "Take table bookings and takeaway orders on WhatsApp, send the menu in a tap, and bring diners back with offers they actually open.",
  painPoints: [
    "Phone lines jammed during the dinner rush",
    "No-show reservations leave tables empty on a busy night",
    "Repeat customers are hard to reach without a customer list",
    "Takeaway orders get garbled over the phone",
  ],
  features: [
    { icon: "🍽️", title: "Table reservations", description: "Diners book a table on WhatsApp and get an instant confirmation." },
    { icon: "📋", title: "Menu & takeaway orders", description: "Share your menu and take clear takeaway orders in chat." },
    { icon: "🔔", title: "Offers that get opened", description: "Send weekend specials to past customers — almost everyone reads them." },
    { icon: "⭐", title: "Feedback & reviews", description: "Collect feedback after the meal and grow your Google rating." },
  ],
  chat: {
    title: "Booking a table",
    contactName: "Cafe Kerala",
    messages: [
      { from: "in", text: "Table for 4 tonight at 8?", time: "6:40 PM" },
      { from: "out", text: "We've got you 🎉 Table for 4, 8:00 PM tonight.", time: "6:40 PM" },
      { from: "out", text: "Want to pre-order from the menu?", buttons: ["See menu", "We'll order there"] },
      { from: "in", text: "See menu", time: "6:41 PM" },
      { from: "out", text: "Here you go 👉 menu.chatflo.in/cafekerala", time: "6:41 PM" },
    ],
  },
  useCase: {
    title: "A Friday night service",
    steps: [
      { title: "Reservations roll in", description: "Diners book tables on WhatsApp while the phone stays free for the kitchen." },
      { title: "Reminders confirm tables", description: "A reminder goes out before service; one party reschedules so the table isn't wasted." },
      { title: "Regulars come back", description: "A Sunday brunch offer goes to last month's diners — and the tables fill." },
    ],
  },
  faqs: [
    { q: "When will this be available for restaurants?", a: "We're rolling out to restaurants and cafés soon. Book a demo to join early access." },
    { q: "Can I take takeaway orders too?", a: "Yes — diners will be able to order takeaway right in the WhatsApp chat." },
  ],
};
