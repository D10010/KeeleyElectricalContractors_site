import { layout } from '../components/layout'

export function capabilitiesPage(): string {
  const body = `
<!-- Page Header -->
<section class="page-header page-header--blue">
  <div class="container">
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a href="/">Home</a> <span>/</span> <span class="breadcrumb__current">Capabilities</span>
    </nav>
    <span class="eyebrow eyebrow--light">Procurement &amp; Qualification Resource</span>
    <h1 class="page-header__title">Licensing, Certifications &amp; Capabilities</h1>
    <p class="page-header__desc">Everything your procurement team needs to qualify Keeley Electrical for your next project.</p>
  </div>
</section>

<!-- Licensing Grid -->
<section class="section">
  <div class="container">
    <span class="eyebrow">State Licensing</span>
    <h2 class="h2">Licensed in Three States</h2>
    <div class="license-grid">
      <div class="license-card">
        <div class="license-card__state"><i class="fas fa-map-marker-alt"></i> Maine</div>
        <h3>ME Master Electrician License</h3>
        <p class="text-muted">License # — Available on request</p>
        <span class="license-card__status"><i class="fas fa-check-circle"></i> Active</span>
      </div>
      <div class="license-card">
        <div class="license-card__state"><i class="fas fa-map-marker-alt"></i> New Hampshire</div>
        <h3>NH Electrician License</h3>
        <p class="text-muted">License # — Available on request</p>
        <span class="license-card__status"><i class="fas fa-check-circle"></i> Active</span>
      </div>
      <div class="license-card">
        <div class="license-card__state"><i class="fas fa-map-marker-alt"></i> Massachusetts</div>
        <h3>MA Electrician License</h3>
        <p class="text-muted">License # — Available on request</p>
        <span class="license-card__status"><i class="fas fa-check-circle"></i> Active</span>
      </div>
    </div>
  </div>
</section>

<!-- Certifications -->
<section class="section section--surface">
  <div class="container">
    <span class="eyebrow">Certifications &amp; Safety</span>
    <h2 class="h2">Certifications</h2>
    <div class="cert-detail-grid">
      <div class="cert-detail-card">
        <div class="cert-detail-card__icon cert-badge__icon--gold"><i class="fas fa-shield-halved"></i></div>
        <h3>ISN Network</h3>
        <p>Active ISN-certified contractor. Compliance data available through ISNetworld for GC and owner verification.</p>
        <span class="cert-detail-card__status"><i class="fas fa-check-circle"></i> Active &amp; Current</span>
      </div>
      <div class="cert-detail-card">
        <div class="cert-detail-card__icon cert-badge__icon--blue"><i class="fas fa-id-card"></i></div>
        <h3>TWIC Cards</h3>
        <p>Key personnel hold active Transportation Worker Identification Credentials for secure facility access.</p>
        <span class="cert-detail-card__status"><i class="fas fa-check-circle"></i> Key Personnel</span>
      </div>
      <div class="cert-detail-card">
        <div class="cert-detail-card__icon cert-badge__icon--green"><i class="fas fa-hard-hat"></i></div>
        <h3>Safety Record</h3>
        <p>Zero OSHA recordable incidents for three consecutive years. Safety is built into every job plan.</p>
        <span class="cert-detail-card__status"><i class="fas fa-check-circle"></i> Zero Recordables (3 Years)</span>
      </div>
    </div>
  </div>
</section>

<!-- Insurance & Bonding -->
<section class="section">
  <div class="container">
    <div class="two-col-cap">
      <div>
        <span class="eyebrow">Insurance</span>
        <h2 class="h2">Insurance &amp; Bonding</h2>
        <div class="info-block">
          <h3><i class="fas fa-shield-halved"></i> General Liability Insurance</h3>
          <p>Commercial general liability coverage. Limits available on request. Certificates of Insurance provided for each project.</p>
        </div>
        <div class="info-block">
          <h3><i class="fas fa-user-shield"></i> Workers' Compensation</h3>
          <p>Full workers' compensation coverage for all employees. Experience modification rate (EMR) available on request.</p>
        </div>
        <div class="info-block">
          <h3><i class="fas fa-file-contract"></i> Bonding Capacity</h3>
          <p>Bonding available for qualified projects. Contact us for bonding capacity details and pre-qualification.</p>
        </div>
      </div>
      <div>
        <span class="eyebrow">Capacity</span>
        <h2 class="h2">Operational Capabilities</h2>
        <div class="cap-list">
          <div class="cap-list__item"><i class="fas fa-drafting-compass"></i> <div><strong>Design-Assist</strong><br>Electrical and civil design-assist from pre-construction through completion.</div></div>
          <div class="cap-list__item"><i class="fas fa-tasks"></i> <div><strong>Project Management</strong><br>Dedicated project managers for scheduling, coordination, and owner communication.</div></div>
          <div class="cap-list__item"><i class="fas fa-people-carry-box"></i> <div><strong>Self-Perform</strong><br>In-house crews for electrical, site work, and utility scopes.</div></div>
          <div class="cap-list__item"><i class="fas fa-route"></i> <div><strong>Multi-State</strong><br>Licensed and insured to work across Maine, New Hampshire, and Massachusetts.</div></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Service Territory Map -->
<section class="section section--surface">
  <div class="container" style="text-align:center;">
    <span class="eyebrow">Coverage Area</span>
    <h2 class="h2">Service Territory</h2>
    <p style="max-width:600px;margin:0 auto 2rem;">Keeley Electrical is headquartered in Portland, Maine and serves commercial and industrial clients throughout the three-state region.</p>
    <div class="territory-map">
      <div class="territory-map__states">
        <div class="territory-map__state territory-map__state--active">
          <i class="fas fa-map-marker-alt"></i>
          <strong>Maine</strong>
          <span>Headquarters &middot; Portland</span>
        </div>
        <div class="territory-map__state territory-map__state--active">
          <i class="fas fa-map-marker-alt"></i>
          <strong>New Hampshire</strong>
          <span>Full Service Coverage</span>
        </div>
        <div class="territory-map__state territory-map__state--active">
          <i class="fas fa-map-marker-alt"></i>
          <strong>Massachusetts</strong>
          <span>Full Service Coverage</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Download Section -->
<section class="section">
  <div class="container" style="text-align:center;">
    <span class="eyebrow">Documentation</span>
    <h2 class="h2">Capabilities Statement</h2>
    <p style="max-width:560px;margin:0 auto 2rem;">Need a PDF for your procurement file? Download our capabilities statement or contact us for specific documentation.</p>
    <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">
      <a href="/contact" class="btn btn--primary"><i class="fas fa-download"></i> Request Capabilities PDF</a>
      <a href="/contact" class="btn btn--secondary"><i class="fas fa-envelope"></i> Contact Procurement</a>
    </div>
  </div>
</section>
`
  return layout({
    title: 'Capabilities & Licensing | Keeley Electrical Contractors',
    description: 'Licensed in Maine, New Hampshire, and Massachusetts. ISN certified, TWIC authorized, zero OSHA recordables. Download our capabilities statement.',
    canonical: 'https://keeleyelectrical.com/capabilities',
    breadcrumbs: [
      { name: 'Home', url: 'https://keeleyelectrical.com/' },
      { name: 'Capabilities', url: 'https://keeleyelectrical.com/capabilities' }
    ]
  }, body)
}
