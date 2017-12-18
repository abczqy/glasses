$(function(){
    var num=0,num1=0;
    var banner=document.getElementsByClassName("banner-list")[0];
    function go(){
        if(num>2){
            num=0;
            $(".banner-list").css("left",-num*100+'%');
        }
        num++;
        $(".banner-list").animate({"left":-num*100+'%'},400);
        if(num==3){
            $(".bot li").eq(0).addClass("active").siblings().removeClass("active");
        }else{
            $(".bot li").eq(num).addClass("active").siblings().removeClass("active");
        }
        banner.timer=setTimeout(arguments.callee,4000);
    }
    function heightall(){
        var height=$(".banner-list img").css("height");
        $(".banner").css("height",height);
        $(".pictures").css("height",$(".pic2").css("height"));
        $(".moveimg").css({"height":parseFloat($(".move").css("width"))/3+'px',"perspective":$(".move").width()});
        $(".show").css("height",parseFloat($(".show").css("width"))*0.9333+'px');
    }
    heightall();
    setTimeout(go,4000);
    $(".bot li").click(function(){
        clearTimeout(banner.timer);
        num=$(this).index()-1;
        go();
    });
    $(window).resize(function(){
        var width=$(".banner-list li").eq(0).width();
        heightall();
    });
    $(".move").mouseenter(function() {
        var thisPX = $(this).offset().left;
        var thisPY = $(this).offset().top;
        var boxWidth = $(this).outerWidth();
        var boxHeight = $(this).outerHeight();
        $(this).addClass("threeD");
        $(".threeD").mousemove(function(event) {
            var mouseX = event.pageX - thisPX;
            var mouseY = event.pageY - thisPY;
            var X;
            var Y;
            if (mouseX > boxWidth / 2) {
                X = mouseX - boxWidth/2;
            } else {
                X = mouseX - boxWidth/2;
            }
            if (mouseY > boxHeight / 2) {
                Y = boxHeight/2 - mouseY;
            } else {
                Y = boxHeight/2 - mouseY;
            }
            $(".threeD").css({
                "-webkit-transform": "rotateY(" + X / 50 + "deg) " + "rotateX(" + Y / 30 + "deg)"
            });
        });
    });
    $(".move").mouseleave(function() {
        $(this).removeClass("threeD");
        $(this).css({
            "-webkit-transform": "rotateY(0deg) rotateX(0deg)"
        });
    });
});