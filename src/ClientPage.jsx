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
    case "shield":
      return <svg viewBox="0 0 24 24" {...common}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m8.5 12 2.2 2.2 4.8-5" /></svg>;
    case "award":
      return <svg viewBox="0 0 24 24" {...common}><circle cx="12" cy="8" r="5" /><path d="M8.5 12.5 7 22l5-3 5 3-1.5-9.5" /><path d="m10 8 1.4 1.4L14.5 6" /></svg>;
    case "target":
      return <svg viewBox="0 0 24 24" {...common}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" /><path d="m15 9 5-5" /><path d="M17 4h3v3" /></svg>;
    case "team":
      return <svg viewBox="0 0 24 24" {...common}><path d="M16 21v-2a4 4 0 0 0-8 0v2" /><circle cx="12" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.8" /><path d="M2 21v-2a4 4 0 0 1 3-3.8" /></svg>;
    case "handshake":
      return <svg viewBox="0 0 24 24" {...common}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>;
    case "map":
      return <svg viewBox="0 0 24 24" {...common}><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" /><line x1="9" y1="3" x2="9" y2="18" /><line x1="15" y1="6" x2="15" y2="21" /></svg>;
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
          <a href="/pages/certificates.html">Certificates &amp; Awards</a>
          <a href="/pages/clients.html" className="active">Clients</a>
          <a href="/pages/contact.html">Contact Us</a>
        </nav>
        <a className="btn btn-quote" href="#">Request a Quote</a>
      </div>
    </header>
  );
}

function ClientPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const utilityClients = [
    { name: "Central Power Research Institute", image: "/assets/client/center power reserach .png" },
    { name: "BARC", image: "/assets/client/barc.png" },
    { name: "NALCO", image: "/assets/client/nalco.png" },
    { name: "BHEL", image: "/assets/client/bhel.png" },
    { name: "ONGC", image: "/assets/client/ongc.png" },
    { name: "GETCO", image: "/assets/client/getco.png" },
    { name: "Tamil Nadu Electricity", image: "/assets/client/tamilnadu.png" },
    { name: "UP Power Corporation", image: "/assets/client/up.png" },
    { name: "KPTCL", image: "/assets/client/kptcl.png" },
    { name: "HVPNL", image: "/assets/client/hvpn.png" },
    { name: "Tripura State Electricity", image: "/assets/client/tripura state.png" },
    { name: "Jharkhand Urja", image: "/assets/client/jharkhand.png" },
    { name: "Bihar State Power", image: "/assets/client/bihar.png" },
    { name: "OHPC", image: "/assets/client/ohpc.png" }
  ];

  const oemClients = [
    { name: "Toshiba", image: "/assets/client/toshiba.png" },
    { name: "Crompton Greaves", image: "/assets/client/crompton.png" },
    { name: "Schneider Electric", image: "/assets/client/schneider.png" },
    { name: "ABB", image: "/assets/client/abb.png" },
    { name: "Lucy Electric", image: "/assets/client/lucy.png" },
    { name: "Siemens", image: "/assets/client/siemes.png" }
  ];





  return (
    <div className="client-page">
      <TopBar />
      <Header />

      <main>
        {/* Banner Section (Identical to Certificate Page Banner) */}
        <section className="page-hero" aria-label="Clients Banner">
          <div className="page-hero-bg" aria-hidden="true">
            <img src="/assets/banera/product.png" alt="" />
          </div>
          <div className="page-hero-inner">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Clients</span>
            </nav>
            <p className="eyebrow">Organizations That Trust Us</p>
            <h1>
              <span className="h1-line"><span className="h1-navy">Our</span> <span className="h1-orange">Clients</span></span>
            </h1>
            <p className="copy">Partnering with global leaders. We manufacture and supply high-quality SF6 gas handling products, regulators, valves, and calibration solutions trusted by top-tier industrial corporations worldwide.</p>
          </div>
        </section>

        {/* Organizations Section */}
        <section className="clients-trust-section">
          <div className="clients-bg-glow-orange"></div>
          <div className="clients-bg-glow-blue"></div>
          <div className="container">
            <div className="clients-title-wrapper">
              <span className="clients-line"></span>
              <h2 className="clients-subheading">ORGANIZATIONS THAT TRUST US</h2>
              <span className="clients-line"></span>
            </div>

            <div className="client-group-wrapper">
              <p className="client-group-subtitle">All India Presence</p>
              <h3 className="client-group-title">Utility</h3>
              <div className="client-logo-grid">
                {utilityClients.map((item, index) => {
                  const anims = ["animate-slide-left", "animate-slide-top", "animate-slide-bottom", "animate-slide-right"];
                  const animClass = anims[index % 4];
                  return (
                    <div 
                      key={item.name} 
                      className={`client-logo-card ${animClass}`}
                      style={{ animationDelay: `${index * 0.08}s` }}
                    >
                      <img src={item.image} alt={item.name} className="client-logo-img" />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="client-group-wrapper" style={{ marginTop: '60px' }}>
              <p className="client-group-subtitle">All India Presence</p>
              <h3 className="client-group-title">OEM</h3>
              <div className="client-logo-grid client-logo-grid-oem">
                {oemClients.map((item, index) => {
                  const anims = ["animate-slide-left", "animate-slide-top", "animate-slide-bottom", "animate-slide-right"];
                  const animClass = anims[index % 4];
                  return (
                    <div 
                      key={item.name} 
                      className={`client-logo-card ${animClass}`}
                      style={{ animationDelay: `${index * 0.08}s` }}
                    >
                      <img src={item.image} alt={item.name} className="client-logo-img" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>





        {/* Bottom Partnership CTA */}
        <section className="partnership-cta-section">
          <div className="container">
            <div className="partnership-cta-inner">
              <div className="partnership-cta-content">
                <h2>Let's Build Stronger Industrial Partnerships</h2>
                <p>Looking for reliable SF6, gas handling or calibration solutions? Our team is ready to support your next critical project.</p>
              </div>
              <div className="partnership-cta-actions">
                <a href="/#contact" className="btn btn-outline-white">Contact Us <Icon name="chevron" /></a>
                <a href="#" className="btn btn-orange-fill">Request a Quote <Icon name="chevron" /></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* site footer */}
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
    </div>
  );
}

export default ClientPage;
