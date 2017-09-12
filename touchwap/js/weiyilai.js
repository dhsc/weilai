$(function(){
    var animateCurve = $('.animate-curve'),
        animateCurveHigh = (212/276)*animateCurve.width(),
        initWidth = 0,
/*start 与320相比，大于320时，每差20px则font-size加0.5，小于320时，font-size=为10px*/
        vwDVal = $('.path01').width() - 320,
        initFontSize = vwDVal>0 ? 12 + (Math.floor(vwDVal/20)/2) : 10;
    $('html').css({fontSize: initFontSize+'px'});
/*end*/
    animateCurve.height(animateCurveHigh);
    animateCurve.width('0');
    animateCurve.animate({width: '95%'},2000);
})
