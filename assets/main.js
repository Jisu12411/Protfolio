
function runTypingEffect() {
  const typedTarget = document.getElementById('typed-text');
  const cursor = document.querySelector('.hero__cursor');
  if (!typedTarget) return;

  const text = 'PROTFOLIO';
  let idx = 0;
  let typingTimer;
  let blinkTimer;

  const step = () => {
    typedTarget.textContent = text.slice(0, idx);
    idx = (idx + 1) % (text.length + 1);
    typingTimer = setTimeout(step, idx === 0 ? 1100 : 150);
  };

  step();

  if (cursor) {
    blinkTimer = setInterval(() => {
      cursor.classList.toggle('is-off');
    }, 520);
  }

  return () => {
    clearTimeout(typingTimer);
    clearInterval(blinkTimer);
  };
}

function initNav() {
  const nav = document.getElementById('top-nav');
  const hero = document.getElementById('hero');
  if (!nav) return;
  
  if (!hero) {
    nav.classList.add('nav--visible');
    return;
  }

  if (!('IntersectionObserver' in window)) {
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
    { threshold: 0.4, rootMargin: '-10% 0px -60% 0px' }
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
