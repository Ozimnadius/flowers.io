//index.js
$(function () {

    let itemsWrap = $('.ipop__items .row');

    $('.fprice__top').on('click', function (e) {
        let $this = $(this),
            parent = $this.closest('.fprice');
        parent.toggleClass('opened');
    });

    $('body').on('click', function (e) {
        if ($(e.target).closest('.fprice').length == 0) {
            $('.fprice').removeClass('opened');
        }
    });

    $('.ipop__more').on('click', function (e) {
        //ToDo тут должен быт ajax
        let items = $('.ipop__item').clone();
        itemsWrap.append(items);
    });
});