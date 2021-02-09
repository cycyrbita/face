
$(document).ready(function () {
    $('.js-nav__close').click(function() {
        $(this).toggleClass('nav__close_active')
        $('.js-nav__menu').toggleClass('nav__menu_active')
        $('body, html').toggleClass('overflow')
    })
});