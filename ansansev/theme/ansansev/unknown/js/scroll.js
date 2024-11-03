gsap.registerPlugin(ScrollTrigger);


ScrollTrigger.matchMedia({
    
	// desktop
	"(min-width: 801px)": function () {
		// setup animations and ScrollTriggers for screens over 800px wide (desktop) here...
		// ScrollTriggers will be reverted/killed when the media query doesn't match anymore.
        
        
	},
    
	// mobile
	"(max-width:800px)": function () {
		// Any ScrollTriggers created inside these functions are segregated and get
		// reverted/killed when the media query doesn't match anymore.
        
        
	},
    
	// all 
	"all": function () {
        
        const activeTrigger = document.getElementsByClassName("active_trigger");
        if(activeTrigger){
          gsap.utils.toArray(activeTrigger).forEach(function(elem, index){
            ScrollTrigger.create({
              trigger: elem,
              start: '20% bottom',
              end: 'bottom top',
              toggleActions: 'play none none none',
              onEnter:()=>elem.classList.add('active'),
              //markers:true,
              //toggleClass: {className: 'active', targets: elem}
            });
          });
        }/* .active_trigger가 있는 위치에 도착하면 active 클래스 추가 - 스크롤 시 효과추가를 위해 */
        
        
        const fadeUpAni = document.getElementsByClassName("fade_ani"); // fade효과 줄 대상에서 .fade_ani 클래스 추가
        if(fadeUpAni){
          gsap.utils.toArray(fadeUpAni).forEach(function(elem, index){
            const fadeDelay = elem.getAttribute('data-fade-delay'); // .fade_ani에게 delay시간 설정
            
            var x = 0;
            var y = 0;
            
            if (elem.classList.contains('fadeUp')) { //나타나는 방향 설정 .fadeUp, .fadeDown, .fadeLeft, .fadeRight 클래스 추가 
              x = 0;
              y = 80;
            }
            if (elem.classList.contains('fadeDown')) {
              x = 0;
              y = -80;
            }
            if (elem.classList.contains('fadeLeft')) {
              x = -80;
              y = 0;
            }
            if (elem.classList.contains('fadeRight')) {
              x = 80;
              y = 0;
            }
            gsap.fromTo(elem,{
              x: x,
              y: y,
              opacity: 0
            },{
              scrollTrigger: {
                trigger: elem,
                start: 'top 90%',
                toggleActions: 'play none none none',
                //markers:true
              },
              x: 0,
              y: 0,
              opacity: 1,
              duration: .6,
              delay: fadeDelay * 0.001,
              ease: Power1.easeOut,
            })
          });
        }/* .fade_ani이 있을때만 실행 */
        
        
        gsap.utils.toArray(".parallax").forEach((section, i) => {  /* parallax 배경 */
            section.bg = section.querySelector(".bg");
            let elemHeight = section.bg.clientHeight;
            section.bg.style.backgroundPosition = "50% 0"; 
            gsap.to(section.bg, {
                backgroundPosition: `50% ${elemHeight / 2}px`,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top top", 
                    end: "bottom top",
                    scrub: true
                }
            });
        });

	}
});