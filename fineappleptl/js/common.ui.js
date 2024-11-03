console.log('%c created by. %cFINEAPPLE %cPTL ','color:#8cc677; font-size:14px; background-color:#555; font-weight:600; padding:4px 0;','color:#cbdd54; font-size:14px; background-color:#555; font-weight:600; padding:4px 0;','color:#57b69a; font-size:14px; background-color:#555; font-weight:600; padding:4px 0;');

// html엘리먼트 ie7,8인식;
document.createElement('header');
document.createElement('nav');
document.createElement('article');
document.createElement('section');
document.createElement('aside');
document.createElement('footer');

function isBrowserCheck() {
	const agt = navigator.userAgent.toLowerCase();
	if (agt.indexOf("chrome") != -1) return 'Chrome'
	if (agt.indexOf("opera") != -1) return 'Opera'
	if (agt.indexOf("staroffice") != -1) return 'Star Office'
	if (agt.indexOf("webtv") != -1) return 'WebTV'
	if (agt.indexOf("beonex") != -1) return 'Beonex'
	if (agt.indexOf("chimera") != -1) return 'Chimera'
	if (agt.indexOf("netpositive") != -1) return 'NetPositive'
	if (agt.indexOf("phoenix") != -1) return 'Phoenix'
	if (agt.indexOf("firefox") != -1) return 'Firefox'
	if (agt.indexOf("safari") != -1) return 'Safari'
	if (agt.indexOf("skipstone") != -1) return 'SkipStone'
	if (agt.indexOf("netscape") != -1) return 'Netscape'
	if (agt.indexOf("mozilla/5.0") != -1) return 'Mozilla'
	if (agt.indexOf("msie") != -1) {
		let rv = -1;
		if (navigator.appName == 'Microsoft Internet Explorer') {
			let ua = navigator.userAgent;
			var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})")
			if (re.exec(ua) != null)
				rv = parseFloat(RegExp.$1)
		}
		return 'Internet Explorer ' + rv
	}
}


function hide(elem){
	gsap.set(elem, {autoAlpha: 0});
}



var clickEvent = (function () {
	if ('ontouchstart' in document.documentElement === true) {
		return 'touchstart';
	} else {
		return 'click';
	}
})(); // 클릭이벤트와 터치이벤트 토글



// header
const header = document.getElementById('header');
//const hamberger = document.querySelector('.hamberger');
//const gnb = document.getElementById('gnb');
//
//const menuEvent = function(e){
//	$('html, body').toggleClass('open');
//	hamberger.classList.toggle('open');
//	gnb.classList.toggle('open');
//    
//    /* 모바일에서 메뉴 버튼 클릭 시 스크롤 멈춤(토글 방식) */
//    var ele = document.querySelector('html, body');
//    if (!ele) {
//        return
//    };
//    if (ele.style.overflowY == 'hidden') {
//        ele.style.overflowY = 'hidden';
//        ele.style.height = 'auto';
//    } else {
//        ele.style.overflowY = 'overlay';
//        ele.style.height = 'initial';
//    }
//    
//}
//
//hamberger.addEventListener(clickEvent, menuEvent);


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
    
    
    // Hide Header on on scroll down
    //var offset_main = $("#main_cont_wrap01").offset().top;
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5; // 동작의 구현이 시작되는 위치
    var navbarHeight = $('#content').outerHeight(); // 영향을 받을 요소를 선택
    
    // 스크롤시에 사용자가 스크롤했다는 것을 알림
    $(window).scroll(function(event){
        didScroll = true;
    });
    
    // hasScrolled()를 실행하고 didScroll 상태를 재설정
    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);
    
    // 동작을 구현
    function hasScrolled() {
        // 접근하기 쉽게 현재 스크롤의 위치를 저장한다.
        var st = $(this).scrollTop();
        
        // 설정한 delta 값보다 더 스크롤되었는지를 확인한다.
        if(Math.abs(lastScrollTop - st) <= delta){
            return;
        }
        
        // 헤더의 높이보다 더 스크롤되었는지 확인하고 스크롤의 방향이 위인지 아래인지를 확인한다.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('header').removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('header').removeClass('nav-up').addClass('nav-down');
            }
        }
        
        // lastScrollTop 에 현재 스크롤위치를 지정한다.
        lastScrollTop = st;
    }
    
    
    $(document).ready(function(){
        $('.text_popup_btn_open').on(clickEvent, function(){
            $('.text_popup_wrap').stop().addClass('open');
        });
        $('.text_popup_btn_close').on(clickEvent, function(){
            $('.text_popup_wrap').stop().removeClass('open');
        });
    });
    
    
})(); // resize 최적화


if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
} // forEach 의 ie 지원


// 스크롤시 헤더 컨트롤
//const quick_scroll = document.getElementById("quick");
ScrollTrigger.create({
    trigger: '#content',
    start: '200px top',
    end: 99999,
    toggleClass: {className: 'scrolled', targets: '.ht-inner, .main-header, .quick_wrap, .top_btn_wrap'},
    //onEnter: () => {
    //    quick_scroll.classList.remove('top')
    //},
    //onLeaveBack: () => {
    //    quick_scroll.classList.add('open')
    //},
});


const text_popup = document.getElementById("text_popup_wrap");
ScrollTrigger.create({
    trigger: '#content',
    start: '400px top',
    end: 99999,
    onEnter: () => {
        text_popup.classList.remove('open');
    },
    onLeaveBack: () => {
        text_popup.classList.add('open');
    },
});

//const topNav = Array.from(document.getElementsByClassName('top_menu'));
var headHei = document.getElementById('header').clientHeight;



// 퀵메뉴
//const quick = document.getElementById("quick");
//const quickBtn = document.getElementById("q_btn");
//quickBtn.addEventListener(clickEvent,()=>quick.classList.toggle('open'));




// Detect request animation frame
var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.reveal'); 

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('active');
      } else {
        element.classList.remove('active');
      }
    });

    scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}



//// commonTab
//function commonTab(tabParent, tabName){
//	$("."+tabParent+" ul.main_cont05_tab_list > li").stop().removeClass("active");
//	$("."+tabParent+" ul.main_cont05_tab_list > li."+tabName).stop().addClass("active");
//	$("."+tabParent+" .main_cont05_tabcont_wrap").stop().removeClass("active");
//	$("."+tabParent+" .main_cont05_tabcont_wrap."+tabName).stop().addClass("active");
//}
//// sub_commonTab
//function sub_commonTab(tabParent, tabName){
//	$("."+tabParent+" ul.sub2_3_cont02_tab_list > li").stop().removeClass("active");
//	$("."+tabParent+" ul.sub2_3_cont02_tab_list > li."+tabName).stop().addClass("active");
//	$("."+tabParent+" .sub2_3_cont02_tabcont_wrap").stop().removeClass("active");
//	$("."+tabParent+" .sub2_3_cont02_tabcont_wrap."+tabName).stop().addClass("active");
//}




$(document).ready(function() {
    
    $('.header_menu_li').on('hover', function(){
        $('.header_menu_li').stop().removeClass('on');
        $(this).stop().addClass('on');
    });
    
    var quick_btn_swiper = new Swiper('.quick_btn_swiper', {
        slidesPerView:'auto',
        spaceBetween: 0,
        speed:800,
        autoplay: {
            delay: 2200,
            disableOnInteraction: false,
        },
        loop: true,
        loopAdditionalSlides: 1,
        observer: true,
        observeParents: true,
        centeredSlides: true,
        //effect: 'fade',
        //fadeEffect: {
        //  crossFade: true
        //},
    });
    
    $('.open_btn').on('click', function(){
        quick_btn_swiper.autoplay.stop();
    });
    $('.close_btn').on('click', function(){
        quick_btn_swiper.autoplay.start();
    });
    
    var m_header_banner = new Swiper('#m_header_banner', {
        slidesPerView:'auto',
        spaceBetween: 0,
        speed:12000,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        loop: true,
        loopAdditionalSlides: 1,
        observer: true,
        observeParents: true,
    });
    
}); // resize 최적화

//const s11_c05_swiper = new Swiper('.s11_c05_swiper', {
//    slidesPerView:'auto',
//    spaceBetween: 0,
//    speed:1000,
//    autoplay: {
//        delay: 3500,
//        disableOnInteraction: false,
//    },
//    loop: false,
//    loopAdditionalSlides: 1,
//    observer: true,
//    observeParents: true,
//    //centeredSlides: true,
//    pagination: {
//        el: ".swiper-pagination.s11_c05_pagination",
//        type: "progressbar",
//    },
//});





