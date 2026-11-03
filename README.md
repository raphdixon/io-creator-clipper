# Creator Clipper

Multicam live-event clipping prototype featuring Mia Montesin's **V3 Light Mode Figma design** (`lUWYfEH28uFZB39NYjUaAC`) and real, frame-synchronized 4-camera ISO footage.

## Live Demo
- **Cloudflare Pages:** https://io-creator-clipper.pages.dev

## Features
- **V3 Light Mode Workspace:** Pure `#FFFFFF` canvas, sculpted `[ ] Creator Clipper` top notch, `#B3D6FB` clip & search-match states, `#FABD05` trim & export accents, collapsible right `Export` drawer (`E`), and responsive mobile `Export Clips` modal.
- **Frame-Synchronized 4-Camera Live Event (`NASA Artemis II Moon Launch`):**
  - `CAMERA 1` (`1`) — **Pad 39B Wide** (VAB Roof 4K broadcast wide)
  - `CAMERA 2` (`2`) — **Rocket Onboard** (SLS booster camera looking down at Pad 39B & explosive twin SRB separation)
  - `CAMERA 3` (`3`) — **8K Chase Plane** (Gyro-stabilized Cessna aerial tracking from 15,000 ft)
  - `CAMERA 4` (`4`) — **VIP Crowd** (Banana Creek spectator grandstand live reactions)
  - `⊞ QUAD` (`M`) — **4-Cam Multiview Split** playing all 4 angles simultaneously in genlock sync with continuous stereo NASA launch commentary + Orion crew voice comms.
- **Search-to-Timeline Highlighting:** Word-boundary-aware transcript search illuminates `#B3D6FB` cards with `#FBD44C` keyword highlights and plots match blocks along the 24-cell filmstrip timeline.
- **Multi-Range Timeline Dragging & Multi-Ratio Export:**
  - Single-click anywhere on the timeline to jump the playhead directly to the cursor.
  - Click-and-drag horizontally anywhere on the timeline to draw new `[ IN → OUT ]` clip ranges while preserving existing ranges.
  - Resize any bracket's `[` / `]` handles, drag a bracket's body to slide it, or click `✕` (`Delete`/`Backspace`) to remove it.
  - Export clips across `16:9`, `9:16`, `5:4`, and `1:1` for any single camera or `ALL 4 CAMS` (instant pre-cropped `.mp4` downloads or live browser `<canvas>` + `MediaRecorder` exact-range capture with burned-in captions via `Advanced`).

## Run Locally
Use an HTTP Range-capable static server (`206 Partial Content`) so multi-angle video seeking works instantaneously:
```bash
npx serve public -l 8788
```

## Deploy to Cloudflare Pages
```bash
npx wrangler pages deploy ./public --project-name io-creator-clipper --branch main
```
