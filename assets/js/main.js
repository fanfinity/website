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
   * Attribution capture — record where a lead came from so source /
   * campaign travels with them into the CRM. Reads UTM + ad-click params
   * from the URL, keeps first-touch (persisted) and last-touch, and fills
   * matching hidden fields on any lead form. These are campaign labels the
   * visitor arrived with (not tracking cookies), and only leave the browser
   * if the visitor chooses to submit a form. Also exposed on
   * window.ffAttribution so a Pipedrive Web Form embed or GTM can read it.
   * ---------------------------------------------------------------- */
  (function captureAttribution() {
    // LinkedIn is our only ad channel — keep the UTM set + LinkedIn's click id.
    var KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'li_fat_id'];
    var params = new URLSearchParams(window.location.search);
    var current = {};
    KEYS.forEach(function (k) { var v = params.get(k); if (v) current[k] = v; });

    function read(key) { try { return JSON.parse(window.localStorage.getItem(key) || '{}'); } catch (e) { return {}; } }
    function write(key, val) { try { window.localStorage.setItem(key, JSON.stringify(val)); } catch (e) {} }

    if (Object.keys(current).length) {
      current.landing_page = window.location.pathname;
      current.referrer = document.referrer || '';
      // First touch is written once and never overwritten; last touch always updates.
      if (!window.localStorage.getItem('ff_attr_first')) write('ff_attr_first', current);
      write('ff_attr_last', current);
    }

    var first = read('ff_attr_first');
    var last = read('ff_attr_last');
    window.ffAttribution = { first: first, last: last };

    // Fill hidden fields on same-origin lead forms: last-touch as utm_*,
    // first-touch as first_utm_* — only when the field exists and is empty.
    Array.prototype.slice.call(document.querySelectorAll('[data-lead-form]')).forEach(function (form) {
      Object.keys(last).forEach(function (k) {
        var el = form.elements[k];
        if (el && !el.value) el.value = last[k];
      });
      Object.keys(first).forEach(function (k) {
        var el = form.elements['first_' + k];
        if (el && !el.value) el.value = first[k];
      });
    });
  })();

  /* ---------------------------------------------------------------- *
   * Pipedrive Web Forms — the demo/contact forms are cross-origin
   * iframes, so (a) we append captured UTMs to the embed URL before the
   * iframe is built so campaign source travels into the CRM, and
   * (b) we inject the Pipedrive loader ourselves (rather than inline) so
   * the append happens first. Requires matching hidden fields on the
   * Pipedrive form for the params to be stored on the Lead.
   * ---------------------------------------------------------------- */
  (function pipedriveWebForms() {
    var mounts = Array.prototype.slice.call(document.querySelectorAll('.pipedriveWebForms[data-pd-webforms]'));
    if (!mounts.length) return;

    var last = (window.ffAttribution && window.ffAttribution.last) || {};
    var pairs = [];
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'li_fat_id'].forEach(function (k) {
      if (last[k]) pairs.push(encodeURIComponent(k) + '=' + encodeURIComponent(last[k]));
    });

    mounts.forEach(function (el) {
      var url = el.getAttribute('data-pd-webforms') || '';
      if (pairs.length && url.indexOf('utm_') === -1) {
        el.setAttribute('data-pd-webforms', url + (url.indexOf('?') > -1 ? '&' : '?') + pairs.join('&'));
      }
    });

    var s = document.createElement('script');
    s.src = 'https://webforms.pipedrive.com/f/loader';
    s.async = true;
    document.body.appendChild(s);
  })();

  /* ---------------------------------------------------------------- *
   * Pipedrive submit → conversion signal. The iframe posts a message on
   * successful submit; Pipedrive doesn't document the payload, so we match
   * defensively (own origin + a "submit" marker) and fire once. Feeds GA4
   * directly (if consented) and dataLayer for GTM. Recent Pipedrive-origin
   * messages are stashed on window.ffPipedriveMessages so the exact payload
   * can be inspected on the live site and the match tightened if needed.
   * ---------------------------------------------------------------- */
  (function pipedriveConversion() {
    if (!document.querySelector('.pipedriveWebForms[data-pd-webforms]')) return;
    var fired = false;
    window.ffPipedriveMessages = [];
    window.addEventListener('message', function (ev) {
      if (ev.origin !== 'https://webforms.pipedrive.com') return;
      var data;
      try { data = typeof ev.data === 'string' ? ev.data : JSON.stringify(ev.data); } catch (e) { return; }
      if (!data) return;
      if (window.ffPipedriveMessages.length < 20) window.ffPipedriveMessages.push(ev.data);
      if (fired || data.toLowerCase().indexOf('submit') === -1) return;
      fired = true;
      var source = window.location.pathname.indexOf('/demo') === 0 ? 'demo_form' : 'contact_form';
      if (typeof window.gtag === 'function') { window.gtag('event', 'generate_lead', { form_source: source }); }
      (window.dataLayer = window.dataLayer || []).push({ event: 'generate_lead', form_source: source, channel: 'pipedrive' });
      // LinkedIn conversion — only fires if the Insight Tag loaded (marketing consent
      // given) and a conversion id is configured. Silent no-op otherwise.
      if (typeof window.lintrk === 'function' && window.ffLinkedInConversionId) {
        window.lintrk('track', { conversion_id: window.ffLinkedInConversionId });
      }
    }, false);
  })();

  /* ---------------------------------------------------------------- *
   * Lead-capture forms (demo + contact) — validation, then submit to
   * the configured endpoint (site.forms.endpoint → form[action]). When
   * no endpoint is set we say so plainly rather than fake a delivery.
   * ---------------------------------------------------------------- */
  var leadForms = Array.prototype.slice.call(document.querySelectorAll('[data-lead-form]'));
  var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  leadForms.forEach(function (form) {
    // Validate only the fields this form actually has — so a full lead form
    // (name/company/email) and an email-only newsletter box share one handler.
    var required = ['first_name', 'last_name', 'email', 'company'].filter(function (f) {
      return form.elements[f];
    });
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
            // Conversion signal — GA4 directly (if consented) and dataLayer for GTM later.
            var source = (form.elements['_source'] && form.elements['_source'].value) || form.id || 'lead_form';
            if (typeof window.gtag === 'function') { window.gtag('event', 'generate_lead', { form_source: source }); }
            (window.dataLayer = window.dataLayer || []).push({ event: 'generate_lead', form_source: source });
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
   * Cookie preferences — the consent banner and script gating are owned
   * by CookieConsent (orestbida) in head.html. Here we only wire the
   * footer "Cookie preferences" button to reopen its preferences modal.
   * ---------------------------------------------------------------- */
  document.querySelectorAll('[data-cookie-open]').forEach(function (el) {
    el.addEventListener('click', function (ev) {
      ev.preventDefault();
      if (window.CookieConsent && typeof window.CookieConsent.showPreferences === 'function') {
        window.CookieConsent.showPreferences();
      }
    });
  });

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
    var integrationsCount = document.querySelector('[data-integrations-count]');
    integrationsFilter.addEventListener('input', function () {
      var q = integrationsFilter.value.trim().toLowerCase();
      var shown = 0;
      integrationItems.forEach(function (el) {
        var match = !q || el.getAttribute('data-integration').indexOf(q) !== -1;
        el.hidden = !match;
        if (match) shown++;
      });
      if (integrationsEmpty) integrationsEmpty.hidden = shown !== 0;
      if (integrationsCount) integrationsCount.textContent = shown;
    });
  }
})();
