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

    // Only animate elements below the initial viewport
    var viewH = window.innerHeight;
    function shouldAnimate(el) {
      var rect = el.getBoundingClientRect();
      return rect.top > viewH - 50; // only hide things below fold
    }

    // Add reveal-init class to sections below fold
    revealSections.forEach(function(el) {
      if (shouldAnimate(el)) {
        el.classList.add('reveal-init');
      }
    });
    // Add reveal-init class to cards with stagger delay
    var cardGroups = {};
    revealCards.forEach(function(el) {
      if (shouldAnimate(el)) {
        el.classList.add('reveal-init');
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
      threshold: 0.08,
      rootMargin: '0px 0px -30px 0px'
    });

    document.querySelectorAll('.reveal-init').forEach(function(el) {
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
  // CONTACT FORM — Single-page scrolling form
  // ══════════════════════════════════════════
  var form = document.getElementById('contact-form');
  if (!form) return;

  var selectedSvc = null;
  var progressFill = document.getElementById('progress-fill');
  var progressPct = document.getElementById('progress-pct');
  var thankYou = document.getElementById('thank-you');
  var btnSubmit = document.getElementById('btn-submit');

  // ── Service Card Selection ──
  var serviceCards = document.querySelectorAll('.service-card');
  var hServiceType = document.getElementById('h-service-type');
  var condElectrical = document.getElementById('cond-electrical');
  var condSitework = document.getElementById('cond-sitework');
  var condUtility = document.getElementById('cond-utility');
  var utilityAlert = document.getElementById('utility-alert');

  function selectSvc(type, el) {
    serviceCards.forEach(function(c) { c.classList.remove('active'); });
    // Hide all conditionals
    if (condElectrical) condElectrical.classList.remove('visible');
    if (condSitework) condSitework.classList.remove('visible');
    if (condUtility) condUtility.classList.remove('visible');
    if (utilityAlert) utilityAlert.classList.remove('visible');

    el.classList.add('active');
    selectedSvc = type;
    if (hServiceType) hServiceType.value = type;

    // Show matching conditional
    var cond = document.getElementById('cond-' + type);
    if (cond) cond.classList.add('visible');

    updateProgress();
  }

  serviceCards.forEach(function(card) {
    card.addEventListener('click', function() {
      var type = this.id.replace('svc-', '');
      selectSvc(type, this);
    });
    card.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        var type = this.id.replace('svc-', '');
        selectSvc(type, this);
      }
    });
  });

  // ── Work Order radio → Utility Alert ──
  form.querySelectorAll('input[name="work_order"]').forEach(function(radio) {
    radio.addEventListener('change', function() {
      if (utilityAlert) {
        if (this.value === 'yes') {
          utilityAlert.classList.remove('visible');
        } else {
          utilityAlert.classList.add('visible');
        }
      }
      updateProgress();
    });
  });

  // ── Size Card Selection ──
  var sizeCards = document.querySelectorAll('.size-card');
  var hProjectSize = document.getElementById('h-project-size');

  sizeCards.forEach(function(card) {
    card.addEventListener('click', function() {
      sizeCards.forEach(function(c) { c.classList.remove('active'); });
      this.classList.add('active');
      var val = this.id === 'size-small' ? 'small' : 'medium-plus';
      if (hProjectSize) hProjectSize.value = val;
      updateProgress();
    });
    card.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });

  // ── Contract type → PM field ──
  var contractSelect = document.getElementById('f-contract');
  var pmField = document.getElementById('pm-field');
  if (contractSelect && pmField) {
    contractSelect.addEventListener('change', function() {
      if (this.value === 'tm') {
        pmField.style.display = '';
      } else {
        pmField.style.display = 'none';
      }
      updateProgress();
    });
  }

  // ── Referral checkboxes → detail field ──
  var referralDetailWrap = document.getElementById('referral-detail-wrap');
  var referralTriggers = ['referral', 'gc', 'jobsite', 'event', 'other'];

  function updateReferralDetail() {
    if (!referralDetailWrap) return;
    var boxes = form.querySelectorAll('input[name="referral"]:checked');
    var show = false;
    boxes.forEach(function(b) {
      if (referralTriggers.indexOf(b.value) !== -1) show = true;
    });
    referralDetailWrap.style.display = show ? '' : 'none';
  }

  form.querySelectorAll('input[name="referral"]').forEach(function(check) {
    check.addEventListener('change', updateReferralDetail);
  });

  // ── Phone number auto-format ──
  var phoneField = document.getElementById('f-phone');
  if (phoneField) {
    phoneField.addEventListener('input', function() {
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

  // ── Progress Bar ──
  function updateProgress() {
    var score = 0;
    var total = 5;

    // 1. Service type selected
    if (selectedSvc) score++;

    // 2. Project size selected
    if (document.querySelector('.size-card.active')) score++;

    // 3. Contact info: first name + email + phone
    var fn = (form.querySelector('[name="first_name"]') || {}).value || '';
    var em = (form.querySelector('[name="email"]') || {}).value || '';
    var ph = (form.querySelector('[name="phone"]') || {}).value || '';
    if (fn.trim() && em.trim() && ph.trim()) score++;

    // 4. State + timeline
    var st = (form.querySelector('[name="state"]') || {}).value || '';
    var tl = (form.querySelector('[name="timeline"]') || {}).value || '';
    if (st && tl) score++;

    // 5. Description filled
    var desc = (form.querySelector('[name="description"]') || {}).value || '';
    if (desc.trim()) score++;

    var pct = Math.round((score / total) * 100);
    if (progressFill) progressFill.style.width = pct + '%';
    if (progressPct) progressPct.textContent = pct + '%';
  }

  // ── Field validation on change/blur ──
  form.querySelectorAll('input,select,textarea').forEach(function(el) {
    el.addEventListener('input', updateProgress);
    el.addEventListener('change', function() {
      updateProgress();
      // Add green check for validated fields
      if (el.type === 'email') {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        el.classList.toggle('valid', re.test(el.value.trim()));
      } else if (el.type === 'tel') {
        el.classList.toggle('valid', el.value.trim().length >= 10);
      } else if (el.tagName === 'SELECT') {
        el.classList.toggle('valid', !!el.value);
      } else if (el.required || el.name === 'first_name' || el.name === 'last_name') {
        el.classList.toggle('valid', el.value.trim().length > 1);
      }
    });
    el.addEventListener('blur', function() { el.dispatchEvent(new Event('change')); });
  });

  // ── Active section tracking (scrollspy) ──
  var formSections = document.querySelectorAll('.form-section');
  var stepNums = document.querySelectorAll('.section-head__num');

  function trackActiveSection() {
    var mid = window.scrollY + window.innerHeight / 2;
    var currentIdx = -1;
    formSections.forEach(function(s, i) {
      var rect = s.getBoundingClientRect();
      var top = rect.top + window.scrollY;
      var bot = top + rect.height;
      if (mid >= top && mid <= bot) currentIdx = i;
    });
    stepNums.forEach(function(n, i) {
      n.classList.toggle('active-section', i === currentIdx);
    });
  }
  window.addEventListener('scroll', trackActiveSection, { passive: true });
  trackActiveSection();

  // ── Form Submit ──
  form.addEventListener('submit', function(e) {
    e.preventDefault();

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

    // Show loading
    if (btnSubmit) {
      btnSubmit.disabled = true;
      btnSubmit.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    }

    // Animate progress to 100%
    if (progressFill) progressFill.style.width = '100%';
    if (progressPct) progressPct.textContent = '100%';

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
      if (progressEl) progressEl.style.display = 'none';
      if (thankYou) thankYou.style.display = 'block';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    })
    .catch(function() {
      if (btnSubmit) {
        btnSubmit.disabled = false;
        btnSubmit.innerHTML = 'Submit Project Inquiry <i class="fas fa-arrow-right"></i>';
      }
      if (progressFill) progressFill.style.width = '80%';
      if (progressPct) progressPct.textContent = '80%';
      alert('Something went wrong. Please try again or call us at (207) 797-3772.');
    });
  });

  // Initial progress
  updateProgress();

})();
