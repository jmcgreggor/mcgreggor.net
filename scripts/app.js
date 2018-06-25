(function (window) {
  'use strict';

  var Doc = window.Doc;
  var UserDevice = Doc.CheckViewport;

  UserDevice();
  /* TODO:
  Use UserDevice to check the screensize nd return a value (e.g. small||large)
  The device size will be used below for header and navbar.
  */

  $(document).ready(() => {

        /* TODO: Used UserDevice to manipulate what is loaded
        (navbar.html || navbar-mobile.html) - may be able to just manipulate
        what is in the html file rather than calling a new one.
        */
        $('[data-navbar="navbar-div"]').load("partials/navbar.html");

        /* TODO: Used UserDevice to manipulate what is loaded
        (headerindex.html || header-index-mobile.html) - may be able to just manipulate
        what is in the html file rather than calling a new one.
        */
        $('[data-header-index="header-index"]').load("partials/header-index.html", () => {
           const myCircleType = new CircleType(document.getElementById('bendyArc'));

           myCircleType.radius(300).dir(-1);
        })

        $('[data-header-about="header-about"]').load("partials/header-about.html");
        $('[data-header-recommend="header-recommend"]').load("partials/header-recommend.html");

        $('[data-main-index="main-index"]').load("partials/body-index-main.html");
        $('[data-main-about="main-about"]').load("partials/body-about-main.html");
        $('[data-main-recommend="main-recommend"]').load("partials/body-recommend-main.html");

        $('[data-footer="footer-div"]').load("partials/footer.html");

  });

})(window);


// TODO: Add transparency (in CSS)
