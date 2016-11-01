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

			posDropSubmenu();
        });
		
		
		 $(document).on('click', '.nav ul a', function () {
            if ($(this).parent().hasClass('has-children')) {
                return false;
            }
        });
		
		
        $(window).on('scroll', function () {
			
			//styled fixed menu
            if ( $(window).scrollTop() == 0) {
                $('.nav').removeClass('scrolled');
            } else {
                $('.nav').addClass('scrolled');
            }
			
			
			activateLinkOnScroll();
        });


		//if has children 
		
        var hasChildren = $('.has-children');

        hasChildren.each(function() {
            var children = $(this).find('.sub-menu');

            children.on('mouseenter', function () {
                    $(this).closest('.has-children').addClass('active');
                })
                .on('mouseleave', function () {
                    $(this).closest('.has-children').removeClass('active');
                });
        });
		
		//fix dropdown width
		posDropSubmenu();

        function posDropSubmenu () {
            $('.nav').find('.sub-sub-menu').each(function () {
                var parOffset = $(this).closest('.sub-menu').closest('.has-children').offset().left;
                var offset = parOffset + $(this).closest('.sub-menu').width() + $(this).width();
                if (offset >= $(window).width()) {
                    $(this).css({
                        left: 'auto',
                        right: '100%'
                    });
                }
            });
        }
		
		
		
		var menuHeight = $('.nav').outerHeight();
		var scrollTimeout;
		var scrollLinks = $('.nav li a');
		
		activateLinkOnScroll();
		
		//activate link if anchor == elem
		function activateLinkOnScroll(){
			clearTimeout(scrollTimeout);
			scrollTimeout = setTimeout(function() {
				scrollLinks.each(function(i) {
					var obj = $($(this).attr('href'));

					if (obj.size() > 0 && obj.offset().top <= $(window).scrollTop() + menuHeight) {
						//when id and href - make active
						scrollLinks.closest('li').removeClass('active');
						$(this).closest('li').addClass('active');
					} else {
						$(this).closest('li').removeClass('active');
					}
				});
			}, 100);
		}
		
		//smooth scroll
		 $(document).on('click', '.nav li a', function () {
			var obj = $('');
			console.log($(this).attr('href'));
			
            if ($(this).attr('href').slice(0,1) == '#') {
                obj = $($(this).attr('href'));
            }

            if (obj.size() > 0) {
                $('html, body').animate({
                    scrollTop: obj.offset().top - menuHeight
                });
            }

            return false;
        });
     
    });
})(jQuery);
