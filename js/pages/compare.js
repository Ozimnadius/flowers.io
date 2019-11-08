//compare.js
$(function () {


    let swiperCompare = new Swiper('.compare__container', {
        spaceBetween: 20,
        slidesPerView: 4,
        slidesPerGroup: 4,
        watchSlidesVisibility: true,
        pagination: {
            el: '.compare__pag',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.compare__next',
            prevEl: '.compare__prev',
        },
        on: {
            update: function () {
                let pag = $('.compare__pag'),
                    current = pag.find('.swiper-pagination-current'),
                    total = pag.find('.swiper-pagination-total'),
                    slides = $(this.slides),
                    slidesVisible = slides.filter('.swiper-slide-visible');
                current.text(this.activeIndex + slidesVisible.length);
                total.text(slides.length);

                let arr = [];

                slidesVisible.each(function (indx, elem) {
                    arr.push($(elem).data('id'));
                });


                let newChars = new Chars(arr).init();
            },
            paginationUpdate: function (swiper, paginationEl) {
                let pag = $(paginationEl),
                    current = pag.find('.swiper-pagination-current'),
                    total = pag.find('.swiper-pagination-total'),
                    slides = $(this.slides),
                    slidesVisible = slides.filter('.swiper-slide-visible');
                current.text(this.activeIndex + slidesVisible.length);
                total.text(slides.length);

                let arr = [];

                slidesVisible.each(function (indx, elem) {
                    arr.push($(elem).data('id'));
                });


                let newChars = new Chars(arr).init();
            },
            click: function (e) {
                this.removeSlide(this.clickedIndex);
                this.update();
            }
        }

    });


    function Chars(arr) {
        this.charsList = {};
        this.charsObj = {};
        this.arr = arr;
        this.tmplChars = $(tmplChars.innerHTML);
        this.tmplItem = $(tmplCharsItem.innerHTML);
        this.tmplChar = $(tmplCharsChar.innerHTML);
        this.tmplPrice = $(tmplCharsPrice.innerHTML);
        this.tmplBtns = $(tmplCharsBtns.innerHTML);
        let that = this;

        this.init = function () {
            for (var key in chars) {
                let item = chars[key];
                Object.assign(that.charsList, item.list);
            }

            that.mergeChars();
            that.renderChars();
        };

        this.mergeChars = function () {
            //Добавляем id объектов
            that.charsObj.ids = [];
            that.arr.forEach(function (i, x, arr) {
                that.charsObj.ids.push(i);
            });

            //Добавляем цены объектов
            that.charsObj.prices = [];
            that.arr.forEach(function (i, x, arr) {
                that.charsObj.prices.push(chars[i].price);
            });

            //Добавляем все характристики
            that.charsObj.chars = {};
            for (var key in that.charsList) {
                that.charsObj.chars[key] = {};
                that.charsObj.chars[key].list = [];

                let val = chars[arr[0]].list[key],
                    dopClass = 'same';

                that.arr.forEach(function (i, x, arr) {
                    let value = chars[i].list[key];
                    that.charsObj.chars[key].list.push(value);

                    if (val != value) {
                        dopClass = '';
                    }
                });

                that.charsObj.chars[key].dopClass = dopClass;
            }
        };

        this.renderChars = function () {
            let chars = that.tmplChars.clone(),
                wrap = $('.compare__chars');
            renderList(chars);
            renderPrices(chars);
            renderBtns(chars);
            wrap.html(chars);

        };

        function renderList(chars) {
            let charsList = chars.find('.tmpList');

            for (let key in that.charsObj.chars) {
                charsList.append(renderItem(key, that.charsObj.chars[key]));
            }
            return charsList;
        };

        function renderItem(title, obj) {
            let item = that.tmplItem.clone(),
                itemTitle = item.find('.chars__item-title'),
                itemList = item.find('.tmpChars'),
                arr = obj.list;

            item.addClass(obj.dopClass);
            itemTitle.text(title);


            arr.forEach(function (i, x, arr) {
                itemList.append(renderChar(i));
            });
            return item;
        };

        function renderChar(title) {
            let char = that.tmplChar.clone();
            char.text(title);
            return char;
        };

        function renderPrices(chars) {
            let pricesList = chars.find('.tmpPrice');

            that.charsObj.prices.forEach(function (i, x, arr) {
                pricesList.append(renderPrice(i));
            });
            return pricesList;
        }

        function renderPrice(val) {
            let price = that.tmplPrice.clone();
            price.text(val);
            return price;
        }

        function renderBtns(chars) {
            let btnsList = chars.find('.tmpBtns');
            that.charsObj.ids.forEach(function (i, x, arr) {
                btnsList.append(renderBtn(i));
            });
            return btnsList;
        }

        function renderBtn(val) {
            let item = that.tmplBtns.clone(),
                buy = item.find('.char__buy'),
                one = item.find('.char__one');
            buy.attr('data-id', val);
            one.attr('data-id', val);

            return item;
        }

    };

    $('.compare__btn').on('click', function (e) {
        let btn = $(this),
            btns = $('.compare__btn'),
            sameChars = $('.chars__item.same');

        if(btn.hasClass('compare__btn_hide')){
            sameChars.addClass('hidden');
        } else{
            sameChars.removeClass('hidden');
        }

        btns.removeClass('active');
        btn.addClass('active');

    });

});