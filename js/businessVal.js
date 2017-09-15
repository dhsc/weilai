$(function(){
    var item01 = $('.rotaryCarousel > ul > li:nth-child(1)'),
        item02 = $('.rotaryCarousel > ul > li:nth-child(2)'),
        item03 = $('.rotaryCarousel > ul > li:nth-child(3)'),
        lt = 'rotaryCarousel-left',
        rt = 'rotaryCarousel-right',
        ct = 'rotaryCarousel-current',
        btnLt = $('.rotaryCarousel > span:first-child > a'),
        btnRt = $('.rotaryCarousel > span:last-child > a'),
        rCarousel = $('.rotaryCarousel'),
        timer,
        hoverTimeout,
        clickTimeout;
    function reverseTimerFn(){

        if(item01.hasClass(lt)){
            item01.removeClass(lt).addClass(rt);
            item02.removeClass(ct).addClass(lt);
            item03.removeClass(rt).addClass(ct);
        }else if(item01.hasClass(rt)){
            item01.removeClass(rt).addClass(ct);
            item02.removeClass(lt).addClass(rt);
            item03.removeClass(ct).addClass(lt);
        }else {
            item01.removeClass(ct).addClass(lt);
            item02.removeClass(rt).addClass(ct);
            item03.removeClass(lt).addClass(rt);
        }
        $('.'+lt).css({'z-index': '2'});
        $('.'+ct).css({'z-index': '3'});
        $('.'+rt).css({'z-index': '1'});
    };
    function timerFn(){

        if(item01.hasClass(lt)){
            item01.removeClass(lt).addClass(ct);
            item02.removeClass(ct).addClass(rt);
            item03.removeClass(rt).addClass(lt);
        }else if(item01.hasClass(rt)){
            item01.removeClass(rt).addClass(lt);
            item02.removeClass(lt).addClass(ct);
            item03.removeClass(ct).addClass(rt);
        }else {
            item01.removeClass(ct).addClass(rt);
            item02.removeClass(rt).addClass(lt);
            item03.removeClass(lt).addClass(ct);
        }
        $('.'+lt).css({'z-index': '1'});
        $('.'+ct).css({'z-index': '3'});
        $('.'+rt).css({'z-index': '2'});
    };
    function cycleTimeout(){
        timer = setTimeout(function(){
            clearTimeout(timer);
            timerFn();
            cycleTimeout();
        },5000);
    };
    function hoverFn01(){
        hoverTimeout = setTimeout(function(){
            clearTimeout(timer);
        },250)
    };
    function clickRtFn(){
        clearTimeout(clickTimeout);
        clickTimeout = setTimeout(function(){
            clearTimeout(hoverTimeout);
            timerFn();
        },250)
    };
    function clickLtFn(){
        clearTimeout(clickTimeout);
        clickTimeout = setTimeout(function(){
            clearTimeout(hoverTimeout);
            reverseTimerFn();
        },250)
    };

    function hoverFn02(){
        hoverTimeout = setTimeout(function(){
            clearTimeout(clickTimeout);
            cycleTimeout();
        },250)
    };

    cycleTimeout();



    rCarousel.hover(function() {
        hoverFn01();
    }, function() {
        hoverFn02();
    });


    btnRt.click(function(event) {
        clickRtFn();
    });
    btnLt.click(function(event) {
        clickLtFn();
    });
})
