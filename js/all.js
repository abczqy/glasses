// function underline(){
//     var a=0;
//     $("#menu li a").hover(function(){
//         $(this.parentNode).hasClass("active")?a=1:a=0;
//         $(this.parentNode).addClass("active");
//         console.log(a);
//     },function(){
//         if(a==0){
//             $(this.parentNode).removeClass("active");
//         }
//     })
// }
function height(){
    var width=$(".form-group a").css("width");
    $(".form-group input").css("height",width);
    $(".form-group a").css("height",width);
    var height=parseFloat($(window).width())/1920*50;
    $("#menu").css("height",height+'px');
    $(".all-head").css("height",40+$(".logo").height()+$("#menu").height()+'px');
}
height();
$(window).resize(function(){
    height();
});

