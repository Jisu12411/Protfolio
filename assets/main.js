function runTypingEffect() {
  const typedTarget = document.getElementById('typed-text');
  const cursor = document.querySelector('.hero__cursor');
  if (!typedTarget) return;

  const text = 'PROTFOLIO';
  let idx = 0;

  function type() {
    if (idx <= text.length) {
      typedTarget.textContent = text.slice(0, idx);
      idx += 1;
      setTimeout(type, 150);
    } else {
      setTimeout(() => {
        idx = 0;
        typedTarget.textContent = '';
        type();
      }, 1100);
    }
  }

  type();

  if (cursor) {
    setInterval(() => {
      cursor.classList.toggle('is-off');
    }, 520);
  }
}

function initNav() {
  const nav = document.getElementById('top-nav');
  const hero = document.getElementById('hero');
  if (!nav) return;

  if (!hero) {
    nav.classList.add('nav--visible');
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          nav.classList.remove('nav--visible');
        } else {
          nav.classList.add('nav--visible');
        }
      });
    },
    { threshold: 0.25 }
  );

  observer.observe(hero);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    runTypingEffect();
    initNav();
  });
} else {
  runTypingEffect();
  initNav();
}
