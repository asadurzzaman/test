 $.fn.parallax = function (resistance, mouse) {
     $el = $(this);
     TweenLite.to($el, 0.2, {
         x: -((mouse.clientX - (window.innerWidth / 2)) / resistance),
         y: -((mouse.clientY - (window.innerHeight / 2)) / resistance)
     });

 };
(function ($) {
        "use strict";
        $(document).mousemove(function (e) {
            $('.header-right-image-animation').parallax(-5, e);
            $('.cloud1').parallax(-20, e);
            $('.cloud2').parallax(100, e);
            $('.cloud3').parallax(30, e);
            $('.cloud4').parallax(40, e);
            $('.cloud5').parallax(40, e);
        });
}(jQuery));


