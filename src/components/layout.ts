// Shared layout, nav, and footer for Keeley Electrical Contractors

const PHONE = '(207) 797-3772'
const PHONE_HREF = 'tel:+12077973772'
const EMAIL = 'info@keeleyelectrical.com'
const COMPANY = 'Keeley Electrical Contractors, Inc.'
const LOCATION = 'Portland, ME'
const TAGLINE = 'Electrical &middot; Site &middot; Utility'

interface PageMeta {
  title: string
  description: string
  canonical: string
  h1?: string
  jsonLd?: string
  breadcrumbs?: { name: string; url: string }[]
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
<link rel="canonical" href="${meta.canonical}">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&family=Barlow:wght@300;400;500;600&display=swap" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.0/css/all.min.css" rel="stylesheet">
<link href="/static/styles.css" rel="stylesheet">
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
      <div class="nav__logo-mark">K</div>
      <div class="nav__logo-text-wrap">
        <span class="nav__logo-text">KEELEY ELECTRICAL</span>
        <span class="nav__logo-sub">Contractors, Inc. &middot; Est. 1978</span>
      </div>
    </a>
    <div class="nav__links" id="nav-links">
      <a href="/services" class="nav__link">Services</a>
      <a href="/capabilities" class="nav__link">Capabilities</a>
      <a href="/about" class="nav__link">About</a>
      <a href="/contact" class="nav__link">Contact</a>
    </div>
    <div class="nav__right">
      <a href="${PHONE_HREF}" class="nav__phone"><i class="fas fa-phone"></i> ${PHONE}</a>
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
    <a href="/contact">Contact</a>
  </div>
  <a href="${PHONE_HREF}" class="mobile-drawer__phone"><i class="fas fa-phone"></i> ${PHONE}</a>
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
          <div class="nav__logo-mark">K</div>
          <div>
            <span class="nav__logo-text">KEELEY ELECTRICAL</span>
            <span class="nav__logo-sub">${TAGLINE}</span>
          </div>
        </a>
        <p class="footer__tagline">Maine's trusted commercial and industrial electrical contractor since 1978. Family-owned, third generation.</p>
        <div class="footer__nap">
          <div class="footer__nap-row"><i class="fas fa-building"></i> <span>${COMPANY}</span></div>
          <div class="footer__nap-row"><i class="fas fa-map-marker-alt"></i> <span>${LOCATION}</span></div>
          <div class="footer__nap-row"><i class="fas fa-phone"></i> <a href="${PHONE_HREF}">${PHONE}</a></div>
          <div class="footer__nap-row"><i class="fas fa-envelope"></i> <a href="mailto:${EMAIL}">${EMAIL}</a></div>
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
<button class="scroll-top" id="scroll-top" aria-label="Scroll to top"><i class="fas fa-arrow-up"></i></button>

<script src="/static/app.js"></script>
</body>
</html>`
}

export { PHONE, PHONE_HREF, EMAIL, COMPANY, LOCATION }
