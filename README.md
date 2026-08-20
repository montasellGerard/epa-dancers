# EPA Dancers

Marketing site for EPA Dancers — latin dance school (Salsa, Bachata, Timba, Afro) in Mollet del Vallès, Barcelona. Built with Next.js 15, Tailwind CSS 4 and next-intl (es/en/ca).

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint       # eslint
npx tsc --noEmit   # type check
npm run build      # production build
```

## Content editing (no code knowledge needed)

| What | Where |
|------|-------|
| Stats, address, opening hours, base URL | `lib/site.ts` |
| WhatsApp number & Instagram | `lib/constants.ts` |
| Class schedule & prices | `data/schedule.ts` |
| Events (past ones auto-hide) | `data/events.ts` |
| Testimonials | `data/testimonials.ts` |
| Gallery items | `data/gallery.ts` |
| UI texts (3 languages) | `messages/*.json` |

Pending client data is marked `TODO(cliente)` across the repo.

## Deploy

Push to `main` → Vercel deploys automatically. Never deploy from local.
