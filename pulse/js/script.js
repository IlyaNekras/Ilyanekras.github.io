// var name = "Ilya";

// let number = 7;
// const pi = 3.14;

// number = 4; /* ошибки нет */

// let leftBorderWidth = 200;

//типы данных

//number - числа для обозн ЗП, количества пикселей и тп. (все, что можно измерить количественно)
//string - "", '',`` - информация, кот можно описать словами (имя, описание предмета и прочее)
//true/false - у вас открыто окно? если да - true, если нет - false
//null - по простому: это когда чего то не существует
//undefined - по простому: что то существует, но значения никакого не имеет
//let obj = {
//    name: 'apple',
//    color: 'green',
//    weight: 200
//}
//Symbol

//alert(1234)
//console.log(number);
//let answer = confirm("Вам есть 18?");
//console.log(answer);

//let answer = prompt("Вам есть 18?","");
//console.log(answer);

//console.log(4 + 'fdd');

//let isChecked = false,
//    isClose = false;

//console.log(isChecked && isClose);
//|| - оператор "или"

//console.log(isChecked || isClose);
//== - сравнение, = - присваивание, === - более строгое сравнение

//if (2*6 == 8*1) {
//    console.log('Верно')
//} else{
//    console.log('Ошибка')
//}

//let answer = confirm("Вам есть 18?","");
//if(answer) {
//    console.log('Проходите')
//}else{
//    console.log('Уходи')
//}

// const num = 50;

// if(num < 49) {
//     console.log('Неправильно')
// } else if (num > 100){
//     console.log('Много')
// } else {
//     console.log('Верно')
// }

//Циклы
//++ - оператор, увеличивающий переменную на единицу
// for(let i = 1; i < 8; i++){
//     console.log(i);
// }

//Функции
// function logging(a, b) {
//     console.log(a+b)
// }

// logging(3, 5);

// logging(6, 8);

$(document).ready(function () {
  $('.carousel__inner').slick({
    speed: 1200,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="prev"><img src="icons/left_arrows.png"></button>',
    nextArrow: '<button type="button" class="next"><img src="icons/right_arrows.png"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          arrows: false
        }
      }
    ]
  });
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
    });
  };
  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');

  // Modal 

  $('[data-modal=consultation]').on('click', function () {
    $('.overlay, #consultation').fadeIn('slow');
  });
  $('.modal__close').on('click', function () {
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow')
  })

  $('.button_mini').each(function (i) {
    $(this).on('click', function () {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    })
  });

  function validateForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name:
        {
          required: "Пожалуйста, введите свое имя",
          minlength: jQuery.validator.format("Введите {0} символа")
        },
        phone: "Пожалуйста, введите свой номер телефона",
        email: {
          required: "Пожалуйста, введите свою почту",
          email: "Неправильно введен адрес почты"
        }
      }
    });
  };

  validateForms('#consultation-form');
  validateForms('#consultation form');
  validateForms('#order form');

  $('input[name=phone]').mask("+7 (999) 999-99-99");

  $('form').submit(function (e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function () {
      $(this).find("input").val("");
      $('#consultation, #order').fadeOut();
      $('.overlay, #thanks').fadeIn('slow');

      $('form').trigger('reset');
    });
    return false;
  });

  // Smooth scroll and pageup

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1600) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });
  $("a[href=#up]").click(function () {
    const _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
    return false;
  });

  new WOW().init();
});