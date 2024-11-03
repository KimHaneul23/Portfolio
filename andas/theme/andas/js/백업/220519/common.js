console.log('%c created by. %cFINEAPPLE %cPTL ','color:#8cc677; font-size:14px; background-color:#555; font-weight:600; padding:4px 0;','color:#cbdd54; font-size:14px; background-color:#555; font-weight:600; padding:4px 0;','color:#57b69a; font-size:14px; background-color:#555; font-weight:600; padding:4px 0;');


function hide(elem){
	gsap.set(elem, {autoAlpha: 0});
}


function setScreenSize() {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
}
setScreenSize();
window.addEventListener('resize', setScreenSize);

var clickEvent = (function () {
	if ('ontouchstart' in document.documentElement === true) {
		return 'touchstart';
	} else {
		return 'click';
	}
})(); // 클릭이벤트와 터치이벤트 토글


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
    
    
    /* 스크롤 위치 표시 */
    function progress() {
        var windowScrollTop = $(window).scrollTop();
        var docHeight = $(document).height();
        var windowHeight = $(window).height();
        var progress = (windowScrollTop / (docHeight - windowHeight)) * 100;
        var $bgColor = progress > 99 ? '#2a4f49' : '#2a4f49';
        var $textColor = progress > 99 ? '#fff' : '#fff';
        
        $('.fill').height(progress + '%').css({ backgroundColor: $bgColor });
        
        if(progress > 97){
            $('.percent_wrap, .select_network_kakao').addClass('end');
        } else {
            $('.percent_wrap, .select_network_kakao').removeClass('end');
        }
        if(progress > 1){
            $('.topbtn_arrow').addClass('start');
        } else {
            $('.topbtn_arrow').removeClass('start');
        }
    }
    
    progress();
    
    $(document).on('scroll', progress);
    /* //스크롤 위치 표시 */
    
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

const menuEvent = function(){
	document.body.classList.toggle('open');
	this.classList.toggle('open');
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

hamburger.addEventListener(clickEvent, menuEvent);


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


// 퀵메뉴
const quick = document.getElementById("quick");
const quickBtn = document.getElementById("q-btn");
quickBtn.addEventListener(clickEvent,()=>quick.classList.toggle('open'));


// 베스트 랭킹 start
const best_ranking = document.getElementById('best_ranking');
const best_ranking_btn = document.getElementById("best_ranking_btn");
const h_search_icon = document.getElementById("h_search_icon");
const best_ranking_close = document.getElementById("best_ranking_close");
const best_ranking_close_btn = document.getElementById("best_ranking_close_btn");
const best_ranking_dim = document.getElementById("best_ranking_dim");
const rankingEvent = function(){
	best_ranking.classList.toggle('open');
	best_ranking_btn.classList.toggle('open');
	best_ranking_close.classList.toggle('open');
	best_ranking_dim.classList.toggle('open');
    
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
best_ranking_btn.addEventListener(clickEvent, rankingEvent);


const mainTabSect = document.getElementsByClassName('best_ranking_wrap')[0];
const mainTabList = document.querySelectorAll('.best_ranking_tab_ul > li');
if(mainTabSect){
    gsap.utils.toArray('.tabcontent').forEach(function(elem,idx){
        gsap.set(elem,{display:'none'});
        gsap.set(elem,{autoAlpha:0});
    });
    gsap.set('.tabcontent1',{display:'block'});
    gsap.set('.tabcontent1',{autoAlpha:1});
    mainTabList.forEach((elem,index)=>{
        elem.addEventListener(clickEvent,(e)=>{
            e.preventDefault();
            var evt = e;
            var cityName = elem.getElementsByTagName('a')[0].getAttribute('href');
            openTab(evt, cityName);
        });
    });
    //mainTabList[0].click();
}
function openTab(evt,cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
    
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        gsap.to(tabcontent[i],{display:'none'});
        gsap.to(tabcontent[i],{autoAlpha:0});
    }
    
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    // Show the current tab, and add an "active" class to the button that opened the tab
    gsap.to(cityName,{display:'block'});
    gsap.to(cityName,{autoAlpha:1});
    evt.currentTarget.className += " active";
}


if(h_search_icon){
    h_search_icon.addEventListener(clickEvent, function(){
        
        // 랭킹 컨텐츠 공통 start
        var slideIndex = 0;
        var slides1_1 = document.getElementsByClassName("best_ranking_list01_1");
        var rankingList = document.querySelectorAll('.best_ranking_content01_ul > li');
        var tablinks01 = document.getElementById("tablinks01");
        var tablinks02 = document.getElementById("tablinks02");
        var showSlidesID = setTimeout(function () {
            showSlides();
        }, 1800);
        var showSlidesID_2 = setTimeout(function () {
            showSlides02();
        }, 1800);
        clearTimeout(showSlidesID_2);
        // 랭킹 컨텐츠 공통 end
        
        // 랭킹 탭 컨텐츠 첫번째 start
        function showSlides() {
            var i;
            var slides = document.getElementsByClassName("best_ranking_list01");
            for (i = 0; i < slides.length; i++) {
                slides[i].className = slides[i].className.replace(" active", "");
            }
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}    
            slides[slideIndex-1].className += " active";
            
            var setTimeoutID = setTimeout(showSlides, 1400); // Change image every 2 seconds
            
            if(best_ranking_close_btn){
                best_ranking_close_btn.addEventListener(clickEvent, function(){
                    for (i = 0; i < slides.length; i++) {
                        slides[i].className = slides[i].className.replace(" active", "");
                    }
                    slides[0].className += " active";
                    
                    tablinks01.classList.add('active');
                    tablinks02.classList.remove('active');
                    
                    clearTimeout(showSlidesID);
                    clearTimeout(setTimeoutID);
                    clearTimeout(showSlidesID_2);
                });
            }
            
            if(tablinks01){
                tablinks01.addEventListener(clickEvent, function(){
                    for (i = 0; i < slides.length; i++) {
                        slides[i].className = slides[i].className.replace(" active", "");
                    }
                    slides[0].className += " active";
                    
                    clearTimeout(showSlidesID);
                    clearTimeout(setTimeoutID);
                    clearTimeout(showSlidesID_2);
                });
            }
            
            if(tablinks02){
                tablinks02.addEventListener(clickEvent, function(){
                    for (i = 0; i < slides.length; i++) {
                        slides[i].className = slides[i].className.replace(" active", "");
                    }
                    slides[0].className += " active";
                    
                    clearTimeout(showSlidesID);
                    clearTimeout(setTimeoutID);
                    clearTimeout(showSlidesID_2);
                });
            }
            
            $('.best_ranking_content01_ul > li').on('mouseenter', function(){
                var i;
                var slides = document.getElementsByClassName("best_ranking_list01");
                for (i = 0; i < slides.length; i++) {
                    slides[i].className = slides[i].className.replace(" active", "");
                }
                
                clearTimeout(showSlidesID);
                clearTimeout(setTimeoutID);
                clearTimeout(showSlidesID_2);
            });
            
        }
        // 랭킹 탭 컨텐츠 첫번째 end
        
        // 랭킹 탭 컨텐츠 두번째 start
        function showSlides02() {
            var i;
            var slides = document.getElementsByClassName("best_ranking_list02");
            for (i = 0; i < slides.length; i++) {
                slides[i].className = slides[i].className.replace(" active", "");
            }
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}    
            slides[slideIndex-1].className += " active";
            
            var setTimeoutID_2 = setTimeout(showSlides02, 1400); // Change image every 2 seconds
            
            if(best_ranking_close_btn){
                best_ranking_close_btn.addEventListener(clickEvent, function(){
                    for (i = 0; i < slides.length; i++) {
                        slides[i].className = slides[i].className.replace(" active", "");
                    }
                    slides[0].className += " active";
                    
                    tablinks01.classList.add('active');
                    tablinks02.classList.remove('active');
                    
                    clearTimeout(showSlidesID);
                    clearTimeout(showSlidesID_2);
                    clearTimeout(setTimeoutID_2);
                });
            }
            
            if(tablinks01){
                tablinks01.addEventListener(clickEvent, function(){
                    for (i = 0; i < slides.length; i++) {
                        slides[i].className = slides[i].className.replace(" active", "");
                    }
                    slides[0].className += " active";
                    
                    clearTimeout(showSlidesID);
                    clearTimeout(showSlidesID_2);
                    clearTimeout(setTimeoutID_2);
                });
            }
            
            if(tablinks02){
                tablinks02.addEventListener(clickEvent, function(){
                    for (i = 0; i < slides.length; i++) {
                        slides[i].className = slides[i].className.replace(" active", "");
                    }
                    slides[0].className += " active";
                    
                    clearTimeout(showSlidesID);
                    clearTimeout(showSlidesID_2);
                    clearTimeout(setTimeoutID_2);
                });
            }
            
            $('.best_ranking_content02_ul > li').on('mouseenter', function(){
                var i;
                var slides = document.getElementsByClassName("best_ranking_list02");
                for (i = 0; i < slides.length; i++) {
                    slides[i].className = slides[i].className.replace(" active", "");
                }
                
                clearTimeout(showSlidesID);
                clearTimeout(showSlidesID_2);
                clearTimeout(setTimeoutID_2);
            });
            
        }
        // 랭킹 탭 컨텐츠 두번째 end
        
        // 랭킹 컨텐츠 공통 start
        // 랭킹 탭 컨텐츠 첫번째
        $('.best_ranking_content01_ul > li').on('mouseleave', function(){
            showSlides();
            clearTimeout(showSlidesID_2);
        });
        
        if(tablinks01){
            tablinks01.addEventListener(clickEvent, function(){
                showSlides();
                
                clearTimeout(showSlidesID);
                clearTimeout(showSlides02);
                clearTimeout(showSlidesID_2);
            });
        }
        
        // 랭킹 탭 컨텐츠 두번째
        $('.best_ranking_content02_ul > li').on('mouseleave', function(){
            showSlides02();
            clearTimeout(showSlidesID);
        });
        
        if(tablinks02){
            tablinks02.addEventListener(clickEvent, function(){
                showSlides02();
                
                clearTimeout(showSlides);
                clearTimeout(showSlidesID);
                clearTimeout(showSlidesID_2);
            });
        }
        // 랭킹 컨텐츠 공통 end
        
    });
}
// 베스트 랭킹 end


/* 탑 이동 버튼 */
const topBtn = document.getElementsByClassName("percent_wrap")[0];
topBtn.addEventListener(clickEvent,(e)=>{
  e.preventDefault();
  const target = document.getElementById('content');
  $('body, html').animate({ scrollTop : 0},3000/2);
});



const equipSect = document.getElementsByClassName('equipment-sect')[0];
const equipList = document.querySelectorAll('.equipment__list > li');
const equipMenu = Array.from(document.getElementsByClassName('equipment-menu-item'));

if(equipSect){
  
    equipList.forEach((equip,index)=>{
        equip.addEventListener('mouseenter',function(){
            equipList.forEach(equips=>equips.classList.remove('hover'));
            equipList[index].classList.add('hover');
            
            equipMenu.forEach(equips=>equips.classList.remove('hover'));
            equipMenu[index].classList.add('hover');
        });
    });
  
}



/* youtube click */
const ytBtns = document.querySelectorAll(".yt-thumb-scroll li");
const ytIframe = document.querySelector(".yt-video-area iframe");
if(ytBtns){
	ytBtns.forEach((btn,index)=>{
		var src = btn.getAttribute('data-yt-url');
		
		btn.addEventListener('click',function(){
			var iframeSrc = 'https://www.youtube.com/embed/'+src;
			ytIframe.setAttribute('src',iframeSrc);
			var tit = btn.querySelector('.yt-tit-txt').textContent;
			var mainTit = document.querySelector('.yt-tit-target');
			mainTit.textContent = tit;
			ytBtns.forEach(btn=>btn.classList.remove('active'));
			btn.classList.add('active');
		});
	})
}


// slide 
// 메인 페이지 swiper 
const main_top_slider_Id = document.getElementById('main_top_slider');
const main_top_slider = new Swiper('.main_top_slider', {
    speed: 1000,
    autoplay: {
        delay: 3800,
        disableOnInteraction: false,
    },
    loop: true,
    loopAdditionalSlides: 1,
    observer: true,
    observeParents: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    pagination: {
        el: '.swiper-pagination.main_slider_pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + ' active"><svg class="circ" width="15" height="15"><circle class="circ1" cx="8" cy="8" r="5" stroke="rgb(0, 0, 0)" stroke-width="2" fill="none"/><circle class="circ2" cx="8" cy="8" r="5" stroke="rgba(255, 255, 255, 0.2)" stroke-width="2" fill="none"/></svg></span>';
        },
    },
    breakpoints: {
        350: {
            pagination: {
                el: '.swiper-pagination.main_slider_pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + ' active"><svg class="circ" width="10" height="10"><circle class="circ1" cx="5" cy="5" r="4" stroke="rgb(0, 0, 0)" stroke-width="2" fill="none"/><circle class="circ2" cx="5" cy="5" r="4" stroke="rgba(255, 255, 255, 0.2)" stroke-width="2" fill="none"/></svg></span>';
                },
            },
        },
        481: {
            pagination: {
                el: '.swiper-pagination.main_slider_pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + ' active"><svg class="circ" width="15" height="15"><circle class="circ1" cx="8" cy="8" r="5" stroke="rgb(0, 0, 0)" stroke-width="2" fill="none"/><circle class="circ2" cx="8" cy="8" r="5" stroke="rgba(255, 255, 255, 0.2)" stroke-width="2" fill="none"/></svg></span>';
                },
            },
        },
    },
    on : {
        init : function (){ //홈페이지 로딩 시 바로 실행되는 구문
            main_top_slider_Id.classList.add('main_slider01_active');
            main_top_slider_Id.classList.remove('main_slider02_active');
            main_top_slider_Id.classList.remove('main_slider03_active');
        },
    },
});

main_top_slider.on('transitionStart', function() { 
    if(main_top_slider.realIndex == 0){ //메인 슬라이드 1번 영역에 도착 후 실행되는 구문
        
        main_top_slider_Id.classList.add('main_slider01_active');
        main_top_slider_Id.classList.remove('main_slider02_active');
        main_top_slider_Id.classList.remove('main_slider03_active');
        
        
    } else if(main_top_slider.realIndex == 1){ //메인 슬라이드 2번 영역에 도착 후 실행되는 구문
        
        main_top_slider_Id.classList.remove('main_slider01_active');
        main_top_slider_Id.classList.add('main_slider02_active');
        main_top_slider_Id.classList.remove('main_slider03_active');
        
        
    } else if(main_top_slider.realIndex == 2){ //메인 슬라이드 3번 영역에 도착 후 실행되는 구문
        
        main_top_slider_Id.classList.remove('main_slider01_active');
        main_top_slider_Id.classList.remove('main_slider02_active');
        main_top_slider_Id.classList.add('main_slider03_active');
        
        
    }
}); 


const header_top_slider = new Swiper('.header_top_slider', {
    slidesPerView: 1,
    direction: 'vertical',
    speed: 1000,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    loopAdditionalSlides: 1,
    observer: true,
    observeParents: true,
});


const header_left_slider = new Swiper('.header_left_slider', {
    slidesPerView: 1,
    direction: 'vertical',
    speed: 1000,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    loopAdditionalSlides: 1,
    observer: true,
    observeParents: true,
});


const main_cont08_slider = new Swiper('.main_cont08_slider', {
    slidesPerView:1,
    spaceBetween: 0,
    speed:800,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
    loopAdditionalSlides: 1,
    navigation: {
        nextEl: ".swiper-button-next.main_cont08_next",
        prevEl: ".swiper-button-prev.main_cont08_prev",
    },
    observer: true,
    observeParents: true,
});


const footer_bottom_slide = new Swiper('.footer_bottom_slide', {
    spaceBetween: 100,
    centeredSlides: true,
    speed: 12000,
    autoplay: {
        delay: 1,
    },
    loop: true,
    slidesPerView:'auto',
    allowTouchMove: false,
    disableOnInteraction: true,
    loopAdditionalSlides: 1,
    observer: true,
    observeParents: true,
});


