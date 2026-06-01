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
})();
