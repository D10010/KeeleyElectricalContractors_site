/* ═══════════════════════════════════════════════════════
   KEELEY ELECTRICAL CONTRACTORS — Client-Side JS
   ═══════════════════════════════════════════════════════ */

(function() {
  'use strict';

  // ── Mobile Nav ──
  const hamburger = document.getElementById('nav-hamburger');
  const drawer = document.getElementById('mobile-drawer');
  if (hamburger && drawer) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      drawer.classList.toggle('active');
      document.body.style.overflow = drawer.classList.contains('active') ? 'hidden' : '';
    });
    // Close on link click
    drawer.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', function() {
        hamburger.classList.remove('active');
        drawer.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // ── Active Nav Link ──
  var path = window.location.pathname;
  document.querySelectorAll('.nav__link').forEach(function(link) {
    var href = link.getAttribute('href');
    if (path === href || (href !== '/' && path.startsWith(href))) {
      link.classList.add('active');
    }
  });

  // ── Scroll to Top ──
  var scrollBtn = document.getElementById('scroll-top');
  if (scrollBtn) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 400) {
        scrollBtn.classList.add('visible');
      } else {
        scrollBtn.classList.remove('visible');
      }
    });
    scrollBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ══════════════════════════════════════════
  // CONTACT FORM — Multi-step with validation
  // ══════════════════════════════════════════
  var form = document.getElementById('contact-form');
  if (!form) return;

  var currentStep = 1;
  var totalSteps = 3;

  // Elements
  var steps = [
    document.getElementById('step-1'),
    document.getElementById('step-2'),
    document.getElementById('step-3')
  ];
  var indicators = document.querySelectorAll('.step-indicator__step');
  var progressFill = document.getElementById('progress-fill');
  var progressText = document.getElementById('progress-text');
  var thankYou = document.getElementById('thank-you');

  // Buttons
  var btnNext1 = document.getElementById('btn-next-1');
  var btnNext2 = document.getElementById('btn-next-2');
  var btnBack2 = document.getElementById('btn-back-2');
  var btnBack3 = document.getElementById('btn-back-3');
  var btnSubmit = document.getElementById('btn-submit');

  // Service type conditional sections
  var serviceRadios = form.querySelectorAll('input[name="service_type"]');
  var condElectrical = document.getElementById('cond-electrical');
  var condSiteWork = document.getElementById('cond-site-work');
  var condUtility = document.getElementById('cond-utility');

  // Referral detail
  var referralChecks = form.querySelectorAll('input[name="referral"]');
  var referralDetailWrap = document.getElementById('referral-detail-wrap');

  // ── Show/Hide Step ──
  function showStep(n) {
    steps.forEach(function(s, i) {
      if (s) {
        s.classList.remove('form-step--active');
        if (i === n - 1) s.classList.add('form-step--active');
      }
    });
    indicators.forEach(function(ind, i) {
      ind.classList.remove('step-indicator__step--active', 'step-indicator__step--completed');
      if (i === n - 1) ind.classList.add('step-indicator__step--active');
      else if (i < n - 1) ind.classList.add('step-indicator__step--completed');
    });
    currentStep = n;
    updateProgress();
    window.scrollTo({ top: form.offsetTop - 120, behavior: 'smooth' });
  }

  // ── Progress Bar ──
  function updateProgress() {
    var fields = form.querySelectorAll('input, select, textarea');
    var total = 0;
    var filled = 0;
    fields.forEach(function(f) {
      if (f.type === 'hidden' || f.type === 'submit' || f.type === 'button') return;
      if (f.type === 'radio') {
        var name = f.name;
        if (!f.parentElement.closest('.form-step--active,.conditional-section[style*="block"],.size-select,.radio-row')) return;
        var group = form.querySelectorAll('input[name="' + name + '"]');
        // Only count once per group
        if (f !== group[0]) return;
        total++;
        var checked = form.querySelector('input[name="' + name + '"]:checked');
        if (checked) filled++;
        return;
      }
      if (f.type === 'checkbox') {
        return; // Don't count checkboxes in progress
      }
      total++;
      if (f.value.trim()) filled++;
    });

    var pct = total > 0 ? Math.round((filled / total) * 100) : 0;
    // Bias by step completion
    var stepBias = ((currentStep - 1) / totalSteps) * 40;
    pct = Math.min(100, Math.round(stepBias + pct * 0.6));

    if (progressFill) progressFill.style.width = pct + '%';
    if (progressText) progressText.textContent = pct + '% complete';
  }

  // ── Service Type Conditional Logic ──
  serviceRadios.forEach(function(radio) {
    radio.addEventListener('change', function() {
      condElectrical.style.display = 'none';
      condSiteWork.style.display = 'none';
      condUtility.style.display = 'none';

      if (this.value === 'electrical') condElectrical.style.display = 'block';
      else if (this.value === 'site-work') condSiteWork.style.display = 'block';
      else if (this.value === 'utility') condUtility.style.display = 'block';

      validateStep1();
      updateProgress();
    });
  });

  // ── Referral "Other" detail ──
  referralChecks.forEach(function(check) {
    check.addEventListener('change', function() {
      var otherChecked = form.querySelector('input[name="referral"][value="other"]:checked');
      if (referralDetailWrap) {
        referralDetailWrap.style.display = otherChecked ? 'block' : 'none';
      }
    });
  });

  // ── Size select validation ──
  form.querySelectorAll('input[name="project_size"]').forEach(function(radio) {
    radio.addEventListener('change', function() {
      validateStep1();
      updateProgress();
    });
  });

  // ── Step 1 Validation ──
  function validateStep1() {
    var serviceSelected = form.querySelector('input[name="service_type"]:checked');
    var sizeSelected = form.querySelector('input[name="project_size"]:checked');
    if (btnNext1) btnNext1.disabled = !(serviceSelected && sizeSelected);
  }

  // ── Step 2 Validation ──
  function validateStep2() {
    var name = form.querySelector('#f-name');
    var company = form.querySelector('#f-company');
    var email = form.querySelector('#f-email');
    var phone = form.querySelector('#f-phone');

    var nameOk = name && name.value.trim().length >= 2;
    var companyOk = company && company.value.trim().length >= 2;
    var emailOk = email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
    var phoneOk = phone && phone.value.trim().replace(/\D/g, '').length >= 7;

    toggleCheck('check-name', nameOk);
    toggleCheck('check-company', companyOk);
    toggleCheck('check-email', emailOk);
    toggleCheck('check-phone', phoneOk);

    if (btnNext2) btnNext2.disabled = !(nameOk && companyOk && emailOk && phoneOk);
  }

  function toggleCheck(id, valid) {
    var el = document.getElementById(id);
    if (el) {
      el.classList.toggle('visible', valid);
    }
  }

  // Listen for input on step 2 fields
  ['f-name', 'f-company', 'f-email', 'f-phone'].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', function() {
        validateStep2();
        updateProgress();
      });
    }
  });

  // ── Navigation Buttons ──
  if (btnNext1) btnNext1.addEventListener('click', function() { showStep(2); });
  if (btnNext2) btnNext2.addEventListener('click', function() { showStep(3); });
  if (btnBack2) btnBack2.addEventListener('click', function() { showStep(1); });
  if (btnBack3) btnBack3.addEventListener('click', function() { showStep(2); });

  // ── Form Submit ──
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    var termsCheck = form.querySelector('#f-terms');
    if (termsCheck && !termsCheck.checked) {
      alert('Please accept the Terms & Conditions to continue.');
      return;
    }

    // Collect data
    var formData = new FormData(form);
    var data = {};
    formData.forEach(function(val, key) {
      if (data[key]) {
        if (Array.isArray(data[key])) data[key].push(val);
        else data[key] = [data[key], val];
      } else {
        data[key] = val;
      }
    });

    // Submit
    if (btnSubmit) {
      btnSubmit.disabled = true;
      btnSubmit.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    }

    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(function(res) { return res.json(); })
    .then(function(result) {
      // Show thank you
      form.style.display = 'none';
      document.querySelector('.form-progress').style.display = 'none';
      document.querySelector('.step-indicator').style.display = 'none';
      document.querySelector('.contact-form-wrap h2').style.display = 'none';
      document.querySelector('.contact-form-wrap > p').style.display = 'none';
      if (thankYou) thankYou.style.display = 'block';
      if (progressFill) progressFill.style.width = '100%';
      if (progressText) progressText.textContent = '100% complete';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    })
    .catch(function() {
      if (btnSubmit) {
        btnSubmit.disabled = false;
        btnSubmit.innerHTML = 'Send Project Inquiry <i class="fas fa-paper-plane"></i>';
      }
      alert('Something went wrong. Please try again or call us at (207) 797-3772.');
    });
  });

  // Initial progress
  updateProgress();

})();
