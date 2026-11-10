# TheMellCode

Marketing site for TheMellCode, an automation, AI, and IT consultancy for small businesses and nonprofits.

Built with Next.js (App Router) and plain CSS. Light and dark themes follow the visitor's device setting, with a toggle in the header.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Where things live

- `lib/site.ts` holds the copy for services, audiences, process, and reasons, plus the email, Calendly, and intake form links. Most text edits happen here.
- `app/page.tsx` is the home page layout.
- `app/get-started/` is the two-step booking page (Google Form intake, then Calendly).
- `app/globals.css` has the color tokens for both themes at the top.
- `public/img/` has the black and white logo files.

The old `/consult.html` URL redirects to `/get-started`.

## Deploy

Hosted on Vercel. Pushes to `main` deploy to production; pull requests get a preview URL.
