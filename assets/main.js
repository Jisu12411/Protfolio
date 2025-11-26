const typedTarget = document.getElementById('typed-text');
const cursor = document.querySelector('.hero__cursor');
const nav = document.getElementById('top-nav');
const hero = document.getElementById('hero');

function runTypingEffect() {
  if (!typedTarget) return;
  const text = 'PORTFOLIO';
  let idx = 0;

  function type() {
    if (idx <= text.length) {
      typedTarget.textContent = text.slice(0, idx) + '_';
      idx++;
    }
    setTimeout(type, 180);
  }

  type();

  if (cursor) {
    setInterval(() => {
      cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
    }, 600);
  }
}

function toggleNav() {
  if (!nav) return;
  if (!hero) {
    nav.classList.add('nav--visible');
    return;
  }

  const heroHeight = hero.offsetHeight;
  if (window.scrollY > heroHeight * 0.4) {
    nav.classList.add('nav--visible');
  } else {
    nav.classList.remove('nav--visible');
  }
}

function initNav() {
  if (!nav) return;
  toggleNav();
  document.addEventListener('scroll', toggleNav);
}

runTypingEffect();
initNav();
