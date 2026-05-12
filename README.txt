LUNETTERIE DES ROIS — Site preview 2026
========================================

This folder contains the complete redesigned website.

PAGES
-----
  index.html              Homepage
  notre-expertise.html    Notre expertise (overview)
  un-certain-regard.html  Journal (blog archive)
  createurs.html          Nos collections
  materiaux.html          Matériaux
  notre-metier.html       Notre métier (overview)
  conseil.html            Qualité · Conseil · Service
  optique.html            Optique
  et-aussi.html           Sur mesure et service location
  notre-magasin.html      Notre magasin (overview)
  magasin.html            Un lieu
  vitrines.html           Vitrines
  equipe.html             Équipe
  contact.html            Contact
  article.html            Single article template (renders ?post=<slug>)

ASSETS
------
  style.css               All styles
  layout.js               Header / drawer / footer injector
  script.js               Mobile menu + scroll interactions

SEO / META
----------
  favicon.svg             Site icon
  site.webmanifest        PWA manifest
  robots.txt              Crawler directives
  sitemap.xml             URL list for search engines

DEPLOYMENT
----------
  _headers                Netlify security headers + cache policy
  netlify.toml            Publish config + light redirects

AUDIT / QA (optional, requires Node.js)
---------------------------------------
  package.json                  npm scripts
  lighthouserc.json             Lighthouse CI thresholds
  tests/accessibility.spec.ts   Axe accessibility test (Playwright)

OPEN LOCALLY
------------
Double-click index.html.

DEPLOY TO NETLIFY
-----------------
1. Open https://app.netlify.com/drop
2. Drag this ENTIRE FOLDER onto the drop area
3. Wait ~10 seconds for a public URL

DEPLOY ALTERNATIVES
-------------------
  Cloudflare Pages:  https://pages.cloudflare.com  (free)
  Vercel:            https://vercel.com/new         (free)
  Surge.sh:          npm i -g surge && surge .      (CLI, free)

RUN AUDITS LOCALLY (Node.js 18+)
--------------------------------
  npm install
  npm run serve         # terminal 1
  npm run audit         # terminal 2  (Lighthouse + axe)

Or individually:
  npm run lhci          # Lighthouse only
  npm run test:a11y     # accessibility only

CANONICAL URL NOTE
------------------
All canonical / sitemap / robots entries point at
https://lunetteriedesrois.ch — the existing WordPress domain
this redesign is intended to replace. If the redesign goes live
on a different host first, update:
  - <link rel="canonical"> in each *.html
  - sitemap.xml <loc> entries
  - robots.txt Sitemap: line

IMAGES
------
Photos are pulled live from lunetteriedesrois.ch (the existing
WordPress site). No image files are stored in this folder.
