/*

  * Copyright (c) 2019 ThemesHolder
  * Author: ThemesHolder
  * This file is made for CURRENT TEMPLATE

*/
jQuery(document).ready(function () {
    "use strict";

    //=================
    // Water effect
    //=================
    $('.hero-area.water').ripples({
      resolution: 1000,
      dropRadius: 15,
      perturbance: 0.05,
    });

    //=================
    // Scroll It active
    //=================
    $.scrollIt({
        upKey: 38, // key code to navigate to the next section
        downKey: 40, // key code to navigate to the previous section
        easing: 'linear', // the easing function for animation
        scrollTime: 1300, // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null, // function(pageIndex) that is called when page is changed
        topOffset: -70, // offste (in px) for fixed top navigation
    });
    //==================
    // Sticky Menu
    //==================
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 400) {
            $('.sticky-header').addClass("sticky animated fadeInDown");
        } else {
            $('.sticky-header').removeClass("sticky animated fadeInDown");
        }
    });
    //==============
    // Mobile mneu
    //==============
    $('.main-menu').slicknav({
        prependTo: '#mobile-menu',
        label: '',
    });
    //=================
    // Testimonial
    //==================
    $("#testimonial-active").owlCarousel({
        items: 3,
        smartSpeed: 1000,
        loop: true,
        margin: 30,
        dots: false,
        center: true,
        nav: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 3
            }
        }
    });
    //=================
    // Testimonial 2
    //==================
    $("#testimonial-active-style2").owlCarousel({
        items: 3,
        smartSpeed: 1000,
        loop: true,
        margin: 30,
        dots: false,
        center: true,
        nav: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 3
            }
        }
    });

    //=================
    // Testimonial 2
    //==================
    $("#testimonial-active-style3").owlCarousel({
        items: 1,
        smartSpeed: 1000,
        loop: true,
        dots: false,
        center: true,
        nav: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });
    //================
    // Client Logo Carousel
    //===============
    $(".client-logo-carousel").owlCarousel({
        loop: true,
        nav: false,
        smartSpeed: 1000,
        margin: 30,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 4,
                margin: 30
            },
            480: {
                items: 3
            },
            768: {
                items: 5
            },
            992: {
                items: 5
            }
        }
    });

    //================
    // Active Isotope
    //===============
    $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    });
    // Isotope click function
    $('.filter-button-group ul li').on ('click', function () {
        $('.filter-button-group ul li').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        $('.grid').isotope({
            filter: selector
        });
        return false;
    });

    $(function() {
  
      // popup contact form animations
      $('#pop-contact').click(function() {
        $('#contactForm').fadeToggle();
        $("#contactForm").animate({top: '170px'});
      });
      $(document).mouseup(function (e) {
        var container = $("#contactForm");

        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            container.fadeOut();
        }
      });
      
    });

    //==========
    // Fancybox
    //==========
    $("a#single_image").fancybox();

    //=================
    // Skill Bar Progress
    //=================
     jQuery('.skillbar').each(function(){
        jQuery(this).find('.progress-fill-bar').animate({
            width:jQuery(this).attr('data-percent')
        },6000);
    });

     $('.count-number').counterUp({
      delay: 10,
      time: 2000
     });
     $('.count-number').addClass('animated fadeInDownBig');


}); 

$(window).on('load', function () {
    //================
    //  Preloader
    //================
    setTimeout(function () {
        $('.main-site').addClass('loaded');
    }, 500);

    // Off Canvas menu
     $('.menu-trigger').on('click', function() {
          $('.off-canvas-menu').addClass('show-off-canvas-menu');
          $('.off-canvas-menu-shade').addClass('active');
      });
      $('.menu-close, .off-canvas-menu-shade').on('click', function() {
          $('.off-canvas-menu').removeClass('show-off-canvas-menu');
          $('.off-canvas-menu-shade').removeClass('active');
      });


});

//================
// Scroll To Top
//===============
$(window).on('scroll', function () {
    if ($(this).scrollTop() > 300) {
        $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();
    }
});
$('.scrollup').on('click', function () {
    $("html, body").animate({
        scrollTop: 0
    }, 1500);
    return false;
});
