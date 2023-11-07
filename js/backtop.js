 function BackTOP() {
        $(".to-top").hide();
        $(function () {
            $(window).scroll(function () {
                if ($(window).scrollTop() > window.innerHeight) {
                    $(".to-top").fadeIn(200);
                } else {
                    $(".to-top").fadeOut(200);
                }
            });
            $(".to-top").click(function () {
                $('body,html').animate({
                        scrollTop: 0
                    },
                    10);
                return false;
            });
        })
    }
BackTOP();

