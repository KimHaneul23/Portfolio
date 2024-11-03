console.log('%c created by. %cFINEAPPLE %cPTL ','color:#8cc677; font-size:14px; background-color:#555; font-weight:600; padding:4px 0;','color:#cbdd54; font-size:14px; background-color:#555; font-weight:600; padding:4px 0;','color:#57b69a; font-size:14px; background-color:#555; font-weight:600; padding:4px 0;');


function hide(elem){
	gsap.set(elem, {autoAlpha: 0});
}


// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});


var clickEvent = (function () {
	if ('ontouchstart' in document.documentElement === true) {
		return 'touchstart';
	} else {
		return 'click';
	}
})(); // 클릭이벤트와 터치이벤트 토글


function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

//쿠키삭제
function deleteCookie(name) { 
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'; 
}


(function() {
    
    var throttle = function(type, name, obj) {
        obj = obj || window;
        var running = false;
        var func = function() {
            if (running) { return; }
            running = true;
            requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };

    /* init - you can init any event */
    throttle("resize", "optimizedResize");
    
    
})(); // resize 최적화




if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
} // forEach 의 ie 지원



// 스크롤시 헤더 컨트롤
ScrollTrigger.create({
	trigger: '#content',
	start: 'top top',
	end: 99999,
	toggleClass: {className: 'scrolled', targets: '.ht-inner, .main-header, .hamburger'}
});





// header
const header = document.getElementById('header');
const hamburger = document.querySelector('.hamburger');
const gnb = document.getElementById('gnb');
const gnb_backBG = document.getElementById('gnb_backBG');

const menuEvent = function(){
	document.body.classList.toggle('open');
	this.classList.toggle('open');
	header.classList.toggle('open');
	gnb.classList.toggle('open');
    
    /* 모바일에서 메뉴 버튼 클릭 시 스크롤 멈춤(토글 방식) */
    var ele = document.querySelector('html, body');
    if (!ele) {
        return
    };
    if (ele.style.overflow === 'hidden') {
        ele.style.overflow = 'visible';
        ele.style.height = 'initial';
    } else {
        ele.style.overflow = 'hidden';
        ele.style.height = 'auto';
    }
    
}

hamburger.addEventListener('click', menuEvent);
gnb_backBG.addEventListener('click', function(){
    hamburger.classList.toggle('open');
	header.classList.toggle('open');
	gnb.classList.toggle('open');
});


const openBtns = Array.from(document.getElementsByClassName('open-on-hover'));
openBtns.forEach((button)=>{
  button.addEventListener('mouseenter',(e)=>{
    const list = button.getElementsByClassName('open-on-hover-list')[0];
    gsap.fromTo(list,{y:-20,autoAlpha:0},{y:0,autoAlpha:1});
  });
  button.addEventListener('mouseleave',(e)=>{
    const list = button.getElementsByClassName('open-on-hover-list')[0];
    gsap.fromTo(list,{y:0,autoAlpha:1},{y:-20,autoAlpha:0});
  });
});


/* top_menu_nav */
function fnMove(seq){
    var header_height = $('#header').height();
    var offset = $('#sect0' + seq).position().top - header_height;

    $('html, body').stop().animate({scrollTop : offset}, 900, 'swing');
}


/* 탑 이동 버튼 */
//const move_top_btn = document.getElementsByClassName("move_top_btn")[0];
//move_top_btn.addEventListener(clickEvent,(e)=>{
//    e.preventDefault();
//    main_cont_slider.slideTo(0, 1000);
//    $('.main-header').addClass('color_change');
//    $('#all_wrap').removeClass('on');
//    $('.main_cont').removeClass('slideBG_F');
//    $('#move_top_btn').removeClass('slideBG_F');
//    $('#all_wrap').removeClass('on');
//    $('.fiexd_text').addClass('text_on');
//    $('.main_cont').removeClass('text_off');
//    
//    window.addEventListener('wheel', function (event) {
//        if (event.deltaY < 0) {
//            main_cont_slider.mousewheel.enable();
//        } else if (event.deltaY > 0) {
//            main_cont_slider.mousewheel.enable();
//        }
//    });
//});





// slide 
// 메인 페이지 swiper 
const main_cont_slider_Id = document.getElementById('main_cont_slider');
const main_cont_slider = new Swiper('.main_cont_slider', {
    mousewheelControl: true,
    mousewheel: true,
    mousewheelForceToAxis: true,
    //paginationClickable: true,
    parallax: true,
    //effect: "fade",
    direction: 'vertical',
    autoHeight: true,
    speed: 700,
    autoplay: false,
    loop: false,
    observer: true,
    observeParents: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // 클릭온
    },
    on : {
        init : function (){ //홈페이지 로딩 시 바로 실행되는 구문
            $('.fiexd_text').addClass('text_on');
            setTimeout(function(){
                $('#all_wrap').removeClass('on');
            }, 5500);
        },
    },
    reachEnd: function () {
        main_cont_slider.mousewheel.disable();
        
    },
});

main_cont_slider.on('transitionStart', function() { 
    if(main_cont_slider.realIndex == 0){ //메인 풀페이지 1번 영역에 왔을때 실행되는 구문
        
        $('.main-header').addClass('color_change');
        $('#all_wrap').removeClass('on');
        $('.main_cont').removeClass('slideBG_F');
        $('#move_top_btn').removeClass('slideBG_F');
        $('#move_top_btn_sub').removeClass('slideBG_F');
        $('.fiexd_text').addClass('text_on');
        $('.main_cont').removeClass('text_off');
        $('.main-header').removeClass('scrolled');
        $('.ht-inner').removeClass('scrolled');
        $('.swiper-pagination-bullet').stop().show();
        
        
    } else if(main_cont_slider.realIndex == 1){ //메인 풀페이지 2번 영역에 왔을때 실행되는 구문
        
        $('.main-header').addClass('color_change');
        $('#all_wrap').removeClass('on');
        $('.main_cont').removeClass('slideBG_F');
        $('#move_top_btn').removeClass('slideBG_F');
        $('#move_top_btn_sub').removeClass('slideBG_F');
        $('.fiexd_text').addClass('text_on');
        $('.main_cont').removeClass('text_off');
        $('.main-header').removeClass('scrolled');
        $('.ht-inner').removeClass('scrolled');
        $('.swiper-pagination-bullet').stop().show();
        
        
    } else if(main_cont_slider.realIndex == 2){ //메인 풀페이지 3번 영역에 왔을때 실행되는 구문
        
        $('.main-header').addClass('color_change');
        $('#all_wrap').removeClass('on');
        $('.main_cont').removeClass('slideBG_F');
        $('#move_top_btn').removeClass('slideBG_F');
        $('#move_top_btn_sub').removeClass('slideBG_F');
        $('.fiexd_text').addClass('text_on');
        $('.main_cont').removeClass('text_off');
        $('.main-header').removeClass('scrolled');
        $('.ht-inner').removeClass('scrolled');
        $('.swiper-pagination-bullet').stop().show();
        
        
    } else if(main_cont_slider.realIndex == 3){ //메인 풀페이지 4번 영역에 왔을때 실행되는 구문
        
        $('.main-header').addClass('color_change');
        $('#all_wrap').removeClass('on');
        $('.main_cont').removeClass('slideBG_F');
        $('#move_top_btn').removeClass('slideBG_F');
        $('#move_top_btn_sub').removeClass('slideBG_F');
        $('.fiexd_text').addClass('text_on');
        $('.main_cont').removeClass('text_off');
        $('.main-header').removeClass('scrolled');
        $('.ht-inner').removeClass('scrolled');
        $('.swiper-pagination-bullet').stop().show();
        
        
    } else if(main_cont_slider.realIndex == 4){ //메인 풀페이지 5번 영역에 왔을때 실행되는 구문
        
        $('.main-header').addClass('color_change');
        $('#all_wrap').removeClass('on');
        $('.main_cont').removeClass('slideBG_F');
        $('#move_top_btn').removeClass('slideBG_F');
        $('#move_top_btn_sub').removeClass('slideBG_F');
        $('.fiexd_text').addClass('text_on');
        $('.main_cont').removeClass('text_off');
        $('.main-header').removeClass('scrolled');
        $('.ht-inner').removeClass('scrolled');
        $('.swiper-pagination-bullet').stop().show();
        
        
    } else if(main_cont_slider.realIndex == 5){ //메인 풀페이지 6번 영역에 왔을때 실행되는 구문
        
        $('.main-header').addClass('color_change');
        $('#all_wrap').removeClass('on');
        $('.main_cont').removeClass('slideBG_F');
        $('#move_top_btn').removeClass('slideBG_F');
        $('#move_top_btn_sub').removeClass('slideBG_F');
        $('.fiexd_text').addClass('text_on');
        $('.main_cont').removeClass('text_off');
        $('.main-header').removeClass('scrolled');
        $('.ht-inner').removeClass('scrolled');
        $('.swiper-pagination-bullet').stop().show();
        
    } else if(main_cont_slider.realIndex == 6){ //메인 풀페이지 7번 영역에 왔을때 실행되는 구문
        
        $('.main-header').addClass('color_change');
        $('#all_wrap').removeClass('on');
        $('.main_cont').removeClass('slideBG_F');
        $('#move_top_btn').removeClass('slideBG_F');
        $('#move_top_btn_sub').removeClass('slideBG_F');
        $('.fiexd_text').addClass('text_on');
        $('.main_cont').removeClass('text_off');
        $('.main-header').removeClass('scrolled');
        $('.ht-inner').removeClass('scrolled');
        $('.swiper-pagination-bullet').stop().show();
        
        
        
        
         /*else if(main_cont_slider.realIndex == 7){ //메인 풀페이지 8번 영역에 왔을때 실행되는 구문
        
        $('.main-header').removeClass('color_change');
        $('#all_wrap').removeClass('on');
        $('.main_cont').addClass('slideBG_F');
        $('#move_top_btn').addClass('slideBG_F');
        $('#move_top_btn_sub').addClass('slideBG_F');
        $('.fiexd_text').removeClass('text_on');
        $('.main_cont').addClass('text_off');
        $('.main-header').removeClass('scrolled');
        $('.ht-inner').removeClass('scrolled');
        $('.swiper-pagination-bullet').stop().show();
        
    } */
        
    }else if(main_cont_slider.realIndex == 7){ //메인 풀페이지 9번 영역에 왔을때 실행되는 구문
        
        $('.main-header').removeClass('color_change');
        //$('#all_wrap').addClass('on');
        $('.main_cont').addClass('slideBG_F');
        $('#move_top_btn').addClass('slideBG_F');
        $('#move_top_btn_sub').addClass('slideBG_F');
        $('.fiexd_text').removeClass('text_on');
        $('.main_cont').addClass('text_off');
        $('.main-header').removeClass('scrolled');
        $('.ht-inner').removeClass('scrolled');
        $('.swiper-pagination-bullet').stop().show();
        
    }else if(main_cont_slider.realIndex == 8){ //모바일 메인 풀페이지 푸터 영역에 왔을때 실행되는 구문
        
        $('.main-header').removeClass('color_change');
        //$('#all_wrap').addClass('on');
        $('.main_cont').addClass('slideBG_F');
        $('#move_top_btn').addClass('slideBG_F');
        $('#move_top_btn_sub').addClass('slideBG_F');
        $('.fiexd_text').removeClass('text_on');
        $('.main_cont').addClass('text_off');
        $('.swiper-pagination-bullet').stop().hide();
        $('.main-header').addClass('scrolled');
        $('.ht-inner').addClass('scrolled');
        
        var m_last_ss = $('.main_slider01').height() * 7;
        var m_last = $('#footerHeight').height() - 1;
        var m_last_h = m_last_ss + m_last;
        
        $('.swiper-wrapper').css({'transform':'translate3d(0px, '+-m_last_h+'px, 0px)'});
        
    }
});

main_cont_slider.on('transitionEnd', function() { 
    if(main_cont_slider.realIndex == 0){ //메인 풀페이지 1번 영역에 왔을때 실행되는 구문
        
        $('#all_wrap').removeClass('on');
        
        window.addEventListener('wheel', function (event) {
            if (event.deltaY < 0) {
                main_cont_slider.mousewheel.enable();
            } else if (event.deltaY > 0) {
                main_cont_slider.mousewheel.enable();
            }
        });
        
    } else if(main_cont_slider.realIndex == 1){ //메인 풀페이지 2번 영역에 왔을때 실행되는 구문
        
        $('#all_wrap').removeClass('on');
        
        window.addEventListener('wheel', function (event) {
            if (event.deltaY < 0) {
                main_cont_slider.mousewheel.enable();
            } else if (event.deltaY > 0) {
                main_cont_slider.mousewheel.enable();
            }
        });
        
    } else if(main_cont_slider.realIndex == 2){ //메인 풀페이지 3번 영역에 왔을때 실행되는 구문
        
        $('#all_wrap').removeClass('on');
        
        window.addEventListener('wheel', function (event) {
            if (event.deltaY < 0) {
                main_cont_slider.mousewheel.enable();
            } else if (event.deltaY > 0) {
                main_cont_slider.mousewheel.enable();
            }
        });
        
    } else if(main_cont_slider.realIndex == 3){ //메인 풀페이지 4번 영역에 왔을때 실행되는 구문
        
        $('#all_wrap').removeClass('on');
        
        window.addEventListener('wheel', function (event) {
            if (event.deltaY < 0) {
                main_cont_slider.mousewheel.enable();
            } else if (event.deltaY > 0) {
                main_cont_slider.mousewheel.enable();
            }
        });
        
    } else if(main_cont_slider.realIndex == 4){ //메인 풀페이지 5번 영역에 왔을때 실행되는 구문
        
        $('#all_wrap').removeClass('on');
        
        window.addEventListener('wheel', function (event) {
            if (event.deltaY < 0) {
                main_cont_slider.mousewheel.enable();
            } else if (event.deltaY > 0) {
                main_cont_slider.mousewheel.enable();
            }
        });
        
    } else if(main_cont_slider.realIndex == 5){ //메인 풀페이지 6번 영역에 왔을때 실행되는 구문
        
        $('#all_wrap').removeClass('on');
        
        window.addEventListener('wheel', function (event) {
            if (event.deltaY < 0) {
                main_cont_slider.mousewheel.enable();
            } else if (event.deltaY > 0) {
                main_cont_slider.mousewheel.enable();
            }
        });
    } else if(main_cont_slider.realIndex == 6){ //메인 풀페이지 7번 영역에 왔을때 실행되는 구문
        
        $('#all_wrap').removeClass('on');
        
        window.addEventListener('wheel', function (event) {
            if (event.deltaY < 0) {
                main_cont_slider.mousewheel.enable();
            } else if (event.deltaY > 0) {
                main_cont_slider.mousewheel.enable();
            }
        });
        
        
        /*else if(main_cont_slider.realIndex == 7){ //메인 풀페이지 8번 영역에 왔을때 실행되는 구문
        
        $('#all_wrap').removeClass('on');
        
        window.addEventListener('wheel', function (event) {
            if (event.deltaY < 0) {
                main_cont_slider.mousewheel.enable();
            } else if (event.deltaY > 0) {
                main_cont_slider.mousewheel.enable();
            }
        });
    }*/
    }else if(main_cont_slider.realIndex == 7){ //메인 풀페이지 9번 영역에 왔을때 실행되는 구문
        
        //$('#all_wrap').addClass('on');
        
        window.addEventListener('wheel', function (event) {
            if (event.deltaY < 0) {
                main_cont_slider.mousewheel.enable();
            } else if (event.deltaY > 0) {
                main_cont_slider.mousewheel.enable();
            }
        });
    }else if(main_cont_slider.realIndex == 8){ //메인 풀페이지 9번 영역에 왔을때 실행되는 구문
        
        //$('#all_wrap').addClass('on');
        
        window.addEventListener('wheel', function (event) {
            if (event.deltaY < 0) {
                main_cont_slider.mousewheel.enable();
            } else if (event.deltaY > 0) {
                main_cont_slider.mousewheel.disable();
            }
        });
        
        
    }
});





