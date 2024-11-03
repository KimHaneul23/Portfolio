gsap.registerPlugin(ScrollTrigger);

var clickEvent_2 = (function () {
	if ('ontouchstart' in document.documentElement === true) {
		return 'touchstart';
	} else {
		return 'click';
	}
})(); // 클릭이벤트와 터치이벤트 토글


ScrollTrigger.matchMedia({
    
	// desktop
	"(min-width: 961px)": function () {
		// setup animations and ScrollTriggers for screens over 800px wide (desktop) here...
		// ScrollTriggers will be reverted/killed when the media query doesn't match anymore.
        
        // 퀵메뉴
        //const quick = document.getElementById("quick");
        //const quickBtn = document.getElementById("q_btn");
        //quickBtn.addEventListener(clickEvent,()=>quick.classList.toggle('open_q'));
        
        
	},
    
	// mobile
	"(max-width:960px)": function () {
		// Any ScrollTriggers created inside these functions are segregated and get
		// reverted/killed when the media query doesn't match anymore.
        
        // 퀵메뉴
        const quick_m = document.getElementById("radial_quick_m");
        const quickBtn_m = document.getElementById("radial_btn_m");
        const quickBtn_dimmed_m = document.getElementById("radial_quick_dimmed");
        const quick_menu_event_m = function(e){
        	quick_m.classList.toggle('q_open');
        }
        quickBtn_m.addEventListener(clickEvent_2,quick_menu_event_m);
        quickBtn_dimmed_m.addEventListener(clickEvent_2,quick_menu_event_m);
        
        
        //ScrollTrigger.create({
        //    trigger: '#content',
        //    start: '200px top',
        //    end: 99999,
        //    toggleClass: {className: 'scrolled', targets: '.quick_wrap'}
        //});
        
        // header
        const header = document.getElementById('header');
        const hamberger = document.querySelector('.hamberger');
        const gnb = document.getElementById('gnb');
        
        const menuEvent = function(e){
        	$('html, body').toggleClass('open');
        	hamberger.classList.toggle('open');
        	hamberger.classList.toggle('active');
        	gnb.classList.toggle('open');
            quick_m.classList.toggle('gnb_open');
            
            /* 모바일에서 메뉴 버튼 클릭 시 스크롤 멈춤(토글 방식) */
            var ele = document.querySelector('html, body');
            if (!ele) {
                return
            };
            if (ele.style.overflowY == 'hidden') {
                ele.style.overflowY = 'hidden';
                ele.style.height = 'auto';
            } else {
                ele.style.overflowY = 'overlay';
                ele.style.height = 'initial';
            }
        }
        
        hamberger.addEventListener(clickEvent_2, menuEvent);
        
	},
    
	// mobile
	"(max-width:480px)": function () {
		// Any ScrollTriggers created inside these functions are segregated and get
		// reverted/killed when the media query doesn't match anymore.
        
        
        
        
        
	},
    
	// mobile
	"(max-width:434px)": function () {
		// Any ScrollTriggers created inside these functions are segregated and get
		// reverted/killed when the media query doesn't match anymore.
        
        
        
        
        
	},
    
	// mobile
	"(max-width:400px)": function () {
		// Any ScrollTriggers created inside these functions are segregated and get
		// reverted/killed when the media query doesn't match anymore.
        
        
        
        
        
	},
    // mobile
	"(max-height:700px)": function () {
		// Any ScrollTriggers created inside these functions are segregated and get
		// reverted/killed when the media query doesn't match anymore.
        
        
        
        
        
	},
    // mobile
	"(max-height:600px)": function () {
		// Any ScrollTriggers created inside these functions are segregated and get
		// reverted/killed when the media query doesn't match anymore.
        
        
        
        
	},
    
	// all 
	"all": function () {
        
        // card motion
        const cardmotion = document.querySelectorAll(".card-motion");
        cardmotion.forEach((cardmotion, index) => {
            ScrollTrigger.create({
                trigger: cardmotion,
                id: index + 1,
                start: 'top 80%',
                end: 'bottom 10%',
                onEnter: () => cardmotion.classList.add('animate'),
				onEnterBack: () => cardmotion.classList.add('animate'),
				onLeaveBack: () => cardmotion.classList.remove('animate'),
				onLeave: () => cardmotion.classList.remove('animate')
            });
        });
        
        const revealAni = document.getElementsByClassName("gs_reveal");
        if(revealAni){
          gsap.utils.toArray(revealAni).forEach(function(elem, index){
            gsap.set(elem, {autoAlpha: 0}); // assure that the element is hidden when scrolled into view
            const getDelay = elem.getAttribute('data-gs-delay');

            var x = 0,
              y = 80,
              z = -100;

            if (elem.classList.contains('reveal_fromDown')) {
              y = -80
            } else if(elem.classList.contains("reveal_fromUp")){
              y = 80;
            } else if (elem.classList.contains("reveal_fromRight")) {
              x = 300;
              y = 0;
              z = 10;
            } else if (elem.classList.contains("reveal_fromLeft")) {
              x = -300;
              y = 0;
              z = 10;
            } 
            gsap.fromTo(elem, {
              x: x,
              y: y,
              z: z,
              autoAlpha: 0
            }, {
              scrollTrigger: {
                trigger: elem.parentNode,
                start: 'top 70%',
                end: 99999,
                //onEnter:()=>elem.classList.add('active'),
                toggleClass: {className: 'active', targets: '.gs_reveal'}
                //toggleClass: {className: 'waypoint', targets: '.main-header, #gnb'}
                //markers:true
              },
              duration: 1.8,
              x: 0,
              y: 0,
              z: 0,
              autoAlpha: 1,
              ease: Power2.easeOut,
              overwrite: "auto",
              delay: getDelay * 0.001
            });
          });
        }/* gs_reveal이 있을때만 실행 */
        
        
	}
});
ScrollTrigger.refresh();