$(document).ready(function() {
    /***********************************************************
     *****************start mobile_menu*************************
     ***********************************************************
     */
    $(".icon_bar_click").click(function() {
        $(".navbar_").slideToggle(500);
        $(".moboverlay").fadeIn('500');
        $(".bars_").addClass("close_");
        $("body").addClass("ovr");
    });

    $(".moboverlay").click(function() {
        $(".navbar_").slideToggle(500);
        $(".moboverlay").fadeOut('500');
        $(".bars_").removeClass("close_");
        $("body").removeClass("ovr");

    });

    $(".dropdown-lang").click(function() {
        $(".dropdown-content-lang").slideToggle(400);
    })
    $(".mega_menu_hover").click(function() {
        $(".ul_products").slideToggle(400);
    })

    /***********************************************************
     *****************end mobile_menu*************************
     ***********************************************************
     */

    /********************************************************
     ************************start slider******************* */

    $('.slider .owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        rtl: true,
        autoplay: true,
        rtl: $("html").attr("dir") == "rtl" ? true : false,
        navText: ["<i class='fas fa-angle-right'></i>", "<i class='fas fa-angle-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    /********************************************************
     ************************end slider******************* */



    /********************************************************
     ************************start categories******************* */


    if ($(window).width() >= 767) {
        $('.categories .owl-carousel').owlCarousel({
            loop: true,
            nav: true,
            margin: 30,
            rtl: true,
            autoplay: true,
            rtl: $("html").attr("dir") == "rtl" ? true : false,
            navText: ["<i class='fas fa-angle-right'></i>", "<i class='fas fa-angle-left'></i>"],
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });
        $(".item").removeClass("remove_");
        $(".owl-carousel").removeClass("add_");
    }
    if ($(window).width() <= 767) {
        $(".remove_").removeClass("item");
        $(".add_").removeClass("owl-carousel");
    }
    /********************************************************
     ************************end categories******************* */
    /********************************************************
     ************************start most_viewed******************* */

    $('.most_viewed .owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        rtl: true,
        margin: 10,
        stagePadding: 6,
        autoplay: true,
        rtl: $("html").attr("dir") == "rtl" ? true : false,
        navText: ["<i class='fas fa-angle-right'></i>", "<i class='fas fa-angle-left'></i>"],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })

    /********************************************************
     ************************end most_viewed******************* */


    /********************************************************
     ************************start Testimonials******************* */

    $('.Testimonials .owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            rtl: true,
            navText: ["<i class='fas fa-angle-right'></i>", "<i class='fas fa-angle-left'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 2
                }
            }
        })
        /********************************************************
         ************************end Testimonials******************* */

    /********************************************************
     ************************start brands******************* */
    $('.brands .owl-carousel').owlCarousel({
            loop: true,
            margin: 15,
            nav: true,
            rtl: true,
            navText: ["<i class='fas fa-angle-right'></i>", "<i class='fas fa-angle-left'></i>"],
            responsive: {
                0: {
                    items: 3
                },
                600: {
                    items: 4
                },
                1000: {
                    items: 6
                }
            }
        })
        /********************************************************
         ***********************end shorkaa******************** */
        /* ****************start wow ******************** */
    new WOW().init();
    document.documentElement.style.setProperty('--animate-duration', '.8s');
    /* ****************end wow ******************** */
});

// loader*****

$(window).load(function() {
    $(".preloader-sa").fadeOut();
});