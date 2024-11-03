<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

//if (G5_IS_MOBILE) {
//    include_once(G5_THEME_MOBILE_PATH.'/tail.php');
//    return;
//}
?>


<!-- 하단 시작 { -->
<? if(defined('_INDEX_')) { ?>

<footer class="footer" id="footer">
    <div class="ft_inner c-w">
        <div class="footer_info_links_wrap">
            <div class="footer_info_links fz_14 light">
                <a href="<?php echo G5_THEME_URL?>/member/privacy.php" class="footer-info-link-item">개인정보처리방침</a>
                <a href="<?php echo G5_THEME_URL?>/member/provision.php" class="footer-info-link-item">이용약관</a>
                <a href="<?php echo G5_URL?>/bbs/login.php" class="footer-info-link-item">로그인</a>
                <a href="<?php echo G5_URL?>/bbs/register.php" class="footer-info-link-item">회원가입</a>
            </div>
        </div>
        <ul class="ft_info fz_14 light">
            <li>안산 연세세브란스치과의원</li>
            <li>대표자 : 이상희</li>
            <li>사업자등록번호 : 255-94-01568</li>
            <li>대표전화: 031-502-2080</li>
            <li>경기도 안산시 상록구 석호로 290, 2,3층(본오동)</li>
            <li><a href="<?php echo G5_THEME_URL?>/member/nonpay.php" class="footer-info-link-item">비급여진료비</a></li>
        </ul>
        <div class="footer_bottom">
            <p class="ta_l">© YONSEI SEVRANCE DENTAL CLINIC. ALL RIGHTS RESERVED.</p>
        </div>
    </div>
</footer>

<? } else { ?>

<article class="sub_all_cont pt_100 pc_cont" id="sub_all_cont">
    <div class="sub_all_cont_wrap flex_row fw jc_fs center">
        <div class="sub_all_cont_tab flex_row fw jc_fs center">
            <div class="sub_all_cont_tab_logo">
                <img src="<?php echo G5_THEME_URL?>/sub/img/sub_all_cont_tab_logo.jpg" alt="">
            </div>
            <ul class="sub_all_cont_tab_ul flex_row fw jc_center center ta_l">
                <li class="tablinks tablinks01 active c-gray" id="tabbtn01">
                    <a href="#tabcontent01"><p class="fz_16 lh_1">대학병원 수준의 고품격 치과</p></a>
                </li>
                <li class="tablinks tablinks02 c-gray" id="tabbtn02">
                    <a href="#tabcontent02"><p class="fz_16 lh_1">시작과 끝이 같은 치과</p></a>
                </li>
                <li class="tablinks tablinks03 c-gray" id="tabbtn03">
                    <a href="#tabcontent03"><p class="fz_16 lh_1">과잉진료 없이 정직한 치과</p></a>
                </li>
                <li class="tablinks tablinks04 c-gray" id="tabbtn04">
                    <a href="#tabcontent04"><p class="fz_16 lh_1">안심하고 방문할 수 있는 치과</p></a>
                </li>
                <li class="tablinks tablinks05 c-gray" id="tabbtn05">
                    <a href="#tabcontent05"><p class="fz_16 lh_1">10년 후 사후관리도 가능한 치과</p></a>
                </li>
            </ul>
        </div>
        <!-- sub 공통 하단 -->
        <div class="sub_all_cont_tabcontent_wrap">
            <div class="tabcontent tabcontent01" id="tabcontent01">
                <div class="sub_all_cont_tabcontent">
                    <div class="sub_all_cont_bottom_box flex_row jc_fs center">
                        <div class="sub_all_cont_bottom_text ta_l">
                            <p class="sub_all_cont_bottom_text01 fz_28 lh_14 nanummyeongjo m_20 gs_reveal">
                                의료진의 남다른 전문성, <br>
                                세브란스 치과대학병원급 의료 서비스
                            </p>
                            <p class="sub_all_cont_bottom_text02 fz_16 lh_14 gs_reveal pc_cont_640" data-gs-delay="200">
                                연세대 수석 졸업, 보건복지부 인증 전문의, 의사를 가르치는 의사 … <br>
                                의료진 2인의 남다른 치료 기술력과, 세브란스 치과대학병원급 의료 서비스가 <br>
                                합쳐져 만족도 높은 치료 결과를 안겨드립니다.
                            </p>
                            <p class="sub_all_cont_bottom_text02 fz_16 lh_14 gs_reveal m_cont_640" data-gs-delay="200">
                                연세대 수석 졸업, 보건복지부 인증 전문의, 의사를 가르치는 의사 … <br>
                                의료진 2인의 남다른 치료 기술력과, 세브란스 치과대학병원급 의료 서비스가 
                                합쳐져 만족도 높은 치료 결과를 안겨드립니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tabcontent tabcontent02" id="tabcontent02">
                <div class="sub_all_cont_tabcontent">
                    <div class="sub_all_cont_bottom_box flex_row jc_fs center">
                        <div class="sub_all_cont_bottom_text ta_l">
                            <p class="sub_all_cont_bottom_text01 fz_28 lh_14 nanummyeongjo m_20 gs_reveal">
                                치료 도중 의료진이 바뀌지 않습니다 <br>
                                처음부터 끝까지 함께합니다
                            </p>
                            <p class="sub_all_cont_bottom_text02 fz_16 lh_14 gs_reveal pc_cont_640" data-gs-delay="200">
                                장기간 진행되기에 담당 의료진의 실력과 책임이 중요한 교정치료 <br>
                                보건복지부 인증 교정과 전문의 박진이 대표원장이 교정 시작과 끝을 <br>
                                함께하겠습니다.
                            </p>
                            <p class="sub_all_cont_bottom_text02 fz_16 lh_14 gs_reveal m_cont_640" data-gs-delay="200">
                                장기간 진행되기에 담당 의료진의 실력과 책임이 중요한 교정치료 
                                보건복지부 인증 교정과 전문의 박진이 대표원장이 교정 시작과 끝을 
                                함께하겠습니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tabcontent tabcontent03" id="tabcontent03">
                <div class="sub_all_cont_tabcontent">
                    <div class="sub_all_cont_bottom_box flex_row jc_fs center">
                        <div class="sub_all_cont_bottom_text ta_l c-w">
                            <p class="sub_all_cont_bottom_text01 fz_28 lh_14 nanummyeongjo m_20 gs_reveal">
                                자연치아를 최대한 살리는 치료 <br>
                                일반의와 보존과 전문의는 다릅니다
                            </p>
                            <p class="sub_all_cont_bottom_text02 fz_16 lh_14 gs_reveal pc_cont_640" data-gs-delay="200">
                                안산 연세세브란스치과는 환자분의 소중한 자연치아를 <br>
                                최대한 살릴 수 있도록 보존과 전문의 대표원장이 직접 진료합니다.
                            </p>
                            <p class="sub_all_cont_bottom_text02 fz_16 lh_14 gs_reveal m_cont_640" data-gs-delay="200">
                                안산 연세세브란스치과는 환자분의 소중한 자연치아를 
                                최대한 살릴 수 있도록 보존과 전문의 대표원장이 직접 진료합니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tabcontent tabcontent04" id="tabcontent04">
                <div class="sub_all_cont_tabcontent">
                    <div class="sub_all_cont_bottom_box flex_row jc_fs center">
                        <div class="sub_all_cont_bottom_text ta_l">
                            <p class="sub_all_cont_bottom_text01 fz_28 lh_14 nanummyeongjo m_20 gs_reveal">
                                오직 환자의 안전을 위해 <br>
                                1인 1기구 원칙, 철저한 멸균 소독 시스템
                            </p>
                            <p class="sub_all_cont_bottom_text02 fz_16 lh_14 gs_reveal pc_cont_640" data-gs-delay="200">
                                안산 연세세브란스치과는 1인 1기구를 원칙으로 항상 <br>
                                청결하고 위생적인 진료환경에 힘쓰고 있으며 대학병원급 <br>
                                체계적인 진료 서비스를 제공합니다.
                            </p>
                            <p class="sub_all_cont_bottom_text02 fz_16 lh_14 gs_reveal m_cont_640" data-gs-delay="200">
                                안산 연세세브란스치과는 1인 1기구를 원칙으로 항상 
                                청결하고 위생적인 진료환경에 힘쓰고 있으며 대학병원급 
                                체계적인 진료 서비스를 제공합니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tabcontent tabcontent05" id="tabcontent05">
                <div class="sub_all_cont_tabcontent">
                    <div class="sub_all_cont_bottom_box flex_row jc_fs center">
                        <div class="sub_all_cont_bottom_text ta_l">
                            <p class="sub_all_cont_bottom_text01 fz_28 lh_14 nanummyeongjo m_20 gs_reveal">
                                10년 후에도 철저한 사후관리 <br>
                                믿을 수 있는 치과가 되겠습니다
                            </p>
                            <p class="sub_all_cont_bottom_text02 fz_16 lh_14 gs_reveal pc_cont_640" data-gs-delay="200">
                                환자분의 소중한 치아를 건강하게 오래 유지할 수 있도록 <br>
                                안산 연세세브란스치과에서는 체계적인 사후관리 프로그램을 시행하여 <br>
                                10년 후에 방문하셔도 책임 있게 진료해드립니다.
                            </p>
                            <p class="sub_all_cont_bottom_text02 fz_16 lh_14 gs_reveal m_cont_640" data-gs-delay="200">
                                환자분의 소중한 치아를 건강하게 오래 유지할 수 있도록 
                                안산 연세세브란스치과에서는 체계적인 사후관리 프로그램을 시행하여 
                                10년 후에 방문하셔도 책임 있게 진료해드립니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</article>

<article class="sub_all_cont pt_100 m_cont" id="sub_all_cont">
    <div class="swiper-container m_sub_all_cont_swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide m_sub_all_cont_slide">
                <div class="sub_all_cont_tabcontent sub_all_cont_tabcontent01">
                    <div class="sub_all_cont_bottom_box flex_row jc_fs center">
                        <div class="sub_all_cont_bottom_text ta_l">
                            <p class="sub_all_cont_bottom_text01 fz_28 lh_14 nanummyeongjo m_20 gs_reveal">
                                의료진의 남다른 전문성, <br>
                                세브란스 치과대학병원급 의료 서비스
                            </p>
                            <p class="sub_all_cont_bottom_text02 fz_16 lh_14 gs_reveal pc_cont_640" data-gs-delay="200">
                                연세대 수석 졸업, 보건복지부 인증 전문의, 의사를 가르치는 의사 … <br>
                                의료진 2인의 남다른 치료 기술력과, 세브란스 치과대학병원급 의료 서비스가 <br>
                                합쳐져 만족도 높은 치료 결과를 안겨드립니다.
                            </p>
                            <p class="sub_all_cont_bottom_text02 fz_16 lh_14 gs_reveal m_cont_640" data-gs-delay="200">
                                연세대 수석 졸업, 보건복지부 인증 전문의, 의사를 가르치는 의사 … <br>
                                의료진 2인의 남다른 치료 기술력과, 세브란스 치과대학병원급 의료 서비스가 
                                합쳐져 만족도 높은 치료 결과를 안겨드립니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-slide m_sub_all_cont_slide">
                <div class="sub_all_cont_tabcontent sub_all_cont_tabcontent02">
                    <div class="sub_all_cont_bottom_box flex_row jc_fs center">
                        <div class="sub_all_cont_bottom_text ta_l">
                            <p class="sub_all_cont_bottom_text01 fz_28 lh_14 nanummyeongjo m_20 gs_reveal">
                                치료 도중 의료진이 바뀌지 않습니다 <br>
                                처음부터 끝까지 함께합니다
                            </p>
                            <p class="sub_all_cont_bottom_text02 fz_16 lh_14 gs_reveal pc_cont_640" data-gs-delay="200">
                                장기간 진행되기에 담당 의료진의 실력과 책임이 중요한 교정치료 <br>
                                보건복지부 인증 교정과 전문의 박진이 대표원장이 교정 시작과 끝을 <br>
                                함께하겠습니다.
                            </p>
                            <p class="sub_all_cont_bottom_text02 fz_16 lh_14 gs_reveal m_cont_640" data-gs-delay="200">
                                장기간 진행되기에 담당 의료진의 실력과 책임이 중요한 교정치료 
                                보건복지부 인증 교정과 전문의 박진이 대표원장이 교정 시작과 끝을 
                                함께하겠습니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-slide m_sub_all_cont_slide">
                <div class="sub_all_cont_tabcontent sub_all_cont_tabcontent03">
                    <div class="sub_all_cont_bottom_box flex_row jc_fs center">
                        <div class="sub_all_cont_bottom_text ta_l c-w">
                            <p class="sub_all_cont_bottom_text01 fz_28 lh_14 nanummyeongjo m_20 gs_reveal">
                                자연치아를 최대한 살리는 치료 <br>
                                일반의와 보존과 전문의는 다릅니다
                            </p>
                            <p class="sub_all_cont_bottom_text02 fz_16 lh_14 gs_reveal pc_cont_640" data-gs-delay="200">
                                안산 연세세브란스치과는 환자분의 소중한 자연치아를 <br>
                                최대한 살릴 수 있도록 보존과 전문의 대표원장이 직접 진료합니다.
                            </p>
                            <p class="sub_all_cont_bottom_text02 fz_16 lh_14 gs_reveal m_cont_640" data-gs-delay="200">
                                안산 연세세브란스치과는 환자분의 소중한 자연치아를 
                                최대한 살릴 수 있도록 보존과 전문의 대표원장이 직접 진료합니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-slide m_sub_all_cont_slide">
                <div class="sub_all_cont_tabcontent sub_all_cont_tabcontent04">
                    <div class="sub_all_cont_bottom_box flex_row jc_fs center">
                        <div class="sub_all_cont_bottom_text ta_l">
                            <p class="sub_all_cont_bottom_text01 fz_28 lh_14 nanummyeongjo m_20 gs_reveal">
                                오직 환자의 안전을 위해 <br>
                                1인 1기구 원칙, 철저한 멸균 소독 시스템
                            </p>
                            <p class="sub_all_cont_bottom_text02 fz_16 lh_14 gs_reveal pc_cont_640" data-gs-delay="200">
                                안산 연세세브란스치과는 1인 1기구를 원칙으로 항상 <br>
                                청결하고 위생적인 진료환경에 힘쓰고 있으며 대학병원급 <br>
                                체계적인 진료 서비스를 제공합니다.
                            </p>
                            <p class="sub_all_cont_bottom_text02 fz_16 lh_14 gs_reveal m_cont_640" data-gs-delay="200">
                                안산 연세세브란스치과는 1인 1기구를 원칙으로 항상 
                                청결하고 위생적인 진료환경에 힘쓰고 있으며 대학병원급 
                                체계적인 진료 서비스를 제공합니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-slide m_sub_all_cont_slide">
                <div class="sub_all_cont_tabcontent sub_all_cont_tabcontent05">
                    <div class="sub_all_cont_bottom_box flex_row jc_fs center">
                        <div class="sub_all_cont_bottom_text ta_l">
                            <p class="sub_all_cont_bottom_text01 fz_28 lh_14 nanummyeongjo m_20 gs_reveal">
                                10년 후에도 철저한 사후관리 <br>
                                믿을 수 있는 치과가 되겠습니다
                            </p>
                            <p class="sub_all_cont_bottom_text02 fz_16 lh_14 gs_reveal pc_cont_640" data-gs-delay="200">
                                환자분의 소중한 치아를 건강하게 오래 유지할 수 있도록 <br>
                                안산 연세세브란스치과에서는 체계적인 사후관리 프로그램을 시행하여 <br>
                                10년 후에 방문하셔도 책임 있게 진료해드립니다.
                            </p>
                            <p class="sub_all_cont_bottom_text02 fz_16 lh_14 gs_reveal m_cont_640" data-gs-delay="200">
                                환자분의 소중한 치아를 건강하게 오래 유지할 수 있도록 
                                안산 연세세브란스치과에서는 체계적인 사후관리 프로그램을 시행하여 
                                10년 후에 방문하셔도 책임 있게 진료해드립니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</article>
<!-- //sub 공통 하단 -->

<footer class="footer" id="footer">
    <div class="ft_inner c-w">
        <div class="footer_info_links_wrap">
            <div class="footer_info_links fz_14 light">
                <a href="<?php echo G5_THEME_URL?>/member/privacy.php" class="footer-info-link-item">개인정보처리방침</a>
                <a href="<?php echo G5_THEME_URL?>/member/provision.php" class="footer-info-link-item">이용약관</a>
                <a href="<?php echo G5_URL?>/bbs/login.php" class="footer-info-link-item">로그인</a>
                <a href="<?php echo G5_URL?>/bbs/register.php" class="footer-info-link-item">회원가입</a>
            </div>
        </div>
        <ul class="ft_info fz_14 light">
            <li>안산 연세세브란스치과의원</li>
            <li>대표자 : 이상희</li>
            <li>사업자등록번호 : 255-94-01568</li>
            <li>대표전화: 031-502-2080</li>
            <li>경기도 안산시 상록구 석호로 290, 2,3층(본오동)</li>
            <li><a href="<?php echo G5_THEME_URL?>/member/nonpay.php" class="footer-info-link-item">비급여진료비</a></li>
        </ul>
        <div class="footer_bottom">
            <p class="ta_l">© YONSEI SEVRANCE DENTAL CLINIC. ALL RIGHTS RESERVED.</p>
        </div>
    </div>
</footer>

<? } ?>

<!-- Custom JS -->
<script src="<?php echo G5_THEME_URL?>/plugins/gsap/gsap.min.js"></script>
<script src="<?php echo G5_THEME_URL?>/plugins/gsap/ScrollTrigger.min.js"></script>
<script src="<?php echo G5_THEME_URL?>/plugins/gsap/ScrollToPlugin.min.js"></script>
<script src="<?php echo G5_THEME_URL?>/plugins/swiper/swiper-bundle.min.js"></script>
<script src="<?php echo G5_THEME_URL?>/js/script.js"></script>
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

<!-- 네이버 애널리틱스 -->
<script type="text/javascript" src="//wcs.naver.net/wcslog.js"></script>
<script type="text/javascript">
if(!wcs_add) var wcs_add = {};
wcs_add["wa"] = "1386b253e9f58d0";
if(window.wcs) {
  wcs_do();
}
</script>

<?php
include_once(G5_PATH."/tail.sub.php");