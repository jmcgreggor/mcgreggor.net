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

                   myCircleType.radius(300).dir(-1);

                });

                $('header').css("background-attachment","fixed");

            } else {

                $('[data-header-index="header-index"]').load("partials/header-index-mobile.html", () => {

                  $(document).click(function (event) {

                      $('.navbar-collapse').collapse('hide');

                  });

                  $('.navbar-brand').hide();

                });
            };

        $('[data-header-about="header-about"]').load("partials/header-about.html");
        $('[data-header-recommend="header-recommend"]').load("partials/header-recommend.html");
        $('[data-main-index="main-index"]').load("partials/body-index-main.html");
        $('[data-main-about="main-about"]').load("partials/body-about-main.html");
        $('[data-main-recommend="main-recommend"]').load("partials/body-recommend-main.html");
        $('[data-footer="footer-div"]').load("partials/footer.html");

  });

})(window);
