$(document).ready(function(){
    
     $('.navbar-nav a').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
    });
    
    
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll > 150) {
            $('header').addClass('py-2');
            $('header').css('background-color', 'rgba(0,0,0,0.8)');
            $('.navbar-brand').addClass('small-logo');
        } else {
            $('header').removeClass('py-2');
            $('header').css('background-color', 'rgba(0,0,0,0.3)');
            $('.navbar-brand').removeClass('small-logo');
        }

    });

    
    
    
    
    
});