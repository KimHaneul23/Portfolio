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

<!-- header -->
<div id="skip" class="skip-navigation ir_link">
    <a href="#gnb">메뉴 바로가기</a>
    <a href="#content">본문 바로가기</a>
</div>
<!-- header -->

<div class="wrap" id="all_wrap">
    <header class="main-header color_change" id="header">
        <? if(defined('_INDEX_')) { ?>
        <div class="ht-inner">
            <div class="ht-inner__left">
                <div class="logo pc_cont_640">
                    <a href="<?php echo G5_URL?>">
                        <img class="color_change_logo" src="<?php echo G5_THEME_URL?>/img/h_logo_b.png" alt="안다스디자인">
                        <img class="color_change_logo_w" src="<?php echo G5_THEME_URL?>/img/h_logo_w.png" alt="안다스디자인">
                    </a>
                </div>
                <div class="logo m_cont_640">
                    <a href="<?php echo G5_URL?>">
                        <img class="color_change_logo" src="<?php echo G5_THEME_URL?>/img/m_h_logo_b.png" alt="안다스디자인">
                        <img class="color_change_logo_w" src="<?php echo G5_THEME_URL?>/img/m_h_logo_w.png" alt="안다스디자인">
                    </a>
                </div>
            </div>
            <div class="ht-inner__right">
                <div class="top_menu_nav pc_cont_480">
                    <div class="top_menu_inner flex_row jc_fe center ta_c fz_14 montserrat light">
                        <div class="top_menu top_menu01 lh_1"><a href="<?php echo G5_THEME_URL?>/sub/about.php">ABOUT</a></div>
                        <div class="top_menu top_menu02 lh_1"><a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery">PORTFOLIO</a></div>
                        <div class="top_menu top_menu03 lh_1"><a href="<?php echo G5_THEME_URL?>/sub/contact.php">CONTACT</a></div>
                        <div class="top_menu top_menu04 lh_1"><a href="<?php echo G5_THEME_URL?>/sub/inquiry.php">INQUIRY</a></div>
                        <!--<div class="top_menu top_menu05 top_menu_kakao lh_1 pc_cont_640"><a href="http://pf.kakao.com/_xdEjgb" target="_blank"><img src="<?php echo G5_THEME_URL?>/img/kakao_icon.png" alt="카카오톡 상담"></a></div>-->
                    </div>
                </div>
            </div>
        </div>
        
        <div class="fiexd_header">
            <div class="fiexd-ht-inner">
                <div class="ht-inner__left">
                    <div class="logo pc_cont_640">
                        <a href="<?php echo G5_URL?>">
                            <img class="color_change_logo" src="<?php echo G5_THEME_URL?>/img/h_logo_b.png" alt="안다스디자인">
                            <img class="color_change_logo_w" src="<?php echo G5_THEME_URL?>/img/h_logo_w.png" alt="안다스디자인">
                        </a>
                    </div>
                    <div class="logo m_cont_640">
                        <a href="<?php echo G5_URL?>">
                            <img class="color_change_logo" src="<?php echo G5_THEME_URL?>/img/m_h_logo_b.png" alt="안다스디자인">
                            <img class="color_change_logo_w" src="<?php echo G5_THEME_URL?>/img/m_h_logo_w.png" alt="안다스디자인">
                        </a>
                    </div>
                </div>
                <div class="ht-inner__right">
                    <div class="top_menu_nav pc_cont_480">
                        <div class="top_menu_inner flex_row jc_fe center ta_c fz_14 montserrat light">
                            <div class="top_menu top_menu01 lh_1"><a href="<?php echo G5_THEME_URL?>/sub/about.php">ABOUT</a></div>
                            <div class="top_menu top_menu02 lh_1"><a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery">PORTFOLIO</a></div>
                            <div class="top_menu top_menu03 lh_1"><a href="<?php echo G5_THEME_URL?>/sub/contact.php">CONTACT</a></div>
                            <div class="top_menu top_menu04 lh_1"><a href="<?php echo G5_THEME_URL?>/sub/inquiry.php">INQUIRY</a></div>
                            <!--<div class="top_menu top_menu05 top_menu_kakao lh_1 pc_cont_640"><a href="http://pf.kakao.com/_xdEjgb" target="_blank"><img src="<?php echo G5_THEME_URL?>/img/kakao_icon.png" alt="카카오톡 상담"></a></div>-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="hamburger flex_row se center open-on-hover m_cont_480" id="hamburger">
            <div class="hamburger_wrap flex_row jc_center center">
                <div class="hamburger_box">
                    <div class="hamburger_line">
                        <div class="line line1"></div>
                        <div class="line line2"></div>
                        <div class="line line3"></div>
                    </div>
                    <div class="hamburger_line_close">
                        <div class="line_close line_close1"></div>
                        <div class="line_close line_close2"></div>
                    </div>
                </div>
            </div>
        </div>
        <? } else { ?>
        <div class="ht-inner">
            <div class="ht-inner__left">
                <div class="logo pc_cont_640">
                    <a href="<?php echo G5_URL?>">
                        <img class="color_change_logo" src="<?php echo G5_THEME_URL?>/img/h_logo_b.png" alt="안다스디자인">
                        <img class="color_change_logo_w" src="<?php echo G5_THEME_URL?>/img/h_logo_w.png" alt="안다스디자인">
                    </a>
                </div>
                <div class="logo m_cont_640">
                    <a href="<?php echo G5_URL?>">
                        <img class="color_change_logo" src="<?php echo G5_THEME_URL?>/img/m_h_logo_b.png" alt="안다스디자인">
                        <img class="color_change_logo_w" src="<?php echo G5_THEME_URL?>/img/m_h_logo_w.png" alt="안다스디자인">
                    </a>
                </div>
            </div>
            <div class="ht-inner__right">
                <div class="top_menu_nav pc_cont_480">
                    <div class="top_menu_inner flex_row jc_fe center ta_c fz_14 montserrat light">
                        <div class="top_menu top_menu01 lh_1"><a href="<?php echo G5_THEME_URL?>/sub/about.php">ABOUT</a></div>
                        <div class="top_menu top_menu02 lh_1"><a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery">PORTFOLIO</a></div>
                        <div class="top_menu top_menu03 lh_1"><a href="<?php echo G5_THEME_URL?>/sub/contact.php">CONTACT</a></div>
                        <div class="top_menu top_menu04 lh_1"><a href="<?php echo G5_THEME_URL?>/sub/inquiry.php">INQUIRY</a></div>
                        <!--<div class="top_menu top_menu05 top_menu_kakao lh_1 pc_cont_640"><a href="http://pf.kakao.com/_xdEjgb" target="_blank"><img src="<?php echo G5_THEME_URL?>/img/kakao_icon.png" alt="카카오톡 상담"></a></div>-->
                    </div>
                </div>
            </div>
        </div>
        
        <div class="fiexd_header">
            <div class="fiexd-ht-inner">
                <div class="ht-inner__left">
                    <div class="logo pc_cont_640">
                        <a href="<?php echo G5_URL?>">
                            <img class="color_change_logo" src="<?php echo G5_THEME_URL?>/img/h_logo_b.png" alt="안다스디자인">
                            <img class="color_change_logo_w" src="<?php echo G5_THEME_URL?>/img/h_logo_w.png" alt="안다스디자인">
                        </a>
                    </div>
                    <div class="logo m_cont_640">
                        <a href="<?php echo G5_URL?>">
                            <img class="color_change_logo" src="<?php echo G5_THEME_URL?>/img/m_h_logo_b.png" alt="안다스디자인">
                            <img class="color_change_logo_w" src="<?php echo G5_THEME_URL?>/img/m_h_logo_w.png" alt="안다스디자인">
                        </a>
                    </div>
                </div>
                <div class="ht-inner__right">
                    <div class="top_menu_nav pc_cont_480">
                        <div class="top_menu_inner flex_row jc_fe center ta_c fz_14 montserrat light">
                            <div class="top_menu top_menu01 lh_1"><a href="<?php echo G5_THEME_URL?>/sub/about.php">ABOUT</a></div>
                            <div class="top_menu top_menu02 lh_1"><a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery">PORTFOLIO</a></div>
                            <div class="top_menu top_menu03 lh_1"><a href="<?php echo G5_THEME_URL?>/sub/contact.php">CONTACT</a></div>
                            <div class="top_menu top_menu04 lh_1"><a href="<?php echo G5_THEME_URL?>/sub/inquiry.php">INQUIRY</a></div>
                            <!--<div class="top_menu top_menu05 top_menu_kakao lh_1 pc_cont_640"><a href="http://pf.kakao.com/_xdEjgb" target="_blank"><img src="<?php echo G5_THEME_URL?>/img/kakao_icon.png" alt="카카오톡 상담"></a></div>-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="hamburger hamburger_sub flex_row se center open-on-hover m_cont_480" id="hamburger">
            <div class="hamburger_wrap flex_row jc_center center">
                <div class="hamburger_box">
                    <div class="hamburger_line">
                        <div class="line line1"></div>
                        <div class="line line2"></div>
                        <div class="line line3"></div>
                    </div>
                    <div class="hamburger_line_close">
                        <div class="line_close line_close1"></div>
                        <div class="line_close line_close2"></div>
                    </div>
                </div>
            </div>
        </div>
        <? } ?>
        
        <div class="gnb-outer" id="gnb">
            <div class="gnb-inner">
                <div class="gnb_backBG" id="gnb_backBG"></div>
                <div class="gnb-inner__all">
                    <ul class="gnb-menu-list">
                        <li class="gnb-menu-depth1 gnb-menu-depth1_1">
                            <div class="gnb-menu-img-text">
                                <a href="<?php echo G5_THEME_URL?>/sub/about.php">
                                    <p class="fz_14 montserrat light">ABOUT</p>
                                </a>
                            </div>
                        </li>
                        <li class="gnb-menu-depth1 gnb-menu-depth1_2">
                            <div class="gnb-menu-img-text">
                                <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery"> 
                                    <p class="fz_14 montserrat light">PORTFOLIO</p>
                                </a>
                            </div>
                        </li>
                        <li class="gnb-menu-depth1 gnb-menu-depth1_3">
                            <div class="gnb-menu-img-text">
                                <a href="<?php echo G5_THEME_URL?>/sub/contact.php">
                                    <p class="fz_14 montserrat light">CONTACT</p>
                                </a>
                            </div>
                        </li>
                        <li class="gnb-menu-depth1 gnb-menu-depth1_4">
                            <div class="gnb-menu-img-text">
                                <a href="<?php echo G5_THEME_URL?>/sub/inquiry.php">
                                    <p class="fz_14 montserrat light">INQUIRY</p>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    
    
    <!--
    <div class="m_kakao_wrap m_cont_640">
        <a href="http://pf.kakao.com/_xdEjgb" target="_blank">
            <img src="<?php echo G5_THEME_URL?>/img/kakao_icon_m.png" alt="카카오톡 상담">
        </a>
    </div>
    -->
    <!-- main -->
    <div class="smooth-scroll" id="content">