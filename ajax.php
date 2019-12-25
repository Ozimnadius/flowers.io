<?php
header('Content-Type: application/json');

$data = $_POST;
$action = $data['action'];
switch ($action) {
    case 'callorderSubmit':
        echo json_encode(array(
            'status' => true,
            'html' => '<div class="form__success"><div class="form__title">Спасибо мы скоро с Вами свяжемся.</div></div>'
        ));
        exit();
        break;
    case 'fastbuySubmit':
        echo json_encode(array(
            'status' => true,
            'html' => '<div class="form__success"><div class="form__title">Спасибо мы скоро с Вами свяжемся.</div></div>'
        ));
        exit();
        break;
    case 'lazymanSubmit':
        echo json_encode(array(
            'status' => true,
            'html' => '<div class="form__success"><div class="form__title">Спасибо мы скоро с Вами свяжемся.</div></div>'
        ));
        exit();
        break;
    case 'quickview':
        echo json_encode(array(
            'status' => true,
            'html' => getQuickview()
        ));
        exit();
        break;

    default:
        echo json_encode(array(
            'status' => false,
        ));
        exit();
        break;
}

function getQuickview()
{
    ob_start();
    ?>
    <div class="qw">
        <div class="qw__top">
            <div class="qw__title">НАСТОЯЩЕЕ ЧУВСТВО</div>
            <button class="qw__close jsClose" type="button">
                <svg class="qw__close-svg">
                    <use xlink:href="/images/icons/sprite.svg#close2"></use>
                </svg>
            </button>
        </div>
        <div class="qw__bottom">
            <div class="row qw__row">
                <div class="qw__left">
                    <div class="product__img">
                        <div class="product__img-wrap qw__img-wrap"><img class="product__img-img"
                                                                         src="images/content/product/image.jpg" alt=""/>
                        </div>
                        <div class="product__controls">
                            <button class="product__control jsFavorites" type="button">
                                <svg class="product__control-svg">
                                    <use xlink:href="/images/icons/sprite.svg#heart"></use>
                                </svg>
                                <span class="product__control-txt">В избранное</span>
                            </button>
                            <button class="product__control jsCompare" type="button">
                                <svg class="product__control-svg">
                                    <use xlink:href="/images/icons/sprite.svg#compare"></use>
                                </svg>
                                <span class="product__control-txt">В сравнение</span>
                            </button>
                        </div>
                    </div>
                    <div class="product__images">
                        <div class="product__image" data-src="images/content/product/image.jpg">
                            <div class="product__image-wrap"><img class="product__image-img"
                                                                  src="images/content/product/1.jpg" alt=""/>
                            </div>
                        </div>
                        <div class="active product__image" data-src="images/content/product/image.jpg">
                            <div class="product__image-wrap"><img class="product__image-img"
                                                                  src="images/content/product/2.jpg" alt=""/>
                            </div>
                        </div>
                        <div class="product__image" data-src="images/content/product/image.jpg">
                            <div class="product__image-wrap"><img class="product__image-img"
                                                                  src="images/content/product/3.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="qw__right">
                    <div class="product__prices">
                        <div class="product__price">
                            <div class="price"><span class="price__val">2 295&nbsp;</span><span class="price__cur">руб./ шт.</span>
                            </div>
                        </div>
                        <div class="product__oldprice">
                            <div class="price price_old"><span class="price__val">-3 140&nbsp;</span><span
                                        class="price__cur">руб.</span></div>
                        </div>
                    </div>
                    <div class="product__notice">* Цена букета “Премиум”</div>
                    <div class="qw__wrapper">
                        <div class="product__vars">
                            <label class="product__var" data-id="1">
                                <input class="product__var-input" type="radio" name="price" checked><span
                                        class="product__var-wrap"><span class="product__var-left"><span
                                                class="product__var-fake"></span><span class="product__var-title">«Премиум»</span><span
                                                class="product__var-count">(50 роз)</span></span><span
                                            class="product__var-right"><span
                                                class="product__var-price">2 295 руб.</span></span></span>
                            </label>
                            <label class="product__var" data-id="2">
                                <input class="product__var-input" type="radio" name="price"><span
                                        class="product__var-wrap"><span class="product__var-left"><span
                                                class="product__var-fake"></span><span class="product__var-title">«Средний»</span><span
                                                class="product__var-count">(35 роз)</span></span><span
                                            class="product__var-right"><span
                                                class="product__var-price">1 800 руб.</span></span></span>
                            </label>
                            <label class="product__var" data-id="3">
                                <input class="product__var-input" type="radio" name="price"><span
                                        class="product__var-wrap"><span class="product__var-left"><span
                                                class="product__var-fake"></span><span class="product__var-title">«Меньше»</span><span
                                                class="product__var-count">(25 роз)</span></span><span
                                            class="product__var-right"><span
                                                class="product__var-price">1 800 руб.</span></span></span>
                            </label>
                        </div>
                        <div class="product__btns qw__btns">
                            <button class="product__buy btn4 btn4_r jsBuy" type="button"><span class="btn4__txt">Заказать букет</span>
                            </button>
                            <button class="product__one jsOne" type="button" data-id="24">
                                <svg class="product__one-svg">
                                    <use xlink:href="/images/icons/sprite.svg#arrow"></use>
                                </svg>
                                <span class="product__one-txt">Купить в 1 клик</span>
                            </button>
                        </div>
                        <div class="product__status">Есть в наличии</div>
                        <!--.product__status.product__status_not Нет в наличии-->
                        <div class="product__chars">
                            <div class="product__char">
                                <div class="product__char-name">Размеры:</div>
                                <div class="product__char-val">Высота: 50 см<br>Диаметр: 45 см</div>
                            </div>
                            <div class="product__char">
                                <div class="product__char-name">Состав:</div>
                                <div class="product__char-val">Благородный букет из бронзовых<br>орхидей, пионовидных
                                    роз, каркадэ
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <?
    $html = ob_get_contents();
    ob_end_clean();
    return $html;
}