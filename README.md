# Lunetterie des Rois — site 2026

Static website for [Lunetterie des Rois](https://lunetteriedesrois.ch), an independent Geneva optician.

**Live preview:** <https://lunetterie.netlify.app>

## Stack

- Plain HTML + CSS + JavaScript — no build step, no framework
- 15 pages with a shared header / drawer / footer injected at runtime by `layout.js`
- Cormorant + Inter from Google Fonts
- Deployed on Netlify (free tier)

## Local development

Just open `index.html` in a browser, or serve the folder:

```bash
npm install        # only needed for audit tools
npm run serve      # http://localhost:4173
```

## Auditing

```bash
npm run lhci         # Lighthouse CI
npm run test:a11y    # axe accessibility (Playwright)
npm run audit        # both
```

## Deployment

Pushes to `main` deploy automatically to <https://lunetterie.netlify.app>.

## Structure

```
.
├── index.html              Homepage
├── notre-expertise.html    Notre expertise overview
├── un-certain-regard.html  Journal archive
├── createurs.html          Nos collections
├── materiaux.html          Matériaux
├── notre-metier.html       Notre métier overview
├── conseil.html            Qualité · Conseil · Service
├── optique.html            Optique
├── et-aussi.html           Sur mesure & service location
├── notre-magasin.html      Notre magasin overview
├── magasin.html            Un lieu
├── vitrines.html           Vitrines
├── equipe.html             Équipe
├── contact.html            Contact
├── article.html            Single article template (?post=<slug>)
│
├── style.css               All styles
├── layout.js               Header / drawer / footer injector
├── script.js               Mobile menu + scroll reveal
│
├── favicon.svg             Site icon
├── site.webmanifest        PWA manifest
├── robots.txt              Crawler directives
├── sitemap.xml             URL list for search engines
│
├── _headers                Netlify security headers + caching
├── netlify.toml            Publish config + redirects
│
├── package.json            Audit tooling
├── lighthouserc.json       Lighthouse CI thresholds
└── tests/
    └── accessibility.spec.ts
```

## Canonical domain

Canonical URLs in HTML / `sitemap.xml` / `robots.txt` point at <https://lunetteriedesrois.ch> — the existing WordPress domain this redesign replaces.
