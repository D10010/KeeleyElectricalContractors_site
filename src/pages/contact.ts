import { layout, PHONE, PHONE_HREF, EMAIL, COMPANY, LOCATION, ADDRESS, MAPS_URL } from '../components/layout'

export function contactPage(): string {
  const jsonLd = `<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": COMPANY,
    "telephone": PHONE,
    "email": EMAIL,
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
    "areaServed": ["Maine", "New Hampshire", "Massachusetts"]
  })}</script>`

  const body = `
<!-- Page Header -->
<section class="page-header page-header--blue">
  <div class="container">
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a href="/">Home</a><span class="breadcrumb__sep" aria-hidden="true"></span><span class="breadcrumb__current">Contact</span>
    </nav>
    <span class="eyebrow eyebrow--light">Project Inquiry</span>
    <h1 class="page-header__title">Start a Conversation.</h1>
    <p class="page-header__desc">Tell us what you're working on. We'll route your inquiry to the right person and follow up within three business days.</p>
  </div>
</section>

<!-- Main Contact Area -->
<section class="section">
  <div class="container">
    <div class="contact-layout">
      <!-- Form -->
      <div class="contact-form-wrap">
        <!-- Progress Bar -->
        <div class="form-progress" id="form-progress">
          <div class="form-progress__meta">
            <span class="form-progress__label">Completion</span>
            <span class="form-progress__pct" id="progress-pct">0%</span>
          </div>
          <div class="form-progress__bar"><div class="form-progress__fill" id="progress-fill" style="width:0%"></div></div>
        </div>

        <form id="contact-form" class="contact-form" novalidate>

          <!-- ═══ SECTION 1: Type of Work ═══ -->
          <div class="form-section" id="section-1">
            <div class="section-head">
              <div class="section-head__num">1</div>
              <span class="section-head__title">Type of work<span class="required">*</span></span>
            </div>

            <!-- Project Type Selection -->
            <div class="field-group" style="margin-bottom:1.25rem;">
              <div class="field-label">Project type<span class="required">*</span></div>
              <div class="project-type-grid" id="project-class-toggle">
                <label class="project-type-card project-type-card--active">
                  <input type="radio" name="project_class" value="commercial" checked required>
                  <div class="project-type-card__icon">
                    <svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="1"/><line x1="9" y1="6" x2="9" y2="6.01"/><line x1="12" y1="6" x2="12" y2="6.01"/><line x1="15" y1="6" x2="15" y2="6.01"/><line x1="9" y1="10" x2="9" y2="10.01"/><line x1="12" y1="10" x2="12" y2="10.01"/><line x1="15" y1="10" x2="15" y2="10.01"/><line x1="9" y1="14" x2="9" y2="14.01"/><line x1="12" y1="14" x2="12" y2="14.01"/><line x1="15" y1="14" x2="15" y2="14.01"/><rect x="9" y="18" width="6" height="4"/></svg>
                  </div>
                  <span class="project-type-card__title">Commercial</span>
                  <span class="project-type-card__desc">Office, retail, industrial, institutional, multi-family</span>
                  <span class="project-type-card__check" aria-hidden="true"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                </label>
                <label class="project-type-card">
                  <input type="radio" name="project_class" value="residential" required>
                  <div class="project-type-card__icon">
                    <svg width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/><polyline points="9 21 9 13 15 13 15 21"/></svg>
                  </div>
                  <span class="project-type-card__title">Residential</span>
                  <span class="project-type-card__desc">Single-family homes, renovations, service upgrades</span>
                  <span class="project-type-card__check" aria-hidden="true"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                </label>
              </div>
            </div>

            <!-- Service Type Cards -->
            <div class="service-grid" id="service-grid">
              <div class="service-card" id="svc-electrical" role="button" tabindex="0">
                <div class="svc-check" aria-hidden="true"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
                <div class="svc-icon"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg></div>
                <span class="svc-name">Electrical</span>
                <span class="svc-desc">Commercial, industrial, design-build, generators, fire alarm, medium voltage</span>
              </div>
              <div class="service-card" id="svc-sitework" role="button" tabindex="0">
                <div class="svc-check" aria-hidden="true"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
                <div class="svc-icon"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="16" width="18" height="4" rx="1"/><rect x="4" y="12" width="8" height="4" rx="1"/><path d="M10 12V9l6-5"/><path d="M16 4l4 3-3 2"/><circle cx="3" cy="22" r="1"/><circle cx="17" cy="22" r="1"/></svg></div>
                <span class="svc-name">Site Work</span>
                <span class="svc-desc">Excavation, grading, underground conduit, site lighting, civil earthwork</span>
              </div>
              <div class="service-card" id="svc-utility" role="button" tabindex="0">
                <div class="svc-check" aria-hidden="true"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
                <div class="svc-icon"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/></svg></div>
                <span class="svc-name">Utility</span>
                <span class="svc-desc">Primary line extensions, overhead and underground, utility coordination</span>
              </div>
            </div>
            <div class="svc-summary" id="svc-summary" aria-live="polite"></div>
            <input type="hidden" name="service_type" id="h-service-type" value="">

            <!-- Conditional: Electrical -->
            <div class="conditional" id="cond-electrical">
              <div class="cond-label">Electrical details</div>
              <div class="field-label">Project type<span class="required">*</span></div>
              <div class="radio-group">
                <label class="radio-row"><input type="radio" name="elec_type" value="new"> New construction</label>
                <label class="radio-row"><input type="radio" name="elec_type" value="renovation"> Renovation or existing structure</label>
              </div>
              <div class="field-label">Additional context</div>
              <div class="check-group">
                <label class="check-row"><input type="checkbox" name="sub_electrical" value="service-upgrade"> Service upgrade anticipated &mdash; utility coordination and inspections will be required</label>
                <label class="check-row"><input type="checkbox" name="sub_electrical" value="mech-plumb"> Working for a mechanical or plumbing contractor &mdash; equipment cut sheets will be needed</label>
              </div>
            </div>

            <!-- Conditional: Site Work -->
            <div class="conditional" id="cond-sitework">
              <div class="cond-label">Site work details</div>
              <div class="field-label">Scope involved &mdash; select all that apply</div>
              <div class="check-group">
                <label class="check-row"><input type="checkbox" name="sub_sitework" value="trenching"> Trenching and underground conduit installation</label>
                <label class="check-row"><input type="checkbox" name="sub_sitework" value="site-lighting"> Site lighting &mdash; parking lot, perimeter, or roadway</label>
                <label class="check-row"><input type="checkbox" name="sub_sitework" value="grading"> Grading, excavation, or land clearing</label>
                <label class="check-row"><input type="checkbox" name="sub_sitework" value="civil-earthwork"> Civil earthwork</label>
              </div>
            </div>

            <!-- Conditional: Utility -->
            <div class="conditional" id="cond-utility">
              <div class="cond-label">Utility details</div>
              <div class="field-label">Line work type<span class="required">*</span></div>
              <div class="radio-group">
                <label class="radio-row"><input type="radio" name="line_work" value="de-energized"> De-energized line work</label>
                <label class="radio-row"><input type="radio" name="line_work" value="energized"> Energized line work</label>
              </div>
              <div class="field-label">Extension type</div>
              <div class="radio-group">
                <label class="radio-row"><input type="radio" name="ext_type" value="aerial"> Private primary line extension &mdash; aerial</label>
                <label class="radio-row"><input type="radio" name="ext_type" value="underground"> Private primary line extension &mdash; underground</label>
                <label class="radio-row"><input type="radio" name="ext_type" value="na"> Not applicable</label>
              </div>
              <div class="field-label">Have you already initiated a work order with your utility (CMP, Eversource)?<span class="required">*</span></div>
              <div class="radio-group">
                <label class="radio-row"><input type="radio" name="work_order" value="yes"> Yes &mdash; work order submitted</label>
                <label class="radio-row"><input type="radio" name="work_order" value="no"> No &mdash; not yet initiated</label>
                <label class="radio-row"><input type="radio" name="work_order" value="unsure"> Not sure</label>
              </div>

              <!-- Utility Alert / Education Blocks -->
              <div class="utility-alert" id="utility-alert">
                <div class="utility-alert__head">
                  <div class="utility-alert__icon"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg></div>
                  <div class="utility-alert__title">Utility coordination is required before your project can move forward.</div>
                </div>
                <div class="utility-alert__body">
                  <p>Before construction can begin on a utility project, most clients need to complete one or more steps directly with their utility provider. This is standard &mdash; it protects your budget and timeline. We guide clients through this process regularly and can help once you submit your inquiry.</p>

                  <div class="edu-block">
                    <div class="edu-block__title"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 13H8"/><path d="M16 13h-2"/><path d="M10 17H8"/><path d="M16 17h-2"/></svg> CMP customers &mdash; CIAC cost allocation</div>
                    <p>The Contribution in Aid of Construction (CIAC) is CMP's process for extending primary utility service to new developments. Keeley guides clients through the application, engineering review, and construction phases.</p>
                    <p>The process works like this: a contractor submits a proposal, CMP schedules a field planner appointment, a hand sketch is produced, and Keeley prices against that scope. None of this can begin without CMP's involvement &mdash; which is why initiating the work order early matters.</p>
                    <a href="https://www.cmpco.com/en/for-your-home/new-service/line-extensions" target="_blank" rel="noopener" class="edu-link">CMP line extension information <svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/><path d="m21 3-9 9"/><path d="M15 3h6v6"/></svg></a>
                  </div>

                  <div class="edu-block">
                    <div class="edu-block__title"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 13H8"/><path d="M16 13h-2"/><path d="M10 17H8"/><path d="M16 17h-2"/></svg> Portland Water District &mdash; ability to serve</div>
                    <p>If your project is in Portland Water District territory and involves any water service connection, PWD requires you to submit project sketches and receive an official <strong>ability-to-serve letter</strong> before design work can be priced or started.</p>
                    <p>Without it, neither Keeley nor any other contractor can provide an accurate proposal &mdash; and the project cannot move through the permit process.</p>
                    <a href="https://www.pwd.org/development-services" target="_blank" rel="noopener" class="edu-link">Portland Water District development services <svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/><path d="m21 3-9 9"/><path d="M15 3h6v6"/></svg></a>
                  </div>

                  <p class="utility-alert__note"><em>Not sure which applies to your project? Submit your inquiry and we'll sort it out with you.</em></p>
                </div>
              </div>
            </div>
          </div>

          <hr class="form-divider">

          <!-- ═══ SECTION 2: Estimated Project Size ═══ -->
          <div class="form-section" id="section-2">
            <div class="section-head">
              <div class="section-head__num">2</div>
              <span class="section-head__title">Estimated project size<span class="required">*</span></span>
            </div>
            <div class="size-grid" id="size-grid">
              <div class="size-card" id="size-small" role="button" tabindex="0">
                <div class="sz-name">Small / service call</div>
                <div class="sz-sub">Up to approximately $25,000</div>
              </div>
              <div class="size-card" id="size-medium" role="button" tabindex="0">
                <div class="sz-name">Medium or large project</div>
                <div class="sz-sub">$25,000 and above</div>
              </div>
            </div>
            <input type="hidden" name="project_size" id="h-project-size" value="">
            <p class="size-note">All submissions are reviewed &mdash; no inquiry is automatically declined.</p>
          </div>

          <hr class="form-divider">

          <!-- ═══ SECTION 3: Contact Information ═══ -->
          <div class="form-section" id="section-3">
            <div class="section-head">
              <div class="section-head__num">3</div>
              <span class="section-head__title">Contact information</span>
            </div>
            <div class="field-row">
              <div class="field-group">
                <label class="field-label" for="f-firstname">First name<span class="required">*</span></label>
                <input type="text" id="f-firstname" name="first_name" placeholder="Michael" required>
              </div>
              <div class="field-group">
                <label class="field-label" for="f-lastname">Last name<span class="required">*</span></label>
                <input type="text" id="f-lastname" name="last_name" placeholder="Donnelly" required>
              </div>
            </div>
            <div class="field-row">
              <div class="field-group">
                <label class="field-label" for="f-company">Company name</label>
                <input type="text" id="f-company" name="company" placeholder="Donnelly Construction">
              </div>
              <div class="field-group">
                <label class="field-label" for="f-email">Email address<span class="required">*</span></label>
                <input type="email" id="f-email" name="email" placeholder="m.donnelly@company.com" required>
              </div>
            </div>
            <div class="field-row">
              <div class="field-group">
                <label class="field-label" for="f-phone">Phone number<span class="required">*</span></label>
                <input type="tel" id="f-phone" name="phone" placeholder="(207) 555-0100" required>
              </div>
              <div class="field-group">
                <label class="field-label" for="f-returning">Have we worked together before?</label>
                <select id="f-returning" name="returning">
                  <option value="">Select</option>
                  <option value="yes">Yes &mdash; returning client</option>
                  <option value="no">No &mdash; first project with Keeley</option>
                  <option value="unsure">Not sure</option>
                </select>
              </div>
            </div>
          </div>

          <hr class="form-divider">

          <!-- ═══ SECTION 4: Project Details ═══ -->
          <div class="form-section" id="section-4">
            <div class="section-head">
              <div class="section-head__num">4</div>
              <span class="section-head__title">Project details</span>
            </div>
            <div class="field-row">
              <div class="field-group">
                <label class="field-label" for="f-address">Project / service address<span class="required">*</span></label>
                <input type="text" id="f-address" name="address" placeholder="123 Industrial Dr, Portland, ME" required>
              </div>
              <div class="field-group">
                <label class="field-label" for="f-state">State<span class="required">*</span></label>
                <select id="f-state" name="state" required>
                  <option value="">Select</option>
                  <option value="ME">Maine</option>
                  <option value="NH">New Hampshire</option>
                  <option value="MA">Massachusetts</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div class="field-row">
              <div class="field-group">
                <label class="field-label" for="f-timeline">Timeline<span class="required">*</span></label>
                <select id="f-timeline" name="timeline" required>
                  <option value="">Select</option>
                  <option value="emergency">Emergency &mdash; immediate response needed</option>
                  <option value="active">Active pipeline &mdash; within 60 days</option>
                  <option value="planning">Planning ahead &mdash; next year or beyond</option>
                </select>
              </div>
              <div class="field-group">
                <label class="field-label" for="f-gc">General contractor already involved?<span class="required">*</span></label>
                <select id="f-gc" name="gc_involved" required>
                  <option value="">Select</option>
                  <option value="yes">Yes &mdash; a GC is involved</option>
                  <option value="no">No &mdash; I am the project owner / facility manager</option>
                  <option value="tbd">Not yet determined</option>
                </select>
              </div>
            </div>
            <div class="field-row">
              <div class="field-group">
                <label class="field-label" for="f-contract">Preferred contract type<span class="required">*</span></label>
                <select id="f-contract" name="contract_type" required>
                  <option value="">Select</option>
                  <option value="fixed">Fixed price</option>
                  <option value="tm">Time and materials (T&amp;M)</option>
                  <option value="unsure">Not sure yet</option>
                </select>
              </div>
              <div class="field-group" id="pm-field" style="display:none;">
                <label class="field-label" for="f-pm">Dedicated project manager requested?</label>
                <select id="f-pm" name="pm_requested">
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
            <div class="field-row field-row--full">
              <div class="field-group">
                <label class="field-label" for="f-description">Project description<span class="required">*</span></label>
                <textarea id="f-description" name="description" rows="5" placeholder="Scope, location, timeline, and any context that helps us understand the project..." required minlength="50"></textarea>
                <p class="field-hint">Briefly describe the scope of work, location, and timeline if known.</p>
              </div>
            </div>
            <div class="field-row field-row--full">
              <div class="field-group">
                <label class="field-label" for="f-financing">Financing status<span class="required">*</span></label>
                <select id="f-financing" name="financing" required>
                  <option value="">Select</option>
                  <option value="secured">Financing secured &mdash; ready to proceed</option>
                  <option value="inprogress">Financing in progress</option>
                  <option value="budgeting">Still in budgeting or estimating phase</option>
                  <option value="na">Not applicable</option>
                </select>
              </div>
            </div>
            <div class="field-row field-row--full">
              <div class="field-group">
                <label class="field-label">Project photos, site images, or documents (optional)</label>
                <p class="field-hint" style="margin-top:0;margin-bottom:.5rem;">Project photos significantly speed up our review process and allow us to provide more accurate initial scoping. They also reduce the cost of having to send personnel to the job site before we can prepare an estimate.</p>
                <div class="dropzone" id="dropzone" role="button" tabindex="0" aria-label="Drag and drop files or tap to upload">
                  <input type="file" id="f-attachments" name="attachments" accept="image/jpeg,image/png,image/heic,image/heif,image/webp,application/pdf" multiple class="dropzone__input">
                  <div class="dropzone__content">
                    <svg class="dropzone__icon" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                    <span class="dropzone__label">Drag &amp; drop files here, or <span class="dropzone__browse">browse</span></span>
                    <span class="dropzone__hint">Up to 10 files, 25 MB each &middot; JPEG, PNG, WebP, HEIC, PDF</span>
                  </div>
                </div>
                <div id="attachment-list" class="attachment-list"></div>
              </div>
            </div>
            <div class="field-row field-row--full">
              <div class="field-group">
                <label class="field-label">How did you hear about Keeley?<span class="required">*</span></label>
                <p class="field-hint" style="margin-top:0;margin-bottom:.5rem;">Select all that apply.</p>
                <div class="referral-grid">
                  <label class="check-row referral-option"><input type="checkbox" name="referral" value="referral"> Referral from a client or colleague</label>
                  <label class="check-row referral-option"><input type="checkbox" name="referral" value="gc"> Referred by a general contractor</label>
                  <label class="check-row referral-option"><input type="checkbox" name="referral" value="repeat"> Existing relationship with Keeley</label>
                  <label class="check-row referral-option"><input type="checkbox" name="referral" value="search"> Google or other search engine</label>
                  <label class="check-row referral-option"><input type="checkbox" name="referral" value="social"> Social media</label>
                  <label class="check-row referral-option"><input type="checkbox" name="referral" value="bluebook"> Blue Book or industry directory</label>
                  <label class="check-row referral-option"><input type="checkbox" name="referral" value="jobsite"> Saw a Keeley job site or vehicle</label>
                  <label class="check-row referral-option"><input type="checkbox" name="referral" value="event"> Industry event or trade organization</label>
                  <label class="check-row referral-option"><input type="checkbox" name="referral" value="other"> Other</label>
                </div>
              </div>
            </div>
            <div class="field-row field-row--full" id="referral-detail-wrap" style="display:none;">
              <div class="field-group">
                <label class="field-label" for="f-referral-detail">Who referred you, or where specifically?</label>
                <input type="text" id="f-referral-detail" name="referral_detail" placeholder="Name, company, event, or source">
                <p class="field-hint">Optional &mdash; helps us thank the right person or understand where we're showing up.</p>
              </div>
            </div>
          </div>

          <!-- Submit -->
          <button type="submit" class="btn btn--primary btn--lg form-submit-btn" id="btn-submit">
            Submit Project Inquiry <svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </button>
          <p class="form-disclaimer">We review every submission. No inquiry is automatically declined.<br>Response within three business days.</p>
        </form>

        <!-- Thank You -->
        <div id="thank-you" class="thank-you" style="display:none;">
          <div class="thank-you__icon"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg></div>
          <h2 class="h2">Inquiry Received.</h2>
          <p>Your project inquiry has been submitted. We review every submission personally and will follow up within three business days.</p>
          <div class="thank-you__steps">
            <div class="thank-you__step">
              <span class="thank-you__step-num">1</span>
              <div>
                <strong>Review</strong>
                <p>Your inquiry is reviewed by our team and routed to the right person based on scope and service type.</p>
              </div>
            </div>
            <div class="thank-you__step">
              <span class="thank-you__step-num">2</span>
              <div>
                <strong>Follow-up</strong>
                <p>We'll reach out directly &mdash; typically within three business days &mdash; to discuss your project and next steps.</p>
              </div>
            </div>
            <div class="thank-you__step">
              <span class="thank-you__step-num">3</span>
              <div>
                <strong>Budget</strong>
                <p>For qualified projects, we'll provide a budget to confirm pricing alignment before committing to a full proposal.</p>
              </div>
            </div>
          </div>
          <div style="margin-top:2rem;display:flex;gap:1rem;flex-wrap:wrap;">
            <a href="/" class="btn btn--primary">Back to Home</a>
            <a href="/services" class="btn btn--secondary">View Services</a>
          </div>
        </div>
      </div>

      <!-- Sidebar -->
      <aside class="contact-sidebar">
        <div class="sidebar-card sidebar-card--trust">
          <div class="sidebar-card__head">
            <svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"/><path d="M11 12 5.12 2.2"/><path d="m13 12 5.88-9.8"/><path d="M8 7h8"/><circle cx="12" cy="17" r="5"/><path d="M12 18v-2h-.5"/></svg>
            <span class="sidebar-card__head-title">Why Keeley</span>
          </div>
          <div class="sidebar-card__body">
            <div class="trust-item">
              <div class="trust-icon-wrap"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"/><path d="M14 6a6 6 0 0 1 4.37 10.08"/><path d="M5.63 16.08A6 6 0 0 1 10 6"/><path d="M2 20h20"/><path d="M4 16h16"/></svg></div>
              <div>
                <span class="trust-label">Zero OSHA recordables</span>
                <span class="trust-detail">Three consecutive years &mdash; active ISN Network certification maintained</span>
              </div>
            </div>
            <div class="trust-item">
              <div class="trust-icon-wrap"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
              <div>
                <span class="trust-label">Response within three business days</span>
                <span class="trust-detail">Every submission is reviewed &mdash; no inquiry automatically declined</span>
              </div>
            </div>
            <div class="trust-item">
              <div class="trust-icon-wrap"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="3"/><path d="m6.5 22 3.3-8.3"/><path d="m17.5 22-3.3-8.3"/><path d="M9 13.4a13 13 0 0 0 6 0"/></svg></div>
              <div>
                <span class="trust-label">Design-assist available</span>
                <span class="trust-detail">Electrical and civil &mdash; from early planning through construction</span>
              </div>
            </div>
            <div class="trust-item">
              <div class="trust-icon-wrap"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>
              <div>
                <span class="trust-label">In business since 1978</span>
                <span class="trust-detail">Family-owned, third generation &mdash; TWIC cards held by key personnel</span>
              </div>
            </div>
          </div>
        </div>

        <div class="sidebar-card">
          <div class="sidebar-card__head">
            <svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"/><path d="M21 16v2a4 4 0 0 1-4 4h-5"/></svg>
            <span class="sidebar-card__head-title">Prefer to call?</span>
          </div>
          <div class="sidebar-card__body">
            <div class="contact-row">
              <svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <a href="${PHONE_HREF}">${PHONE}</a>
            </div>
            <div class="contact-row">
              <svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <a href="mailto:${EMAIL}">${EMAIL}</a>
            </div>
            <div class="contact-row">
              <svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              <a href="${MAPS_URL}" target="_blank" rel="noopener">${LOCATION}</a>
            </div>
            <p class="text-muted" style="margin-top:.5rem;font-size:.8rem;">Mon &ndash; Fri: 7:00 AM &ndash; 4:00 PM</p>
          </div>
        </div>

        <div class="sidebar-card">
          <div class="sidebar-card__head">
            <svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
            <span class="sidebar-card__head-title">Service territory</span>
          </div>
          <div class="sidebar-card__body">
            <div class="territory-states">
              <span class="state-pill">ME</span>
              <span class="state-pill">NH</span>
              <span class="state-pill">MA</span>
            </div>
            <p class="territory-note">Licensed and actively operating in Maine, New Hampshire, and Massachusetts. Projects in other states reviewed case by case.</p>
          </div>
        </div>
      </aside>
    </div>
  </div>
</section>


`
  return layout({
    title: 'Start a Project | Keeley Electrical Contractors',
    description: 'Start your commercial or industrial electrical project. Contact Keeley Electrical Contractors in Portland, Maine. Licensed in ME, NH, MA. Response within three business days.',
    canonical: 'https://keeleyelectric.com/contact',
    jsonLd: jsonLd,
    breadcrumbs: [
      { name: 'Home', url: 'https://keeleyelectric.com/' },
      { name: 'Contact', url: 'https://keeleyelectric.com/contact' }
    ]
  }, body)
}
