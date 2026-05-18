import { layout, PHONE, PHONE_HREF, EMAIL, COMPANY } from '../components/layout'

export function applyPage(): string {
  const body = `
<!-- Page Header -->
<section class="page-header page-header--blue">
  <div class="container">
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a href="/">Home</a><span class="breadcrumb__sep" aria-hidden="true"></span><a href="/careers">Careers</a><span class="breadcrumb__sep" aria-hidden="true"></span><span class="breadcrumb__current">Apply</span>
    </nav>
    <span class="eyebrow eyebrow--light">Join the Team</span>
    <h1 class="page-header__title">Apply to Keeley</h1>
    <p class="page-header__desc">Tell us about your trade background and what you&rsquo;re looking for. We review every application and respond within three business days.</p>
  </div>
</section>

<!-- Application Form -->
<section class="section">
  <div class="container">
    <div class="contact-layout">
      <!-- Form -->
      <div class="contact-form-wrap">
        <!-- Progress Bar -->
        <div class="form-progress" id="apply-progress">
          <div class="form-progress__meta">
            <span class="form-progress__label">Completion</span>
            <span class="form-progress__pct" id="apply-progress-pct">0%</span>
          </div>
          <div class="form-progress__bar"><div class="form-progress__fill" id="apply-progress-fill" style="width:0%"></div></div>
        </div>

        <form id="apply-form" class="contact-form" novalidate>

          <!-- ═══ SECTION 1: Role ═══ -->
          <div class="form-section" id="apply-section-1">
            <div class="section-head">
              <div class="section-head__num">1</div>
              <span class="section-head__title">The role<span class="required">*</span></span>
            </div>

            <div class="field-group">
              <label class="field-label" for="f-position">Position you&rsquo;re applying for<span class="required">*</span></label>
              <select id="f-position" name="position" required>
                <option value="" disabled selected>Select a position</option>
                <optgroup label="Electrical">
                  <option value="master-electrician">Master Electrician</option>
                  <option value="journeyman-electrician">Journeyman Electrician</option>
                  <option value="apprentice-1">Apprentice Electrician &mdash; 1st Year</option>
                  <option value="apprentice-2">Apprentice Electrician &mdash; 2nd Year</option>
                  <option value="apprentice-3">Apprentice Electrician &mdash; 3rd Year</option>
                  <option value="apprentice-4">Apprentice Electrician &mdash; 4th Year</option>
                  <option value="electrical-foreman">Electrical Foreman</option>
                </optgroup>
                <optgroup label="Site Work">
                  <option value="excavator-operator">Excavator Operator</option>
                  <option value="heavy-equipment-operator">Heavy Equipment Operator</option>
                  <option value="cdl-class-a">CDL Driver (Class A)</option>
                  <option value="cdl-class-b">CDL Driver (Class B)</option>
                  <option value="site-laborer">Site Laborer</option>
                  <option value="site-foreman">Site Foreman</option>
                </optgroup>
                <optgroup label="Utility">
                  <option value="journeyman-lineman">Journeyman Lineman</option>
                  <option value="apprentice-lineman">Apprentice Lineman</option>
                  <option value="groundman">Groundman</option>
                  <option value="utility-foreman">Utility Foreman</option>
                </optgroup>
                <optgroup label="Management &amp; Office">
                  <option value="project-manager">Project Manager</option>
                  <option value="estimator">Estimator</option>
                  <option value="superintendent">Superintendent</option>
                  <option value="safety-coordinator">Safety Coordinator</option>
                </optgroup>
                <optgroup label="Other">
                  <option value="general-inquiry">General Inquiry</option>
                </optgroup>
              </select>
            </div>

            <!-- Interest Cards (multi-select) -->
            <div class="field-group" style="margin-top:1.25rem;">
              <div class="field-label">Type of work you&rsquo;re most interested in</div>
              <div class="service-grid" id="interest-grid">
                <div class="service-card" id="int-electrical" role="button" tabindex="0">
                  <div class="svc-check" aria-hidden="true"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
                  <div class="svc-icon"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg></div>
                  <span class="svc-name">Electrical</span>
                  <span class="svc-desc">Commercial wiring, industrial controls, fire alarm, generators</span>
                </div>
                <div class="service-card" id="int-sitework" role="button" tabindex="0">
                  <div class="svc-check" aria-hidden="true"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
                  <div class="svc-icon"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="16" width="18" height="4" rx="1"/><rect x="4" y="12" width="8" height="4" rx="1"/><path d="M10 12V9l6-5"/><path d="M16 4l4 3-3 2"/><circle cx="3" cy="22" r="1"/><circle cx="17" cy="22" r="1"/></svg></div>
                  <span class="svc-name">Site Work</span>
                  <span class="svc-desc">Excavation, grading, underground conduit, equipment operation</span>
                </div>
                <div class="service-card" id="int-utility" role="button" tabindex="0">
                  <div class="svc-check" aria-hidden="true"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
                  <div class="svc-icon"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/></svg></div>
                  <span class="svc-name">Utility</span>
                  <span class="svc-desc">Line work, overhead and underground, utility coordination</span>
                </div>
                <div class="service-card" id="int-any" role="button" tabindex="0">
                  <div class="svc-check" aria-hidden="true"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div>
                  <div class="svc-icon"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg></div>
                  <span class="svc-name">Open to Any</span>
                  <span class="svc-desc">Willing to work across divisions based on project needs</span>
                </div>
              </div>
              <div class="svc-summary" id="int-summary" aria-live="polite"></div>
              <input type="hidden" name="interests" id="h-interests" value="">
            </div>
          </div>

          <hr class="form-divider">

          <!-- ═══ SECTION 2: Trade Background ═══ -->
          <div class="form-section" id="apply-section-2">
            <div class="section-head">
              <div class="section-head__num">2</div>
              <span class="section-head__title">Your background</span>
            </div>

            <div class="field-group">
              <label class="field-label" for="f-experience">Years of trade experience<span class="required">*</span></label>
              <select id="f-experience" name="experience" required>
                <option value="">Select</option>
                <option value="0-2">0&ndash;2 years</option>
                <option value="3-5">3&ndash;5 years</option>
                <option value="6-10">6&ndash;10 years</option>
                <option value="11-20">11&ndash;20 years</option>
                <option value="20+">20+ years</option>
              </select>
            </div>

            <div class="field-group" style="margin-top:1.25rem;">
              <div class="field-label">License classification</div>
              <div class="radio-group">
                <label class="radio-row"><input type="radio" name="license_class" value="master"> Master Electrician</label>
                <label class="radio-row"><input type="radio" name="license_class" value="journeyman"> Journeyman</label>
                <label class="radio-row"><input type="radio" name="license_class" value="apprentice"> Apprentice</label>
                <label class="radio-row"><input type="radio" name="license_class" value="helper"> Helper</label>
                <label class="radio-row"><input type="radio" name="license_class" value="not-licensed"> Not yet licensed</label>
                <label class="radio-row"><input type="radio" name="license_class" value="other" id="license-other-radio"> Other</label>
              </div>
              <div id="license-other-wrap" style="display:none;margin-top:.5rem;">
                <input type="text" name="license_other" placeholder="Describe your license or certification">
              </div>
            </div>

            <div class="field-group" style="margin-top:1.25rem;">
              <div class="field-label">States licensed in</div>
              <div class="check-group">
                <label class="check-row"><input type="checkbox" name="states_licensed" value="ME"> Maine</label>
                <label class="check-row"><input type="checkbox" name="states_licensed" value="NH"> New Hampshire</label>
                <label class="check-row"><input type="checkbox" name="states_licensed" value="MA"> Massachusetts</label>
                <label class="check-row"><input type="checkbox" name="states_licensed" value="other"> Other</label>
              </div>
            </div>

            <div class="field-group" style="margin-top:1.25rem;">
              <div class="field-label">Currently employed</div>
              <div class="pill-toggle" id="employed-toggle">
                <label class="pill-toggle__option">
                  <svg class="pill-toggle__check" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                  <input type="radio" name="currently_employed" value="yes">
                  <span class="pill-toggle__label">Yes</span>
                </label>
                <label class="pill-toggle__option">
                  <svg class="pill-toggle__check" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                  <input type="radio" name="currently_employed" value="no">
                  <span class="pill-toggle__label">No</span>
                </label>
              </div>
            </div>
          </div>

          <hr class="form-divider">

          <!-- ═══ SECTION 3: Contact Information ═══ -->
          <div class="form-section" id="apply-section-3">
            <div class="section-head">
              <div class="section-head__num">3</div>
              <span class="section-head__title">How to reach you</span>
            </div>
            <div class="field-row">
              <div class="field-group">
                <label class="field-label" for="f-apply-firstname">First name<span class="required">*</span></label>
                <input type="text" id="f-apply-firstname" name="first_name" required>
              </div>
              <div class="field-group">
                <label class="field-label" for="f-apply-lastname">Last name<span class="required">*</span></label>
                <input type="text" id="f-apply-lastname" name="last_name" required>
              </div>
            </div>
            <div class="field-row">
              <div class="field-group">
                <label class="field-label" for="f-apply-phone">Phone<span class="required">*</span></label>
                <input type="tel" id="f-apply-phone" name="phone" required>
              </div>
              <div class="field-group">
                <label class="field-label" for="f-apply-email">Email<span class="required">*</span></label>
                <input type="email" id="f-apply-email" name="email" required>
              </div>
            </div>
            <div class="field-row">
              <div class="field-group">
                <label class="field-label" for="f-apply-city">City / Town<span class="required">*</span></label>
                <input type="text" id="f-apply-city" name="city" required>
              </div>
              <div class="field-group">
                <label class="field-label" for="f-apply-state">State<span class="required">*</span></label>
                <select id="f-apply-state" name="state" required>
                  <option value="">Select</option>
                  <option value="ME">Maine</option>
                  <option value="NH">New Hampshire</option>
                  <option value="MA">Massachusetts</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>

          <hr class="form-divider">

          <!-- ═══ SECTION 4: Resume & Message ═══ -->
          <div class="form-section" id="apply-section-4">
            <div class="section-head">
              <div class="section-head__num">4</div>
              <span class="section-head__title">Resume and message</span>
            </div>

            <div class="field-group">
              <label class="field-label">Resume &amp; Cover Letter<span class="required">*</span></label>
              <p class="field-hint" style="margin-top:0;margin-bottom:.5rem;">Upload your resume. A cover letter is optional but welcome.</p>
              <div class="dropzone" id="resume-dropzone" role="button" tabindex="0" aria-label="Drag and drop files or tap to upload">
                <input type="file" id="f-resume" name="resume" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" multiple class="dropzone__input">
                <div class="dropzone__content">
                  <svg class="dropzone__icon" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                  <span class="dropzone__label">Drag &amp; drop files here, or <span class="dropzone__browse">browse</span></span>
                  <span class="dropzone__hint">Up to 2 files, 10 MB each &middot; PDF, DOC, DOCX</span>
                </div>
              </div>
              <div id="resume-list" class="attachment-list"></div>
            </div>

            <div class="field-group" style="margin-top:1.25rem;">
              <label class="field-label" for="f-apply-message">Cover letter or message</label>
              <textarea id="f-apply-message" name="message" rows="6" placeholder="What kind of work are you looking for? Why Keeley?"></textarea>
            </div>

            <div class="field-group" style="margin-top:1.25rem;">
              <label class="check-row"><input type="checkbox" name="work_authorized" required> I am legally authorized to work in the United States.<span class="required">*</span></label>
            </div>

            <div class="field-group" style="margin-top:.75rem;">
              <label class="check-row"><input type="checkbox" name="referral_check" id="apply-referral-check"> Someone referred me to Keeley</label>
              <div id="apply-referral-wrap" style="display:none;margin-top:.5rem;">
                <input type="text" name="referral_source" placeholder="Name of the person who referred you">
              </div>
            </div>
          </div>

          <!-- Submit -->
          <button type="submit" class="btn btn--primary btn--lg form-submit-btn" id="apply-btn-submit">
            Submit Application <svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </button>
          <p class="form-disclaimer">We review every application. Confidential review by our hiring manager.<br>Response within three business days.</p>
        </form>

        <!-- Thank You -->
        <div id="apply-thank-you" class="thank-you" style="display:none;">
          <div class="thank-you__icon"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg></div>
          <h2 class="h2">Thanks for Applying.</h2>
          <p>Our hiring manager will review your application and follow up within three business days. If your background is a strong match for current openings, expect a call or email at the contact info you provided.</p>
          <div class="thank-you__steps">
            <div class="thank-you__step">
              <span class="thank-you__step-num">1</span>
              <div>
                <strong>Review</strong>
                <p>Your application is reviewed by our hiring manager and matched against current openings and upcoming project needs.</p>
              </div>
            </div>
            <div class="thank-you__step">
              <span class="thank-you__step-num">2</span>
              <div>
                <strong>Follow-up</strong>
                <p>If your background is a match, we&rsquo;ll reach out within three business days to discuss the role and next steps.</p>
              </div>
            </div>
            <div class="thank-you__step">
              <span class="thank-you__step-num">3</span>
              <div>
                <strong>Interview</strong>
                <p>Qualified candidates meet with the project team. We keep the process straightforward and move quickly.</p>
              </div>
            </div>
          </div>
          <div style="margin-top:2rem;display:flex;gap:1rem;flex-wrap:wrap;">
            <a href="/" class="btn btn--primary">Back to Home</a>
            <a href="/careers" class="btn btn--secondary">View Careers</a>
          </div>
        </div>
      </div>

      <!-- Sidebar -->
      <aside class="contact-sidebar">
        <div class="sidebar-card sidebar-card--trust">
          <div class="sidebar-card__head">
            <svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            <span class="sidebar-card__head-title">Why work at Keeley</span>
          </div>
          <div class="sidebar-card__body">
            <div class="trust-item">
              <div class="trust-icon-wrap"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>
              <div>
                <span class="trust-label">Family-owned since 1978</span>
                <span class="trust-detail">Third generation &mdash; we know our people by name</span>
              </div>
            </div>
            <div class="trust-item">
              <div class="trust-icon-wrap"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"/><path d="M14 6a6 6 0 0 1 4.37 10.08"/><path d="M5.63 16.08A6 6 0 0 1 10 6"/><path d="M2 20h20"/><path d="M4 16h16"/></svg></div>
              <div>
                <span class="trust-label">Zero OSHA recordables</span>
                <span class="trust-detail">Three consecutive years &mdash; safety is non-negotiable</span>
              </div>
            </div>
            <div class="trust-item">
              <div class="trust-icon-wrap"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg></div>
              <div>
                <span class="trust-label">Competitive benefits</span>
                <span class="trust-detail">Health, dental, retirement, paid time off, and ongoing training</span>
              </div>
            </div>
            <div class="trust-item">
              <div class="trust-icon-wrap"><svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg></div>
              <div>
                <span class="trust-label">Steady, year-round work</span>
                <span class="trust-detail">Diverse project pipeline across three states</span>
              </div>
            </div>
          </div>
        </div>

        <div class="sidebar-card">
          <div class="sidebar-card__head">
            <svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"/><path d="M21 16v2a4 4 0 0 1-4 4h-5"/></svg>
            <span class="sidebar-card__head-title">Questions?</span>
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
            <p class="text-muted" style="margin-top:.5rem;font-size:.8rem;">Mon &ndash; Fri: 7:00 AM &ndash; 4:00 PM</p>
          </div>
        </div>
      </aside>
    </div>
  </div>
</section>
`

  return layout({
    title: 'Apply to Keeley | Careers',
    description: 'Apply for opportunities at Keeley Electrical Contractors. Trades, site work, utility, and project management roles across Maine, New Hampshire, and Massachusetts.',
    canonical: 'https://keeleyelectric.com/careers/apply',
    breadcrumbs: [
      { name: 'Home', url: 'https://keeleyelectric.com/' },
      { name: 'Careers', url: 'https://keeleyelectric.com/careers' },
      { name: 'Apply', url: 'https://keeleyelectric.com/careers/apply' }
    ]
  }, body)
}
