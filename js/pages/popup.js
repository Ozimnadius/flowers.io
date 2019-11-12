//popup.js
$(function () {

    const templates = $('.templates'),
        popup = $('.popup'),
        popupContent = popup.find('.popup__content');


    $('body').on('click', '.jsCallorder', function (e) {
        e.preventDefault();

        let form = templates.find('[data-id=callorder]').clone().addClass('callorder');
        popupContent.html(form);
        popup.addClass('active');
        form.find('input[type=tel]').mask('+7 (999) 999-99-99');

        form.validate({
            rules: {
                callName: "required",
                callTel: "required",
            },
            messages: {
                callName: "Введите имя",
                callTel: "Введите телефон"
            },

            submitHandler: function (form) {
                let data = $(form).serialize();
                $.ajax({
                    dataType: "json",
                    type: "POST",
                    url: 'ajax.php',
                    data: data,
                    success: function (result) {
                        if (result.status) {
                            $(form).find('.form__content').html(result.html);
                        } else {
                            alert('Что-то пошло не так, попробуйте еще раз!!!');
                        }
                    },
                    error: function (result) {
                        alert('Что-то пошло не так, попробуйте еще раз!!!');
                    }
                });
            },
            invalidHandler: function (event, validator) {
                // debugger;
            },
            errorPlacement: function (error, element) {
                element[0].placeholder = error[0].innerText;
                // debugger;
            }
        });

    });

    $('body').on('click', '.form__close, .form2__close', function (e) {
        e.preventDefault();
        popup.removeClass('active');
    });

    $('body').on('change', '.fz__input', function (e) {
        let $this = $(this),
            cls = $this.data('btn'),
            form = $this.closest('form'),
            btn = form.find('.' + cls);

        btn.toggleClass('disabled');
    });

    $('body').on('click', '.jsOne', function (e) {
        e.preventDefault();

        let form = templates.find('[data-id=fastbuy]').clone().addClass('fastbuy'),
            btn = $(this),
            id = btn.data('id'),
            formBtn = form.find('.form2__btn'),
            hidden = form.find('.form2__id');

        formBtn.attr('data-id', id);
        hidden.val(id);
        popupContent.html(form);
        popup.addClass('active');
        form.find('.form__select').styler();
        form.find('input[type=tel]').mask('+7 (999) 999-99-99');

        form.validate({
            rules: {
                fastName: "required",
                fastTel: "required",
                fastAddr: "required",
            },
            messages: {
                fastName: "Введите имя",
                fastTel: "Введите телефон",
                fastAddr: "Введите адрес"
            },

            submitHandler: function (form) {
                let data = $(form).serialize();
                $.ajax({
                    dataType: "json",
                    type: "POST",
                    url: 'ajax.php',
                    data: data,
                    success: function (result) {
                        if (result.status) {
                            $(form).find('.form2__content').html(result.html);
                        } else {
                            alert('Что-то пошло не так, попробуйте еще раз!!!');
                        }
                    },
                    error: function (result) {
                        alert('Что-то пошло не так, попробуйте еще раз!!!');
                    }
                });
            },
            invalidHandler: function (event, validator) {
                // debugger;
            },
            errorPlacement: function (error, element) {
                element[0].placeholder = error[0].innerText;
                // debugger;
            }
        });


    });

    $('body').on('click', '.jsLazyman', function (e) {
        e.preventDefault();

        let form = templates.find('[data-id=lazyman]').clone().addClass('lazyman'),
            btn = $(this),
            id = btn.data('id'),
            hidden = form.find('.form__id');

        hidden.val(id);
        popupContent.html(form);
        popup.addClass('active');
        form.find('input[type=tel]').mask('+7 (999) 999-99-99');

        form.validate({
            rules: {
                lazyName: "required",
                lazyTel: "required",
            },
            messages: {
                lazyName: "Введите имя",
                lazyTel: "Введите телефон",
            },

            submitHandler: function (form) {
                let data = $(form).serialize();
                $.ajax({
                    dataType: "json",
                    type: "POST",
                    url: 'ajax.php',
                    data: data,
                    success: function (result) {
                        if (result.status) {
                            $(form).find('.form__content').html(result.html);
                        } else {
                            alert('Что-то пошло не так, попробуйте еще раз!!!');
                        }
                    },
                    error: function (result) {
                        alert('Что-то пошло не так, попробуйте еще раз!!!');
                    }
                });
            },
            invalidHandler: function (event, validator) {
                // debugger;
            },
            errorPlacement: function (error, element) {
                element[0].placeholder = error[0].innerText;
                // debugger;
            }
        });


    });
});