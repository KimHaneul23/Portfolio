<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

//if (G5_IS_MOBILE) {
//    include_once(G5_THEME_MOBILE_PATH.'/tail.php');
//    return;
//}
?>


        <!-- 하단 시작 { -->
        <? if(defined('_INDEX_')) { ?>
            
        <? } else { ?>
            <footer class="footer" id="footer">
                <div class="container">
                    <div class="foot-info-area flex_row fw sb center">
                        <a href="<?php echo G5_URL?>">
                            <img class="pc_cont_480" src="<?php echo G5_THEME_URL?>/img/f_logo_g.png" alt="안다스디자인">
                            <img class="m_cont_480" src="<?php echo G5_THEME_URL?>/img/m_f_logo_g.png" alt="안다스디자인">
                        </a>
                        <div class="footer_info_links_wrap pc_cont_640">
                            <div class="footer_info_links flex_row fw jc_fs center">
                                <p class="footer-info-link-item fz_14 lh_16 ls_2 notosans light">상호: 에이디에스 디자인(ADS design)</p>
                                <p class="footer-info-link-item fz_14 lh_16 ls_2 notosans light">대표자: 이정원</p>
                                <p class="footer-info-link-item fz_14 lh_16 ls_2 notosans light">사업자등록번호: 614-02-93239</p>
                                <p class="footer-info-link-item fz_14 lh_16 ls_2 notosans light">전화번호: 032-710-1180</p>
                                <p class="footer-info-link-item fz_14 lh_16 ls_2 notosans light">E-mail: ads_design@daum.net</p>
                                <p class="footer-info-link-item fz_14 lh_16 ls_2 notosans light">주소: 인천광역시 서구 청라에메랄드로102번길 8, 3층 302호(청라동, 우성메디피아)</p>
                            </div>

                            <div class="footer_bottom">
                                <div class="footer_bottom_wrap flex_row fw jc_fs al_fe">
                                    <div class="footer_bottom_box01">
                                        <p class="fz_14 lh_16 ls_2 ta_l montserrat light">Copyright Incheon ANDAS design. All rights reserved</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="footer_info_links_wrap m_cont_640">
                            <div class="footer_info_links footer_info_links01 flex_row fw jc_fs center">
                                <p class="footer-info-link-item fz_14 lh_16 ls_2 notosans light">상호: 에이디에스 디자인(ADS design)</p>
                            </div>
                            <div class="footer_info_links footer_info_links02 flex_row fw jc_fs center">
                                <p class="footer-info-link-item fz_14 lh_16 ls_2 notosans light">대표자: 이정원</p>
                                <p class="footer-info-link-item fz_14 lh_16 ls_2 notosans light">사업자등록번호: 614-02-93239</p>
                            </div>
                            <div class="footer_info_links footer_info_links03 flex_row fw jc_fs center">
                                <p class="footer-info-link-item fz_14 lh_16 ls_2 notosans light">전화번호: 032-710-1180</p>
                                <p class="footer-info-link-item fz_14 lh_16 ls_2 notosans light">E-mail: ads_design@daum.net</p>
                            </div>
                            <div class="footer_info_links footer_info_links04 flex_row fw jc_fs center">
                                <p class="footer-info-link-item fz_14 lh_16 ls_2 notosans light">주소: 인천광역시 서구 청라에메랄드로102번길 8, 3층 302호(청라동, 우성메디피아)</p>
                            </div>

                            <div class="footer_bottom">
                                <div class="footer_bottom_wrap flex_row fw jc_fs al_fe">
                                    <div class="footer_bottom_box01">
                                        <p class="fz_14 lh_16 ls_2 ta_l montserrat light">Copyright Incheon ANDAS design. All rights reserved</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        <? } ?>
        
    </div>
    <!-- //smooth-scroll -->
</div>
<!-- //wrap -->

<!-- 탑버튼 표시 --
<? if(defined('_INDEX_')) { ?>
<div class="move_top_btn" id="move_top_btn">
    <p class="move_top_btn_text fz_17 ta_c montserrat normal">
        TOP
    </p>
</div>
<? } else { ?>
<div class="move_top_btn_sub" id="move_top_btn" onclick="$('body, html').stop().animate({ scrollTop : 0},1500/2);">
    <p class="move_top_btn_text_sub fz_17 ta_c montserrat normal">
        TOP
    </p>
</div>
<? } ?>
-- //탑버튼 표시 -->

<!-- Start Script -->
<script src="<?php echo G5_THEME_URL?>/plugins/detectBrowser.js"></script>

<!-- Custom JS -->
<script src="<?php echo G5_THEME_URL?>/plugins/gsap/gsap.min.js"></script>
<script src="<?php echo G5_THEME_URL?>/plugins/gsap/ScrollTrigger.min.js"></script>
<script src="<?php echo G5_THEME_URL?>/plugins/gsap/ScrollToPlugin.min.js"></script>
<script src="<?php echo G5_THEME_URL?>/plugins/swiper/swiper-bundle.min.js"></script>
<script src="<?php echo G5_THEME_URL?>/js/common.js"></script>
<script src="<?php echo G5_THEME_URL?>/js/scroll.js"></script>
<!--<script src="<?php echo G5_THEME_URL?>/dist/bundle.js"></script>-->


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
include_once(G5_THEME_PATH."/tail.sub.php");