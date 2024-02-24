function setupMobileMenu() {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const body = document.body;

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);

    mobileMenu.classList.toggle('is-open');
    body.classList.toggle('menu-open');

    if (body.classList.contains('menu-open')) {
      disableScroll();
    } else {
      enableScroll();
    }
  };

  const closeMenu = () => {
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    body.classList.remove('menu-open');
    enableScroll();
  };

  const disableScroll = () => {
    body.style.overflow = 'hidden';
  };

  const enableScroll = () => {
    body.style.overflow = 'visible';
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  body.addEventListener('click', event => {
    if (
      event.target.closest('.js-menu-container') ||
      event.target.closest('.js-open-menu')
    ) {
      return;
    }
    if (mobileMenu.classList.contains('is-open')) {
      closeMenu();
    }
  });

  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    closeMenu();
  });
}

function buildMenu() {
  const currentPageUrl = window.location.pathname;

  const menuItems = [
    { label: 'Home', href: '/', activeOn: '/index.html' },
    { label: 'Favorites', href: 'favorites.html', activeOn: 'favorites.html' },
  ];

  const menu = document.createElement('ul');
  menu.classList.add('header-pages');

  for (const item of menuItems) {
    const listItem = document.createElement('li');
    listItem.classList.add('header-pages-item');

    if (
      currentPageUrl === item.activeOn ||
      currentPageUrl === item.href ||
      currentPageUrl.endsWith(item.activeOn)
    ) {
      listItem.classList.add('header-pages-active');
      listItem.textContent = item.label;
    } else {
      listItem.classList.add('header-inactive');
      const link = document.createElement('a');
      link.classList.add('header-item-link');
      link.href = item.href;
      link.textContent = item.label;
      listItem.appendChild(link);
    }

    menu.appendChild(listItem);
  }

  // document.querySelector('#header-pages').appendChild(menu);

  let element = document.querySelector('#header-pages');
  element.replaceChild(menu, element.querySelectorAll('ul')[0]);
  element = document.querySelector('#header-pages');
}

window.onload = buildMenu;
setupMobileMenu();
