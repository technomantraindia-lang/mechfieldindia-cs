/* Optional: load this file after the section to enable scroll reveal. */
(() => {
  const section = document.querySelector('.industries');
  if (!section || !('IntersectionObserver' in window)) {
    document.querySelectorAll('.industries [data-reveal]').forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const cards = section.querySelectorAll('[data-reveal]');
  cards.forEach((card, index) => card.style.setProperty('--reveal-delay', `${index * 95}ms`));

  if (reducedMotion) {
    cards.forEach((card) => card.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  cards.forEach((card) => observer.observe(card));
})();
