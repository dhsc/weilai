$(function(){
/*start 与320相比，大于320时，每差20px则font-size加0.5，小于320时，font-size=为10px*/
    var vwDVal = $('body').width() - 320,
        initFontSize = vwDVal>=0 ? 12 + (Math.floor(vwDVal/20)/2) : 10;
    $('html,body').css({fontSize: initFontSize+'px'});
    /*便于测试 start*/
    window.onresize = function(event) {
        var vwDVal = $('body').width() - 320,
            initFontSize = vwDVal>=0 ? 12 + (Math.floor(vwDVal/20)/2) : 10;
        $('html,body').css({fontSize: initFontSize+'px'});
    };
    /*end*/
/*end*/
})