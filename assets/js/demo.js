/*

  * Copyright (c) 2019 ThemesHolder
  * Author: ThemesHolder
  * This file is made for CURRENT TEMPLATE

*/
$(document).ready(function () {

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




}); 

$(window).on('load', function () {
    //================
    //  Preloader
    //================
    setTimeout(function () {
        $('.main-site').addClass('loaded');
    }, 500);

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
