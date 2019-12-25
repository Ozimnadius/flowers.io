//sliders.js
$(function () {
    let swiperSlider = new Swiper('.slider__container', {
        spaceBetween: 20,
        slidesPerView: 4,
        scrollbar: {
            el: '.slider__scrollbar-wrap',
            dragSize: 110,
            draggable: true
        },
        navigation: {
            nextEl: '.slider__next',
            prevEl: '.slider__prev',
        },
        breakpoints: {
            // when window width is >= 769.99px
            769.99: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            // when window width is >= 1379.99px
            1379.99: {
                slidesPerView: 2,
            }
        }
    });


    let swiperPop = new Swiper('.pop__container', {
        spaceBetween: 20,
        slidesPerView: 4,
        scrollbar: {
            el: '.pop__scrollbar-wrap',
            dragSize: 110,
            draggable: true
        },
        navigation: {
            nextEl: '.pop__next',
            prevEl: '.pop__prev',
        },
        breakpoints: {
            // when window width is >= 769.99px
            769.99: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            // when window width is >= 1379.99px
            1379.99: {
                slidesPerView: 2,
                spaceBetween: 20,
            }
        }
    });

    let swiperWow = new Swiper('.iwow__container', {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: '.iwow__pag',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.iwow__next',
            prevEl: '.iwow__prev',
        }
    });


});