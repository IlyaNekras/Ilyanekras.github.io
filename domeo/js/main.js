window.addEventListener('DOMContentLoaded', () => {
    $('.questions__carousel').slick({
        infinite: false,
        prevArrow: '<button type="button" id="prev" class="prev prev-remove">Назад</button>',
        nextArrow: '<button type="button" id="next" class="next next-remove">Далее</button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1,
        swipe: false,

    });

    //изменение состояния кнопок
    $('.questions__carousel').on('afterChange', function () {
        let currentSlide = $('.questions__carousel').slick('slickCurrentSlide');
        if (currentSlide == 0) {
            $('.prev').hide();
        } else if (currentSlide == 3) {
            $('.next').hide();
            $('.prev').hide();
        }
        if (currentSlide > 0 && currentSlide < 3) {
            $('.prev').show();
        }
    });
    $(document).ready(function () {
        let currentSlide = $('.questions__carousel').slick('slickCurrentSlide');
        if (currentSlide == 0) {
            $('.prev').hide();
        }
    });

    //modal
    $('[data-modal=feedback]').on('click', function () {
        $('.modal, #modal-win').show();
        $('body').css('overflow', 'hidden');
    });
    $('.modal').css('overflow', 'scroll');

    $('form').submit(function () {
        $('#modal-win').hide();
        $('.modal, #thanks').show();
        $('form').trigger('reset');
        return false;
    });
    $('.modal__btn-exit').on('click', function () {
        $('.modal, #thanks').hide();
        $('body').css('overflow', 'auto');
    });

    $(document).mouseup(function (e) {
        if (!$("#modal-win").is(e.target) && $("#modal-win").has(e.target).length === 0) {
            $("#modal-win, #thanks, .modal").hide();
            $('body').css('overflow', 'auto');
        }
    });
});