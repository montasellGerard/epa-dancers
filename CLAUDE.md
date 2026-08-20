# EPA Dancers — project context

One-page marketing site for a latin dance school in Mollet del Vallès (Barcelona). Next.js 15 App Router + Tailwind 4 + next-intl (es/en/ca). Deployed on Vercel.

## Rules
- NEVER deploy from local. Push to main → Vercel auto-deploys. (A local deploy once caused repo/production drift.)
- All editable content lives in `data/*` and `lib/site.ts` — components must not hardcode figures, addresses or hours.
- `lib/constants.ts` holds the WhatsApp number: it is the site's single conversion channel.
- Search `TODO(cliente)` for every placeholder pending real client data. The site must not launch while any remains.
- Legal pages (`aviso-legal`, `privacidad`) are Spanish-only by design.
- Run `npm run lint && npx tsc --noEmit && npm run build` before pushing (CI enforces it).

## Structure
- `app/[locale]/` — localized routes (home + legal pages)
- `components/` — one component per section, client components
- `data/` — schedule, events, testimonials, gallery, faq ids
- `lib/site.ts` — single source of truth: BASE_URL, stats, address, opening hours
- `messages/{es,en,ca}.json` — all UI strings
