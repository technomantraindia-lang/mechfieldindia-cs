/**
 * Scroll-triggered reveal animations.
 * Types: left, right, up, scale — with optional stagger delay.
 */

const REVEAL_TARGETS = [
  { selector: ".hero-copy", type: "left", instant: true },
  { selector: ".trust-section .stat", type: "up", stagger: 110 },
  { selector: ".about-media", type: "left" },
  { selector: ".about-panel", type: "right" },
  { selector: "main .section-heading", type: "up" },
  { selector: ".product-card", type: "up", stagger: 85 },
  { selector: ".why-visual", type: "scale" },
  { selector: ".why-card", type: "alternate", stagger: 90 },
  { selector: ".industry-card", type: "up", stagger: 95 },
  { selector: ".testimonial-slider-wrap", type: "up" },
  { selector: ".testimonial-trust", type: "up" },
  { selector: ".faq-main", type: "left" },
  { selector: ".faq-cta", type: "right" },
  { selector: ".contact-left", type: "left" },
  { selector: ".contact-form", type: "right" },
  { selector: ".page-hero-inner", type: "left", instant: true },
  { selector: ".pg-card", type: "up", stagger: 85 },
  { selector: ".pg-cta-inner", type: "up" },
  { selector: ".product-gallery-panel", type: "left", instant: true },
  { selector: ".product-info-panel", type: "right", instant: true },
  { selector: ".product-detail-section", type: "up", stagger: 120 },
  { selector: ".product-detail-notes article", type: "right", stagger: 110 },
  { selector: ".product-detail-quote", type: "up" },
  { selector: ".cert-hero-copy", type: "left", instant: true },
  { selector: ".cert-hero-rings", type: "scale", instant: true },
  { selector: ".cert-standard-main", type: "left" },
  { selector: ".cert-trust-item", type: "right", stagger: 120 },
  { selector: ".cert-card", type: "up", stagger: 100 },
  { selector: ".cert-benefit", type: "up", stagger: 90 },
  { selector: ".cert-info-cta-inner", type: "up" },
  { selector: ".client-logo-card", type: "up", stagger: 40 },
  { selector: ".partner-logo-card", type: "up", stagger: 50 },
  { selector: ".advantage-card", type: "up", stagger: 100 },
  { selector: ".partnership-cta-inner", type: "up" }
];

function revealElement(element) {
  element.classList.add("is-visible");
}

export function initScrollAnimations() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const elements = [];

  REVEAL_TARGETS.forEach(({ selector, type, stagger = 0, instant = false }) => {
    document.querySelectorAll(selector).forEach((element, index) => {
      if (element.dataset.revealApplied === "true") return;

      const revealType = type === "alternate" ? (index % 2 === 0 ? "left" : "right") : type;
      element.dataset.reveal = revealType;
      element.dataset.revealApplied = "true";

      if (stagger > 0) {
        element.style.setProperty("--reveal-delay", `${index * stagger}ms`);
      }

      if (prefersReducedMotion || instant) {
        revealElement(element);
        return;
      }

      elements.push(element);
    });
  });

  if (!elements.length || prefersReducedMotion) {
    return () => {};
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        revealElement(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  elements.forEach((element) => observer.observe(element));

  return () => observer.disconnect();
}
