<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

//if (G5_IS_MOBILE) {
//    include_once(G5_THEME_MOBILE_PATH.'/tail.php');
//    return;
//}
?>


<!-- 하단 시작 { -->
<footer class="footer" id="footer">
    <div class="container">
        <div class="foot-info-area flex_row fw sa center">
            <a href="<?php echo G5_URL?>">
                <img src="<?php echo G5_THEME_URL?>/unknown/img/logo_w.png" alt="안산 연세세브란스치과">
            </a>
            <p class="nanumbarungothic normal fz_15 ta_c c-gray">
                주소: 경기도 안산시 상록구 석호로 290 2층,3층(본오동) / 전화번호 : 031-502-2080 / 대표자 : 이 상 희
            </p>
        </div>
    </div>
</footer>

<!-- Custom JS -->
<script src="<?php echo G5_THEME_URL?>/plugins/gsap/gsap.min.js"></script>
<script src="<?php echo G5_THEME_URL?>/plugins/gsap/ScrollTrigger.min.js"></script>
<script src="<?php echo G5_THEME_URL?>/plugins/gsap/ScrollToPlugin.min.js"></script>
<script src="<?php echo G5_THEME_URL?>/plugins/swiper/swiper-bundle.min.js"></script>
<script src="<?php echo G5_THEME_URL?>/unknown/js/common.js"></script>
<script src="<?php echo G5_THEME_URL?>/unknown/js/scroll.js"></script>

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

<?php
include_once(G5_THEME_PATH."/unknown/tail.sub.php");