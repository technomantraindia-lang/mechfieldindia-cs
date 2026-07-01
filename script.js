const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("click", (event) => {
    if (
      mainNav.classList.contains("is-open") &&
      !mainNav.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      mainNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

document.querySelectorAll(".nav-dropdown").forEach((dropdown) => {
  const link = dropdown.querySelector(".nav-dropdown-link");

  if (!link) return;

  link.addEventListener("click", (event) => {
    if (window.innerWidth > 980) return;

    event.preventDefault();
    dropdown.classList.toggle("is-open");
  });
});

const testimonialTrack = document.querySelector(".testimonial-track");
const testimonialDots = document.querySelectorAll(".testimonial-dot");

if (testimonialTrack && testimonialDots.length) {
  let activeIndex = 0;
  let slideTimer;

  const goToSlide = (index) => {
    const total = testimonialDots.length;
    activeIndex = (index + total) % total;
    testimonialTrack.style.transform = `translateX(-${activeIndex * 100}%)`;

    testimonialDots.forEach((dot, i) => {
      const isActive = i === activeIndex;
      dot.classList.toggle("is-active", isActive);
      dot.setAttribute("aria-selected", String(isActive));
    });
  };

  const startAutoSlide = () => {
    clearInterval(slideTimer);
    slideTimer = setInterval(() => {
      goToSlide(activeIndex + 1);
    }, 5000);
  };

  testimonialDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      goToSlide(index);
      startAutoSlide();
    });
  });

  goToSlide(0);
  startAutoSlide();
}
