<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

//if (G5_IS_MOBILE) {
//    include_once(G5_THEME_MOBILE_PATH.'/head.php');
//    return;
//}


include_once(G5_THEME_PATH.'/head.sub.php');
include_once(G5_LIB_PATH.'/latest.lib.php');
include_once(G5_LIB_PATH.'/outlogin.lib.php');
include_once(G5_LIB_PATH.'/poll.lib.php');
include_once(G5_LIB_PATH.'/visit.lib.php');
include_once(G5_LIB_PATH.'/connect.lib.php');
include_once(G5_LIB_PATH.'/popular.lib.php');
?>

<?php
    if(defined('_INDEX_')) { // index에서만 실행
        include G5_BBS_PATH.'/newwin.inc.php'; // 팝업레이어
    }
?>

<!-- header -->
<div id="skip" class="skip-navigation ir_link">
	<a href="#gnb">메뉴 바로가기</a>
	<a href="#content">본문 바로가기</a>
</div>
<!-- header -->
<header class="main-header" id="header">
    <? if(defined('_INDEX_')) { ?>
    <div class="ht-inner">
        <div class="ht-inner__left">
            <div class="header_address_btn_wrap">
                <a href="https://map.naver.com/v5/search/상록구%20석호로%20290/" target="_blank" class="flex_row jc_center center">
                    <img src="<?php echo G5_THEME_URL?>/img/h_loca.png" alt="경기도 안산시 상록구 석호로 290 2층,3층(본오동)">
                    <span class="nanumbarungothic bold fz_16 lh_1">&ensp;경기도 안산시 상록구 석호로 290 2층,3층(본오동)</span>
                </a>
            </div>
        </div>
        <div class="ht-inner__center">
            <div class="logo">
                <a href="<?php echo G5_URL?>">
                    <img src="<?php echo G5_THEME_URL?>/img/logo.png" alt="안산 연세세브란스치과">
                </a>
            </div>
        </div>
        <div class="ht-inner__right">
            <div class="header_call_btn_wrap">
                <a href="tel:031-502-2080" class="flex_row jc_center center m_10">
                    <img src="<?php echo G5_THEME_URL?>/img/h_call.png" alt="상담전화 031-502-2080">
                    <span class="nanumbarungothic bold h5 lh_1 ls_2 pt_5">&nbsp;031.502.2080</span>
                </a>
                <a href="http://pf.kakao.com/_xglUSb" target="_blank" class="kakao_btn">
                    <img src="<?php echo G5_THEME_URL?>/img/kakao_btn.jpg" alt="카카오톡 상담신청">
                </a>
            </div>
        </div>
    </div>
    
    <div class="top_menu_nav">
        <div class="top_menu_inner flex_row jc_center center ta_c fz_17 nanumbarungothic normal">
            <div id="side01" class="top_menu lh_1"><a href="javascript:void(0);" onclick="$('html, body').animate({ scrollTop: $('#sect01').offset().top-120 }, 500);">이벤트 프로모션</a></div>
            <div id="side02" class="top_menu lh_1"><a href="javascript:void(0);" onclick="$('html, body').animate({ scrollTop: $('#sect02').offset().top-120 }, 500);">의료진 소개</a></div>
            <div id="side03" class="top_menu lh_1"><a href="javascript:void(0);" onclick="$('html, body').animate({ scrollTop: $('#sect03').offset().top-40 }, 500);">장비 소개</a></div>
            <div id="side04" class="top_menu lh_1"><a href="javascript:void(0);" onclick="$('html, body').animate({ scrollTop: $('#sect04').offset().top-100 }, 500);">
                <p class="pc_cont_480">오시는 길/ 진료시간</p>
                <p class="m_cont_480">오시는 길</p></a>
            </div>
        </div>
    </div>
    <? } else { ?>
    <div class="ht-inner">
        <div class="ht-inner__left">
            <div class="header_address_btn_wrap">
                <a href="https://map.naver.com/v5/search/상록구%20석호로%20290/" target="_blank" class="flex_row jc_center center">
                    <img src="<?php echo G5_THEME_URL?>/img/h_loca.png" alt="경기도 안산시 상록구 석호로 290 2층,3층(본오동)">
                    <span class="nanumbarungothic bold fz_16 lh_1">&ensp;경기도 안산시 상록구 석호로 290 2층,3층(본오동)</span>
                </a>
            </div>
        </div>
        <div class="ht-inner__center">
            <div class="logo">
                <a href="<?php echo G5_URL?>">
                    <img src="<?php echo G5_THEME_URL?>/img/logo.png" alt="안산 연세세브란스치과">
                </a>
            </div>
        </div>
        <div class="ht-inner__right">
            <div class="header_call_btn_wrap">
                <a href="tel:031-502-2080" class="flex_row jc_center center">
                    <img src="<?php echo G5_THEME_URL?>/img/h_call.png" alt="상담전화 031-502-2080">
                    <span class="nanumbarungothic bold h5 lh_1 ls_2 pt_5">&nbsp;031.502.2080</span>
                </a>
            </div>
        </div>
    </div>
    
    <div class="top_menu_nav">
        <div class="top_menu_inner flex_row jc_center center ta_c fz_17 nanumbarungothic normal">
            <div id="side01" class="top_menu lh_1"><a href="javascript:void(0);" onclick="$('html, body').animate({ scrollTop: $('#sect01').offset().top-120 }, 500);">이벤트 프로모션</a></div>
            <div id="side02" class="top_menu lh_1"><a href="javascript:void(0);" onclick="$('html, body').animate({ scrollTop: $('#sect02').offset().top-120 }, 500);">의료진 소개</a></div>
            <div id="side03" class="top_menu lh_1"><a href="javascript:void(0);" onclick="$('html, body').animate({ scrollTop: $('#sect03').offset().top-40 }, 500);">장비 소개</a></div>
            <div id="side04" class="top_menu lh_1"><a href="javascript:void(0);" onclick="$('html, body').animate({ scrollTop: $('#sect04').offset().top-100 }, 500);">
                <p class="pc_cont_480">오시는 길/ 진료시간</p>
                <p class="m_cont_480">오시는 길</p></a>
            </div>
        </div>
    </div>
    <? } ?>
</header>



