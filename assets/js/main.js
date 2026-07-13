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
      }, { rootMargin: '0px 0px 12% 0px', threshold: 0.01 });
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

  /* ---------------------------------------------------------------- *
   * Industry switcher — tabs swap an illustrative sample audience card.
   * Progressive enhancement: without JS the first (Sports) card shows.
   * ---------------------------------------------------------------- */
  var indTabsWrap = document.querySelector('[data-industry-tabs]');
  if (indTabsWrap) {
    var indBase = 'rounded-full px-4 py-2 text-sm font-semibold transition';
    var indActive = indBase + ' bg-brand-600 text-white';
    var indInactive = indBase + ' border border-border bg-card text-muted-foreground hover:text-foreground';
    var indTabs = Array.prototype.slice.call(indTabsWrap.querySelectorAll('[data-industry-tab]'));
    var indBody = document.querySelector('[data-industry-body]');
    var indTitle = document.querySelector('[data-industry-title]');
    var indRows = document.querySelector('[data-industry-rows]');
    var indCount = document.querySelector('[data-industry-count]');
    var indChannels = document.querySelector('[data-industry-channels]');
    var indLink = document.querySelector('[data-industry-link]');

    // keyed by the industry's icon (whistle/broadcast/handshake/airplane/gift)
    var INDUSTRIES = {
      whistle:   { title: 'High-value season-ticket holders', count: '48,320', rows: [['Region', '=', 'KSA'], ['Lifetime value', '>', 'SAR 5,000'], ['Matches attended', '≥', '12'], ['Last seen', '≤', '7 days']], channels: ['WhatsApp', 'Email', 'Push'] },
      broadcast: { title: 'Streaming super-watchers', count: '37,480', rows: [['Watch time', '>', '20h / mo'], ['Live sessions', '≥', '8'], ['Device', '=', 'Mobile'], ['Consent', '=', 'Marketing']], channels: ['Push', 'Email', 'WhatsApp'] },
      handshake: { title: 'Sponsor-ready reachable fans', count: '61,140', rows: [['Residency', '=', 'In-Kingdom'], ['Consent', '=', 'Granted'], ['Channels', '≥', '2'], ['Region', '=', 'MENA']], channels: ['Email', 'Push', 'Paid'] },
      airplane:  { title: 'Lapsing high-value travellers', count: '22,410', rows: [['Last trip', '>', '4 months'], ['Lifetime value', '>', 'SAR 8,000'], ['Loyalty tier', '=', 'Gold'], ['Region', '=', 'GCC']], channels: ['Email', 'SMS', 'WhatsApp'] },
      gift:      { title: 'Lapsing loyalty shoppers', count: '29,905', rows: [['Last purchase', '>', '60 days'], ['Loyalty tier', '=', 'Gold'], ['Consent', '=', 'Marketing'], ['Region', '=', 'GCC']], channels: ['WhatsApp', 'SMS', 'Email'] }
    };

    function indRow(l, op, v) { return '<div class="flex items-center gap-2 rounded-lg bg-muted px-3 py-1.5 text-[13px]"><span class="flex-1 text-muted-foreground">' + l + '</span><span class="font-mono font-bold text-brand-foreground">' + op + '</span><span class="w-28 text-right font-semibold text-foreground">' + v + '</span></div>'; }
    function indChip(n) { return '<span class="rounded-full bg-brand-600 px-2.5 py-1 text-[11px] font-semibold text-white">' + n + '</span>'; }

    function indRender(key) {
      var s = INDUSTRIES[key];
      if (!s || !indBody) return;
      indBody.style.opacity = '0';
      setTimeout(function () {
        if (indTitle) indTitle.textContent = s.title;
        if (indRows) indRows.innerHTML = s.rows.map(function (r) { return indRow(r[0], r[1], r[2]); }).join('');
        if (indCount) indCount.textContent = s.count;
        if (indChannels) indChannels.innerHTML = s.channels.map(indChip).join('');
        indBody.style.opacity = '1';
      }, 200);
    }

    indTabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        indTabs.forEach(function (t) { t.className = indInactive; t.setAttribute('aria-selected', 'false'); });
        tab.className = indActive;
        tab.setAttribute('aria-selected', 'true');
        if (indLink) {
          indLink.setAttribute('href', tab.getAttribute('data-industry-url') || '#');
          var label = tab.getAttribute('data-industry-label') || '';
          indLink.childNodes[0].nodeValue = 'Explore ' + label + ' ';
        }
        indRender(tab.getAttribute('data-industry-tab'));
      });
    });
  }

  /* ---------------------------------------------------------------- *
   * Measure visual — two tabs (verified reach / attribution) toggle panels.
   * Progressive enhancement: without JS the reach panel shows.
   * ---------------------------------------------------------------- */
  var measureTabsWrap = document.querySelector('[data-measure-tabs]');
  if (measureTabsWrap) {
    var mBase = 'rounded-full px-4 py-2 text-sm font-semibold transition';
    var mActive = mBase + ' bg-brand-600 text-white';
    var mInactive = mBase + ' bg-muted text-muted-foreground hover:text-foreground';
    var mTabs = Array.prototype.slice.call(measureTabsWrap.querySelectorAll('[data-measure-tab]'));
    var mPanels = Array.prototype.slice.call(document.querySelectorAll('[data-measure-panel]'));
    mTabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var key = tab.getAttribute('data-measure-tab');
        mTabs.forEach(function (t) { t.className = t === tab ? mActive : mInactive; t.setAttribute('aria-selected', t === tab ? 'true' : 'false'); });
        mPanels.forEach(function (p) { p.hidden = p.getAttribute('data-measure-panel') !== key; });
      });
    });
  }

  /* ---------------------------------------------------------------- *
   * Integrations directory — live client-side filter over source names.
   * Progressive enhancement: without JS every source still renders.
   * ---------------------------------------------------------------- */
  var integrationsFilter = document.querySelector('[data-integrations-filter]');
  if (integrationsFilter) {
    var integrationItems = Array.prototype.slice.call(document.querySelectorAll('[data-integration]'));
    var integrationsEmpty = document.querySelector('[data-integrations-empty]');
    integrationsFilter.addEventListener('input', function () {
      var q = integrationsFilter.value.trim().toLowerCase();
      var shown = 0;
      integrationItems.forEach(function (el) {
        var match = !q || el.getAttribute('data-integration').indexOf(q) !== -1;
        el.hidden = !match;
        if (match) shown++;
      });
      if (integrationsEmpty) integrationsEmpty.hidden = shown !== 0;
    });
  }
})();
