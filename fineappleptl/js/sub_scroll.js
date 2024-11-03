gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
    
	// desktop
	"(min-width: 961px)": function () {
		// setup animations and ScrollTriggers for screens over 800px wide (desktop) here...
		// ScrollTriggers will be reverted/killed when the media query doesn't match anymore.
        
        
        
	},
    
	// mobile
	"(max-width:980px)": function () {
		// Any ScrollTriggers created inside these functions are segregated and get
		// reverted/killed when the media query doesn't match anymore.
        
        
        gsap.to("#s14_c02_list_wrap", {
            xPercent: -100,
            x: innerWidth / 1.5,
            ease: "none",
            scrollTrigger: {
                trigger: "#s14_c02_cont",
                start: "top 30%",
                end: "+=1880",
                scrub: !0,
                pin: !0,
                anticipatePin: 1
            }
        });
        
        gsap.to("#s14_c02_list_wrap2", {
            xPercent: -100,
            x: innerWidth / 1.5,
            ease: "none",
            scrollTrigger: {
                trigger: "#s14_c02_cont2",
                start: "top 30%",
                end: "+=1880",
                scrub: !0,
                pin: !0,
                anticipatePin: 1
            }
        });
        
        gsap.to("#s14_c02_list_wrap3", {
            xPercent: -100,
            x: innerWidth / 1.5,
            ease: "none",
            scrollTrigger: {
                trigger: "#s14_c02_cont3",
                start: "top 30%",
                end: "+=1880",
                scrub: !0,
                pin: !0,
                anticipatePin: 1
            }
        });
        
        gsap.to("#s14_c02_list_wrap4", {
            xPercent: -100,
            x: innerWidth / 1.5,
            ease: "none",
            scrollTrigger: {
                trigger: "#s14_c02_cont4",
                start: "top 30%",
                end: "+=1880",
                scrub: !0,
                pin: !0,
                anticipatePin: 1
            }
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
        
        // s21_c07_video
        // ScrollTrigger 로 해당 영역에 왔을때 video 재생 및 일시정지 시키기
//        const videos_main_cont2 = gsap.utils.toArray('video')
//        videos_main_cont2.forEach(function(video, i) {
//            function playVideo(el) {
//                let vid_main_cont2 = document.getElementById('s21_c07_video');
//                setTimeout(function() {
//                    vid_main_cont2.play();
//                }, 1500);
//            }
//            
//            function pauseVideo(el) {
//                let vid_main_cont2 = document.getElementById('s21_c07_video');
//                vid_main_cont2.pause();
//            }
//            
//            const s21_c07_video = document.getElementById('s21_c07_video');
//            const s21_c07_cont_box = document.getElementById('s21_c07_cont_box');
//            ScrollTrigger.create({
//              trigger: s21_c07_cont_box,
//              start: 'top 50%',
//              end: 'bottom 30%',
//              markers:false,
//              toggleClass: {className: 'on', targets: '.s21_c07_cont_box'},
//              onToggle: self => self.isActive ? playVideo("s21_c07_video") : pauseVideo("s21_c07_video"),
//            });
//            
//        });
        // //ScrollTrigger 로 해당 영역에 왔을때 video 재생 및 일시정지 시키기
        
	}
});
ScrollTrigger.refresh();