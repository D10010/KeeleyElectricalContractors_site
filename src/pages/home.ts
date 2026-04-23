import { layout, PHONE, PHONE_HREF, COMPANY } from '../components/layout'

export function homePage(): string {
  const jsonLd = `<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": COMPANY,
    "image": "",
    "telephone": PHONE,
    "email": "info@keeleyelectrical.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Portland",
      "addressRegion": "ME",
      "addressCountry": "US"
    },
    "url": "https://keeleyelectrical.com",
    "foundingDate": "1978",
    "areaServed": ["Maine", "New Hampshire", "Massachusetts"],
    "description": "Commercial and industrial electrical, site work, and utility contractor serving Maine, New Hampshire, and Massachusetts since 1978."
  })}</script>`

  const body = `
<!-- Hero -->
<section class="hero hero--video">
  <video class="hero__video" autoplay muted loop playsinline preload="auto" poster="">
    <source src="/static/hero-bg.mp4" type="video/mp4">
  </video>
  <div class="hero__overlay"></div>
  <div class="hero__content">
    <span class="eyebrow">Maine &middot; New Hampshire &middot; Massachusetts</span>
    <h1 class="hero__title">Maine's Commercial <em>Electrical</em> Contractor</h1>
    <p class="hero__sub">Full-service electrical, site work, and utility contractor. Licensed in three states. Trusted by general contractors, facility owners, and utilities since 1978.</p>
    <div class="hero__btns">
      <a href="/contact" class="btn btn--primary">Start a Project</a>
      <a href="/services" class="btn btn--ghost">View Our Work <i class="fas fa-arrow-right"></i></a>
    </div>
  </div>
  <div class="hero__trust">
    <div class="hero__trust-item"><span class="hero__trust-num">1978</span><span class="hero__trust-label">Founded</span></div>
    <div class="hero__trust-item"><span class="hero__trust-num">ISN</span><span class="hero__trust-label">Certified</span></div>
    <div class="hero__trust-item"><span class="hero__trust-num">900+</span><span class="hero__trust-label">Projects</span></div>
    <div class="hero__trust-item"><span class="hero__trust-num">3</span><span class="hero__trust-label">States Licensed</span></div>
  </div>
</section>

<!-- Trust Strip -->
<section class="trust-strip">
  <div class="trust-strip__inner">
    <span class="trust-strip__pill"><i class="fas fa-calendar-check"></i> 45+ Years</span>
    <span class="trust-strip__pill"><i class="fas fa-shield-halved"></i> ISN Certified</span>
    <span class="trust-strip__pill"><i class="fas fa-hard-hat"></i> 900+ Projects</span>
    <span class="trust-strip__pill"><i class="fas fa-map-marked-alt"></i> ME &middot; NH &middot; MA</span>
    <span class="trust-strip__pill"><i class="fas fa-award"></i> Zero OSHA Recordables</span>
  </div>
</section>

<!-- Services Overview -->
<section class="section section--surface" id="services-overview">
  <div class="container">
    <span class="eyebrow">What We Do</span>
    <div class="section__header">
      <h2 class="h2">Our Core Services</h2>
      <a href="/services" class="section__view-all">View All Services <i class="fas fa-arrow-right"></i></a>
    </div>
    <div class="service-cards">
      <a href="/services/electrical" class="service-card">
        <div class="service-card__icon"><i class="fas fa-bolt"></i></div>
        <h3 class="service-card__title">Electrical</h3>
        <p class="service-card__desc">Commercial and industrial construction, renovation, design-build, generators, fire alarm systems, and medium voltage distribution.</p>
        <span class="service-card__link">Learn More <i class="fas fa-arrow-right"></i></span>
      </a>
      <a href="/services/site-work" class="service-card">
        <div class="service-card__icon"><i class="fas fa-truck-pickup"></i></div>
        <h3 class="service-card__title">Site Work</h3>
        <p class="service-card__desc">Excavation, grading, underground conduit installation, site lighting for parking lots, perimeters, and roadways.</p>
        <span class="service-card__link">Learn More <i class="fas fa-arrow-right"></i></span>
      </a>
      <a href="/services/utility" class="service-card">
        <div class="service-card__icon"><i class="fas fa-plug-circle-bolt"></i></div>
        <h3 class="service-card__title">Utility</h3>
        <p class="service-card__desc">Private primary line extensions, de-energized and energized line work, utility coordination, and CIAC process guidance.</p>
        <span class="service-card__link">Learn More <i class="fas fa-arrow-right"></i></span>
      </a>
    </div>
  </div>
</section>

<!-- About Strip -->
<section class="section">
  <div class="container">
    <div class="two-col">
      <div class="two-col__text">
        <span class="eyebrow">Est. 1978</span>
        <h2 class="h2">Family-Owned. Four Decades of <em>Expertise.</em></h2>
        <p>Keeley Electrical Contractors has been serving commercial and industrial clients across New England for over 45 years. As a third-generation, family-owned business, we bring deep expertise and personal accountability to every project.</p>
        <p>From ground-up construction to complex renovations, our team delivers reliable electrical, site work, and utility services with a focus on safety, quality, and lasting relationships.</p>
        <a href="/about" class="btn btn--secondary">About Keeley</a>
      </div>
      <div class="two-col__image">
        <div class="image-placeholder"><i class="fas fa-hard-hat"></i><span>Team at Work</span></div>
      </div>
    </div>
  </div>
</section>

<!-- Stats Bar -->
<section class="stats-bar">
  <div class="stats-bar__inner">
    <div class="stats-bar__item">
      <span class="stats-bar__num">1978</span>
      <span class="stats-bar__label">Founded</span>
    </div>
    <div class="stats-bar__item">
      <span class="stats-bar__num">ISN</span>
      <span class="stats-bar__label">Certified Contractor</span>
    </div>
    <div class="stats-bar__item">
      <span class="stats-bar__num">0</span>
      <span class="stats-bar__label">OSHA Recordables (3 Consecutive Years)</span>
    </div>
    <div class="stats-bar__item">
      <span class="stats-bar__num">3</span>
      <span class="stats-bar__label">States Licensed</span>
    </div>
  </div>
</section>

<!-- Certifications -->
<section class="section section--surface">
  <div class="container">
    <span class="eyebrow">Qualifications</span>
    <h2 class="h2">Licensing &amp; Certifications</h2>
    <div class="cert-grid">
      <div class="cert-badge">
        <div class="cert-badge__icon cert-badge__icon--gold"><i class="fas fa-shield-halved"></i></div>
        <div><strong>ISN Network</strong><br><span class="text-muted">Active Certified Contractor</span></div>
      </div>
      <div class="cert-badge">
        <div class="cert-badge__icon cert-badge__icon--blue"><i class="fas fa-id-card"></i></div>
        <div><strong>TWIC Cards</strong><br><span class="text-muted">Key Personnel Authorized</span></div>
      </div>
      <div class="cert-badge">
        <div class="cert-badge__icon cert-badge__icon--green"><i class="fas fa-award"></i></div>
        <div><strong>Zero OSHA Recordables</strong><br><span class="text-muted">3 Consecutive Years</span></div>
      </div>
      <div class="cert-badge">
        <div class="cert-badge__icon cert-badge__icon--gold"><i class="fas fa-certificate"></i></div>
        <div><strong>Licensed in 3 States</strong><br><span class="text-muted">ME &middot; NH &middot; MA</span></div>
      </div>
    </div>
    <div style="text-align:center;margin-top:2rem;">
      <a href="/capabilities" class="btn btn--secondary">View All Capabilities</a>
    </div>
  </div>
</section>

<!-- Featured Project -->
<section class="section">
  <div class="container">
    <span class="eyebrow">Recent Work</span>
    <div class="section__header">
      <h2 class="h2">Featured Project</h2>
    </div>
    <div class="featured-project">
      <div class="featured-project__image">
        <div class="image-placeholder image-placeholder--lg"><i class="fas fa-building"></i><span>Featured Project Photo</span></div>
      </div>
      <div class="featured-project__info">
        <span class="pill">Electrical &middot; Site Work</span>
        <h3 class="featured-project__title">Commercial Office Complex</h3>
        <p class="featured-project__desc">Full electrical scope for a 120,000 sq. ft. commercial office development including medium-voltage distribution, emergency power, fire alarm systems, and complete site lighting.</p>
        <div class="featured-project__stats">
          <div class="featured-project__stat">
            <span class="featured-project__stat-num">120K</span>
            <span class="featured-project__stat-label">Sq. Ft.</span>
          </div>
          <div class="featured-project__stat">
            <span class="featured-project__stat-num">18</span>
            <span class="featured-project__stat-label">Months</span>
          </div>
          <div class="featured-project__stat">
            <span class="featured-project__stat-num">0</span>
            <span class="featured-project__stat-label">Safety Incidents</span>
          </div>
        </div>
        <a href="/services" class="btn btn--secondary">Explore Our Services <i class="fas fa-arrow-right"></i></a>
      </div>
    </div>
  </div>
</section>

<!-- Process Strip -->
<section class="section">
  <div class="container">
    <span class="eyebrow">How We Work</span>
    <h2 class="h2">Our Process</h2>
    <div class="process-strip">
      <div class="process-step">
        <span class="process-step__num">01</span>
        <h3 class="process-step__title">Inquiry</h3>
        <p>Tell us about your project. We respond to all inquiries within one business day.</p>
      </div>
      <div class="process-step">
        <span class="process-step__num">02</span>
        <h3 class="process-step__title">Budget &amp; Scope</h3>
        <p>We evaluate your project requirements and provide a detailed estimate and timeline.</p>
      </div>
      <div class="process-step">
        <span class="process-step__num">03</span>
        <h3 class="process-step__title">Build</h3>
        <p>Our self-performing crews deliver your project safely, on budget, and on schedule.</p>
      </div>
    </div>
  </div>
</section>

<!-- CTA Band -->
<section class="cta-band">
  <div class="cta-band__inner">
    <div class="cta-band__text">
      <span class="eyebrow eyebrow--light">Start Your Project</span>
      <h2 class="h2 h2--light">Ready to Work Together?</h2>
      <p class="cta-band__desc">Whether you're a general contractor, facility owner, or property manager, we're ready to discuss your next project.</p>
      <div class="cta-band__phone">
        <a href="${PHONE_HREF}"><i class="fas fa-phone"></i> ${PHONE}</a>
      </div>
    </div>
    <div class="cta-band__actions">
      <a href="/contact" class="btn btn--primary btn--lg">Get a Free Quote</a>
      <a href="/services" class="btn btn--ghost btn--lg">Explore Services</a>
    </div>
  </div>
</section>
`

  return layout({
    title: 'Keeley Electrical Contractors | Maine Commercial & Industrial Electrician',
    description: 'Commercial and industrial electrical, site work, and utility contractor serving Maine, New Hampshire, and Massachusetts since 1978. ISN certified, licensed in 3 states.',
    canonical: 'https://keeleyelectrical.com/',
    jsonLd: jsonLd
  }, body)
}
