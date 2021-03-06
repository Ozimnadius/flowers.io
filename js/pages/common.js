// common.js
function getNumber(str) {
    return parseInt(str.replace(/\s/g, ''));
}

function imageResize(src, cls) {
    if (cls) {
        $(cls).not('.logo__img').attr('src', src);
    } else {
        $('img').not('.logo__img').attr('src', src);
    }

}

// imageResize('https://loremflickr.com/400/560','');


function number_format(number, decimals, dec_point, thousands_sep) {
    var i, j, kw, kd, km;
    if (isNaN(decimals = Math.abs(decimals))) {
        decimals = 2;
    }
    if (dec_point == undefined) {
        dec_point = ",";
    }
    if (thousands_sep == undefined) {
        thousands_sep = ".";
    }
    i = parseInt(number = (+number || 0).toFixed(decimals)) + "";
    if ((j = i.length) > 3) {
        j = j % 3;
    } else {
        j = 0;
    }
    km = (j ? i.substr(0, j) + thousands_sep : "");
    kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);
    kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : "");
    return km + kw + kd;
}

function prettify(num) {
    var n = num.toString();
    return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
}

function Cut(selector,size) {
    this.items = $(selector);
    this.size = size;
    let that = this;

    this.init = function () {
        that.items.each(function (indx,elem) {
            let item = $(elem),
                text = item.text();

            if(text.length > that.size){
                item.text(text.slice(0, that.size) + ' ...');
            }
        });
    };

}

const wWidth = $(window).width();

$('.jsBuy,.jsOne,.jsFavorites,.jsCompare').on('click', function (e) {
    e.preventDefault();
});

$('input[type=tel]').mask('+7 (999) 999-99-99');






