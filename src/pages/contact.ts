import { layout, PHONE, PHONE_HREF, EMAIL, COMPANY, LOCATION } from '../components/layout'

export function contactPage(): string {
  const jsonLd = `<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": COMPANY,
    "telephone": PHONE,
    "email": EMAIL,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "18 Caddie Ln",
      "addressLocality": "Portland",
      "addressRegion": "ME",
      "postalCode": "04103",
      "addressCountry": "US"
    },
    "url": "https://keeleyelectrical.com",
    "foundingDate": "1978",
    "areaServed": ["Maine", "New Hampshire", "Massachusetts"]
  })}</script>`

  const body = `
<!-- Page Header -->
<section class="page-header page-header--blue">
  <div class="container">
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a href="/">Home</a> <span>/</span> <span class="breadcrumb__current">Contact</span>
    </nav>
    <span class="eyebrow eyebrow--light">Project Inquiry</span>
    <h1 class="page-header__title">Start a Conversation.</h1>
    <p class="page-header__desc">Tell us what you're working on. We'll route your inquiry to the right person and follow up within one business day.</p>
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

            <!-- Service Type Cards -->
            <div class="service-grid" id="service-grid">
              <div class="service-card" id="svc-electrical" role="button" tabindex="0">
                <div class="svc-icon"><i class="fas fa-bolt"></i></div>
                <span class="svc-name">Electrical</span>
                <span class="svc-desc">Commercial, industrial, design-build, generators, fire alarm, medium voltage</span>
              </div>
              <div class="service-card" id="svc-sitework" role="button" tabindex="0">
                <div class="svc-icon"><i class="fas fa-truck-pickup"></i></div>
                <span class="svc-name">Site Work</span>
                <span class="svc-desc">Excavation, grading, underground conduit, site lighting, civil earthwork</span>
              </div>
              <div class="service-card" id="svc-utility" role="button" tabindex="0">
                <div class="svc-icon"><i class="fas fa-plug-circle-bolt"></i></div>
                <span class="svc-name">Utility</span>
                <span class="svc-desc">Primary line extensions, overhead and underground, utility coordination</span>
              </div>
            </div>
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
                  <div class="utility-alert__icon"><i class="fas fa-circle-info"></i></div>
                  <div class="utility-alert__title">Utility coordination is required before your project can move forward.</div>
                </div>
                <div class="utility-alert__body">
                  <p>Before construction can begin on a utility project, most clients need to complete one or more steps directly with their utility provider. This is standard &mdash; it protects your budget and timeline. We guide clients through this process regularly and can help once you submit your inquiry.</p>

                  <div class="edu-block">
                    <div class="edu-block__title"><i class="fas fa-file-lines"></i> CMP customers &mdash; CIAC cost allocation</div>
                    <p>The Contribution in Aid of Construction (CIAC) is CMP's process for extending primary utility service to new developments. Keeley guides clients through the application, engineering review, and construction phases.</p>
                    <p>The process works like this: a contractor submits a proposal, CMP schedules a field planner appointment, a hand sketch is produced, and Keeley prices against that scope. None of this can begin without CMP's involvement &mdash; which is why initiating the work order early matters.</p>
                    <a href="https://www.cmpco.com/en/for-your-home/new-service/line-extensions" target="_blank" rel="noopener" class="edu-link">CMP line extension information <i class="fas fa-arrow-up-right-from-square"></i></a>
                  </div>

                  <div class="edu-block">
                    <div class="edu-block__title"><i class="fas fa-file-lines"></i> Portland Water District &mdash; ability to serve</div>
                    <p>If your project is in Portland Water District territory and involves any water service connection, PWD requires you to submit project sketches and receive an official <strong>ability-to-serve letter</strong> before design work can be priced or started.</p>
                    <p>Without it, neither Keeley nor any other contractor can provide an accurate proposal &mdash; and the project cannot move through the permit process.</p>
                    <a href="https://www.pwd.org/development-services" target="_blank" rel="noopener" class="edu-link">Portland Water District development services <i class="fas fa-arrow-up-right-from-square"></i></a>
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
                <label class="field-label" for="f-address">Project / service address</label>
                <input type="text" id="f-address" name="address" placeholder="123 Industrial Dr, Portland, ME">
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
                <label class="field-label" for="f-gc">General contractor already involved?</label>
                <select id="f-gc" name="gc_involved">
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No &mdash; Keeley would be prime</option>
                  <option value="tbd">TBD</option>
                </select>
              </div>
            </div>
            <div class="field-row">
              <div class="field-group">
                <label class="field-label" for="f-contract">Preferred contract type</label>
                <select id="f-contract" name="contract_type">
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
                <label class="field-label" for="f-description">Project description</label>
                <textarea id="f-description" name="description" rows="5" placeholder="Scope, location, timeline, and any context that helps us understand the project..."></textarea>
                <p class="field-hint">The more context you share, the faster we can respond with something useful.</p>
              </div>
            </div>
            <div class="field-row field-row--full">
              <div class="field-group">
                <label class="field-label" for="f-financing">Financing status</label>
                <select id="f-financing" name="financing">
                  <option value="">Select</option>
                  <option value="secured">Financing secured &mdash; ready to proceed</option>
                  <option value="inprogress">Financing in progress</option>
                  <option value="budgeting">Still in budgeting or estimating phase</option>
                  <option value="na">Not applicable</option>
                </select>
                <p class="field-hint">Optional &mdash; helps us scope our response appropriately.</p>
              </div>
            </div>
            <div class="field-row field-row--full">
              <div class="field-group">
                <label class="field-label">How did you hear about Keeley?</label>
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
            Submit Project Inquiry <i class="fas fa-arrow-right"></i>
          </button>
          <p class="form-disclaimer">We review every submission. No inquiry is automatically declined.<br>Response within one business day &mdash; often same day.</p>
        </form>

        <!-- Thank You -->
        <div id="thank-you" class="thank-you" style="display:none;">
          <div class="thank-you__icon"><i class="fas fa-check-circle"></i></div>
          <h2 class="h2">Inquiry Received.</h2>
          <p>Your project inquiry has been submitted. We review every submission personally and will follow up within one business day &mdash; often same day.</p>
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
                <p>We'll reach out directly &mdash; typically within one business day &mdash; to discuss your project and next steps.</p>
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
            <i class="fas fa-medal"></i>
            <span class="sidebar-card__head-title">Why Keeley</span>
          </div>
          <div class="sidebar-card__body">
            <div class="trust-item">
              <div class="trust-icon-wrap"><i class="fas fa-hard-hat"></i></div>
              <div>
                <span class="trust-label">Zero OSHA recordables</span>
                <span class="trust-detail">Three consecutive years &mdash; active ISN Network certification maintained</span>
              </div>
            </div>
            <div class="trust-item">
              <div class="trust-icon-wrap"><i class="fas fa-clock"></i></div>
              <div>
                <span class="trust-label">One business day response</span>
                <span class="trust-detail">Every submission is reviewed &mdash; no inquiry automatically declined</span>
              </div>
            </div>
            <div class="trust-item">
              <div class="trust-icon-wrap"><i class="fas fa-compass-drafting"></i></div>
              <div>
                <span class="trust-label">Design-assist available</span>
                <span class="trust-detail">Electrical and civil &mdash; from early planning through construction</span>
              </div>
            </div>
            <div class="trust-item">
              <div class="trust-icon-wrap"><i class="fas fa-house-chimney"></i></div>
              <div>
                <span class="trust-label">In business since 1978</span>
                <span class="trust-detail">Family-owned, third generation &mdash; TWIC cards held by key personnel</span>
              </div>
            </div>
          </div>
        </div>

        <div class="sidebar-card">
          <div class="sidebar-card__head">
            <i class="fas fa-headset"></i>
            <span class="sidebar-card__head-title">Prefer to call?</span>
          </div>
          <div class="sidebar-card__body">
            <div class="contact-row">
              <i class="fas fa-phone"></i>
              <a href="${PHONE_HREF}">${PHONE}</a>
            </div>
            <div class="contact-row">
              <i class="fas fa-envelope"></i>
              <a href="mailto:${EMAIL}">${EMAIL}</a>
            </div>
            <div class="contact-row">
              <i class="fas fa-map-marker-alt"></i>
              <a href="https://www.google.com/maps/search/?api=1&query=18+Caddie+Ln+Portland+ME+04103" target="_blank" rel="noopener">${LOCATION}</a>
            </div>
            <p class="text-muted" style="margin-top:.5rem;font-size:.8rem;">Mon &ndash; Fri: 7:00 AM &ndash; 4:00 PM</p>
          </div>
        </div>

        <div class="sidebar-card">
          <div class="sidebar-card__head">
            <i class="fas fa-map-location-dot"></i>
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

<!-- Trust Bar -->
<section class="section section--surface" style="padding-top:2rem;padding-bottom:2rem;">
  <div class="container">
    <div class="cert-grid cert-grid--center">
      <div class="cert-badge">
        <div class="cert-badge__icon cert-badge__icon--gold"><i class="fas fa-shield-halved"></i></div>
        <div><strong>ISN Certified</strong><br><span class="text-muted">Active Contractor</span></div>
      </div>
      <div class="cert-badge">
        <div class="cert-badge__icon cert-badge__icon--blue"><i class="fas fa-id-card"></i></div>
        <div><strong>TWIC Cards</strong><br><span class="text-muted">Key Personnel</span></div>
      </div>
      <div class="cert-badge">
        <div class="cert-badge__icon cert-badge__icon--green"><i class="fas fa-award"></i></div>
        <div><strong>Zero OSHA</strong><br><span class="text-muted">3 Consecutive Years</span></div>
      </div>
      <div class="cert-badge">
        <div class="cert-badge__icon cert-badge__icon--gold"><i class="fas fa-certificate"></i></div>
        <div><strong>3 States</strong><br><span class="text-muted">ME &middot; NH &middot; MA</span></div>
      </div>
    </div>
  </div>
</section>
`
  return layout({
    title: 'Start a Project | Keeley Electrical Contractors',
    description: 'Start your commercial or industrial electrical project. Contact Keeley Electrical Contractors in Portland, Maine. Licensed in ME, NH, MA. One business day response.',
    canonical: 'https://keeleyelectrical.com/contact',
    jsonLd: jsonLd,
    breadcrumbs: [
      { name: 'Home', url: 'https://keeleyelectrical.com/' },
      { name: 'Contact', url: 'https://keeleyelectrical.com/contact' }
    ]
  }, body)
}
