/**
 * Homepage HTML markup for Mechfield India.
 * Rendered by HomePage.jsx via dangerouslySetInnerHTML.
 * Edit section-by-section using the HTML comments below.
 */
const pageMarkup = `
  <!-- ========== Top Bar: phone, email, location, social ========== -->
  <div class="top-bar">
    <div class="top-bar-inner">
      <div class="top-bar-left">
        <a href="tel:+919714518402">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.3 19.3 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>
          +91 9714518402
        </a>
        <a href="mailto:admin@mechfieldindia.com">
          <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
          admin@mechfieldindia.com
        </a>
      </div>
      <div class="top-bar-center">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>
        Vadodara, Gujarat, India
      </div>
      <div class="top-bar-social">
        <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
        <a href="#" aria-label="Twitter"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg></a>
        <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
      </div>
    </div>
  </div>

  <!-- ========== Site Header: logo, navigation, quote button ========== -->
  <header class="site-header">
    <div class="header-inner">
      <a class="brand" href="#" aria-label="Mechfield India home">
        <img src="assets/logo.png" alt="Mechfield India">
      </a>
      <button class="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
      <nav class="main-nav" aria-label="Primary navigation">
        <a class="active" href="#">Home</a>
        <a href="pages/about.html">About Us</a>
        <div class="nav-dropdown">
          <a href="pages/prodcut.html" class="nav-dropdown-link has-dropdown">Products <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg></a>
          <div class="nav-dropdown-menu">
            <p class="nav-dropdown-label">Product Categories</p>
            <a href="pages/prodcut.html?category=sf6-gas-recovery-transfer-units">SF6 Gas Recovery &amp; Transfer Units</a>
            <a href="pages/prodcut.html?category=portable-recovery-vacuum-units">Portable Recovery / Vacuum Units</a>
            <a href="pages/prodcut.html?category=filters-moisture-absorbers">Filters &amp; Moisture Absorbers</a>
            <a href="pages/prodcut.html?category=measuring-instruments">Measuring Instruments</a>
            <a href="pages/prodcut.html?category=gas-connectors-manifolds">Gas Connectors &amp; Manifolds</a>
            <a href="pages/prodcut.html?category=sf6-gas-filling-device">SF6 Gas Filling Device</a>
            <a href="pages/prodcut.html?category=sf6-gas-leak-detector">SF6 Gas Leak Detector</a>
            <a href="pages/prodcut.html?category=nabl-calibration-laboratory-services">NABL Calibration Laboratory Services</a>
            <a href="pages/prodcut.html?category=sf6-gas-storage-tank">SF6 Gas Storage Tank</a>
          </div>
        </div>
        <a href="pages/certificates.html">Certificates &amp; Awards</a>
        <a href="pages/clients.html">Clients</a>
        <a href="pages/contact.html">Contact Us</a>
      </nav>
      <a class="btn btn-quote" href="#">Request a Quote</a>
    </div>
  </header>

  <main>
    <!-- ========== Hero Banner ========== -->
    <section class="hero" aria-label="Premium SF6 Gas Handling Equipment">
      <div class="hero-bg" aria-hidden="true">
        <img src="assets/banera/home1.png" alt="">
      </div>
      <div class="hero-inner">
        <div class="hero-copy">
          <p class="eyebrow">Engineered for Safety. Built for Performance.</p>
          <h1>
            <span class="h1-line"><span class="h1-navy">Premium</span> <span class="h1-orange">SF6 Gas</span></span>
            <span class="h1-line"><span class="h1-navy">Handling</span> <span class="h1-orange">Equipment</span></span>
          </h1>
          <p class="copy">Precision engineered solutions for safe, efficient and reliable handling of SF6 gas in power and electrical infrastructure.</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="pages/prodcut.html">Explore Products <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg></a>
            <a class="btn btn-outline" href="#">Request a Quote <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg></a>
          </div>
          <div class="hero-points">
            <span><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-5"/></svg> Reliable Performance</span>
            <span><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-5"/></svg> Global Standards</span>
            <span><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-5"/></svg> Trusted by Experts</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== Trust Stats: ISO, NABL, experience ========== -->
    <section class="trust-section" aria-label="Company highlights">
      <div class="trust-bg" aria-hidden="true"></div>
      <div class="container">
        <div class="stats">
          <article class="stat">
            <div class="stat-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg></div>
            <div class="stat-content">
              <p class="stat-title"><span class="stat-navy">Since</span> <span class="stat-orange">1993</span></p>
              <span class="stat-desc">Delivering Trust for Over 3 Decades</span>
            </div>
          </article>
          <article class="stat">
            <div class="stat-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="5"/><path d="M8.5 12.5 7 22l5-3 5 3-1.5-9.5"/></svg></div>
            <div class="stat-content">
              <p class="stat-title"><span class="stat-line"><span class="stat-navy">ISO 9001:2015</span> <span class="stat-orange">Certified</span></span></p>
              <span class="stat-desc">Quality You Can Rely On</span>
            </div>
          </article>
          <article class="stat">
            <div class="stat-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 2v6L4 20a2 2 0 0 0 1.8 3h12.4A2 2 0 0 0 20 20L14 8V2"/><path d="M8.5 2h7M7 16h10"/></svg></div>
            <div class="stat-content">
              <p class="stat-title">
                <span class="stat-line"><span class="stat-navy">NABL Accredited</span></span>
                <span class="stat-line"><span class="stat-orange">Laboratory</span></span>
              </p>
              <span class="stat-desc">Government Approved Calibration Lab</span>
            </div>
          </article>
          <article class="stat">
            <div class="stat-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-8 0v2"/><circle cx="12" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8M2 21v-2a4 4 0 0 1 3-3.9M8 3.1a4 4 0 0 0 0 7.8"/></svg></div>
            <div class="stat-content">
              <p class="stat-title">
                <span class="stat-line"><span class="stat-navy">Industrial Gas</span></span>
                <span class="stat-line"><span class="stat-navy">Handling</span> <span class="stat-orange">Experts</span></span>
              </p>
              <span class="stat-desc">Reliable. Safe. Precise.</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ========== About Us ========== -->
    <section class="about" aria-labelledby="about-heading">
      <div class="container about-grid">
        <div class="about-media">
          <div class="about-image-stack">
            <div class="about-image-bg" aria-hidden="true"></div>
            <div class="about-image-frame">
              <img src="assets/company.jpg" alt="Mechfield Technologies office building">
              <div class="about-year-pill">
                <strong>30+</strong>
                <span>Years of Excellence</span>
              </div>
            </div>
          </div>
        </div>
        <div class="about-panel">
          <p class="section-label">About Us</p>
          <h2 id="about-heading">
            <span class="about-title-line"><span class="h2-navy">Mechfield</span> <span class="h2-orange">Technologies</span> <span class="h2-navy">Pvt. Ltd.</span></span>
          </h2>
          <p class="about-lead">Established in 1993, we design, develop and manufacture speciality gas handling products trusted by industries worldwide.</p>
          <p>Our comprehensive range includes Regulators, Valves, Flash Back Arrestors, Laboratory Furniture and SF6 Gas Handling Equipment — built for longer service life, corrosion resistance and tough construction.</p>
          <div class="about-chips">
            <span>ISO Certified</span>
            <span>NABL Laboratory</span>
            <span>Global Exports</span>
          </div>
          <div class="about-stats">
            <div class="about-stat">
              <strong>30+</strong>
              <span>Years Experience</span>
            </div>
            <div class="about-stat">
              <strong>500+</strong>
              <span>Happy Customers</span>
            </div>
            <div class="about-stat">
              <strong>30+</strong>
              <span>Countries Served</span>
            </div>
            <div class="about-stat">
              <strong>24/7</strong>
              <span>Support &amp; Service</span>
            </div>
          </div>
          <a class="btn btn-primary btn-sm" href="#">Learn More About Us <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg></a>
        </div>
      </div>
    </section>

    <!-- ========== Product Categories (What We Offer) ========== -->
    <section class="products" aria-labelledby="product-categories-heading">
      <div class="container">
        <div class="section-heading">
          <p class="section-label">What We Offer</p>
          <h2 id="product-categories-heading">Our <strong>Product Categories</strong></h2>
        </div>
        <div class="product-grid">
          <a class="product-card" href="pages/prodcut.html?category=sf6-gas-recovery-transfer-units">
            <div class="product-media">
              <div class="product-img-wrap"><img src="assets/category/SF6 Gas Recovery &amp; Transfer Units.png" alt="SF6 Gas Recovery and Transfer Units"></div>
            </div>
            <div class="product-body">
              <div class="product-info">
                <h3>SF6 Gas Recovery &amp; Transfer Units</h3>
                <p>Recovery, transfer and purification systems</p>
              </div>
            </div>
          </a>
          <a class="product-card" href="pages/prodcut.html?category=sf6-gas-filling-device">
            <div class="product-media">
              <div class="product-img-wrap"><img src="assets/category/SF6 Gas Filling Devices.png" alt="SF6 Gas Filling Devices"></div>
            </div>
            <div class="product-body">
              <div class="product-info">
                <h3>SF6 Gas Filling Device</h3>
                <p>Precise filling for switchgear systems</p>
              </div>
            </div>
          </a>
          <a class="product-card" href="pages/prodcut.html?category=sf6-gas-storage-tank">
            <div class="product-media">
              <div class="product-img-wrap"><img src="assets/category/SF6 Gas Storage Tanks.png" alt="SF6 Gas Storage Tanks"></div>
            </div>
            <div class="product-body">
              <div class="product-info">
                <h3>SF6 Gas Storage Tank</h3>
                <p>Safe and durable gas storage solutions</p>
              </div>
            </div>
          </a>
          <a class="product-card" href="pages/prodcut.html?category=measuring-instruments">
            <div class="product-media">
              <div class="product-img-wrap"><img src="assets/category/Measuring Instruments.png" alt="Measuring Instruments"></div>
            </div>
            <div class="product-body">
              <div class="product-info">
                <h3>Measuring Instruments</h3>
                <p>Accurate gas measurement and monitoring</p>
              </div>
            </div>
          </a>
          <a class="product-card" href="pages/prodcut.html?category=gas-connectors-manifolds">
            <div class="product-media">
              <div class="product-img-wrap"><img src="assets/category/Gas Connectors &amp; Manifolds.png" alt="Gas Connectors and Manifolds"></div>
            </div>
            <div class="product-body">
              <div class="product-info">
                <h3>Gas Connectors &amp; Manifolds</h3>
                <p>High-pressure connectors and manifolds</p>
              </div>
            </div>
          </a>
          <a class="product-card" href="pages/prodcut.html?category=sf6-gas-leak-detector">
            <div class="product-media">
              <div class="product-img-wrap"><img src="assets/category/SF6 Gas Leak Detectors.png" alt="SF6 Gas Leak Detectors"></div>
            </div>
            <div class="product-body">
              <div class="product-info">
                <h3>SF6 Gas Leak Detector</h3>
                <p>Advanced leak detection technology</p>
              </div>
            </div>
          </a>
          <a class="product-card" href="pages/prodcut.html?category=portable-recovery-vacuum-units">
            <div class="product-media">
              <div class="product-img-wrap"><img src="assets/category/Filters &amp; Vacuum Units.png" alt="Filters and Vacuum Units"></div>
            </div>
            <div class="product-body">
              <div class="product-info">
                <h3>Portable Recovery / Vacuum Units</h3>
                <p>Portable recovery and vacuum pump systems</p>
              </div>
            </div>
          </a>
          <a class="product-card" href="pages/prodcut.html?category=nabl-calibration-laboratory-services">
            <div class="product-media">
              <div class="product-img-wrap"><img src="assets/category/NABL Calibration Services.png" alt="NABL Calibration Services"></div>
            </div>
            <div class="product-body">
              <div class="product-info">
                <h3>NABL Calibration Laboratory Services</h3>
                <p>Certified calibration and testing</p>
              </div>
            </div>
          </a>
        </div>
        <div class="products-actions">
          <a class="btn btn-primary" href="pages/prodcut.html">View All Categories <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg></a>
        </div>
      </div>
    </section>

    <!-- ========== Why Choose Mechfield (3D model + cards) ========== -->
    <section class="why-choose" aria-labelledby="why-choose-heading">
      <div class="why-choose-bg" aria-hidden="true"></div>
      <div class="container">
        <div class="section-heading">
          <p class="section-label">WHY CHOOSE</p>
          <h2 id="why-choose-heading">MECHFIELD</h2>
          <p class="section-desc-visible">Engineered for precision. Built for reliability. Trusted for decades.</p>
          <div class="why-divider" aria-hidden="true">
            <span></span>
            <span class="dot"></span>
            <span></span>
          </div>
        </div>
        <div class="why-layout">
          <div class="why-visual">
            <div class="why-image-frame">
              <div class="sf6-model-viewer" data-sf6-model aria-label="Interactive 3D SF6 gas handling equipment model">
                <img class="sf6-model-fallback" src="assets/sf6-equipment.png" alt="SF6 gas handling equipment manufactured by Mechfield">
              </div>
            </div>
          </div>
          <div class="why-grid">
            <article class="why-card">
              <span class="why-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <text x="12" y="14.5" font-size="6.5" font-weight="900" font-family="Montserrat, system-ui, sans-serif" text-anchor="middle" fill="currentColor" stroke="none">30+</text>
                </svg>
              </span>
              <h3>30+ Years Experience</h3>
              <p>Decades of expertise in gas handling solutions across industries.</p>
            </article>
            <article class="why-card">
              <span class="why-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="9" cy="9" r="3" />
                  <path d="M9 5V3M9 15v-2M5 9H3M15 9h-2M6.17 6.17L4.76 4.76M13.24 13.24l-1.41-1.41M6.17 11.83l-1.41 1.41M13.24 4.76l-1.41 1.41" />
                  <circle cx="17" cy="17" r="2.5" />
                  <path d="M17 13.5v-1M17 21.5v-1M13.5 17h-1M21.5 17h-1M14.52 14.52l-.7-.7M19.48 19.48l-.7-.7M14.52 19.48l-.7.7M19.48 14.52l-.7-.7" />
                </svg>
              </span>
              <h3>Precision Engineering</h3>
              <p>Built with advanced technology and exacting standards for superior performance.</p>
            </article>
            <article class="why-card">
              <span class="why-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 11 2 2 4-4" />
                </svg>
              </span>
              <h3>Reliable Performance</h3>
              <p>Engineered for continuous operation with maximum safety and durability.</p>
            </article>
            <article class="why-card">
              <span class="why-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M10 20H5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h1a2 2 0 0 0 2-2 2 2 0 0 0-2-2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v1a2 2 0 0 0 2 2 2 2 0 0 0 2-2V5a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1a2 2 0 0 0-2 2 2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2 2 2 0 0 0-2 2v1a2 2 0 0 1-2 2z" />
                </svg>
              </span>
              <h3>Custom Solutions</h3>
              <p>Tailored systems designed to meet your exact operational needs.</p>
            </article>
            <article class="why-card">
              <span class="why-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3.5z" />
                </svg>
              </span>
              <h3>Specialized Gas Handling</h3>
              <p>Safe, efficient, and precise handling of a wide range of industrial gases.</p>
            </article>
            <article class="why-card">
              <span class="why-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                  <path d="M12 17a5 5 0 0 1-4-3" />
                  <path d="m12 17 4-6" />
                  <circle cx="12" cy="17" r="1.5" />
                </svg>
              </span>
              <h3>Testing & Calibration Support</h3>
              <p>Comprehensive testing and calibration for unmatched accuracy and compliance.</p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== Industries We Serve ========== -->
    <section class="industries" aria-labelledby="industries-heading">
      <div class="container">
        <div class="section-heading">
          <p class="section-label">Sectors We Support</p>
          <h2 id="industries-heading">Industries We <strong>Serve</strong></h2>
          <p class="section-desc">Delivering reliable SF6 gas handling and speciality gas equipment to critical sectors across power, infrastructure and industrial operations.</p>
        </div>
        <div class="industries-grid">
          <article class="industry-card">
            <span class="industry-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z"/></svg></span>
            <h3>Power &amp; Utilities</h3>
            <p>SF6 equipment for substations, switchgear maintenance and transmission networks.</p>
          </article>
          <article class="industry-card">
            <span class="industry-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M2 20h20M5 20V10l7-6 7 6v10"/><path d="M9 20v-6h6v6"/></svg></span>
            <h3>Electrical Infrastructure</h3>
            <p>Gas handling systems for electrical contractors and EPC project teams.</p>
          </article>
          <article class="industry-card">
            <span class="industry-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg></span>
            <h3>Manufacturing Plants</h3>
            <p>Industrial gas regulators, valves and handling units for production facilities.</p>
          </article>
          <article class="industry-card">
            <span class="industry-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="4" y="3" width="16" height="16" rx="2"/><path d="M4 11h16M9 21V11M15 21V11"/></svg></span>
            <h3>Oil &amp; Gas Sector</h3>
            <p>High-pressure connectors, manifolds and safety equipment for demanding environments.</p>
          </article>
          <article class="industry-card">
            <span class="industry-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg></span>
            <h3>Railways &amp; Metro</h3>
            <p>Dependable gas handling solutions for rail electrification and metro projects.</p>
          </article>
          <article class="industry-card">
            <span class="industry-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M10 2v6L4 20a2 2 0 0 0 1.8 3h12.4A2 2 0 0 0 20 20L14 8V2"/><path d="M8.5 2h7"/></svg></span>
            <h3>Research &amp; Laboratories</h3>
            <p>Laboratory furniture, calibration services and precision measuring instruments.</p>
          </article>
        </div>
      </div>
    </section>

    <!-- ========== Client Testimonials Carousel ========== -->
    <section class="testimonials" aria-labelledby="testimonials-heading">
      <div class="testimonials-bg" aria-hidden="true"></div>
      <div class="container">
        <div class="section-heading testimonials-heading">
          <p class="section-label">Client Feedback</p>
          <h2 id="testimonials-heading">What Our <strong>Clients Say</strong></h2>
          <p class="testimonials-sub">Trusted by power utilities, industrial plants and engineering teams across India for reliable SF6 gas handling solutions.</p>
        </div>
        <div class="testimonial-slider-wrap">
          <div class="testimonial-slider" aria-roledescription="carousel" aria-label="Client testimonials">
            <div class="testimonial-track">
              <div class="testimonial-slide">
                <article class="testimonial-card">
                  <span class="testimonial-quote" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M7.17 6A5.001 5.001 0 0 0 2 11v7h7v-7a4 4 0 0 1 4-4h1V6H7.17zM18.17 6A5.001 5.001 0 0 0 13 11v7h7v-7a4 4 0 0 1 4-4h1V6h-6.83z"/></svg></span>
                  <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                  <blockquote><p>Mechfield's SF6 recovery units have significantly improved our maintenance workflow. Reliable equipment and excellent after-sales support across India.</p></blockquote>
                  <footer class="testimonial-author">
                    <div class="testimonial-avatar" aria-hidden="true">RK</div>
                    <div><strong>Rajesh Kumar</strong><span>Maintenance Head, Power Grid Sector</span></div>
                  </footer>
                </article>
                <article class="testimonial-card">
                  <span class="testimonial-quote" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M7.17 6A5.001 5.001 0 0 0 2 11v7h7v-7a4 4 0 0 1 4-4h1V6H7.17zM18.17 6A5.001 5.001 0 0 0 13 11v7h7v-7a4 4 0 0 1 4-4h1V6h-6.83z"/></svg></span>
                  <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                  <blockquote><p>We have been using their gas filling devices and leak detectors for over 5 years. Quality is consistent and their team understands industrial requirements very well.</p></blockquote>
                  <footer class="testimonial-author">
                    <div class="testimonial-avatar" aria-hidden="true">PS</div>
                    <div><strong>Priya Sharma</strong><span>Project Engineer, Electrical Utilities</span></div>
                  </footer>
                </article>
                <article class="testimonial-card">
                  <span class="testimonial-quote" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M7.17 6A5.001 5.001 0 0 0 2 11v7h7v-7a4 4 0 0 1 4-4h1V6H7.17zM18.17 6A5.001 5.001 0 0 0 13 11v7h7v-7a4 4 0 0 1 4-4h1V6h-6.83z"/></svg></span>
                  <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                  <blockquote><p>From consultation to delivery, the experience was professional. Their calibration services and timely response make them a trusted partner for our operations.</p></blockquote>
                  <footer class="testimonial-author">
                    <div class="testimonial-avatar" aria-hidden="true">AM</div>
                    <div><strong>Amit Mehta</strong><span>Operations Manager, Industrial Plant</span></div>
                  </footer>
                </article>
              </div>
              <div class="testimonial-slide">
                <article class="testimonial-card">
                  <span class="testimonial-quote" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M7.17 6A5.001 5.001 0 0 0 2 11v7h7v-7a4 4 0 0 1 4-4h1V6H7.17zM18.17 6A5.001 5.001 0 0 0 13 11v7h7v-7a4 4 0 0 1 4-4h1V6h-6.83z"/></svg></span>
                  <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                  <blockquote><p>Their SF6 storage tanks and vacuum units are built to last. We appreciate the sturdy construction and safety-focused design for our substation projects.</p></blockquote>
                  <footer class="testimonial-author">
                    <div class="testimonial-avatar" aria-hidden="true">VS</div>
                    <div><strong>Vikram Singh</strong><span>Substation Engineer, Transmission Division</span></div>
                  </footer>
                </article>
                <article class="testimonial-card">
                  <span class="testimonial-quote" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M7.17 6A5.001 5.001 0 0 0 2 11v7h7v-7a4 4 0 0 1 4-4h1V6H7.17zM18.17 6A5.001 5.001 0 0 0 13 11v7h7v-7a4 4 0 0 1 4-4h1V6h-6.83z"/></svg></span>
                  <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                  <blockquote><p>Measuring instruments and connectors supplied by Mechfield meet global standards. On-time delivery and technical guidance helped us complete projects faster.</p></blockquote>
                  <footer class="testimonial-author">
                    <div class="testimonial-avatar" aria-hidden="true">SP</div>
                    <div><strong>Sneha Patel</strong><span>Technical Manager, Manufacturing Unit</span></div>
                  </footer>
                </article>
                <article class="testimonial-card">
                  <span class="testimonial-quote" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M7.17 6A5.001 5.001 0 0 0 2 11v7h7v-7a4 4 0 0 1 4-4h1V6H7.17zM18.17 6A5.001 5.001 0 0 0 13 11v7h7v-7a4 4 0 0 1 4-4h1V6h-6.83z"/></svg></span>
                  <div class="testimonial-stars" aria-label="5 out of 5 stars">★★★★★</div>
                  <blockquote><p>NABL calibration support from Mechfield gives us confidence in our equipment accuracy. A dependable partner for long-term industrial gas handling needs.</p></blockquote>
                  <footer class="testimonial-author">
                    <div class="testimonial-avatar" aria-hidden="true">DJ</div>
                    <div><strong>Deepak Joshi</strong><span>Director, Electrical Contracting Firm</span></div>
                  </footer>
                </article>
              </div>
            </div>
          </div>
          <div class="testimonial-dots" role="tablist" aria-label="Testimonial slides">
            <button type="button" class="testimonial-dot is-active" aria-label="Testimonials 1 to 3" aria-selected="true"></button>
            <button type="button" class="testimonial-dot" aria-label="Testimonials 4 to 6" aria-selected="false"></button>
          </div>
        </div>
        <div class="testimonial-trust">
          <div class="testimonial-trust-item"><strong>30+</strong><span>Years Experience</span></div>
          <div class="testimonial-trust-item"><strong>500+</strong><span>Happy Clients</span></div>
          <div class="testimonial-trust-item"><strong>30+</strong><span>Countries Served</span></div>
          <div class="testimonial-trust-item"><strong>ISO</strong><span>Certified Quality</span></div>
        </div>
      </div>
    </section>

    <!-- ========== FAQ + Contact CTA Card ========== -->
    <section class="faq-section" aria-labelledby="faq-heading">
      <div class="container faq-layout">
        <div class="faq-main">
          <h2 id="faq-heading">Frequently Asked Questions</h2>
          <div class="faq-list">
            <details class="faq-item">
              <summary>
                <span class="faq-dot" aria-hidden="true"></span>
                <span class="faq-q">What types of SF6 gas handling equipment do you manufacture?</span>
                <span class="faq-toggle" aria-hidden="true">+</span>
              </summary>
              <div class="faq-answer">
                <p>We manufacture SF6 gas recovery and transfer units, filling devices, storage tanks, leak detectors, filters, vacuum units, connectors, manifolds and related accessories for power and electrical infrastructure.</p>
              </div>
            </details>
            <details class="faq-item">
              <summary>
                <span class="faq-dot" aria-hidden="true"></span>
                <span class="faq-q">Do you provide installation and after-sales support?</span>
                <span class="faq-toggle" aria-hidden="true">+</span>
              </summary>
              <div class="faq-answer">
                <p>Yes. We offer installation guidance, operator training, preventive maintenance support and spare parts assistance across India through our technical team.</p>
              </div>
            </details>
            <details class="faq-item">
              <summary>
                <span class="faq-dot" aria-hidden="true"></span>
                <span class="faq-q">Are your products ISO certified?</span>
                <span class="faq-toggle" aria-hidden="true">+</span>
              </summary>
              <div class="faq-answer">
                <p>Our manufacturing processes follow international quality standards. We maintain ISO certification and supply equipment trusted by utilities and industrial clients nationwide.</p>
              </div>
            </details>
            <details class="faq-item">
              <summary>
                <span class="faq-dot" aria-hidden="true"></span>
                <span class="faq-q">Can I request a customized solution for my project?</span>
                <span class="faq-toggle" aria-hidden="true">+</span>
              </summary>
              <div class="faq-answer">
                <p>Absolutely. Share your capacity, pressure rating and application details and our engineers will recommend or customize the right SF6 handling solution for your site.</p>
              </div>
            </details>
            <details class="faq-item">
              <summary>
                <span class="faq-dot" aria-hidden="true"></span>
                <span class="faq-q">Do you offer calibration services?</span>
                <span class="faq-toggle" aria-hidden="true">+</span>
              </summary>
              <div class="faq-answer">
                <p>Yes. We provide certified calibration and testing services for gas handling instruments and related equipment through our calibration laboratory.</p>
              </div>
            </details>
          </div>
        </div>
        <aside class="faq-cta" aria-label="Contact our experts">
          <div class="faq-cta-visual">
            <img src="assets/sf6-equipment.png" alt="SF6 gas handling equipment">
          </div>
          <div class="faq-cta-body">
            <h3>Have more questions?</h3>
            <p>Our experts are here to help you.</p>
            <a class="faq-cta-btn" href="#contact">Contact Us <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg></a>
          </div>
        </aside>
      </div>
    </section>

    <!-- ========== Contact Form + Info ========== -->
    <section class="contact-section" id="contact" aria-labelledby="contact-heading">
      <div class="container">
        
        <!-- Section Heading -->
        <div class="section-heading">
          <p class="section-label">Get In Touch</p>
          <h2 id="contact-heading">Contact <strong>Us</strong></h2>
        </div>

        <div class="contact-grid">
          
          <!-- Left Column -->
          <div class="contact-left">
            
            <!-- Visit Facility Image Card -->
            <div class="facility-image-card">
              <img src="assets/company.jpg" alt="Mechfield Technologies facility, Vadodara">
              <div class="facility-card-overlay">
                <div class="facility-icon-circle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div class="facility-card-text">
                  <strong>Visit Our Facility</strong>
                  <span>Vadodara, Gujarat, India</span>
                </div>
              </div>
            </div>
            
            <!-- 2x2 Info Grid -->
            <div class="contact-info-grid">
              
              <!-- Address Card -->
              <div class="contact-detail-card">
                <div class="detail-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div class="detail-content">
                  <h4>ADDRESS</h4>
                  <p>49, Aatmiya Brookfieldz Industrial Park, Village-Untiya, NH-48, Nr. Por, Vadodara-391243, Gujarat, India.</p>
                </div>
              </div>
              
              <!-- Phone Card -->
              <div class="contact-detail-card">
                <div class="detail-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.3 19.3 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>
                </div>
                <div class="detail-content">
                  <h4>PHONE</h4>
                  <p>
                    <a href="tel:+919825998958">+91 9825998958</a><br>
                    <a href="tel:+919601604735">+91 9601604735</a><br>
                    <a href="tel:+919714518402">+91 9714518402</a>
                  </p>
                </div>
              </div>
              
              <!-- Email Card -->
              <div class="contact-detail-card">
                <div class="detail-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div class="detail-content">
                  <h4>EMAIL</h4>
                  <p>
                    <a href="mailto:admin@mechfieldindia.com">admin@mechfieldindia.com</a><br>
                    <a href="mailto:sales@mechfieldindia.com">sales@mechfieldindia.com</a>
                  </p>
                </div>
              </div>
              
              <!-- Working Hours Card -->
              <div class="contact-detail-card">
                <div class="detail-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div class="detail-content">
                  <h4>WORKING HOURS</h4>
                  <p>Mon – Sat: 9:00 AM – 6:00 PM<br>Sunday: Closed</p>
                </div>
              </div>
              
            </div>
          </div>
          
          <!-- Right Column: Form Box -->
          <div class="premium-form-container">
            
            <div class="premium-form-header">
              <span class="premium-title-bar"></span>
              <div>
                <h3 class="premium-form-title">Send Us a Message</h3>
                <p class="premium-form-subtitle">Fill in the details and our team will get back to you.</p>
              </div>
            </div>
            
            <form class="premium-message-form" action="#" method="post">
              <div class="form-double-row">
                <div class="premium-form-field">
                  <label>FULL NAME</label>
                  <div class="input-with-icon">
                    <span class="field-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></span>
                    <input type="text" name="name" placeholder="Enter your full name" required>
                  </div>
                </div>
                <div class="premium-form-field">
                  <label>PHONE NUMBER</label>
                  <div class="input-with-icon">
                    <span class="field-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.3 19.3 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg></span>
                    <input type="tel" name="phone" placeholder="Enter your phone number" required>
                  </div>
                </div>
              </div>
              
              <div class="premium-form-field">
                <label>EMAIL ADDRESS</label>
                <div class="input-with-icon">
                  <span class="field-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></span>
                  <input type="email" name="email" placeholder="Enter your email address" required>
                </div>
              </div>
              
              <div class="premium-form-field">
                <label>SUBJECT</label>
                <div class="input-with-icon">
                  <span class="field-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></span>
                  <input type="text" name="subject" placeholder="Enter subject of your inquiry" required>
                </div>
              </div>
              
              <div class="premium-form-field">
                <label>MESSAGE</label>
                <div class="input-with-icon align-top">
                  <span class="field-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></span>
                  <textarea name="message" rows="4" placeholder="Tell us about your requirements..." required></textarea>
                </div>
              </div>
              
              <button class="premium-submit-btn" type="submit">
                <span>SEND MESSAGE</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
              
              <div class="privacy-subtext">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 11 11 13 15 9"/></svg>
                <span>We respect your privacy. Your information is safe with us.</span>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  </main>

  <!-- ========== Site Footer ========== -->
  <footer class="site-footer">
    <div class="footer-main">
      <div class="container footer-grid">
        <section class="footer-brand">
          <img src="assets/logo.png" alt="Mechfield India" class="footer-logo">
          <p class="footer-about">Established in 1993 — manufacturing and supplying Regulators, Valves, Gas Regulators, Flash Back Arrestors and Laboratory Furniture trusted by industries worldwide.</p>
          <div class="footer-social">
            <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
            <a href="#" aria-label="Twitter"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg></a>
            <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
          </div>
        </section>

        <section class="footer-col">
          <h2 class="footer-heading">Quick Links</h2>
          <ul class="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/pages/about.html">About Us</a></li>
            <li><a href="/pages/certificates.html">Certificates</a></li>
            <li><a href="/pages/prodcut.html">Products</a></li>
            <li><a href="/pages/clients.html">Clients</a></li>
            <li><a href="/pages/contact.html">Contact Us</a></li>
          </ul>
        </section>

        <section class="footer-col">
          <h2 class="footer-heading">Product Categories</h2>
          <ul class="footer-links">
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

        <section class="footer-col footer-contact">
          <h2 class="footer-heading">Contact Us</h2>
          <address class="footer-contact-list">
            <div class="footer-contact-item">
              <span class="footer-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg></span>
              <span>49, AATMIYA BROOKFIELDZ INDUSTRIAL PARK, VILLAGE-UNTIYA, NH-48, NR. POR, DIST - VADODARA-391243, GUJARAT, INDIA.</span>
            </div>
            <div class="footer-contact-item">
              <span class="footer-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.3 19.3 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg></span>
              <span>
                <a href="tel:+919825998958">+91 9825998958</a><br>
                <a href="tel:+919601604735">+91 9601604735</a><br>
                <a href="tel:+919714518402">+91 9714518402</a>
              </span>
            </div>
            <div class="footer-contact-item">
              <span class="footer-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg></span>
              <span>
                <a href="mailto:admin@mechfieldindia.com">admin@mechfieldindia.com</a><br>
                <a href="mailto:sales@mechfieldindia.com">sales@mechfieldindia.com</a>
              </span>
            </div>
          </address>
        </section>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container footer-bottom-inner">
        <p>Copyright &copy;2026 mechfieldindia</p>
        <p>Powered by technomantraindia</p>
      </div>
    </div>
  </footer>`;

export default pageMarkup;
