# Prasanna Jain — Portfolio

A Squarespace-inspired single-page portfolio with scroll animations, clean typography, and responsive layout. Content migrated from [prassu017.github.io/prasanna-portfolio](https://prassu017.github.io/prasanna-portfolio/).

## Features

- **Hero** — Staggered fade-in on load, scroll indicator
- **About** — Skills, education, leadership in feature cards with hover states
- **Projects** — ESG Sentiment Agent & Sage AI Platform with tags and CTAs
- **Experience** — Timeline layout with markers
- **Beyond Code** — Grid of interest categories
- **Contact** — Email, LinkedIn, GitHub, resume download
- **Animations** — Scroll-triggered reveals (Intersection Observer), smooth scroll, mobile menu

## Run locally

1. Open the folder:
   ```bash
   cd ~/prasanna-portfolio
   ```
2. Serve the site (any static server). Examples:
   ```bash
   # Python 3
   python3 -m http.server 8000

   # Node (npx)
   npx serve .

   # VS Code: "Live Server" extension → Right-click index.html → Open with Live Server
   ```
3. Open [http://localhost:8000](http://localhost:8000) (or the port your server uses).

## Deploy to GitHub Pages

1. Create a repo (e.g. `prasanna-portfolio-v2`) and push this folder.
2. In the repo: **Settings → Pages** → Source: **Deploy from a branch**.
3. Branch: `main`, folder: `/ (root)` (or put the site in a `docs` folder and select it).
4. After deploy, the site will be at `https://<username>.github.io/<repo>/`.

## File structure

```
prasanna-portfolio/
├── index.html   # Structure and content
├── styles.css   # Layout, typography, motion, responsive
├── script.js    # Scroll animations, nav, footer year
└── README.md    # This file
```

## Resume link

The “Download Resume” button uses `assets/Prasanna_Jain_DataAnalysisIntern_TempleAllenIndustries_2025-12-24.docx`. To change it, update the link in `index.html` in both the hero and contact sections.
