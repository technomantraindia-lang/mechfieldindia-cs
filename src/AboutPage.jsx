import { useEffect } from "react";

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
    case "linkedin":
      return <svg viewBox="0 0 24 24" {...common}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>;
    case "twitter":
      return <svg viewBox="0 0 24 24" {...common}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>;
    case "facebook":
      return <svg viewBox="0 0 24 24" {...common}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>;
    case "factory":
      return <svg viewBox="0 0 24 24" {...common}><path d="M3 21h18" /><path d="M5 21V8l6 4V8l6 4V3h3v18" /><path d="M9 17h1" /><path d="M14 17h1" /></svg>;
    case "calendar":
      return <svg viewBox="0 0 24 24" {...common}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4" /><path d="M8 2v4" /><path d="M3 10h18" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /></svg>;
    case "award":
      return <svg viewBox="0 0 24 24" {...common}><circle cx="12" cy="8" r="5" /><path d="m8.5 12.5-1.5 8 5-3 5 3-1.5-8" /><path d="m10 8 1.4 1.4L14.5 6" /></svg>;
    case "link":
      return <svg viewBox="0 0 24 24" {...common}><path d="M10 13a5 5 0 0 0 7.1 0l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1" /><path d="M14 11a5 5 0 0 0-7.1 0l-2 2a5 5 0 0 0 7.1 7.1l1.1-1.1" /></svg>;
    case "material":
      return <svg viewBox="0 0 24 24" {...common}><path d="M12 3 20 7v6c0 5-8 8-8 8s-8-3-8-8V7l8-4z" /><path d="m9 12 2 2 4-5" /></svg>;
    case "handshake":
      return <svg viewBox="0 0 24 24" {...common}><path d="m11 17 2 2a2.8 2.8 0 0 0 4 0l4-4" /><path d="m14 14 3 3" /><path d="M3 12 8 7l4 4" /><path d="m2 14 6 6" /><path d="M7 8l2-2a3 3 0 0 1 4.2 0l.8.8" /><path d="m22 12-5-5-4.5 4.5a2.1 2.1 0 0 1-3 0" /></svg>;
    case "network":
      return <svg viewBox="0 0 24 24" {...common}><circle cx="7" cy="7" r="3" /><circle cx="17" cy="7" r="3" /><circle cx="12" cy="17" r="3" /><path d="m9.5 8.7 1.6 5.5" /><path d="m14.5 8.7-1.6 5.5" /><path d="M10 7h4" /></svg>;
    case "globe":
      return <svg viewBox="0 0 24 24" {...common}><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>;
    case "lock":
      return <svg viewBox="0 0 24 24" {...common}><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>;
    case "target":
      return <svg viewBox="0 0 24 24" {...common}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /><path d="m15 9 5-5" /><path d="M20 4v5h-5" /></svg>;
    case "eye":
      return <svg viewBox="0 0 24 24" {...common}><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></svg>;
    case "shield":
      return <svg viewBox="0 0 24 24" {...common}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-5" /></svg>;
    case "settings":
      return <svg viewBox="0 0 24 24" {...common}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.6-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1A2 2 0 1 1 7.1 4.2l.1.1A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.6V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1A2 2 0 1 1 19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.1a2 2 0 1 1 0 4H21a1.7 1.7 0 0 0-1.6 1z" /></svg>;
    case "check":
      return <svg viewBox="0 0 24 24" {...common}><path d="m20 6-11 11-5-5" /></svg>;
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
          <a href="#" aria-label="LinkedIn"><Icon name="linkedin" /></a>
          <a href="#" aria-label="Twitter"><Icon name="twitter" /></a>
          <a href="#" aria-label="Facebook"><Icon name="facebook" /></a>
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
          <a href="/pages/about.html" className="active">About Us</a>
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
          <a href="/pages/certificates.html">Certificates &amp; Awards</a>
          <a href="/pages/clients.html">Clients</a>
          <a href="/pages/contact.html">Contact Us</a>
        </nav>
        <a className="btn btn-quote" href="#">Request a Quote</a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="container footer-grid">
          <section className="footer-brand">
            <img src="/assets/logo.png" alt="Mechfield India" className="footer-logo" />
            <p className="footer-about">Established in 1993 - manufacturing and supplying Regulators, Valves, Gas Regulators, Flash Back Arrestors and Laboratory Furniture trusted by industries worldwide.</p>
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
              <li><a href="/pages/clients.html">Clients</a></li>
              <li><a href="/pages/contact.html">Contact Us</a></li>
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
          <p>Copyright &copy;2026 mechfieldindia</p>
          <p>Powered by technomantraindia</p>
        </div>
      </div>
    </footer>
  );
}

function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    ["Precision Manufacturing", "Components and assemblies are built for dependable SF6 gas handling performance."],
    ["Quality Documentation", "Inspection, testing and calibration practices support critical industrial projects."],
    ["Customer Support", "Application guidance and service assistance help clients select the right solution."],
    ["Custom Engineering", "Equipment and accessories can be configured around specific site requirements."]
  ];

  const highlights = [
    ["calendar", "30+", "Years of", "Experience"],
    ["award", "Premium", "Quality", "Manufacturing"],
    ["link", "Tough", "Reliable &", "Construction"],
    ["material", "Corrosion", "Resistant", "Materials"],
    ["handshake", "100%", "Client", "Satisfaction"],
    ["network", "Industry", "Experts with", "Deep Knowledge"]
  ];

  const purposeCards = [
    ["globe", "Our Vision", "To be a global leader in industrial gas handling solutions, recognized for quality, innovation and ethical business practices, contributing to a safer and more efficient world."],
    ["target", "Our Mission", "To provide high quality, reliable and innovative SF6 gas handling products and solutions that ensure safety, performance and long service life while exceeding customer expectations."],
    ["lock", "Our Commitment", "To maintain dependable manufacturing standards, transparent service and long-term partnerships with every customer we serve."]
  ];

  return (
    <div className="about-page">
      <TopBar />
      <Header />
      <main>
        <section className="page-hero contact-hero" aria-label="About Us">
          <div className="page-hero-bg" aria-hidden="true">
            <img src="/assets/banera/product.png" alt="" />
          </div>
          <div className="page-hero-inner">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span aria-hidden="true">/</span>
              <span aria-current="page">About Us</span>
            </nav>
            <h1>
              <span className="h1-line"><span className="h1-navy">ABOUT</span> <span className="h1-orange">US</span></span>
            </h1>
            <p className="copy">Engineering reliable SF6 gas handling equipment, accessories and calibration support for utilities, OEMs and industrial clients since 1993.</p>
            <div className="hero-orange-line" aria-hidden="true"></div>
          </div>
        </section>

        <section className="about-story-section">
          <div className="container about-story-grid">
            <div className="about-story-media animate-slide-left">
              <img src="/assets/company.jpg" alt="Mechfield India manufacturing facility" />
              <div className="about-experience-card">
                <strong>30+</strong>
                <span>Years of manufacturing experience</span>
              </div>
            </div>
            <div className="about-story-content animate-slide-right">
              <div className="contact-section-tag">
                <span className="tag-line"></span>
                <span className="tag-text">OUR COMPANY</span>
              </div>
              <h2>Built Around Safety, Accuracy and Long-Term Reliability</h2>
              <p className="about-lead-text">Mechfield India designs and manufactures SF6 gas handling products for demanding electrical and industrial environments. Our work combines practical field knowledge with controlled manufacturing and testing practices.</p>
              <p>From recovery and transfer units to gas connectors, storage tanks, measuring instruments and calibration services, our focus remains simple: deliver equipment that works reliably when customers need it most.</p>
              <div className="about-stat-grid">
                <div><strong>1993</strong><span>Established</span></div>
                <div><strong>NABL</strong><span>Calibration Support</span></div>
                <div><strong>Pan India</strong><span>Client Presence</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-proof-section" aria-label="Company strengths, mission and vision">
          <div className="container">
            <div className="about-proof-heading animate-slide-bottom">
              <p className="section-label">WHY CHOOSE US</p>
              <h2>Dependable Engineering, Proven in the Field</h2>
              <span>Built on quality manufacturing, durable materials and responsive client support.</span>
            </div>
            <div className="about-proof-panel animate-slide-bottom">
              <div className="about-highlight-grid">
                {highlights.map(([icon, stat, lineOne, lineTwo]) => (
                  <article className="about-highlight-item" key={stat}>
                    <span className="about-highlight-icon"><Icon name={icon} /></span>
                    <strong>{stat}</strong>
                    <span>{lineOne}</span>
                    <span>{lineTwo}</span>
                  </article>
                ))}
              </div>
            </div>

            <div className="about-purpose-grid">
              {purposeCards.map(([icon, title, text], index) => (
                <article className="about-purpose-card animate-slide-bottom" style={{ animationDelay: `${index * 0.08}s` }} key={title}>
                  <span className="about-purpose-icon"><Icon name={icon} /></span>
                  <h2>{title}</h2>
                  <span className="about-purpose-rule" aria-hidden="true"></span>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-values-section">
          <div className="container">
            <div className="about-section-heading">
              <p className="section-label">WHAT DRIVES US</p>
              <h2>Manufacturing with Process, Care and Accountability</h2>
            </div>
            <div className="about-values-grid">
              {values.map(([title, text], index) => (
                <article className="about-value-card animate-slide-bottom" style={{ animationDelay: `${index * 0.08}s` }} key={title}>
                  <span className="about-value-icon"><Icon name={index === 0 ? "factory" : index === 1 ? "shield" : index === 2 ? "check" : "settings"} /></span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-process-section">
          <div className="container about-process-inner">
            <div>
              <p className="section-label">OUR APPROACH</p>
              <h2>From Requirement to Reliable Field Operation</h2>
            </div>
            <div className="about-process-list">
              <div><span>01</span><strong>Understand Application</strong><p>We study gas handling, pressure, capacity and site requirements.</p></div>
              <div><span>02</span><strong>Engineer the Solution</strong><p>Our team configures equipment, accessories and documentation needs.</p></div>
              <div><span>03</span><strong>Test and Support</strong><p>Products are checked before dispatch with after-sales assistance available.</p></div>
            </div>
          </div>
        </section>

        <section className="about-cta-section">
          <div className="container about-cta-inner">
            <div>
              <h2>Need a dependable SF6 handling partner?</h2>
              <p>Connect with our team for product selection, customization and service support.</p>
            </div>
            <a className="btn btn-orange-fill" href="/pages/contact.html">Contact Us <Icon name="chevron" /></a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default AboutPage;
