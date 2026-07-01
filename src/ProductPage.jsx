import { useState } from "react";

/**
 * Products page — built with React components.
 * Sections: TopBar → Header → Hero → Catalog → CTA → Footer
 */

const productPageBase = "/pages/prodcut.html";

const categoryHref = (slug) => `${productPageBase}?category=${slug}`;

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const productHref = (category, product) => {
  const productSlug = typeof product === "string" ? slugify(product) : product.slug || slugify(product.title);
  return `${categoryHref(category.slug)}&product=${productSlug}`;
};

const productInquiryHref = (category, product) => {
  const params = new URLSearchParams({
    product: product.title,
    category: category.title
  });

  return `/pages/contact.html?${params.toString()}`;
};

const productDescription = (category) => {
  const lowerTitle = category.title.toLowerCase();

  if (lowerTitle.includes("calibration")) return "Certified calibration support with reliable measurement traceability.";
  if (lowerTitle.includes("storage")) return "Durable storage option for safe SF6 gas handling and transport.";
  if (lowerTitle.includes("connector") || lowerTitle.includes("manifold")) return "Leak-free connection accessory for SF6 gas handling systems.";
  if (lowerTitle.includes("instrument")) return "Accurate measurement instrument for field and laboratory use.";
  if (lowerTitle.includes("filter")) return "Filtration support for clean and moisture-controlled SF6 operation.";
  if (lowerTitle.includes("vacuum") || lowerTitle.includes("recovery")) return "Compact equipment for field recovery, vacuum and service operation.";
  if (lowerTitle.includes("filling")) return "Controlled gas filling support for RMU, breaker and GIS applications.";
  if (lowerTitle.includes("leak")) return "Portable detection support for fast SF6 leak inspection.";

  return category.text;
};

const normalizeProduct = (item, category) => {
  const product = typeof item === "string" ? { title: item } : item;

  return {
    ...product,
    slug: product.slug || slugify(product.title),
    image: product.image || category.image,
    alt: product.alt || product.title,
    text: product.text || productDescription(category)
  };
};

const productDetails = (product, category) => {
  const lowerTitle = product.title.toLowerCase();
  const categoryText = category.title.replace(/s$/i, "");
  const isService = category.title.toLowerCase().includes("calibration");
  const isStorage = category.title.toLowerCase().includes("storage") || /\bltr\b/i.test(product.title);
  const isAccessory = category.title.toLowerCase().includes("connector") || category.title.toLowerCase().includes("manifold");

  if (isService) {
    return {
      headline: "Calibration & Laboratory Service",
      intro: `${product.title} service delivered with controlled procedures, reliable measurement practice and support for industrial instruments.`,
      features: [
        "Calibration support for industrial and laboratory equipment",
        "Measurement reporting prepared for quality documentation",
        "Suitable for in-house and on-site service requirements",
        "Handled by trained technical personnel",
        "Clear process flow for repeatable calibration work",
        "Support available for maintenance and compliance planning"
      ],
      applications: [
        "Quality control and audit documentation",
        "Routine calibration of pressure instruments",
        "Maintenance support for industrial plants",
        "Laboratory and field service requirements",
        "Instrument verification before project use"
      ],
      specs: [
        ["Service", product.title],
        ["Category", category.title],
        ["Mode", "In-house / On-site"],
        ["Report", "Calibration certificate with measurement details"],
        ["Support", "Technical assistance as per requirement"],
        ["Application", "Industrial and laboratory instruments"]
      ]
    };
  }

  if (isStorage) {
    return {
      headline: "SF6 Gas Storage Solution",
      intro: `${product.title} storage tank designed for safe SF6 gas storage, handling and transport during field and plant operations.`,
      features: [
        "Robust storage construction for SF6 gas handling",
        "Suitable for gaseous and liquid storage requirements",
        "Designed for reliable field and plant operation",
        "Compatible with SF6 gas filling and recovery workflows",
        "Built for safe connection with standard accessories",
        "Available in multiple capacity options"
      ],
      applications: [
        "SF6 gas storage for maintenance teams",
        "Gas transfer between equipment and cylinders",
        "Substation service and support operations",
        "Backup storage for gas handling systems",
        "Industrial SF6 handling projects"
      ],
      specs: [
        ["Model", product.title],
        ["Type", "SF6 Gas Storage Tank"],
        ["Storage Medium", "SF6 Gas"],
        ["Operation", "Gaseous / Liquid handling support"],
        ["Connection", "As per project requirement"],
        ["Application", "Storage, transfer and field maintenance"]
      ]
    };
  }

  if (isAccessory) {
    return {
      headline: "SF6 Gas Connection Accessory",
      intro: `${product.title} designed to support secure SF6 gas connection, isolation and gas handling workflows.`,
      features: [
        "Reliable accessory for SF6 gas handling systems",
        "Supports leak-free connection workflows",
        "Useful for filling, recovery and transfer operations",
        "Compact form for field maintenance kits",
        "Compatible with common SF6 service equipment",
        "Built for repeated industrial use"
      ],
      applications: [
        "SF6 filling and recovery connections",
        "Cylinder and equipment interface support",
        "Gas transfer line setup",
        "Switchgear and GIS maintenance",
        "Field service accessory kits"
      ],
      specs: [
        ["Model", product.title],
        ["Category", category.title],
        ["Use", "SF6 gas handling connection support"],
        ["Operation", "Filling / transfer / isolation"],
        ["Compatibility", "As per equipment requirement"],
        ["Application", "RMU, breaker, GIS and service kits"]
      ]
    };
  }

  return {
    headline: lowerTitle.includes("leak") ? "SF6 Gas Leak Detection Unit" : categoryText,
    intro: `${product.title} is designed for safe, efficient and reliable ${category.title.toLowerCase()} operation in industrial and electrical infrastructure applications.`,
    features: [
      "High performance operation for demanding field use",
      "Designed for safe and efficient SF6 gas handling",
      "Reliable performance during service and maintenance",
      "Easy operation for trained maintenance teams",
      "Built for industrial site conditions",
      "Compact, robust and service-friendly design"
    ],
    applications: [
      "RMU, breaker and GIS maintenance",
      "SF6 gas handling in substations",
      "Switchgear service and commissioning",
      "Industrial maintenance operations",
      "On-site service and support work"
    ],
    specs: [
      ["Model", product.title],
      ["Category", category.title],
      ["Operation", "SF6 gas handling support"],
      ["Application", "RMU, breaker, GIS and field service"],
      ["Design", "Compact and robust industrial construction"],
      ["Support", "Customization available as per requirement"]
    ]
  };
};

// ── Product catalog data ──
const productCategories = [
  {
    tag: "Recovery",
    slug: "sf6-gas-recovery-transfer-units",
    title: "SF6 Gas Recovery & Transfer Units",
    text: "Efficient recovery, evacuation and transfer systems for substation maintenance.",
    image: "/assets/category/SF6 Gas Recovery & Transfer Units.png",
    alt: "SF6 Gas Recovery and Transfer Units",
    items: ["SFX-3000C", "SFX-2000C", "SFX-1400C", "SFX-45D T150", "SFX-12C T300", "SFX-10T26", "EVAF-001", "EVAF-002"]
  },
  {
    tag: "Portable",
    slug: "portable-recovery-vacuum-units",
    title: "Portable Recovery / Vacuum Units",
    text: "Compact recovery and vacuum units for portable field service applications.",
    image: "/assets/category/Filters & Vacuum Units.png",
    alt: "Portable Recovery and Vacuum Units",
    items: ["F-002", "VC-100", "SFX-10"]
  },
  {
    tag: "Filters",
    slug: "filters-moisture-absorbers",
    title: "Filters & Moisture Absorbers",
    text: "Drier cartridges, particle filters and stand-alone filtration systems.",
    image: "/assets/category/Filters & Vacuum Units.png",
    alt: "Filters and Moisture Absorbers",
    items: ["SF6 Gas Drier Filter Cartridge", "SF6 Gas Particle Filter", "Stand Alone Filter"]
  },
  {
    tag: "Instruments",
    slug: "measuring-instruments",
    title: "Measuring Instruments",
    text: "Dew point analysers, pressure gauges and monitoring instruments.",
    image: "/assets/category/Measuring Instruments.png",
    alt: "Measuring Instruments",
    items: ["Dew Point Analyser with Pump Back", "Pressure Pump for Density Monitor Testing", "Pressure Switches & Indicators", "Density Monitor Relay Tester", "Digital Pressure Gauge"]
  },
  {
    tag: "Accessories",
    slug: "gas-connectors-manifolds",
    title: "Gas Connectors & Manifolds",
    text: "Precision connectors and manifold assemblies for leak-free connections.",
    image: "/assets/category/Gas Connectors & Manifolds.png",
    alt: "Gas Connectors and Manifolds",
    items: ["SF6 Gas Connectors", "Cylinder Adaptors", "Isolation Valves", "Hose", "SF6 Pressure Regulators", "Manifold"]
  },
  {
    tag: "Filling",
    slug: "sf6-gas-filling-device",
    title: "SF6 Gas Filling Device",
    text: "Gas filling devices and accessories for RMU, breaker and GIS systems.",
    image: "/assets/category/SF6 Gas Filling Devices.png",
    alt: "SF6 Gas Filling Device",
    items: ["SF6 Gas Filling Device", "Filling kit/accessories for RMU, Breaker and GIS"]
  },
  {
    tag: "Detection",
    slug: "sf6-gas-leak-detector",
    title: "SF6 Gas Leak Detector",
    text: "Portable leak detection for accurate field maintenance and safety.",
    image: "/assets/category/SF6 Gas Leak Detectors.png",
    alt: "SF6 Gas Leak Detector",
    items: ["SF6 Gas Leak Detector"]
  },
  {
    tag: "Services",
    slug: "nabl-calibration-laboratory-services",
    title: "NABL Calibration Laboratory Services",
    text: "Precision calibration and maintenance for gas handling instruments.",
    image: "/assets/category/NABL Calibration Services.png",
    alt: "NABL Calibration Laboratory Services",
    items: ["Mechanical Pressure Indicating Devices", "Hydraulic Pressure Calibration", "Pneumatic Pressure Calibration", "High Range Pneumatic Pressure", "mbar Absolute Pressure", "Vacuum Calibration", "Calibration Certificate with Measurement Uncertainty", "In-house & On-site Calibration Services"]
  },
  {
    tag: "Storage",
    slug: "sf6-gas-storage-tank",
    title: "SF6 Gas Storage Tank",
    text: "High-pressure storage tanks for secure gas handling and transport.",
    image: "/assets/category/SF6 Gas Storage Tanks.png",
    alt: "SF6 Gas Storage Tank",
    items: ["150 Ltr", "300 Ltr", "600 Ltr", "1000 Ltr", "2000 Ltr", "4000 Ltr", "8000 Ltr"]
  }
];

// ── Nav dropdown link labels ──
const productLinks = productCategories.map(({ title, slug }) => ({ title, slug }));

/** Reusable inline SVG icons for top bar, header, footer */
function Icon({ name }) {
  const paths = {
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.3 19.3 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z" /><circle cx="12" cy="10" r="3" /></>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>,
    twitter: <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />,
    facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
    chevron: <path d="m6 9 6 6 6-6" />,
    arrow: <path d="m9 18 6-6-6-6" />,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-5" /></>,
    settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-1.6-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1A2 2 0 1 1 7.1 4.2l.1.1A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.6V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1A2 2 0 1 1 19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.1a2 2 0 1 1 0 4H21a1.7 1.7 0 0 0-1.6 1z" /></>
  };

  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>;
}

/** Top contact bar — phone, email, location, social links */
function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-inner">
        <div className="top-bar-left">
          <a href="tel:+919714518402"><Icon name="phone" />+91 9714518402</a>
          <a href="mailto:admin@mechfieldindia.com"><Icon name="mail" />admin@mechfieldindia.com</a>
        </div>
        <div className="top-bar-center"><Icon name="pin" />Vadodara, Gujarat, India</div>
        <div className="top-bar-social">
          <a href="#" aria-label="LinkedIn"><Icon name="linkedin" /></a>
          <a href="#" aria-label="Twitter"><Icon name="twitter" /></a>
          <a href="#" aria-label="Facebook"><Icon name="facebook" /></a>
        </div>
      </div>
    </div>
  );
}

/** Main navigation with products dropdown */
function Header() {
  const selectedSlug = new URLSearchParams(window.location.search).get("category");

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
            <a href="/pages/prodcut.html" className="nav-dropdown-link has-dropdown active">
              Products <Icon name="chevron" />
            </a>
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

/** Products page banner with breadcrumb */
function ProductHero({ selectedCategory }) {
  return (
    <section className="page-hero" aria-label={selectedCategory?.title || "Products"}>
      <div className="page-hero-bg" aria-hidden="true">
        <img src="/assets/banera/product.png" alt="" />
      </div>
      <div className="page-hero-inner">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span aria-hidden="true">/</span>
          <a href={productPageBase}>Products</a>
          {selectedCategory && <span aria-hidden="true">/</span>}
          {selectedCategory && <span aria-current="page">{selectedCategory.title}</span>}
        </nav>
        <p className="eyebrow">Industrial SF6 Solutions</p>
        {selectedCategory ? (
          <h1>
            <span className="h1-line"><span className="h1-navy">{selectedCategory.title}</span></span>
          </h1>
        ) : (
          <h1>
            <span className="h1-line"><span className="h1-navy">Our</span> <span className="h1-orange">Product</span></span>
            <span className="h1-line"><span className="h1-navy">Range</span></span>
          </h1>
        )}
        <p className="copy">{selectedCategory?.text || "Complete range of SF6 gas handling equipment, accessories, measuring instruments and calibration support for reliable field operation."}</p>
      </div>
    </section>
  );
}

/** Single product category card */
function ProductCard({ product }) {
  return (
    <a className="pg-card" href={categoryHref(product.slug)}>
      <div className="pg-card-media">
        <span className="pg-card-cat">{product.tag}</span>
        <div className="pg-card-img-wrap"><img src={product.image} alt={product.alt} /></div>
      </div>
      <div className="pg-card-body">
        <div className="pg-card-info">
          <h3>{product.title}</h3>
          <p>{product.text}</p>
        </div>
        <span className="pg-card-arrow" aria-hidden="true"><Icon name="arrow" /></span>
      </div>
    </a>
  );
}

function ProductItemCard({ item, category }) {
  const product = normalizeProduct(item, category);

  return (
    <a className="pg-card category-product-card" href={product.href || productHref(category, product)}>
      <div className="pg-card-media">
        <span className="pg-card-cat">{category.tag}</span>
        <div className="pg-card-img-wrap">
          <img src={product.image} alt={product.alt} />
        </div>
      </div>
      <div className="pg-card-body">
        <div className="pg-card-info">
          <h3>{product.title}</h3>
          <p>{product.text}</p>
        </div>
        <span className="pg-card-arrow" aria-hidden="true"><Icon name="arrow" /></span>
      </div>
    </a>
  );
}

function ProductDetailPage({ category, product }) {
  const detail = productDetails(product, category);
  const gallery = [...new Set([product.image, category.image, "/assets/products/product-1.jpg", "/assets/products/product-2.jpg", "/assets/products/product-3.jpg"])];
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = gallery[activeIndex];
  const specHighlights = detail.specs.slice(1, 7);
  const showPreviousImage = () => setActiveIndex((activeIndex - 1 + gallery.length) % gallery.length);
  const showNextImage = () => setActiveIndex((activeIndex + 1) % gallery.length);

  return (
    <section className="single-product-page" aria-labelledby="single-product-heading">
      <div className="product-breadcrumb-bar">
        <nav className="product-breadcrumb container" aria-label="Breadcrumb">
          <a href="/">Home</a>
          <span aria-hidden="true">&gt;</span>
          <a href={productPageBase}>Products</a>
          <span aria-hidden="true">&gt;</span>
          <a href={categoryHref(category.slug)}>{category.title}</a>
          <span aria-hidden="true">&gt;</span>
          <span aria-current="page">{product.title}</span>
        </nav>
      </div>

      <div className="product-showcase container">
        <div className="product-gallery-panel">
          <div className="product-detail-image">
            <img src={activeImage} alt={product.alt} />
          </div>
          <div className="product-gallery-controls">
            <button className="gallery-arrow" type="button" aria-label="Previous image" onClick={showPreviousImage}>{"<"}</button>
            <div className="product-thumbs" aria-label={`${product.title} gallery`}>
              {gallery.map((image, index) => (
                <button
                  className={activeIndex === index ? "product-thumb is-active" : "product-thumb"}
                  type="button"
                  aria-label={`Show ${product.title} image ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                  key={`${image}-${index}`}
                >
                  <img src={image} alt="" />
                </button>
              ))}
            </div>
            <button className="gallery-arrow" type="button" aria-label="Next image" onClick={showNextImage}>{">"}</button>
          </div>
        </div>

        <div className="product-info-panel">
          <p className="product-detail-category">{category.title}</p>
          <h1 id="single-product-heading">{product.title}</h1>
          <span className="product-detail-rule" aria-hidden="true"></span>
          <p>{detail.intro}</p>
          <dl className="product-spec-list">
            {specHighlights.map(([label, value]) => (
              <div className="product-spec-item" key={label}>
                <span className="product-spec-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <a className="product-inquiry-btn" href={productInquiryHref(category, product)}>Send Inquiry <Icon name="arrow" /></a>
        </div>
      </div>

      <div className="container product-detail-content">
        <section className="product-detail-section product-key-features" aria-labelledby="product-features-heading">
          <h2 id="product-features-heading">Key Features</h2>
          <ul>
            {detail.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>

        <section className="product-detail-section product-applications" aria-labelledby="product-applications-heading">
          <h2 id="product-applications-heading">Applications</h2>
          <ul>
            {detail.applications.map((application) => (
              <li key={application}>{application}</li>
            ))}
          </ul>
        </section>

        <section className="product-detail-section product-specifications" aria-labelledby="product-specs-heading">
          <h2 id="product-specs-heading">Technical Specifications</h2>
          <table>
            <tbody>
              {detail.specs.map(([label, value]) => (
                <tr key={label}>
                  <th>{label}</th>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <aside className="product-detail-notes" aria-label="Product support notes">
          <article>
            <span className="note-icon"><Icon name="shield" /></span>
            <div>
              <h3>Safety First</h3>
              <p>Our units are designed with multiple safety-focused provisions for controlled industrial operation.</p>
            </div>
          </article>
          <article className="note-warm">
            <span className="note-icon"><Icon name="settings" /></span>
            <div>
              <h3>Customization Available</h3>
              <p>We offer customization as per customer requirements. Contact us for your specific needs.</p>
            </div>
          </article>
        </aside>
      </div>

      <div className="container product-detail-quote">
        <div>
          <h2>Looking for the right solution?</h2>
          <p>Get in touch with our experts for product details, demos and customized offers.</p>
        </div>
        <a className="btn btn-primary" href={productInquiryHref(category, product)}>Request a Quote <Icon name="arrow" /></a>
      </div>
    </section>
  );
}

function CategoryDetail({ category }) {
  return (
    <section className="category-detail" aria-labelledby="category-detail-heading">
      <h2 id="category-detail-heading" className="sr-only">{category.title}</h2>
      <div className="pg-grid category-product-grid" aria-label={`${category.title} products`}>
        {category.items.map((item) => {
          const key = typeof item === "string" ? item : item.title;
          return <ProductItemCard item={item} category={category} key={key} />;
        })}
      </div>
    </section>
  );
}

/** Grid of all product categories or selected category detail */
function ProductCatalog({ selectedCategory }) {
  return (
    <section className="pg-catalog" id="pg-catalog" aria-labelledby="pg-catalog-heading">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">{selectedCategory ? "Category Products" : "What We Offer"}</p>
          <h2 id="pg-catalog-heading">
            {selectedCategory ? selectedCategory.title : <>SF6 Gas <strong>Handling Equipment</strong></>}
          </h2>
          <p className="pg-catalog-sub">
            {selectedCategory ? "Select a product or service from this category." : "Browse our complete range of industrial gas handling solutions"}
          </p>
        </div>
        {selectedCategory ? (
          <CategoryDetail category={selectedCategory} />
        ) : (
          <div className="pg-grid">
            {productCategories.map((product) => <ProductCard product={product} key={product.title} />)}
          </div>
        )}
      </div>
    </section>
  );
}

/** Bottom call-to-action — quote + phone */
function ProductCta() {
  return (
    <section className="pg-cta" aria-label="Get a quote">
      <div className="container pg-cta-inner">
        <div className="pg-cta-text">
          <h2>Need Reliable SF6 Gas Handling Equipment?</h2>
          <p>Connect with MechField Technologies for SF6, nitrogen and calibration gas handling solutions.</p>
        </div>
        <div className="pg-cta-actions">
          <a className="btn btn-primary" href="#">Request a Quote</a>
          <a className="btn btn-white" href="tel:+919714518402">Call +91 9714518402</a>
        </div>
      </div>
    </section>
  );
}

/** Site footer — brand, links, contact */
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
              <li><a href="/pages/certificates.html">Certificates & Awards</a></li>
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

/** Products page layout wrapper */
function ProductPage() {
  const params = new URLSearchParams(window.location.search);
  const selectedSlug = params.get("category");
  const selectedProductSlug = params.get("product");
  const selectedCategory = productCategories.find((category) => category.slug === selectedSlug);
  const selectedProduct = selectedCategory?.items
    .map((item) => normalizeProduct(item, selectedCategory))
    .find((product) => product.slug === selectedProductSlug);

  return (
    <div className="app-shell product-page-shell">
      <TopBar />
      <Header />
      <main>
        {selectedCategory && selectedProduct ? (
          <ProductDetailPage category={selectedCategory} product={selectedProduct} />
        ) : (
          <>
            <ProductHero selectedCategory={selectedCategory} />
            <ProductCatalog selectedCategory={selectedCategory} />
            <ProductCta />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default ProductPage;
