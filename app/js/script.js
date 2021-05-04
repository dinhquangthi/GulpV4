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
    $(window).scroll(function(){
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();
      
        if (scroll >= sticky.outerHeight()) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
      });

})
$(window).on('load', function () {
    checkMenuMobile()
});