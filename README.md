# Scale STEM – Landing Page

A modern, minimal landing page for Scale STEM — a mentorship and research accelerator for STEM students.

## Tech
- Next.js (App Router)
- Tailwind CSS (via `@tailwindcss/postcss`)
- TypeScript
- `next-themes` for light/dark mode

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Structure
- `app/page.tsx`: Landing page sections
- `app/layout.tsx`: Global layout, metadata, theme provider
- `app/globals.css`: Theme tokens and base styles
- `public/static/images`: Placeholder assets (avatars, motif)

## Customization
- Update application link in `#apply` section of `app/page.tsx`.
- Replace placeholder images in `public/static/images/` with real assets.
- Adjust colors in `app/globals.css` CSS variables: `--accent-green`, `--accent-blue`, `--accent-gold`.

## Accessibility
- Mobile-first and responsive
- High contrast dark theme; toggle in header

## Deploy
You can deploy to Vercel or any Node host.

```bash
npm run build
npm start
```

## License
MIT
