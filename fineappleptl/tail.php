<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

//if (G5_IS_MOBILE) {
//    include_once(G5_THEME_MOBILE_PATH.'/tail.php');
//    return;
//}
?>


    <!-- 하단 시작 { -->
    <footer class="footer" id="footer">
        <div class="ft_inner">
            <h1 class="f_logo pc_cont_960">
                <img src="<?php echo G5_URL?>/img/logo02.png" alt="파인애플피티엘">
            </h1>
            <h1 class="f_logo m_cont_960">
                <img src="<?php echo G5_URL?>/img/logo02_m.png" alt="파인애플피티엘">
            </h1>
            <div class="ft_info_wrap">
                <ul class="ft_info ft_info01">
                    <li class="ft_info_address">
                        <p class="txt01 fz_16 ls_p5 lh_16 pretendard normal">
                            서울시 강남구 논현로 154길 15 우노빌딩 4층
                        </p>
                        <a href="https://www.google.co.kr/maps/dir//%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C+%EA%B0%95%EB%82%A8%EA%B5%AC+%EB%85%BC%ED%98%84%EB%A1%9C154%EA%B8%B8+15/data=!4m8!4m7!1m0!1m5!1m1!1s0x357ca38d7d0d6001:0xa84652322baf4e4!2m2!1d127.0293856!2d37.5218637?hl=ko&entry=ttu" target="_blank">
                            <p class="txt01 fz_15 ls_p1 lh_16 pretendard normal">
                                오시는길
                            </p>
                        </a>
                    </li>
                    <li class="ft_info_mail">
                        <p class="txt01 fz_16 ls_p5 lh_16 pretendard medium">
                            fineappleptl@gmail.com
                        </p>
                    </li>
                    <li class="ft_info_number">
                        <a href="tel:070-4633-2028">
                            <p class="txt01 fz_20 ls_p2 lh_16 pretendard medium">
                                070 . 4633 . 2028
                            </p>
                        </a>
                    </li>
                </ul>
                <ul class="ft_info ft_info02">
                    <li class="ft_info_about">
                        <a href="<?php echo G5_URL?>" onclick="alert('회사소개서 준비중 입니다.');return false;">
                            <p class="txt01 c-w fz_17 ls_p5 lh_16 pretendard normal">
                                회사소개서
                            </p>
                            <i class="download_icon"></i>
                        </a>
                    </li>
                    <li class="ft_info_contact">
                        <a href="<?php echo G5_URL?>/contact.php">
                            <p class="txt01 c-w fz_17 ls_p5 lh_16 pretendard normal">
                                프로젝트 문의하기
                            </p>
                            <i class="arrow_icon_w"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="ft_bottom_item_wrap">
                <ul class="ft_bottom_item">
                    <li class="ft_bottom_sns">
                        <a href="https://www.instagram.com/creative_ptl/" target="_blank">
                            <span class="blind">퀵메뉴 인스타그램</span>
                            <i class="ft_insta_icon"></i>
                        </a>
                        <a href="https://blog.naver.com/fineapple_ptl" target="_blank">
                            <span class="blind">퀵메뉴 블로그</span>
                            <i class="ft_blog_icon"></i>
                        </a>
                    </li>
                    <li class="ft_bottom_txt">
                        <p class="txt01 fz_14 ls_p2 lh_16 pretendard normal">
                            COPYRIGHT  2013 - 2024 FINEAPPLEPTL .ALL RIGHTS RESERVED.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
    
    
    <!-- quick-menu -->
    <div class="quick_wrap top open pc_cont_960" id="quick">
        <div class="quick_menu_wrap" id="quick_menu_wrap">
            <ul class="quick_menu">
                <li class="quick_menu_list quick_menu_li_youtube">
                    <a href="https://www.youtube.com/@user-qm4lt1vh2q" target="_blank">
                        <span class="blind">퀵메뉴 유튜브</span>
                        <i class="quick_icon quick_icon_youtube"></i>
                    </a>
                </li>
                <li class="quick_menu_list quick_menu_li_blog">
                    <a href="https://blog.naver.com/fineapple_ptl" target="_blank">
                        <span class="blind">퀵메뉴 블로그</span>
                        <i class="quick_icon quick_icon_blog"></i>
                    </a>
                </li>
                <li class="quick_menu_list quick_menu_li_insta">
                    <a href="https://www.instagram.com/creative_ptl/" target="_blank">
                        <span class="blind">퀵메뉴 인스타그램</span>
                        <i class="quick_icon quick_icon_insta"></i>
                    </a>
                </li>
            </ul>
        </div>
        
        <!-- top_btn -->
        <div class="top_btn_wrap">
            <div onclick="$('html, body').stop().animate({scrollTop : 0}, 500, 'swing');">
                <img src="<?php echo G5_URL?>/img/top_btn.svg" alt="탑버튼">
            </div>
        </div>
        <!-- //top_btn -->
    </div>
    
    <div class="radial_quick_wrap m_cont_960" id="radial_quick_m">
        <div class="radial_quick_dimmed" id="radial_quick_dimmed"></div>
        <div class="radial_quick_menu_wrap" id="radial_quick_menu_wrap_m">
            <ul class="radial_quick_menu">
                <li class="radial_quick_menu_list radial_quick_menu_li_call">
                    <a href="tel:070-4633-2028" target="_blank">
                        <i class="radial_quick_icon radial_quick_icon_call"></i>
                        <span class="txt01 fz_15 ls_p1 lh_1 pretendard medium">문의전화</span>
                    </a>
                </li>
                <li class="radial_quick_menu_list radial_quick_menu_li_insta">
                    <a href="https://www.instagram.com/creative_ptl/" target="_blank">
                        <i class="radial_quick_icon radial_quick_icon_insta"></i>
                        <span class="txt01 fz_15 ls_p1 lh_1 pretendard medium">인스타그램</span>
                    </a>
                </li>
                <li class="radial_quick_menu_list radial_quick_menu_li_contact">
                    <a href="<?php echo G5_URL?>/contact.php" target="_blank">
                        <i class="radial_quick_icon radial_quick_icon_contact"></i>
                        <span class="txt01 fz_15 ls_p1 lh_1 pretendard medium">빠른 문의</span>
                        
                        <div class="radial_quick_contact_btn">
                            <div class="bounce1"></div>
                            <div class="bounce2"></div>
                            <div class="bounce3"></div>
                        </div>
                    </a>
                </li>
                <li class="radial_quick_menu_list radial_quick_menu_li_blog">
                    <a href="https://blog.naver.com/fineapple_ptl" target="_blank">
                        <i class="radial_quick_icon radial_quick_icon_blog"></i>
                        <span class="txt01 fz_15 ls_p1 lh_1 pretendard medium">블로그</span>
                    </a>
                </li>
                <li class="radial_quick_menu_list radial_quick_menu_li_youtube">
                    <a href="https://www.youtube.com/@user-qm4lt1vh2q" target="_blank">
                        <i class="radial_quick_icon radial_quick_icon_youtube"></i>
                        <span class="txt01 fz_15 ls_p1 lh_1 pretendard medium">유튜브</span>
                    </a>
                </li>
            </ul>
        </div>
        <button class="radial_quick_menu_btn" id="radial_btn_m">
            <span class="blind">퀵메뉴 버튼</span>
        </button>
    </div>
    <!-- //quick-menu -->
    
</div>
<!-- //smooth-scroll -->






<!-- Custom JS -->
<script src="<?php echo G5_URL?>/plugins/gsap/gsap.min.js"></script>
<script src="<?php echo G5_URL?>/plugins/gsap/ScrollTrigger.min.js"></script>
<script src="<?php echo G5_URL?>/plugins/gsap/ScrollToPlugin.min.js"></script>
<script src="<?php echo G5_URL?>/plugins/gsap/Observer.min.js"></script>
<script src="<?php echo G5_URL?>/plugins/swiper/swiper-bundle.min.js"></script>
<!-- 숫자카운트 - s -->
<script src="<?php echo G5_URL?>/plugins/noframework.waypoints.min.js"></script>
<script src="<?php echo G5_URL?>/plugins/countUp.min.js"></script>
<!-- 숫자카운트 - e -->
<script src="<?php echo G5_URL?>/js/common.ui.js"></script>
<?php if(defined('_INDEX_')) { // index에서만 실행 ?>
<script src="<?php echo G5_URL?>/js/main.js"></script>
<?php } ?>
<script src="<?php echo G5_URL?>/js/scroll.js"></script>

<?php if(defined('_INDEX_')) {   /***************  main  ***************/ ?>
<script src="<?php echo G5_URL?>/js/main_scroll.js"></script>
<?php } else if(strstr($_SERVER['PHP_SELF'], 'contact.php')) {   /***************  contact  ***************/ ?>
<script src="<?php echo G5_URL?>/js/sub_scroll.js"></script>
<?php } else { ?>

<?php } ?>

<?php
if(G5_DEVICE_BUTTON_DISPLAY && !G5_IS_MOBILE) { ?>
<?php
}

if ($config['cf_analytics']) {
    echo $config['cf_analytics'];
}
?>

<!-- } 하단 끝 -->

<script>
$(function() {
    // 폰트 리사이즈 쿠키있으면 실행
    font_resize("container", get_cookie("ck_font_resize_rmv_class"), get_cookie("ck_font_resize_add_class"));
});
</script>

<!-- 240129 추가 -->
<!-- 검색 광고 - s -->
<script>
    //gtag('event', 'conversion', {'send_to': 'AW-11474335068/WH22CKif4YwZENzqsd8q'});
    
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    
    gtag('config', 'AW-11474335068');
</script>
<!-- 검색 광고 - e -->
<!-- //240129 추가 -->

<?php
include_once(G5_PATH."/tail.sub.php");