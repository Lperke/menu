(function($) {
    $(document).ready(function () {
    
        $(document).on('click', '.nav-toogle', function (e) {
            if ($(this).hasClass('state-active')) {
                $(this).removeClass('state-active');
                $('body').removeClass('state-active-nav');
            } else {
                $(this).addClass('state-active');
                $('body').addClass('state-active-nav');
            }
            return false;
        });

        $(document).on('click', function (e) {  //close on click bg
            if ($(window).width() <= 985) {
                if (!$(e.target).hasClass('nav-section') && !$(e.target).parents().hasClass('nav-section')) {
                    $('.nav-toogle').removeClass('state-active');
                    $('body').removeClass('state-active-nav');
                }
            }
        });

        $(window).resize(function () {  //hide on resize
            if ($(window).width() > 985) {
                $('body').removeClass('state-active-nav');
                $('.nav-toggle').removeClass('state-active');
            }

        });
     
    });
})(jQuery);
