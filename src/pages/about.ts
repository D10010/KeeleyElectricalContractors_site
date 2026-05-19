import { layout } from '../components/layout'

export function aboutPage(): string {
  const body = `
<!-- Page Header -->
<section class="page-header page-header--blue">
  <div class="container">
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a href="/">Home</a><span class="breadcrumb__sep" aria-hidden="true"></span><span class="breadcrumb__current">About</span>
    </nav>
    <span class="eyebrow eyebrow--light">Since 1978</span>
    <h1 class="page-header__title">About Keeley</h1>
    <p class="page-header__desc">Family-owned. Third generation. Maine-based. Trusted by commercial and industrial clients across New England for over 45 years.</p>
  </div>
</section>

<!-- Company History -->
<section class="section" id="history">
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
        <div class="image-placeholder image-placeholder--lg"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M16 10h.01"/><path d="M8 14h.01"/><path d="M16 14h.01"/></svg><span>Company Headquarters</span></div>
      </div>
    </div>
  </div>
</section>

<!-- What We Do -->
<section class="section section--surface">
  <div class="container">
    <span class="eyebrow">What We Do</span>
<div id="capabilities"></div>
    <h2 class="h2">Full-Service Capabilities</h2>
    <p style="max-width:640px;margin-bottom:2rem;">Keeley provides three core service categories across the commercial and industrial sector:</p>
    <div class="about-services">
      <div class="about-service">
        <div class="about-service__icon"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg></div>
        <h3>Electrical</h3>
        <p>Commercial construction, renovation, design-build, generators, fire alarm, medium voltage, service upgrades, lighting, and power distribution.</p>
        <p><br></p>
        <a href="/services/electrical" class="btn btn--primary" style="margin-top:auto;">Learn More <svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></a>
      </div>
      <div class="about-service">
        <div class="about-service__icon"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="16" width="18" height="4" rx="1"/><rect x="4" y="12" width="8" height="4" rx="1"/><path d="M10 12V9l6-5"/><path d="M16 4l4 3-3 2"/><circle cx="3" cy="22" r="1"/><circle cx="17" cy="22" r="1"/></svg></div>
        <h3>Site Work</h3>
        <p>Excavation, grading, underground conduit, parking lot and perimeter lighting, roadway lighting, and civil earthwork.</p>
        <a href="/services/site-work" class="btn btn--primary" style="margin-top:auto;">Learn More <svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></a>
      </div>
      <div class="about-service">
        <div class="about-service__icon"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/></svg></div>
        <h3>Utility</h3>
        <p>Private line extensions, aerial and underground, de-energized and energized line work, utility coordination, and CIAC guidance.</p>
        <a href="/services/utility" class="btn btn--primary" style="margin-top:auto;">Learn More <svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></a>
      </div>
    </div>
  </div>
</section>

<!-- Values -->
<section class="section">
  <div class="container">
    <span class="eyebrow">Our Values</span>
<div id="values"></div>
    <h2 class="h2">What Drives Us</h2>
    <div class="values-grid">
      <div class="value-card">
        <div class="value-card__icon"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
        <h3>Meticulous Quality</h3>
        <p>We don't pass inspections — we exceed them. Every termination, every conduit run, every panel schedule is done to a standard that doesn't require callbacks. Forty-five years of repeat clients didn't happen by accident.</p>
      </div>
      <div class="value-card">
        <div class="value-card__icon"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>
        <h3>Clear Communication</h3>
        <p>You'll know where your project stands without having to ask. We provide scheduled updates, flag issues early, and handle change orders transparently. No surprises on the invoice or the timeline.</p>
      </div>
      <div class="value-card">
        <div class="value-card__icon"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88"/><path d="m16 16 3.13 3.13a1 1 0 0 1-1.42 1.42L13 15.76"/><path d="m18 13-1.42-1.42"/><path d="M2 15h2"/><path d="M5 11.5h2"/><path d="M2 7h2"/><path d="M20 15h2"/><path d="M17 11.5h2"/><path d="M20 7h2"/></svg></div>
        <h3>Exceeding Expectations</h3>
        <p>We finish what we start, and we finish it right. Punchlist items are addressed before you have to ask. The goal isn't to meet the spec — it's to hand over a project you're proud to put your name on.</p>
      </div>
    </div>
  </div>
</section>

<!-- Key Personnel -->
<section class="section section--surface">
  <div class="container">
    <span class="eyebrow">Leadership</span>
<div id="team"></div>
    <h2 class="h2">Key Personnel</h2>
    <div class="team-grid">
      <div class="team-card">
        <div class="team-card__photo"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
        <h3 class="team-card__name">Principal / Owner</h3>
        <p class="team-card__title">President</p>
      </div>
      <div class="team-card">
        <div class="team-card__photo"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
        <h3 class="team-card__name">Operations Lead</h3>
        <p class="team-card__title">Vice President of Operations</p>
      </div>
      <div class="team-card">
        <div class="team-card__photo"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
        <h3 class="team-card__name">Project Management</h3>
        <p class="team-card__title">Senior Project Manager</p>
      </div>
      <div class="team-card">
        <div class="team-card__photo"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
        <h3 class="team-card__name">Safety Director</h3>
        <p class="team-card__title">Director of Safety &amp; Compliance</p>
      </div>
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
    title: 'About Keeley | Electrical Contractors Since 1978',
    description: 'Family-owned, third-generation electrical contractor based in Portland, Maine. Serving commercial and industrial clients across ME, NH, and MA since 1978.',
    canonical: 'https://keeleyelectric.com/about',
    breadcrumbs: [
      { name: 'Home', url: 'https://keeleyelectric.com/' },
      { name: 'About', url: 'https://keeleyelectric.com/about' }
    ]
  }, body)
}
