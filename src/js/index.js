$(document).ready(function () {
    $('.js-nav__close').click(function () {
        $(this).toggleClass('nav__close_active')
        $('.js-nav__menu').toggleClass('nav__menu_active')
        $('body, html').toggleClass('overflow')
    })

    $('.js-cycyrbita__slider').owlCarousel({
        loop: true,
        margin: 20,
        center: true,
        responsive : {
            320 : {
                items: 1,
            },
            370 : {
                items: 2,
            },
            480 : {
                items: 3,
            },
            980 : {
                items: 5,
            },
        }
    })
});