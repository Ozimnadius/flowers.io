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
    });

});