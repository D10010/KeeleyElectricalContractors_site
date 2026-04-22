/* ═══════════════════════════════════════════════════════
   KEELEY ELECTRICAL CONTRACTORS — Client-Side JS
   ═══════════════════════════════════════════════════════ */

(function() {
  'use strict';

  // ── Mobile Nav ──
  var hamburger = document.getElementById('nav-hamburger');
  var drawer = document.getElementById('mobile-drawer');
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
    // Close on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && drawer.classList.contains('active')) {
        hamburger.classList.remove('active');
        drawer.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  // ── Active Nav Link ──
  var path = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav__link').forEach(function(link) {
    var href = link.getAttribute('href');
    if (path === href || (href !== '/' && path.startsWith(href))) {
      link.classList.add('active');
    }
  });
  // Mobile drawer active links
  document.querySelectorAll('.mobile-drawer__links a').forEach(function(link) {
    var href = link.getAttribute('href');
    if (path === href || (href !== '/' && path.startsWith(href))) {
      link.style.color = '#fff';
    }
  });

  // ── Sticky Nav Shadow on Scroll ──
  var nav = document.getElementById('main-nav');
  if (nav) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 10) {
        nav.style.boxShadow = '0 4px 20px rgba(0,0,0,.25)';
      } else {
        nav.style.boxShadow = 'none';
      }
    }, { passive: true });
  }

  // ── Scroll to Top ──
  var scrollBtn = document.getElementById('scroll-top');
  if (scrollBtn) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 400) {
        scrollBtn.classList.add('visible');
      } else {
        scrollBtn.classList.remove('visible');
      }
    }, { passive: true });
    scrollBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ── Scroll Reveal (IntersectionObserver) ──
  if ('IntersectionObserver' in window) {
    var revealSections = document.querySelectorAll('.section, .stats-bar, .cta-band, .trust-strip');
    var revealCards = document.querySelectorAll('.service-card, .service-detail-card, .cert-badge, .cert-detail-card, .value-card, .about-service, .license-card, .process-step, .team-card, .career-card, .info-block, .cap-list__item, .territory-map__state');

    // Add reveal class to sections
    revealSections.forEach(function(el) {
      el.classList.add('reveal');
    });
    // Add reveal class to cards with stagger delay
    var cardGroups = {};
    revealCards.forEach(function(el) {
      el.classList.add('reveal');
      // Group cards by parent for stagger
      var parent = el.parentElement;
      if (parent) {
        var id = parent.getAttribute('data-reveal-group') || ('rg-' + Math.random().toString(36).substr(2, 5));
        parent.setAttribute('data-reveal-group', id);
        if (!cardGroups[id]) cardGroups[id] = [];
        var idx = cardGroups[id].length;
        cardGroups[id].push(el);
        if (idx === 1) el.classList.add('reveal-delay-1');
        else if (idx === 2) el.classList.add('reveal-delay-2');
        else if (idx >= 3) el.classList.add('reveal-delay-3');
      }
    });

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.reveal').forEach(function(el) {
      observer.observe(el);
    });
  }

  // ── Smooth anchor scrolling for legal page sidebars ──
  document.querySelectorAll('.legal-toc a').forEach(function(link) {
    link.addEventListener('click', function(e) {
      var href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        var target = document.getElementById(href.substring(1));
        if (target) {
          var offset = 80; // account for sticky nav
          var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({ top: top, behavior: 'smooth' });
          // Update active state
          document.querySelectorAll('.legal-toc a').forEach(function(a) { a.style.color = ''; });
          link.style.color = 'var(--accent)';
        }
      }
    });
  });

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
    // Smooth scroll to form top
    var formWrap = document.querySelector('.contact-form-wrap');
    if (formWrap) {
      var top = formWrap.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: top, behavior: 'smooth' });
    }
  }

  // ── Progress Bar ──
  function updateProgress() {
    // Simple step-based progress
    var pct;
    if (currentStep === 1) {
      var serviceSelected = form.querySelector('input[name="service_type"]:checked');
      var sizeSelected = form.querySelector('input[name="project_size"]:checked');
      pct = 0;
      if (serviceSelected) pct += 15;
      if (sizeSelected) pct += 15;
    } else if (currentStep === 2) {
      pct = 33;
      var name = form.querySelector('#f-name');
      var company = form.querySelector('#f-company');
      var email = form.querySelector('#f-email');
      var phone = form.querySelector('#f-phone');
      if (name && name.value.trim().length >= 2) pct += 5;
      if (company && company.value.trim().length >= 2) pct += 5;
      if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) pct += 5;
      if (phone && phone.value.trim().replace(/\D/g, '').length >= 7) pct += 5;
    } else if (currentStep === 3) {
      pct = 66;
      var desc = form.querySelector('#f-description');
      if (desc && desc.value.trim().length > 10) pct += 20;
      var terms = form.querySelector('#f-terms');
      if (terms && terms.checked) pct += 14;
    }
    pct = Math.min(100, pct);

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

  // ── Phone number auto-format ──
  var phoneField = document.getElementById('f-phone');
  if (phoneField) {
    phoneField.addEventListener('input', function(e) {
      var val = this.value.replace(/\D/g, '');
      if (val.length > 0) {
        if (val.length <= 3) {
          this.value = '(' + val;
        } else if (val.length <= 6) {
          this.value = '(' + val.substring(0,3) + ') ' + val.substring(3);
        } else {
          this.value = '(' + val.substring(0,3) + ') ' + val.substring(3,6) + '-' + val.substring(6,10);
        }
      }
    });
  }

  // ── Step 3 description and terms listeners ──
  var descField = document.getElementById('f-description');
  if (descField) {
    descField.addEventListener('input', function() { updateProgress(); });
  }
  var termsField = document.getElementById('f-terms');
  if (termsField) {
    termsField.addEventListener('change', function() { updateProgress(); });
  }

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
      var progressEl = document.querySelector('.form-progress');
      var stepEl = document.querySelector('.step-indicator');
      var formTitle = document.querySelector('.contact-form-wrap h2');
      var formDesc = document.querySelector('.contact-form-wrap > p');
      if (progressEl) progressEl.style.display = 'none';
      if (stepEl) stepEl.style.display = 'none';
      if (formTitle) formTitle.style.display = 'none';
      if (formDesc) formDesc.style.display = 'none';
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
