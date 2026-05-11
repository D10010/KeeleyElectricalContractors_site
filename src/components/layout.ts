// Shared layout, nav, and footer for Keeley Electrical Contractors

const PHONE = '(207) 797-3772'
const PHONE_HREF = 'tel:+12077973772'
const EMAIL = 'info@keeleyelectric.com'
const COMPANY = 'Keeley Electrical Contractors, Inc.'
export const ADDRESS = {
  street: '18 Caddie Ln',
  city: 'Portland',
  state: 'ME',
  zip: '04103',
  country: 'US'
}
const LOCATION = `${ADDRESS.street}, ${ADDRESS.city}, ${ADDRESS.state} ${ADDRESS.zip}`
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(LOCATION)}`
const TAGLINE = 'Electrical &middot; Site &middot; Utility'

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
      <a href="/services" class="nav__link">Services</a>
      <a href="/capabilities" class="nav__link">Capabilities</a>
      <a href="/about" class="nav__link">About</a>
      <a href="/careers" class="nav__link">Careers</a>
      <a href="/contact" class="nav__link">Contact</a>
    </div>
    <div class="nav__right">
      <a href="/contact" class="nav__cta">Get a Quote</a>
    </div>
    <button class="nav__hamburger" id="nav-hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<!-- Mobile Drawer -->
<div class="mobile-drawer" id="mobile-drawer">
  <div class="mobile-drawer__links">
    <a href="/services">Services</a>
    <a href="/capabilities">Capabilities</a>
    <a href="/about">About</a>
    <a href="/careers">Careers</a>
    <a href="/contact">Contact</a>
  </div>
  <a href="${PHONE_HREF}" class="mobile-drawer__phone"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg> ${PHONE}</a>
  <a href="/contact" class="mobile-drawer__cta">Get a Quote</a>
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
        <div class="footer__nap">
          <div class="footer__nap-row"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M16 10h.01"/><path d="M8 14h.01"/><path d="M16 14h.01"/></svg> <span>${COMPANY}</span></div>
          <div class="footer__nap-row"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg> <a href="${MAPS_URL}" target="_blank" rel="noopener">${LOCATION}</a></div>
          <div class="footer__nap-row"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg> <a href="${PHONE_HREF}">${PHONE}</a></div>
          <div class="footer__nap-row"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> <a href="mailto:${EMAIL}">${EMAIL}</a></div>
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

export { PHONE, PHONE_HREF, EMAIL, COMPANY, LOCATION, MAPS_URL }
