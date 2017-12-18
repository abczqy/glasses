$(function(){
    function change(){
        $(".glass-img .hide").removeClass("hide").siblings().addClass("hide");
        $(".bot .active").removeClass("active").siblings().addClass("active");
    }
    $(".toleft").click(change);
    $(".toright").click(change);
    $(".color li").click(function(){
        $(this).addClass("choose").siblings().removeClass("choose");
    });
    function heightall(){
        $(".change").css("height",$(".changeleft").css("height"));
    }
    heightall();
    $(window).resize(heightall);
    $(".detail li").click(function(){
        $(this).toggleClass("check");
    });
    $(".detail li").eq(2).click(function(){
        $(".information").slideToggle(200);
    })
});