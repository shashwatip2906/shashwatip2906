# ◈ Shashwati — Digital Space

> An interactive personal website built as a GitHub Pages experience.

This repository contains the source for my personal digital space — a small interactive corner of the internet where my projects, learning journey and experiments live.

The goal was deliberately different from a conventional portfolio: **minimal, slightly mysterious, animated, and memorable.**

## ✦ Features

- Interactive anime-inspired character
- Cursor-tracking eyes using JavaScript
- Idle eye movement
- Subtle blinking animation
- Floating character animation
- Cursor glow
- Scroll reveal animations
- Responsive layout
- Dark futuristic interface
- No framework required
- Deployable directly with GitHub Pages

## 🗂 Structure

```text
.
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
```

## 🚀 Run locally

Clone/download the repository and open `index.html` in a browser.

For the smoothest local experience, use a small static server such as VS Code Live Server.

## 🌐 Deploy with GitHub Pages

1. Create a public GitHub repository.
2. Upload `index.html`, `style.css`, `script.js`, `README.md`, and the `assets` folder.
3. Open **Settings → Pages**.
4. Select **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`.
6. Save.
7. GitHub will provide the Pages URL.

## 🎨 Customization

Change these first:

- Your social links in `index.html`
- Project descriptions and links
- Text in the hero section
- Colors in `:root` inside `style.css`
- Character artwork if you want to replace the CSS character with custom art

## 👁 How the eyes work

The eyes are intentionally built with HTML/CSS rather than an external image. JavaScript reads the cursor position, calculates the angle from each eye toward the cursor, and translates each pupil a small distance in that direction.

That means the interaction works without a canvas, library, or external animation framework.

## 📌 Design philosophy

```text
learn → build → break → debug → document → repeat
```

This site is meant to evolve alongside the person behind it.

---

### Built with

HTML · CSS · JavaScript · curiosity

