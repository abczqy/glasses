$(function(){
    $(".open header").click(function(){
        $(".option").slideToggle();
    });
    $(".option ul li span").click(function(e){
        $(e.target.parentNode).siblings().children().removeClass("active");
        $(this).addClass("active");
        var ul=$(this.parentNode.parentNode).index();
        $(".choise li").eq(ul).text($(this).text()).addClass("ok");
    });
    $(".choise li").click(function(){
        $(this).text("").removeClass("ok");
        var oUl=document.getElementsByClassName("ul"+($(this).index()+1))[0];
        var aLi=oUl.getElementsByTagName("li");
        $(aLi).children().removeClass("active");
    });
    $(".totop").click(function(){
        $("body,html").animate({"scrollTop":0},"fast");
    });
    $(window).scroll(function(){
        if($(document).scrollTop()>$(".all-head").height()+$(".banner").height()+$(".option").height()+$(".want").height()){
            $(".totop").fadeIn(200);
        }else{
            $(".totop").fadeOut(200);
        }
        if ($(document).scrollTop()+$(window).height()>$(document).height()-50) {
            getMore();
        }
    });
    function getMore(){
        var oUl=$(".picmore:first").clone();
        $(".main").append(oUl);
    }
});