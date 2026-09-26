/* =========================================================
   SHASHWATI PINGALKAR — PORTFOLIO SCRIPT
   Vanilla JS only. No dependencies.
   ========================================================= */

(function () {
  "use strict";

  /* ---------------------------------------------------------
     0. CONFIG — edit social links here in one place
     --------------------------------------------------------- */
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

  const ICONS = {
    GitHub: '<svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>',
    LinkedIn: '<svg viewBox="0 0 16 16" fill="currentColor"><path d="M0 1.15C0 .52.53 0 1.19 0h13.62C15.47 0 16 .52 16 1.15v13.7c0 .63-.53 1.15-1.19 1.15H1.19C.53 16 0 15.48 0 14.85V1.15zM4.75 13.4V6.17H2.39v7.23h2.36zM3.57 5.2c.82 0 1.33-.55 1.33-1.23-.02-.7-.5-1.23-1.31-1.23-.81 0-1.33.53-1.33 1.23 0 .68.5 1.23 1.3 1.23h.01zM6.13 13.4h2.36V9.37c0-.22.02-.43.08-.59.18-.43.58-.88 1.25-.88.89 0 1.24.66 1.24 1.63v3.87h2.36V9.25c0-2.13-1.15-3.12-2.68-3.12-1.24 0-1.78.68-2.09 1.15h.02v-.99H6.13c.03.65 0 7.11 0 7.11z"/></svg>',
    Kaggle: '<svg viewBox="0 0 16 16" fill="currentColor"><path d="M3.3 12.7l3.7-3.8-3.6-3.7h2.5l3.2 3.4V2h1.9v10.7h-1.9V9.2l-3.3 3.5H3.3zm9.4-8.4L9.9 7.9l3.2 4.8h-2.2L8.6 8.7v4H6.7V5.1l1.9-1.9v3.6l3-3.5h2.1z"/></svg>',
    "Dev.to": '<svg viewBox="0 0 16 16" fill="currentColor"><path d="M4.5 6.4h-1v3.2h1c.3 0 .5-.2.5-.5V6.9c0-.3-.2-.5-.5-.5zM0 4.9v6.2h2.9c.9 0 1.6-.7 1.6-1.6V6.5c0-.9-.7-1.6-1.6-1.6H0zm1.1 1.1h1.4c.3 0 .5.2.5.5v3c0 .3-.2.5-.5.5H1.1V6zm5.6-1.1c-1 0-1.7.7-1.7 1.6v3c0 .9.8 1.6 1.7 1.6h1.7V10H6.9c-.4 0-.6-.2-.6-.6V8.6h2.1V7.5H6.3v-.9c0-.4.2-.6.6-.6h1.5V4.9H6.7zm4 0v6.2h1.1V8.9L13 11.1h1.3l-1.9-2.5 1.8-3.7h-1.2l-1.4 3-.6-.8V4.9h-1.1z"/></svg>',
    Substack: '<svg viewBox="0 0 16 16" fill="currentColor"><path d="M2 3h12v1.6H2V3zm0 3h12v1.6H2V6zm0 3h12v1.6H2V9zM2 12l6 3 6-3v-2.2H2V12z"/></svg>',
    X: '<svg viewBox="0 0 16 16" fill="currentColor"><path d="M9.5 6.8 15 1h-2l-4.4 5-3.5-5H1l5.7 8.1L1 15h2l4.7-5.4L11.5 15H15L9.5 6.8z"/></svg>',
    CodePen: '<svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 0 15.5 5v6L8 16 .5 11V5L8 0zm0 1.8L2 5.7l6 3.9 6-3.9-6-3.9zM2 6.9v4.3l4.8-3.1L2 6.9zM8 10.6l-5 3.2 5 3.3v-6.5zm.9.6v6.5l5-3.3-5-3.2zm.3-1.7 4.8 3.1V6.9L9.2 9.5z"/></svg>',
    Dribbble: '<svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 0a8 8 0 100 16A8 8 0 008 0zm5.3 3.7a6.7 6.7 0 011.4 4 20 20 0 00-3-.3c-.2-.5-.4-1-.6-1.4a13 13 0 002.2-2.3zM8 1.4c1.3 0 2.5.4 3.5 1.1a11 11 0 01-2 2.1A16 16 0 007 1.5c.3 0 .7-.1 1-.1zM5.5 2c1 1.1 2 2.3 2.9 3.7-1.9.5-3.9.7-5.9.7A6.7 6.7 0 015.5 2zM1.4 8v-.2c2.3 0 4.6-.3 6.8-.9.2.4.4.7.5 1.1-2.5.8-4.7 2.1-6.5 3.9A6.6 6.6 0 011.4 8zm2.6 5c1.6-1.7 3.6-3 5.9-3.7.6 1.7 1 3.5 1.2 5.4a6.7 6.7 0 01-7.1-1.7zm8.4 1c-.2-1.7-.6-3.4-1.1-5 1-.1 2-.1 3 0a6.7 6.7 0 01-1.9 5z"/></svg>',
    Behance: '<svg viewBox="0 0 16 16" fill="currentColor"><path d="M4.9 6.5c.6-.3 1-.8 1-1.7 0-1.5-1.1-2.2-2.7-2.2H0v8.6h3.4c1.7 0 2.9-.8 2.9-2.4 0-1-.5-1.9-1.4-2.3zM1.6 4h1.5c.7 0 1.2.3 1.2.9 0 .6-.5.9-1.2.9H1.6V4zm1.7 6.1H1.6V7.9h1.8c.8 0 1.3.4 1.3 1.1 0 .7-.5 1.1-1.4 1.1zM12 4.9H8.7v1h3.3v-1zM10.3 6c-1.8 0-3 1.3-3 3.2 0 2 1.3 3.1 3.1 3.1 1.5 0 2.5-.7 2.9-1.9h-1.4c-.2.5-.7.8-1.4.8-1 0-1.6-.6-1.7-1.6H14c0-.2 0-.3 0-.5 0-1.9-1.1-3.1-2.8-3.1zm-1.5 2.5c.1-.9.6-1.4 1.5-1.4.8 0 1.4.6 1.4 1.4H8.8z"/></svg>'
  };

  /* ---------------------------------------------------------
     1. Reduced motion check
     --------------------------------------------------------- */
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isTouchDevice = window.matchMedia("(hover: none), (pointer: coarse)").matches;

  /* ---------------------------------------------------------
     2. Mobile nav toggle
     --------------------------------------------------------- */
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
    navLinks.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        navLinks.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  /* ---------------------------------------------------------
     3. Star / particle field background (canvas)
     --------------------------------------------------------- */
  (function initStarField() {
    const canvas = document.getElementById("star-field");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let stars = [];
    let w, h, dpr;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(140, Math.floor((w * h) / 9000));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.4 + 0.3,
        baseAlpha: Math.random() * 0.5 + 0.25,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.4 + 0.15,
        drift: (Math.random() - 0.5) * 0.06
      }));
    }

    function draw(t) {
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        const twinkle = prefersReducedMotion
          ? s.baseAlpha
          : s.baseAlpha + Math.sin(t * 0.001 * s.speed + s.phase) * 0.25;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        const hueMix = s.r > 1.1 ? "139,159,255" : "167,139,250";
        ctx.fillStyle = `rgba(${hueMix}, ${Math.max(0, Math.min(1, twinkle))})`;
        ctx.fill();
        if (!prefersReducedMotion) {
          s.y += s.drift;
          if (s.y < -5) s.y = h + 5;
          if (s.y > h + 5) s.y = -5;
        }
      }
      if (!prefersReducedMotion) requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    requestAnimationFrame(draw);
    if (prefersReducedMotion) draw(0); // draw once, static
  })();

  /* ---------------------------------------------------------
     4. Eye tracking — cursor-following pupils
     --------------------------------------------------------- */
  (function initEyeTracking() {
    const svg = document.getElementById("character-svg");
    if (!svg) return;

    const leftPupilGroups = [
      { pupil: document.getElementById("leftPupil"), core: document.getElementById("leftPupilCore"), shine: document.getElementById("leftPupilShine") }
    ];
    const rightPupilGroups = [
      { pupil: document.getElementById("rightPupil"), core: document.getElementById("rightPupilCore"), shine: document.getElementById("rightPupilShine") }
    ];

    const leftLidCover = document.getElementById("leftLidCover");
    const rightLidCover = document.getElementById("rightLidCover");

    // Eye centers in the SVG's own coordinate space (viewBox units)
    const EYE = {
      left: { cx: 200, cy: 224, maxR: 8 },
      right: { cx: 260, cy: 224, maxR: 8 }
    };

    let targetX = 230, targetY = 200; // default gaze point in viewBox units (looking slightly up/forward)
    let currentOffset = { left: { x: 0, y: 0 }, right: { x: 0, y: 0 } };
    let idleAngle = 0;
    let lastBlink = performance.now();
    let nextBlinkDelay = randomBlinkDelay();
    let blinking = false;
    let rafId = null;

    function randomBlinkDelay() {
      return 2600 + Math.random() * 3200;
    }

    function getSvgPoint(clientX, clientY) {
      const pt = svg.createSVGPoint();
      pt.x = clientX;
      pt.y = clientY;
      const screenCTM = svg.getScreenCTM();
      if (!screenCTM) return { x: EYE.left.cx, y: EYE.left.cy };
      const transformed = pt.matrixTransform(screenCTM.inverse());
      return { x: transformed.x, y: transformed.y };
    }

    function updateTargetFromPointer(clientX, clientY) {
      const p = getSvgPoint(clientX, clientY);
      targetX = p.x;
      targetY = p.y;
    }

    function computeOffset(eye, tx, ty) {
      const dx = tx - eye.cx;
      const dy = ty - eye.cy;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      const clampedDist = Math.min(dist, eye.maxR * 6); // normalize so far cursor still gives full range
      const norm = clampedDist / (eye.maxR * 6);
      const angle = Math.atan2(dy, dx);
      const r = norm * eye.maxR;
      return { x: Math.cos(angle) * r, y: Math.sin(angle) * r };
    }

    function lerp(a, b, t) {
      return a + (b - a) * t;
    }

    function tick(now) {
      // idle breathing sway when no pointer interaction (touch/reduced-motion aware)
      if (!isTouchDevice && !prefersReducedMotion) {
        idleAngle += 0.006;
      }

      const desiredLeft = computeOffset(EYE.left, targetX, targetY);
      const desiredRight = computeOffset(EYE.right, targetX, targetY);

      const lerpFactor = prefersReducedMotion ? 1 : 0.12;

      currentOffset.left.x = lerp(currentOffset.left.x, desiredLeft.x, lerpFactor);
      currentOffset.left.y = lerp(currentOffset.left.y, desiredLeft.y, lerpFactor);
      currentOffset.right.x = lerp(currentOffset.right.x, desiredRight.x, lerpFactor);
      currentOffset.right.y = lerp(currentOffset.right.y, desiredRight.y, lerpFactor);

      applyPupilTransform(leftPupilGroups, currentOffset.left);
      applyPupilTransform(rightPupilGroups, currentOffset.right);

      handleBlink(now);

      rafId = requestAnimationFrame(tick);
    }

    function applyPupilTransform(groups, offset) {
      const t = `translate(${offset.x.toFixed(2)}px, ${offset.y.toFixed(2)}px)`;
      groups.forEach(({ pupil, core, shine }) => {
        if (pupil) pupil.style.transform = t;
        if (core) core.style.transform = t;
        if (shine) shine.style.transform = t;
      });
    }

    function handleBlink(now) {
      if (prefersReducedMotion) return; // minimize animation
      if (!blinking && now - lastBlink > nextBlinkDelay) {
        blinking = true;
        animateBlink();
        lastBlink = now;
        nextBlinkDelay = randomBlinkDelay();
      }
    }

    function animateBlink() {
      const duration = 140;
      const start = performance.now();
      function step(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // close then open (two-phase using a sine curve for smoothness)
        const closeAmount = Math.sin(progress * Math.PI); // 0 -> 1 -> 0
        const coverHeight = closeAmount * 26;
        if (leftLidCover) {
          leftLidCover.setAttribute("y", (211 - coverHeight / 2).toString());
          leftLidCover.setAttribute("height", coverHeight.toString());
        }
        if (rightLidCover) {
          rightLidCover.setAttribute("y", (211 - coverHeight / 2).toString());
          rightLidCover.setAttribute("height", coverHeight.toString());
        }
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          blinking = false;
        }
      }
      requestAnimationFrame(step);
    }

    // idle default gaze target: gentle forward/up look when not tracking pointer (desktop, no pointer yet)
    function setIdleGazeLoop() {
      if (isTouchDevice || prefersReducedMotion) {
        targetX = 230;
        targetY = 205;
        return;
      }
    }

    if (isTouchDevice) {
      // Mobile/touch: disable cursor tracking, use idle animation only
      setIdleGazeLoop();
      if (!prefersReducedMotion) {
        rafId = requestAnimationFrame(tick);
        // gentle idle wandering of gaze target
        setInterval(() => {
          targetX = 230 + (Math.random() - 0.5) * 40;
          targetY = 205 + (Math.random() - 0.5) * 20;
        }, 3200);
      } else {
        // static single frame
        tick(performance.now());
      }
    } else {
      window.addEventListener("mousemove", (e) => {
        updateTargetFromPointer(e.clientX, e.clientY);
      }, { passive: true });

      setIdleGazeLoop();
      rafId = requestAnimationFrame(tick);
    }

    // subtle breathing / head sway on the whole SVG (desktop only, motion-safe)
    if (!isTouchDevice && !prefersReducedMotion) {
      let breatheT = 0;
      function breathe() {
        breatheT += 0.01;
        const sway = Math.sin(breatheT) * 1.4;
        const bob = Math.sin(breatheT * 0.7) * 2.2;
        svg.style.transform = `translate(${sway.toFixed(2)}px, ${bob.toFixed(2)}px)`;
        requestAnimationFrame(breathe);
      }
      requestAnimationFrame(breathe);
    }
  })();

  /* ---------------------------------------------------------
     5. Scroll reveal (IntersectionObserver)
     --------------------------------------------------------- */
  (function initReveal() {
    const items = document.querySelectorAll(".reveal, .timeline-item");
    if (!("IntersectionObserver" in window) || prefersReducedMotion) {
      items.forEach((el) => el.classList.add("in-view"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    items.forEach((el) => observer.observe(el));
  })();

  /* ---------------------------------------------------------
     6. Build philosophy step animation
     --------------------------------------------------------- */
  (function initPhilosophy() {
    const flow = document.getElementById("philosophyFlow");
    if (!flow) return;
    const steps = flow.querySelectorAll(".philosophy-step");
    let index = 0;

    function highlight() {
      steps.forEach((s) => s.classList.remove("active"));
      steps[index].classList.add("active");
      index = (index + 1) % steps.length;
    }

    if (prefersReducedMotion) {
      steps.forEach((s) => s.classList.add("active"));
      return;
    }

    let intervalId = null;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !intervalId) {
          highlight();
          intervalId = setInterval(highlight, 1100);
        } else if (!entry.isIntersecting && intervalId) {
          clearInterval(intervalId);
          intervalId = null;
        }
      });
    }, { threshold: 0.4 });
    observer.observe(flow);
  })();

  /* ---------------------------------------------------------
     7. Online presence cards (built from SOCIAL_LINKS config)
     --------------------------------------------------------- */
  (function renderPresence() {
    const grid = document.getElementById("presenceGrid");
    if (!grid) return;

    Object.keys(SOCIAL_LINKS).forEach((name) => {
      const entry = SOCIAL_LINKS[name];
      const isActive = Boolean(entry.active && entry.url);
      const icon = ICONS[name] || "";

      const card = document.createElement(isActive ? "a" : "div");
      card.className = "presence-card glass reveal" + (isActive ? " is-active" : "");
      if (isActive) {
        card.href = entry.url;
        card.target = "_blank";
        card.rel = "noopener noreferrer";
        card.setAttribute("aria-label", `${name} (opens in a new tab)`);
      } else {
        card.setAttribute("aria-label", `${name} — not yet linked`);
      }

      card.innerHTML = `
        ${icon}
        <span class="presence-name">${name}</span>
        <span class="presence-status">${isActive ? "View profile" : "Coming soon"}</span>
      `;
      grid.appendChild(card);
    });

    // re-run reveal observer for newly injected cards
    if ("IntersectionObserver" in window && !prefersReducedMotion) {
      const newItems = grid.querySelectorAll(".reveal");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );
      newItems.forEach((el) => observer.observe(el));
    } else {
      grid.querySelectorAll(".reveal").forEach((el) => el.classList.add("in-view"));
    }
  })();

})();
