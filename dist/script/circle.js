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

    var circle_dimension_main   = 140,
        circle_offset_main_X    = 215,
        circle_offset_main_Y    = 220;

    // var alpha = Math.PI * 2 / total;

    // console.log("total ($(selector).not(selectorNot).length): ", total);
    // console.log("alpha (Math.PI * 2 / total): ", alpha);

    // if (total >= 11) {
    //     circle_dimension_main = 120;
    // }


    var _angle = (360 / total);
    var _rorate = 0;

    $(selector).each(function(index) {
        console.groupCollapsed("===== " + index + " =====", index);
        // var theta = alpha * index;

        // console.log("theta ( alpha * index): ", theta);
        // console.log("radius: ", radius);

        // var pointX  =  Math.floor(Math.cos(theta) * radius);
        // var pointY  = Math.floor(Math.sin(theta) * radius );

        // console.log("Math.cos(theta): ", Math.cos(theta));
        // console.log("Math.cos(theta)  * radius: ", Math.cos(theta) * radius);
        // console.log("Math.sin(theta): ", Math.sin(theta)  * radius);
        // console.log("Math.sin(theta)  * radius: ", Math.sin(theta));
        // console.log("pointX: ", pointX);
        // console.log("pointY: ", pointY);
        // console.log("pointX + x: ", pointX + x);
        // console.log("pointY + y: ", pointY + y);

        // Выводим координаты X и Y
        // $(this).css('margin-left', pointX + x + 'px');
        // $(this).attr('style', 'width:' + circle_dimension_main + 'px;height:' + circle_dimension_main + 'px;margin-left:' + (pointX + x) + 'px;margin-top:' + (pointY  + y) + 'px');
        // $(this).attr('style', 'width:' + circle_dimension_main + 'px;height:' + circle_dimension_main + 'px;left:' + (pointX + x) + 'px;top:' + (pointY  + y) + 'px');
        // $(this).css('margin-top', pointY  + y  + 'px');
        // $(this).attr('style', 'width:' + CIRCLE_DIMENSION_MAIN + 'px;height:' + CIRCLE_DIMENSION_MAIN + 'px;);

        // $mt: sin($rot * pi() / 180) * $half-parent - $half-item;
        // $ml: cos($rot * pi() / 180) * $half-parent - $half-item;
        // margin: $mt 0 0 $ml;

        // var _marginTop = Math.sin(_rorate * Math.PI / 180) * 300 - 70;
        // var _marginLeft = Math.cos(_rorate * Math.PI / 180) * 300 - 70;

        // $(this).attr('style', 'width:' + circle_dimension_main + 'px;height:' + circle_dimension_main + 'px;margin-left:' + (_marginLeft) + 'px;margin-top:' + (_marginTop) + 'px');

        // transform: rotate($rot * 1deg) translate($half-parent) rotate($rot * -1deg);

        console.log("_angle: ", _angle);
        console.log("_rorate: ", _rorate);

        var transform = "transform: rotate(" + _rorate + "deg) translate(" + 300 + "px) rotate(-" + _rorate + "deg);";

        $(this).attr('style', transform);

        _rorate = _rorate + _angle;

        console.groupEnd();
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
// 140px - [x:200, y:220]
drawCircle(".swiper-slide .circle__block", ".swiper-slide-duplicate .circle__block", 300, 230, 230);