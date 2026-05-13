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

  // ── Hero Video: deferred, conditional playback ──
  // Poster shows immediately (preload="none" keeps the video idle).
  // After the page has fully loaded + 800 ms we start the video ONLY on
  // desktop-sized viewports that haven't opted into reduced motion.
  var heroVideo = document.querySelector('.hero__video');
  if (heroVideo) {
    heroVideo.muted = true;
    heroVideo.setAttribute('muted', '');
    heroVideo.setAttribute('playsinline', '');

    function maybePlayHero() {
      var prefersMotion = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
      var isDesktop = window.innerWidth >= 768;

      if (prefersMotion && isDesktop) {
        heroVideo.play().catch(function() {
          // Silently fail — poster stays visible
        });
      }
      // Otherwise the poster image remains on screen (no video download)
    }

    // Wait for full page load, then an extra 800 ms so the poster can
    // serve as the LCP element before we swap in the video stream.
    if (document.readyState === 'complete') {
      setTimeout(maybePlayHero, 800);
    } else {
      window.addEventListener('load', function() {
        setTimeout(maybePlayHero, 800);
      });
    }

    // If video fails to load, keep the poster visible
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
  var selectedSize = null;

  // Elements
  var progressFill = document.getElementById('progress-fill');
  var progressPct = document.getElementById('progress-pct');
  var thankYou = document.getElementById('thank-you');
  var btnSubmit = document.getElementById('btn-submit');

  // ── Service Card Selection (multi-select) ──
  var serviceCards = document.querySelectorAll('#service-grid .service-card');
  var hiddenServiceType = document.getElementById('h-service-type');
  var svcSummary = document.getElementById('svc-summary');
  var condElectrical = document.getElementById('cond-electrical');
  var condSitework = document.getElementById('cond-sitework');
  var condUtility = document.getElementById('cond-utility');

  // Friendly display names for the summary
  var svcDisplayNames = { electrical: 'Electrical', sitework: 'Site Work', utility: 'Utility' };

  function rebuildServiceState() {
    var activeTypes = [];
    serviceCards.forEach(function(c) {
      if (c.classList.contains('active')) activeTypes.push(c.id.replace('svc-', ''));
    });

    // Update hidden input (comma-separated)
    if (hiddenServiceType) hiddenServiceType.value = activeTypes.join(',');

    // Show/hide conditional panels independently
    var condMap = { electrical: condElectrical, sitework: condSitework, utility: condUtility };
    Object.keys(condMap).forEach(function(key) {
      var panel = condMap[key];
      if (!panel) return;
      if (activeTypes.indexOf(key) !== -1) {
        panel.classList.add('visible');
      } else {
        panel.classList.remove('visible');
      }
    });

    // Hide utility alert if utility is no longer active
    if (activeTypes.indexOf('utility') === -1) {
      toggleUtilityAlert(false);
    }

    // Update summary text
    if (svcSummary) {
      var names = activeTypes.map(function(t) { return svcDisplayNames[t] || t; });
      if (names.length === 0) {
        svcSummary.textContent = 'No service type selected yet.';
        svcSummary.classList.add('svc-summary--empty');
      } else {
        svcSummary.classList.remove('svc-summary--empty');
        if (names.length === 1) {
          svcSummary.textContent = 'Selected: ' + names[0];
        } else if (names.length === 2) {
          svcSummary.textContent = 'Selected: ' + names[0] + ' and ' + names[1];
        } else {
          svcSummary.textContent = 'Selected: ' + names.slice(0, -1).join(', ') + ', and ' + names[names.length - 1];
        }
      }
    }

    updateProgress();
  }

  serviceCards.forEach(function(card) {
    card.addEventListener('click', function() {
      // Toggle this card's active state
      card.classList.toggle('active');
      rebuildServiceState();
    });

    // Keyboard support
    card.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });

  // Initialize summary text
  rebuildServiceState();

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

    // 1. Section 1 complete: project_class radio selected + at least one service card active
    //    + any visible conditional's required inputs filled
    var projectClassOk = !!form.querySelector('input[name="project_class"]:checked');
    var activeCards = form.querySelectorAll('#service-grid .service-card.active');
    var svcOk = activeCards.length > 0;
    var condReqOk = true;
    form.querySelectorAll('.conditional.visible').forEach(function(panel) {
      panel.querySelectorAll('input[required], select[required]').forEach(function(inp) {
        if (inp.type === 'radio') {
          var name = inp.name;
          if (!panel.querySelector('input[name="' + name + '"]:checked')) condReqOk = false;
        } else if (!inp.value) {
          condReqOk = false;
        }
      });
      // Also check required radio groups that use the required-via-label convention
      var requiredRadioNames = {};
      panel.querySelectorAll('.field-label .required').forEach(function(star) {
        var label = star.closest('.field-label');
        if (!label) return;
        var nextGroup = label.nextElementSibling;
        if (nextGroup && nextGroup.classList.contains('radio-group')) {
          var radios = nextGroup.querySelectorAll('input[type="radio"]');
          if (radios.length > 0) requiredRadioNames[radios[0].name] = true;
        }
      });
      Object.keys(requiredRadioNames).forEach(function(name) {
        if (!panel.querySelector('input[name="' + name + '"]:checked')) condReqOk = false;
      });
    });
    if (projectClassOk && svcOk && condReqOk) score++;

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

  // ── Attachment Field — Drag & Drop with per-file notes ──
  (function() {
    var dropzone   = document.getElementById('dropzone');
    var fileInput  = document.getElementById('f-attachments');
    var listEl     = document.getElementById('attachment-list');
    if (!dropzone || !fileInput || !listEl) return;

    var MAX_FILES = 5;
    var MAX_SIZE  = 10 * 1024 * 1024; // 10 MB
    var selectedFiles = []; // { file: File, note: string, objectUrl: string }

    function showError(msg) {
      clearError();
      var err = document.createElement('div');
      err.className = 'field-error';
      err.textContent = msg;
      dropzone.parentElement.insertBefore(err, dropzone.nextSibling);
      setTimeout(clearError, 5000);
    }

    function clearError() {
      var existing = dropzone.parentElement.querySelector('.field-error');
      if (existing) existing.remove();
    }

    // ── Drag & drop visual feedback ──
    var dragCounter = 0;
    dropzone.addEventListener('dragenter', function(e) {
      e.preventDefault();
      dragCounter++;
      dropzone.classList.add('dropzone--active');
    });
    dropzone.addEventListener('dragover', function(e) {
      e.preventDefault();
    });
    dropzone.addEventListener('dragleave', function(e) {
      e.preventDefault();
      dragCounter--;
      if (dragCounter <= 0) {
        dragCounter = 0;
        dropzone.classList.remove('dropzone--active');
      }
    });
    dropzone.addEventListener('drop', function(e) {
      e.preventDefault();
      dragCounter = 0;
      dropzone.classList.remove('dropzone--active');
      var files = e.dataTransfer ? Array.from(e.dataTransfer.files) : [];
      if (files.length > 0) processIncoming(files);
    });

    // ── Click/tap on dropzone opens picker ──
    dropzone.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fileInput.click(); }
    });

    // ── Native file input change ──
    fileInput.addEventListener('change', function() {
      var files = Array.from(this.files);
      if (files.length > 0) processIncoming(files);
      // Reset input so re-selecting the same file triggers change
      this.value = '';
    });

    function processIncoming(incoming) {
      clearError();

      // Filter images only
      incoming = incoming.filter(function(f) {
        return /^image\/(jpeg|png|heic|heif|webp)$/i.test(f.type) || /\.(jpe?g|png|heic|heif|webp)$/i.test(f.name);
      });
      if (incoming.length === 0) {
        showError('Only image files are accepted (JPEG, PNG, WebP, HEIC).');
        return;
      }

      // Size check
      var oversized = incoming.filter(function(f) { return f.size > MAX_SIZE; });
      if (oversized.length) {
        showError(oversized.length === 1
          ? '"' + oversized[0].name + '" exceeds the 10 MB limit.'
          : oversized.length + ' files exceed the 10 MB limit.');
        incoming = incoming.filter(function(f) { return f.size <= MAX_SIZE; });
      }

      // Count check
      var spaceLeft = MAX_FILES - selectedFiles.length;
      if (incoming.length > spaceLeft) {
        showError('You can attach up to ' + MAX_FILES + ' images total. ' + (incoming.length - spaceLeft) + ' file(s) skipped.');
        incoming = incoming.slice(0, Math.max(0, spaceLeft));
      }

      incoming.forEach(function(file) {
        selectedFiles.push({ file: file, note: '', objectUrl: URL.createObjectURL(file) });
      });

      syncFileInput();
      renderCards();
      toggleDropzone();
    }

    function toggleDropzone() {
      dropzone.style.display = selectedFiles.length >= MAX_FILES ? 'none' : '';
    }

    function syncFileInput() {
      try {
        var dt = new DataTransfer();
        selectedFiles.forEach(function(entry) { dt.items.add(entry.file); });
        fileInput.files = dt.files;
      } catch (e) { /* older browsers */ }
    }

    function renderCards() {
      listEl.innerHTML = '';

      selectedFiles.forEach(function(entry, idx) {
        var card = document.createElement('div');
        card.className = 'attachment-card';

        // Thumbnail
        var thumb = document.createElement('img');
        thumb.className = 'attachment-card__thumb';
        thumb.src = entry.objectUrl;
        thumb.alt = entry.file.name;

        // Body (name + size + note input)
        var body = document.createElement('div');
        body.className = 'attachment-card__body';

        var nameEl = document.createElement('div');
        nameEl.className = 'attachment-card__name';
        nameEl.textContent = entry.file.name;

        var sizeEl = document.createElement('div');
        sizeEl.className = 'attachment-card__size';
        sizeEl.textContent = (entry.file.size / (1024 * 1024)).toFixed(1) + ' MB';

        var noteEl = document.createElement('textarea');
        noteEl.className = 'attachment-card__note';
        noteEl.placeholder = 'Add a note\u2026 e.g. "Electrical panel in basement"';
        noteEl.rows = 1;
        noteEl.name = 'attachment_note_' + idx;
        noteEl.value = entry.note;
        noteEl.addEventListener('input', function() {
          entry.note = this.value;
        });

        body.appendChild(nameEl);
        body.appendChild(sizeEl);
        body.appendChild(noteEl);

        // Remove button
        var removeBtn = document.createElement('button');
        removeBtn.type = 'button';
        removeBtn.className = 'attachment-card__remove';
        removeBtn.innerHTML = '\u00D7';
        removeBtn.setAttribute('aria-label', 'Remove ' + entry.file.name);
        removeBtn.addEventListener('click', function() {
          URL.revokeObjectURL(entry.objectUrl);
          selectedFiles.splice(idx, 1);
          syncFileInput();
          renderCards();
          toggleDropzone();
          clearError();
        });

        card.appendChild(thumb);
        card.appendChild(body);
        card.appendChild(removeBtn);
        listEl.appendChild(card);
      });
    }
  })();

  // ── Form Submit (multipart/form-data) ──
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Build FormData from the form (natively handles files + all fields)
    var formData = new FormData(form);

    // Submit
    if (btnSubmit) {
      btnSubmit.disabled = true;
      btnSubmit.innerHTML = '<svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="spin-icon"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Sending...';
    }

    // Set progress to 100%
    if (progressFill) progressFill.style.width = '100%';
    if (progressPct) progressPct.textContent = '100%';

    fetch('/api/contact', {
      method: 'POST',
      body: formData
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
        btnSubmit.innerHTML = 'Submit Project Inquiry <svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>';
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

/* ══════════════════════════════════════════════════════
   APPLY FORM — /careers/apply
   ══════════════════════════════════════════════════════ */
(function() {
  'use strict';

  var form = document.getElementById('apply-form');
  if (!form) return;

  var progressFill = document.getElementById('apply-progress-fill');
  var progressPct  = document.getElementById('apply-progress-pct');
  var thankYou     = document.getElementById('apply-thank-you');
  var btnSubmit    = document.getElementById('apply-btn-submit');

  // ── Pre-select position from ?role= query param ──
  var params = new URLSearchParams(window.location.search);
  var roleParam = params.get('role');
  if (roleParam) {
    var posSelect = document.getElementById('f-position');
    if (posSelect) {
      var opt = posSelect.querySelector('option[value="' + roleParam + '"]');
      if (opt) {
        posSelect.value = roleParam;
        posSelect.classList.add('valid');
      }
    }
  }

  // ── Interest Cards (multi-select) ──
  var interestCards = document.querySelectorAll('#interest-grid .service-card');
  var hiddenInterests = document.getElementById('h-interests');
  var intSummary = document.getElementById('int-summary');

  var intDisplayNames = { electrical: 'Electrical', sitework: 'Site Work', utility: 'Utility', any: 'Open to Any' };

  function rebuildInterestState() {
    var active = [];
    interestCards.forEach(function(c) {
      if (c.classList.contains('active')) active.push(c.id.replace('int-', ''));
    });
    if (hiddenInterests) hiddenInterests.value = active.join(',');

    if (intSummary) {
      var names = active.map(function(t) { return intDisplayNames[t] || t; });
      if (names.length === 0) {
        intSummary.textContent = '';
        intSummary.classList.add('svc-summary--empty');
      } else {
        intSummary.classList.remove('svc-summary--empty');
        if (names.length === 1) intSummary.textContent = 'Interested in: ' + names[0];
        else if (names.length === 2) intSummary.textContent = 'Interested in: ' + names[0] + ' and ' + names[1];
        else intSummary.textContent = 'Interested in: ' + names.slice(0, -1).join(', ') + ', and ' + names[names.length - 1];
      }
    }
    updateProgress();
  }

  interestCards.forEach(function(card) {
    card.addEventListener('click', function() {
      card.classList.toggle('active');
      rebuildInterestState();
    });
    card.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.click(); }
    });
  });
  rebuildInterestState();

  // ── License "Other" radio → reveal text input ──
  var licenseOtherRadio = document.getElementById('license-other-radio');
  var licenseOtherWrap  = document.getElementById('license-other-wrap');
  if (licenseOtherRadio && licenseOtherWrap) {
    var licenseRadios = form.querySelectorAll('input[name="license_class"]');
    licenseRadios.forEach(function(r) {
      r.addEventListener('change', function() {
        licenseOtherWrap.style.display = licenseOtherRadio.checked ? 'block' : 'none';
        updateProgress();
      });
    });
  }

  // ── Referral checkbox → reveal text input ──
  var referralCheck = document.getElementById('apply-referral-check');
  var referralWrap  = document.getElementById('apply-referral-wrap');
  if (referralCheck && referralWrap) {
    referralCheck.addEventListener('change', function() {
      referralWrap.style.display = referralCheck.checked ? 'block' : 'none';
    });
  }

  // ── Phone auto-format ──
  var phoneField = document.getElementById('f-apply-phone');
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

  // ── Resume file input ──
  (function() {
    var fileInput = document.getElementById('f-resume');
    var preview   = document.getElementById('resume-preview');
    if (!fileInput || !preview) return;

    var MAX_SIZE = 10 * 1024 * 1024;
    var ALLOWED_EXT = /\.(pdf|doc|docx)$/i;
    var selectedFile = null;

    function showError(msg) {
      clearError();
      var err = document.createElement('div');
      err.className = 'field-error';
      err.textContent = msg;
      fileInput.parentElement.insertBefore(err, fileInput.nextSibling);
      setTimeout(clearError, 5000);
    }

    function clearError() {
      var existing = fileInput.parentElement.querySelector('.field-error');
      if (existing) existing.remove();
    }

    function renderPreview() {
      preview.innerHTML = '';
      if (!selectedFile) return;
      var item = document.createElement('div');
      item.className = 'attachment-preview__item';
      item.style.display = 'flex';
      item.style.alignItems = 'center';
      item.style.gap = '.5rem';
      item.style.padding = '.5rem .75rem';
      item.style.background = 'var(--surface)';
      item.style.borderRadius = '6px';
      item.style.border = '1px solid var(--rule)';

      var icon = document.createElement('span');
      icon.innerHTML = '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>';
      icon.style.flexShrink = '0';

      var name = document.createElement('span');
      name.textContent = selectedFile.name;
      name.style.fontSize = '.82rem';
      name.style.fontWeight = '500';
      name.style.overflow = 'hidden';
      name.style.textOverflow = 'ellipsis';
      name.style.whiteSpace = 'nowrap';

      var size = document.createElement('span');
      size.textContent = (selectedFile.size / (1024 * 1024)).toFixed(1) + ' MB';
      size.style.fontSize = '.72rem';
      size.style.color = 'var(--ink-3)';
      size.style.flexShrink = '0';

      var removeBtn = document.createElement('button');
      removeBtn.type = 'button';
      removeBtn.className = 'attachment-preview__remove';
      removeBtn.style.position = 'static';
      removeBtn.style.marginLeft = 'auto';
      removeBtn.textContent = '\u00D7';
      removeBtn.setAttribute('aria-label', 'Remove ' + selectedFile.name);
      removeBtn.addEventListener('click', function() {
        selectedFile = null;
        preview.innerHTML = '';
        try {
          var dt = new DataTransfer();
          fileInput.files = dt.files;
        } catch (e) { fileInput.value = ''; }
        clearError();
        updateProgress();
      });

      item.appendChild(icon);
      item.appendChild(name);
      item.appendChild(size);
      item.appendChild(removeBtn);
      preview.appendChild(item);
    }

    fileInput.addEventListener('change', function() {
      clearError();
      var files = Array.from(this.files);
      if (files.length === 0) return;

      var file = files[0];

      if (!ALLOWED_EXT.test(file.name)) {
        showError('Please upload a PDF or Word document (.pdf, .doc, .docx).');
        try { var dt = new DataTransfer(); fileInput.files = dt.files; } catch (e) { fileInput.value = ''; }
        return;
      }

      if (file.size > MAX_SIZE) {
        showError('"' + file.name + '" exceeds the 10 MB limit.');
        try { var dt = new DataTransfer(); fileInput.files = dt.files; } catch (e) { fileInput.value = ''; }
        return;
      }

      selectedFile = file;
      try {
        var dt = new DataTransfer();
        dt.items.add(file);
        fileInput.files = dt.files;
      } catch (e) { /* native input already has it */ }

      renderPreview();
      updateProgress();
    });
  })();

  // ── Progress Bar ──
  function updateProgress() {
    var score = 0;
    var total = 4;

    // Section 1: position select filled
    var pos = form.querySelector('[name="position"]');
    if (pos && pos.value) score++;

    // Section 2: experience select filled
    var exp = form.querySelector('[name="experience"]');
    if (exp && exp.value) score++;

    // Section 3: first name, last name, phone, email all filled
    var fn = form.querySelector('[name="first_name"]');
    var ln = form.querySelector('[name="last_name"]');
    var ph = form.querySelector('[name="phone"]');
    var em = form.querySelector('[name="email"]');
    var fnOk = fn && fn.value.trim().length >= 2;
    var lnOk = ln && ln.value.trim().length >= 2;
    var phOk = ph && ph.value.trim().replace(/\D/g, '').length >= 7;
    var emOk = em && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em.value.trim());
    if (fnOk && lnOk && phOk && emOk) score++;

    // Section 4: resume uploaded + work_authorized checked
    var resume = form.querySelector('[name="resume"]');
    var resumeOk = resume && resume.files && resume.files.length > 0;
    var authCheck = form.querySelector('[name="work_authorized"]');
    var authOk = authCheck && authCheck.checked;
    if (resumeOk && authOk) score++;

    var pct = Math.round((score / total) * 100);
    if (progressFill) progressFill.style.width = pct + '%';
    if (progressPct)  progressPct.textContent  = pct + '%';
  }

  // ── Field Validation Visual Feedback ──
  form.querySelectorAll('input, select, textarea').forEach(function(el) {
    el.addEventListener('input', updateProgress);
    el.addEventListener('change', function() {
      updateProgress();
      if (el.type === 'email') {
        el.classList.toggle('valid', /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value.trim()));
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

  // ── Active Section Tracking ──
  var formSections = form.querySelectorAll('.form-section');
  var stepNums = form.querySelectorAll('.section-head__num');

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

  // ── Form Submit (multipart/form-data) ──
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    var formData = new FormData(form);

    if (btnSubmit) {
      btnSubmit.disabled = true;
      btnSubmit.innerHTML = '<svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="spin-icon"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Submitting\u2026';
    }

    if (progressFill) progressFill.style.width = '100%';
    if (progressPct)  progressPct.textContent  = '100%';

    fetch('/api/apply', {
      method: 'POST',
      body: formData
    })
    .then(function(res) { return res.json(); })
    .then(function(result) {
      form.style.display = 'none';
      var progressEl = document.getElementById('apply-progress');
      if (progressEl) progressEl.style.display = 'none';
      if (thankYou) thankYou.style.display = 'block';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    })
    .catch(function() {
      if (btnSubmit) {
        btnSubmit.disabled = false;
        btnSubmit.innerHTML = 'Submit Application <svg width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>';
      }
      if (progressFill) progressFill.style.width = '';
      if (progressPct)  progressPct.textContent  = '';
      updateProgress();
      alert('Something went wrong. Please try again or call us at (207) 797-3772.');
    });
  });

  // Initial progress
  updateProgress();

})();
