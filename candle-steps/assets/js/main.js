(() => {
  const menu = document.querySelector('[data-menu]');
  const topbar = document.querySelector('.topbar');
  if (menu && topbar) {
    menu.addEventListener('click', () => {
      const open = topbar.classList.toggle('menu-open');
      menu.setAttribute('aria-expanded', String(open));
    });
  }

  document.querySelectorAll('[data-year]').forEach((node) => {
    node.textContent = new Date().getFullYear();
  });
})();
