<!DOCTYPE html>
<html lang="ru">

<?php
$nav = [
    ['Главная', '/'],
    ['О компании', '/about'],
    ['Направления', '/directions'],
    ['Деятельности', '/events'],
    ['Наши работы', '/ourWorks'],
    ['Контакты', '/contacts']
]
?>
<head>
    <!-- Title -->
    <title>Сигнал</title>

    <!-- Required Meta Tags Always Come First -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">

    <!-- Favicon -->
    <link rel="shortcut icon" href="favicon.ico">

    <!-- CSS Customization -->
    <link rel="stylesheet" href="templates/css/main.css">
    <link rel="stylesheet" href="templates/js/slick/slick.css">



</head>

<body>
<main>
    <header>
        <div class="container">
            <div class="header__top-row">
                <a href="/">
                    <div class="logo_block">

                            <img src="logo.svg">
                    </div>
                </a>

                <div class="header__top-row_right-block">
                    <div class="header_contacts middle">
                        <a class="header_contacts_phone" href="!#">+7 (495) <b>677-17-79</b> </a>
                        <div class="header__number_dropdown ">
                            <a  href="!#">+7 (495) <b>677-17-79</b> </a>
                        </div>
                        <span class="header_contacts_address">
                            г. Москва, Варшавское Варшавское ш, д.68 к.3
                        </span>
                    </div>
                    <button class="button header__top-row_button">
                        Обратная связь
                    </button>
                </div>
            </div>
        </div>



        <div class="header__bottom">
            <div class="container header__bottom-row">
                <nav >
                    <ul class="header__nav">
                        <?php foreach ($nav as $li) : ?>
                        <li>
                            <a href="<?=$li[1]?>">
                                <?=$li[0]?>
                            </a>
                        </li>
                        <?php endforeach;?>
                    </ul>
                </nav>

                <form class="header__search">
                    <input placeholder="Поиск по сайту:" class="header__search_input" type="text"/>
                    <button class="header__search_button"></button>
                </form>
            </div>
        </div>
    </header>