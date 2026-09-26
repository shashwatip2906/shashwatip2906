# Shashwati Pingalkar — Interactive Portfolio

An anime-inspired, interactive personal portfolio for **Shashwati Pingalkar**, a B.Tech Data Science student at SPPU Pune. The centerpiece is an original anime-style character built entirely in SVG, whose eyes follow the visitor's cursor in real time.

No frameworks, no build step, no backend — just HTML, CSS, and vanilla JavaScript.

---

## What this is

A single-page portfolio with:

- A hero section featuring an original hand-coded SVG character with cursor-tracking eyes
- About, currently-learning, projects, learning-journey timeline, Master's-goal, build-philosophy, and online-presence sections
- A dark, glassmorphism-based visual design with violet/blue neon accents and a subtle animated star field
- Full keyboard accessibility, semantic HTML, and `prefers-reduced-motion` support
- Automatic fallback to idle animation (no cursor tracking) on touch devices

Everything is static. Open `index.html` in a browser and it works.

---

## Project structure

```
/
├── index.html      Markup for all sections + the inline SVG character
├── style.css       Design system, layout, responsive rules, animations
├── script.js       Eye tracking, star field, scroll reveal, social links config
└── README.md       This file
```

---

## Running locally

No installation, no dependencies, no build step.

**Option 1 — just open it**
Double-click `index.html`, or open it in your browser directly.

**Option 2 — local server (recommended for accurate testing)**
Some browsers restrict certain features when loading files via `file://`. A local server avoids that:

```bash
# Python 3
python3 -m http.server 8000

# then visit:
# http://localhost:8000
```

or, with Node installed:

```bash
npx serve .
```

---

## How the cursor-following eyes work

The character is a single inline `<svg id="character-svg">` element in `index.html`. Inside it:

```html
<g id="leftEye">
  ...
  <circle id="leftPupil" class="pupil" .../>
</g>
<g id="rightEye">
  ...
  <circle id="rightPupil" class="pupil" .../>
</g>
```

In `script.js`, the `initEyeTracking()` function:

1. Listens for `mousemove` on `window` (desktop only).
2. Converts the mouse's screen coordinates into the SVG's internal coordinate space using `getScreenCTM().inverse()`, so tracking stays accurate at any page zoom or layout size.
3. For each eye, computes the vector from the eye's center to the cursor position.
4. Normalizes that vector and **clamps** its length to a maximum radius (`maxR`), so the pupil can never visually leave the eye — this is verified mathematically (see below).
5. Smoothly interpolates (lerps) the pupil's current offset toward the target offset every animation frame via `requestAnimationFrame`, instead of snapping instantly, which gives the natural "follow" feeling.
6. Applies the offset using a CSS `transform: translate(...)` on the pupil, iris shine, and pupil core together, so they move as one unit.

Additionally:

- **Blinking** — a randomized timer (roughly every 2.6–5.8 seconds) triggers a short blink animation using an animated eyelid-cover rectangle, driven by a sine curve for a natural close/open motion.
- **Breathing/idle sway** — the whole character SVG gets a very subtle sinusoidal `translate` applied continuously, simulating slow breathing and a slight head bob.
- **Touch devices** — detected via `matchMedia("(hover: none), (pointer: coarse)")`. On these devices, cursor tracking is disabled entirely and the eyes instead drift toward randomized idle gaze points every few seconds.
- **`prefers-reduced-motion`** — when enabled, blinking, breathing, and the star field's motion are all disabled or reduced to a single static frame, and pupils snap directly to position instead of easing.

---

## Customizing your information

All personal content lives in plain HTML inside `index.html` — no templating engine, so it's safe to edit directly.

| What to change | Where |
|---|---|
| Name, role, hero description | `<section class="hero">` in `index.html` |
| About text | `<section id="about">` |
| Skill tags | `<div class="skills-grid">` — add/remove `<span class="skill-tag">` elements |
| Projects | `<section id="projects">` — duplicate a `<article class="project-card">` block |
| Timeline steps | `<section id="journey">` — duplicate a `<div class="timeline-item">` block |
| Master's-goal destinations | `<section id="masters">` — edit `<div class="destination">` entries |
| Colors / fonts / spacing | CSS custom properties at the top of `style.css` under `:root` |

The character SVG itself lives inline inside the hero section, tagged with an HTML comment (`<!-- ORIGINAL ANIME-STYLE CHARACTER ... -->`). You can restyle colors by editing the gradient `<stop>` values inside `<defs>` (e.g. `hairGrad`, `skinGrad`, `clothGrad`) without touching the geometry.

---

## Adding / updating social links

All social links are controlled from **one place**: the `SOCIAL_LINKS` object near the top of `script.js`.

```js
const SOCIAL_LINKS = {
  GitHub:   { url: "https://github.com/shashwatip2906", active: true },
  LinkedIn: { url: "", active: false },
  Kaggle:   { url: "", active: false },
  "Dev.to": { url: "", active: false },
  Substack: { url: "", active: false },
  X:        { url: "", active: false },
  CodePen:  { url: "", active: false },
  Dribbble: { url: "", active: false },
  Behance:  { url: "", active: false }
};
```

To activate a profile once you have a real URL:

```js
LinkedIn: { url: "https://linkedin.com/in/your-actual-handle", active: true },
```

Cards for `active: false` entries still render (so the section stays visually complete) but show "Coming soon" instead of a link, and aren't clickable. No URLs are invented anywhere in this project — inactive entries are intentionally left blank until you fill them in.

---

## Deploying with GitHub Pages

This project needs no build step, so GitHub Pages can serve it directly.

1. Create a repository named exactly:
   ```
   shashwatip2906.github.io
   ```
   (A repository with this exact name — `<username>.github.io` — is what GitHub Pages uses for a user's root site.)

2. Push these four files to the root of that repository:
   ```bash
   git init
   git add index.html style.css script.js README.md
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/shashwatip2906/shashwatip2906.github.io.git
   git push -u origin main
   ```

3. In the repository settings on GitHub:
   - Go to **Settings → Pages**
   - Under **Source**, select the `main` branch and the `/ (root)` folder
   - Save

4. Wait a minute or two, then visit:
   ```
   https://shashwatip2906.github.io
   ```

No further configuration is required — there's no build process, no environment variables, and no server-side code.

---

## Accessibility notes

- All interactive elements (nav links, skill tags, buttons) are keyboard-focusable with visible focus outlines.
- The character SVG includes `<title>` and `<desc>` elements for screen readers.
- Motion (blinking, breathing, star field twinkle, scroll reveals) is minimized automatically when the visitor's OS has "reduce motion" enabled.
- Color contrast between text and background follows WCAG-friendly ratios throughout.

---

## Notes on content accuracy

Every biographical detail, project description, and skill listed reflects only what was explicitly provided — no fabricated GitHub repository links, no invented university names or scholarships, no fake statistics, contribution graphs, or testimonials. Project cards without a public repository link say so plainly rather than pointing to a fake URL.
