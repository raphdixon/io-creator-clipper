# Google I/O '26 · Creator Multi-Cam Clipper Studio

Concept prototype enabling creators and clippers to search long-form Google event keynotes, highlight spoken topics on an interactive timeline, trim In/Out points with frame thumbnails, switch between 4 synchronized ISO camera angles, reframe across aspect ratios (`16:9`, `5:4`, `9:16`, `1:1`), and export ready-to-post clips.

## Live Demo
- **Cloudflare Pages:** https://io-creator-clipper.pages.dev

## Features
- **Search-to-Timeline Highlighting:** Search spoken words or topics (e.g., `"video generation"`, `"Veo"`, `"Sundar"`, `"Omni"`, `"quadrillion"`) to illuminate matching segments along the timeline and transcript.
- **Interactive Filmstrip Timeline:** Drag `[ IN` and `OUT ]` handles, hover for a live frame loupe, or click any highlighted match marker to snap selection boundaries.
- **4 Synchronized ISO Camera Feeds:**
  - `CAM 1` — Big Screen / Slides (Veo & presentation direct feed)
  - `CAM 2` — Sundar Close-Up (85mm speaker tracking ISO)
  - `CAM 3` — Wide Stage (Shoreline Amphitheatre full stage)
  - `CAM 4` — Crowd & Reaction (Amphitheatre audience shots)
- **Aspect Ratio Reframing & Export:** Live crop preview and downloadable `.mp4` exports for `16:9` (Landscape), `5:4` (Social Feed), `9:16` (Vertical Shorts/Reels), and `1:1` (Square).

## Run Locally
Serve the `public/` directory with any static server:
```bash
npx serve public
# or
python3 -m http.server 8080 --directory public
```

## Deploy to Cloudflare Pages
```bash
npx wrangler pages deploy ./public --project-name io-creator-clipper --branch main
```
