// slide 
(function() {
    var window_width = $(window).width();
    if (window_width <= 960) { // 모바일
        var main_cont03_swiper_m = new Swiper('.main_cont03_swiper_m', {
            slidesPerView:'auto',
            spaceBetween: 0,
            speed:1000,
            autoplay:false,
            loop:false,
            loopAdditionalSlides: 1,
            observer: true,
            observeParents: true,
            //centeredSlides: true,
        });
        var main_cont04_swiper_m = new Swiper('.main_cont04_swiper_m', {
            slidesPerView:'auto',
            spaceBetween: 0,
            speed:1000,
            autoplay:false,
            loop:false,
            loopAdditionalSlides: 1,
            observer: true,
            observeParents: true,
            //centeredSlides: true,
        });
        var main_cont05_swiper_m = new Swiper('.main_cont05_swiper_m', {
            slidesPerView:'auto',
            spaceBetween: 0,
            speed:1000,
            autoplay:false,
            loop:false,
            loopAdditionalSlides: 1,
            observer: true,
            observeParents: true,
            //centeredSlides: true,
        });
        
    } else { // PC
        
    }
})(); // resize 최적화








