# edsonpaulo.github.io

Personal portfolio of Edson Paulo Gregório: frontend team lead and web & mobile developer. It's in English and Portuguese.

- GitHub Pages: https://edsonpaulo.github.io
- Vercel: https://edsonpaulo.vercel.app

It's built with Next.js 16 (App Router, static export) and Tailwind CSS 4. It needs Node 24 (see `.nvmrc`).

## Develop

```bash
npm install
npm run dev        # http://localhost:3000/en/
npm run build      # static site in out/
npm start          # serve out/ locally
```

## Edit the content

All text lives in `content/`. The components only render it.

| File | What it holds |
|---|---|
| `content/profile.ts` | name, intro, about, stats, contacts, education |
| `content/experience.ts` | work history and the sheerME products |
| `content/projects.ts` | every project. Set `visible: false` to hide one, `featured: true` to show it as a large card, and add a screenshot at `public/projects/<slug>.jpg` |
| `content/skills.ts` | skill groups |
| `content/i18n.ts` | interface strings in EN and PT |

Every text field has an `en` and a `pt` version.

## CV (PDF)

`/en/cv/` and `/pt/cv/` render a printable A4 CV from the same `content/` files. After editing content, regenerate the PDFs and commit them (needs Google Chrome; set `CHROME=/path` if it is elsewhere):

```bash
npm run cv
```

This writes `public/cv/edson-gregorio-cv-{en,pt}.pdf`. `public/cv/edson-gregorio-cv-2023.pdf` is the older hand-made CV, linked from Contact as a second option.

## Deploy

- **GitHub Pages:** `.github/workflows/deploy.yml` builds and publishes `out/` on every push to `main`. In the repo settings, set Pages → Source to "GitHub Actions".
- **Vercel:** import the repo. It detects Next.js and serves the static export as is.

`/` sends visitors to `/pt/` or `/en/` based on their browser language. The page for that redirect is `public/index.html`.
