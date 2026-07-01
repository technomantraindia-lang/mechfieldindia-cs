import { useEffect, useState } from "react";

const certificates = [
  {
    title: "NABL Accredited Calibration Laboratory",
    image: "/assets/certifiaction/NABL CERTIFICATE_260625_104038_page-0001.jpg",
    description:
      "Accredited in accordance with ISO/IEC 17025:2017 by NABL for testing and calibration laboratory competence.",
    icon: "flask"
  },
  {
    title: "Trademark Registration",
    image: "/assets/certifiaction/trademark certificate_260625_104114_page-0001.png",
    description:
      "Registered trademark protection for the Mechfield brand, strengthening brand authenticity and trust.",
    icon: "badge"
  },
  {
    title: "UDYAM MSME Registration",
    image: "/assets/certifiaction/UDYAM MSME MTPL,24052024_260625_104202_page-0001.png",
    description:
      "Registered with the Ministry of Micro, Small and Medium Enterprises, Government of India for scale.",
    icon: "factory"
  }
];

const trustPoints = [
  {
    title: "Global Standards",
    text: "We follow internationally accepted standards to deliver consistent quality.",
    icon: "award"
  },
  {
    title: "Tested. Trusted. Verified.",
    text: "Our processes and labs are rigorously tested and independently verified.",
    icon: "target"
  },
  {
    title: "Commitment to Excellence",
    text: "We continually improve to exceed customer expectations and industry benchmarks.",
    icon: "team"
  }
];

const assuranceItems = [
  ["shield", "Quality Assurance", "Certified quality management systems."],
  ["flask", "Accredited Laboratory", "NABL accredited calibration laboratory competence."],
  ["document", "Registered & Compliant", "Registered certifications for credible operations."],
  ["badge", "Authentic & Reliable", "Commitment to authenticity and customer satisfaction."]
];

function Icon({ name }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" };

  switch (name) {
    case "phone":
      return <svg viewBox="0 0 24 24" {...common}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.3 19.3 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" /></svg>;
    case "mail":
      return <svg viewBox="0 0 24 24" {...common}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>;
    case "pin":
      return <svg viewBox="0 0 24 24" {...common}><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>;
    case "chevron":
      return <svg viewBox="0 0 24 24" {...common}><path d="m9 18 6-6-6-6" /></svg>;
    case "shield":
      return <svg viewBox="0 0 24 24" {...common}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m8.5 12 2.2 2.2 4.8-5" /></svg>;
    case "award":
      return <svg viewBox="0 0 24 24" {...common}><circle cx="12" cy="8" r="5" /><path d="M8.5 12.5 7 22l5-3 5 3-1.5-9.5" /><path d="m10 8 1.4 1.4L14.5 6" /></svg>;
    case "target":
      return <svg viewBox="0 0 24 24" {...common}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" /><path d="m15 9 5-5" /><path d="M17 4h3v3" /></svg>;
    case "team":
      return <svg viewBox="0 0 24 24" {...common}><path d="M16 21v-2a4 4 0 0 0-8 0v2" /><circle cx="12" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.8" /><path d="M2 21v-2a4 4 0 0 1 3-3.8" /></svg>;
    case "flask":
      return <svg viewBox="0 0 24 24" {...common}><path d="M9 3h6" /><path d="M10 3v5l-5.5 9.5A2.5 2.5 0 0 0 6.7 21h10.6a2.5 2.5 0 0 0 2.2-3.5L14 8V3" /><path d="M7.7 15h8.6" /></svg>;
    case "badge":
      return <svg viewBox="0 0 24 24" {...common}><path d="m12 2 2.2 2.7 3.5-.5 1.1 3.3 3.1 1.6-1.6 3.1 1.6 3.1-3.1 1.6-1.1 3.3-3.5-.5L12 22l-2.2-2.7-3.5.5-1.1-3.3-3.1-1.6 1.6-3.1-1.6-3.1 3.1-1.6 1.1-3.3 3.5.5L12 2z" /><path d="m8.8 12 2.1 2.1 4.3-4.6" /></svg>;
    case "factory":
      return <svg viewBox="0 0 24 24" {...common}><path d="M3 21h18" /><path d="M4 21V9l6 4V9l6 4V7h4v14" /><path d="M8 17h.01" /><path d="M12 17h.01" /><path d="M16 17h.01" /></svg>;
    case "document":
      return <svg viewBox="0 0 24 24" {...common}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M8 13h8" /><path d="M8 17h5" /></svg>;
    case "close":
      return <svg viewBox="0 0 24 24" {...common}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>;
    case "linkedin":
      return <svg viewBox="0 0 24 24" {...common}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>;
    case "twitter":
      return <svg viewBox="0 0 24 24" {...common}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>;
    case "facebook":
      return <svg viewBox="0 0 24 24" {...common}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>;
    default:
      return null;
  }
}

function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-inner">
        <div className="top-bar-left">
          <a href="tel:+919714518402"><Icon name="phone" /> +91 9714518402</a>
          <a href="mailto:admin@mechfieldindia.com"><Icon name="mail" /> admin@mechfieldindia.com</a>
        </div>
        <div className="top-bar-center"><Icon name="pin" /> Vadodara, Gujarat, India</div>
        <div className="top-bar-social">
          <a href="#" aria-label="LinkedIn">in</a>
          <a href="#" aria-label="Twitter">tw</a>
          <a href="#" aria-label="Facebook">fb</a>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="/" aria-label="Mechfield India home">
          <img src="/assets/logo.png" alt="Mechfield India" />
        </a>
        <button className="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
        <nav className="main-nav" aria-label="Primary navigation">
          <a href="/">Home</a>
          <a href="/pages/about.html">About Us</a>
          <div className="nav-dropdown">
            <a href="/pages/prodcut.html" className="nav-dropdown-link has-dropdown">Products <Icon name="chevron" /></a>
            <div className="nav-dropdown-menu">
              <p className="nav-dropdown-label">Product Categories</p>
              <a href="/pages/prodcut.html?category=sf6-gas-recovery-transfer-units">SF6 Gas Recovery &amp; Transfer Units</a>
              <a href="/pages/prodcut.html?category=portable-recovery-vacuum-units">Portable Recovery / Vacuum Units</a>
              <a href="/pages/prodcut.html?category=filters-moisture-absorbers">Filters &amp; Moisture Absorbers</a>
              <a href="/pages/prodcut.html?category=measuring-instruments">Measuring Instruments</a>
              <a href="/pages/prodcut.html?category=gas-connectors-manifolds">Gas Connectors &amp; Manifolds</a>
              <a href="/pages/prodcut.html?category=sf6-gas-filling-device">SF6 Gas Filling Device</a>
              <a href="/pages/prodcut.html?category=sf6-gas-leak-detector">SF6 Gas Leak Detector</a>
              <a href="/pages/prodcut.html?category=nabl-calibration-laboratory-services">NABL Calibration Laboratory Services</a>
              <a href="/pages/prodcut.html?category=sf6-gas-storage-tank">SF6 Gas Storage Tank</a>
            </div>
          </div>
          <a href="/pages/certificates.html" className="active">Certificates &amp; Awards</a>
          <a href="/pages/clients.html">Clients</a>
          <a href="/pages/contact.html">Contact Us</a>
        </nav>
        <a className="btn btn-quote" href="#">Request a Quote</a>
      </div>
    </header>
  );
}

function CertificatePage() {
  const [activeCertificate, setActiveCertificate] = useState(null);

  useEffect(() => {
    if (!activeCertificate) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setActiveCertificate(null);
    };

    document.body.classList.add("cert-modal-open");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("cert-modal-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeCertificate]);

  return (
    <div className="certificate-page">
      <TopBar />
      <Header />

      <main>
        <section className="page-hero" aria-label="Certifications">
          <div className="page-hero-bg" aria-hidden="true">
            <img src="/assets/banera/product.png" alt="" />
          </div>
          <div className="page-hero-inner">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Certifications</span>
            </nav>
            <p className="eyebrow">Our Achievements</p>
            <h1>
              <span className="h1-line"><span className="h1-navy">Our</span> <span className="h1-orange">Certifications</span></span>
            </h1>
            <p className="copy">Certified quality. Assured reliability. Complete trust. Our certifications reflect our unwavering commitment to quality, safety, compliance, and continuous improvement across every process we follow.</p>
          </div>
        </section>

        <section className="cert-standard-section">
          <div className="container">
            <div className="cert-standard-wrapper">
              <div className="cert-standard-intro">
                <div className="cert-intro-visual">
                  <div className="cert-intro-icon"><Icon name="shield" /></div>
                </div>
                <div className="cert-intro-content">
                  <h2>Built on Standards.<br />Driven by Trust.</h2>
                  <p>At Mechfield Technologies Pvt. Ltd., quality and compliance are not just requirements. They are our promise.</p>
                  <p>Our recognized certifications validate our systems, processes, and technical capabilities, ensuring high standards in manufacturing, calibration, and business integrity.</p>
                </div>
              </div>

              <div className="cert-trust-grid">
                {trustPoints.map((point) => (
                  <article className="cert-trust-card" key={point.title}>
                    <div className="trust-card-icon"><Icon name={point.icon} /></div>
                    <h3>{point.title}</h3>
                    <p>{point.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="cert-achievements-section">
          <div className="container">
            <div className="cert-section-heading">
              <span>Our Achievements</span>
              <h2>Recognized. Certified. Trusted.</h2>
            </div>

            <div className="cert-card-grid">
              {certificates.map((certificate) => (
                <article className="cert-card" key={certificate.title}>
                  <button className="cert-image-button" type="button" onClick={() => setActiveCertificate(certificate)}>
                    <img src={certificate.image} alt={certificate.title} />
                  </button>
                  <div className="cert-card-body">
                    <div className="cert-card-title-row">
                      <span className="cert-card-icon"><Icon name={certificate.icon} /></span>
                      <h3>{certificate.title}</h3>
                    </div>
                    <p>{certificate.description}</p>
                    <button className="cert-view-link" type="button" onClick={() => setActiveCertificate(certificate)}>
                      View Certificate <Icon name="chevron" />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="assurance-grid">
              {assuranceItems.map(([icon, title, text]) => (
                <article className="assurance-card" key={title}>
                  <span className="assurance-icon"><Icon name={icon} /></span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cert-info-cta">
          <div className="container">
            <div className="cert-info-cta-inner">
              <div className="cert-cta-glow-orange"></div>
              <div className="cert-cta-glow-blue"></div>
              <div className="cert-cta-left">
                <div className="cert-cta-icon-wrapper">
                  <div className="cert-cta-icon">
                    <Icon name="phone" />
                  </div>
                </div>
                <div className="cert-cta-content">
                  <h2>Need More Information?<br /><span>We're Here to Help.</span></h2>
                  <p>For product details, certification documents, or any technical assistance, reach out to our team today.</p>
                </div>
              </div>
              <div className="cert-cta-right">
                <a href="/#contact" className="cert-cta-btn">
                  <span>Contact Us Today</span>
                  <Icon name="chevron" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="container footer-grid">
            <section className="footer-brand">
              <img src="/assets/logo.png" alt="Mechfield India" className="footer-logo" />
              <p className="footer-about">Established in 1993 — manufacturing and supplying Regulators, Valves, Gas Regulators, Flash Back Arrestors and Laboratory Furniture trusted by industries worldwide.</p>
              <div className="footer-social">
                <a href="#" aria-label="LinkedIn"><Icon name="linkedin" /></a>
                <a href="#" aria-label="Twitter"><Icon name="twitter" /></a>
                <a href="#" aria-label="Facebook"><Icon name="facebook" /></a>
              </div>
            </section>

            <section className="footer-col">
              <h2 className="footer-heading">Quick Links</h2>
              <ul className="footer-links">
                <li><a href="/">Home</a></li>
                <li><a href="/pages/about.html">About Us</a></li>
                <li><a href="/pages/certificates.html">Certificates &amp; Awards</a></li>
                <li><a href="/pages/prodcut.html">Products</a></li>
                <li><a href="/#contact">Contact Us</a></li>
              </ul>
            </section>

            <section className="footer-col footer-contact">
              <h2 className="footer-heading">Contact Us</h2>
              <address className="footer-contact-list">
                <div className="footer-contact-item">
                  <span className="footer-icon" aria-hidden="true"><Icon name="pin" /></span>
                  <span>49, AATMIYA BROOKFIELDZ INDUSTRIAL PARK, VILLAGE-UNTIYA, NH-48, NR. POR, DIST - VADODARA-391243, GUJARAT, INDIA.</span>
                </div>
                <div className="footer-contact-item">
                  <span className="footer-icon" aria-hidden="true"><Icon name="phone" /></span>
                  <span>
                    <a href="tel:+919825998958">+91 9825998958</a><br />
                    <a href="tel:+919601604735">+91 9601604735</a><br />
                    <a href="tel:+919714518402">+91 9714518402</a>
                  </span>
                </div>
                <div className="footer-contact-item">
                  <span className="footer-icon" aria-hidden="true"><Icon name="mail" /></span>
                  <span>
                    <a href="mailto:admin@mechfieldindia.com">admin@mechfieldindia.com</a><br />
                    <a href="mailto:sales@mechfieldindia.com">sales@mechfieldindia.com</a>
                  </span>
                </div>
              </address>
            </section>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container footer-bottom-inner">
            <p>Copyright ©2026 mechfieldindia</p>
            <p>Powered by technomantraindia</p>
          </div>
        </div>
      </footer>

      {activeCertificate && (
        <div className="cert-lightbox" role="dialog" aria-modal="true" aria-label={activeCertificate.title} onClick={() => setActiveCertificate(null)}>
          <div className="cert-lightbox-panel" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="cert-lightbox-close" aria-label="Close certificate" onClick={() => setActiveCertificate(null)}>
              <Icon name="close" />
            </button>
            <img src={activeCertificate.image} alt={activeCertificate.title} />
            <h2>{activeCertificate.title}</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default CertificatePage;
