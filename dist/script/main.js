var arrPaginationName = [
    "Dashboard",
    "EPA",
    "CanMeds",
    "Progress Graphs",
    "Year Matrix"
];

$(document).ready(function () {

    /* SWIPER PARALLAX */
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

    /* INIT BOOTSTRAP TOOLTIP */
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

    /* INIT TEXT IN SWAP NEXT/PREV BTN  !!!TEST!!! */
    $(".swiper-pagination-bullet").on("click", function(){
        var currentPaginationBtn    = $(this).index(),
            arrLen                  = arrPaginationName.length,
            nextBtn                 = $(".swiper-button-next__text"),
            prevBtn                 = $(".swiper-button-prev__text"),
            nextBtnPagination, prevBtnPagination;


        if(currentPaginationBtn === arrLen - 1) {
            currentPaginationBtn = 0;
            nextBtnPagination = arrPaginationName[currentPaginationBtn];
            prevBtnPagination = arrPaginationName[arrLen - 2];
        } else if(currentPaginationBtn === 0) {
            prevBtnPagination = arrPaginationName[arrLen - 1];
            nextBtnPagination = arrPaginationName[currentPaginationBtn + 1];
        } else {
            prevBtnPagination = arrPaginationName[currentPaginationBtn - 1];
            nextBtnPagination = arrPaginationName[currentPaginationBtn + 1];
        }


        prevBtn.html(prevBtnPagination);
        nextBtn.html(nextBtnPagination);
    });
});