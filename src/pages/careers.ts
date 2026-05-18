import { layout, PHONE, PHONE_HREF, EMAIL } from '../components/layout'

export function careersPage(): string {
  // Reusable SVG icons
  const pinIcon = '<svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>'
  const clockIcon = '<svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>'
  const arrowIcon = '<svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>'

  function card(title: string, slug: string, location: string, desc: string): string {
    return `<div class="career-card">
        <div class="career-card__info">
          <h3 class="career-card__title">${title}</h3>
          <div class="career-card__meta">
            <span class="pill">${pinIcon} ${location}</span>
            <span class="pill">${clockIcon} Full-Time</span>
          </div>
          <p class="career-card__desc">${desc}</p>
        </div>
        <a href="/careers/apply?role=${slug}" class="btn btn--primary">Apply ${arrowIcon}</a>
      </div>`
  }

  const body = `
<!-- Page Header -->
<section class="page-header page-header--blue page-header--has-hero">
  <img src="/static/careers-hero-solar-panel-electrician-aerial.jpg" alt="Electrician inspecting commercial solar panel array from aerial view" class="page-header__hero" width="1024" height="576" loading="eager">
  <div class="container">
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a href="/">Home</a><span class="breadcrumb__sep" aria-hidden="true"></span><span class="breadcrumb__current">Careers</span>
    </nav>
    <span class="eyebrow eyebrow--light">Join Our Team</span>
    <h1 class="page-header__title">Join Keeley</h1>
    <p class="page-header__desc">We're always looking for skilled electricians, project managers, and construction professionals to join our growing team.</p>
  </div>
</section>

<!-- Why Keeley -->
<section class="section">
  <div class="container">
    <div class="two-col">
      <div class="two-col__text">
        <span class="eyebrow">Why Keeley?</span>
        <h2 class="h2">A Place to <em>Grow</em></h2>
        <p>Keeley has been a family-owned business since 1978. Now in our third generation, we offer a stable work environment with opportunities for long-term career development. Our crews work on some of the most significant commercial and industrial projects across Maine, New Hampshire, and Massachusetts.</p>
        <p>We value our people. From competitive pay and benefits to a commitment to safety and professional development, Keeley is a place where electricians and construction professionals can build lasting careers.</p>
      </div>
      <div class="two-col__image">
        <img src="/static/commercial-rooftop-solar-installation-electrician.jpg" alt="Electrician walking through commercial rooftop solar panel installation" width="1024" height="683" loading="lazy" style="width:100%;height:auto;border-radius:var(--radius);display:block;">
      </div>
    </div>
  </div>
</section>

<!-- What We Offer -->
<section class="section section--surface">
  <div class="container">
    <span class="eyebrow">Benefits</span>
    <h2 class="h2">What We Offer</h2>
    <div class="values-grid">
      <div class="value-card">
        <div class="value-card__icon"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
        <h3>Competitive Wages</h3>
        <p>Market-rate pay for licensed electricians and operators in northern New England. We retain people because we pay fairly from day one.</p>
      </div>
      <div class="value-card">
        <div class="value-card__icon"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg></div>
        <h3>Consistent Work Volume</h3>
        <p>45 years of backlog and repeat clients mean steady hours year-round. No seasonal layoffs, no scrambling for the next job.</p>
      </div>
      <div class="value-card">
        <div class="value-card__icon"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
        <h3>Small Crew, Real Accountability</h3>
        <p>A 35-person outfit where your work is seen and your input matters. Third-generation ownership that knows every employee by name.</p>
      </div>
      <div class="value-card">
        <div class="value-card__icon"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"/><path d="M14 6a6 6 0 0 1 4.37 10.08"/><path d="M5.63 16.08A6 6 0 0 1 10 6"/><path d="M2 20h20"/><path d="M4 16h16"/></svg></div>
        <h3>Field Stability &amp; Safety</h3>
        <p>Zero OSHA recordable incidents for three consecutive years. ISN certified. We invest in equipment, training, and conditions that keep people safe.</p>
      </div>
      <div class="value-card">
        <div class="value-card__icon"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg></div>
        <h3>Benefits &amp; Longevity</h3>
        <p>Health insurance, retirement plan, and paid time off. Average employee tenure here is measured in decades, not months.</p>
      </div>
    </div>
  </div>
</section>

<!-- Open Positions -->
<section class="section">
  <div class="container">
    <span class="eyebrow">Open Positions</span>
    <h2 class="h2">Current Opportunities</h2>
    <p style="color:var(--ink-2);margin-bottom:2rem;">We're always accepting applications from qualified professionals. Even if you don't see a specific role listed below, we encourage you to reach out.</p>
    
    <!-- Group 1 — Electrical Trades -->
    <h3 class="careers-group__title">Electrical Trades</h3>
    <div class="careers-list">
      ${card('Master Electrician', 'master-electrician', 'Maine', 'Lead electrical installation, code interpretation, and crew oversight on commercial and industrial projects. Maine master license required; NH or MA reciprocity preferred.')}
      ${card('Licensed Journeyman Electrician', 'journeyman-electrician', 'Maine', 'Commercial and industrial electrical installation and service. Maine journeyman license required.')}
      ${card('Electrical Apprentice', 'apprentice-1', 'Maine', 'Apprenticeship under licensed electricians. First through fourth year welcome\u2009\u2014\u2009select your year on the application. State-approved program enrollment or willingness to enroll.')}
      ${card('Electrical Foreman', 'electrical-foreman', 'Maine', 'Field leadership on active job sites. Crew coordination, schedule management, quality control. Journeyman license plus five years of commercial experience.')}
    </div>

    <!-- Group 2 — Site Work -->
    <h3 class="careers-group__title">Site Work</h3>
    <div class="careers-list">
      ${card('Excavator Operator', 'excavator-operator', 'ME, NH, MA', 'Trenching, grading, and utility pit work on commercial and utility job sites. Experience with mid- to full-size excavators required.')}
      ${card('Heavy Equipment Operator', 'heavy-equipment-operator', 'ME, NH, MA', 'Dozers, loaders, and skid steers across electrical site prep and utility scopes. CDL preferred.')}
      ${card('CDL Driver (Class A)', 'cdl-class-a', 'ME, NH, MA', 'Equipment hauling, material delivery, and crew transport across our service area. Clean driving record and current DOT medical card required.')}
      ${card('CDL Driver (Class B)', 'cdl-class-b', 'ME, NH, MA', 'Local and regional material and equipment runs. Clean driving record and current DOT medical card required.')}
      ${card('Site Foreman', 'site-foreman', 'ME, NH, MA', 'Field leadership on excavation and utility site work. Crew direction, equipment scheduling, site safety enforcement. Five plus years of operating experience.')}
    </div>

    <!-- Group 3 — Utility -->
    <h3 class="careers-group__title">Utility</h3>
    <div class="careers-list">
      ${card('Journeyman Lineman', 'journeyman-lineman', 'ME, NH, MA', 'Overhead and underground primary line construction, transformer work, and utility coordination. Lineman certification and climbing proficiency required.')}
      ${card('Apprentice Lineman', 'apprentice-lineman', 'ME, NH, MA', 'Apprenticeship under journeyman linemen. State or utility apprenticeship enrollment preferred. Physical fitness and willingness to climb required.')}
      ${card('Groundman', 'groundman', 'ME, NH, MA', 'Ground support for line crews: material handling, traffic control, equipment setup. Entry-level position with a path into the apprentice lineman program.')}
      ${card('Utility Foreman', 'utility-foreman', 'ME, NH, MA', 'Field leadership on overhead and underground utility construction. Lineman certification plus five years of crew experience.')}
    </div>

    <!-- Group 4 — Management & Office -->
    <h3 class="careers-group__title">Management &amp; Office</h3>
    <div class="careers-list">
      ${card('Project Manager', 'project-manager', 'Maine', 'Construction project management for commercial, industrial, and utility projects from $500K to $10M plus. PE or PMP preferred but not required for the right experience.')}
      ${card('Estimator', 'estimator', 'Maine', 'Bid prep, takeoffs, and pre-construction estimating for commercial, industrial, and utility scopes. Three plus years of electrical or site-work estimating experience.')}
      ${card('Superintendent', 'superintendent', 'ME, NH, MA', 'Multi-site oversight of active commercial, industrial, and utility projects. Ten plus years of field-to-management progression.')}
      ${card('Safety Coordinator', 'safety-coordinator', 'ME, NH, MA', 'Site safety inspections, training, and OSHA compliance across our service area. OSHA 30 minimum; CSP credential preferred.')}
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta-band">
  <div class="cta-band__inner" style="text-align:center;flex-direction:column;align-items:center;">
    <h2 class="h2 h2--light">Interested in Joining Keeley?</h2>
    <p class="cta-band__desc" style="max-width:560px;">Send us your resume and a brief description of your experience. We'll follow up within three business days.</p>
    <div style="display:flex;gap:1rem;flex-wrap:wrap;justify-content:center;">
      <a href="/careers/apply" class="btn btn--primary btn--lg">Apply Now <svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></a>
      <a href="${PHONE_HREF}" class="btn btn--ghost btn--lg"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg> ${PHONE}</a>
    </div>
  </div>
</section>
`
  return layout({
    title: 'Join Keeley | Careers at Keeley Electrical Contractors',
    description: 'Build your career at Keeley Contractors. We hire licensed electricians, apprentices, and project managers in Maine, New Hampshire, and Massachusetts.',
    canonical: 'https://keeleyelectric.com/careers',
    breadcrumbs: [
      { name: 'Home', url: 'https://keeleyelectric.com/' },
      { name: 'Careers', url: 'https://keeleyelectric.com/careers' }
    ]
  }, body)
}
