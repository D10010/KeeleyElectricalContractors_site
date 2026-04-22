import { layout, PHONE, PHONE_HREF, EMAIL } from '../components/layout'

export function careersPage(): string {
  const body = `
<!-- Page Header -->
<section class="page-header page-header--blue">
  <div class="container">
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a href="/">Home</a> <span>/</span> <span class="breadcrumb__current">Careers</span>
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
        <div class="image-placeholder image-placeholder--lg"><i class="fas fa-users"></i><span>Team Working Together</span></div>
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
        <div class="value-card__icon"><i class="fas fa-hard-hat"></i></div>
        <h3>Safety First Culture</h3>
        <p>Zero OSHA recordable incidents for three consecutive years. Your safety is our top priority on every job.</p>
      </div>
      <div class="value-card">
        <div class="value-card__icon"><i class="fas fa-chart-line"></i></div>
        <h3>Career Growth</h3>
        <p>Opportunities for advancement from apprentice to journeyman to foreman and project management roles.</p>
      </div>
      <div class="value-card">
        <div class="value-card__icon"><i class="fas fa-briefcase-medical"></i></div>
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
            <span class="pill"><i class="fas fa-map-marker-alt"></i> Portland, ME</span>
            <span class="pill"><i class="fas fa-clock"></i> Full-Time</span>
          </div>
          <p class="career-card__desc">Commercial and industrial electrical installation and service. Maine journeyman license required.</p>
        </div>
        <a href="/contact" class="btn btn--primary">Apply <i class="fas fa-arrow-right"></i></a>
      </div>
      <div class="career-card">
        <div class="career-card__info">
          <h3 class="career-card__title">Electrical Apprentice</h3>
          <div class="career-card__meta">
            <span class="pill"><i class="fas fa-map-marker-alt"></i> Portland, ME</span>
            <span class="pill"><i class="fas fa-clock"></i> Full-Time</span>
          </div>
          <p class="career-card__desc">Learn the trade from experienced professionals on commercial and industrial projects. Enrollment in apprenticeship program required.</p>
        </div>
        <a href="/contact" class="btn btn--primary">Apply <i class="fas fa-arrow-right"></i></a>
      </div>
      <div class="career-card">
        <div class="career-card__info">
          <h3 class="career-card__title">Project Manager</h3>
          <div class="career-card__meta">
            <span class="pill"><i class="fas fa-map-marker-alt"></i> Portland, ME</span>
            <span class="pill"><i class="fas fa-clock"></i> Full-Time</span>
          </div>
          <p class="career-card__desc">Manage commercial electrical and site work projects from pre-construction through closeout. 5+ years experience preferred.</p>
        </div>
        <a href="/contact" class="btn btn--primary">Apply <i class="fas fa-arrow-right"></i></a>
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
      <a href="/contact" class="btn btn--primary btn--lg">Contact Us to Apply</a>
      <a href="mailto:${EMAIL}" class="btn btn--ghost btn--lg"><i class="fas fa-envelope"></i> ${EMAIL}</a>
    </div>
  </div>
</section>
`
  return layout({
    title: 'Careers | Keeley Electrical Contractors - Join Our Team',
    description: 'Build your career at Keeley Electrical Contractors. We hire licensed electricians, apprentices, and project managers in Maine, New Hampshire, and Massachusetts.',
    canonical: 'https://keeleyelectrical.com/careers',
    breadcrumbs: [
      { name: 'Home', url: 'https://keeleyelectrical.com/' },
      { name: 'Careers', url: 'https://keeleyelectrical.com/careers' }
    ]
  }, body)
}
