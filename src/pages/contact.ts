import { layout, PHONE, PHONE_HREF, EMAIL, COMPANY } from '../components/layout'

export function contactPage(): string {
  const jsonLd = `<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": COMPANY,
    "telephone": PHONE,
    "email": EMAIL,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Portland",
      "addressRegion": "ME",
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
    <span class="eyebrow eyebrow--light">Get In Touch</span>
    <h1 class="page-header__title">Let's Talk About Your Project</h1>
    <p class="page-header__desc">Tell us about your project and we'll respond within one business day. Commercial, industrial, and utility inquiries welcome.</p>
  </div>
</section>

<!-- Main Contact Area -->
<section class="section">
  <div class="container">
    <div class="contact-layout">
      <!-- Form -->
      <div class="contact-form-wrap">
        <h2 class="h2" style="margin-bottom:.5rem;">Project Inquiry Form</h2>
        <p class="text-muted" style="margin-bottom:1.5rem;">Complete the form below and we'll get back to you within one business day.</p>

        <!-- Progress Bar -->
        <div class="form-progress" id="form-progress">
          <div class="form-progress__bar"><div class="form-progress__fill" id="progress-fill" style="width:0%"></div></div>
          <span class="form-progress__text" id="progress-text">0% complete</span>
        </div>

        <!-- Step Indicator -->
        <div class="step-indicator" id="step-indicator">
          <div class="step-indicator__step step-indicator__step--active" data-step="1">
            <span class="step-indicator__num">1</span>
            <span class="step-indicator__label">Service Type</span>
          </div>
          <div class="step-indicator__step" data-step="2">
            <span class="step-indicator__num">2</span>
            <span class="step-indicator__label">Your Info</span>
          </div>
          <div class="step-indicator__step" data-step="3">
            <span class="step-indicator__num">3</span>
            <span class="step-indicator__label">Project Details</span>
          </div>
        </div>

        <form id="contact-form" class="contact-form" novalidate>
          <!-- STEP 1: Service Type -->
          <div class="form-step form-step--active" id="step-1">
            <h3 class="form-step__title">What type of service do you need?</h3>

            <!-- Service Type Cards -->
            <div class="service-select" id="service-select">
              <label class="service-select__card">
                <input type="radio" name="service_type" value="electrical">
                <div class="service-select__inner">
                  <i class="fas fa-bolt"></i>
                  <strong>Electrical</strong>
                  <span>Commercial &amp; Industrial</span>
                </div>
              </label>
              <label class="service-select__card">
                <input type="radio" name="service_type" value="site-work">
                <div class="service-select__inner">
                  <i class="fas fa-truck-pickup"></i>
                  <strong>Site Work</strong>
                  <span>Excavation &amp; Lighting</span>
                </div>
              </label>
              <label class="service-select__card">
                <input type="radio" name="service_type" value="utility">
                <div class="service-select__inner">
                  <i class="fas fa-plug-circle-bolt"></i>
                  <strong>Utility</strong>
                  <span>Line Work &amp; Coordination</span>
                </div>
              </label>
            </div>

            <!-- Conditional: Electrical sub-services -->
            <div class="conditional-section" id="cond-electrical" style="display:none;">
              <h4>Electrical services needed:</h4>
              <div class="checkbox-grid">
                <label class="form-check"><input type="checkbox" name="sub_electrical" value="new-construction"> New Construction</label>
                <label class="form-check"><input type="checkbox" name="sub_electrical" value="renovation"> Renovation / Tenant Fit-Out</label>
                <label class="form-check"><input type="checkbox" name="sub_electrical" value="design-build"> Design-Build / Design-Assist</label>
                <label class="form-check"><input type="checkbox" name="sub_electrical" value="generators"> Generators / Emergency Power</label>
                <label class="form-check"><input type="checkbox" name="sub_electrical" value="fire-alarm"> Fire Alarm Systems</label>
                <label class="form-check"><input type="checkbox" name="sub_electrical" value="medium-voltage"> Medium Voltage</label>
                <label class="form-check"><input type="checkbox" name="sub_electrical" value="service-upgrade"> Service Upgrades</label>
                <label class="form-check"><input type="checkbox" name="sub_electrical" value="lighting"> Lighting / Power Distribution</label>
              </div>
            </div>

            <!-- Conditional: Site Work sub-services -->
            <div class="conditional-section" id="cond-site-work" style="display:none;">
              <h4>Site work services needed:</h4>
              <div class="checkbox-grid">
                <label class="form-check"><input type="checkbox" name="sub_sitework" value="excavation"> Excavation &amp; Grading</label>
                <label class="form-check"><input type="checkbox" name="sub_sitework" value="conduit"> Underground Conduit</label>
                <label class="form-check"><input type="checkbox" name="sub_sitework" value="parking-lighting"> Parking Lot Lighting</label>
                <label class="form-check"><input type="checkbox" name="sub_sitework" value="perimeter-lighting"> Perimeter / Security Lighting</label>
                <label class="form-check"><input type="checkbox" name="sub_sitework" value="roadway-lighting"> Roadway Lighting</label>
                <label class="form-check"><input type="checkbox" name="sub_sitework" value="earthwork"> Civil Earthwork</label>
              </div>
            </div>

            <!-- Conditional: Utility sub-services -->
            <div class="conditional-section" id="cond-utility" style="display:none;">
              <h4>Utility services needed:</h4>
              <div class="checkbox-grid">
                <label class="form-check"><input type="checkbox" name="sub_utility" value="aerial-line"> Aerial Line Extension</label>
                <label class="form-check"><input type="checkbox" name="sub_utility" value="underground-line"> Underground Line Extension</label>
                <label class="form-check"><input type="checkbox" name="sub_utility" value="energized"> Energized Line Work</label>
                <label class="form-check"><input type="checkbox" name="sub_utility" value="de-energized"> De-Energized Line Work</label>
                <label class="form-check"><input type="checkbox" name="sub_utility" value="cmp-coord"> CMP Coordination</label>
                <label class="form-check"><input type="checkbox" name="sub_utility" value="ciac"> CIAC Process Guidance</label>
              </div>

              <!-- Utility Education Blocks -->
              <div class="utility-info">
                <div class="utility-info__card">
                  <h4><i class="fas fa-info-circle"></i> CMP CIAC Process</h4>
                  <p>The Contribution in Aid of Construction (CIAC) is CMP's process for extending primary utility service to new developments. Keeley guides clients through the application, engineering review, and construction phases.</p>
                </div>
                <div class="utility-info__card">
                  <h4><i class="fas fa-info-circle"></i> Portland Water District</h4>
                  <p>Projects requiring coordination with Portland Water District for water/sewer infrastructure benefit from Keeley's established relationships and understanding of PWD permitting requirements.</p>
                </div>
              </div>
            </div>

            <!-- Project Size -->
            <h4 style="margin-top:1.5rem;">Estimated project size:</h4>
            <div class="size-select" id="size-select">
              <label class="size-select__card">
                <input type="radio" name="project_size" value="small">
                <div class="size-select__inner">
                  <strong>Small</strong>
                  <span>Under $25K</span>
                </div>
              </label>
              <label class="size-select__card">
                <input type="radio" name="project_size" value="medium-plus">
                <div class="size-select__inner">
                  <strong>Medium+</strong>
                  <span>$25K and above</span>
                </div>
              </label>
            </div>

            <button type="button" class="btn btn--primary btn--lg form-nav-btn" id="btn-next-1" style="width:100%;margin-top:1.5rem;" disabled>Continue to Your Info <i class="fas fa-arrow-right"></i></button>
          </div>

          <!-- STEP 2: Contact Info -->
          <div class="form-step" id="step-2">
            <h3 class="form-step__title">Your Contact Information</h3>
            <div class="form-row">
              <div class="form-group">
                <label for="f-name">Full Name <span class="required">*</span></label>
                <input type="text" id="f-name" name="name" required placeholder="John Smith">
                <span class="form-check-icon" id="check-name"><i class="fas fa-check-circle"></i></span>
              </div>
              <div class="form-group">
                <label for="f-company">Company <span class="required">*</span></label>
                <input type="text" id="f-company" name="company" required placeholder="Acme Construction">
                <span class="form-check-icon" id="check-company"><i class="fas fa-check-circle"></i></span>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="f-email">Email <span class="required">*</span></label>
                <input type="email" id="f-email" name="email" required placeholder="john@acme.com">
                <span class="form-check-icon" id="check-email"><i class="fas fa-check-circle"></i></span>
              </div>
              <div class="form-group">
                <label for="f-phone">Phone <span class="required">*</span></label>
                <input type="tel" id="f-phone" name="phone" required placeholder="(207) 555-0100">
                <span class="form-check-icon" id="check-phone"><i class="fas fa-check-circle"></i></span>
              </div>
            </div>
            <div class="form-group">
              <label>Are you a returning Keeley client?</label>
              <div class="radio-row">
                <label class="form-radio"><input type="radio" name="returning" value="yes"> Yes</label>
                <label class="form-radio"><input type="radio" name="returning" value="no"> No</label>
                <label class="form-radio"><input type="radio" name="returning" value="not-sure"> Not Sure</label>
              </div>
            </div>
            <div class="form-step__nav">
              <button type="button" class="btn btn--secondary form-nav-btn" id="btn-back-2"><i class="fas fa-arrow-left"></i> Back</button>
              <button type="button" class="btn btn--primary form-nav-btn" id="btn-next-2" disabled>Continue to Project Details <i class="fas fa-arrow-right"></i></button>
            </div>
          </div>

          <!-- STEP 3: Project Details -->
          <div class="form-step" id="step-3">
            <h3 class="form-step__title">Project Details</h3>
            <div class="form-row">
              <div class="form-group">
                <label for="f-address">Project Address</label>
                <input type="text" id="f-address" name="address" placeholder="123 Main St, Portland, ME">
              </div>
              <div class="form-group">
                <label for="f-state">State</label>
                <select id="f-state" name="state">
                  <option value="">Select state...</option>
                  <option value="ME">Maine</option>
                  <option value="NH">New Hampshire</option>
                  <option value="MA">Massachusetts</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="f-timeline">Project Timeline</label>
                <select id="f-timeline" name="timeline">
                  <option value="">Select timeline...</option>
                  <option value="immediate">Immediate (within 30 days)</option>
                  <option value="1-3-months">1 &ndash; 3 Months</option>
                  <option value="3-6-months">3 &ndash; 6 Months</option>
                  <option value="6-12-months">6 &ndash; 12 Months</option>
                  <option value="planning">Still in planning</option>
                </select>
              </div>
              <div class="form-group">
                <label for="f-contract">Contract Type</label>
                <select id="f-contract" name="contract_type">
                  <option value="">Select type...</option>
                  <option value="competitive-bid">Competitive Bid</option>
                  <option value="negotiated">Negotiated</option>
                  <option value="design-build">Design-Build</option>
                  <option value="t-and-m">Time &amp; Material</option>
                  <option value="not-sure">Not Sure</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label>Is a General Contractor involved?</label>
              <div class="radio-row">
                <label class="form-radio"><input type="radio" name="gc_involved" value="yes"> Yes</label>
                <label class="form-radio"><input type="radio" name="gc_involved" value="no"> No — direct to owner</label>
                <label class="form-radio"><input type="radio" name="gc_involved" value="tbd"> TBD</label>
              </div>
            </div>
            <div class="form-group">
              <label for="f-description">Project Description <span class="required">*</span></label>
              <textarea id="f-description" name="description" rows="5" required placeholder="Tell us about your project scope, location, and any relevant details..."></textarea>
            </div>
            <div class="form-group">
              <label>Is financing in place for this project?</label>
              <div class="radio-row">
                <label class="form-radio"><input type="radio" name="financing" value="yes"> Yes</label>
                <label class="form-radio"><input type="radio" name="financing" value="no"> No</label>
                <label class="form-radio"><input type="radio" name="financing" value="in-progress"> In Progress</label>
              </div>
            </div>

            <!-- Referral Source -->
            <div class="form-group">
              <label>How did you hear about Keeley?</label>
              <div class="checkbox-grid checkbox-grid--sm">
                <label class="form-check"><input type="checkbox" name="referral" value="google"> Google Search</label>
                <label class="form-check"><input type="checkbox" name="referral" value="referral"> Referral</label>
                <label class="form-check"><input type="checkbox" name="referral" value="repeat"> Repeat Client</label>
                <label class="form-check"><input type="checkbox" name="referral" value="isn"> ISN / Prequalification</label>
                <label class="form-check"><input type="checkbox" name="referral" value="other"> Other</label>
              </div>
              <div id="referral-detail-wrap" style="display:none;margin-top:.5rem;">
                <input type="text" name="referral_detail" placeholder="Please specify...">
              </div>
            </div>

            <!-- Terms -->
            <div class="form-group">
              <label class="form-check form-check--terms">
                <input type="checkbox" name="terms" id="f-terms" required>
                I agree to the <a href="/terms" target="_blank">Terms &amp; Conditions</a>
              </label>
            </div>

            <div class="form-step__nav">
              <button type="button" class="btn btn--secondary form-nav-btn" id="btn-back-3"><i class="fas fa-arrow-left"></i> Back</button>
              <button type="submit" class="btn btn--primary btn--lg form-nav-btn" id="btn-submit">Send Project Inquiry <i class="fas fa-paper-plane"></i></button>
            </div>
          </div>
        </form>

        <!-- Thank You -->
        <div id="thank-you" class="thank-you" style="display:none;">
          <div class="thank-you__icon"><i class="fas fa-check-circle"></i></div>
          <h2 class="h2">Thank You!</h2>
          <p>Your project inquiry has been received. Here's what happens next:</p>
          <div class="thank-you__steps">
            <div class="thank-you__step">
              <span class="thank-you__step-num">1</span>
              <div>
                <strong>We Review</strong>
                <p>Our team reviews your inquiry and assigns it to the right division.</p>
              </div>
            </div>
            <div class="thank-you__step">
              <span class="thank-you__step-num">2</span>
              <div>
                <strong>We Respond</strong>
                <p>Expect a call or email within one business day.</p>
              </div>
            </div>
            <div class="thank-you__step">
              <span class="thank-you__step-num">3</span>
              <div>
                <strong>We Scope</strong>
                <p>We'll schedule a site visit or call to discuss your project in detail.</p>
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
        <div class="sidebar-card">
          <h3 class="sidebar-card__title">Why Keeley?</h3>
          <ul class="sidebar-trust-list sidebar-trust-list--dark">
            <li><i class="fas fa-check-circle"></i> ISN Network Certified</li>
            <li><i class="fas fa-check-circle"></i> Zero OSHA Recordables (3 Yrs)</li>
            <li><i class="fas fa-check-circle"></i> Family-Owned Since 1978</li>
            <li><i class="fas fa-check-circle"></i> 900+ Projects Completed</li>
            <li><i class="fas fa-check-circle"></i> 1-Day Response Guarantee</li>
            <li><i class="fas fa-check-circle"></i> Design-Assist Available</li>
          </ul>
        </div>

        <div class="sidebar-card">
          <h3 class="sidebar-card__title">Call or Text</h3>
          <a href="${PHONE_HREF}" class="sidebar-phone">
            <div class="sidebar-phone__icon"><i class="fas fa-phone"></i></div>
            <span>${PHONE}</span>
          </a>
          <p class="text-muted" style="margin-top:.5rem;font-size:.85rem;">Mon &ndash; Fri: 7:00 AM &ndash; 4:00 PM</p>
        </div>

        <div class="sidebar-card">
          <h3 class="sidebar-card__title">Email</h3>
          <a href="mailto:${EMAIL}" class="sidebar-email"><i class="fas fa-envelope"></i> ${EMAIL}</a>
        </div>

        <div class="sidebar-card">
          <h3 class="sidebar-card__title">Service Territory</h3>
          <div class="footer__territory" style="margin-top:.5rem;">
            <span class="pill">ME</span>
            <span class="pill">NH</span>
            <span class="pill">MA</span>
          </div>
        </div>

        <div class="sidebar-card sidebar-card--emergency">
          <h3 style="color:#fff;font-family:var(--ff-head);font-weight:700;margin-bottom:.5rem;">Emergency Service</h3>
          <p style="color:rgba(255,255,255,.8);font-size:.9rem;margin-bottom:1rem;">24/7 emergency electrical service available for commercial and industrial clients.</p>
          <a href="${PHONE_HREF}" class="btn btn--primary" style="width:100%;text-align:center;">Emergency: Call Now</a>
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
    title: 'Contact Us | Keeley Electrical Contractors',
    description: 'Start your commercial or industrial electrical project. Contact Keeley Electrical Contractors in Portland, Maine. Licensed in ME, NH, MA. One business day response.',
    canonical: 'https://keeleyelectrical.com/contact',
    jsonLd: jsonLd,
    breadcrumbs: [
      { name: 'Home', url: 'https://keeleyelectrical.com/' },
      { name: 'Contact', url: 'https://keeleyelectrical.com/contact' }
    ]
  }, body)
}
