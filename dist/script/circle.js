function addInlineAttr(elem, arrValue) {
    $(elem).attr("style", arrValue);
}
function attrValueDimension(val) {
    return "width:"+ val +"px;height:"+ val +"px;";
}
function diffPercentValue(curr, val) {
    return curr - ((curr * val) / 100);
}
function drawCircle(selector, selectorNot, radius, x, y) {
    var total = $(selector).not(selectorNot).length;

    var alpha = Math.PI * 2 / total;

    // console.log("total: ", total);
    // console.log("alpha: ", alpha);

    $(selector).each(function(index) {
        var theta = alpha * index;

        // console.log("theta: ", theta);
        // console.log("radius: ", radius);

        var pointX  =  Math.floor(Math.cos(theta) * radius);
        var pointY  = Math.floor(Math.sin(theta) * radius );

        // console.log("Math.cos(theta): ", Math.cos(theta));
        // console.log("Math.sin(theta): ", Math.sin(theta));
        // console.log("pointX: ", pointX);
        // console.log("pointX + x: ", pointX + x);
        // console.log("pointY + y: ", pointY + y);

        // Выводим координаты X и Y
        // $(this).css('margin-left', pointX + x + 'px');
        $(this).css('margin-left', pointX + x + 'px');
        // $(this).css('margin-top', pointY  + y  + 'px');
        $(this).css('margin-top', pointY  + y + 'px');
    });
}


$(document).ready(function () {
    // CONST
    var MAIN_DIMENSION          = 640,
        CIRCLE_DIMENSION_MAIN   = 160,
        PERCENT_MEDIUM          = 12.5,
        PERCENT_SMALL           = 25;

    // VARIABLE
    var classNameWork   = ".circle__block",
        circleWrap      = $(".circle__block"),
        countBlock      = circleWrap.length / 2,
        mediumDimension = diffPercentValue(CIRCLE_DIMENSION_MAIN, PERCENT_MEDIUM),
        smallDimension  = diffPercentValue(CIRCLE_DIMENSION_MAIN, PERCENT_SMALL);

    if(countBlock <= 6) {
        // 100% -> 160px
        // addInlineAttr(classNameWork, attrValueDimension(CIRCLE_DIMENSION_MAIN));
    } else if(countBlock >= 7 && countBlock <= 10) {
        // 87.5% -> 140px
        // addInlineAttr(classNameWork, attrValueDimension(mediumDimension));
    } else {
        // 75% -> 120px
        // addInlineAttr(classNameWork, attrValueDimension(smallDimension));
    }
});
// 140px - [x:215, y:220]
drawCircle(".swiper-slide .circle__block", ".swiper-slide-duplicate .circle__block", 280, 215, 220);