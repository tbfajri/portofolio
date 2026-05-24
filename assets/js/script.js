const nodes = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

nodes.forEach((node, index) => {
  node.style.transitionDelay = `${Math.min(index * 70, 420)}ms`;
  observer.observe(node);
});

const langButtons = document.querySelectorAll('[data-lang-set]');
const translatableNodes = document.querySelectorAll('[data-i18n-id][data-i18n-en]');
let currentLang = 'id';

function setLanguage(lang) {
  currentLang = lang;
  translatableNodes.forEach((node) => {
    node.textContent = node.getAttribute(lang === 'id' ? 'data-i18n-id' : 'data-i18n-en');
  });

  langButtons.forEach((btn) => {
    const isActive = btn.getAttribute('data-lang-set') === lang;
    btn.classList.toggle('active', isActive);
  });
}

langButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    setLanguage(btn.getAttribute('data-lang-set'));
  });
});

setLanguage('id');

const sliders = document.querySelectorAll('[data-slider]');

sliders.forEach((slider) => {
  const slides = slider.querySelectorAll('.slide');
  const dots = slider.querySelectorAll('[data-slide-to]');
  const prevBtn = slider.querySelector('[data-slide="prev"]');
  const nextBtn = slider.querySelector('[data-slide="next"]');
  let index = 0;

  const renderSlide = () => {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  };

  prevBtn?.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    renderSlide();
  });

  nextBtn?.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    renderSlide();
  });

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      index = Number(dot.getAttribute('data-slide-to')) || 0;
      renderSlide();
    });
  });

  renderSlide();
});

const modalOverlay = document.getElementById('portfolio-modal-overlay');
const modalClose = document.getElementById('portfolio-modal-close');
const modalCategory = document.getElementById('portfolio-modal-category');
const modalTitle = document.getElementById('portfolio-modal-title');
const modalDescription = document.getElementById('portfolio-modal-description');
const modalImage = document.getElementById('portfolio-modal-image');
const modalTriggers = document.querySelectorAll('.slide img[data-modal-category-id]');

function openPortfolioModal(trigger) {
  if (!modalOverlay || !trigger) return;
  const suffix = currentLang === 'id' ? 'id' : 'en';

  modalCategory.textContent = trigger.getAttribute(`data-modal-category-${suffix}`) || '';
  modalTitle.textContent = trigger.getAttribute(`data-modal-title-${suffix}`) || '';
  modalDescription.textContent = trigger.getAttribute(`data-modal-description-${suffix}`) || '';
  if (modalImage) {
    modalImage.src = trigger.getAttribute('src') || '';
    modalImage.alt = trigger.getAttribute('alt') || modalTitle.textContent || 'Portfolio image';
  }

  modalOverlay.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closePortfolioModal() {
  if (!modalOverlay) return;
  modalOverlay.hidden = true;
  document.body.style.overflow = '';
  if (modalImage) {
    modalImage.src = '';
  }
}

modalTriggers.forEach((trigger) => {
  trigger.addEventListener('click', () => {
    openPortfolioModal(trigger);
  });
});

modalClose?.addEventListener('click', closePortfolioModal);

modalOverlay?.addEventListener('click', (event) => {
  if (event.target === modalOverlay) closePortfolioModal();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modalOverlay && !modalOverlay.hidden) {
    closePortfolioModal();
  }
});
