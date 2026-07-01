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
    const handleQuoteClick = (event) => {
      const trigger = event.target.closest("a, button");
      if (!trigger) return;

      const isQuoteTrigger =
        trigger.classList.contains("btn-quote") ||
        trigger.textContent?.trim().toLowerCase().includes("request a quote");

      if (!isQuoteTrigger) return;

      event.preventDefault();
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
    const testimonialDots = document.querySelectorAll(".testimonial-dot");
    const testimonialCleanups = [];
    let slideTimer;
    let activeIndex = 0;

    if (testimonialTrack && testimonialDots.length) {
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
        const handleDotClick = () => {
          goToSlide(index);
          startAutoSlide();
        };

        dot.addEventListener("click", handleDotClick);
        testimonialCleanups.push(() => dot.removeEventListener("click", handleDotClick));
      });

      goToSlide(0);
      startAutoSlide();
    }

    // ── 3D SF6 equipment model (homepage only) ──
    if (!isAboutPage && !isProductPage && !isCertificatePage && !isClientPage && !isContactPage) {
      import("./sf6-model.js").then(({ initSf6Model }) => {
        initSf6Model();
      });
    }

    return () => {
      documentClickCleanup?.();
      dropdownCleanups.forEach((cleanup) => cleanup());
      testimonialCleanups.forEach((cleanup) => cleanup());
      clearInterval(slideTimer);
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
