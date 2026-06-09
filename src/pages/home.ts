import { layout, PHONE, PHONE_HREF, COMPANY, ADDRESS } from '../components/layout'

export function homePage(): string {
  const jsonLd = `<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": COMPANY,
    "image": "",
    "telephone": PHONE,
    "email": "info@keeleyelectric.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": ADDRESS.street,
      "addressLocality": ADDRESS.city,
      "addressRegion": ADDRESS.state,
      "postalCode": ADDRESS.zip,
      "addressCountry": ADDRESS.country
    },
    "url": "https://keeleyelectric.com",
    "foundingDate": "1978",
    "areaServed": ["Maine", "New Hampshire", "Massachusetts"],
    "description": "Commercial and industrial electrical, site work, and utility contractor serving Maine, New Hampshire, and Massachusetts since 1978."
  })}</script>`

  const body = `
<!-- Hero -->
<section class="hero hero--video">
  <video class="hero__video" autoplay muted playsinline webkit-playsinline loop preload="auto" poster="/static/hero-poster.jpg">
    <source src="/static/hero-bg.mp4" type="video/mp4">
  </video>
  <div class="hero__overlay"></div>
  <div class="hero__content">
    <span class="eyebrow">Maine &middot; New Hampshire &middot; Massachusetts</span>
    <h1 class="hero__title">Electrical. Site Work. Utility.</h1>
    <p class="hero__sub">Licensed across New England. Trusted by general contractors, facility owners, and utilities since 1978.</p>
    <div class="hero__btns">
      <a href="/contact" class="btn btn--primary">Start a Project</a>
      <a href="/services" class="btn btn--ghost">View Our Work <svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></a>
    </div>
  </div>
  <div class="hero__trust">
    <div class="hero__trust-item"><span class="hero__trust-num">1978</span><span class="hero__trust-label">Founded</span></div>
    <div class="hero__trust-item"><span class="hero__trust-num">6</span><span class="hero__trust-label">Master Electricians</span></div>
    <div class="hero__trust-item"><span class="hero__trust-num">900+</span><span class="hero__trust-label">Projects</span></div>
    <div class="hero__trust-item"><span class="hero__trust-num">3</span><span class="hero__trust-label">States Licensed</span></div>
  </div>
</section>

<!-- Services Overview -->
<section class="section section--surface" id="services-overview">
  <div class="container">
    <span class="eyebrow">What We Do</span>
    <div class="section__header">
      <h2 class="h2">Our Core Services</h2>
      <a href="/services" class="section__view-all">View All Services <svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></a>
    </div>
    <div class="service-cards">
      <a href="/services/electrical" class="service-card">
        <div class="service-card__icon"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg></div>
        <h3 class="service-card__title">Electrical</h3>
        <p class="service-card__desc">Commercial and industrial construction, renovation, design-build, generators, fire alarm systems, and medium voltage distribution.</p>
        <span class="service-card__link">Learn More <svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span>
      </a>
      <a href="/services/site-work" class="service-card">
        <div class="service-card__icon"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="16" width="18" height="4" rx="1"/><rect x="4" y="12" width="8" height="4" rx="1"/><path d="M10 12V9l6-5"/><path d="M16 4l4 3-3 2"/><circle cx="3" cy="22" r="1"/><circle cx="17" cy="22" r="1"/></svg></div>
        <h3 class="service-card__title">Site Work</h3>
        <p class="service-card__desc">Excavation, grading, underground conduit installation, site lighting for parking lots, perimeters, and roadways.</p>
        <span class="service-card__link">Learn More <svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span>
      </a>
      <a href="/services/utility" class="service-card">
        <div class="service-card__icon"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/></svg></div>
        <h3 class="service-card__title">Utility</h3>
        <p class="service-card__desc">Private primary line extensions, de-energized and energized line work, utility coordination, and CIAC process guidance.</p>
        <span class="service-card__link">Learn More <svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span>
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
        <img src="/static/home-team-linemen-bucket-truck-sunset.jpg" alt="Utility linemen working from bucket trucks on power lines at sunset" width="1024" height="576" loading="lazy" style="width:100%;height:auto;border-radius:8px;">
      </div>
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
        <img src="/static/knox-trail-solar-storage-facility-maine.jpg" alt="Aerial view of the Knox Trail Solar and Storage Facility in Maine — utility-scale solar array, battery energy storage, and substation work by Keeley Electrical Contractors" width="953" height="1666" loading="lazy" decoding="async">
      </div>
      <div class="featured-project__info">
        <span class="pill">Electrical &middot; Utility</span>
        <h3 class="featured-project__title">Knox Trail Solar + Storage Facility</h3>
        <p class="featured-project__desc">Complete electrical infrastructure for a utility-scale 1.95 MW solar array and 2 MWh battery energy storage system (BESS). This complex project involved over 200,000 feet of wiring and specialized above-ground medium-voltage distribution designed to protect environmentally sensitive groundwater and designated Superfund land.</p>
        <div class="featured-project__stats">
          <div class="featured-project__stat">
            <span class="featured-project__stat-num">1.95</span>
            <span class="featured-project__stat-label">MW Solar</span>
          </div>
          <div class="featured-project__stat">
            <span class="featured-project__stat-num">2</span>
            <span class="featured-project__stat-label">MWh BESS</span>
          </div>
          <div class="featured-project__stat">
            <span class="featured-project__stat-num">200K+</span>
            <span class="featured-project__stat-label">Ft. of Wire</span>
          </div>
        </div>
        <a href="/services" class="btn btn--secondary">Explore Our Services <svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></a>
      </div>
    </div>
  </div>
</section>

<!-- Process Strip -->
<section class="section section--surface">
  <div class="container">
    <span class="eyebrow">How We Work</span>
    <h2 class="h2">Our Process</h2>
    <div class="process-strip">
      <div class="process-step">
        <span class="process-step__num">01</span>
        <h3 class="process-step__title">Inquiry</h3>
        <p>Tell us about your project. We respond within three business days with next steps.</p>
      </div>
      <div class="process-step">
        <span class="process-step__num">02</span>
        <h3 class="process-step__title">Budget &amp; Scope</h3>
        <p>We evaluate your project requirements and provide a detailed estimate and timeline.</p>
      </div>
      <div class="process-step">
        <span class="process-step__num">03</span>
        <h3 class="process-step__title">Mobilization</h3>
        <p>Crews are assigned, materials ordered, and a project schedule is locked with your team.</p>
      </div>
      <div class="process-step">
        <span class="process-step__num">04</span>
        <h3 class="process-step__title">Milestone Updates</h3>
        <p>Your project manager receives scheduled progress reports at each phase gate. No surprises.</p>
      </div>
      <div class="process-step">
        <span class="process-step__num">05</span>
        <h3 class="process-step__title">Change Orders</h3>
        <p>Scope changes are documented, priced, and approved before any additional work begins.</p>
      </div>
      <div class="process-step">
        <span class="process-step__num">06</span>
        <h3 class="process-step__title">Completion</h3>
        <p>Final walkthrough, punch list resolution, and closeout documentation delivered on schedule.</p>
      </div>
    </div>
  </div>
</section>

<!-- CTA Band -->
<section class="cta-band">
  <div class="cta-band__inner">
    <div class="cta-band__text">
      <span class="eyebrow eyebrow--light">Start Your Project</span>
      <h2 class="h2 h2--light">Let's Talk Scope</h2>
      <p class="cta-band__desc">You know what your project needs. We know how to build it. Start the conversation.</p>
      <div class="cta-band__phone">
        <a href="${PHONE_HREF}"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg> ${PHONE}</a>
      </div>
    </div>
    <div class="cta-band__actions">
      <a href="/contact" class="btn btn--primary btn--lg">Contact Us</a>
      <a href="/services" class="btn btn--ghost btn--lg">Explore Services</a>
    </div>
  </div>
</section>
`

  return layout({
    title: 'Keeley Electrical Contractors | Maine Commercial & Industrial Electrician',
    description: 'Commercial and industrial electrical, site work, and utility contractor serving Maine, New Hampshire, and Massachusetts since 1978. ISN certified, licensed in 3 states.',
    canonical: 'https://keeleyelectric.com/',
    jsonLd: jsonLd
  }, body)
}
