# Widget Hub — Flutter Widgets Cheat Sheet

A small React app built with Vite that presents a curated cheat-sheet of Flutter widgets, organized by learning stage. The app includes a table of contents, card-based widget previews, and an AI-powered chat helper for widget recommendations. The repository uses Tailwind-style utility classes in the styles and an SVG favicon derived from the main logo.

This README explains how to get the project running locally, where to put environment variables, and a few troubleshooting tips.

## Features
- Interactive list of Flutter widgets grouped by stage
- Searchable / clickable Table of Contents
- AI chat helper (optional) for widget suggestions (requires API key)
- Responsive, modern UI built with Vite + React
- Scalable SVG favicon and full logo in the app header

## Technology stack
- React (JSX)
- Vite (dev server + build)
- Plain CSS / Tailwind-like utility classes (project uses utility-driven styling)
- Optional: external AI service (Gemini or other) via REST API

## Prerequisites
- Node.js >= 16 (recommended)
- npm (bundled with Node) or yarn/pnpm

## Getting started (Windows - cmd.exe)
1. Install dependencies:

```cmd
npm install
```

2. Run the development server:

```cmd
npm run dev
```

3. Open the app in the browser (Vite will print the local URL, usually http://localhost:5173)

4. Build for production:

```cmd
npm run build
```

5. Preview a production build locally:

```cmd
npm run preview
```

## Environment variables
Create a `.env` in the project root for any sensitive keys (this repo already ignores `.env`). Example variables used by the chat integration:

```
VITE_AI_API_KEY=your_api_key_here
VITE_AI_API_URL=https://api.example.com/v1
```

Notes:
- Prefix client-exposed env variables with `VITE_` so Vite will include them in the client bundle. Keep any server-only secrets out of frontend code.
- Do not commit `.env` files; `.gitignore` already contains common `.env` patterns.

## Files of interest
- `index.html` — HTML entry, favicon links
- `src/App.jsx` — main app layout and header
- `src/components/TableOfContents.jsx` — navigation component
- `src/components/ChatSection.jsx` — AI chat UI and integration
- `src/data/flutterWidgets.js` — the dataset of widgets rendered by the app
- `public/favicon.svg` — compact favicon (W icon)
- `public/logo.svg` — full logo used in the header

## Favicon vs. Logo
- The project uses `public/favicon.svg` for browser tab icons and `public/logo.svg` for the full header logo. If you want a different icon exported (PNG sizes, or different art), replace `public/favicon.svg` and/or update the `<link rel="icon" ...>` entries in `index.html`.

## Contributing
- Fork the repo and open a pull request.
- If you add or change widget data, please keep the structure in `src/data/flutterWidgets.js` consistent.

## Troubleshooting
- Dev server fails to start: check Node version and run `npm install` again.
- JSX or lint issues: make sure files use `.jsx` extension and Vite is configured for React.
- AI calls returning errors: verify `VITE_AI_API_KEY` and `VITE_AI_API_URL` are correct and that your API allows cross-origin requests from localhost.

## Commit history cleanup
- This repository may have had commits removed/rewound locally; if you reset commits and want to create a new initial commit, stage files and run:

```cmd
git add .
git commit -m "chore: initial commit"
```

## License
Choose a license for your project, for example MIT. Add a `LICENSE` file at the repository root if you plan to publish.

---

If you'd like, I can also:
- Add example `.env.example` with the VITE_* variables
- Add a short CONTRIBUTING.md
- Generate PNG versions of the favicon for older browsers

Tell me which of these you'd like next.
