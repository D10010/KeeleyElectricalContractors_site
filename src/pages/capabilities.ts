import { layout } from '../components/layout'

export function capabilitiesPage(): string {
  const body = `
<!-- Page Header -->
<section class="page-header page-header--blue">
  <div class="container">
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a href="/">Home</a><span class="breadcrumb__sep" aria-hidden="true"></span><span class="breadcrumb__current">Capabilities</span>
    </nav>
    <span class="eyebrow eyebrow--light">Procurement &amp; Qualification Resource</span>
    <h1 class="page-header__title">Licensing, Certifications &amp; Capabilities</h1>
    <p class="page-header__desc">Everything your procurement team needs to qualify Keeley for your next project.</p>
  </div>
</section>

<!-- Licensing Grid -->
<section class="section">
  <div class="container">
    <span class="eyebrow">State Licensing</span>
    <h2 class="h2">Licensed in Three States</h2>
    <div class="license-grid">
      <div class="license-card">
        <div class="license-card__state"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg> Maine</div>
        <h3>ME Master Electrician License</h3>
        <p class="text-muted">License # — Available on request</p>
        <span class="license-card__status"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg> Active</span>
      </div>
      <div class="license-card">
        <div class="license-card__state"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg> New Hampshire</div>
        <h3>NH Electrician License</h3>
        <p class="text-muted">License # — Available on request</p>
        <span class="license-card__status"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg> Active</span>
      </div>
      <div class="license-card">
        <div class="license-card__state"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg> Massachusetts</div>
        <h3>MA Electrician License</h3>
        <p class="text-muted">License # — Available on request</p>
        <span class="license-card__status"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg> Active</span>
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
        <div class="cert-detail-card__icon cert-badge__icon--gold"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg></div>
        <h3>ISN Network</h3>
        <p>Active ISN-certified contractor. Compliance data available through ISNetworld for GC and owner verification.</p>
        <span class="cert-detail-card__status"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg> Active &amp; Current</span>
      </div>
      <div class="cert-detail-card">
        <div class="cert-detail-card__icon cert-badge__icon--blue"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><path d="M2 10h20"/><path d="M6 14h2"/><path d="M14 14h4"/></svg></div>
        <h3>TWIC Cards</h3>
        <p>Key personnel hold active Transportation Worker Identification Credentials for secure facility access.</p>
        <span class="cert-detail-card__status"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg> Key Personnel</span>
      </div>
      <div class="cert-detail-card">
        <div class="cert-detail-card__icon cert-badge__icon--green"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"/><path d="M14 6a6 6 0 0 1 4.37 10.08"/><path d="M5.63 16.08A6 6 0 0 1 10 6"/><path d="M2 20h20"/><path d="M4 16h16"/></svg></div>
        <h3>Safety Record</h3>
        <p>Zero OSHA recordable incidents for three consecutive years. Safety is built into every job plan.</p>
        <span class="cert-detail-card__status"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg> Zero Recordables (3 Years)</span>
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
          <h3><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg> General Liability Insurance</h3>
          <p>Commercial general liability coverage. Limits available on request. Certificates of Insurance provided for each project.</p>
        </div>
        <div class="info-block">
          <h3><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg> Workers' Compensation</h3>
          <p>Full workers' compensation coverage for all employees. Experience modification rate (EMR) available on request.</p>
        </div>
        <div class="info-block">
          <h3><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M12 18v-6"/><path d="m9 15 3 3 3-3"/></svg> Bonding Capacity</h3>
          <p>Bonding available for qualified projects. Contact us for bonding capacity details and pre-qualification.</p>
        </div>
      </div>
      <div>
        <span class="eyebrow">Capacity</span>
        <h2 class="h2">Operational Capabilities</h2>
        <div class="cap-list">
          <div class="cap-list__item"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="3"/><path d="m6.5 22 3.3-8.3"/><path d="m17.5 22-3.3-8.3"/><path d="M9 13.4a13 13 0 0 0 6 0"/></svg> <div><strong>Design-Assist</strong><br>Electrical and civil design-assist from pre-construction through completion.</div></div>
          <div class="cap-list__item"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="6" height="6" rx="1"/><path d="m3 17 2 2 4-4"/><path d="M13 6h8"/><path d="M13 12h8"/><path d="M13 18h8"/></svg> <div><strong>Project Management</strong><br>Dedicated project managers for scheduling, coordination, and owner communication.</div></div>
          <div class="cap-list__item"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> <div><strong>Self-Perform</strong><br>In-house crews for electrical, site work, and utility scopes.</div></div>
          <div class="cap-list__item"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg> <div><strong>6 Master Electricians</strong><br>Six master electricians on staff ensuring expert oversight on every project.</div></div>
          <div class="cap-list__item"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/></svg> <div><strong>Multi-State</strong><br>Licensed and insured to work across Maine, New Hampshire, and Massachusetts.</div></div>
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
    <p style="max-width:600px;margin:0 auto 2rem;">Keeley is headquartered in Portland, Maine and serves commercial and industrial clients throughout the three-state region.</p>
    <div class="territory-map">
      <div class="territory-map__states">
        <div class="territory-map__state territory-map__state--active">
          <svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          <strong>Maine</strong>
          <span>Headquarters &middot; Portland</span>
        </div>
        <div class="territory-map__state territory-map__state--active">
          <svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          <strong>New Hampshire</strong>
          <span>Full Service Coverage</span>
        </div>
        <div class="territory-map__state territory-map__state--active">
          <svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
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
      <a href="/contact" class="btn btn--primary"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg> Request Capabilities PDF</a>
      <a href="/contact" class="btn btn--secondary"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> Contact Procurement</a>
    </div>
  </div>
</section>
`
  return layout({
    title: 'Capabilities & Licensing | Keeley Electrical Contractors',
    description: 'Licensed in Maine, New Hampshire, and Massachusetts. ISN certified, TWIC authorized, zero OSHA recordables. Download our capabilities statement.',
    canonical: 'https://keeleyelectric.com/capabilities',
    breadcrumbs: [
      { name: 'Home', url: 'https://keeleyelectric.com/' },
      { name: 'Capabilities', url: 'https://keeleyelectric.com/capabilities' }
    ]
  }, body)
}
