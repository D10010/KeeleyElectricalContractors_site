// Shared layout, nav, and footer for Keeley Electrical Contractors

export const PHONE = '(207) 797-3772'
export const PHONE_HREF = 'tel:+12077973772'
export const EMAIL = 'info@keeleyelectric.com'
export const COMPANY = 'Keeley Electrical Contractors, Inc.'
export const ADDRESS = {
  street: '18 Caddie Ln',
  city: 'Portland',
  state: 'ME',
  zip: '04103',
  country: 'US'
}
export const LOCATION = `${ADDRESS.street}, ${ADDRESS.city}, ${ADDRESS.state} ${ADDRESS.zip}`
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(LOCATION)}`
export const TAGLINE = 'Electrical &middot; Site &middot; Utility'

interface PageMeta {
  title: string
  description: string
  canonical: string
  h1?: string
  jsonLd?: string
  breadcrumbs?: { name: string; url: string }[]
  ogImage?: string
  ogType?: string
}

export function layout(meta: PageMeta, body: string): string {
  const breadcrumbLd = meta.breadcrumbs ? `<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": meta.breadcrumbs.map((b, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": b.name,
      "item": b.url
    }))
  })}</script>` : ''

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${meta.title}</title>
<meta name="description" content="${meta.description}">
<meta property="og:title" content="${meta.title}">
<meta property="og:description" content="${meta.description}">
<meta property="og:url" content="${meta.canonical}">
<meta property="og:image" content="${meta.ogImage ?? '/static/og-default.png'}">
<meta property="og:type" content="${meta.ogType ?? 'website'}">
<meta property="og:site_name" content="Keeley Electrical Contractors">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${meta.title}">
<meta name="twitter:description" content="${meta.description}">
<meta name="twitter:image" content="${meta.ogImage ?? '/static/og-default.png'}">
<link rel="canonical" href="${meta.canonical}">
<link rel="icon" type="image/png" href="/favicon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&family=Barlow:wght@300;400;500;600&display=swap" rel="stylesheet">
<link href="/static/styles.css" rel="stylesheet">
<noscript><style>.reveal-init{opacity:1!important;transform:none!important}</style></noscript>
${meta.jsonLd || ''}
${breadcrumbLd}
</head>
<body>

<!-- Emergency Bar -->
<div class="emergency-bar">
  <div class="emergency-bar__inner">
    <div class="emergency-bar__left">
      <span class="emergency-bar__dot"></span>
      <span class="emergency-bar__text">24/7 Emergency Service Available</span>
    </div>
    <a href="${PHONE_HREF}" class="emergency-bar__phone">${PHONE}</a>
  </div>
</div>

<!-- Navigation -->
<nav class="nav" id="main-nav">
  <div class="nav__inner">
    <a href="/" class="nav__logo" aria-label="${COMPANY} Home">
      <img src="/static/logo-full.png" alt="Keeley Electrical Contractors" class="nav__logo-img">
    </a>
    <div class="nav__links" id="nav-links">
      <a href="/" class="nav__link">Home</a>
      <div class="nav__dropdown">
        <a href="/about" class="nav__link">About <svg class="nav__chevron" width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 3.5 5 6 7.5 3.5"/></svg></a>
        <div class="nav__dropdown-menu">
          <a href="/about#history" class="nav__dropdown-item">Our History</a>
          <a href="/about#capabilities" class="nav__dropdown-item">Full-Service Capabilities</a>
          <a href="/about#values" class="nav__dropdown-item">What Drives Us</a>
          <a href="/about#team" class="nav__dropdown-item">Key Personnel</a>
        </div>
      </div>
      <div class="nav__dropdown">
        <a href="/services" class="nav__link">Services <svg class="nav__chevron" width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 3.5 5 6 7.5 3.5"/></svg></a>
        <div class="nav__dropdown-menu">
          <a href="/services" class="nav__dropdown-item">What We Build</a>
          <a href="/services/electrical" class="nav__dropdown-item">Electrical</a>
          <a href="/services/site-work" class="nav__dropdown-item">Site Work</a>
          <a href="/services/utility" class="nav__dropdown-item">Utility</a>
        </div>
      </div>
      <div class="nav__dropdown">
        <a href="/capabilities" class="nav__link">Capabilities <svg class="nav__chevron" width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 3.5 5 6 7.5 3.5"/></svg></a>
        <div class="nav__dropdown-menu">
          <a href="/capabilities#licensing" class="nav__dropdown-item">Licensing</a>
          <a href="/capabilities#certifications" class="nav__dropdown-item">Certifications</a>
          <a href="/capabilities#insurance" class="nav__dropdown-item">Insurance &amp; Bonding</a>
          <a href="/capabilities#capacity" class="nav__dropdown-item">Operational Capacity</a>
          <a href="/capabilities#territory" class="nav__dropdown-item">Service Territory</a>
        </div>
      </div>
      <div class="nav__dropdown">
        <a href="/careers" class="nav__link">Careers <svg class="nav__chevron" width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 3.5 5 6 7.5 3.5"/></svg></a>
        <div class="nav__dropdown-menu">
          <a href="/careers#why-keeley" class="nav__dropdown-item">Why Keeley</a>
          <a href="/careers#benefits" class="nav__dropdown-item">Benefits</a>
          <a href="/careers#positions" class="nav__dropdown-item">Open Positions</a>
          <a href="/careers/apply" class="nav__dropdown-item">Apply Now</a>
        </div>
      </div>
      <a href="/contact" class="nav__link">Contact</a>
    </div>
    <div class="nav__right">
      <a href="/contact" class="nav__cta">Contact Us</a>
    </div>
    <button class="nav__hamburger" id="nav-hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<!-- Mobile Drawer -->
<div class="mobile-drawer" id="mobile-drawer">
  <div class="mobile-drawer__links">
    <a href="/">Home</a>
    <div class="mobile-drawer__group">
      <button class="mobile-drawer__toggle">About <svg class="mobile-drawer__chevron" width="12" height="12" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 3.5 5 6 7.5 3.5"/></svg></button>
      <div class="mobile-drawer__sub">
        <a href="/about">Overview</a>
        <a href="/about#history">Our History</a>
        <a href="/about#capabilities">Full-Service Capabilities</a>
        <a href="/about#values">What Drives Us</a>
        <a href="/about#team">Key Personnel</a>
      </div>
    </div>
    <div class="mobile-drawer__group">
      <button class="mobile-drawer__toggle">Services <svg class="mobile-drawer__chevron" width="12" height="12" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 3.5 5 6 7.5 3.5"/></svg></button>
      <div class="mobile-drawer__sub">
        <a href="/services">What We Build</a>
        <a href="/services/electrical">Electrical</a>
        <a href="/services/site-work">Site Work</a>
        <a href="/services/utility">Utility</a>
      </div>
    </div>
    <div class="mobile-drawer__group">
      <button class="mobile-drawer__toggle">Capabilities <svg class="mobile-drawer__chevron" width="12" height="12" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 3.5 5 6 7.5 3.5"/></svg></button>
      <div class="mobile-drawer__sub">
        <a href="/capabilities">Overview</a>
        <a href="/capabilities#licensing">Licensing</a>
        <a href="/capabilities#certifications">Certifications</a>
        <a href="/capabilities#insurance">Insurance &amp; Bonding</a>
        <a href="/capabilities#capacity">Operational Capacity</a>
        <a href="/capabilities#territory">Service Territory</a>
      </div>
    </div>
    <div class="mobile-drawer__group">
      <button class="mobile-drawer__toggle">Careers <svg class="mobile-drawer__chevron" width="12" height="12" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 3.5 5 6 7.5 3.5"/></svg></button>
      <div class="mobile-drawer__sub">
        <a href="/careers">Overview</a>
        <a href="/careers#why-keeley">Why Keeley</a>
        <a href="/careers#benefits">Benefits</a>
        <a href="/careers#positions">Open Positions</a>
        <a href="/careers/apply">Apply Now</a>
      </div>
    </div>
    <a href="/contact">Contact</a>
  </div>
  <a href="${PHONE_HREF}" class="mobile-drawer__phone"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg> ${PHONE}</a>
  <a href="/contact" class="mobile-drawer__cta">Contact Us</a>
</div>

<main>
${body}
</main>

<!-- Footer -->
<footer class="footer">
  <div class="footer__inner">
    <div class="footer__grid">
      <div class="footer__brand">
        <a href="/" class="footer__logo">
          <img src="/static/logo-full.png" alt="Keeley Electrical Contractors" class="footer__logo-img">
        </a>
        <p class="footer__tagline">Maine's trusted commercial and industrial electrical contractor since 1978. Family-owned, third generation.</p>
        <div class="footer__social">
          <a href="https://www.facebook.com/p/Keeley-Electrical-Contractors-Inc-100054407923592/" target="_blank" rel="noopener" aria-label="Facebook"><svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
          <a href="https://www.linkedin.com/company/keeley-electrical-contractors-inc" target="_blank" rel="noopener" aria-label="LinkedIn"><svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
          <a href="https://www.instagram.com/keeleyinc" target="_blank" rel="noopener" aria-label="Instagram"><svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg></a>
        </div>
      </div>
      <div class="footer__col">
        <h4 class="footer__col-title">Services</h4>
        <a href="/services/electrical">Electrical</a>
        <a href="/services/site-work">Site Work</a>
        <a href="/services/utility">Utility</a>
        <a href="/capabilities">Capabilities</a>
      </div>
      <div class="footer__col">
        <h4 class="footer__col-title">Company</h4>
        <a href="/about">About Keeley</a>
        <a href="/careers">Careers</a>
        <a href="/capabilities">Licensing</a>
        <a href="/contact">Contact Us</a>
      </div>
      <div class="footer__col">
        <h4 class="footer__col-title">Contact</h4>
        <a href="${PHONE_HREF}">${PHONE}</a>
        <a href="mailto:${EMAIL}">${EMAIL}</a>
        <a href="${MAPS_URL}" target="_blank" rel="noopener">${LOCATION}</a>
        <p class="footer__hours">Mon&ndash;Fri: 7:00 AM &ndash; 4:00 PM</p>
        <div class="footer__territory">
          <span class="pill">ME</span>
          <span class="pill">NH</span>
          <span class="pill">MA</span>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <p>&copy; ${new Date().getFullYear()} ${COMPANY} &middot; Licensed in ME &middot; NH &middot; MA</p>
      <div class="footer__bottom-links">
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms &amp; Conditions</a>
      </div>
    </div>
  </div>
</footer>

<!-- Scroll to Top -->
<button class="scroll-top" id="scroll-top" aria-label="Scroll to top"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg></button>

<script src="/static/app.js"></script>
</body>
</html>`
}


