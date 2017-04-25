// FOR IE
    // $mt: sin($rot * pi() / 180) * $half-parent - $half-item;
    // $ml: cos($rot * pi() / 180) * $half-parent - $half-item;
    // margin: $mt 0 0 $ml;

// FOR MODERN BROWSER
    // transform: rotate($rot * 1deg) translate($half-parent) rotate($rot * -1deg);

function drawCircle(selector, selectorNot, radius) {
    // CONST
    var CIRCLE_DIMENSION_BIG        = 140,
        CIRCLE_DIMENSION_MEDIUM     = 120,
        CIRCLE_DIMENSION_SMALL      = 100;

    // VAR
    var total   = $(selector).not(selectorNot).length,
        angle   = 360 / total,
        rotate  = 0;

    $(selector).each(function(ind, val) {

        var transformRotatePositive     = "rotate(+" + rotate + "deg)",
            transformRotateNegative     = "rotate(-" + rotate + "deg);",
            transformTranslateAfter     = "translate(" + radius + "px)",
            transformTranslateBefore    = "translate(0,-" + radius + "px)";

        var offsetMargin;

        var transform,
            widthHeightDimension,
            marginLeftTop;

        // dimension block
        if(total <= 8) {
            widthHeightDimension    = "width:" + CIRCLE_DIMENSION_BIG + "px;height:" + CIRCLE_DIMENSION_BIG + "px;";
            offsetMargin            = CIRCLE_DIMENSION_BIG / 2;
        } else if (total > 8 && total < 13) {
            widthHeightDimension    = "width:" + CIRCLE_DIMENSION_MEDIUM + "px;height:" + CIRCLE_DIMENSION_MEDIUM + "px;";
            offsetMargin            = CIRCLE_DIMENSION_MEDIUM / 2;
        } else {
            widthHeightDimension    = "width:" + CIRCLE_DIMENSION_SMALL + "px;height:" + CIRCLE_DIMENSION_SMALL + "px;";
            offsetMargin            = CIRCLE_DIMENSION_SMALL / 2;
        }

        // transform function
        if(total ===  5 || total === 3) {
            transform = "transform:" + transformRotatePositive + " " + transformTranslateBefore + " " + transformRotateNegative
        } else {
            transform = "transform:" + transformRotatePositive + " " + transformTranslateAfter + " " + transformRotateNegative
        }

        // offset
        marginLeftTop = "margin-top:-" + offsetMargin + "px;margin-left:-" + offsetMargin + "px;";

        // add style attr
        $(this).attr('style', transform + "" + widthHeightDimension + "" + marginLeftTop + "");

        // inc rotate
        rotate += angle;
    });
}


$(window).on("load resize ready scroll", function(){
    var windowWidth = $(window).width();

    if(windowWidth > "767" && windowWidth < "992") {
        drawCircle(".swiper-slide .circle__block", ".swiper-slide-duplicate .circle__block", 225);
    } else if(windowWidth > "991") {
        drawCircle(".swiper-slide .circle__block", ".swiper-slide-duplicate .circle__block", 300);
    }
});
