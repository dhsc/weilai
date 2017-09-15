$(function(){
    $(".dropdown").mouseenter(function(){
        var windowWidth = $(window).width();
        if(windowWidth > 767){
            $(this).children(".dropdown-menu").stop().slideDown('500');
        }
    });
    $(".dropdown").mouseleave(function(){
        var windowWidth = $(window).width();
        if(windowWidth > 767){
            $(this).children(".dropdown-menu").stop().slideUp('500');
        }
    });
})