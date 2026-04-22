import { layout } from '../components/layout'

export function servicesPage(): string {
  const body = `
<!-- Page Header -->
<section class="page-header page-header--blue">
  <div class="container">
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a href="/">Home</a> <span>/</span> <span class="breadcrumb__current">Services</span>
    </nav>
    <span class="eyebrow eyebrow--light">Full Scope Capabilities</span>
    <h1 class="page-header__title">What We Build</h1>
    <p class="page-header__desc">From underground conduit to medium-voltage distribution, Keeley Electrical delivers full-scope electrical, site work, and utility services across Maine, New Hampshire, and Massachusetts.</p>
  </div>
</section>

<!-- Service Cards -->
<section class="section">
  <div class="container">
    <div class="service-detail-grid">

      <!-- Electrical -->
      <div class="service-detail-card">
        <div class="service-detail-card__header">
          <div class="service-detail-card__icon"><i class="fas fa-bolt"></i></div>
          <span class="service-detail-card__num">01</span>
        </div>
        <h2 class="service-detail-card__title">Electrical</h2>
        <p class="service-detail-card__desc">Full-service commercial and industrial electrical construction, from new builds to complex renovations.</p>
        <ul class="service-detail-card__list">
          <li>Commercial &amp; Industrial Construction</li>
          <li>Renovation &amp; Tenant Fit-Outs</li>
          <li>Design-Build &amp; Design-Assist</li>
          <li>Generators &amp; Emergency Power</li>
          <li>Fire Alarm Systems</li>
          <li>Medium Voltage Distribution</li>
          <li>Service Upgrades</li>
          <li>Lighting &amp; Power Distribution</li>
        </ul>
        <a href="/services/electrical" class="btn btn--primary">Learn More <i class="fas fa-arrow-right"></i></a>
      </div>

      <!-- Site Work -->
      <div class="service-detail-card">
        <div class="service-detail-card__header">
          <div class="service-detail-card__icon"><i class="fas fa-truck-pickup"></i></div>
          <span class="service-detail-card__num">02</span>
        </div>
        <h2 class="service-detail-card__title">Site Work</h2>
        <p class="service-detail-card__desc">Civil earthwork and site infrastructure from excavation to finished grade and lighting.</p>
        <ul class="service-detail-card__list">
          <li>Excavation &amp; Grading</li>
          <li>Underground Conduit Installation</li>
          <li>Parking Lot Lighting</li>
          <li>Perimeter &amp; Security Lighting</li>
          <li>Roadway Lighting</li>
          <li>Civil Earthwork</li>
        </ul>
        <a href="/services/site-work" class="btn btn--primary">Learn More <i class="fas fa-arrow-right"></i></a>
      </div>

      <!-- Utility -->
      <div class="service-detail-card">
        <div class="service-detail-card__header">
          <div class="service-detail-card__icon"><i class="fas fa-plug-circle-bolt"></i></div>
          <span class="service-detail-card__num">03</span>
        </div>
        <h2 class="service-detail-card__title">Utility</h2>
        <p class="service-detail-card__desc">Private utility line work, aerial and underground, with full coordination for New England utilities.</p>
        <ul class="service-detail-card__list">
          <li>Private Primary Line Extensions</li>
          <li>Aerial &amp; Underground Line Work</li>
          <li>De-Energized &amp; Energized Line Work</li>
          <li>Utility Coordination (CMP, Eversource)</li>
          <li>Portland Water District Coordination</li>
          <li>CIAC Process Guidance</li>
        </ul>
        <a href="/services/utility" class="btn btn--primary">Learn More <i class="fas fa-arrow-right"></i></a>
      </div>
    </div>
  </div>
</section>

<!-- Design Assist Note -->
<section class="section section--surface">
  <div class="container" style="max-width:720px;text-align:center;">
    <span class="eyebrow">Added Value</span>
    <h2 class="h2">Design-Assist Capability</h2>
    <p>Keeley offers design-assist services for both electrical and civil scopes. Our team works directly with architects, engineers, and owners during the design phase to optimize constructability, reduce costs, and accelerate timelines.</p>
  </div>
</section>

<!-- CTA -->
<section class="cta-band">
  <div class="cta-band__inner" style="text-align:center;flex-direction:column;align-items:center;">
    <h2 class="h2 h2--light">Not Sure Which Service Fits?</h2>
    <p class="cta-band__desc" style="max-width:560px;">Tell us about your project and we'll connect you with the right team. We respond to all inquiries within one business day.</p>
    <a href="/contact" class="btn btn--primary btn--lg">Contact Us</a>
  </div>
</section>
`
  return layout({
    title: 'Our Services | Keeley Electrical Contractors',
    description: 'Electrical, site work, and utility services for commercial and industrial projects in Maine, New Hampshire, and Massachusetts. ISN certified contractor since 1978.',
    canonical: 'https://keeleyelectrical.com/services',
    breadcrumbs: [
      { name: 'Home', url: 'https://keeleyelectrical.com/' },
      { name: 'Services', url: 'https://keeleyelectrical.com/services' }
    ]
  }, body)
}
