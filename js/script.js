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
    let hrFirst = $('#hr-first')

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
                about.animate({ marginLeft: "75px", display: "block", }, 500)
            }, 500);

            setTimeout(function() {
                services.show();
                services.animate({ marginLeft: "75px", display: "block", }, 500)
            }, 1000);
            setTimeout(function() {
                partfolio.show();
                partfolio.animate({ marginLeft: "75px", display: "block", }, 500)
            }, 1500);
            setTimeout(function() {
                contact.show();
                contact.animate({ marginLeft: "75px", display: "block", }, 500)
            }, 2000);



            setTimeout(function() {
                burger.css({
                    "pointer-events": "auto",
                });
            }, 2200);

            //rotate burger


            $(burger).addClass('rotate360');
            $(burger).removeClass('rotate-360');

            setTimeout(function delHr() {
                hrFirst.hide();
            }, 400);


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

            setTimeout(function() {
                hrFirst.show();
            }, 1750);

            navCalc = navCalc - 1;

        }

    })

    about.click(function() {
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

    });

    //animation of text

    setTimeout(function() {
        new TypeIt("#hello-text", {
                speed: 100,
                waitUntilVisible: true,
                afterComplete: function(instance) {
                    instance.destroy();
                }
            })
            .type(`Hello world!`, { delay: 1000 })
            .move(-12)
            .type('<span>[</span>')
            .move(12)
            .type('<span>]</span>')


        .go();
    }, 100);

    setTimeout(function() {
        new TypeIt("#my-text", {
                speed: 50,
                waitUntilVisible: true,
                afterComplete: function(instance) {
                    instance.destroy();
                }
            })
            .type(`This is my personal site`, { delay: 1000 })
            .type(', you can get to know my skills and work more closely.')



        .go();
    }, 6000);


    var block_show = null;
    let welcome = $('#welcome')

    setTimeout(function scrollTracking() {
        var wt = $(window).scrollTop();
        var wh = $(window).height();
        var et = welcome.offset().top;
        var eh = welcome.outerHeight();

        if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
            if (block_show == null || block_show == false) {
                welcome.css({
                    "marginLeft": "0px",
                    "display": "block",


                })
            }
            block_show = true;
        }
    }, 2000);

    // $(window).scroll(function() {
    //     scrollTracking();
    // });

    // $(document).ready(function() {
    //     scrollTracking();
    // });


    //animation of first section img
    firstSectionImg = $('#first-section-img');
    var block_show_second = null;

    setTimeout(function scrollTracking() {
        var wt = $(window).scrollTop();
        var wh = $(window).height();
        var et = firstSectionImg.offset().top;
        var eh = firstSectionImg.outerHeight();

        if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
            if (block_show_second == null || block_show_second == false) {
                firstSectionImg.css({
                    "marginTop": "50px",
                    "display": "block",


                })
            }
            block_show_second = true;
        }
    }, 100);


});