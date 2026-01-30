# my-prototype

B2C car insurance client zone — povinné ručení & havarijní pojištění (Lundegaard as insurer).  
Context and scope: [helper-docs/01-context.md](helper-docs/01-context.md).

## Prototype (Next.js)

The app lives in **`prototype/`**.

- **Stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Mantine 7, Framer Motion, react-hook-form, Zod, Radix.
- **Routes:** `/` → home, `/welcome` → entry, `/onboarding`, `/dashboard`, `/back-office`. API stubs: `/api/send-contract`, `/api/send-quote`.

### Run locally

```bash
cd prototype
npm install   # if you haven’t (fix npm cache permissions if needed)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Use “Go to welcome page” to reach the welcome flow.

### Deploy (Netlify)

In Netlify: set **Base directory** to **`prototype`**, build command **`npm run build`**, and use the Next.js plugin (or `@netlify/plugin-nextjs`). The `prototype/netlify.toml` is set up for that.

### Structure (see helper-docs/02-structure.md)

- `app/` — pages and API routes
- `components/` — UI and widgets
- `lib/` — theme, contexts, design-system, data, types, utils, email-templates
- `public/` — static assets
