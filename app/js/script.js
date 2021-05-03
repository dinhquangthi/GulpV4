function checkMenuMobile() {
    var viewportWidth = $("body").innerWidth();
    if (viewportWidth <= 1024) {
        $('.nav-menu').hide()
        $('.group-cta').hide()
    } else {
        $('.nav-menu').show()
        $('.group-cta').show()
    }
}
$(function () {
    $('#open-menu').click(function () {
        $(this).find('.fas').toggleClass('fa-times');
        $('.nav-menu').slideToggle()
        $('.group-cta').slideToggle()
        $('header').toggleClass('active-menu')
    })
    $(window).on('resize', function () {
        checkMenuMobile()
    });

})
$(window).on('load', function () {
    checkMenuMobile()
});