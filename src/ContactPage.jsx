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
    case "globe":
      return <svg viewBox="0 0 24 24" {...common}><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>;
    case "pencil":
      return <svg viewBox="0 0 24 24" {...common}><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>;
    case "lock":
      return <svg viewBox="0 0 24 24" {...common}><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>;
    case "building":
      return <svg viewBox="0 0 24 24" {...common}><rect x="4" y="2" width="16" height="20" rx="2" ry="2" /><line x1="9" y1="22" x2="9" y2="16" /><line x1="15" y1="22" x2="15" y2="16" /><line x1="9" y1="16" x2="15" y2="16" /><path d="M8 6h2v2H8zm4 0h2v2h-2zm4 0h2v2h-2zm-8 4h2v2H8zm4 0h2v2h-2zm4 0h2v2h-2z" /></svg>;
    case "linkedin":
      return <svg viewBox="0 0 24 24" {...common}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>;
    case "twitter":
      return <svg viewBox="0 0 24 24" {...common}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>;
    case "facebook":
      return <svg viewBox="0 0 24 24" {...common}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>;
    case "clock":
      return <svg viewBox="0 0 24 24" {...common}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>;
    case "check":
      return <svg viewBox="0 0 24 24" {...common}><path d="m20 6-11 11-5-5" /></svg>;
    case "factory":
      return <svg viewBox="0 0 24 24" {...common}><path d="M3 21h18" /><path d="M5 21V8l6 4V8l6 4V3h3v18" /><path d="M9 17h1" /><path d="M14 17h1" /></svg>;
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
          <a href="/pages/clients.html">Clients</a>
          <a href="/pages/contact.html" className="active">Contact Us</a>
        </nav>
        <a className="btn btn-quote" href="#">Request a Quote</a>
      </div>
    </header>
  );
}

function ContactPage() {
  const params = new URLSearchParams(window.location.search);
  const inquiryProduct = params.get("product") || "";
  const inquiryCategory = params.get("category") || "";
  const defaultSubject = inquiryProduct ? `Inquiry for ${inquiryProduct}` : "";
  const defaultMessage = inquiryProduct ? "Please share more details." : "";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <div className="contact-page">
      <TopBar />
      <Header />

      <main>
        {/* Page Hero Banner - Exact match to Product page banner design */}
        <section className="page-hero contact-hero" aria-label="Contact Us">
          <div className="page-hero-bg" aria-hidden="true">
            <img src="/assets/banera/product.png" alt="" />
          </div>
          <div className="page-hero-inner">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <a href="/">Home</a>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Contact Us</span>
            </nav>
            <h1>
              <span className="h1-line"><span className="h1-navy">CONTACT</span> <span className="h1-orange">US</span></span>
            </h1>
            <p className="copy">We are here to help you with the best solutions for SF6 Gas Handling. Get in touch with our team for inquiries, support or business opportunities.</p>
            <div className="hero-orange-line" aria-hidden="true"></div>
          </div>
        </section>

        {/* Contact Form and Details Section */}
        <section className="contact-main-section">
          <div className="container">
            <div className="contact-main-wrapper animate-slide-bottom">
              <div className="contact-main-grid">

                {/* Left Side: Contact Details */}
                <div className="contact-info-container">
                  <div className="contact-section-tag">
                    <span className="tag-line"></span>
                    <span className="tag-text">GET IN TOUCH</span>
                  </div>
                  <h2 className="contact-title">Let's Start a Conversation</h2>
                  <div className="contact-title-wave" aria-hidden="true">
                    <span></span><span></span><span></span>
                  </div>
                  <p className="contact-desc">
                    Fill out the form or contact us directly using the details below. We look forward to hearing from you.
                  </p>

                  <div className="contact-cards-stack">

                    {/* Phone Card */}
                    <div className="contact-info-card">
                      <div className="card-icon-wrapper">
                        <Icon name="phone" />
                      </div>
                      <div className="card-details">
                        <h3>Phone</h3>
                        <p><a href="tel:+919825998958">+91 98259 98958</a></p>
                        <p><a href="tel:+919601604735">+91 96016 04735</a></p>
                        <p><a href="tel:+919714518402">+91 97145 18402</a></p>
                        <span className="card-action">Call for urgent support</span>
                      </div>
                    </div>

                    {/* Email Card */}
                    <div className="contact-info-card">
                      <div className="card-icon-wrapper">
                        <Icon name="mail" />
                      </div>
                      <div className="card-details">
                        <h3>Email</h3>
                        <p><a href="mailto:admin@mechfieldindia.com">admin@mechfieldindia.com</a></p>
                        <p><a href="mailto:sales@mechfieldindia.com">sales@mechfieldindia.com</a></p>
                        <span className="card-action">Send specifications or drawings</span>
                      </div>
                    </div>

                    {/* Office Address Card */}
                    <div className="contact-info-card">
                      <div className="card-icon-wrapper">
                        <Icon name="pin" />
                      </div>
                      <div className="card-details">
                        <h3>Office Address</h3>
                        <p>49, Aatmiya Brookfieldz Industrial Park, Village-Untiya, NH-48, Nr. Por, Dist. Vadodara - 391243, Gujarat, India.</p>
                        <span className="card-action">Open for vendor and client visits</span>
                      </div>
                    </div>

                    {/* Working Hours Card */}
                    <div className="contact-info-card">
                      <div className="card-icon-wrapper">
                        <Icon name="clock" />
                      </div>
                      <div className="card-details">
                        <h3>Working Hours</h3>
                        <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                        <p>Sunday: Closed</p>
                        <span className="card-action">Schedule visits in advance</span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Right Side: Message Form Box */}
                <div className="contact-form-container">
                  <div className="form-inner-box">
                    <div className="form-header">
                      <div className="form-icon-circle">
                        <Icon name="pencil" />
                      </div>
                      <div>
                        <h2 className="form-title">Send Us a Message</h2>
                        <div className="form-title-wave"></div>
                        <p className="form-subtitle">Our team will get back to you as soon as possible.</p>
                      </div>
                    </div>

                    <form className="message-form" onSubmit={handleFormSubmit}>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="firstName">First Name *</label>
                          <input type="text" id="firstName" placeholder="Your first name" required />
                        </div>
                        <div className="form-group">
                          <label htmlFor="lastName">Last Name *</label>
                          <input type="text" id="lastName" placeholder="Your last name" required />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="email">Email Address *</label>
                          <input type="email" id="email" placeholder="your@email.com" required />
                        </div>
                        <div className="form-group">
                          <label htmlFor="phone">Phone Number *</label>
                          <input type="tel" id="phone" placeholder="+91 98765 43210" required />
                        </div>
                      </div>

                      {inquiryProduct && (
                        <div className="form-row">
                          <div className="form-group">
                            <label htmlFor="productName">Product Name</label>
                            <input type="text" id="productName" value={inquiryProduct} readOnly />
                          </div>
                          {inquiryCategory && (
                            <div className="form-group">
                              <label htmlFor="productCategory">Category</label>
                              <input type="text" id="productCategory" value={inquiryCategory} readOnly />
                            </div>
                          )}
                        </div>
                      )}

                      <div className="form-group">
                        <label htmlFor="subject">Subject *</label>
                        <input type="text" id="subject" placeholder="How can we help you?" defaultValue={defaultSubject} required />
                      </div>

                      <div className="form-group">
                        <label htmlFor="message">Message *</label>
                        <textarea id="message" rows="5" placeholder="Type your message here..." defaultValue={defaultMessage} required></textarea>
                      </div>

                      <div className="form-footer">
                        <button type="submit" className="btn btn-orange-fill form-submit-btn">
                          SEND MESSAGE <Icon name="chevron" />
                        </button>
                        <div className="form-security-note">
                          <Icon name="lock" />
                          <span>Your information is safe with us.</span>
                        </div>
                      </div>
                    </form>

                    <div className="form-bottom-tags">
                      <span>INQUIRY / SERVICES</span>
                      <span>PARTNERSHIPS</span>
                      <span>GENERAL SUPPORT</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Location & Map Section */}
        <section className="contact-presence-section">
          <div className="container">
            <div className="presence-main-wrapper animate-slide-bottom" style={{ animationDelay: '0.2s' }}>
              <div className="presence-grid">

                {/* Left Side: Address Details */}
                <div className="presence-details-column">
                  <div className="contact-section-tag">
                    <span className="tag-line"></span>
                    <span className="tag-text">FIND US</span>
                  </div>
                  <h2 className="presence-title">Visit Our Manufacturing Unit</h2>
                  <p className="presence-subtitle">
                    Mechfield India's advanced facility is equipped with state-of-the-art machinery and calibration chambers. We welcome partners for live product testing.
                  </p>

                  <div className="facility-bullets">
                    <div className="facility-bullet-item">
                      <span><Icon name="check" /></span> NABL ISO/IEC 17025 Accredited Calibration Lab
                    </div>
                    <div className="facility-bullet-item">
                      <span><Icon name="check" /></span> CNC Machining &amp; ISO 9001 Quality Inspection
                    </div>
                    <div className="facility-bullet-item">
                      <span><Icon name="check" /></span> High-Pressure Gas Testing &amp; Safety Chambers
                    </div>
                    <div className="facility-bullet-item">
                      <span><Icon name="check" /></span> Located at NH-48 with Direct Logistic Connectivity
                    </div>
                  </div>

                  <a
                    href="https://maps.google.com/?q=Aatmiya+Brookfieldz+Industrial+Park+Vadodara"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-orange-fill presence-directions-btn"
                  >
                    Get Directions <Icon name="chevron" />
                  </a>
                </div>

                {/* Right Side: Google Map Iframe */}
                <div className="presence-map-column">
                  <div className="map-floating-card">
                    <Icon name="factory" />
                    <div>
                      <strong>Industrial Park, Vadodara</strong>
                      <span>NH-48, near Por</span>
                    </div>
                  </div>
                  <iframe
                    title="Mechfield India Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.9961671987523!2d73.1818296760599!3d22.183204946452815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fcb08bf098251%3A0xb3debb98d413346e!2sAatmiya%20Brookfieldz%20Industrial%20Park!5e0!3m2!1sen!2sin!4v1719825000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: '16px', minHeight: '380px', display: 'block' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

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
                <li><a href="/pages/certificates.html">Certificates</a></li>
                <li><a href="/pages/prodcut.html">Products</a></li>
                <li><a href="/pages/clients.html">Clients</a></li>
                <li><a href="/pages/contact.html">Contact Us</a></li>
              </ul>
            </section>

            <section className="footer-col">
              <h2 className="footer-heading">Product Categories</h2>
              <ul className="footer-links">
                <li><a href="/pages/prodcut.html?category=sf6-gas-recovery-transfer-units">SF6 Gas Recovery &amp; Transfer Units</a></li>
                <li><a href="/pages/prodcut.html?category=portable-recovery-vacuum-units">Portable Recovery / Vacuum Units</a></li>
                <li><a href="/pages/prodcut.html?category=filters-moisture-absorbers">Filters &amp; Moisture Absorbers</a></li>
                <li><a href="/pages/prodcut.html?category=measuring-instruments">Measuring Instruments</a></li>
                <li><a href="/pages/prodcut.html?category=gas-connectors-manifolds">Gas Connectors &amp; Manifolds</a></li>
                <li><a href="/pages/prodcut.html?category=sf6-gas-filling-device">SF6 Gas Filling Devices</a></li>
                <li><a href="/pages/prodcut.html?category=sf6-gas-leak-detector">SF6 Gas Leak Detectors</a></li>
                <li><a href="/pages/prodcut.html?category=sf6-gas-storage-tank">SF6 Gas Storage Tanks</a></li>
                <li><a href="/pages/prodcut.html?category=nabl-calibration-laboratory-services">Calibration Services</a></li>
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

export default ContactPage;
