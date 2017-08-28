$(function(){

/*Carousel start*/
    var n=1;
    var timingCarousel = setInterval(function(){
            if(n < 3){
                n++;
            }else{
                n = 1;
            };
            $(".carousel-box > img").hide();
            $(".carousel-box > img:nth-child("+n+")").show();
        },3000);
    $('.arrow-left').click(function(){
        if(n > 1){
            n--;
        }else{
            n = 3;
        };
        $(".carousel-box > img").hide();
        $(".carousel-box > img:nth-child("+n+")").show();
    });
    $('.arrow-right').click(function(){
        if(n < 3){
            n++;
        }else{
            n = 1;
        };
        $(".carousel-box > img").hide();
        $(".carousel-box > img:nth-child("+n+")").show();
    });
/*Carousel end*/
/*视差 start*/

/*视差 end*/
/*Carousel02 start*/
    var k = 0;
    var timingCarousel02 = setInterval(function(){
        k++;
        if(k==11){
            k = 1;
            $('.cooperative-Carousel').css({'left': '0px'});
        }
        $('.cooperative-Carousel').animate({'left': '-=216px'},500);
    },2000)
/*Carousel02 end*/
})

