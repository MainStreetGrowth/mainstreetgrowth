# Main Street Compass — Release & Deploy Notes

The marketing site is a Next.js 16 (App Router) app, host-agnostic, ready to deploy to
Netlify (config included) or any Node host. This doc is the pre-launch checklist.

## 1. Replace the placeholders

All contact/brand details live in **one file**: `app/_lib/theme.ts` → the `SITE` object.
Update these before launch:

- `phone` / `phoneHref` — currently `(601) 555-0100` / `tel:+16015550100`
- `email` — currently `hello@mainstreetcompass.com`
- `url` — currently `https://mainstreetcompass.com` (drives canonical URLs, sitemap, robots, OG)
- `social.facebook` / `social.instagram` — currently placeholder handles

Also review:
- `app/privacy/page.tsx` and `app/terms/page.tsx` — dated "Last updated: July 2026",
  Mississippi governing law. **Have counsel review before publishing.**

## 2. Contact form — environment variables

The form (homepage + `/contact`) POSTs to `app/api/contact/route.ts`, which emails
submissions via the **Resend REST API** (no SDK, so nothing is locked to a host). Set
these env vars in your host's dashboard:

| Var | Required | Purpose |
|-----|----------|---------|
| `RESEND_API_KEY` | Yes (to deliver) | Your Resend API key. Without it, submissions are logged and the form still returns success (safe for preview). |
| `CONTACT_TO` | Recommended | Where audit requests are emailed. Defaults to `hello@mainstreetcompass.com`. |
| `CONTACT_FROM` | Recommended | Verified Resend sender, e.g. `Main Street Compass <hello@yourdomain.com>`. Defaults to Resend's onboarding sender. |

To use a different provider later (SendGrid, Postmark, an inbox API, etc.), only
`app/api/contact/route.ts` changes — the UI stays the same. The form includes a hidden
honeypot (`company` field) for spam protection.

## 3. Build & deploy

```
npm install
npm run build   # fetches Google Fonts at build time — needs network access
npm start       # or deploy .next via @netlify/plugin-nextjs (netlify.toml included)
```

- Netlify: build command `npm install && npm run build`, publish `.next`, with
  `@netlify/plugin-nextjs` (already in `netlify.toml`).
- Any Node host: `npm run build && npm start`.

> Note: the build fetches Source Serif 4 and Work Sans from Google Fonts at build time,
> so the build environment needs outbound network access (Netlify has this).

## 4. What's included

Pages: `/` (home), `/services`, `/pricing`, `/about`, `/faq`, `/blog` + 3 posts,
`/contact`, `/privacy`, `/terms`, and a custom 404.

SEO: per-page metadata, `app/sitemap.ts`, `app/robots.ts`, a generated OpenGraph image
(`app/opengraph-image.tsx`), Twitter card, canonical URLs, and a compass favicon.

## 5. Post-launch

- Verify `https://<domain>/sitemap.xml` and `/robots.txt` resolve.
- Submit the sitemap in Google Search Console.
- Send a test through the contact form and confirm the email arrives at `CONTACT_TO`.
- Add the real phone, email, domain, and social links (step 1) — search the codebase for
  `555-0100` to catch any strays.
