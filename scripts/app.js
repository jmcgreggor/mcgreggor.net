(function (window) {
  'use strict';

  var $ = window.jQuery;
  var App = window.App;
  var UserDevice = App.CheckViewport(window.document.documentElement.clientWidth);
  // var UserBrowser = App.CheckBrowser(window.navigator.userAgent);
  var current= new Date();
  var day_night=current.getHours();

  $(document).ready(() => {

        $('[data-navbar="navbar-div"]').load("partials/navbar.html");

        if (UserDevice == "large-viewport") {

            $('[data-header-index="header-index"]').load("partials/header-index.html", () => {
               const myCircleType = new CircleType(document.getElementById('bendyArc'));
               myCircleType.radius(400).dir(-1);
            });
            $('[data-header-experience="header-experience"]').load("partials/header-experience.html");
            $('[data-header-recommend="header-recommend"]').load("partials/header-recommend.html");
            $('[data-header-profile="header-profile"]').load("partials/header-profile.html");
            $('[data-header-history="header-history"]').load("partials/header-history.html");
            $('[data-header-site="header-site"]').load("partials/header-site.html");

            $("media-test-divider").addClass("media-large-divider");
            $("media-test-para-divider").addClass("media-large-para-divider");
            $('header').css("background-attachment","fixed");

        } else {

            $('[data-header-index="header-index"]').load("partials/header-index-mobile.html", () => {
              //TODO: Fix nav collapse on mobile
              $(document).click(function (event) {
                  $('.navbar-collapse').collapse('hide');
              });
            });
            $('[data-header-experience="header-experience"]').load("partials/header-experience-mobile.html");
            $('[data-header-recommend="header-recommend"]').load("partials/header-recommend-mobile.html");
            $('[data-header-profile="header-profile"]').load("partials/header-profile-mobile.html");
            $('[data-header-history="header-history"]').load("partials/header-history-mobile.html");
            $('[data-header-site="header-site"]').load("partials/header-site-mobile.html");
        };

        // TODO: Not working

        if (day_night>=18) {
            $('[data-header-index="header-index"]').addClass("header-index-3");
            $('[data-para-divider-main="divider-main"]').addClass("para-div-1-3");
        } else if (day_night>=12 && day_night<18) {
            $('[data-header-index="header-index"]').addClass("header-index-2");
            $('[data-para-divider-main="divider-main"]').addClass("para-div-1-2");
        } else {
          $('[data-header-index="header-index"]').addClass("header-index-1");
          $('[data-para-divider-main="divider-main"]').addClass("para-div-1-1");
        };

        // if (day_night>=12) {
        //     $('[data-header-index="header-index"]').addClass("header-index-night");
        // } else {
        //     $('[data-header-index="header-index"]').addClass("header-index-day");
        // };

        $('[data-main-experience="main-experience"]').load("partials/body-experience-main.html");
        $('[data-main-recommend="main-recommend"]').load("partials/body-recommend-main.html");
        $('[data-main-profile="main-profile"]').load("partials/body-profile-main.html");
        $('[data-main-history="main-history"]').load("partials/body-history-main.html");
        $('[data-main-site="main-site"]').load("partials/body-site-main.html");

        $('[data-footer="footer-div"]').load("partials/footer.html");





        function showImages(el) {
          var windowHeight = jQuery( window ).height();
          $(el).each(function(){
            var thisPos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (topOfWindow + windowHeight - 200 > thisPos ) {
                $(this).addClass("fadeIn");
            }
          });
        }

        // if the image in the window of browser when the page is loaded, show that image
        $(document).ready(function(){
            showImages('.star');
        });

        // if the image in the window of browser when scrolling the page, show that image
        $(window).scroll(function() {
            showImages('.star');
        });

  });

  $(document).on('click',function(event){

       $('.collapse').collapse('hide');

       //TODO: Fix navbar hamburger icon to reset state when tapped outside

       // $('.icon-bar').css(
       //   "&:nth-child(1) {transform: translateY(-6px) rotate(-45deg);}",
       //   "&:nth-child(2) {opacity: 0; transform: translateX(100%);}",
       //   "&:nth-child(3) {transform: translateY(6px) rotate(45deg);}"
       // );

       //$(".navbar").removeClass('on');
       //$(".navbar").removeClass('active');
       //$(".navbar").toggleClass('off');
       //$(".navbar-toggle").removeClass('on');
       //$(".navbar-toggle").removeClass('active');
       //$(".navbar-toggle").toggleClass('off');
       //$(".icon-bar").removeClass('on');
       //$(".icon-bar").removeClass('active');
       //$(".icon-bar").toggleClass('off');
  });


})(window);
