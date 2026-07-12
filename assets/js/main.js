/* Fanfinity site interactions — dependency-free, progressive enhancement. */
(function () {
  'use strict';

  /* ---------------------------------------------------------------- *
   * Desktop dropdowns & mega-menu
   * ---------------------------------------------------------------- */
  var dropdowns = Array.prototype.slice.call(document.querySelectorAll('[data-dropdown]'));

  function closeDropdown(dd) {
    var trigger = dd.querySelector('[data-dropdown-trigger]');
    var panel = dd.querySelector('[data-dropdown-panel]');
    if (!trigger || !panel) return;
    trigger.setAttribute('aria-expanded', 'false');
    panel.hidden = true;
  }

  function closeAllDropdowns(except) {
    dropdowns.forEach(function (dd) { if (dd !== except) closeDropdown(dd); });
  }

  dropdowns.forEach(function (dd) {
    var trigger = dd.querySelector('[data-dropdown-trigger]');
    var panel = dd.querySelector('[data-dropdown-panel]');
    if (!trigger || !panel) return;

    trigger.addEventListener('click', function (e) {
      e.stopPropagation();
      var isOpen = trigger.getAttribute('aria-expanded') === 'true';
      closeAllDropdowns(dd);
      if (isOpen) {
        closeDropdown(dd);
      } else {
        trigger.setAttribute('aria-expanded', 'true');
        panel.hidden = false;
      }
    });

    // Clicks inside a panel shouldn't bubble to the document close handler.
    panel.addEventListener('click', function (e) { e.stopPropagation(); });
  });

  // Outside click closes any open dropdown.
  document.addEventListener('click', function () { closeAllDropdowns(null); });

  /* ---------------------------------------------------------------- *
   * Mobile menu
   * ---------------------------------------------------------------- */
  var toggle = document.querySelector('[data-menu-toggle]');
  var menu = document.querySelector('[data-mobile-menu]');
  var iconOpen = document.querySelector('[data-menu-icon="open"]');
  var iconClose = document.querySelector('[data-menu-icon="close"]');
  var lastFocus = null;

  function setMenu(open) {
    if (!toggle || !menu) return;
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menu.hidden = !open;
    if (iconOpen) iconOpen.hidden = open;
    if (iconClose) iconClose.hidden = !open;
    document.documentElement.classList.toggle('overflow-hidden', open);

    if (open) {
      lastFocus = document.activeElement;
      var first = menu.querySelector('a, button, summary');
      if (first) first.focus();
    } else if (lastFocus && typeof lastFocus.focus === 'function') {
      lastFocus.focus();
      lastFocus = null;
    }
  }

  function closeMobileMenu() { if (menu && !menu.hidden) setMenu(false); }

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });
    // Choosing a link closes the drawer.
    menu.addEventListener('click', function (e) {
      var link = e.target.closest && e.target.closest('a');
      if (link) closeMobileMenu();
    });
  }

  /* ---------------------------------------------------------------- *
   * Escape key + viewport changes
   * ---------------------------------------------------------------- */
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape' && e.key !== 'Esc') return;
    dropdowns.forEach(function (dd) {
      var trigger = dd.querySelector('[data-dropdown-trigger]');
      if (trigger && trigger.getAttribute('aria-expanded') === 'true') {
        closeDropdown(dd);
        trigger.focus();
      }
    });
    closeMobileMenu();
  });

  var mq = window.matchMedia('(min-width: 1024px)');
  function handleMq(ev) { if (ev.matches) { closeMobileMenu(); } else { closeAllDropdowns(null); } }
  if (mq.addEventListener) { mq.addEventListener('change', handleMq); }
  else if (mq.addListener) { mq.addListener(handleMq); }

  /* ---------------------------------------------------------------- *
   * Scroll reveal — sections fade/rise in as they enter the viewport
   * ---------------------------------------------------------------- */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function revealAll() { revealEls.forEach(function (el) { el.classList.add('is-visible'); }); }

  if (revealEls.length) {
    if (reduceMotion || !('IntersectionObserver' in window)) {
      revealAll();
    } else {
      var io = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });
      revealEls.forEach(function (el) { io.observe(el); });
    }
  }

  /* ---------------------------------------------------------------- *
   * Lead-capture forms (demo + contact) — validation, then submit to
   * the configured endpoint (site.forms.endpoint → form[action]). When
   * no endpoint is set we say so plainly rather than fake a delivery.
   * ---------------------------------------------------------------- */
  var leadForms = Array.prototype.slice.call(document.querySelectorAll('[data-lead-form]'));
  var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  leadForms.forEach(function (form) {
    var required = ['first_name', 'last_name', 'email', 'company'];
    var status = form.querySelector('[data-form-status]') || document.getElementById('demo-status');
    var btn = form.querySelector('button[type="submit"]');
    var endpoint = (form.getAttribute('action') || '').trim();

    function setError(field, msg) {
      var input = form.elements[field];
      if (!input) return;
      input.classList.toggle('border-red-500', !!msg);
      input.setAttribute('aria-invalid', msg ? 'true' : 'false');
      var slot = form.querySelector('[data-error-for="' + field + '"]');
      if (slot) { slot.textContent = msg || ''; slot.classList.toggle('hidden', !msg); }
    }
    function setStatus(cls, html) { if (status) { status.className = cls; status.innerHTML = html; } }

    required.forEach(function (f) {
      var input = form.elements[f];
      if (input) input.addEventListener('input', function () { setError(f, ''); });
    });

    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var ok = true;
      required.forEach(function (f) {
        var el = form.elements[f];
        var val = el ? (el.value || '').trim() : '';
        var msg = '';
        if (!val) msg = 'This field is required.';
        else if (f === 'email' && !emailRe.test(val)) msg = 'Enter a valid work email.';
        if (msg) ok = false;
        setError(f, msg);
      });
      if (!ok) { setStatus('mt-4 text-sm text-red-600', 'Please fix the highlighted fields and try again.'); return; }

      var name = ((form.elements['first_name'] && form.elements['first_name'].value) || '').trim();
      var label = btn ? btn.textContent : '';
      if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
      function done(cls, html) { setStatus(cls, html); if (btn) { btn.textContent = label; btn.disabled = false; } }
      var okClass = 'mt-4 rounded-xl border border-brand-200 bg-brand-50 p-4 text-sm text-foreground';
      var errClass = 'mt-4 text-sm text-red-600';

      // No endpoint configured yet — honest, no fake delivery.
      if (!endpoint) {
        window.setTimeout(function () {
          done(okClass, (name ? name + ', your details look good. ' : '') +
            'This form isn’t connected to our inbox yet — please try again shortly and we’ll pick it up.');
        }, 600);
        return;
      }

      // Real submission — Formspree / Netlify / Basin-compatible AJAX.
      fetch(endpoint, { method: 'POST', headers: { 'Accept': 'application/json' }, body: new FormData(form) })
        .then(function (res) {
          if (res.ok) {
            form.reset();
            done(okClass, (name ? 'Thanks, ' + name + '. ' : 'Thanks. ') + 'Your message is in — we’ll be in touch shortly.');
          } else {
            done(errClass, 'Something went wrong sending that. Please try again in a moment.');
          }
        })
        .catch(function () { done(errClass, 'We couldn’t reach the server. Please check your connection and try again.'); });
    });
  });

  /* ---------------------------------------------------------------- *
   * Cookie consent — privacy-first (analytics is opt-in).
   * ---------------------------------------------------------------- */
  var consent = document.getElementById('cookie-consent');
  if (consent) {
    var KEY = 'ff-cookie-consent';
    var store = {
      get: function () { try { return window.localStorage.getItem(KEY); } catch (e) { return 'declined'; } },
      set: function (v) { try { window.localStorage.setItem(KEY, v); } catch (e) {} }
    };
    function showConsent() { consent.hidden = false; }
    function hideConsent() { consent.hidden = true; }
    function choose(v) { store.set(v); hideConsent(); }

    if (!store.get()) { showConsent(); }

    var accept = consent.querySelector('[data-cookie-accept]');
    var decline = consent.querySelector('[data-cookie-decline]');
    if (accept) accept.addEventListener('click', function () { choose('accepted'); });
    if (decline) decline.addEventListener('click', function () { choose('declined'); });

    document.querySelectorAll('[data-cookie-open]').forEach(function (el) {
      el.addEventListener('click', function () { showConsent(); });
    });
  }
})();
