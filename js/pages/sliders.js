//sliders.js
$(function () {
    let swiperSlider = new Swiper('.swiper-container', {
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


});