<?php
include_once('./_common.php');

if (!defined('_INDEX_')) define('_INDEX_', true);
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

//////////////////////////////////////////////////////////////////////
////////////////////////////// SEO 시작 //////////////////////////////
//////////////////////////////////////////////////////////////////////

// 웹사이트 타이틀
$g5_head_title = '파인애플피티엘 - 홈페이지제작 | 마케팅 | 미디어제작';

// 웹사이트 설명 (서술형 : 80자 이내)
$seo_descriptionS = "병원홈페이지제작, 웹사이트제작, 상세페이지제작, 반응형홈페이지제작, 지디웹";

// 웹사이트 설명 (서술형 : 가능한 많이)
$seo_descriptionL = "병원홈페이지제작, 웹사이트제작, 상세페이지제작, 반응형홈페이지제작, 지디웹";

// 키워드 (단어형 : 가능한 많이)  예) 프로그램개발,디자인
$seo_keywords = "병원홈페이지제작, 웹사이트제작, 상세페이지제작, 반응형홈페이지제작, 지디웹";

$seo_og_image = $seo_domain_addr."/img/ptl_og_img.jpg";
$seo_og_image_width  = "1200";
$seo_og_image_height = "600";

//if (G5_IS_MOBILE) {
//    include_once(G5_THEME_MOBILE_PATH.'/index.php');
//    return;
//}

include_once(G5_PATH.'/head.php');
?>
    
    <main id="startContent">
        
        <article class="main_cont main_top_cont" id="main_top_cont">
            <div class="main_cont_wrap main_cont_wrap01">
                <div class="main_cont01_box">
                    <div class="main_cont01_img main_cont01_img01"></div>
                    <div class="main_cont_text_wrap main_cont01_text_wrap ta_c">
                        <div class="main_cont_text_center">
                            <h2>
                                <div class="txt01">
                                    <p class="main_text_ani fz_35 lh_14 ls_p2 kopubworldbatang normal">
                                        ‘<span class="medium fz_45 lh_14">오롯이</span>’모자람이 없이
                                    </p>
                                </div>
                                <div class="txt02">
                                    <p class="main_text_ani delay06 fz_35 lh_14 ls_p2 kopubworldbatang normal">
                                        온전하게 ‘<span class="medium fz_45 lh_14">창조</span>하고 <span class="medium fz_45 lh_14">편집</span>합니다’
                                    </p>
                                </div>
                            </h2>
                            
                            <div class="main_top_contact_btn_wrap m_cont_960">
                                <div class="main_top_contact_btn main_text_ani delay09">
                                    <a href="<?php echo G5_URL?>/contact.php">
                                        <p class="txt01 c-w fz_14 lh_16 pretendard normal">
                                            프로젝트 문의
                                        </p>
                                    </a>
                                </div>
                            </div>
                            
                            <div class="txt03">
                                <p class="main_text_ani delay09 pc_cont_960">
                                    <img src="<?php echo G5_URL?>/img/logo01.png" alt=""/>
                                </p>
                                <p class="main_text_ani delay12 m_cont_960">
                                    <img src="<?php echo G5_URL?>/img/main_top_icon_m.png" alt=""/>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="mouse_scroll main_slide">
                    <div>
                        <span class="m_scroll_arrows m_scroll_arrows_one"></span>
                        <span class="m_scroll_arrows m_scroll_arrows_two"></span>
                    </div>
                </div>
            </div>
        </article>
        
        <article class="main_cont_wrap main_cont_wrap02 pc_cont_960" id="main_cont_wrap02">
            <?php echo latest_multi('/winner_main', 'winner', 20, 1000, 0, 'datetime_desc'); ?>
        </article>
        
        <article class="main_cont_wrap main_cont_wrap02 m_cont_960" id="main_cont_wrap02_m">
            <div class="main_cont02_title">
                <p class="award_cup reveal fade-up">
                    <i class="award_cup_icon"></i>
                </p>
                <h2 class="txt01 reveal fade-up c-w fz_24 ls_p1 lh_16 sortsmillgoudy normal">
                    Web Award <span class="italic">Winner</span>
                </h2>
            </div>
            <div class="main_cont02_section">
                <div class="main_cont02_swiper_wrap">
                    <div class="swiper-container main_cont02_swiper_m" id="main_cont02_swiper_m">
                        <div class="swiper-wrapper">
                            <?php echo latest_multi('/winner_main_m', 'winner', 20, 1000, 0, 'datetime_desc'); ?>
                        </div>
                    </div>
                    <div class="swiper-button-prev main_cont02_slider_prev"></div>
                    <div class="swiper-button-next main_cont02_slider_next"></div>
                </div>
            </div>
        </article>
        
        <article class="main_cont_wrap main_cont_wrap03">
            <div class="main_cont03_title_wrap">
                <div class="main_cont03_title">
                    <h2 class="txt01 reveal fade-up fz_35 ls_1 lh_16 sortsmillgoudy normal">
                        Web / Mobile HP
                    </h2>
                    <h3 class="txt02 reveal fade-up fz_16 ls_p2 lh_16 sortsmillgoudy normal">
                        PROJECT&emsp;By Design
                    </h3>
                </div>
                <div class="more_btn reveal fade-up">
                    <a href="<?php echo G5_URL?>/projects">
                        <span class="blind">프로젝트 더보기</span><p class="txt01 fz_17 ls_p2 lh_1 sortsmillgoudy normal">more</p><i class="more_btn_arrow"></i>
                    </a>
                </div>
            </div>
            <!-- PC - s -->
            <?php echo latest_multi('/projects_main', 'projects', 10, 1000, 0, 'datetime_desc'); ?><!-- PC -->
            <!-- //PC - e -->
            
            <!-- MO - s -->
            <div class="main_cont03_section m_cont_960">
                <div class="main_cont03_swiper_wrap">
                    <div class="swiper-container main_cont03_swiper_m" id="main_cont03_swiper_m">
                        <div class="swiper-wrapper">
                            <?php echo latest_multi('/projects_main_m', 'projects', 4, 1000, 0, 'datetime_desc'); ?><!-- MO -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- //MO - e -->
        </article>
        <script src="https://player.vimeo.com/api/player.js"></script>
        <article class="main_cont_wrap main_cont_wrap04">
            <div class="main_cont04_title_wrap">
                <div class="main_cont04_title">
                    <h2 class="txt01 reveal fade-up fz_35 ls_1 lh_16 sortsmillgoudy normal">
                        Branding Video
                    </h2>
                    <h3 class="txt02 reveal fade-up fz_16 ls_p2 lh_16 sortsmillgoudy normal">
                        PROJECT&emsp;By Media
                    </h3>
                </div>
                <div class="more_btn reveal fade-up">
                    <a href="<?php echo G5_URL?>/projects">
                        <span class="blind">프로젝트 더보기</span><p class="txt01 fz_17 ls_p2 lh_1 sortsmillgoudy normal">more</p><i class="more_btn_arrow"></i>
                    </a>
                </div>
            </div>
            <div class="main_cont04_section pc_cont_960">
                <ul class="main_cont04_list_ul">
                    <li class="main_cont04_list_li main_cont04_list_li01 reveal fade-up">
                        <div class="main_cont04_list_box">
                            <div class="main_cont04_video_box">
                                <div class="main_cont04_video">
                                    <iframe title="서울페이스21치과병원 브랜드필름" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" id="main_cont04_video_iframe" src="https://player.vimeo.com/video/913168267?autoplay=0&amp;loop=1&amp;color=ffffff&amp;byline=0&amp;portrait=0&amp;muted=1" style="position: absolute; top:0; left:0;" width="100%" height="100%"></iframe>
                                </div>
                            </div>
                            <div class="main_cont04_list_txt" onclick="location.href='<?php echo G5_URL?>/projects';" style="cursor:pointer;">
                                <p class="txt01 fz_15 lh_16 normal">
                                    서울페이스21치과병원 브랜드필름
                                </p>
                            </div>
                        </div>
                    </li>
                    <li class="main_cont04_list_li main_cont04_list_li02 reveal fade-up">
                        <div class="main_cont04_list_box">
                            <div class="main_cont04_video_box">
                                <div class="main_cont04_video">
                                    <iframe title="힐하우스피부과 브랜드필름" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" id="main_cont04_video_iframe" src="https://player.vimeo.com/video/913168298?autoplay=0&amp;loop=1&amp;color=ffffff&amp;byline=0&amp;portrait=0&amp;muted=1" style="position: absolute; top:0; left:0;" width="100%" height="100%"></iframe>
                                </div>
                            </div>
                            <div class="main_cont04_list_txt" onclick="location.href='<?php echo G5_URL?>/projects';" style="cursor:pointer;">
                                <p class="txt01 fz_15 lh_16 normal">
                                    힐하우스피부과 브랜드필름
                                </p>
                            </div>
                        </div>
                    </li>
                    <li class="main_cont04_list_li main_cont04_list_li03 reveal fade-up">
                        <div class="main_cont04_list_box">
                            <div class="main_cont04_video_box">
                                <div class="main_cont04_video">
                                    <iframe title="주앤클리닉 브랜드필름" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" id="main_cont04_video_iframe" src="https://player.vimeo.com/video/913168281?autoplay=0&amp;loop=1&amp;color=ffffff&amp;byline=0&amp;portrait=0&amp;muted=1" style="position: absolute; top:0; left:0;" width="100%" height="100%"></iframe>
                                </div>
                            </div>
                            <div class="main_cont04_list_txt" onclick="location.href='<?php echo G5_URL?>/projects';" style="cursor:pointer;">
                                <p class="txt01 fz_15 lh_16 normal">
                                    주앤클리닉 브랜드필름
                                </p>
                            </div>
                        </div>
                    </li>
                    <li class="main_cont04_list_li main_cont04_list_li04 reveal fade-up">
                        <div class="main_cont04_list_box">
                            <div class="main_cont04_video_box">
                                <div class="main_cont04_video">
                                    <iframe title="맛통해_굴무침편 메인" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" id="main_cont04_video_iframe" src="https://player.vimeo.com/video/913168318?autoplay=0&amp;loop=1&amp;color=ffffff&amp;byline=0&amp;portrait=0&amp;muted=1" style="position: absolute; top:0; left:0;" width="100%" height="100%"></iframe>
                                </div>
                            </div>
                            <div class="main_cont04_list_txt" onclick="location.href='<?php echo G5_URL?>/projects';" style="cursor:pointer;">
                                <p class="txt01 fz_15 lh_16 normal">
                                    맛통해_굴무침편 메인
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            
            <div class="main_cont04_section m_cont_960">
                <div class="main_cont04_swiper_wrap">
                    <div class="swiper-container main_cont04_swiper_m" id="main_cont04_swiper_m">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide main_cont04_slider main_cont04_slider01">
                                <div class="main_cont04_list_box">
                                    <div class="main_cont04_video_box">
                                        <div class="main_cont04_video">
                                            <iframe title="서울페이스21치과병원 브랜드필름" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" id="main_cont04_video_iframe01" src="https://player.vimeo.com/video/913168267?autoplay=0&amp;loop=1&amp;color=ffffff&amp;byline=0&amp;portrait=0&amp;muted=1&amp;controls=0" style="position: absolute; top:0; left:0;" width="100%" height="100%"></iframe>
                                        </div>
                                        <div class="main_cont04_video_box_bg" id="main_cont04_video_box_bg01" onclick="main_cont04_video_play('main_cont04_video_box_bg01', 'main_cont04_video_box_bg01_pause', 'main_cont04_video_iframe01')"></div>
                                        <div class="main_cont04_video_box_bg_pause" id="main_cont04_video_box_bg01_pause" onclick="main_cont04_video_play_pause('main_cont04_video_box_bg01', 'main_cont04_video_box_bg01_pause', 'main_cont04_video_iframe01')"></div>
                                    </div>
                                    <div class="main_cont04_list_txt" onclick="location.href='<?php echo G5_URL?>/projects';" style="cursor:pointer;">
                                        <p class="txt01 fz_15 lh_16 normal">
                                            서울페이스21치과병원 브랜드필름
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide main_cont04_slider main_cont04_slider02">
                                <div class="main_cont04_list_box">
                                    <div class="main_cont04_video_box">
                                        <div class="main_cont04_video">
                                            <iframe title="힐하우스피부과 브랜드필름" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" id="main_cont04_video_iframe02" src="https://player.vimeo.com/video/913168298?autoplay=0&amp;loop=1&amp;color=ffffff&amp;byline=0&amp;portrait=0&amp;muted=1&amp;controls=0" style="position: absolute; top:0; left:0;" width="100%" height="100%"></iframe>
                                        </div>
                                        <div class="main_cont04_video_box_bg" id="main_cont04_video_box_bg02" onclick="main_cont04_video_play('main_cont04_video_box_bg02', 'main_cont04_video_box_bg02_pause', 'main_cont04_video_iframe02')"></div>
                                        <div class="main_cont04_video_box_bg_pause" id="main_cont04_video_box_bg02_pause" onclick="main_cont04_video_play_pause('main_cont04_video_box_bg02', 'main_cont04_video_box_bg02_pause', 'main_cont04_video_iframe02')"></div>
                                    </div>
                                    <div class="main_cont04_list_txt" onclick="location.href='<?php echo G5_URL?>/projects';" style="cursor:pointer;">
                                        <p class="txt01 fz_15 lh_16 normal">
                                            힐하우스피부과 브랜드필름
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide main_cont04_slider main_cont04_slider03">
                                <div class="main_cont04_list_box">
                                    <div class="main_cont04_video_box">
                                        <div class="main_cont04_video">
                                            <iframe title="주앤클리닉 브랜드필름" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" id="main_cont04_video_iframe03" src="https://player.vimeo.com/video/913168281?autoplay=0&amp;loop=1&amp;color=ffffff&amp;byline=0&amp;portrait=0&amp;muted=1&amp;controls=0" style="position: absolute; top:0; left:0;" width="100%" height="100%"></iframe>
                                        </div>
                                        <div class="main_cont04_video_box_bg" id="main_cont04_video_box_bg03" onclick="main_cont04_video_play('main_cont04_video_box_bg03', 'main_cont04_video_box_bg03_pause', 'main_cont04_video_iframe03')"></div>
                                        <div class="main_cont04_video_box_bg_pause" id="main_cont04_video_box_bg03_pause" onclick="main_cont04_video_play_pause('main_cont04_video_box_bg03', 'main_cont04_video_box_bg03_pause', 'main_cont04_video_iframe03')"></div>
                                    </div>
                                    <div class="main_cont04_list_txt" onclick="location.href='<?php echo G5_URL?>/projects';" style="cursor:pointer;">
                                        <p class="txt01 fz_15 lh_16 normal">
                                            주앤클리닉 브랜드필름
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-slide main_cont04_slider main_cont04_slider04">
                                <div class="main_cont04_list_box">
                                    <div class="main_cont04_video_box">
                                        <div class="main_cont04_video">
                                            <iframe title="맛통해_굴무침편 메인" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" id="main_cont04_video_iframe04" src="https://player.vimeo.com/video/913168318?autoplay=0&amp;loop=1&amp;color=ffffff&amp;byline=0&amp;portrait=0&amp;muted=1&amp;controls=0" style="position: absolute; top:0; left:0;" width="100%" height="100%"></iframe>
                                        </div>
                                        <div class="main_cont04_video_box_bg" id="main_cont04_video_box_bg04" onclick="main_cont04_video_play('main_cont04_video_box_bg04', 'main_cont04_video_box_bg04_pause', 'main_cont04_video_iframe04')"></div>
                                        <div class="main_cont04_video_box_bg_pause" id="main_cont04_video_box_bg04_pause" onclick="main_cont04_video_play_pause('main_cont04_video_box_bg04', 'main_cont04_video_box_bg04_pause', 'main_cont04_video_iframe04')"></div>
                                    </div>
                                    <div class="main_cont04_list_txt" onclick="location.href='<?php echo G5_URL?>/projects';" style="cursor:pointer;">
                                        <p class="txt01 fz_15 lh_16 normal">
                                            맛통해_굴무침편 메인
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
        
        <article class="main_cont_wrap main_cont_wrap05">
            <div class="main_cont05_title_wrap">
                <div class="main_cont05_title">
                    <h2 class="txt01 reveal fade-up fz_35 ls_1 lh_16 sortsmillgoudy normal">
                        Marketing & SNS
                    </h2>
                    <h3 class="txt02 reveal fade-up fz_16 ls_p2 lh_16 sortsmillgoudy normal">
                        PROJECT&emsp;By Marketing
                    </h3>
                </div>
                <div class="more_btn reveal fade-up">
                    <a href="<?php echo G5_URL?>/projects">
                        <span class="blind">프로젝트 더보기</span><p class="txt01 fz_17 ls_p2 lh_1 sortsmillgoudy normal">more</p><i class="more_btn_arrow"></i>
                    </a>
                </div>
            </div>
            <div class="main_cont05_section pc_cont_960">
                <ul class="main_cont05_list_ul">
                    <li class="main_cont05_list_li main_cont05_list_li01 reveal fade-up">
                        <a href="<?php echo G5_URL?>/projects">
                            <div class="main_cont05_list_box">
                                <div class="main_cont05_list_img">
                                    <img src="<?php echo G5_URL?>/img/main_sns_img01.jpg" alt="">
                                </div>
                                <div class="main_cont05_list_txt">
                                    <p class="txt01 fz_15 lh_16 normal">
                                        루엘드파리 SNS 마케팅
                                    </p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="main_cont05_list_li main_cont05_list_li02 reveal fade-up">
                        <a href="<?php echo G5_URL?>/projects">
                            <div class="main_cont05_list_box">
                                <div class="main_cont05_list_img">
                                    <img src="<?php echo G5_URL?>/img/main_sns_img02.jpg" alt="">
                                </div>
                                <div class="main_cont05_list_txt">
                                    <p class="txt01 fz_15 lh_16 normal">
                                        랄라비 브랜드 관리
                                    </p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="main_cont05_list_li main_cont05_list_li03 reveal fade-up">
                        <a href="<?php echo G5_URL?>/projects">
                            <div class="main_cont05_list_box">
                                <div class="main_cont05_list_img">
                                    <img src="<?php echo G5_URL?>/img/main_sns_img03.jpg" alt="">
                                </div>
                                <div class="main_cont05_list_txt">
                                    <p class="txt01 fz_16 lh_16 normal">
                                        실리팟 SNS 마케팅
                                    </p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="main_cont05_list_li main_cont05_list_li04 reveal fade-up">
                        <a href="<?php echo G5_URL?>/projects">
                            <div class="main_cont05_list_box">
                                <div class="main_cont05_list_img">
                                    <img src="<?php echo G5_URL?>/img/main_sns_img04.jpg" alt="">
                                </div>
                                <div class="main_cont05_list_txt">
                                    <p class="txt01 fz_16 lh_16 normal">
                                        오므론헬스케어
                                    </p>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            
            <div class="main_cont05_section m_cont_960">
                <div class="main_cont05_swiper_wrap">
                    <div class="swiper-container main_cont05_swiper_m" id="main_cont05_swiper_m">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide main_cont05_slider main_cont05_slider01">
                                <a href="<?php echo G5_URL?>/projects">
                                    <div class="main_cont05_list_box">
                                        <div class="main_cont05_list_img">
                                            <img src="<?php echo G5_URL?>/img/main_sns_img01.jpg" alt="">
                                        </div>
                                        <div class="main_cont05_list_txt">
                                            <p class="txt01 fz_15 lh_16 normal">
                                                루엘드파리 SNS 마케팅
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide main_cont05_slider main_cont05_slider02">
                                <a href="<?php echo G5_URL?>/projects">
                                    <div class="main_cont05_list_box">
                                        <div class="main_cont05_list_img">
                                            <img src="<?php echo G5_URL?>/img/main_sns_img02.jpg" alt="">
                                        </div>
                                        <div class="main_cont05_list_txt">
                                            <p class="txt01 fz_15 lh_16 normal">
                                                랄라비 브랜드 관리
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide main_cont05_slider main_cont05_slider03">
                                <a href="<?php echo G5_URL?>/projects">
                                    <div class="main_cont05_list_box">
                                        <div class="main_cont05_list_img">
                                            <img src="<?php echo G5_URL?>/img/main_sns_img03.jpg" alt="">
                                        </div>
                                        <div class="main_cont05_list_txt">
                                            <p class="txt01 fz_16 lh_16 normal">
                                                실리팟 SNS 마케팅
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide main_cont05_slider main_cont05_slider04">
                                <a href="<?php echo G5_URL?>/projects">
                                    <div class="main_cont05_list_box">
                                        <div class="main_cont05_list_img">
                                            <img src="<?php echo G5_URL?>/img/main_sns_img04.jpg" alt="">
                                        </div>
                                        <div class="main_cont05_list_txt">
                                            <p class="txt01 fz_16 lh_16 normal">
                                                오므론헬스케어
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
        
        <article class="main_cont_wrap main_cont_wrap06">
            <div class="main_cont06_title_wrap">
                <div class="main_cont06_title">
                    <h2 class="txt01 reveal fade-up fz_35 ls_1 lh_16 sortsmillgoudy normal">
                        FAQ
                    </h2>
                </div>
                <div class="main_cont06_tab reveal fade-up">
                    <ul class="main_cont06_tab_ul">
                        <li id="main_cont06_tab_li01" class="main_cont06_tab_li main_cont06_tab_li01 active" onclick="opensubtab(event, 'main_cont06_tab_cont1')">
                            <p class="txt01 fz_20 lh_16 sortsmillgoudy semibold">
                                HP
                            </p>
                        </li>
                        <li id="main_cont06_tab_li02" class="main_cont06_tab_li main_cont06_tab_li02" onclick="opensubtab(event, 'main_cont06_tab_cont2')">
                            <p class="txt01 fz_20 lh_16 sortsmillgoudy semibold">
                                Media
                            </p>
                        </li>
                        <li id="main_cont06_tab_li03" class="main_cont06_tab_li main_cont06_tab_li03" onclick="opensubtab(event, 'main_cont06_tab_cont3')">
                            <p class="txt01 fz_20 lh_16 sortsmillgoudy semibold">
                                Marketing
                            </p>
                        </li>
                        <!--<li id="main_cont06_tab_li04" class="main_cont06_tab_li main_cont06_tab_li04" onclick="opensubtab(event, 'main_cont06_tab_cont4')">
                            <p class="txt01 fz_20 lh_16 sortsmillgoudy semibold">
                                SNS
                            </p>
                        </li>-->
                    </ul>
                </div>
            </div>
            <div class="main_cont06_section">
                <div class="main_cont06_tab_cont main_cont06_tab_cont1" id="main_cont06_tab_cont1">
                    <div class="main_cont06_box">
                        <div class="main_cont06_img reveal fade-up">
                            <img src="<?php echo G5_URL?>/img/main_cont06_img01.jpg" alt="">
                        </div>
                        <div class="main_cont06_text_wrap reveal fade-up">
                            <div id="accordion_wrap" class="main_cont06_1_accordion_wrap">
                                <!-- Q - 01 -->
                                <div class="main_cont06_1_qna_wrap">
                                    <div class="main_cont06_1_que main_cont06_1_que01 reveal fade-up" id="main_cont06_1_que01">
                                        <p class="fz_19 ls_p1 lh_16 medium">
                                            <span class="txt01">Q.</span><span class="txt02">홈페이지 제작 완료 이후 수정이 필요한 경우는 어떻게 하나요?</span>
                                        </p>
                                        
                                        <div class="main_cont06_1_btn">
                                            <div class="main_cont06_1_plus">
                                                <div class="line line01"></div>
                                                <div class="line line02"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="main_cont06_1_anw main_cont06_1_anw01">
                                        <div class="main_cont06_1_anw_box">
                                            <div class="main_cont06_1_anw_cont main_cont06_1_anw_cont01">
                                                <div class="main_cont06_1_anw_text">
                                                    <p class="txt01 fz_16 lh_16 normal">
                                                        우선 클라이언트 측으로부터 정확한 수정 및 요구사항을 확인합니다. <br class="pc_cont_960">
                                                        홈페이지 오픈 후 한 달간은 기능상의 오류나 간단한 이미지, <br class="pc_cont_960">텍스트 수정의 경우에는 무상으로 진행해 드리고 있습니다. <br class="pc_cont_960">
                                                        무상 AS 기간 종료 후에는 작업 범위나 난이도에 따라 건별 또는 기간별로 유상 안내 후 작업 진행하고 있습니다.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Q - 02 -->
                                <div class="main_cont06_1_qna_wrap">
                                    <div class="main_cont06_1_que main_cont06_1_que02 reveal fade-up" id="main_cont06_1_que02">
                                        <p class="fz_19 ls_p1 lh_16 medium">
                                            <span class="txt01">Q.</span><span class="txt02">홈페이지 제작 과정은 어떻게 되나요?</span>
                                        </p>
                                        
                                        <div class="main_cont06_1_btn">
                                            <div class="main_cont06_1_plus">
                                                <div class="line line01"></div>
                                                <div class="line line02"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="main_cont06_1_anw main_cont06_1_anw02">
                                        <div class="main_cont06_1_anw_box">
                                            <div class="main_cont06_1_anw_cont main_cont06_1_anw_cont01">
                                                <div class="main_cont06_1_anw_text">
                                                    <p class="txt01 fz_16 lh_16 normal">
                                                        작업에 앞서 클라이언트와의 킥오프 미팅을 통해 제작 요구사항과 담고자 하는 내용 등을 파악합니다. <br class="pc_cont_960">
                                                        관련 기초 자료를 수집한 후 웹 구조 및 전체 사이트맵을 구성합니다. <br class="pc_cont_960">
                                                        요구사항에 맞게 본격적인 메인 페이지 기획을 시작합니다. <br class="pc_cont_960">
                                                        메인 기획을 토대로 디자인 작업이 진행되며 중간중간 작업 현황들을 공유하며 함께 제작 향을 맞춰갑니다. <br class="pc_cont_960">
                                                        디자인이 완료된 후 퍼블리싱 작업으로 웹에 구현합니다. <br class="pc_cont_960">
                                                        퍼블리싱 작업이 완료되면 내부 점검 후 클라이언트 측에 1차 완료 보고 및 확인 요청드립니다. <br class="pc_cont_960">
                                                        클라이언트와의 피드백 및 수정 기간을 거친 후 관리자 매뉴얼 전달과 함께 
                                                        최종 작업을 완료(오픈) 합니다.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Q - 03 -->
                                <div class="main_cont06_1_qna_wrap">
                                    <div class="main_cont06_1_que main_cont06_1_que03 reveal fade-up" id="main_cont06_1_que03">
                                        <p class="fz_19 ls_p1 lh_16 medium">
                                            <span class="txt01">Q.</span><span class="txt02">제작 중간에 진행상황을 공유 받고 싶어요.</span>
                                        </p>
                                        
                                        <div class="main_cont06_1_btn">
                                            <div class="main_cont06_1_plus">
                                                <div class="line line01"></div>
                                                <div class="line line02"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="main_cont06_1_anw main_cont06_1_anw03">
                                        <div class="main_cont06_1_anw_box">
                                            <div class="main_cont06_1_anw_cont main_cont06_1_anw_cont01">
                                                <div class="main_cont06_1_anw_text">
                                                    <p class="txt01 fz_16 lh_16 normal">
                                                        킥오프 미팅 이후 <br class="pc_cont_960">
                                                        가장 중요한 메인 페이지와 관련한 기획안 - 디자인 - 퍼블리싱 각각의 작업 현황을 크게 2-3차례 공식 중간보고드리고 있고 
                                                        이 외에 프로젝트 관련 궁금하신 사항에 대해 PM 역할의 담당자가 기민하게 소통을 이어가며 작업 상황을 공유하고 있습니다.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Q - 04 -->
                                <div class="main_cont06_1_qna_wrap">
                                    <div class="main_cont06_1_que main_cont06_1_que04 reveal fade-up" id="main_cont06_1_que04">
                                        <p class="fz_19 ls_p1 lh_16 medium">
                                            <span class="txt01">Q.</span><span class="txt02">기존 홈페이지 자료를 신규 홈페이지로 옮기고 싶은데 가능한가요?</span>
                                        </p>
                                        
                                        <div class="main_cont06_1_btn">
                                            <div class="main_cont06_1_plus">
                                                <div class="line line01"></div>
                                                <div class="line line02"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="main_cont06_1_anw main_cont06_1_anw04">
                                        <div class="main_cont06_1_anw_box">
                                            <div class="main_cont06_1_anw_cont main_cont06_1_anw_cont01">
                                                <div class="main_cont06_1_anw_text">
                                                    <p class="txt01 fz_16 lh_16 normal">
                                                        네, 기존 홈페이지 자료를 신규 홈페이지로 이관할 수 있습니다. <br class="pc_cont_960">
                                                        다만 작업량 및 작업 난이도에 따라 별도의 계약이 필요할 수 있습니다.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Q - 05 -->
                                <div class="main_cont06_1_qna_wrap">
                                    <div class="main_cont06_1_que main_cont06_1_que05 reveal fade-up" id="main_cont06_1_que05">
                                        <p class="fz_19 ls_p1 lh_16 medium">
                                            <span class="txt01">Q.</span><span class="txt02">홈페이지 제작 가격 궁금해요</span>
                                        </p>
                                        
                                        <div class="main_cont06_1_btn">
                                            <div class="main_cont06_1_plus">
                                                <div class="line line01"></div>
                                                <div class="line line02"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="main_cont06_1_anw main_cont06_1_anw05">
                                        <div class="main_cont06_1_anw_box">
                                            <div class="main_cont06_1_anw_cont main_cont06_1_anw_cont01">
                                                <div class="main_cont06_1_anw_text">
                                                    <p class="txt01 fz_16 lh_16 normal">
                                                        홈페이지 제작의 경우 원페이지 또는 풀페이지인지 추가 기능 개발이 필요한지의 작업 범위에 따라 제작비용이 달라지게 됩니다. <br class="pc_cont_960">
                                                        상단의 'CONTACT' 메뉴 또는 '프로젝트 문의'를 클릭하신 후 홈페이지 제작에 대해 문의를 남겨주시면 빠른 시일 내에 답변드릴 수 있도록 하겠습니다 :)
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="main_cont06_tab_cont main_cont06_tab_cont2" id="main_cont06_tab_cont2">
                    <div class="main_cont06_box">
                        <div class="main_cont06_img">
                            <img src="<?php echo G5_URL?>/img/main_cont06_img02.jpg" alt="">
                        </div>
                        <div class="main_cont06_text_wrap">
                            <div id="accordion_wrap" class="main_cont06_2_accordion_wrap">
                                <!-- Q - 01 -->
                                <div class="main_cont06_2_qna_wrap">
                                    <div class="main_cont06_2_que main_cont06_2_que01 reveal fade-up" id="main_cont06_2_que01">
                                        <p class="fz_19 ls_p1 lh_16 medium">
                                            <span class="txt01">Q.</span><span class="txt02">미디어 제작과정은 어떻게 되나요?</span>
                                        </p>
                                        
                                        <div class="main_cont06_2_btn">
                                            <div class="main_cont06_2_plus">
                                                <div class="line line01"></div>
                                                <div class="line line02"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="main_cont06_2_anw main_cont06_2_anw01">
                                        <div class="main_cont06_2_anw_box">
                                            <div class="main_cont06_2_anw_cont main_cont06_2_anw_cont01">
                                                <div class="main_cont06_2_anw_text">
                                                    <p class="txt01 fz_16 lh_16 normal">
                                                        미디어 제작 과정은 레퍼런스 확인 및 견적 산출 - 킥오프 미팅 - 기획안 작성 - 콘티 작성 - 촬영 - 편집 - 수정 및 완료 순으로 진행됩니다.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Q - 02 -->
                                <div class="main_cont06_2_qna_wrap">
                                    <div class="main_cont06_2_que main_cont06_2_que02 reveal fade-up" id="main_cont06_2_que02">
                                        <p class="fz_19 ls_p1 lh_16 medium">
                                            <span class="txt01">Q.</span><span class="txt02">파인애플 피티엘에서 사진/영상을 같이 하는 이유가 있을까요?</span>
                                        </p>
                                        
                                        <div class="main_cont06_2_btn">
                                            <div class="main_cont06_2_plus">
                                                <div class="line line01"></div>
                                                <div class="line line02"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="main_cont06_2_anw main_cont06_2_anw02">
                                        <div class="main_cont06_2_anw_box">
                                            <div class="main_cont06_2_anw_cont main_cont06_2_anw_cont01">
                                                <div class="main_cont06_2_anw_text">
                                                    <p class="txt01 fz_16 lh_16 normal">
                                                        파인애플 피티엘은 내부에 마케팅/디자인/미디어팀이 구성되어 있어, <br class="pc_cont_960">
                                                        프로젝트를 진행 시 상호 협력적으로 진행하여 홈페이지/콘텐츠의 이해도가 높아
                                                        최대한의 결과물을 낼 수 있게 노력하고 있습니다.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Q - 03 -->
                                <div class="main_cont06_2_qna_wrap">
                                    <div class="main_cont06_2_que main_cont06_2_que03 reveal fade-up" id="main_cont06_2_que03">
                                        <p class="fz_19 ls_p1 lh_16 medium">
                                            <span class="txt01">Q.</span><span class="txt02">완료된 후 수정 가능한가요?</span>
                                        </p>
                                        
                                        <div class="main_cont06_2_btn">
                                            <div class="main_cont06_2_plus">
                                                <div class="line line01"></div>
                                                <div class="line line02"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="main_cont06_2_anw main_cont06_2_anw03">
                                        <div class="main_cont06_2_anw_box">
                                            <div class="main_cont06_2_anw_cont main_cont06_2_anw_cont01">
                                                <div class="main_cont06_2_anw_text">
                                                    <p class="txt01 fz_16 lh_16 normal">
                                                        프로젝트 진행 시 2번까지 수정 가능합니다. <br class="pc_cont_960">
                                                        최종본 출력 이후 수정요청은 추가금이 발생할 수 있습니다.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Q - 04 -->
                                <div class="main_cont06_2_qna_wrap">
                                    <div class="main_cont06_2_que main_cont06_2_que04 reveal fade-up" id="main_cont06_2_que04">
                                        <p class="fz_19 ls_p1 lh_16 medium">
                                            <span class="txt01">Q.</span><span class="txt02">제작비용은 어떻게 되나요?</span>
                                        </p>

                                        <div class="main_cont06_2_btn">
                                            <div class="main_cont06_2_plus">
                                                <div class="line line01"></div>
                                                <div class="line line02"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="main_cont06_2_anw main_cont06_2_anw04">
                                        <div class="main_cont06_2_anw_box">
                                            <div class="main_cont06_2_anw_cont main_cont06_2_anw_cont01">
                                                <div class="main_cont06_2_anw_text">
                                                    <p class="txt01 fz_16 lh_16 normal">
                                                        제작하고 싶으신 영상의 종류에 따라 비용은 달라지게 됩니다. <br class="pc_cont_960">
                                                        레퍼런스 영상을 참조하여 상단의 'CONTACT' 메뉴 또는 '프로젝트 문의'를 클릭하신 후 미디어 제작에 대해 문의를 남겨주시면 
                                                        빠른 시일 내에 답변드릴 수 있도록 하겠습니다 :)
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Q - 05 -->
                                <!--<div class="main_cont06_2_qna_wrap">
                                    <div class="main_cont06_2_que main_cont06_2_que05 reveal fade-up" id="main_cont06_2_que05">
                                        <p class="fz_19 ls_p1 lh_16 medium">
                                            <span class="txt01">Q.</span><span class="txt02">미디어 관련 질문5</span>
                                        </p>
                                        
                                        <div class="main_cont06_2_btn">
                                            <div class="main_cont06_2_plus">
                                                <div class="line line01"></div>
                                                <div class="line line02"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="main_cont06_2_anw main_cont06_2_anw05">
                                        <div class="main_cont06_2_anw_box">
                                            <div class="main_cont06_2_anw_cont main_cont06_2_anw_cont01">
                                                <div class="main_cont06_2_anw_text">
                                                    <p class="txt01 fz_16 lh_16 normal">
                                                        인모드는 두가지 모드가 있으며 (Forma, MiniFx) , Forma의 경우 피부 표면 온도를 올려 진피층에 열에너지를 전달시켜 
                                                        콜라겐 생성을 유도, 주름 개선 및 탄력 강화에 도움을 줍니다. 이는 올리지오와 유사한 점이라고 할 수 있습니다. 
                                                        하지만 인모드의 MiniFx는 고주파로 인한 열에너지를 통해 피부의 콜라겐 생성을 촉진하고 전기 자극을 통해 불필요한 지방 세포를 
                                                        사멸시키는 효과가 있습니다.  따라서 인모드 시술은 올리지오와 울쎄라의 시술 효과를 모두 구현할 수 있는 장점이 있으며 
                                                        일반적으로 통증이 적기 때문에 통증에 예민하실 분들에게 시술을 추천드립니다.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>-->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="main_cont06_tab_cont main_cont06_tab_cont3" id="main_cont06_tab_cont3">
                    <div class="main_cont06_box">
                        <div class="main_cont06_img">
                            <img src="<?php echo G5_URL?>/img/main_cont06_img03.jpg" alt="">
                        </div>
                        <div class="main_cont06_text_wrap">
                            <div id="accordion_wrap" class="main_cont06_3_accordion_wrap">
                                <!-- Q - 01 -->
                                <div class="main_cont06_3_qna_wrap">
                                    <div class="main_cont06_3_que main_cont06_3_que01 reveal fade-up" id="main_cont06_3_que01">
                                        <p class="fz_19 ls_p1 lh_16 medium">
                                            <span class="txt01">Q.</span><span class="txt02">마케팅 서비스에는 무엇이 있나요?</span>
                                        </p>
                                        
                                        <div class="main_cont06_3_btn">
                                            <div class="main_cont06_3_plus">
                                                <div class="line line01"></div>
                                                <div class="line line02"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="main_cont06_3_anw main_cont06_3_anw01">
                                        <div class="main_cont06_3_anw_box">
                                            <div class="main_cont06_3_anw_cont main_cont06_3_anw_cont01">
                                                <div class="main_cont06_3_anw_text">
                                                    <p class="txt01 fz_16 lh_16 normal">
                                                        브랜드 인지도 향상 및 긍정적 이미지 소구 및 각인을 위해 블로그, SNS(인스타그램), 검색광고 등 매체 믹스를 이용한 마케팅 서비스를 제공하고 있습니다. <br>
                                                        <br>
                                                        1. 블로그 관리<br>
                                                        - 브랜드 블로그 관리 <br>
                                                        - 콘텐츠 포스팅 작성 및 노출 목적 포스팅 작성<br>
                                                        - 월별 운영 현황 보고<br>
                                                        - 의료 심의 대행<br>
                                                        <br>
                                                        2. SNS(인스타그램) 관리<br>
                                                        - SNS(인스타그램) 피드, 릴스 제작 및 업로드<br>
                                                        - 팔로워 증가 목적 이벤트 기획 및 유료 광고 집행<br>
                                                        - 월별 운영 현황 보고<br>
                                                        <br>
                                                        3. 네이버 플레이스 관리<br>
                                                        <br>
                                                        4. 검색 광고
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Q - 02 -->
                                <div class="main_cont06_3_qna_wrap">
                                    <div class="main_cont06_3_que main_cont06_3_que02 reveal fade-up" id="main_cont06_3_que02">
                                        <p class="fz_19 ls_p1 lh_16 medium">
                                            <span class="txt01">Q.</span><span class="txt02">마케팅 서비스는 어떤 과정으로 진행되나요?</span>
                                        </p>
                                        
                                        <div class="main_cont06_3_btn">
                                            <div class="main_cont06_3_plus">
                                                <div class="line line01"></div>
                                                <div class="line line02"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="main_cont06_3_anw main_cont06_3_anw02">
                                        <div class="main_cont06_3_anw_box">
                                            <div class="main_cont06_3_anw_cont main_cont06_3_anw_cont01">
                                                <div class="main_cont06_3_anw_text">
                                                    <p class="txt01 fz_16 lh_16 normal">
                                                        킥오프 미팅(매체 선정, 운영 목표, 원하는 콘셉트 등 운영을 위한 정보 수집) → 브랜드 분석(기존 운영 매체, 경쟁 브랜드 파악) → 매체 운영 기획 및 계획 수립 → 매체 운영
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Q - 03 -->
                                <div class="main_cont06_3_qna_wrap">
                                    <div class="main_cont06_3_que main_cont06_3_que03 reveal fade-up" id="main_cont06_3_que03">
                                        <p class="fz_19 ls_p1 lh_16 medium">
                                            <span class="txt01">Q.</span><span class="txt02">매체 관리 현황을 확인할 수 있나요?</span>
                                        </p>
                                        
                                        <div class="main_cont06_3_btn">
                                            <div class="main_cont06_3_plus">
                                                <div class="line line01"></div>
                                                <div class="line line02"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="main_cont06_3_anw main_cont06_3_anw03">
                                        <div class="main_cont06_3_anw_box">
                                            <div class="main_cont06_3_anw_cont main_cont06_3_anw_cont01">
                                                <div class="main_cont06_3_anw_text">
                                                    <p class="txt01 fz_16 lh_16 normal">
                                                        매체 운영에 대한 보고를 월마다 진행하며, 그 외 요청 및 문의사항은 영업일 기준 실시간 소통 가능합니다.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Q - 04 -->
                                <div class="main_cont06_3_qna_wrap">
                                    <div class="main_cont06_3_que main_cont06_3_que04 reveal fade-up" id="main_cont06_3_que04">
                                        <p class="fz_19 ls_p1 lh_16 medium">
                                            <span class="txt01">Q.</span><span class="txt02">마케팅 서비스 가격이 궁금해요.</span>
                                        </p>
                                        
                                        <div class="main_cont06_3_btn">
                                            <div class="main_cont06_3_plus">
                                                <div class="line line01"></div>
                                                <div class="line line02"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="main_cont06_3_anw main_cont06_3_anw04">
                                        <div class="main_cont06_3_anw_box">
                                            <div class="main_cont06_3_anw_cont main_cont06_3_anw_cont01">
                                                <div class="main_cont06_3_anw_text">
                                                    <p class="txt01 fz_16 lh_16 normal">
                                                        원하시는 마케팅 서비스, 계약 기간 등에 따라 비용이 달라질 수 있습니다. <br class="pc_cont_960">
                                                        상단의 'CONTACT' 메뉴 또는 '프로젝트 문의'를 클릭하신 후 매체 운영 목적, 원하는 서비스 등에 대한 상세 문의를 남겨주시면 
                                                        검토 후 빠른 시일 내에 답변드릴 수 있도록 하겠습니다.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Q - 05 -->
                                <!--<div class="main_cont06_3_qna_wrap">
                                    <div class="main_cont06_3_que main_cont06_3_que05 reveal fade-up" id="main_cont06_3_que05">
                                        <p class="fz_19 ls_p1 lh_16 medium">
                                            <span class="txt01">Q.</span><span class="txt02">마케팅 관련 질문5</span>
                                        </p>
                                        
                                        <div class="main_cont06_3_btn">
                                            <div class="main_cont06_3_plus">
                                                <div class="line line01"></div>
                                                <div class="line line02"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="main_cont06_3_anw main_cont06_3_anw05">
                                        <div class="main_cont06_3_anw_box">
                                            <div class="main_cont06_3_anw_cont main_cont06_3_anw_cont01">
                                                <div class="main_cont06_anw_text">
                                                    <p class="txt01 fz_17 lh_16 normal">
                                                        인모드는 두가지 모드가 있으며 (Forma, MiniFx) , Forma의 경우 피부 표면 온도를 올려 진피층에 열에너지를 전달시켜 
                                                        콜라겐 생성을 유도, 주름 개선 및 탄력 강화에 도움을 줍니다. 이는 올리지오와 유사한 점이라고 할 수 있습니다. 
                                                        하지만 인모드의 MiniFx는 고주파로 인한 열에너지를 통해 피부의 콜라겐 생성을 촉진하고 전기 자극을 통해 불필요한 지방 세포를 
                                                        사멸시키는 효과가 있습니다.  따라서 인모드 시술은 올리지오와 울쎄라의 시술 효과를 모두 구현할 수 있는 장점이 있으며 
                                                        일반적으로 통증이 적기 때문에 통증에 예민하실 분들에게 시술을 추천드립니다.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>-->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="main_cont06_tab_cont main_cont06_tab_cont4" id="main_cont06_tab_cont4">
                    <div class="main_cont06_box">
                        <div class="main_cont06_img">
                            <img src="<?php echo G5_URL?>/img/main_cont06_img04.jpg" alt="">
                        </div>
                        <div class="main_cont06_text_wrap">
                            <div id="accordion_wrap" class="main_cont06_4_accordion_wrap">
                                <!-- Q - 01 -->
                                <div class="main_cont06_4_qna_wrap">
                                    <div class="main_cont06_4_que main_cont06_4_que01 reveal fade-up" id="main_cont06_4_que01">
                                        <p class="fz_19 ls_p1 lh_16 medium">
                                            <span class="txt01">Q.</span><span class="txt02">SNS 관련 질문1</span>
                                        </p>
                                        
                                        <div class="main_cont06_4_btn">
                                            <div class="main_cont06_4_plus">
                                                <div class="line line01"></div>
                                                <div class="line line02"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="main_cont06_4_anw main_cont06_4_anw01">
                                        <div class="main_cont06_4_anw_box">
                                            <div class="main_cont06_4_anw_cont main_cont06_4_anw_cont01">
                                                <div class="main_cont06_4_anw_text">
                                                    <p class="txt01 fz_16 lh_16 normal">
                                                        피부 보습 관리를 철저히 하는 것이 중요합니다. 
                                                        피부의 수분 부족은 탄력을 떨어뜨리는 가장 큰 요인이기 때문입니다. 또 자외선 차단제를 반드시 바르고 비타민 A‧C가 함유된 과일이나 채소류를 
                                                        꾸준히 섭취하면 리프팅 시술의 효과를 유지하는데 도움이 됩니다.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Q - 02 -->
                                <div class="main_cont06_4_qna_wrap">
                                    <div class="main_cont06_4_que main_cont06_4_que02 reveal fade-up" id="main_cont06_4_que02">
                                        <p class="fz_19 ls_p1 lh_16 medium">
                                            <span class="txt01">Q.</span><span class="txt02">SNS 관련 질문2</span>
                                        </p>
                                        
                                        <div class="main_cont06_4_btn">
                                            <div class="main_cont06_4_plus">
                                                <div class="line line01"></div>
                                                <div class="line line02"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="main_cont06_4_anw main_cont06_4_anw02">
                                        <div class="main_cont06_4_anw_box">
                                            <div class="main_cont06_4_anw_cont main_cont06_4_anw_cont01">
                                                <div class="main_cont06_4_anw_text">
                                                    <p class="txt01 fz_16 lh_16 normal">
                                                        시술 후 1주일간은 음주‧사우나 등을 피하고, 취침 시에는 시술 부위가 눌리지 않도록 똑바로 누워서 자는 것이 좋습니다. 
                                                        또 실이 움직이거나 하는 상황을 방지하기 위해 1~2개월간 얼굴 마사지는 피하는 것이 좋습니다.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Q - 03 -->
                                <div class="main_cont06_4_qna_wrap">
                                    <div class="main_cont06_4_que main_cont06_4_que03 reveal fade-up" id="main_cont06_4_que03">
                                        <p class="fz_19 ls_p1 lh_16 medium">
                                            <span class="txt01">Q.</span><span class="txt02">SNS 관련 질문3</span>
                                        </p>
                                        
                                        <div class="main_cont06_4_btn">
                                            <div class="main_cont06_4_plus">
                                                <div class="line line01"></div>
                                                <div class="line line02"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="main_cont06_4_anw main_cont06_4_anw03">
                                        <div class="main_cont06_4_anw_box">
                                            <div class="main_cont06_4_anw_cont main_cont06_4_anw_cont01">
                                                <div class="main_cont06_4_anw_text">
                                                    <p class="txt01 fz_16 lh_16 normal">
                                                        임신 중 레이저 시술에 대해서는 일반적으로 권장되지 않습니다. 
                                                        임신 중 피부는 더욱 민감할 수 있어 레이저 시술로 인한 피부자극이 예상보다 심할 수 있고 
                                                        임신으로 인한 호르몬 변화는 레이저 치료의 효과를 예측하기 어렵게 만듭니다. 
                                                        또한 임신 기간 동안 레이저에 노출될 경우 태아에 미치는 잠재적인 영향에 대한 연구가 아직은 부족하기 때문에 일반적으로 추천되지 않습니다.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Q - 04 -->
                                <div class="main_cont06_4_qna_wrap">
                                    <div class="main_cont06_4_que main_cont06_4_que04 reveal fade-up" id="main_cont06_4_que04">
                                        <p class="fz_19 ls_p1 lh_16 medium">
                                            <span class="txt01">Q.</span><span class="txt02">SNS 관련 질문4</span>
                                        </p>
                                        
                                        <div class="main_cont06_4_btn">
                                            <div class="main_cont06_4_plus">
                                                <div class="line line01"></div>
                                                <div class="line line02"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="main_cont06_4_anw main_cont06_4_anw04">
                                        <div class="main_cont06_4_anw_box">
                                            <div class="main_cont06_4_anw_cont main_cont06_4_anw_cont01">
                                                <div class="main_cont06_4_anw_text">
                                                    <p class="txt01 fz_16 lh_16 normal">
                                                        일반적으로 울쎄라 시술 후 콜라겐이 재생되는데까지는 30~90일 정도 소요됩니다. 
                                                        그렇기 때문에  시술 후 약 1-2달 후부터 본격적인 시술 효과를 느낄 수 있으며 울쎄라 효과의 지속기간은 보통 최장 1년까지 유지됩니다. 
                                                        그 이후에는 반복된 시술을 통하여 피부탄력을 유지할 수 있습니다.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Q - 05 -->
                                <div class="main_cont06_4_qna_wrap">
                                    <div class="main_cont06_4_que main_cont06_4_que05 reveal fade-up" id="main_cont06_4_que05">
                                        <p class="fz_19 ls_p1 lh_16 medium">
                                            <span class="txt01">Q.</span><span class="txt02">SNS 관련 질문5</span>
                                        </p>
                                        
                                        <div class="main_cont06_4_btn">
                                            <div class="main_cont06_4_plus">
                                                <div class="line line01"></div>
                                                <div class="line line02"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="main_cont06_4_anw main_cont06_4_anw05">
                                        <div class="main_cont06_4_anw_box">
                                            <div class="main_cont06_4_anw_cont main_cont06_4_anw_cont01">
                                                <div class="main_cont06_anw_text">
                                                    <p class="txt01 fz_17 lh_16 normal">
                                                        인모드는 두가지 모드가 있으며 (Forma, MiniFx) , Forma의 경우 피부 표면 온도를 올려 진피층에 열에너지를 전달시켜 
                                                        콜라겐 생성을 유도, 주름 개선 및 탄력 강화에 도움을 줍니다. 이는 올리지오와 유사한 점이라고 할 수 있습니다. 
                                                        하지만 인모드의 MiniFx는 고주파로 인한 열에너지를 통해 피부의 콜라겐 생성을 촉진하고 전기 자극을 통해 불필요한 지방 세포를 
                                                        사멸시키는 효과가 있습니다.  따라서 인모드 시술은 올리지오와 울쎄라의 시술 효과를 모두 구현할 수 있는 장점이 있으며 
                                                        일반적으로 통증이 적기 때문에 통증에 예민하실 분들에게 시술을 추천드립니다.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
        
    </main>
    
<?php
include_once(G5_PATH.'/tail.php');
?>
<script>
    function main_cont04_video_play(main_cont04_video_bg_id, main_cont04_video_bg_id_pause, main_cont04_video_id) {
        var player_bg_id = document.getElementById(main_cont04_video_bg_id);
        var player_bg_id_pause = document.getElementById(main_cont04_video_bg_id_pause);
        var player_id = document.getElementById(main_cont04_video_id);
        var player = new Vimeo.Player(player_id);
        player.play();
        player_bg_id.classList.add('play');
        player_bg_id_pause.classList.add('play');
    }
    function main_cont04_video_play_pause(main_cont04_video_bg_id, main_cont04_video_bg_id_pause, main_cont04_video_id) {
        var player_bg_id = document.getElementById(main_cont04_video_bg_id);
        var player_bg_id_pause = document.getElementById(main_cont04_video_bg_id_pause);
        var player_id = document.getElementById(main_cont04_video_id);
        var player = new Vimeo.Player(player_id);
        player.pause();
        player_bg_id.classList.remove('play');
        player_bg_id_pause.classList.remove('play');
    }
    
    function opensubtab(evt, tabName) {
        var i, tabcontent2, tablinks2;
        tabcontent2 = document.getElementsByClassName("main_cont06_tab_cont");
        for (i = 0; i < tabcontent2.length; i++) {
          tabcontent2[i].style.display = "none";
        }
        tablinks2 = document.getElementsByClassName("main_cont06_tab_li");
        for (i = 0; i < tablinks2.length; i++) {
          tablinks2[i].className = tablinks2[i].className.replace(" active", "");
        }
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
        
        ScrollTrigger.refresh();
    }
    
    /* main_cont06_1 QnA */
    $(".main_cont06_1_anw").hide();
    //$(".main_cont06_1_anw01").show();
    $(".main_cont06_1_que").click(function(){
        $(this).next().slideToggle(300);
        $(this).next().toggleClass('on');
        $(this).stop().toggleClass('on');
        
        $(".main_cont06_1_que").not(this).next().slideUp(300);
        $(".main_cont06_1_que").not(this).stop().removeClass('on');
        
        return false;
    });
    /* main_cont06_2 QnA */
    $(".main_cont06_2_anw").hide();
    //$(".main_cont06_2_anw01").show();
    $(".main_cont06_2_que").click(function(){
        $(this).next().slideToggle(300);
        $(this).next().toggleClass('on');
        $(this).stop().toggleClass('on');
        
        $(".main_cont06_2_que").not(this).next().slideUp(300);
        $(".main_cont06_2_que").not(this).stop().removeClass('on');
        
        return false;
    });
    /* main_cont06_3 QnA */
    $(".main_cont06_3_anw").hide();
    //$(".main_cont06_3_anw01").show();
    $(".main_cont06_3_que").click(function(){
        $(this).next().slideToggle(300);
        $(this).next().toggleClass('on');
        $(this).stop().toggleClass('on');
        
        $(".main_cont06_3_que").not(this).next().slideUp(300);
        $(".main_cont06_3_que").not(this).stop().removeClass('on');
        
        return false;
    });
    /* main_cont06_4 QnA */
//    $(".main_cont06_4_anw").hide();
//    //$(".main_cont06_4_anw01").show();
//    $(".main_cont06_4_que").click(function(){
//        $(this).next().slideToggle(300);
//        $(this).next().toggleClass('on');
//        $(this).stop().toggleClass('on');
//        
//        $(".main_cont06_4_que").not(this).next().slideUp(300);
//        $(".main_cont06_4_que").not(this).stop().removeClass('on');
//        
//        return false;
//    });
</script>