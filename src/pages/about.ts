import { layout } from '../components/layout'

export function aboutPage(): string {
  const body = `
<!-- Page Header -->
<section class="page-header page-header--blue">
  <div class="container">
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a href="/">Home</a> <span>/</span> <span class="breadcrumb__current">About</span>
    </nav>
    <span class="eyebrow eyebrow--light">Since 1978</span>
    <h1 class="page-header__title">About Keeley Electrical Contractors</h1>
    <p class="page-header__desc">Family-owned. Third generation. Maine-based. Trusted by commercial and industrial clients across New England for over 45 years.</p>
  </div>
</section>

<!-- Company History -->
<section class="section">
  <div class="container">
    <div class="two-col">
      <div class="two-col__text">
        <span class="eyebrow">Our Story</span>
        <h2 class="h2">Built on Family, Driven by Craft</h2>
        <p>Keeley Electrical Contractors was founded in 1978 in Portland, Maine. What started as a small family operation has grown into one of the region's most respected commercial and industrial electrical contractors.</p>
        <p>Now in its third generation of family ownership, Keeley combines decades of field experience with modern project management to deliver electrical, site work, and utility services across Maine, New Hampshire, and Massachusetts.</p>
        <p>Our growth has been deliberate — built on repeat relationships with general contractors, facility owners, and utilities who value reliability, safety, and quality craftsmanship.</p>
      </div>
      <div class="two-col__image">
        <div class="image-placeholder image-placeholder--lg"><i class="fas fa-building"></i><span>Company Headquarters</span></div>
      </div>
    </div>
  </div>
</section>

<!-- What We Do -->
<section class="section section--surface">
  <div class="container">
    <span class="eyebrow">What We Do</span>
    <h2 class="h2">Full-Service Capabilities</h2>
    <p style="max-width:640px;margin-bottom:2rem;">Keeley provides three core service categories across the commercial and industrial sector:</p>
    <div class="about-services">
      <div class="about-service">
        <div class="about-service__icon"><i class="fas fa-bolt"></i></div>
        <h3>Electrical</h3>
        <p>Commercial construction, renovation, design-build, generators, fire alarm, medium voltage, service upgrades, lighting, and power distribution.</p>
      </div>
      <div class="about-service">
        <div class="about-service__icon"><i class="fas fa-truck-pickup"></i></div>
        <h3>Site Work</h3>
        <p>Excavation, grading, underground conduit, parking lot and perimeter lighting, roadway lighting, and civil earthwork.</p>
      </div>
      <div class="about-service">
        <div class="about-service__icon"><i class="fas fa-plug-circle-bolt"></i></div>
        <h3>Utility</h3>
        <p>Private line extensions, aerial and underground, de-energized and energized line work, utility coordination, and CIAC guidance.</p>
      </div>
    </div>
  </div>
</section>

<!-- Values -->
<section class="section">
  <div class="container">
    <span class="eyebrow">Our Values</span>
    <h2 class="h2">What Drives Us</h2>
    <div class="values-grid">
      <div class="value-card">
        <div class="value-card__icon"><i class="fas fa-hard-hat"></i></div>
        <h3>Safety First</h3>
        <p>Zero OSHA recordable incidents for three consecutive years. ISN certified. Safety isn't a policy — it's how we work.</p>
      </div>
      <div class="value-card">
        <div class="value-card__icon"><i class="fas fa-star"></i></div>
        <h3>Quality Craftsmanship</h3>
        <p>We self-perform the majority of our work with experienced, in-house crews who take pride in the finished product.</p>
      </div>
      <div class="value-card">
        <div class="value-card__icon"><i class="fas fa-handshake"></i></div>
        <h3>Lasting Relationships</h3>
        <p>Most of our work comes from repeat clients. We earn that trust through reliable execution and honest communication.</p>
      </div>
    </div>
  </div>
</section>

<!-- Key Personnel -->
<section class="section section--surface">
  <div class="container">
    <span class="eyebrow">Leadership</span>
    <h2 class="h2">Key Personnel</h2>
    <div class="team-grid">
      <div class="team-card">
        <div class="team-card__photo"><i class="fas fa-user"></i></div>
        <h3 class="team-card__name">Principal / Owner</h3>
        <p class="team-card__title">President</p>
      </div>
      <div class="team-card">
        <div class="team-card__photo"><i class="fas fa-user"></i></div>
        <h3 class="team-card__name">Operations Lead</h3>
        <p class="team-card__title">Vice President of Operations</p>
      </div>
      <div class="team-card">
        <div class="team-card__photo"><i class="fas fa-user"></i></div>
        <h3 class="team-card__name">Project Management</h3>
        <p class="team-card__title">Senior Project Manager</p>
      </div>
      <div class="team-card">
        <div class="team-card__photo"><i class="fas fa-user"></i></div>
        <h3 class="team-card__name">Safety Director</h3>
        <p class="team-card__title">Director of Safety &amp; Compliance</p>
      </div>
    </div>
  </div>
</section>

<!-- Photos -->
<section class="section">
  <div class="container">
    <span class="eyebrow">Our Work</span>
    <h2 class="h2">In the Field</h2>
    <div class="photo-grid">
      <div class="image-placeholder"><i class="fas fa-bolt"></i><span>Job Site Photo</span></div>
      <div class="image-placeholder"><i class="fas fa-truck-pickup"></i><span>Equipment at Work</span></div>
      <div class="image-placeholder"><i class="fas fa-hard-hat"></i><span>Crew Photo</span></div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta-band">
  <div class="cta-band__inner" style="text-align:center;flex-direction:column;align-items:center;">
    <h2 class="h2 h2--light">Work With Us</h2>
    <p class="cta-band__desc" style="max-width:560px;">Ready to start a project or need to qualify Keeley for your bidders list? We'd love to hear from you.</p>
    <div style="display:flex;gap:1rem;flex-wrap:wrap;justify-content:center;">
      <a href="/contact" class="btn btn--primary btn--lg">Contact Us</a>
      <a href="/capabilities" class="btn btn--ghost btn--lg">View Capabilities</a>
    </div>
  </div>
</section>
`
  return layout({
    title: 'About Us | Keeley Electrical Contractors - Since 1978',
    description: 'Family-owned, third-generation electrical contractor based in Portland, Maine. Serving commercial and industrial clients across ME, NH, and MA since 1978.',
    canonical: 'https://keeleyelectrical.com/about',
    breadcrumbs: [
      { name: 'Home', url: 'https://keeleyelectrical.com/' },
      { name: 'About', url: 'https://keeleyelectrical.com/about' }
    ]
  }, body)
}
