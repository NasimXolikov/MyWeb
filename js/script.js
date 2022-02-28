// function of navbar

$(document).ready(function() {
    // icon and nav vars

    let burger = $('#burger');
    let navCont = $('#nav-cont');
    let cancel = $('#cancel');

    // text vars
    let about = $('#about');
    let services = $('#services');
    let partfolio = $('#partfolio');
    let contact = $('#contact');


    //
    navCont.hide();
    cancel.hide();
    navCont.slideDown();

    about.hide();
    services.hide();
    partfolio.hide();
    contact.hide();




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
            burger.css({
                "pointer-events": "none",
            });

            function imgsrc(img) {
                if (img.attr("src") == "img/burger.png")
                    img.attr("src", "img/cancel.png");
                else
                    img.attr("src", "img/burger.png");
            }
            imgsrc(burger);

            //text animation
            setTimeout(function() {
                about.show();
                about.animate({ marginLeft: "50px", display: "block", marginTop: "50px" }, 500)
            }, 500);

            setTimeout(function() {
                services.show();
                services.animate({ marginLeft: "50px", display: "block", }, 500)
            }, 1000);
            setTimeout(function() {
                partfolio.show();
                partfolio.animate({ marginLeft: "50px", display: "block", }, 500)
            }, 1500);
            setTimeout(function() {
                contact.show();
                contact.animate({ marginLeft: "50px", display: "block", }, 500)
            }, 2000);



            setTimeout(function() {
                burger.css({
                    "pointer-events": "auto",
                });
            }, 2200);

            //rotate burger


            $(burger).addClass('rotate360');
            $(burger).removeClass('rotate-360');




            navCalc = navCalc + 1;

        } else {
            $(burger).removeClass('rotate360');
            $(burger).addClass('rotate-360');

            burger.css({
                "pointer-events": "none",
            });

            $('body').css({
                "overflowY": "auto"
            });
            navCont.css({
                "width": "100%",
                "display": "block",
                "position": "absolute",
                "height": "0px",
                "transition-duration": "3.1s",

            });
            //text animation
            setTimeout(function() {
                about.hide();
                about.animate({ marginLeft: "0px", display: "block", }, 500)
            }, 2000);

            setTimeout(function() {
                services.hide();
                services.animate({ marginLeft: "0px", display: "block", }, 500)
            }, 1500);
            setTimeout(function() {
                partfolio.hide();
                partfolio.animate({ marginLeft: "0px", display: "block", }, 500)
            }, 1000);
            setTimeout(function() {
                contact.hide();
                contact.animate({ marginLeft: "0px", display: "block", }, 500)
            }, 500);

            function imgsrc(img) {
                if (img.attr("src") == "img/burger.png")
                    img.attr("src", "img/cancel.png");
                else
                    img.attr("src", "img/burger.png");
            }
            imgsrc(burger);

            setTimeout(function() {
                burger.css({
                    "pointer-events": "auto",
                });
            }, 3200);

            navCalc = navCalc - 1;

        }

    })

});