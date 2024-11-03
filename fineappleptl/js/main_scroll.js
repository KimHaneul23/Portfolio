gsap.registerPlugin(ScrollTrigger);

let cursor = function(e){
	circleCursor.style.top = e.clientY + "px";
	circleCursor.style.left = e.clientX + "px";
}

ScrollTrigger.matchMedia({
    
	// desktop
	"(min-width: 961px)": function () {
		// setup animations and ScrollTriggers for screens over 800px wide (desktop) here...
		// ScrollTriggers will be reverted/killed when the media query doesn't match anymore.
        
        // 메인 마우스 커서 변경 - s
		const circleCursor = document.getElementById('circleCursor');
		const slideCursor = document.querySelectorAll('.mouse_hover');
		
		var expandClass = 'is-expand-slider';
		
		document.addEventListener('mousemove',cursor);
		
		var expandBig = gsap.timeline({paused:true});
		expandBig.fromTo(circleCursor, {
		  autoAlpha:0,
		  scale: 0.5
		}, {
		  autoAlpha:1,
		  scale: 1,
		  ease:Power4
		});
        
		function expanding() {
			circleCursor.classList.add(expandClass);
			expandBig.play();
		}
        
		function expanded() {
			circleCursor.classList.remove(expandClass);
			expandBig.reverse(.5);
		}
        
		slideCursor.forEach((slider)=>{
			slider.addEventListener('mouseenter',expanding);
			slider.addEventListener('mouseleave',expanded);
		})
        // 메인 마우스 커서 변경 - e
        
        ScrollTrigger.create({
            trigger: '#main_cont_wrap02',
            start: '-60px top',
            end: 'bottom 60px',
            toggleClass: {className: 'main_cont02', targets: '.ht-inner, .main-header'},
        });
        
        
        gsap.set('.main_top_cont',{height:'100vh'}) 
        gsap.fromTo('.main_top_cont', {
            yPercent: 0,
            scrollTrigger: {
                trigger: '.main_top_cont',
                start: 'top top', 
                end: () => `+=${document.querySelector('.main_top_cont').offsetHeight}`, //+=300
                markers: false,
                pin: true, 
                pinSpacing: false,
                scrub: 3,
                defaults:{
                    ease: 'power1.inOut',
                    duration:1,
                    transformOrigin:'0 0'
                },
            },
        }, {
            immediateRender: false, 
            duration:1.5,
            yPercent: 0,
        });
        
	},
    
	// mobile
	"(max-width:960px)": function () {
		// Any ScrollTriggers created inside these functions are segregated and get
		// reverted/killed when the media query doesn't match anymore.
        
        ScrollTrigger.create({
            trigger: '#main_cont_wrap02_m',
            start: '-60px top',
            end: 'bottom 60px',
            toggleClass: {className: 'main_cont02', targets: '.ht-inner, .main-header'},
        });
        
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
        
	}
});
ScrollTrigger.refresh();