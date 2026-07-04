/**
 * Scroll-triggered reveal animations.
 * Types: left, right, up, down, scale, alternate, cycle — with optional stagger delay.
 */

const REVEAL_CYCLE = ["left", "right", "up", "down"];

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
  /* Product page — mixed scroll directions */
  { selector: ".product-page-shell .page-hero--category .page-hero-inner", type: "down", instant: true },
  { selector: ".product-page-shell .pg-catalog .section-heading", type: "up" },
  { selector: ".product-page-shell .pg-card", type: "cycle", stagger: 140 },
  { selector: ".product-page-shell .pg-cta-text", type: "left" },
  { selector: ".product-page-shell .pg-cta-actions", type: "right" },
  { selector: ".page-hero-inner", type: "left", instant: true },
  { selector: ".product-gallery-panel", type: "left", instant: true },
  { selector: ".product-info-panel", type: "right", instant: true },
  { selector: ".product-detail-section", type: "up", stagger: 120 },
  { selector: ".product-detail-notes article", type: "right", stagger: 110 },
  { selector: ".product-detail-quote", type: "up" },
  /* Certificate page — left / right / up / down on all devices */
  { selector: ".certificate-page .page-hero-inner", type: "left", instant: true },
  { selector: ".certificate-page .cert-standard-intro", type: "left" },
  { selector: ".certificate-page .cert-trust-card", type: "cycle", stagger: 110 },
  { selector: ".certificate-page .cert-section-heading", type: "down" },
  { selector: ".certificate-page .cert-card", type: "cycle", stagger: 90 },
  { selector: ".certificate-page .assurance-card", type: "cycle", stagger: 75 },
  { selector: ".certificate-page .cert-cta-left", type: "left" },
  { selector: ".certificate-page .cert-cta-right", type: "right" },
  /* About page — real scroll-triggered mixed directions */
  { selector: ".about-page .page-hero-inner", type: "down", instant: true },
  { selector: ".about-page .about-story-media", type: "left" },
  { selector: ".about-page .about-story-content", type: "right" },
  { selector: ".about-page .about-stat-grid > div", type: "cycle", stagger: 80 },
  { selector: ".about-page .about-proof-heading", type: "down" },
  { selector: ".about-page .about-proof-panel", type: "up" },
  { selector: ".about-page .about-highlight-item", type: "cycle", stagger: 70 },
  { selector: ".about-page .about-purpose-card", type: "cycle", stagger: 100 },
  { selector: ".about-page .director-section-heading", type: "down" },
  { selector: ".about-page .director-card", type: "alternate", stagger: 120 },
  { selector: ".about-page .togetherness-panel", type: "up" },
  { selector: ".about-page .togetherness-item", type: "cycle", stagger: 70 },
  { selector: ".about-page .responsibility-item", type: "alternate", stagger: 90 },
  { selector: ".about-page .director-authority-note", type: "up" },
  { selector: ".about-page .about-nabl-card", type: "left" },
  { selector: ".about-page .about-nabl-content", type: "left" },
  { selector: ".about-page .about-nabl-badge-card", type: "up", stagger: 90 },
  { selector: ".about-page .about-nabl-images", type: "right" },
  { selector: ".about-page .about-cta-inner", type: "up" },
  { selector: ".clients-title-wrapper", type: "up", mobileOnly: true },
  { selector: ".client-group-wrapper", type: "up", stagger: 80, mobileOnly: true },
  { selector: ".client-logo-grid:not(.client-logo-grid-oem) .client-logo-card", type: "alternate", stagger: 55, mobileOnly: true },
  { selector: ".client-logo-grid-oem .client-logo-card", type: "alternate", stagger: 55, mobileOnly: true },
  { selector: ".partner-logo-card", type: "up", stagger: 50 },
  { selector: ".advantage-card", type: "up", stagger: 100 },
  { selector: ".partnership-cta-inner", type: "up" },
  /* Contact page — left / right slide on scroll */
  { selector: ".contact-info-container", type: "left" },
  { selector: ".contact-form-container", type: "right" },
  { selector: ".presence-details-column", type: "left" },
  { selector: ".presence-map-column", type: "right" }
];

function revealElement(element) {
  element.classList.add("is-visible");
}

export function initScrollAnimations() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const elements = [];

  REVEAL_TARGETS.forEach(({ selector, type, stagger = 0, instant = false, mobileOnly = false }) => {
    if (mobileOnly && !isMobile) return;

    document.querySelectorAll(selector).forEach((element, index) => {
      if (element.dataset.revealApplied === "true") return;
      /* Skip homepage contact section only (not contact page) */
      if (element.closest(".contact-section")) return;

      const revealType =
        element.dataset.reveal || (
          type === "alternate"
            ? index % 2 === 0
              ? "left"
              : "right"
            : type === "cycle"
              ? REVEAL_CYCLE[index % REVEAL_CYCLE.length]
              : type
        );
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
