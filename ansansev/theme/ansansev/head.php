<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

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
            <div class="pc_cont logo_cont">
                <div class="logo">
                    <a href="<?php echo G5_URL?>/">
                        <img src="<?php echo G5_THEME_URL?>/img/logo.png" alt="안산 연세세브란스치과">
                    </a>
                </div>
            </div>
            <div class="pc_cont icon_cont">
                <div class="header_icon">
                    <a href="<?php echo G5_URL?>/">
                        <img src="<?php echo G5_THEME_URL?>/img/header_icon01.png" alt="보건복지부 로고">
                    </a>
                </div>
            </div>
            <div class="m_cont">
                <div class="m_call_btn">
                    <a href="tel:031-502-2080">
                        <!--<img src="<?php echo G5_THEME_URL?>/img/h_call_m.png" alt="">-->
                    </a>
                </div>
            </div>
        </div>
        <div class="ht-inner__center">
            <div class="m_cont">
                <div class="logo">
                    <a href="<?php echo G5_URL?>/">
                        <img src="<?php echo G5_THEME_URL?>/img/logo.png" alt="안산 연세세브란스치과">
                    </a>
                </div>
            </div>
        </div>
        <div class="ht-inner__right">
            <div class="sub_header_menu" id="topNavigation">
                <ul class="flex_row se center">
                    <li class="sub_header_menu_li sub_header_menu_li1_1 sub-gnb-menu-depth1">
                        <a href="<?php echo G5_THEME_URL?>/sub/sub1_1.php" class="normal">안산 연세세브란스치과</a>

                        <ul class="sub-gnb-menu-depth2 sub-gnb-menu-depth2_1">
                            <li><a href="<?php echo G5_THEME_URL?>/sub/sub1_1.php"><span>특별함</span></a></li>
                            <li><a href="<?php echo G5_THEME_URL?>/sub/sub1_2.php"><span>의료진소개</span></a></li>
                            <li><a href="<?php echo G5_THEME_URL?>/sub/sub1_3.php"><span>둘러보기 · 오시는길</span></a></li>
                            <!--<li><a href="<?php echo G5_URL?>/notice"><span>공지사항</span></a></li>-->
                            <li><a href="<?php echo G5_URL?>/gallery"><span>치료전후</span></a></li>
                        </ul>
                    </li>
                    <li class="sub_header_menu_li sub_header_menu_li1_2 sub-gnb-menu-depth1">
                        <a href="<?php echo G5_THEME_URL?>/sub/sub2_1.php" class="normal">치아교정</a>

                        <ul class="sub-gnb-menu-depth2 sub-gnb-menu-depth2_2">
                            <li><a href="<?php echo G5_THEME_URL?>/sub/sub2_1.php"><span>세브란스치과 <br>치아교정의 특별함</span></a></li>
                            <li><a href="<?php echo G5_THEME_URL?>/sub/sub2_2.php"><span>성장기 교정</span></a></li>
                            <li><a href="<?php echo G5_THEME_URL?>/sub/sub2_3.php"><span>비발치 교정</span></a></li>
                            <li><a href="<?php echo G5_THEME_URL?>/sub/sub2_4.php"><span>증상별 교정</span></a></li>
                            <li><a href="<?php echo G5_THEME_URL?>/sub/sub2_5.php"><span>인비절라인</span></a></li>
                        </ul>
                    </li>
                    <li class="sub_header_menu_li sub_header_menu_li1_3 sub-gnb-menu-depth1">
                        <a href="<?php echo G5_THEME_URL?>/sub/sub3_1.php" class="normal">임플란트 센터</a>

                        <ul class="sub-gnb-menu-depth2 sub-gnb-menu-depth2_3">
                            <li><a href="<?php echo G5_THEME_URL?>/sub/sub3_1.php"><span>네비게이션 임플란트</span></a></li>
                            <li><a href="<?php echo G5_THEME_URL?>/sub/sub3_2.php"><span>발치즉시 임플란트</span></a></li>
                            <li><a href="<?php echo G5_THEME_URL?>/sub/sub3_3.php"><span>뼈이식 임플란트</span></a></li>
                            <li><a href="<?php echo G5_THEME_URL?>/sub/sub3_4.php"><span>상악동거상술</span></a></li>
                            <li><a href="<?php echo G5_THEME_URL?>/sub/sub3_5.php"><span>발치와 보존술</span></a></li>
                            <li><a href="<?php echo G5_THEME_URL?>/sub/sub3_6.php"><span>임플란트 재수술</span></a></li>
                            <li><a href="<?php echo G5_THEME_URL?>/sub/sub3_7.php"><span>건강보험 임플란트</span></a></li>
                        </ul>
                    </li>
                    <li class="sub_header_menu_li sub_header_menu_li1_4 sub-gnb-menu-depth1">
                        <a href="<?php echo G5_THEME_URL?>/sub/sub4_1.php" class="normal">자연치아살리기</a>

                        <ul class="sub-gnb-menu-depth2 sub-gnb-menu-depth2_4">
                            <li><a href="<?php echo G5_THEME_URL?>/sub/sub4_1.php"><span>신경치료</span></a></li>
                            <li><a href="<?php echo G5_THEME_URL?>/sub/sub4_2.php"><span>재신경치료</span></a></li>
                            <li><a href="<?php echo G5_THEME_URL?>/sub/sub4_3.php"><span>치근단수술</span></a></li>
                            <li><a href="<?php echo G5_THEME_URL?>/sub/sub4_4.php"><span>의도적 치아 재식술</span></a></li>
                        </ul>
                    </li>
                    <li class="sub_header_menu_li sub_header_menu_li1_5 sub-gnb-menu-depth1">
                        <a href="<?php echo G5_THEME_URL?>/sub/sub5_1.php" class="normal">일반진료</a>

                        <ul class="sub-gnb-menu-depth2 sub-gnb-menu-depth2_5">
                            <li><a href="<?php echo G5_THEME_URL?>/sub/sub5_1.php"><span>잇몸치료</span></a></li>
                            <li><a href="<?php echo G5_THEME_URL?>/sub/sub5_2.php"><span>치아미백</span></a></li>
                            <li><a href="<?php echo G5_THEME_URL?>/sub/sub5_3.php"><span>충치치료</span></a></li>
                            <li><a href="<?php echo G5_THEME_URL?>/sub/sub5_4.php"><span>사랑니발치</span></a></li>
                            <li><a href="<?php echo G5_THEME_URL?>/sub/sub5_5.php"><span>턱관절치료</span></a></li>
                            <li><a href="<?php echo G5_THEME_URL?>/sub/sub5_6.php"><span>보철치료</span></a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            
            <div class="pc_cont_640">
                <div class="login_wrap">
                    <div class="login_menu flex_row jc_fe center">
                        <?php if($is_admin) { ?><a href="<?php echo G5_URL?>/adm" class="login_menu_item fz_14 light">관리자</a><?php } ?>
                        <!-- <a class="dropdown-item" href="<?php echo G5_URL?>/bbs/new.php">새글</a> -->
                        <!-- <a class="dropdown-item" href="<?php echo G5_URL?>/bbs/qalist.php">1:1문의</a> -->
                        <?php if($is_member) { ?>
                        <a class="dropdown-item login_menu_item fz_14 light" href="<?php echo G5_BBS_URL ?>/member_confirm.php?url=<?php echo G5_BBS_URL ?>/register_form.php">정보수정</a> 
                        <a href="<?php echo G5_URL?>/bbs/logout.php" class="login_menu_item fz_14 light">로그아웃</a>
                        <?php }else{ ?>
                        <a href="<?php echo G5_URL?>/bbs/login.php" class="login_menu_item fz_14 light">로그인</a>
                        <a href="<?php echo G5_URL?>/bbs/register.php" class="login_menu_item fz_14 light">회원가입</a>
                        <?php } ?>
                    </div>
                </div>
            </div>
            
            <div class="hamburger flex_row se center open-on-hover" id="hamburger">
                <div class="hamburger_wrap flex_row jc_center center">
                    <div class="hamburger_box">
                        <div class="hamburger_line_3d">
                            <div class="line line1"></div>
                            <div class="line line2"></div>
                            <div class="line line3"></div>
                            <div class="line line3"></div>
                        </div>
                        <div class="hamburger_line_3d_close">
                            <div class="line_close line_close1"></div>
                            <div class="line_close line_close2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <? } else { ?>
    <div class="ht-inner sub-ht-inner">
        <div class="ht-inner__left">
            <div class="pc_cont logo_cont">
                <div class="logo">
                    <a href="<?php echo G5_URL?>/">
                        <img src="<?php echo G5_THEME_URL?>/img/logo.png" alt="안산 연세세브란스치과">
                    </a>
                </div>
            </div>
            <div class="pc_cont icon_cont">
                <div class="header_icon">
                    <a href="<?php echo G5_URL?>/">
                        <img src="<?php echo G5_THEME_URL?>/img/header_icon01.png" alt="보건복지부 로고">
                    </a>
                </div>
            </div>
            <div class="m_cont">
                <div class="m_call_btn">
                    <a href="tel:031-502-2080">
                        <!--<img src="<?php echo G5_THEME_URL?>/img/h_call_m.png" alt="">-->
                    </a>
                </div>
            </div>
        </div>
        <div class="ht-inner__center">
            <div class="m_cont">
                <div class="logo">
                    <a href="<?php echo G5_URL?>/">
                        <img src="<?php echo G5_THEME_URL?>/img/logo.png" alt="안산 연세세브란스치과">
                    </a>
                </div>
            </div>
        </div>
        <div class="ht-inner__right">
            <div class="sub_header_menu" id="topNavigation">
                <ul class="flex_row se center">
                    <li class="sub_header_menu_li sub_header_menu_li1_1 sub-gnb-menu-depth1">
                        <a href="<?php echo G5_THEME_URL?>/sub/sub1_1.php" class="normal">안산 연세세브란스치과</a>

                        <ul class="sub-gnb-menu-depth2 sub-gnb-menu-depth2_1">
                            <li><a href="<?php echo G5_THEME_URL?>/sub/sub1_1.php"><span>특별함</span></a></li>
                            <li><a href="<?php echo G5_THEME_URL?>/sub/sub1_2.php"><span>의료진소개</span></a></li>
                            <li><a href="<?php echo G5_THEME_URL?>/sub/sub1_3.php"><span>둘러보기 · 오시는길</span></a></li>
                            <!--<li><a href="<?php echo G5_URL?>/notice"><span>공지사항</span></a></li>-->
                            <li><a href="<?php echo G5_URL?>/gallery"><span>치료전후</span></a></li>
                        </ul>
                    </li>
                    <li class="sub_header_menu_li sub_header_menu_li1_2 sub-gnb-menu-depth1">
                        <a href="<?php echo G5_THEME_URL?>/sub/sub2_1.php" class="normal">치아교정</a>

                        <ul class="sub-gnb-menu-depth2 sub-gnb-menu-depth2_2">
                            <li><a href="<?php echo G5_THEME_URL?>/sub/sub2_1.php"><span>세브란스치과 <br>치아교정의 특별함</span></a></li>
                            <li><a href="<?php echo G5_THEME_URL?>/sub/sub2_2.php"><span>성장기 교정</span></a></li>
                            <li><a href="<?php echo G5_THEME_URL?>/sub/sub2_3.php"><span>비발치 교정</span></a></li>
                            <li><a href="<?php echo G5_THEME_URL?>/sub/sub2_4.php"><span>증상별 교정</span></a></li>
                            <li><a href="<?php echo G5_THEME_URL?>/sub/sub2_5.php"><span>인비절라인</span></a></li>
                        </ul>
                    </li>
                    <li class="sub_header_menu_li sub_header_menu_li1_3 sub-gnb-menu-depth1">
                        <a href="<?php echo G5_THEME_URL?>/sub/sub3_1.php" class="normal">임플란트 센터</a>

                        <ul class="sub-gnb-menu-depth2 sub-gnb-menu-depth2_3">
                            <li><a href="<?php echo G5_THEME_URL?>/sub/sub3_1.php"><span>네비게이션 임플란트</span></a></li>
                            <li><a href="<?php echo G5_THEME_URL?>/sub/sub3_2.php"><span>발치즉시 임플란트</span></a></li>
                            <li><a href="<?php echo G5_THEME_URL?>/sub/sub3_3.php"><span>뼈이식 임플란트</span></a></li>
                            <li><a href="<?php echo G5_THEME_URL?>/sub/sub3_4.php"><span>상악동거상술</span></a></li>
                            <li><a href="<?php echo G5_THEME_URL?>/sub/sub3_5.php"><span>발치와 보존술</span></a></li>
                            <li><a href="<?php echo G5_THEME_URL?>/sub/sub3_6.php"><span>임플란트 재수술</span></a></li>
                            <li><a href="<?php echo G5_THEME_URL?>/sub/sub3_7.php"><span>건강보험 임플란트</span></a></li>
                        </ul>
                    </li>
                    <li class="sub_header_menu_li sub_header_menu_li1_4 sub-gnb-menu-depth1">
                        <a href="<?php echo G5_THEME_URL?>/sub/sub4_1.php" class="normal">자연치아살리기</a>

                        <ul class="sub-gnb-menu-depth2 sub-gnb-menu-depth2_4">
                            <li><a href="<?php echo G5_THEME_URL?>/sub/sub4_1.php"><span>신경치료</span></a></li>
                            <li><a href="<?php echo G5_THEME_URL?>/sub/sub4_2.php"><span>재신경치료</span></a></li>
                            <li><a href="<?php echo G5_THEME_URL?>/sub/sub4_3.php"><span>치근단수술</span></a></li>
                            <li><a href="<?php echo G5_THEME_URL?>/sub/sub4_4.php"><span>의도적 치아 재식술</span></a></li>
                        </ul>
                    </li>
                    <li class="sub_header_menu_li sub_header_menu_li1_5 sub-gnb-menu-depth1">
                        <a href="<?php echo G5_THEME_URL?>/sub/sub5_1.php" class="normal">일반진료</a>

                        <ul class="sub-gnb-menu-depth2 sub-gnb-menu-depth2_5">
                            <li><a href="<?php echo G5_THEME_URL?>/sub/sub5_1.php"><span>잇몸치료</span></a></li>
                            <li><a href="<?php echo G5_THEME_URL?>/sub/sub5_2.php"><span>치아미백</span></a></li>
                            <li><a href="<?php echo G5_THEME_URL?>/sub/sub5_3.php"><span>충치치료</span></a></li>
                            <li><a href="<?php echo G5_THEME_URL?>/sub/sub5_4.php"><span>사랑니발치</span></a></li>
                            <li><a href="<?php echo G5_THEME_URL?>/sub/sub5_5.php"><span>턱관절치료</span></a></li>
                            <li><a href="<?php echo G5_THEME_URL?>/sub/sub5_6.php"><span>보철치료</span></a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            
            <div class="pc_cont_640">
                <div class="login_wrap">
                    <div class="login_menu flex_row jc_fe center">
                        <?php if($is_admin) { ?><a href="<?php echo G5_URL?>/adm" class="login_menu_item fz_14 light">관리자</a><?php } ?>
                        <!-- <a class="dropdown-item" href="<?php echo G5_URL?>/bbs/new.php">새글</a> -->
                        <!-- <a class="dropdown-item" href="<?php echo G5_URL?>/bbs/qalist.php">1:1문의</a> -->
                        <?php if($is_member) { ?>
                        <a class="dropdown-item login_menu_item fz_14 light" href="<?php echo G5_BBS_URL ?>/member_confirm.php?url=<?php echo G5_BBS_URL ?>/register_form.php">정보수정</a> 
                        <a href="<?php echo G5_URL?>/bbs/logout.php" class="login_menu_item fz_14 light">로그아웃</a>
                        <?php }else{ ?>
                        <a href="<?php echo G5_URL?>/bbs/login.php" class="login_menu_item fz_14 light">로그인</a>
                        <a href="<?php echo G5_URL?>/bbs/register.php" class="login_menu_item fz_14 light">회원가입</a>
                        <?php } ?>
                    </div>
                </div>
            </div>
            
            <div class="hamburger flex_row se center open-on-hover" id="hamburger">
                <div class="hamburger_wrap flex_row jc_center center">
                    <div class="hamburger_box">
                        <div class="hamburger_line_3d">
                            <div class="line line1"></div>
                            <div class="line line2"></div>
                            <div class="line line3"></div>
                            <div class="line line3"></div>
                        </div>
                        <div class="hamburger_line_3d_close">
                            <div class="line_close line_close1"></div>
                            <div class="line_close line_close2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <? } ?>
</header>

<div class="gnb-outer" id="gnb">
    <div class="gnb-inner">
        <div class="gnb-inner__all">
            <ul class="gnb-menu-list">
                <li class="gnb-menu-depth1 gnb-menu-depth1-1 on">
                    <div class="gnb-menu-img-text">
                        <a href="<?php echo G5_THEME_URL?>/sub/sub1_1.php">
                            <p class="fz_20 medium">안산 연세세브란스 치과</p>
                        </a>
                    </div>
                    <ul class="gnb-menu-depth2 gnb-menu-depth2-1">
                        <li><a href="<?php echo G5_THEME_URL?>/sub/sub1_1.php"><span>특별함</span></a></li>
                        <li><a href="<?php echo G5_THEME_URL?>/sub/sub1_2.php"><span>의료진소개</span></a></li>
                        <li><a href="<?php echo G5_THEME_URL?>/sub/sub1_3.php"><span>둘러보기 · 오시는길</span></a></li>
                        <!--<li><a href="<?php echo G5_URL?>/notice"><span>공지사항</span></a></li>-->
                        <li><a href="<?php echo G5_URL?>/gallery"><span>치료전후</span></a></li>
                    </ul>
                </li>
                <li class="gnb-menu-depth1">
                    <div class="gnb-menu-img-text">
                        <a href="<?php echo G5_THEME_URL?>/sub/sub2_1.php"> 
                            <p class="fz_20 medium">치아교정</p>
                        </a>
                    </div>
                    <ul class="gnb-menu-depth2 gnb-menu-depth2-2">
                        <li><a href="<?php echo G5_THEME_URL?>/sub/sub2_1.php"><span>세브란스치과 <br>치아교정의 특별함</span></a></li>
                        <li><a href="<?php echo G5_THEME_URL?>/sub/sub2_2.php"><span>성장기 교정</span></a></li>
                        <li><a href="<?php echo G5_THEME_URL?>/sub/sub2_3.php"><span>비발치 교정</span></a></li>
                        <li><a href="<?php echo G5_THEME_URL?>/sub/sub2_4.php"><span>증상별 교정</span></a></li>
                        <li><a href="<?php echo G5_THEME_URL?>/sub/sub2_5.php"><span>인비절라인</span></a></li>
                    </ul>
                </li>
                <li class="gnb-menu-depth1">
                    <div class="gnb-menu-img-text">
                        <a href="<?php echo G5_THEME_URL?>/sub/sub3_1.php">
                            <p class="fz_20 medium">임플란트 센터</p>
                        </a>
                    </div>
                    <ul class="gnb-menu-depth2 gnb-menu-depth2-3">
                        <li><a href="<?php echo G5_THEME_URL?>/sub/sub3_1.php"><span>네비게이션 임플란트</span></a></li>
                        <li><a href="<?php echo G5_THEME_URL?>/sub/sub3_2.php"><span>발치즉시 임플란트</span></a></li>
                        <li><a href="<?php echo G5_THEME_URL?>/sub/sub3_3.php"><span>뼈이식 임플란트</span></a></li>
                        <li><a href="<?php echo G5_THEME_URL?>/sub/sub3_4.php"><span>상악동거상술</span></a></li>
                        <li><a href="<?php echo G5_THEME_URL?>/sub/sub3_5.php"><span>발치와 보존술</span></a></li>
                        <li><a href="<?php echo G5_THEME_URL?>/sub/sub3_6.php"><span>임플란트 재수술</span></a></li>
                        <li><a href="<?php echo G5_THEME_URL?>/sub/sub3_7.php"><span>건강보험 임플란트</span></a></li>
                    </ul>
                </li>
                <li class="gnb-menu-depth1">
                    <div class="gnb-menu-img-text">
                        <a href="<?php echo G5_THEME_URL?>/sub/sub4_1.php">
                            <p class="fz_20 medium">자연치아 살리기</p>
                        </a>
                    </div>
                    <ul class="gnb-menu-depth2 gnb-menu-depth2-4">
                        <li><a href="<?php echo G5_THEME_URL?>/sub/sub4_1.php"><span>신경치료</span></a></li>
                        <li><a href="<?php echo G5_THEME_URL?>/sub/sub4_2.php"><span>재신경치료</span></a></li>
                        <li><a href="<?php echo G5_THEME_URL?>/sub/sub4_3.php"><span>치근단수술</span></a></li>
                        <li><a href="<?php echo G5_THEME_URL?>/sub/sub4_4.php"><span>의도적 치아 재식술</span></a></li>
                    </ul>
                </li>
                <li class="gnb-menu-depth1">
                    <div class="gnb-menu-img-text">
                        <a href="<?php echo G5_THEME_URL?>/sub/sub5_1.php">
                            <p class="fz_20 medium">일반진료</p>
                        </a>
                    </div>
                    <ul class="gnb-menu-depth2 gnb-menu-depth2-5">
                        <li><a href="<?php echo G5_THEME_URL?>/sub/sub5_1.php"><span>잇몸치료</span></a></li>
                        <li><a href="<?php echo G5_THEME_URL?>/sub/sub5_2.php"><span>치아미백</span></a></li>
                        <li><a href="<?php echo G5_THEME_URL?>/sub/sub5_3.php"><span>충치치료</span></a></li>
                        <li><a href="<?php echo G5_THEME_URL?>/sub/sub5_4.php"><span>사랑니발치</span></a></li>
                        <li><a href="<?php echo G5_THEME_URL?>/sub/sub5_5.php"><span>턱관절치료</span></a></li>
                        <li><a href="<?php echo G5_THEME_URL?>/sub/sub5_6.php"><span>보철치료</span></a></li>
                    </ul>
                </li>
            </ul>
            
            <div class="gnb_info_wrap flex_row fw sb al_fs">
                <div class="gnb_info_box flex_row fw jc_center al_fs">
                    <div class="column_half column_half01">
                        <div class="gnb_info">
                            <p class="gnb_info_text gnb_info_text01 fz_19 normal m_10">진료 및 예약문의</p>
                            <a href="tel:031-502-2080">
                                <p class="fz_28">031.502.2080</p>
                            </a>
                        </div>
                    </div>
                    <div class="column_half column_half02">
                        <div class="gnb_info">
                            <p class="gnb_info_text gnb_info_text01 fz_19 normal m_10">진료시간 안내</p>
                            <div class="time-table fz_15 light">
                                <div class="dp-tr">
                                    <span class="dp-th">월&ensp;&ensp;&ensp;&ensp;목&emsp;:</span>
                                    <span class="dp-td">오전 10:00 - 오후 08:30</span>
                                    <span class="dp-td fz_14"></span>
                                </div>
                                <div class="dp-tr">
                                    <span class="dp-th">화&ensp;수&ensp;금&emsp;:</span>
                                    <span class="dp-td">오전 10:00 - 오후 07:00</span>
                                    <span class="dp-td"></span>
                                </div>
                                <div class="dp-tr">
                                    <span class="dp-th">토&ensp;요&ensp;일&emsp;:</span>
                                    <span class="dp-td">오전 10:00 - 오후 02:00</span>
                                    <span class="dp-td fz_14">&ensp;(점심시간 없음)</span>
                                </div>
                                <div class="dp-tr">
                                    <span class="dp-th">점심시간</span>
                                    <span class="dp-td">오후 01:00 - 오후 02:00</span>
                                    <span class="dp-td"></span>
                                </div>
                                <div class="dp-tr">
                                    <span class="dp-th"></span>
                                    <span class="dp-td">일요일, 공휴일 휴진</span>
                                    <span class="dp-td"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="gnb_info_kakao">
                    <h1 class="fz_19 normal m_20">상담 및 진료예약</h1>
                    <a href="http://pf.kakao.com/_xglUSb" target="_blank">
                        <div class="gnb_kakao_btn"></div>
                    </a>
                </div>
            </div>
            <!-- 모바일 메뉴 -->
            <ul class="gnb-menu-list-m">
                <li class="m-gnb-menu-depth1">
                    <a href="<?php echo G5_THEME_URL?>/sub/sub1_1.php" class="medium">
                        <p class="sortsmillgoudy bold blind">01 <span class="notosans normal">안산 연세세브란스 치과</span></p>
                        안산 연세세브란스 치과
                    </a>
                    <ul class="m-gnb-menu-depth2">
                        <li><a href="<?php echo G5_THEME_URL?>/sub/sub1_1.php"><span>특별함</span></a></li>
                        <li><a href="<?php echo G5_THEME_URL?>/sub/sub1_2.php"><span>의료진소개</span></a></li>
                        <li><a href="<?php echo G5_THEME_URL?>/sub/sub1_3.php"><span>둘러보기 · 오시는길</span></a></li>
                        <!--<li><a href="<?php echo G5_URL?>/notice"><span>공지사항</span></a></li>-->
                        <li><a href="<?php echo G5_URL?>/gallery"><span>치료전후</span></a></li>
                    </ul>
                </li>
                <li class="m-gnb-menu-depth1">
                    <a href="<?php echo G5_THEME_URL?>/sub/sub2_1.php" class="medium">
                        <p class="sortsmillgoudy bold blind">02 <span class="notosans normal">치아교정</span></p>
                        치아교정
                    </a>
                    <ul class="m-gnb-menu-depth2">
                        <li><a href="<?php echo G5_THEME_URL?>/sub/sub2_1.php"><span>세브란스치과 <br>치아교정의 특별함</span></a></li>
                        <li><a href="<?php echo G5_THEME_URL?>/sub/sub2_2.php"><span>성장기 교정</span></a></li>
                        <li><a href="<?php echo G5_THEME_URL?>/sub/sub2_3.php"><span>비발치 교정</span></a></li>
                        <li><a href="<?php echo G5_THEME_URL?>/sub/sub2_4.php"><span>증상별 교정</span></a></li>
                        <li><a href="<?php echo G5_THEME_URL?>/sub/sub2_5.php"><span>인비절라인</span></a></li>
                    </ul>
                </li>
                <li class="m-gnb-menu-depth1">
                    <a href="<?php echo G5_THEME_URL?>/sub/sub3_1.php" class="medium">
                        <p class="sortsmillgoudy bold blind">03 <span class="notosans normal">임플란트 센터</span></p>
                        임플란트 센터
                    </a>
                    <ul class="m-gnb-menu-depth2">
                        <li><a href="<?php echo G5_THEME_URL?>/sub/sub3_1.php"><span>네비게이션 임플란트</span></a></li>
                        <li><a href="<?php echo G5_THEME_URL?>/sub/sub3_2.php"><span>발치즉시 임플란트</span></a></li>
                        <li><a href="<?php echo G5_THEME_URL?>/sub/sub3_3.php"><span>뼈이식 임플란트</span></a></li>
                        <li><a href="<?php echo G5_THEME_URL?>/sub/sub3_4.php"><span>상악동거상술</span></a></li>
                        <li><a href="<?php echo G5_THEME_URL?>/sub/sub3_5.php"><span>발치와 보존술</span></a></li>
                        <li><a href="<?php echo G5_THEME_URL?>/sub/sub3_6.php"><span>임플란트 재수술</span></a></li>
                        <li><a href="<?php echo G5_THEME_URL?>/sub/sub3_7.php"><span>건강보험 임플란트</span></a></li>
                    </ul>
                </li>
                <li class="m-gnb-menu-depth1">
                    <a href="<?php echo G5_THEME_URL?>/sub/sub4_1.php" class="medium">
                        <p class="sortsmillgoudy bold blind">04 <span class="notosans normal">자연치아 살리기</span></p>
                        자연치아 살리기
                    </a>
                    <ul class="m-gnb-menu-depth2">
                        <li><a href="<?php echo G5_THEME_URL?>/sub/sub4_1.php"><span>신경치료</span></a></li>
                        <li><a href="<?php echo G5_THEME_URL?>/sub/sub4_2.php"><span>재신경치료</span></a></li>
                        <li><a href="<?php echo G5_THEME_URL?>/sub/sub4_3.php"><span>치근단수술</span></a></li>
                        <li><a href="<?php echo G5_THEME_URL?>/sub/sub4_4.php"><span>의도적 치아 재식술</span></a></li>
                    </ul>
                </li>
                <li class="m-gnb-menu-depth1">
                    <a href="<?php echo G5_THEME_URL?>/sub/sub5_1.php" class="medium">
                        <p class="sortsmillgoudy bold blind">05 <span class="notosans normal">일반진료</span></p>
                        일반진료
                    </a>
                    <ul class="m-gnb-menu-depth2">
                        <li><a href="<?php echo G5_THEME_URL?>/sub/sub5_1.php"><span>잇몸치료</span></a></li>
                        <li><a href="<?php echo G5_THEME_URL?>/sub/sub5_2.php"><span>치아미백</span></a></li>
                        <li><a href="<?php echo G5_THEME_URL?>/sub/sub5_3.php"><span>충치치료</span></a></li>
                        <li><a href="<?php echo G5_THEME_URL?>/sub/sub5_4.php"><span>사랑니발치</span></a></li>
                        <li><a href="<?php echo G5_THEME_URL?>/sub/sub5_5.php"><span>턱관절치료</span></a></li>
                        <li><a href="<?php echo G5_THEME_URL?>/sub/sub5_6.php"><span>보철치료</span></a></li>
                    </ul>
                </li>
                
                <div class="m_gnb_info_wrap">
                    <div class="m_gnb_info">
                        <div class="gnb_info">
                            <p class="gnb_info_text gnb_info_text01 fz_19 normal m_10">진료 및 예약문의</p>
                            <a href="tel:031-502-2080">
                                <p class="fz_28">031.502.2080</p>
                            </a>
                        </div>
                        <div class="gnb_info_kakao">
                            <h1 class="fz_19 normal m_20">상담 및 진료예약</h1>
                            <a href="http://pf.kakao.com/_xglUSb" target="_blank">
                                <div class="gnb_kakao_btn"></div>
                            </a>
                        </div>
                    </div>
                </div>
                
                <!-- login-menu -->
                <div class="m_cont_640">
                    <div class="login_wrap">
                        <div class="login_menu flex_row jc_fe center">
                            <?php if($is_admin) { ?><a href="<?php echo G5_URL?>/adm" class="login_menu_item fz_14 light">관리자</a><?php } ?>
                            <!-- <a class="dropdown-item" href="<?php echo G5_URL?>/bbs/new.php">새글</a> -->
                            <!-- <a class="dropdown-item" href="<?php echo G5_URL?>/bbs/qalist.php">1:1문의</a> -->
                            <?php if($is_member) { ?>
                            <a class="dropdown-item login_menu_item fz_14 light" href="<?php echo G5_BBS_URL ?>/member_confirm.php?url=<?php echo G5_BBS_URL ?>/register_form.php">정보수정</a> 
                            <a href="<?php echo G5_URL?>/bbs/logout.php" class="login_menu_item fz_14 light">로그아웃</a>
                            <?php }else{ ?>
                            <a href="<?php echo G5_URL?>/bbs/login.php" class="login_menu_item fz_14 light">로그인</a>
                            <a href="<?php echo G5_URL?>/bbs/register.php" class="login_menu_item fz_14 light">회원가입</a>
                            <?php } ?>
                        </div>
                    </div>
                </div>
            </ul>
        </div>
    </div>
</div>
<!-- //header -->



<!-- quick-menu -->
<div class="quick_wrap" id="quick">
    <div class="quick_menu_wrap" id="quick_menu_wrap">
        <ul class="quick_menu">
            <li class="quick_menu_list quick_menu_li_never">
                <a href="https://m.booking.naver.com/booking/13/bizes/662759?theme=place&entry=pll&area=pll" target="_blank">
                    <i class="quick_icon q_never"></i>
                    <p class="blind">네이버예약</p>
                </a>
            </li>
            <li class="quick_menu_list quick_menu_li_kakaoplus">
                <a href="http://pf.kakao.com/_xglUSb" target="_blank">
                    <i class="quick_icon q_kakaoplus"></i>
                    <p class="blind">카톡플러스</p>
                </a>
            </li>
            <li class="quick_menu_list quick_menu_li_blog">
                <a href="https://blog.naver.com/ansansev" target="_blank">
                    <i class="quick_icon q_blog"></i>
                    <p class="blind">블로그</p>
                </a>
            </li>
            <li class="quick_menu_list quick_menu_li_map">
                <a href="<?php echo G5_THEME_URL?>/sub/sub1_3.php">
                    <i class="quick_icon q_map"></i>
                    <p class="blind">오시는길</p>
                </a>
            </li>
            <li class="quick_menu_list quick_menu_li_btn topbtn">
                <a href="javascript:void(0);">
                    <i class="quick_icon q_btn"></i>
                    <p class="blind">위아래이동버튼</p>
                </a>
            </li>
        </ul>
    </div>
</div>
<!-- //quick-menu -->


<? if(defined('_INDEX_')) { ?>
<!-- side_nav -->
<div class="side_nav" id="side_nav">
    <ul class="side_nav_ul flex_row fw jc_center center">
        <li class="side_nav_li side_nav_li01 active" onclick="$('html, body').animate({ scrollTop: $('#main_cont02').offset().top-0 }, 500);"><a href="javascript:void(0);"></a></li>
        <li class="side_nav_li side_nav_li02" onclick="$('html, body').animate({ scrollTop: $('#main_cont03').offset().top-90 }, 500);"><a href="javascript:void(0);"></a></li>
        <li class="side_nav_li side_nav_li03" onclick="$('html, body').animate({ scrollTop: $('#main_cont04').offset().top-120 }, 500);"><a href="javascript:void(0);"></a></li>
        <li class="side_nav_li side_nav_li04" onclick="$('html, body').animate({ scrollTop: $('#main_cont05').offset().top-120 }, 500);"><a href="javascript:void(0);"></a></li>
    </ul>
</div>
<!-- //side_nav -->
<? } ?>


<!-- main -->
<div class="smooth-scroll" id="content">
