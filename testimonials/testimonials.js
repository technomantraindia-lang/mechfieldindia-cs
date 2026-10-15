/* Carousel + optional scroll reveal for testimonials.html. */
(() => {
  const section = document.querySelector('.testimonials');
  if (!section) return;

  const track = section.querySelector('.testimonial-track');
  const dotBox = section.querySelector('.testimonial-dots');
  const slides = Array.from(track.querySelectorAll('.testimonial-slide'));
  const cards = Array.from(track.querySelectorAll('.testimonial-card'));
  const mobileQuery = window.matchMedia('(max-width: 640px)');
  let activeIndex = 0;
  let timer;
  let clone;

  const isMobile = () => mobileQuery.matches;
  const renderDots = (count) => {
    dotBox.replaceChildren();
    for (let i = 0; i < count; i += 1) {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'testimonial-dot';
      dot.setAttribute('aria-label', `Testimonial ${i + 1}`);
      dot.addEventListener('click', () => { goTo(i); start(); });
      dotBox.appendChild(dot);
    }
  };
  const updateDots = (index, total) => [...dotBox.children].forEach((dot, i) => {
    const selected = i === index % total;
    dot.classList.toggle('is-active', selected);
    dot.setAttribute('aria-selected', String(selected));
  });
  const mobileStep = () => cards[0].getBoundingClientRect().width + (parseFloat(getComputedStyle(track).gap) || 0);
  const goTo = (index, instant = false) => {
    const mobile = isMobile();
    const total = mobile ? cards.length : slides.length;
    activeIndex = mobile ? index : (index + total) % total;
    track.style.transition = instant ? 'none' : '';
    track.style.transform = mobile ? `translateX(-${activeIndex * mobileStep()}px)` : `translateX(-${activeIndex * 100}%)`;
    updateDots(activeIndex, total);
  };
  const start = () => { clearInterval(timer); timer = setInterval(() => goTo(activeIndex + 1), 5000); };
  const setup = () => {
    clearInterval(timer);
    if (isMobile() && !clone) { clone = cards[0].cloneNode(true); clone.setAttribute('aria-hidden', 'true'); track.appendChild(clone); }
    if (!isMobile() && clone) { clone.remove(); clone = null; }
    renderDots(isMobile() ? cards.length : slides.length);
    goTo(0, true);
    requestAnimationFrame(() => { track.style.transition = ''; });
    start();
  };
  track.addEventListener('transitionend', () => {
    if (isMobile() && activeIndex === cards.length) { goTo(0, true); requestAnimationFrame(() => { track.style.transition = ''; }); }
  });
  setup();
  mobileQuery.addEventListener?.('change', setup);
  window.addEventListener('resize', setup);

  const revealItems = section.querySelectorAll('[data-reveal]');
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries, current) => entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      current.unobserve(entry.target);
    }), { threshold: .12 });
    revealItems.forEach((item) => observer.observe(item));
  }
})();
