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
	toggleClass: {className: 'scrolled', targets: '.ht-inner'}
});




//const topNav = Array.from(document.getElementsByClassName('top_menu'));
var headHei = document.getElementById('header').clientHeight;

/*topNav.forEach((elem,index)=>{
	ScrollTrigger.create({
		trigger: '#sect0'+(index+1),
		start: 'top 20%',
		end : 'bottom 20%',
		toggleClass: {className: 'on', targets: elem}
	});

	const navAnchor = document.querySelectorAll("#top_menu0"+(index+1)+" > a");
    var headHei = document.getElementById('header').clientHeight;
	navAnchor.forEach(anchor => {
		anchor.addEventListener("click", function(e) {
		  e.preventDefault();
	   
		  const targetElem = document.querySelector(e.target.getAttribute("href"));
		  var offset = targetElem.offsetTop;
		  gsap.to(window, {duration: 0, scrollTo: {y: offset - headHei}});
	   
		});
	});
});*/


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
    gsap.fromTo(list,{y:-0,autoAlpha:0},{y:0,autoAlpha:1});
  });
  button.addEventListener('mouseleave',(e)=>{
    const list = button.getElementsByClassName('open-on-hover-list')[0];
    gsap.fromTo(list,{y:0,autoAlpha:1},{y:-0,autoAlpha:0});
  });
});


// 서브페이지 메뉴 스크립트 추가 210705
const tnb = document.getElementById('topNavigation');
//const tnbDim = document.getElementById('subDim');
const tnbD1 = document.querySelectorAll('.sub-menu-depth1');

// 서브페이지 메뉴 스크립트 추가 210705
if(tnb){
  tnb.addEventListener('mouseenter',function(){
    header.classList.add('tnb-open');
    hamburger.classList.add('tnb-open');
    //tnbDim.classList.add('tnb-open');
  });
  tnb.addEventListener('mouseleave',function(){
    header.classList.remove('tnb-open');
    hamburger.classList.remove('tnb-open');
    //tnbDim.classList.remove('tnb-open');
  });
//  tnbDim.addEventListener('mouseenter',function(){
//    header.classList.add('tnb-open');
//    hamburger.classList.add('tnb-open');
//    tnbDim.classList.add('tnb-open');
//  });
//  tnbDim.addEventListener('mouseleave',function(){
//    header.classList.remove('tnb-open');
//    hamburger.classList.remove('tnb-open');
//    tnbDim.classList.remove('tnb-open');
//  });
}


// 탑버튼
ScrollTrigger.create({
	trigger: '#startContent',
	start: '20% top',
	end: 99999,
	toggleClass: {className: 'on', targets: '.quick_menu_li_btn'}
});

const quick = document.getElementById('quick');
const topBtn = document.getElementsByClassName("topbtn")[0];
if(quick){
    topBtn.addEventListener(clickEvent, function(e){
        e.preventDefault();
        $('body, html').stop().animate({ scrollTop : 0},2000/2);
    });
}




const mainTabSect = document.getElementsByClassName('main_cont04_wrap')[0];
const mainTabList = document.querySelectorAll('.main_cont04_tab_ul > li');
if(mainTabSect){
  gsap.utils.toArray('.tabcontent').forEach(function(elem,idx){
    gsap.set(elem,{autoAlpha:0});
  });
  gsap.set('.tabcontent01',{autoAlpha:1});
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
    gsap.to(tabcontent[i],{autoAlpha:0});
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  gsap.to(cityName,{autoAlpha:1});
  evt.currentTarget.className += " active";
}



const subTabSect = document.getElementsByClassName('sub_all_cont_wrap')[0];
const subTabList = document.querySelectorAll('.sub_all_cont_tab_ul > li');
if(subTabSect){
  gsap.utils.toArray('.tabcontent').forEach(function(elem,idx){
    gsap.set(elem,{autoAlpha:0});
  });
  gsap.set('.tabcontent01',{autoAlpha:1});
  subTabList.forEach((elem,index)=>{
    elem.addEventListener(clickEvent,(e)=>{
      e.preventDefault();
      var evt = e;
      var cityName = elem.getElementsByTagName('a')[0].getAttribute('href');
      subopenTab(evt, cityName);
    });
  });
  //subTabList[0].click();
}
function subopenTab(evt,cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    gsap.to(tabcontent[i],{autoAlpha:0});
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  gsap.to(cityName,{autoAlpha:1});
  evt.currentTarget.className += " active";
}

(function() {
    /* subBtm tap */
    var $tabList = $('.sub_all_cont_tab_ul > li');
    var $tabCnt = $('.tabcontent');
    var target, btmBg;
    var tabidx = 0;
    var tabLength =$tabCnt.length;
    var i = 0;
    
    
    setInterval(function(){
        if(tabidx == tabLength) tabidx = 0;
        
        $tabList.eq(tabidx).addClass('active').siblings().removeClass('active');
        $tabList.eq(tabidx).click();
        tabidx++;
        
    }, 3000);
})(); // resize 최적화



// slide 
var main_top_view_swiper = new Swiper('.main_top_view_swiper', {
    speed: 1200,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    loop: true,
    loopAdditionalSlides: 1,
    observer: true,
    initialSlide: 0,
    observeParents: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // 클릭온
    },
});

const main_cont03_swiper = new Swiper('.main_cont03_swiper', {
    slidesPerView:1,
    spaceBetween: 0,
    speed:800,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
    loopAdditionalSlides: 1,
    pagination: {
        el: ".main_cont03_pagination",
        type: "fraction",
        formatFractionCurrent: function (number) {
            return '0' + number;
        },
        formatFractionTotal: function (number) {
            return '0' + number;
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    observer: true,
    observeParents: true,
});

const main_cont04_swiper = new Swiper('.main_cont04_swiper', {
    slidesPerView:'auto',
    spaceBetween: 0,
    speed:800,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
    loopAdditionalSlides: 1,
    observer: true,
    observeParents: true,
    //breakpoints: {
    //    350: { // 350px 부터
    //        slidesPerView:1.8,
    //    },
    //    481: { // 481px 부터
    //        slidesPerView:1.8,
    //    },
    //    1921: { // 1921px 부터
    //        slidesPerView:2.2,
    //    },
    //    2390: { // 2390px 부터
    //        slidesPerView:2.4,
    //    },
    //    2600: { // 2600px 부터
    //        slidesPerView:2.8,
    //    },
    //},
});

const main_cont04_bottom_swiper = new Swiper('.main_cont04_bottom_swiper', {
    slidesPerView:'auto',
    spaceBetween:0,
    speed:800,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
    loopAdditionalSlides: 1,
    observer: true,
    observeParents: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const m_sub_all_cont_swiper = new Swiper('.m_sub_all_cont_swiper', {
    slidesPerView:'auto',
    speed: 800,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
    loopAdditionalSlides: 1,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    observer: true,
    observeParents: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // 클릭온
    },
});

const sub1_2_cont03_swiper = new Swiper('.sub1_2_cont03_swiper', {
    slidesPerView:'auto',
    speed: 800,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
    loopAdditionalSlides: 1,
    observer: true,
    observeParents: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // 클릭온
    },
});

const sub1_3_cont05_swiper = new Swiper('.sub1_3_cont05_swiper', {
    slidesPerView:'auto',
    spaceBetween:0,
    speed:800,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
    loopAdditionalSlides: 1,
    observer: true,
    observeParents: true,
    navigation: {
        nextEl: ".sub1_3_cont05_text .swiper-button-next",
        prevEl: ".sub1_3_cont05_text .swiper-button-prev",
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // 클릭온
    },
});