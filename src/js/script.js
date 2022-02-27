$(document).ready(function() {
    let burger = $('#burger');
    let navCont = $('#nav-cont');
    let cancel = $('#cancel');
    let about = $('#about');
    navCont.hide();
    cancel.hide();
    navCont.slideDown();
    about.hide();
    var navCalc = 0;

    burger.click(function() {
        if (navCalc == 0) {
            $('body').css({
                "overflowY": "hidden"
            });
            navCont.css({
                "width": "100%",
                "display": "block",
                "position": "absolute",
                "transition-duration": "2s",
                "height": "1000px"
            });

            function imgsrc(img) {
                if (img.attr("src") == "img/burger.png")
                    img.attr("src", "img/cancel.png");
                else
                    img.attr("src", "img/burger.png");
            }
            imgsrc(burger);

            setTimeout(function first() {
                about.show();
                about.animate({ marginLeft: "100px", display: "block", }, 500)
                navCalc = navCalc + 1;
                // cancel.show();

            }, 500);

            $(burger).addClass('rotate360');
            $(burger).removeClass('rotate-360');





        } else {
            $(burger).removeClass('rotate360');
            $(burger).addClass('rotate-360');

            $('body').css({
                "overflowY": "auto"
            });
            navCont.css({
                "width": "100%",
                "display": "block",
                "position": "absolute",
                "height": "0px",
                "transition-duration": "1s",

            });

            function imgsrc(img) {
                if (img.attr("src") == "img/burger.png")
                    img.attr("src", "img/cancel.png");
                else
                    img.attr("src", "img/burger.png");
            }
            imgsrc(burger);
            navCalc = navCalc - 1;

        }

    })

});