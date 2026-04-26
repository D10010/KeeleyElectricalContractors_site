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
    var revealCards = document.querySelectorAll('.service-card:not(.contact-form .service-card), .service-detail-card, .cert-badge, .cert-detail-card, .value-card, .about-service, .license-card, .process-step, .team-card, .career-card, .info-block, .cap-list__item, .territory-map__state');

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

  // ── Hero Video: Force autoplay on mobile ──
  var heroVideo = document.querySelector('.hero__video');
  if (heroVideo) {
    // Ensure muted attribute is set (required for mobile autoplay)
    heroVideo.muted = true;
    heroVideo.setAttribute('muted', '');
    heroVideo.setAttribute('playsinline', '');

    // Try to play immediately
    var playAttempt = heroVideo.play();
    if (playAttempt !== undefined) {
      playAttempt.catch(function() {
        // Autoplay blocked — retry on first user interaction
        var events = ['touchstart', 'click', 'scroll'];
        function tryPlay() {
          heroVideo.play().then(function() {
            events.forEach(function(evt) {
              document.removeEventListener(evt, tryPlay);
            });
          }).catch(function() {});
        }
        events.forEach(function(evt) {
          document.addEventListener(evt, tryPlay, { once: false, passive: true });
        });
      });
    }

    // If video fails to load, poster image will show via poster attribute
    // Also set poster as background-image fallback on the hero section
    heroVideo.addEventListener('error', function() {
      var hero = document.querySelector('.hero--video');
      if (hero) {
        hero.style.backgroundImage = 'url(/static/hero-poster.jpg)';
        hero.style.backgroundSize = 'cover';
        hero.style.backgroundPosition = 'center';
      }
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

  // ══════════════════════════════════════════════════════
  // CONTACT FORM — Single-page scrolling with validation
  // ══════════════════════════════════════════════════════
  var form = document.getElementById('contact-form');
  if (!form) return;

  // State
  var selectedSvc = null;
  var selectedSize = null;

  // Elements
  var progressFill = document.getElementById('progress-fill');
  var progressPct = document.getElementById('progress-pct');
  var thankYou = document.getElementById('thank-you');
  var btnSubmit = document.getElementById('btn-submit');

  // ── Service Card Selection ──
  var serviceCards = document.querySelectorAll('#service-grid .service-card');
  var hiddenServiceType = document.getElementById('h-service-type');
  var condElectrical = document.getElementById('cond-electrical');
  var condSitework = document.getElementById('cond-sitework');
  var condUtility = document.getElementById('cond-utility');

  serviceCards.forEach(function(card) {
    card.addEventListener('click', function() {
      // Determine service type from id
      var type = card.id.replace('svc-', '');

      // Deselect all
      serviceCards.forEach(function(c) { c.classList.remove('active'); });
      // Hide all conditionals
      [condElectrical, condSitework, condUtility].forEach(function(c) {
        if (c) c.classList.remove('visible');
      });

      // Select this
      card.classList.add('active');
      selectedSvc = type;
      if (hiddenServiceType) hiddenServiceType.value = type;

      // Show relevant conditional
      var condId = 'cond-' + type;
      var cond = document.getElementById(condId);
      if (cond) cond.classList.add('visible');

      // Hide utility alert when switching away from utility
      if (type !== 'utility') {
        toggleUtilityAlert(false);
      }

      updateProgress();
    });

    // Keyboard support
    card.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });

  // ── Size Card Selection ──
  var sizeCards = document.querySelectorAll('#size-grid .size-card');
  var hiddenProjectSize = document.getElementById('h-project-size');

  sizeCards.forEach(function(card) {
    card.addEventListener('click', function() {
      sizeCards.forEach(function(c) { c.classList.remove('active'); });
      card.classList.add('active');
      selectedSize = card.id.replace('size-', '');
      if (hiddenProjectSize) hiddenProjectSize.value = selectedSize;
      updateProgress();
    });

    card.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });

  // ── Utility Work Order → Alert Toggle ──
  var workOrderRadios = form.querySelectorAll('input[name="work_order"]');
  workOrderRadios.forEach(function(radio) {
    radio.addEventListener('change', function() {
      if (this.value === 'no' || this.value === 'unsure') {
        toggleUtilityAlert(true);
      } else {
        toggleUtilityAlert(false);
      }
    });
  });

  function toggleUtilityAlert(show) {
    var alert = document.getElementById('utility-alert');
    if (alert) {
      if (show) {
        alert.classList.add('visible');
      } else {
        alert.classList.remove('visible');
      }
    }
  }

  // ── Contract Type → PM Field Toggle ──
  var contractSelect = document.getElementById('f-contract');
  var pmField = document.getElementById('pm-field');
  if (contractSelect && pmField) {
    contractSelect.addEventListener('change', function() {
      if (this.value === 'tm') {
        pmField.style.display = 'flex';
        pmField.style.flexDirection = 'column';
        pmField.style.gap = '5px';
      } else {
        pmField.style.display = 'none';
      }
      updateProgress();
    });
  }

  // ── Referral "Other" / detail toggle ──
  var referralChecks = form.querySelectorAll('input[name="referral"]');
  var referralDetailWrap = document.getElementById('referral-detail-wrap');
  var triggerValues = ['referral', 'gc', 'jobsite', 'event', 'other'];

  referralChecks.forEach(function(check) {
    check.addEventListener('change', function() {
      if (!referralDetailWrap) return;
      var checked = form.querySelectorAll('input[name="referral"]:checked');
      var show = false;
      checked.forEach(function(b) {
        if (triggerValues.indexOf(b.value) !== -1) show = true;
      });
      referralDetailWrap.style.display = show ? 'grid' : 'none';
    });
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

    // 2. Size selected
    if (selectedSize) score++;

    // 3. Required contact fields filled (first name, email, phone)
    var fn = form.querySelector('[name="first_name"]');
    var em = form.querySelector('[name="email"]');
    var ph = form.querySelector('[name="phone"]');
    var fnOk = fn && fn.value.trim().length >= 2;
    var emOk = em && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em.value.trim());
    var phOk = ph && ph.value.trim().replace(/\D/g, '').length >= 7;
    if (fnOk && emOk && phOk) score++;

    // 4. State and timeline filled
    var st = form.querySelector('[name="state"]');
    var tl = form.querySelector('[name="timeline"]');
    if (st && st.value && tl && tl.value) score++;

    // 5. Description has content
    var desc = form.querySelector('[name="description"]');
    if (desc && desc.value.trim().length > 0) score++;

    var pct = Math.round((score / total) * 100);
    if (progressFill) progressFill.style.width = pct + '%';
    if (progressPct) progressPct.textContent = pct + '%';
  }

  // ── Field Validation Visual Feedback ──
  form.querySelectorAll('input, select, textarea').forEach(function(el) {
    el.addEventListener('input', updateProgress);
    el.addEventListener('change', function() {
      updateProgress();
      // Apply .valid class for visual feedback
      if (el.type === 'email') {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        el.classList.toggle('valid', re.test(el.value.trim()));
      } else if (el.type === 'tel') {
        el.classList.toggle('valid', el.value.trim().replace(/\D/g, '').length >= 10);
      } else if (el.tagName === 'SELECT') {
        el.classList.toggle('valid', !!el.value);
      } else if (el.required || el.name === 'first_name' || el.name === 'last_name') {
        el.classList.toggle('valid', el.value.trim().length > 1);
      }
    });
    el.addEventListener('blur', function() {
      el.dispatchEvent(new Event('change'));
    });
  });

  // ── Active Section Tracking (scroll-based pulse on step nums) ──
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
  if (formSections.length > 0) {
    window.addEventListener('scroll', trackActiveSection, { passive: true });
    trackActiveSection();
  }

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

    // Also collect checked sub-service checkboxes
    var subElectrical = [];
    form.querySelectorAll('input[name="sub_electrical"]:checked').forEach(function(cb) { subElectrical.push(cb.value); });
    if (subElectrical.length) data.sub_electrical = subElectrical;

    var subSitework = [];
    form.querySelectorAll('input[name="sub_sitework"]:checked').forEach(function(cb) { subSitework.push(cb.value); });
    if (subSitework.length) data.sub_sitework = subSitework;

    // Submit
    if (btnSubmit) {
      btnSubmit.disabled = true;
      btnSubmit.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    }

    // Set progress to 100%
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
      var progressEl = document.getElementById('form-progress');
      if (progressEl) progressEl.style.display = 'none';
      if (thankYou) thankYou.style.display = 'block';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    })
    .catch(function() {
      if (btnSubmit) {
        btnSubmit.disabled = false;
        btnSubmit.innerHTML = 'Submit Project Inquiry <i class="fas fa-arrow-right"></i>';
      }
      if (progressFill) progressFill.style.width = '';
      if (progressPct) progressPct.textContent = '';
      updateProgress();
      alert('Something went wrong. Please try again or call us at (207) 797-3772.');
    });
  });

  // Initial progress
  updateProgress();

})();
