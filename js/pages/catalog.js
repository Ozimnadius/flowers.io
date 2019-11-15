//catalog.js
$(function () {

    let catalog = $('.catalog__items'),
        btns = $('.catalog__type');

    btns.on('click', function (e) {
        let $this = $(this),
            type = $this.data('type'),
            items = catalog.find('.item');

        //ToDo здесь должен быть ajax
        if (!catalog.hasClass(type)) {
            btns.removeClass('active');
            $this.addClass('active');
            catalog.toggleClass('list blocks');
            items.toggleClass('list blocks');
        }


    });


    $('.filters__top').on('click', function (e) {
        let $this = $(this),
            filters = $this.closest('.filters');

        filters.toggleClass('active');

    });

});