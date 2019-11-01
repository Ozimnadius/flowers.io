// inputs.js

// range
const rangeFrom = $('.range__input_from'),
    rangeTo = $('.range__input_to'),
    range = $('.range__slider'),
    rangeMin = range.data('min');
rangeMax = range.data('max');

$(".range__slider").ionRangeSlider({
    prettify_enabled: true,
    skin: 'round',
    hide_from_to: true,
    hide_min_max: true,
    onChange: function (data) {
        rangeFrom.val(data.from_pretty);
        rangeTo.val(data.to_pretty);
    },
    onFinish: function (data) {
        //ToDo Здесь должень быть ajax на получение товаров
    },
});
let rangeSlider = $(".range__slider").data("ionRangeSlider");

$('.range__input').on('keypress', function (e) {
    if (e.key.match(/[^0-9]/g) || (this.value == 0 && e.key == 0)) {
        e.preventDefault();
    }
});

$('.range__input').on('input', function (e) {
    let $this = $(this),
        val = '',
        from = getNumber(rangeFrom.val()),
        to = getNumber(rangeTo.val());

    if ($this.hasClass('range__input_from')) {
        if (from < rangeMin) {
            from = rangeMin;
        } else if (from > to) {
            from = to;
        }
        val = from;
    } else {
        if (to > rangeMax) {
            to = rangeMax;
        } else if (to < from) {
            to = from;
        }
        val = to;
    }

    let valPretty = prettify(val);

    rangeSlider.update({
        from: from,
        to: to
    });

    $this.val(valPretty);
});

// select
$('.select').styler();

$('.filter__select').on('change',function (e) {
    //ToDo Здесь должень быть ajax на получение товаров
});

let oDatepicker = $('.ofield__datepicker').datepicker({
    classes: 'odatepicker',
    offset: -1,
    autoClose: true,
    onShow: function (inst, animationCompleted) {
        $('.ofield__field_date').toggleClass('opened');
    },
    onHide: function (inst, animationCompleted) {
        $('.ofield__field_date').toggleClass('opened');
    },

}).data('datapicker');