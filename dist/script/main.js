var arrPaginationName = [
    "Dashboard",
    "EPA",
    "CanMeds",
    "Progress Graphs",
    "Year Matrix"
];

$(window).on("load resize ready scroll", function () {
    var windowWidth = $(window).width();

    if (windowWidth < "768") {
        console.log('(windowWidth < "768")');
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            effect: 'cube',
            grabCursor: true,
            cube: {
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94
            },
            paginationClickable: true,
            paginationBulletRender: function (swiper, index, className) {
                return '<span class="' + className + '" ' +
                    'data-placement="top" ' +
                    'data-toggle="tooltip" ' +
                    'title="' + arrPaginationName[index] + '"></span>';
            },
            speed: 600,
            loop: true
        });
    } else {
        console.log('(windowWidth > "767")');
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            paginationBulletRender: function (swiper, index, className) {
                return '<span class="' + className + '" ' +
                    'data-placement="top" ' +
                    'data-toggle="tooltip" ' +
                    'title="' + arrPaginationName[index] + '"></span>';
            },
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            effect: 'slide',
            grabCursor: true,
            speed: 600,
            loop: true
        });
    }
});

$(document).ready(function () {

    /* INIT BOOTSTRAP TOOLTIP */
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });


    /* BODY CLICK */
    $('body').on('click', function (e) {
        var className = "";

        if (!$(e.target).closest(className).length) {
        }
    });


    /* BTN BURGER */
    $(".btn__burger").on("click", function () {
        var navContainer = $(".nav_row ");

        navContainer.toggleClass("active");
        $(this).toggleClass("active");

        $("body, html").toggleClass("open-menu");
    });


    /* menu */
    $(".btn_menu_js").on("click", function () {
        var navContainer = $(".nav_row ");

        navContainer.toggleClass("active");
        $("body,html").toggleClass("open-menu");
    });
    $(".btn_close_js").on("click", function () {
        var navContainer = $(".nav_row ");

        navContainer.removeClass("active");
        $(".btn__burger").removeClass("active");
        $("body,html").removeClass("open-menu");
    });
});