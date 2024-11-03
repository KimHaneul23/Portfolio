<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

run_event('pre_head');

//if (G5_IS_MOBILE) {
//    include_once(G5_THEME_MOBILE_PATH.'/head.php');
//    return;
//}


include_once(G5_PATH.'/head.sub.php');
include_once(G5_LIB_PATH.'/latest.lib.php');
include_once(G5_LIB_PATH.'/outlogin.lib.php');
include_once(G5_LIB_PATH.'/poll.lib.php');
include_once(G5_LIB_PATH.'/visit.lib.php');
include_once(G5_LIB_PATH.'/connect.lib.php');
include_once(G5_LIB_PATH.'/popular.lib.php');
?>

<?php
    if(defined('_INDEX_')) { // index에서만 실행
        //include G5_BBS_PATH.'/newwin.inc.php'; // 팝업레이어
    }
?>

<!-- header -->
<header class="main-header" id="header">
    <div class="m_header_banner_wrap" id="m_header_banner_wrap">
        <div class="swiper-container m_header_banner" id="m_header_banner">
            <div class="swiper-wrapper">
                <div class="swiper-slide m_header_banner m_header_banner01">
                    <p class="txt01 c-w fz_16 ls_p2 lh_16 pretendard normal">
                        아이어워즈 대상수상 ㅣ 피부과분야 미모던피부과 의료서비스 파주수피부과 2관왕 
                    </p>
                </div>
                <div class="swiper-slide m_header_banner m_header_banner02">
                    <p class="txt01 c-w fz_16 ls_p2 lh_16 pretendard normal">
                        아이어워즈 대상수상 ㅣ 피부과분야 미모던피부과 의료서비스 파주수피부과 2관왕 
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="ht-inner">
        <div class="ht-inner__left">
            <h1 class="logo pc_cont_960">
                <a href="<?php echo G5_URL?>">
                    <img class="logo01" src="<?php echo G5_URL?>/img/logo01.png" alt="파인애플피티엘">
                    <img class="logo02" src="<?php echo G5_URL?>/img/logo02.png" alt="파인애플피티엘">
                </a>
            </h1>
            
            <h1 class="logo m_cont_960">
                <a href="<?php echo G5_URL?>">
                    <img class="logo01" src="<?php echo G5_URL?>/img/logo01_m.png" alt="파인애플피티엘">
                    <img class="logo02" src="<?php echo G5_URL?>/img/logo02_m.png" alt="파인애플피티엘">
                </a>
            </h1>
            <!--<div class="m_call_btn m_cont_960">
                <a href="tel:070-4633-2028"></a>
            </div>-->
        </div>
        <div class="ht-inner__center">
            <div class="header_menu header_menu_top pc_cont_960">
                <ul class="flex_row jc_center center">
                    <!--<li class="header_menu_li header_menu_li01_1">
                        <a href="<?php echo G5_URL?>" class="fz_17 ls_p5 lh_16 minionpro normal">INFO</a>
                    </li>
                    <li class="header_menu_li header_menu_li01_2">
                        <a href="<?php echo G5_URL?>" class="fz_17 ls_p5 lh_16 minionpro normal">SERVICE</a>
                    </li>-->
                    <li class="header_menu_li header_menu_li01_3">
                        <a href="<?php echo G5_URL?>/projects" class="fz_17 ls_p5 lh_16 minionpro normal">PROJECT</a>
                    </li>
                    <li class="header_menu_li header_menu_li01_4">
                        <a href="<?php echo G5_URL?>/contact.php" class="fz_17 ls_p5 lh_16 minionpro normal">CONTACT</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="ht-inner__right">
            <div class="h_contact_btn pc_cont_960">
                <a href="<?php echo G5_URL?>/contact.php">
                    <p class="txt01 c-w fz_14 lh_16 pretendard normal">
                        프로젝트 문의
                    </p>
                </a>
            </div>
            
            <div class="hamberger">
                <span class="bar"></span>
            </div>
        </div>
    </div>
</header>

<!-- gnb-menu -->
<div class="gnb-outer" id="gnb">
    <div class="gnb-inner">
        <div class="gnb-inner__all">
            <!-- PC 메뉴 -->
            <ul class="gnb-menu-list pc_cont_960">
                <!--<li class="gnb-menu-depth1">
                    <a href="<?php echo G5_URL?>">
                        <p class="txt01 fz_28 ls_p5 lh_16 minionpro normal">INFO</p>
                    </a>
                </li>
                <li class="gnb-menu-depth1">
                    <a href="<?php echo G5_URL?>">
                        <p class="txt01 fz_28 ls_p5 lh_16 minionpro normal">SERVICE</p>
                    </a>
                </li>-->
                <li class="gnb-menu-depth1">
                    <a href="<?php echo G5_URL?>/projects">
                        <p class="txt01 fz_28 ls_p5 lh_16 minionpro normal">PROJECT</p>
                    </a>
                </li>
                <li class="gnb-menu-depth1">
                    <a href="<?php echo G5_URL?>/contact.php">
                        <p class="txt01 fz_28 ls_p5 lh_16 minionpro normal">CONTACT</p>
                    </a>
                </li>
            </ul>
            <!-- 모바일 메뉴 -->
            <ul class="gnb-menu-list-m m_cont_960">
                <!--<li class="m-gnb-menu-depth1">
                    <a href="<?php echo G5_URL?>">
                        <p class="txt01 fz_28 ls_p5 lh_16 minionpro normal">INFO</p>
                    </a>
                </li>
                <li class="m-gnb-menu-depth1">
                    <a href="<?php echo G5_URL?>">
                        <p class="txt01 fz_28 ls_p5 lh_16 minionpro normal">SERVICE</p>
                    </a>
                </li>-->
                <li class="m-gnb-menu-depth1">
                    <a href="<?php echo G5_URL?>/projects">
                        <p class="txt01 fz_28 ls_p5 lh_16 minionpro normal">PROJECT</p>
                    </a>
                </li>
                <li class="m-gnb-menu-depth1">
                    <a href="<?php echo G5_URL?>/contact.php">
                        <p class="txt01 fz_28 ls_p5 lh_16 minionpro normal">CONTACT</p>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>
<!-- //gnb -->
<!-- //header -->

<!-- 텍스트 팝업 슬라이드 - s -->
<div class="text_popup_wrap open" id="text_popup_wrap">
    <div class="text_popup_btn">
        <div class="text_popup_btn_open">
            <i class="text_popup_slide_icon"></i>
        </div>
        <div class="text_popup_btn_close">
            <i class="close_icon2"></i>
        </div>
    </div>
    <div class="text_popup_slide_wrap">
        <div class="text_popup_slide">
            <div class="text_popup_slide_box text_popup_slide_box01">
                <a href="<?php echo G5_URL?>/projects" target="_blank">
                    <i class="text_popup_slide_icon"></i><p class="c-w fz_14 ls_p2 normal">아이어워즈 2개 의료부문 대상 수상</p>
                </a>
            </div>
            <div class="text_popup_slide_box text_popup_slide_box02">
                <a href="<?php echo G5_URL?>/projects" target="_blank">
                    <i class="text_popup_slide_icon"></i><p class="c-w fz_14 ls_p2 normal">아이어워즈 2개 의료부문 대상 수상</p>
                </a>
            </div>
        </div>
    </div>
</div>
<!-- //텍스트 팝업 슬라이드 - e -->

<!-- main -->
<div class="smooth-scroll" id="content">