# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A browser-native pitch deck for **共振 Resonance** — a 11-slide React presentation running entirely in-browser with no build step. Open `index.html` in a browser to view it.

## How to run

```sh
# Any static file server works:
npx serve .
# or
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

There are no tests, no linter config, and no build pipeline.

## Navigation (in-browser)

- `←`/`→`, Space, PgUp/PgDn — previous/next slide
- Number keys `1`–`9` — jump to that slide
- `R` or Home — reset to slide 1
- Slide index is persisted to `localStorage` by URL path

## Architecture

The stack is deliberately zero-build: React 18 + Babel Standalone are loaded from CDN, JSX is transpiled in-browser at runtime.

**Loading order matters** — scripts in `index.html` must be loaded in this sequence:
1. `deck-stage.js` — vanilla JS custom element (`<deck-stage>`) that handles navigation, scaling, print, and the slide overlay UI. Runs before React.
2. `components/atoms.jsx` — design-system primitives. Exports all symbols to `window` (not ES modules).
3. `components/slide_parts.jsx` — slide scaffolding built on atoms. Also exported to `window`.
4. `components/slides.jsx` — the 11 slide components (`Slide01Cover` … `Slide11Closing`).
5. Inline `<script type="text/babel">` in `index.html` — mounts each slide into its `<section>` via `ReactDOM.createRoot`.

Because Babel Standalone compiles JSX files that are not ES modules, **all shared identifiers are on `window`** — `atoms.jsx` assigns everything to `window`, `slide_parts.jsx` reads from `window` and assigns its own exports, and `slides.jsx` consumes both.

**Key components:**

| Component | File | Purpose |
|---|---|---|
| `<deck-stage>` | `deck-stage.js` | Web component wrapper; scales canvas, handles keyboard/touch nav, print layout |
| `SlideFrame` | `slide_parts.jsx` | Root container for every slide; sets background, padding, grain, chrome |
| `HandDrawnBorder` | `atoms.jsx` | SVG bezier border with seeded wobble — the core visual primitive |
| `wobRect` | `atoms.jsx` | Generates SVG path data for hand-drawn rounded rectangles |
| `GrainOverlay` / `ShapeGrain` | `atoms.jsx` | Paper-grain SVG filters |
| `OrganiBlob` | `atoms.jsx` | Organic blob shapes used as decorative background elements |
| `SectionEdge` | `atoms.jsx` | Wavy SVG transition between sections |
| `OrganicButton` / `TagPill` | `atoms.jsx` | Interactive/badge elements with hand-drawn borders |

**Design tokens** are CSS custom properties defined in `index.html`'s `<style>` block:
- `--color-cream`, `--color-terracotta`, `--color-lavender`, `--color-sage`, `--color-yellow`, `--color-sky`
- `--font-heading` (Playfair Display / Noto Serif TC), `--font-body` (DM Sans / Noto Sans TC)
- Type scale and spacing constants live in `slide_parts.jsx` as `TYPE_SCALE` and `SPACING`

**Slide design pattern:** every slide function wraps content in `<SlideFrame>` with optional `decor` (blobs), `chrome` (`<BrandMark />` + `<SlideNumber />`), and `grain` opacity. Slides are mounted to `<section id="sN">` elements inside `<deck-stage>`.

## Adding a new slide

1. Add a `<section data-label="NN Label" id="sN"></section>` to `index.html`
2. Write `function SlideNN...()` in `slides.jsx`
3. Add `['sN', SlideNN]` to the `mounts` array in the inline script
4. Increment `TOTAL_SLIDES` in `slides.jsx`

## Print / PDF export

`File → Print → Save as PDF` in a browser produces one slide per page at 1920×1080 — handled by `@media print` rules inside `deck-stage.js` and a `@page` style injected into `<head>`.
