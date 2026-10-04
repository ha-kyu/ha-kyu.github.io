/* ================================================================
   Ha-Kyū — Main JavaScript
   ================================================================ */

(function () {
  'use strict';

  /* ── ハンバーガーメニュー ── */
  const toggle = document.querySelector('.site-nav__toggle');
  const menu   = document.querySelector('.site-nav__menu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      const isOpen = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // メニュー外タップで閉じる
    document.addEventListener('click', function (e) {
      if (!toggle.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    // リンクをクリックしたら閉じる
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ── 現在ページのナビリンクに aria-current を付与 ── */
  const currentPath = window.location.pathname.replace(/\/index\.html$/, '/');
  document.querySelectorAll('.site-nav__menu a').forEach(function (link) {
    const linkPath = new URL(link.href).pathname.replace(/\/index\.html$/, '/');
    if (linkPath === currentPath) {
      link.setAttribute('aria-current', 'page');
    }
  });

})();
