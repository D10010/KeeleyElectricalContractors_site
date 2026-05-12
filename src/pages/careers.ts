import { layout, PHONE, PHONE_HREF, EMAIL } from '../components/layout'

export function careersPage(): string {
  const body = `
<!-- Page Header -->
<section class="page-header page-header--blue">
  <div class="container">
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a href="/">Home</a><span class="breadcrumb__sep" aria-hidden="true"></span><span class="breadcrumb__current">Careers</span>
    </nav>
    <span class="eyebrow eyebrow--light">Join Our Team</span>
    <h1 class="page-header__title">Build Your Career at Keeley Electrical</h1>
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
        <p>Keeley Electrical Contractors has been a family-owned business since 1978. Now in our third generation, we offer a stable work environment with opportunities for long-term career development. Our crews work on some of the most significant commercial and industrial projects across Maine, New Hampshire, and Massachusetts.</p>
        <p>We value our people. From competitive pay and benefits to a commitment to safety and professional development, Keeley is a place where electricians and construction professionals can build lasting careers.</p>
      </div>
      <div class="two-col__image">
        <div class="image-placeholder image-placeholder--lg"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg><span>Team Working Together</span></div>
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
        <div class="value-card__icon"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"/><path d="M14 6a6 6 0 0 1 4.37 10.08"/><path d="M5.63 16.08A6 6 0 0 1 10 6"/><path d="M2 20h20"/><path d="M4 16h16"/></svg></div>
        <h3>Safety First Culture</h3>
        <p>Zero OSHA recordable incidents for three consecutive years. Your safety is our top priority on every job.</p>
      </div>
      <div class="value-card">
        <div class="value-card__icon"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg></div>
        <h3>Career Growth</h3>
        <p>Opportunities for advancement from apprentice to journeyman to foreman and project management roles.</p>
      </div>
      <div class="value-card">
        <div class="value-card__icon"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
        <h3>Competitive Benefits</h3>
        <p>Health insurance, retirement plan, paid time off, and competitive pay scales for all positions.</p>
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
    
    <div class="careers-list">
      <div class="career-card">
        <div class="career-card__info">
          <h3 class="career-card__title">Licensed Journeyman Electrician</h3>
          <div class="career-card__meta">
            <span class="pill"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg> Portland, ME</span>
            <span class="pill"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> Full-Time</span>
          </div>
          <p class="career-card__desc">Commercial and industrial electrical installation and service. Maine journeyman license required.</p>
        </div>
        <a href="/careers/apply?role=journeyman-electrician" class="btn btn--primary">Apply <svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></a>
      </div>
      <div class="career-card">
        <div class="career-card__info">
          <h3 class="career-card__title">Electrical Apprentice</h3>
          <div class="career-card__meta">
            <span class="pill"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg> Portland, ME</span>
            <span class="pill"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> Full-Time</span>
          </div>
          <p class="career-card__desc">Learn the trade from experienced professionals on commercial and industrial projects. Enrollment in apprenticeship program required.</p>
        </div>
        <a href="/careers/apply?role=apprentice-1" class="btn btn--primary">Apply <svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></a>
      </div>
      <div class="career-card">
        <div class="career-card__info">
          <h3 class="career-card__title">Project Manager</h3>
          <div class="career-card__meta">
            <span class="pill"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg> Portland, ME</span>
            <span class="pill"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> Full-Time</span>
          </div>
          <p class="career-card__desc">Manage commercial electrical and site work projects from pre-construction through closeout. 5+ years experience preferred.</p>
        </div>
        <a href="/careers/apply?role=project-manager" class="btn btn--primary">Apply <svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></a>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta-band">
  <div class="cta-band__inner" style="text-align:center;flex-direction:column;align-items:center;">
    <h2 class="h2 h2--light">Interested in Joining Keeley?</h2>
    <p class="cta-band__desc" style="max-width:560px;">Send us your resume and a brief description of your experience. We'll follow up within one business day.</p>
    <div style="display:flex;gap:1rem;flex-wrap:wrap;justify-content:center;">
      <a href="/careers/apply" class="btn btn--primary btn--lg">Apply Now <svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></a>
      <a href="${PHONE_HREF}" class="btn btn--ghost btn--lg"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg> ${PHONE}</a>
    </div>
  </div>
</section>
`
  return layout({
    title: 'Careers | Keeley Electrical Contractors - Join Our Team',
    description: 'Build your career at Keeley Electrical Contractors. We hire licensed electricians, apprentices, and project managers in Maine, New Hampshire, and Massachusetts.',
    canonical: 'https://keeleyelectric.com/careers',
    breadcrumbs: [
      { name: 'Home', url: 'https://keeleyelectric.com/' },
      { name: 'Careers', url: 'https://keeleyelectric.com/careers' }
    ]
  }, body)
}
