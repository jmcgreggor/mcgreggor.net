
$(document).ready(() => {
        $('[data-navbar="navbar-div"]').load("partials/navbar.html");

        $('[data-header-index="header-index"]').load("partials/header-index.html", ()=> {
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

// TODO: Make text responsive.
