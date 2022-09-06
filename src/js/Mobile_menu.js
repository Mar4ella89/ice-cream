(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open-header]'),
    closeMenuBtn: document.querySelector('[data-menu-close-header]'),
    aboutSection: document.querySelector('[data-about-section]'),
    productsSection: document.querySelector('[data-products-section]'),
    menu: document.querySelector('[data-menu-header]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.aboutSection.addEventListener('click', toggleMenu);
  refs.productsSection.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();
