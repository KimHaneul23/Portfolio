gsap.registerPlugin(ScrollTrigger);


ScrollTrigger.matchMedia({
    
	// desktop
	"(min-width: 801px)": function () {
		// setup animations and ScrollTriggers for screens over 800px wide (desktop) here...
		// ScrollTriggers will be reverted/killed when the media query doesn't match anymore.
        
        // 사이드 네비게이션 start
        const side_nav = document.getElementById('main_cont02');
        ScrollTrigger.create({
          trigger: side_nav,
          start: '-40% top',
          end: 99999,
          toggleClass: {className: 'on', targets: '.side_nav'}
        });
        
        const side_nav_li01 = document.getElementById('main_cont02');
        ScrollTrigger.create({
          trigger: side_nav_li01,
          start: 'top 5%',
          end: 'bottom 50%',
          toggleClass: {className: 'active', targets: '.side_nav_li01'}
        });
        
        const side_nav_li02 = document.getElementById('main_cont03');
        ScrollTrigger.create({
          trigger: side_nav_li02,
          start: 'top 50%',
          end: 'bottom 50%',
          toggleClass: {className: 'active', targets: '.side_nav_li02'}
        });
        
        const side_nav_li03 = document.getElementById('main_cont04');
        ScrollTrigger.create({
          trigger: side_nav_li03,
          start: 'top 50%',
          end: 'bottom 40%',
          toggleClass: {className: 'active', targets: '.side_nav_li03'}
        });
        
        const side_nav_li04 = document.getElementById('main_cont05');
        ScrollTrigger.create({
          trigger: side_nav_li04,
          start: 'top 40%',
          end: 'bottom 10%',
          toggleClass: {className: 'active', targets: '.side_nav_li04'}
        });
        // 사이드 네비게이션 end
        
        // ScrollTrigger 로 해당 영역에 왔을때 video 재생 및 일시정지 시키기
        const videos = gsap.utils.toArray('video')
        videos.forEach(function(video, i) {
            function playVideo(el) {
                let vid = document.getElementById('main_cont03_video');
                setTimeout(function() {
                    vid.play();
                }, 1500);
            }

            function pauseVideo(el) {
                let vid = document.getElementById('main_cont03_video');
                vid.pause();
            }

            const main_cont03_vodeo = document.getElementById('main_cont03_video');
            const main_content03_ani = document.getElementById('main_cont03');
            ScrollTrigger.create({
              trigger: main_content03_ani,
              start: 'top 40%',
              end: 'bottom 20%',
              toggleClass: {className: 'on', targets: '.main_cont03_wrap, .main_cont03_img'},
              onToggle: self => self.isActive ? playVideo("main_cont03_video") : pauseVideo("main_cont03_video"),
            });

        });
        // //ScrollTrigger 로 해당 영역에 왔을때 video 재생 및 일시정지 시키기
        
        
	},
    
	// mobile
	"(max-width:800px)": function () {
		// Any ScrollTriggers created inside these functions are segregated and get
		// reverted/killed when the media query doesn't match anymore.
        
        
        // gnb
        const menuItem = document.querySelectorAll('.m-gnb-menu-depth1');

        function addClass(elem,className){
          let max = elem.length;
          for(let i=0;i<max; i++){
            elem[i].classList.add(className);
          }
        }
        function removeClass(elem,className){
          let max = elem.length;
          for(let i=0;i<max; i++){
            elem[i].classList.remove(className);
          }
        }
        menuItem.forEach(menu =>{menu.addEventListener(clickEvent,function(e){
          this.tg = e.target;
          this.menuList = this.tg.parentNode;

          if(this.tg.nextElementSibling.classList.contains('m-gnb-menu-depth2')) {
            e.preventDefault();
            if(this.menuList.classList.contains('active')){
              //클릭한 메뉴에 active가 있을때
              removeClass(menuItem,'on');
              this.menuList.classList.remove('active');
              gsap.fromTo(this.menuList,{
                  height: (this.tg.offsetHeight + this.tg.nextElementSibling.offsetHeight) + 1,
                },
                {
                  height: this.tg.offsetHeight,
                  duration: .7
                });
            } else if(!this.menuList.classList.contains('on')){
              //내가 클릭한 메뉴에 on이 없을때 active가 없을때
              removeClass(menuItem,'on');
              this.menuList.classList.add('on');
              // gsap.to(menuItem,
              //   {
              //     height: this.tg.offsetHeight,
              //     duration: .7,
              //     onStart:()=>{removeClass(menuItem,'active');}
              //   });
              menuItem.forEach((el,index)=>{
                  gsap.to(el, {
                    height: this.tg.offsetHeight,
                    duration: .4
                  });
                });
              gsap.to(this.menuList,
                {
                  height: (this.tg.offsetHeight + this.tg.nextElementSibling.offsetHeight) + 1,
                  duration: .7
                });
            } else{
              //클릭한 메뉴에 이미 on이 있을때
              this.menuList.classList.remove('on');
              gsap.to(this.menuList,
                {
                  height: this.tg.offsetHeight,
                  duration: .7
                });
            }

          }
        })});
        
	},
    
	// all 
	"all": function () {
        
        const quickMenu = document.getElementById('header');
        ScrollTrigger.create({
          trigger:quickMenu,
          start: 'bottom top',
          end: 99999,
          toggleClass: {className: 'open', targets: '.quick_wrap'}
        });
        
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
        
        const revealAni = document.getElementsByClassName("gs_reveal");
        if(revealAni){
          gsap.utils.toArray(revealAni).forEach(function(elem, index){
            gsap.set(elem, {autoAlpha: 0}); // assure that the element is hidden when scrolled into view
            const getDelay = elem.getAttribute('data-gs-delay');

            var x = 0,
              y = 60,
              z = -100;

            if (elem.classList.contains('reveal_fromDown')) {
              y = -60
            } else if(elem.classList.contains("reveal_fromUp")){
              y = 60;
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
              duration: 1.6,
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