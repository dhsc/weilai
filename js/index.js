$(function(){var o=1;setInterval(function(){3>o?o++:o=1,$(".carousel-box > img").hide(),$(".carousel-box > img:nth-child("+o+")").show()},3e3);$(".arrow-left").click(function(){o>1?o--:o=3,$(".carousel-box > img").hide(),$(".carousel-box > img:nth-child("+o+")").show()}),$(".arrow-right").click(function(){3>o?o++:o=1,$(".carousel-box > img").hide(),$(".carousel-box > img:nth-child("+o+")").show()});var e=0;setInterval(function(){e++,11==e&&(e=1,$(".cooperative-Carousel").css({left:"0px"})),$(".cooperative-Carousel").animate({left:"-=216px"},500)},2e3)});