function PopupIcon({ name }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" };

  switch (name) {
    case "close":
      return <svg viewBox="0 0 24 24" {...common}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>;
    case "user":
      return <svg viewBox="0 0 24 24" {...common}><path d="M20 21a8 8 0 0 0-16 0" /><circle cx="12" cy="7" r="4" /></svg>;
    case "mail":
      return <svg viewBox="0 0 24 24" {...common}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>;
    case "phone":
      return <svg viewBox="0 0 24 24" {...common}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.3 19.3 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" /></svg>;
    case "building":
      return <svg viewBox="0 0 24 24" {...common}><path d="M3 21h18" /><path d="M5 21V7l8-4v18" /><path d="M19 21V11l-6-4" /><path d="M9 9h1" /><path d="M9 13h1" /><path d="M9 17h1" /></svg>;
    case "briefcase":
      return <svg viewBox="0 0 24 24" {...common}><rect x="3" y="7" width="18" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><path d="M3 13h18" /></svg>;
    case "file":
      return <svg viewBox="0 0 24 24" {...common}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M8 13h8" /><path d="M8 17h5" /></svg>;
    case "edit":
      return <svg viewBox="0 0 24 24" {...common}><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>;
    case "arrow":
      return <svg viewBox="0 0 24 24" {...common}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>;
    case "shield":
      return <svg viewBox="0 0 24 24" {...common}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-5" /></svg>;
    case "tool":
      return <svg viewBox="0 0 24 24" {...common}><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.4 2.4-3-3z" /></svg>;
    default:
      return null;
  }
}

function QuotePopup({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Quote request sent successfully!");
    onClose();
  };

  return (
    <div className="quote-popup" role="dialog" aria-modal="true" aria-labelledby="quote-popup-title">
      <button className="quote-popup-backdrop" type="button" aria-label="Close quote form" onClick={onClose}></button>
      <div className="quote-popup-panel">
        <aside className="quote-popup-side">
          <div className="quote-popup-emblem">
            <PopupIcon name="tool" />
          </div>
          <div className="quote-popup-photo">
            <img src="/assets/sf6-equipment.png" alt="SF6 gas handling equipment" />
          </div>
          <div className="quote-popup-trust">
            <span></span>
            <strong>Trusted partner in</strong>
            <span></span>
          </div>
          <h2>SF6 Gas Handling<br />Equipment<br />Solutions</h2>

          <div className="quote-popup-contact-list">
            <a href="tel:+919825998958">
              <PopupIcon name="phone" />
              <span><strong>Call Us</strong>+91 98259 98958</span>
            </a>
            <a href="mailto:sales@mechfieldindia.com">
              <PopupIcon name="mail" />
              <span><strong>Email Us</strong>sales@mechfieldindia.com</span>
            </a>
            <div>
              <PopupIcon name="shield" />
              <span><strong>NABL Support</strong>Calibration and service enquiries</span>
            </div>
          </div>
        </aside>

        <section className="quote-popup-content">
          <button className="quote-popup-close" type="button" aria-label="Close" onClick={onClose}>
            <PopupIcon name="close" />
          </button>

          <header className="quote-popup-header">
            <h2 id="quote-popup-title">Get in Touch</h2>
            <p>Send us your requirement and our team will get back to you shortly.</p>
            <span aria-hidden="true"></span>
          </header>

          <form className="quote-popup-form" onSubmit={handleSubmit}>
            <label>
              <PopupIcon name="user" />
              <input type="text" name="name" placeholder="Full Name" required />
            </label>
            <label>
              <PopupIcon name="mail" />
              <input type="email" name="email" placeholder="Email Address" required />
            </label>
            <label>
              <PopupIcon name="phone" />
              <input type="tel" name="phone" placeholder="Phone Number" required />
            </label>
            <label>
              <PopupIcon name="building" />
              <input type="text" name="company" placeholder="Company Name" />
            </label>
            <label className="quote-popup-wide">
              <PopupIcon name="briefcase" />
              <select name="service" required defaultValue="">
                <option value="" disabled>Select Service</option>
                <option>SF6 Gas Recovery & Transfer Units</option>
                <option>SF6 Gas Filling Devices</option>
                <option>SF6 Gas Leak Detectors</option>
                <option>NABL Calibration Services</option>
                <option>Gas Connectors & Manifolds</option>
                <option>Other Requirement</option>
              </select>
            </label>
            <label className="quote-popup-wide">
              <PopupIcon name="file" />
              <input type="text" name="subject" placeholder="Subject" required />
            </label>
            <label className="quote-popup-wide quote-popup-message">
              <PopupIcon name="edit" />
              <textarea name="message" placeholder="Message" rows="3" required></textarea>
            </label>

            <button className="quote-popup-submit" type="submit">
              <span>Send Enquiry</span>
              <PopupIcon name="arrow" />
            </button>
          </form>

          <div className="quote-popup-note">
            <span></span>
            <PopupIcon name="shield" />
            <strong>We'll respond within 24 hours</strong>
            <span></span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default QuotePopup;
