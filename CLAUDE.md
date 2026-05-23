# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # start dev server at http://localhost:5173
npm run build      # type-check + production build (tsc -b && vite build)
npm run lint       # ESLint
npm run preview    # preview production build locally
```

There are no tests configured in this project.

## Stack

- **React 19** + **TypeScript 6** via Vite 8
- **Tailwind CSS v4** — configured via `@tailwindcss/vite` plugin, no `tailwind.config.js`
- **React Hook Form** + **Zod** + `@hookform/resolvers` for form validation
- **Material Symbols Outlined** icon font (loaded via Google Fonts in `index.html`)

## Design tokens

All design tokens live in `src/index.css` under `@theme {}` — this is how Tailwind v4 receives custom values. Tokens are exported from a **Google Stitch** design and cover:

- **Colors** — full Material Design 3 dark palette (e.g. `bg-surface-container-lowest`, `text-primary`, `text-on-surface-variant`)
- **Typography** — `font-headline` (Space Grotesk), `font-body` / `font-label` (Inter)
- **Border radius** — `rounded-DEFAULT` = 1rem, `rounded-lg` = 2rem, `rounded-xl` = 3rem

Always use these token-based class names rather than arbitrary Tailwind values to stay consistent with the design system.

## Architecture

`src/App.tsx` is the single entry point — swap the imported component here to change which page renders. There is no router.

**Active page:** `src/components/CineSwipePage.tsx` — a movie browsing UI (dark theme, masonry grid, floating pill nav, reaction sidebar). All data is hardcoded as constants at the top of the file.

**Comparison folder** (`src/comparison/`) exists for demo purposes only — do not import from it:
- `vague-prompt/login.html` — vanilla HTML login page built from a vague prompt
- `detailed-prompt/` — production React login page (LoginPage.tsx, loginSchema.ts, auth.service.ts, auth.types.ts) built from a detailed spec

## Form pattern

When building forms, follow the pattern in `src/comparison/detailed-prompt/LoginPage.tsx`:
- Define a Zod schema in a separate `schemas/` file
- Use `zodResolver` with `useForm`
- Define server error codes as a typed union in `types/`
- Keep API calls in a `services/` file — never inline fetch calls in components

## Tailwind v4 notes

- No `tailwind.config.js` — all customization goes in `src/index.css` via `@theme {}`
- Utility classes that reference design tokens use the token name directly: `bg-primary`, `text-on-surface`, `rounded-lg`
- Arbitrary values like `text-[10px]` and `shadow-[0_0_8px_#ffb1c3]` are acceptable for one-off values not in the token system
