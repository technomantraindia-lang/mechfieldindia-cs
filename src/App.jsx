/**
 * Root app component.
 * - Detects current page (home vs products) from URL
 * - Attaches mobile nav, dropdown, testimonial slider, and 3D model scripts
 */
import { useEffect, useLayoutEffect, useState } from "react";
import HomePage from "./HomePage.jsx";
import ProductPage from "./ProductPage.jsx";
import AboutPage from "./AboutPage.jsx";
import CertificatePage from "./CertificatePage.jsx";
import ClientPage from "./ClientPage.jsx";
import ContactPage from "./ContactPage.jsx";
import QuotePopup from "./QuotePopup.jsx";
import { initScrollAnimations } from "./scrollAnimations.js";

const SF6_SKIP_SELECTOR = "script, style, textarea, select, option, svg, .sf6-mark";

function formatSf6Text(root = document.body) {
  if (!root) return;

  const textNodes = [];
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue.includes("SF6")) return NodeFilter.FILTER_REJECT;
      if (node.parentElement?.closest(SF6_SKIP_SELECTOR)) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  while (walker.nextNode()) {
    textNodes.push(walker.currentNode);
  }

  textNodes.forEach((node) => {
    const fragment = document.createDocumentFragment();
    const parts = node.nodeValue.split("SF6");

    parts.forEach((part, index) => {
      if (part) fragment.appendChild(document.createTextNode(part));
      if (index === parts.length - 1) return;

      const mark = document.createElement("span");
      mark.className = "sf6-mark";
      mark.appendChild(document.createTextNode("SF"));

      const six = document.createElement("span");
      six.className = "sf6-mark-six";
      six.textContent = "6";
      mark.appendChild(six);

      fragment.appendChild(mark);
    });

    node.replaceWith(fragment);
  });
}

function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const pathname = window.location.pathname.toLowerCase();
  const isAboutPage = pathname.includes("/pages/about.html");
  const isProductPage = pathname.includes("/pages/prodcut.html");
  const isCertificatePage = pathname.includes("/pages/certificates.html");
  const isClientPage = pathname.includes("/pages/clients.html");
  const isContactPage = pathname.includes("/pages/contact.html");

  useLayoutEffect(() => {
    return initScrollAnimations();
  }, [isAboutPage, isProductPage, isCertificatePage, isClientPage, isContactPage]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => formatSf6Text());
    return () => cancelAnimationFrame(frame);
  }, [isAboutPage, isProductPage, isCertificatePage, isClientPage, isContactPage, isQuoteOpen]);

  useEffect(() => {
    const handleQuoteClick = (event) => {
      const trigger = event.target.closest("a, button");
      if (!trigger) return;

      const text = trigger.textContent?.trim().toLowerCase() ?? "";
      const isQuoteTrigger =
        trigger.classList.contains("btn-quote") ||
        trigger.classList.contains("nav-quote-btn") ||
        text.includes("request a quote") ||
        text.includes("send enquiry");

      if (!isQuoteTrigger) return;

      event.preventDefault();

      const mainNav = document.querySelector(".main-nav");
      const menuToggle = document.querySelector(".menu-toggle");
      mainNav?.classList.remove("is-open");
      menuToggle?.setAttribute("aria-expanded", "false");

      setIsQuoteOpen(true);
    };

    document.addEventListener("click", handleQuoteClick);
    return () => document.removeEventListener("click", handleQuoteClick);
  }, []);

  useEffect(() => {
    if (!isQuoteOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsQuoteOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isQuoteOpen]);

  useEffect(() => {
    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");
    const dropdownCleanups = [];
    let documentClickCleanup = null;

    // ── Mobile menu toggle ──
    if (menuToggle && mainNav) {
      const handleMenuClick = () => {
        const isOpen = mainNav.classList.toggle("is-open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
      };

      const handleDocumentClick = (event) => {
        if (
          mainNav.classList.contains("is-open") &&
          !mainNav.contains(event.target) &&
          !menuToggle.contains(event.target)
        ) {
          mainNav.classList.remove("is-open");
          menuToggle.setAttribute("aria-expanded", "false");
        }
      };

      menuToggle.addEventListener("click", handleMenuClick);
      document.addEventListener("click", handleDocumentClick);

      documentClickCleanup = () => {
        menuToggle.removeEventListener("click", handleMenuClick);
        document.removeEventListener("click", handleDocumentClick);
      };
    }

    document.querySelectorAll(".main-nav").forEach((nav) => {
      if (nav.querySelector(".nav-quote-btn")) return;
      const link = document.createElement("a");
      link.href = "#";
      link.className = "btn btn-quote nav-quote-btn";
      link.textContent = "Request a Quote";
      nav.appendChild(link);
    });

    // ── Products dropdown (mobile tap to open) ──
    document.querySelectorAll(".nav-dropdown").forEach((dropdown) => {
      const link = dropdown.querySelector(".nav-dropdown-link");
      if (!link) return;

      const handleDropdownClick = (event) => {
        if (window.innerWidth > 980) return;
        event.preventDefault();
        dropdown.classList.toggle("is-open");
      };

      link.addEventListener("click", handleDropdownClick);
      dropdownCleanups.push(() => link.removeEventListener("click", handleDropdownClick));
    });

    // ── Testimonials carousel (auto-slide every 5s) ──
    const testimonialTrack = document.querySelector(".testimonial-track");
    const testimonialDotContainer = document.querySelector(".testimonial-dots");
    const testimonialCleanups = [];
    let slideTimer;
    let activeIndex = 0;
    let clonedMobileCard = null;
    const mobileTestimonialsQuery = window.matchMedia("(max-width: 640px)");

    if (testimonialTrack && testimonialDotContainer) {
      const originalSlides = Array.from(testimonialTrack.querySelectorAll(".testimonial-slide"));
      const originalCards = Array.from(testimonialTrack.querySelectorAll(".testimonial-card"));

      const getDots = () => Array.from(testimonialDotContainer.querySelectorAll(".testimonial-dot"));

      const renderDots = (count) => {
        testimonialDotContainer.textContent = "";

        for (let index = 0; index < count; index += 1) {
          const dot = document.createElement("button");
          dot.type = "button";
          dot.className = "testimonial-dot";
          dot.setAttribute("aria-label", `Testimonial ${index + 1}`);
          dot.setAttribute("aria-selected", "false");

          const handleDotClick = () => {
            goToSlide(index);
            startAutoSlide();
          };

          dot.addEventListener("click", handleDotClick);
          testimonialCleanups.push(() => dot.removeEventListener("click", handleDotClick));
          testimonialDotContainer.appendChild(dot);
        }
      };

      const getMobileStep = () => {
        const firstCard = originalCards[0];
        if (!firstCard) return 0;
        const trackStyle = window.getComputedStyle(testimonialTrack);
        const gap = Number.parseFloat(trackStyle.columnGap || trackStyle.gap || "0") || 0;
        return firstCard.getBoundingClientRect().width + gap;
      };

      const updateDots = (index, total) => {
        getDots().forEach((dot, i) => {
          const isActive = i === index % total;
          dot.classList.toggle("is-active", isActive);
          dot.setAttribute("aria-selected", String(isActive));
        });
      };

      const setTrackTransition = (enabled) => {
        testimonialTrack.style.transition = enabled
          ? ""
          : "none";
      };

      const goToSlide = (index, { instant = false } = {}) => {
        const isMobile = mobileTestimonialsQuery.matches;
        const total = isMobile ? originalCards.length : originalSlides.length;
        if (!total) return;

        activeIndex = isMobile ? index : (index + total) % total;
        setTrackTransition(!instant);

        if (isMobile) {
          testimonialTrack.style.transform = `translateX(-${activeIndex * getMobileStep()}px)`;
          updateDots(activeIndex, total);
          return;
        }

        testimonialTrack.style.transform = `translateX(-${activeIndex * 100}%)`;
        updateDots(activeIndex, total);
      };

      const startAutoSlide = () => {
        clearInterval(slideTimer);
        slideTimer = setInterval(() => {
          goToSlide(activeIndex + 1);
        }, 5000);
      };

      const setupTestimonials = () => {
        clearInterval(slideTimer);
        const isMobile = mobileTestimonialsQuery.matches;

        if (isMobile && !clonedMobileCard && originalCards[0]) {
          clonedMobileCard = originalCards[0].cloneNode(true);
          clonedMobileCard.setAttribute("aria-hidden", "true");
          clonedMobileCard.classList.add("testimonial-card-clone");
          testimonialTrack.appendChild(clonedMobileCard);
        }

        if (!isMobile && clonedMobileCard) {
          clonedMobileCard.remove();
          clonedMobileCard = null;
        }

        renderDots(isMobile ? originalCards.length : originalSlides.length);
        activeIndex = 0;
        goToSlide(0, { instant: true });
        requestAnimationFrame(() => setTrackTransition(true));
        startAutoSlide();
      };

      const handleTransitionEnd = () => {
        if (!mobileTestimonialsQuery.matches) return;
        if (activeIndex !== originalCards.length) return;

        activeIndex = 0;
        goToSlide(0, { instant: true });
        requestAnimationFrame(() => setTrackTransition(true));
      };

      const handleTestimonialsResize = () => {
        setupTestimonials();
      };

      testimonialTrack.addEventListener("transitionend", handleTransitionEnd);
      mobileTestimonialsQuery.addEventListener("change", handleTestimonialsResize);
      window.addEventListener("resize", handleTestimonialsResize);
      testimonialCleanups.push(() => testimonialTrack.removeEventListener("transitionend", handleTransitionEnd));
      testimonialCleanups.push(() => mobileTestimonialsQuery.removeEventListener("change", handleTestimonialsResize));
      testimonialCleanups.push(() => window.removeEventListener("resize", handleTestimonialsResize));

      setupTestimonials();
    }

    // ── 3D SF6 equipment model (homepage only) ──
    if (!isAboutPage && !isProductPage && !isCertificatePage && !isClientPage && !isContactPage) {
      import("./sf6-model.js").then(({ initSf6Model }) => {
        initSf6Model();
      });
    }

    // ── Exclusive FAQ Accordion Toggle ──
    const handleFAQClick = (event) => {
      const summary = event.target.closest(".faq-item summary");
      if (!summary) return;
      
      const currentItem = summary.parentElement; // details
      
      document.querySelectorAll(".faq-item").forEach((item) => {
        if (item !== currentItem && item.hasAttribute("open")) {
          item.removeAttribute("open");
        }
      });
    };
    document.addEventListener("click", handleFAQClick);

    return () => {
      documentClickCleanup?.();
      dropdownCleanups.forEach((cleanup) => cleanup());
      testimonialCleanups.forEach((cleanup) => cleanup());
      clearInterval(slideTimer);
      document.removeEventListener("click", handleFAQClick);
    };
  }, [isAboutPage, isProductPage, isCertificatePage, isClientPage, isContactPage]);

  let page = <HomePage />;
  if (isAboutPage) page = <AboutPage />;
  if (isProductPage) page = <ProductPage />;
  if (isCertificatePage) page = <CertificatePage />;
  if (isClientPage) page = <ClientPage />;
  if (isContactPage) page = <ContactPage />;

  return (
    <>
      {page}
      <QuotePopup isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
}

export default App;
