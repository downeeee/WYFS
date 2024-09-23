$(function(){

    $(".util_myca").hover(function(){
        $(".my").stop().slideDown();
    }, function(){
        $(".my").stop().slideUp();
    })// hover

    $(".gnb_p").hover(function(){
        $(".d_wrap").stop().animate({height:"400px", padding :"20px"}, "fast")
    }, function(){
        $(".d_wrap").stop().animate({height:"0px", padding :"0px"},"fast")
    })



    // slick 붙이기 move

    $(".move").slick({
        autoplay:true ,
        dots:true,
        arrows : false,
        autoplaySpeed:3000
    })//

    $(".main_visual .stop").click(function(){

        if( $(this).hasClass("on") == true ){        
            $(this).removeClass("on"); /* 이미지stop 슬라이드는 play */
            $(".move").slick("slickPlay");
        }else{
            $(this).addClass("on");  /* on  이미지가paly 슬라이드멈춤 */
            $(".move").slick("slickPause");
        }// if

    })// click

    // main1 photo slick

    $(".photo").slick({
        autoplay:true,
        autoplaySpeed:4000,
        arrows: false,
        dots:true
    })

    // banner slick
    $(".banner").slick({
        arrows: false,
        dots:true
    })//

    $(".viewer").slick({
        arrows: false,
        dots:true
    })//

    $(".banner_wrap .b_play").click(function(){
        if( $(this).hasClass("on") == true){
            $(this).removeClass("on");
            $(".banner").slick("slickPause");
        }else{
            $(this).addClass("on");
            $(".banner").slick("slickPlay");
        }        
    })// click

    $(".viewer_wrap .b_play").click(function(){
        if( $(this).hasClass("on") == true){
            $(this).removeClass("on");
            $(".viewer").slick("slickPause");
        }else{
            $(this).addClass("on");
            $(".viewer").slick("slickPlay");
        }        
    })// click






})// jquery