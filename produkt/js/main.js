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


    $('.questions__carousel').on('afterChange', function () {
        let currentSlide = $('.questions__carousel').slick('slickCurrentSlide');
        if (currentSlide == 0) {
            $('.prev').hide();
            $('.next').show();
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
        } else if (currentSlide == 3) {
            $('.next').hide();
        }

    });

});