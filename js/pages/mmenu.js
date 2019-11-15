//mmenu.js
$(function () {
    const mmenu = $('.mmenu');

    $('.jsMmenuOpen').on('click', function (e) {
        mmenu.addClass('active');
    });
    $('.jsMmenuClose').on('click', function (e) {
        mmenu.removeClass('active');
    });

    $('.mnav__item-btn').on('click', function (e) {
        let btn = $(this),
            btns = $('.mnav__item-btn').not(btn),
            subnav = btn.next(),
            subnavs = $('.msubnav').not(subnav);

        btns.removeClass('active');
        btn.toggleClass('active');
        subnavs.slideUp(300);
        subnav.slideToggle(300)

    });

});