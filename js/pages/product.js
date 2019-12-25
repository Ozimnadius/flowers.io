//product.js
$(function () {

    $('body').on('click','.product__image', function (e) {
        let $this = $(this),
            imgs = $('.product__image'),
            img = $('.product__img-img'),
            src = $this.data('src');

        imgs.removeClass('active');
        $this.addClass('active');
        img.attr('src',src);

    });

});