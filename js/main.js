$(document).ready(function(){
   scroll();
});
function scroll(){
    var scroll_now=0;
    var scroll_num=[];
    var scroll_length=0;
    function start(){
        init();
        sidebtn();
    }
    function init(){
        scroll_length=$(".scroll").length;
        for(var i =0; i<scroll_length; i++){
            scroll_num[i]=$(".scroll").eq(i).offset().top;
        }
    }
    $(window).resize(function(){
        start();
    });

    $(document).scroll(function(){
        scroll_now=$(document).scrollTop();
        select();
        sidenav();
    });
    function select(){
        if(scroll_now==0){
            $(".header").removeClass("on");
            $(".nav > li").removeClass("on");
        }
        else if(scroll_now>scroll_num[0] && scroll_now<scroll_num[1]){
           select_act(0);
            $(".header").addClass("on");
        }else if(scroll_now>=scroll_num[1] && scroll_now<scroll_num[2]){
            select_act(1);
        }else if(scroll_now>=scroll_num[2]){
            select_act(2);
        }
    }
    function select_act(num){
        $(".nav > li").removeClass("on");
        $(".nav > li").eq(num).addClass("on");
        $(".side_gnb > li").removeClass("on");
        $(".side_gnb > li").eq(num).addClass("on");
    }
    function sidebtn(){
        var btn =$(".nav > li");
            btn.click(function(){
            list = $(this).index();
            $("html,body").stop().animate({"scrollTop":scroll_num[list]});
         });
    }
    function sidenav(){
        if(scroll_now>=scroll_num[1]){
            $(".side_gnb").stop().animate({"right":0});
        }
        else{
            $(".side_gnb").stop().animate({"right":"-100px"});
        }
    }
    start();
}