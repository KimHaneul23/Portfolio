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





// slide 
