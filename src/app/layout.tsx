import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Analytics } from "@/components/Analytics";
import { JsonLd, organizationSchema, softwareApplicationSchema } from "@/components/JsonLd";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "WhatsApp clinic software",
    "appointment booking WhatsApp",
    "clinic management Kerala",
    "WhatsApp business India",
    "patient reminders WhatsApp",
  ],
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-ink-900">
        <JsonLd data={organizationSchema()} />
        <JsonLd data={softwareApplicationSchema()} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFab />
        <Analytics />
      </body>
    </html>
  );
}
