# ChatFlo

Marketing website for **ChatFlo** — a WhatsApp-first SaaS for Indian clinics and small businesses. Built with Next.js (App Router) + Tailwind CSS, statically generated, mobile-first.

## Getting started

This project needs Node 18+ (developed on Node 22).

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint
```

## Configuration

All site-wide settings live in [`src/content/site.ts`](src/content/site.ts). For deployment, set these environment variables (e.g. in `.env.local` or your host):

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (used in metadata, sitemap, schema). |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp business number, digits only, international format (e.g. `919999999999`). Powers every click-to-chat link and the floating button. |
| `NEXT_PUBLIC_GA4_ID` | Google Analytics 4 ID. Set to enable GA4. |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Plausible domain. Set to enable Plausible (takes priority over GA4). |

Analytics is off until one of those vars is set — see [`src/components/Analytics.tsx`](src/components/Analytics.tsx).

## Project structure

```
src/
  app/                     Routes (App Router)
    page.tsx               Home
    features/ pricing/ about/ demo/ blog/ industries/
    industries/[slug]/     Templated industry page (one page per vertical)
    blog/[slug]/           Blog post template
    privacy/ terms/ refund-policy/
    api/lead/route.ts      Demo-form lead intake (stub — see below)
    sitemap.ts robots.ts   SEO routes
    opengraph-image.tsx    Dynamic OG image
  components/              UI + sections (Navbar, Footer, ChatMockup, Button, ...)
  content/                 All editable content (no code changes to edit copy)
    site.ts                Brand, WhatsApp number, nav, analytics
    verticals.ts           Master list of all 50 industry verticals
    pricing.ts faqs.ts blog.ts
    industries/            Per-vertical page content + registry
  lib/                     seo helper, clsx
```

## Adding a new industry vertical

The `/industries` system is content-driven. Two levels exist:

1. **Listing only** (appears in the industries grid + demo dropdown + sitemap, renders a "Coming soon" page automatically).
2. **Fully written page** (custom hero, pain points, features, chat mockup, walkthrough, FAQ).

### Step 1 — add it to the master list

Add an entry to the `verticals` array in [`src/content/verticals.ts`](src/content/verticals.ts):

```ts
{ slug: "dental-clinics", name: "Dental clinics", group: "Healthcare", icon: "🦷" }
```

That's all you need for a listed "Coming soon" vertical. It now appears everywhere and has a working `/industries/dental-clinics` page.

### Step 2 (optional) — write the full page

1. Create `src/content/industries/dental-clinics.ts` exporting an `IndustryContent` object (copy [`clinics.ts`](src/content/industries/clinics.ts) as a starting point — it's the reference implementation). The shape is defined in [`types.ts`](src/content/industries/types.ts).
2. Register it in [`src/content/industries/index.ts`](src/content/industries/index.ts):

```ts
import { dentalClinics } from "./dental-clinics";
const registry = { /* ... */ "dental-clinics": dentalClinics };
```

3. To mark it as launched (removes the "Coming soon" banner, shows "Live now"), set `live: true` on its entry in `verticals.ts`.

No route or component changes are ever needed — the `[slug]` template and `generateStaticParams` pick everything up automatically.

## Capturing leads by email

The demo form (`/demo`) posts to [`src/app/api/lead/route.ts`](src/app/api/lead/route.ts), which validates input and blocks spam (honeypot). Its `storeLead` function **emails each lead** to your inbox via SMTP (using `nodemailer`). If SMTP isn't configured, leads are just logged to the server console (handy in dev).

### Setup with Gmail / Google Workspace

1. On the sending account (e.g. `support@chatflo.in`), enable **2-Step Verification**.
2. Create an **App Password**: Google Account → Security → App passwords → generate one for "Mail". You'll get a 16-character password.
3. Set these environment variables (in `.env.local` for dev, and in your host's dashboard for production):

   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=support@chatflo.in
   SMTP_PASS=<the 16-char app password>
   LEAD_NOTIFY_TO=support@chatflo.in
   LEAD_NOTIFY_FROM=support@chatflo.in
   ```

   (Any SMTP provider works — Zoho, Outlook, a transactional service — just change host/port/credentials.)

Every demo submission now arrives as a formatted email with the lead's details, and `Reply-To` is set so you can reply directly. To switch delivery (Google Sheet, Supabase, etc.), change only the `storeLead` function.

> **Hosting note:** SMTP/`nodemailer` needs a **Node.js runtime** (the route sets `runtime = "nodejs"`). This works on **Vercel** and **Netlify** serverless functions. It does **not** run on Cloudflare Pages' edge runtime — if you host there, switch `storeLead` to an HTTP email API (e.g. Resend) instead.

## Adding a blog post

Append a `BlogPost` to the `posts` array in [`src/content/blog.ts`](src/content/blog.ts). Each post has a `category` (used as a tag) and a `body` of `h2`/`p` blocks. Posts are statically generated and added to the sitemap automatically.

## SEO & trust

- Per-page metadata via the `pageMeta` helper ([`src/lib/seo.ts`](src/lib/seo.ts)).
- schema.org JSON-LD: Organization + SoftwareApplication (site-wide), FAQPage (home, pricing, industry pages), BlogPosting (posts).
- `sitemap.xml` and `robots.txt` generated from content.
- Trust signals (Meta WhatsApp Cloud API, DPDP Act 2023) in the footer.

## Internationalisation

Strings are sourced from `src/content/*` rather than hardcoded in components, so the site is ready to add Malayalam (`ml`) and Hindi (`hi`) locales. Locales are listed in `site.locales`.

## Notes

- WhatsApp green (`#25D366`) is reserved **only** for WhatsApp CTAs (see the `whatsapp` button variant), so those actions are instantly recognisable. The brand teal is used for everything else.
- The legal pages (privacy, terms, refund) are **templates, not legal advice** — have them reviewed by a qualified Indian lawyer before launch.
