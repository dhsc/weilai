$(function(){
    var animateCurve = $('.animate-curve'),
        animateCurveHigh = (212/276)*animateCurve.width();
    animateCurve.height(animateCurveHigh);
    animateCurve.width('0');
    animateCurve.animate({width: '95%'},2000);
})
