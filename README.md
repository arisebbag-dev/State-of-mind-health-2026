# State of Mind Health — Website

A modern, conversion-focused website for State of Mind Health, a psychiatric
practice in Suffern, NY. Built with **Next.js (App Router)**, **Tailwind CSS**,
and **Framer Motion** — ready to deploy on **Vercel**.

---

## Quick start

```bash
npm install
npm run dev
```

Then open http://localhost:3000

To create a production build:

```bash
npm run build
npm run start
```

---

## Project structure

```
app/
  layout.jsx        Root layout: fonts, global SEO, Navbar, Footer
  page.jsx          Homepage (Hero → Problem → Solutions → Provider → CTA)
  globals.css       Tailwind + base styles + reduced-motion handling
  services/page.jsx Services hub (with its own SEO metadata)
  about/page.jsx    About / philosophy page
  contact/page.jsx  Intake form + contact details
  sitemap.js        Auto-generated sitemap.xml
  robots.js         Auto-generated robots.txt
components/
  Navbar, Footer, Hero, ProblemSection, SolutionsSection,
  ProviderTeaser, FinalCTA, PageHeader, ContactForm,
  CTAButton, Reveal
public/
  (add your images here — see public/README.txt)
```

---

## Things to customize before launch

1. **Phone & email** — search the project for `(000) 000-0000` and
   `hello@stateofmindhealth.com` and replace with real contact info.
2. **Domain** — update `siteUrl` in `app/layout.jsx`, plus `app/sitemap.js`
   and `app/robots.js`, to your live domain.
3. **Provider photo** — add `public/nechama.jpg` and swap the placeholder in
   `components/ProviderTeaser.jsx` for a Next.js `<Image>`.
4. **Intake form** — set `NEXT_PUBLIC_INTAKE_ENDPOINT` (e.g. a Formspree URL
   or your own API route) so form submissions are delivered. Until then, the
   form simulates success for testing.
5. **Online scheduler** — embed your booking widget (Calendly, IntakeQ, EHR)
   in the placeholder on `app/contact/page.jsx`.
6. **Favicon** — drop `favicon.ico` (or `icon.png`) into the `app/` folder.

---

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — no extra config needed. Click **Deploy**.
4. Add your custom domain in the Vercel project settings.

---

## Design tokens

Defined in `tailwind.config.js`:

- `forest` — deep healing green (primary / trust)
- `sage` / `sage-mist` — calm section backgrounds
- `canvas` — warm off-white page background
- `ink` — slate text
- `apricot` — warm accent, used sparingly

Fonts (via `next/font`): **Fraunces** (display) + **Hanken Grotesk** (body).

---

## Compliance note

Copy avoids medical overpromising and includes 911/988 crisis guidance in the
footer and contact page. Please have your provider review all clinical and
credential language (PMHNP, testing descriptions, insurance) before going live.
