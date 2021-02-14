$(function () {
    "use strict";
    $(document).ready(function () {
        function scrollfiXed() {
            var htOp = $('.header');

            function scrollTopFixed(htOp) {
                var windowTop = $(window).scrollTop();
                var adDcl = "fixedMenu";
                var htOpHT = htOp.outerHeight();
                var htOpH = htOpHT + 50;
                if (windowTop > htOpH) {
                    if (!(htOp.hasClass(adDcl))) {
                        htOp.stop();
                        htOp.addClass(adDcl).css({
                            'top': (-1 * htOpH) + 'px',
                        }).animate({
                            'top': '0px'
                        }, 250, 'easeOutQuad', function () {});
                    }
                } else {
                    if (htOp.hasClass(adDcl)) {
                        htOp.stop();
                        htOp.animate({
                            'top': (-1 * htOpH) + 'px'
                        }, 250, 'easeOutQuad', function () {
                            htOp.removeClass(adDcl).removeAttr('style');
                        });
                    }
                }
            }

            $(window).scroll(function () {
                scrollTopFixed(htOp);
            });

            scrollTopFixed(htOp);
        }
        scrollfiXed();
        //js for scroll to section content
        $('.go_to_top a[href^="#"]').on('click', function (event) {
            var target = $(this.getAttribute('href'));
            if (target.length) {
                event.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: target.offset().top - 80
                }, 2000);
            }
        });


        // Js for banner_slider
        $('.banner_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 2000,
            arrows: true,
            dots: false,
            autoplay: true,
            fade: true,
            responsive: [
                {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                }
        	},
                {
                breakpoint: 880,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
        	},
                {
                breakpoint: 640,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
        	}
        	]
        });
   
        //js for banner_text_slider
//        $('.banner_text_slider').slick({
//            slidesToShow: 1,
//            slidesToScroll: 1,
//            speed: 2000,
//    cssEase:'linear',
//            arrows: true,
//            dots: false,
//            autoplay: true,
//            asNavFor: '.banner_slider',
//            responsive: [
//                {
//                breakpoint: 991,
//                settings: {
//                    slidesToShow: 1,
//                }
//        	},
//                {
//                breakpoint: 880,
//                settings: {
//                    arrows: false,
//                    slidesToShow: 1,
//                }
//        	},
//                {
//                breakpoint: 640,
//                settings: {
//                    arrows: false,
//                    slidesToShow: 1,
//                }
//        	}
//        	]
//        });


        // Js for latest_work_slider
        $('.latest_work_slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 2000,
            arrows: false,
            dots: true,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                    }
        	},
                {
                    breakpoint: 640,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                    }
        	}
        	]
        });

        // Js for feedback_slider
        $('.feedback_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 2000,
            arrows: true,
            dots: false,
            autoplay: true,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                    }
        	},
                {
                    breakpoint: 640,
                    settings: {
                        arrows: false,
                        slidesToShow: 1,
                    }
        	}
        	]
        });
        
            
        function wowInit(){
            new WOW().init();
        }
        wowInit();

    });
});