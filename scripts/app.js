(function (window) {
  'use strict';

  var $ = window.jQuery;
  var App = window.App;
  var UserDevice = App.CheckViewport(window.document.documentElement.clientWidth);

  $(document).ready(() => {

        $('[data-navbar="navbar-div"]').load("partials/navbar.html");

        if (UserDevice == "large-viewport") {

            $('[data-header-index="header-index"]').load("partials/header-index.html", () => {
               const myCircleType = new CircleType(document.getElementById('bendyArc'));
               myCircleType.radius(400).dir(-1);
            });
            $('[data-header-about="header-about"]').load("partials/header-about.html");
            $('[data-header-recommend="header-recommend"]').load("partials/header-recommend.html");
            $('[data-header-strengths="header-strengths"]').load("partials/header-strengths.html");
            $('[data-header-thoughts="header-thoughts"]').load("partials/header-thoughts.html");


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
            $('[data-header-about="header-about"]').load("partials/header-about-mobile.html");
            $('[data-header-recommend="header-recommend"]').load("partials/header-recommend-mobile.html");
            $('[data-header-strengths="header-strengths"]').load("partials/header-strengths-mobile.html");
            $('[data-header-thoughts="header-thoughts"]').load("partials/header-thoughts-mobile.html");

        };

        $('[data-main-index="main-index"]').load("partials/body-index-main.html");
        $('[data-main-about="main-about"]').load("partials/body-about-main.html");
        $('[data-main-recommend="main-recommend"]').load("partials/body-recommend-main.html");
        $('[data-main-strengths="main-strengths"]').load("partials/body-strengths-main.html");
        $('[data-main-thoughts="main-thoughts"]').load("partials/body-thoughts-main.html");

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
