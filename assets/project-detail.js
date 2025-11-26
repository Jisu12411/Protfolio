import { PROJECT_DATA } from './projects.js';

const slidesWrapper = document.getElementById('slides');
const breadcrumbEl = document.querySelector('[data-breadcrumb]');
const titleEl = document.querySelector('[data-title]');
const descEl = document.querySelector('[data-desc]');
const notesEl = document.querySelector('[data-notes]');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

const params = new URLSearchParams(window.location.search);
const slug = params.get('slug');
let currentIndex = 0;

function createMockImage(colors, height) {
  const el = document.createElement('div');
  el.className = 'mock-image' + (height > 850 ? ' tall' : '');
  el.style.backgroundImage = `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`;
  el.style.height = `${height}px`;
  return el;
}

function renderProject(project) {
  breadcrumbEl.textContent = project.label;
  titleEl.textContent = project.title;
  descEl.textContent = project.description;

  if (notesEl) {
    notesEl.innerHTML = '';
    project.notes.forEach((note) => {
      const pill = document.createElement('div');
      pill.className = 'meta-pill';
      pill.textContent = note;
      notesEl.appendChild(pill);
    });
  }

  slidesWrapper.innerHTML = '';
  project.slides.forEach((slide) => {
    const slideEl = document.createElement('div');
    slideEl.className = 'slide';

    const info = document.createElement('div');
    const h3 = document.createElement('h3');
    h3.textContent = slide.title;
    const p = document.createElement('p');
    p.textContent = slide.desc;
    info.append(h3, p);

    const visual = document.createElement('div');
    visual.className = 'slide-visual';
    visual.appendChild(createMockImage(slide.colors, slide.height));

    slideEl.append(info, visual);
    slidesWrapper.appendChild(slideEl);
  });

  updateSlidePosition();
}

function updateSlidePosition() {
  slidesWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slidesWrapper.children.length;
  updateSlidePosition();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slidesWrapper.children.length) % slidesWrapper.children.length;
  updateSlidePosition();
}

function bindControls() {
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  });
}

function renderError() {
  const main = document.querySelector('main');
  if (!main) return;
  main.innerHTML = '<div class="error">프로젝트를 찾을 수 없습니다. 목록에서 다시 선택해주세요.</div>';
}

function init() {
  const project = PROJECT_DATA.find((item) => item.slug === slug);
  if (!project) {
    renderError();
    return;
  }
  renderProject(project);
  bindControls();
}

init();
