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

    default:
        echo json_encode(array(
            'status' => false,
        ));
        exit();
        break;
}