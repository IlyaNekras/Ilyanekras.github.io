window.addEventListener('DOMContentLoaded', () => {


    //показать/скрыть элементы категорий

    let listHidden = document.querySelector('.menu__category-list'),
        liItem = document.querySelectorAll('.menu__category-link');

    document.addEventListener('click', menu);

    function menu(event) {
        if (event.target.closest('.menu__category-point')) {
            listHidden.classList.toggle('menu__category-list_active');
        }
        if (!event.target.closest('.menu__category-point')) {
            listHidden.classList.remove('menu__category-list_active');
        }
    }


    liItem.forEach(function (el) {
        el.addEventListener('click', function () {
            listHidden.classList.remove('menu__category-list_active');
        });

    });


    //скрыть/показать меню

    let burger = document.querySelector('.menu__burger'),
        menuContent = document.querySelector('.menu-content'),
        exitBtn = document.querySelector('.menu-content__exit'),
        menuLink = document.querySelectorAll('.menu-content__link');

    document.addEventListener('click', menuItems);

    function menuItems(event) {
        if (event.target.closest('.menu__burger')) {
            menuContent.classList.toggle('menu-content_active');
        }
        if (!event.target.closest('.menu__burger')) {
            menuContent.classList.remove('menu-content_active');
        }
    }
    // burger.addEventListener('click', function () {
    //     menuContent.classList.toggle('menu-content_active');
    // });
    exitBtn.addEventListener('click', function () {
        menuContent.classList.toggle('menu-content_active');
    });

    menuLink.forEach(i => {
        i.addEventListener('click', function () {
            menuContent.classList.toggle('menu-content_active');
        });
    });



    //сортировка карточки товара

    let sortList = document.querySelector('.catalog__sort-list'),
        sortItem = document.querySelectorAll('.catalog__sort-item');

    document.addEventListener('click', button);

    function button(event) {
        if (event.target.closest('.catalog__sort-btn')) {
            sortList.classList.toggle('catalog__sort-list_active');
        }
        if (!event.target.closest('.catalog__sort-btn')) {
            sortList.classList.remove('catalog__sort-list_active');
        }
    }

    sortItem.forEach(function (el) {
        el.addEventListener('click', function () {
            sortList.classList.remove('catalog__sort-list_active');
        });

    });

    //слайдер главной страницы

    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="prev"><img src="icons/arrow-slider.svg"></button>',
        nextArrow: '<button type="button" class="next"><img src="icons/arrow-slider.svg"></button>',
        responsive: [
          {
            breakpoint: 531,
            settings: {
              arrows: false
            }
          }
        ]
    });

    //слайдер карточки товара

    $('.cart__carousel-inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.cart__carousel-items'
    });
    $('.cart__carousel-items').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="prev"><img src="icons/arrow-left.svg"></button>',
        nextArrow: '<button type="button" class="next"><img src="icons/arrow-right.svg"></button>',
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.cart__carousel-inner',
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });


    //табы

    $('.cart__item').on('click', function (e) {
        e.preventDefault();

        $('.cart__item').removeClass('cart__item_active');
        $('.cart__box-item').removeClass('cart__box-item_active');

        $(this).addClass('cart__item_active');
        $($(this).attr('href')).addClass('cart__box-item_active');

    });


    //активность сердечка

    $('.favorite').on('click', function () {
        $(this).toggleClass('favorite_active');
    });

    //слайдер значения цены

    $(".catalog-filters__range-item").ionRangeSlider({
        postfix: " ₽",
    });

    $('.filters-style').styler();


    //звездный рейтинг

    $(".rate-yo").rateYo({
        starWidth: "15px",
        normalFill: "#D1D1D1",
        ratedFill: "#000",
        spasing: "3px",
    });


});