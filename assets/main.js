const typedTarget = document.getElementById('typed-text');
const cursor = document.querySelector('.hero__cursor');
const nav = document.getElementById('top-nav');
const hero = document.getElementById('hero');

function runTypingEffect() {
  if (!typedTarget) return;
  const text = 'PROTFOLIO';
  let idx = 0;

  function type() {
    if (idx <= text.length) {
      typedTarget.textContent = text.slice(0, idx) + '_';
      idx += 1;
      setTimeout(type, 160);
    } else {
      setTimeout(() => {
        idx = 0;
        type();
      }, 1200);
    }
  }

  type();

  if (cursor) {
    setInterval(() => {
      cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
    }, 550);
  }
}

function initNav() {
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
    { threshold: 0.4 }
  );

  observer.observe(hero);
}

runTypingEffect();
initNav();
