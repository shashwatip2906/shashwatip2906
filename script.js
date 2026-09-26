const stage = document.querySelector('.character-stage');
const pupils = document.querySelectorAll('.pupil');
const glow = document.querySelector('.cursor-glow');

function moveEyes(clientX, clientY) {
  pupils.forEach((pupil) => {
    const eye = pupil.closest('.eye-white').getBoundingClientRect();
    const cx = eye.left + eye.width / 2;
    const cy = eye.top + eye.height / 2;
    const angle = Math.atan2(clientY - cy, clientX - cx);
    const distance = Math.min(12, Math.hypot(clientX - cx, clientY - cy) / 18);
    pupil.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
  });
}

document.addEventListener('mousemove', (event) => {
  moveEyes(event.clientX, event.clientY);
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});

// A small idle eye movement keeps the character alive when the cursor is outside the page.
let idle = 0;
setInterval(() => {
  if (!document.hasFocus()) return;
  idle += 0.035;
  const rect = stage.getBoundingClientRect();
  if (rect.bottom > 0 && rect.top < window.innerHeight) {
    moveEyes(rect.left + rect.width / 2 + Math.cos(idle) * 90, rect.top + rect.height / 2 + Math.sin(idle * 1.3) * 50);
  }
}, 50);

// Occasional blink.
const face = document.querySelector('.face');
setInterval(() => {
  face.animate([{transform:'scaleY(1)'},{transform:'scaleY(.08)'},{transform:'scaleY(1)'}], {duration:170, easing:'ease-in-out'});
}, 4800);

// Scroll reveal.
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, {threshold: .12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Respect reduced-motion preferences.
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('*').forEach(el => el.style.animationDuration = '0.001ms');
}
