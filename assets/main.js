function runTypingEffect() {
  const typedTarget = document.getElementById('typed-text');
  const cursor = document.querySelector('.hero__cursor');
  if (!typedTarget) return;

  const text = 'PROTFOLIO';
  let idx = 0;
  let direction = 1;
  let typingTimer;
  let blinkTimer;

  const tick = () => {
    typedTarget.textContent = text.slice(0, idx);
    idx += direction;

    if (idx > text.length) {
      direction = -1;
      typingTimer = setTimeout(tick, 800);
      return;
    }

    if (idx < 0) {
      direction = 1;
      idx = 0;
      typingTimer = setTimeout(tick, 680);
      return;
    }

    typingTimer = setTimeout(tick, direction === 1 ? 140 : 90);
  };

  tick();

  if (cursor) {
    blinkTimer = setInterval(() => {
      cursor.classList.toggle('is-off');
    }, 500);
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

  const showNav = () => nav.classList.add('nav--visible');
  const hideNav = () => nav.classList.remove('nav--visible');

  if (!hero) {
    showNav();
    return;
  }

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          hideNav();
        } else {
          showNav();
        }
      },
      { threshold: 0.2, rootMargin: '-8% 0px -30% 0px' }
    );

    observer.observe(hero);
  }

  const scrollHandler = () => {
    if (window.scrollY > hero.clientHeight * 0.35) {
      showNav();
    } else {
      hideNav();
    }
  };

  window.addEventListener('scroll', scrollHandler, { passive: true });
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
