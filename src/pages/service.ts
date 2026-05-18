import { layout } from '../components/layout'

interface ServiceData {
  name: string
  icon: string
  h1: string
  title: string
  metaDesc: string
  intro: string[]
  scopeItems: string[]
  whoWeWorkWith: string[]
  projectTypes: string[]
  heroImage?: { src: string; alt: string }
}

const services: Record<string, ServiceData> = {
  electrical: {
    name: 'Electrical',
    icon: 'bolt',
    h1: 'Commercial & Industrial Electrical Services',
    title: 'Electrical Services | Keeley Electrical Contractors',
    metaDesc: 'Full-service commercial and industrial electrical contractor in Maine. Design-build, generators, fire alarm, medium voltage, service upgrades. Licensed ME, NH, MA.',
    intro: [
      'Keeley delivers comprehensive electrical services for commercial and industrial projects throughout Maine, New Hampshire, and Massachusetts. From new construction to complex renovations, our licensed electricians bring decades of experience to every job.',
      'We self-perform the majority of our electrical work, giving us direct control over quality, safety, and schedule. Whether you need a full design-build or support on a specific scope, our team is equipped to handle projects of any scale.',
      'Our design-assist capability means we can join your project during the design phase, working alongside architects and engineers to optimize the electrical scope for constructability and cost efficiency.'
    ],
    scopeItems: [
      'Commercial &amp; Industrial New Construction',
      'Renovation &amp; Tenant Fit-Outs',
      'Design-Build &amp; Design-Assist',
      'Generators &amp; Emergency Power Systems',
      'Fire Alarm System Installation',
      'Medium Voltage Distribution',
      'Service Upgrades &amp; Panel Replacements',
      'Lighting Design &amp; Installation',
      'Power Distribution Systems',
      'Data &amp; Low Voltage Cabling'
    ],
    whoWeWorkWith: [
      'General Contractors',
      'Property &amp; Facility Managers',
      'Building Owners &amp; Developers',
      'Architects &amp; Engineers'
    ],
    projectTypes: [
      'Office buildings &amp; corporate campuses',
      'Retail spaces &amp; shopping centers',
      'Healthcare &amp; medical facilities',
      'Educational institutions',
      'Municipal &amp; government buildings',
      'Industrial &amp; manufacturing facilities',
      'Warehouse &amp; distribution centers'
    ]
  },
  'site-work': {
    name: 'Site Work',
    icon: 'excavator',
    h1: 'Commercial Site Work & Civil Earthwork',
    title: 'Site Work Services | Keeley Electrical Contractors',
    metaDesc: 'Excavation, grading, underground conduit, and site lighting for commercial and industrial projects. Serving Maine, New Hampshire, and Massachusetts.',
    heroImage: { src: '/static/keeley-excavator-site-work-maine.jpg', alt: 'Keeley excavator performing commercial site work in Maine' },
    intro: [
      'Keeley provides civil site work services to complement our electrical capabilities, offering a single-source solution for projects that require both underground infrastructure and above-grade electrical systems.',
      'Our site work division handles everything from initial excavation and grading to underground conduit installation and finished site lighting. By self-performing both electrical and site work, we eliminate coordination gaps and keep your project on schedule.',
      'Whether it\'s a new parking lot lighting system or a full site development package, our crews bring the same commitment to safety and quality that has defined Keeley for over four decades.'
    ],
    scopeItems: [
      'Excavation &amp; Trenching',
      'Grading &amp; Earthwork',
      'Underground Conduit Installation',
      'Parking Lot Lighting',
      'Perimeter &amp; Security Lighting',
      'Roadway &amp; Pathway Lighting',
      'Ductbank Construction',
      'Site Restoration'
    ],
    whoWeWorkWith: [
      'General Contractors',
      'Site Development Companies',
      'Property Developers',
      'Municipal Agencies'
    ],
    projectTypes: [
      'Commercial site development',
      'Parking lot construction &amp; lighting',
      'Campus &amp; roadway lighting',
      'Underground utility corridors',
      'Industrial site preparation',
      'Infrastructure upgrades'
    ]
  },
  utility: {
    name: 'Utility',
    icon: 'plug',
    h1: 'Utility Line Work & Coordination Services',
    title: 'Utility Services | Keeley Electrical Contractors',
    metaDesc: 'Private utility line extensions, energized line work, and utility coordination for CMP and Eversource. CIAC process guidance. Maine, New Hampshire, Massachusetts.',
    heroImage: { src: '/static/utility-hero-lineman-power-pole-maintenance.jpg', alt: 'Utility lineman performing power pole maintenance and transformer work from a bucket truck' },
    intro: [
      'Keeley specializes in private utility line work, providing aerial and underground primary line extensions for commercial and industrial clients throughout New England.',
      'Our utility division manages the full scope of private utility infrastructure, from initial coordination with CMP, Eversource, and Portland Water District through final energization. We guide clients through the CIAC (Contribution in Aid of Construction) process, helping navigate the requirements and timelines involved in utility extensions.',
      'Whether your project requires de-energized maintenance or energized line work, our experienced line crews are trained, equipped, and certified for safe execution.'
    ],
    scopeItems: [
      'Private Primary Line Extensions (Aerial)',
      'Private Primary Line Extensions (Underground)',
      'De-Energized Line Work',
      'Energized Line Work',
      'CMP Utility Coordination',
      'Eversource Utility Coordination',
      'Portland Water District Coordination',
      'CIAC Process Guidance &amp; Management'
    ],
    whoWeWorkWith: [
      'Utility Companies (CMP, Eversource)',
      'Portland Water District',
      'General Contractors',
      'Property Developers &amp; Owners',
      'Facility Managers'
    ],
    projectTypes: [
      'New development utility connections',
      'Commercial service upgrades',
      'Industrial power supply extensions',
      'Campus distribution systems',
      'Utility relocation projects',
      'Emergency utility restoration'
    ]
  }
}

export function servicePage(slug: string): string {
  const svc = services[slug]
  if (!svc) {
    return layout({
      title: '404 | Keeley Electrical Contractors',
      description: 'Page not found.',
      canonical: 'https://keeleyelectric.com/services'
    }, '<section class="section" style="text-align:center;padding:6rem 2rem;"><h1>Service Not Found</h1><p>Please visit our <a href="/services">Services page</a>.</p></section>')
  }

  const body = `
<!-- Page Header -->
<section class="page-header page-header--blue${svc.heroImage ? ' page-header--has-hero' : ''}">
  <div class="container">
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a href="/">Home</a><span class="breadcrumb__sep" aria-hidden="true"></span><a href="/services">Services</a><span class="breadcrumb__sep" aria-hidden="true"></span><span class="breadcrumb__current">${svc.name}</span>
    </nav>
    <h1 class="page-header__title">${svc.h1}</h1>
    <div class="page-header__tags">
      <span class="pill">Licensed ME &middot; NH &middot; MA</span>
    </div>
  </div>
  ${svc.heroImage ? `<img class="page-header__hero" src="${svc.heroImage.src}" alt="${svc.heroImage.alt}" width="1200" height="675" loading="eager">` : ''}
</section>

<!-- Content -->
<section class="section">
  <div class="container">
    <div class="content-sidebar">
      <div class="content-main">
        <!-- Intro -->
        <div class="prose">
          ${svc.intro.map(p => `<p>${p}</p>`).join('\n          ')}
        </div>

        <!-- Scope -->
        <h2 class="h2" style="margin-top:3rem;">Services We Provide</h2>
        <div class="scope-grid">
          ${svc.scopeItems.map(item => `<div class="scope-item"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> ${item}</div>`).join('\n          ')}
        </div>

        <!-- Who We Work With -->
        <h2 class="h2" style="margin-top:3rem;">Who We Work With</h2>
        <div class="client-tags">
          ${svc.whoWeWorkWith.map(w => `<span class="pill pill--outline">${w}</span>`).join('\n          ')}
        </div>

        <!-- Project Types -->
        <h2 class="h2" style="margin-top:3rem;">Representative Project Types</h2>
        <ul class="project-list">
          ${svc.projectTypes.map(p => `<li>${p}</li>`).join('\n          ')}
        </ul>
      </div>

      <!-- Sidebar -->
      <aside class="sidebar">
        <div class="sidebar-card">
          <h3 class="sidebar-card__title">Start a Conversation</h3>
          <p>Tell us about your project and we'll respond within three business days.</p>
          <a href="/contact" class="btn btn--primary" style="width:100%;text-align:center;">Contact Us</a>
        </div>
        <div class="sidebar-card">
          <h3 class="sidebar-card__title">Call Us</h3>
          <a href="tel:+12077973772" class="sidebar-phone">
            <div class="sidebar-phone__icon"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
            <span>(207) 797-3772</span>
          </a>
        </div>
        <div class="sidebar-card">
          <h3 class="sidebar-card__title">Service Territory</h3>
          <div class="footer__territory" style="margin-top:.5rem;">
            <span class="pill">ME</span>
            <span class="pill">NH</span>
            <span class="pill">MA</span>
          </div>
        </div>
        <div class="sidebar-card sidebar-card--accent">
          <h3 class="sidebar-card__title" style="color:#fff;">Why Keeley?</h3>
          <ul class="sidebar-trust-list">
            <li><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg> ISN Network Certified</li>
            <li><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg> Zero OSHA Recordables</li>
            <li><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg> Family-Owned Since 1978</li>
            <li><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg> Self-Performing Crews</li>
            <li><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg> Response within three business days</li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta-band">
  <div class="cta-band__inner" style="text-align:center;flex-direction:column;align-items:center;">
    <h2 class="h2 h2--light">Ready to Discuss Your Project?</h2>
    <p class="cta-band__desc" style="max-width:560px;">If you're evaluating contractors for ${svc.name.toLowerCase()} work, we'd like to hear what you're planning. One conversation is usually enough to determine fit.</p>
    <a href="/contact" class="btn btn--primary btn--lg">Contact Us</a>
  </div>
</section>
`

  return layout({
    title: svc.title,
    description: svc.metaDesc,
    canonical: `https://keeleyelectric.com/services/${slug}`,
    breadcrumbs: [
      { name: 'Home', url: 'https://keeleyelectric.com/' },
      { name: 'Services', url: 'https://keeleyelectric.com/services' },
      { name: svc.name, url: `https://keeleyelectric.com/services/${slug}` }
    ]
  }, body)
}
