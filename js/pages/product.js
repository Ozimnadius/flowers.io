//product.js
$(function () {

    const imgs = $('.product__image'),
        img = $('.product__img-img');

    imgs.on('click', function (e) {
        let $this = $(this),
            src = $this.data('src');


        imgs.removeClass('active');
        $this.addClass('active');
        img.attr('src',src);

    });

});