let menuList = document.querySelector('.menu__list'),
    menuItem = document.querySelectorAll('.menu_item'),
    menuHamburger = document.querySelector('.menu__hamburger');

menuHamburger.addEventListener('click', () => {
    menuHamburger.classList.toggle('menu__hamburger_active');
    menuList.classList.toggle('menu__list_active');
});
menuItem.forEach(item => {
    item.addEventListener('click', () => {
        menuHamburger.classList.toggle('menu__hamburger_active');
        menuList.classList.toggle('menu__list_active');
    });
});