<?php
include_once('./_common.php');

if (!defined('_INDEX_')) define('_INDEX_', true);
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

//if (G5_IS_MOBILE) {
//    include_once(G5_THEME_MOBILE_PATH.'/index.php');
//    return;
//}

include_once(G5_PATH.'/head.php');
?>

<main id="content">
    
    <article class="main_top_view" id="startContent">
        <div class="swiper-container main_top_view_swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="main_top_view_slide main_top_view_slide01">
                        <div class="main_top_view_slide01_cont01 pc_cont_480"></div>
                        <div class="main_top_view_slide01_cont02 pc_cont_480"></div>
                        <div class="main_top_view_slide01_cont01 m_cont_480"></div>
                        <div class="main_top_view_slide_text ta_c">
                            <h1 class="text_row fz_50 lh_13 nanummyeongjo normal m_40">
                                <span class="c-blue-t">연세대출신 2인 전문의</span> 
                                <span>대표원장 직접진료</span>
                            </h1>
                            <p class="text_row fz_22 lh_14 light">
                                <span>풍부한 경험을 지닌 <span class="medium">보건복지부 인증 치과전문의</span></span> 
                                <span>대표원장 2인의 협진으로 차별화된 진료 서비스를 제공합니다.</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="main_top_view_slide main_top_view_slide02">
                        <div class="main_top_view_slide02_cont01 pc_cont_480"></div>
                        <div class="main_top_view_slide02_cont01 m_cont_480"></div>
                        <div class="main_top_view_slide_text ta_c pc_cont_480">
                            <h1 class="text_row fz_45 lh_13 nanummyeongjo normal m_20">
                                <span><span class="c-blue-t">시작과 끝</span>이 같은 치과</span>
                                <span><span class="c-blue-t">상록구 유일</span>의 교정과 전문의 대표원장</span>
                            </h1>
                            <p class="text_row fz_17 lh_14 light m_20">
                                <span>안산 연세세브란스치과는 진단부터 사후까지 교정과 전문의 대표원장이 책임진료하며,</span> 
                                <span>치료도중 의료진이 바뀌지 않습니다. <span class="medium">대표원장 책임 교정으로 10년 후에도 사후관리를 약속합니다.</span></span>
                            </p>
                            <div class="main_top_view_slide02_logo">
                                <img src="<?php echo G5_THEME_URL?>/img/main_top_view_slide_img02_logo.png" alt="연세대 & 보건복지부 로고">
                            </div>
                        </div>
                        <div class="main_top_view_slide_text ta_c m_cont_480">
                            <h1 class="text_row fz_45 lh_13 nanummyeongjo normal m_20">
                                <span><span class="c-blue-t">시작과 끝</span>이 같은 치과</span>
                                <span><span class="c-blue-t">상록구 유일</span>의 교정과</span>
                                <span>전문의 대표원장</span>
                            </h1>
                            <div class="main_top_view_slide02_logo">
                                <img src="<?php echo G5_THEME_URL?>/img/main_top_view_slide_img02_logo_m.png" alt="연세대 & 보건복지부 로고">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="main_top_view_slide main_top_view_slide03">
                        <div class="main_top_view_slide_text ta_c pc_cont_480">
                            <div class="main_top_view_slide03_logo m_20">
                                <img src="<?php echo G5_THEME_URL?>/img/main_top_view_slide_img03_logo.png" alt="연세대 & 보건복지부 로고">
                            </div>
                            <p class="text_row slide03_text_row fz_30 lh_1 normal m_20">
                                <span>1000 증례 이상 보유</span>
                            </p>
                            <h1 class="text_row fz_45 lh_13 nanummyeongjo normal">
                                <span class="c-beige-t">풍부한 임상경험과 다년간의 노하우</span> 
                                <span>치과교정과전문의 박진이 대표원장의</span> 
                                <span>자신있는 교정치료</span>
                            </h1>
                        </div>
                        <div class="main_top_view_slide_text ta_c m_cont_480">
                            <div class="main_top_view_slide03_logo m_20">
                                <img src="<?php echo G5_THEME_URL?>/img/main_top_view_slide_img03_logo_m.png" alt="연세대 & 보건복지부 로고">
                            </div>
                            <p class="text_row slide03_text_row fz_30 lh_1 normal m_20">
                                <span>1000 증례 이상 보유</span>
                            </p>
                            <h1 class="text_row fz_45 lh_13 nanummyeongjo normal">
                                <span class="c-beige-t">풍부한 임상경험과</span> 
                                <span class="c-beige-t">다년간의 노하우</span> 
                                <span>치과교정과전문의 박진이</span> 
                                <span>대표원장의 자신있는</span> 
                                <span>교정치료</span>
                            </h1>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="main_top_view_slide main_top_view_slide04">
                        <div class="main_top_view_slide_text pc_cont_480">
                            <h1 class="text_row normal m_20">
                                <span class="fz_48 lh_13"><span><img class="slide04_logo" src="<?php echo G5_THEME_URL?>/img/main_top_view_slide_img04_logo.png" alt="그것이 알고싶다 로고"></span> 자문의 출연</span> 
                                <span class="fz_45 lh_1"><span class="fz_70 lh_12 bold">박진이</span> 대표원장</span>
                            </h1>
                            <div class="main_top_view_slide_img04_cont01 m_20">
                                <img src="<?php echo G5_THEME_URL?>/img/main_top_view_slide_img04_cont01.png" alt="그것이 알고싶다 출연 이미지">
                            </div>
                            <div class="main_top_view_slide_img04_text flex_row sb al_fs">
                                <p class="text_row fz_20 lh_14 ls_2 light">
                                    <span>구강구조에 대해 잘 아는 박진이 대표원장이 출연하여</span>
                                    <span>자문 인터뷰를 진행하였습니다.</span>
                                </p>
                                <p class="text_row fz_18 lh_14 ls_2 normal">
                                    <span>&lt;그것이 알고싶다 1242회 방송&gt;</span>
                                </p>
                            </div>
                        </div>
                        <div class="main_top_view_slide_text ta_c m_cont_480">
                            <h1 class="text_row normal m_30">
                                <span class="fz_48 lh_13"><span><img class="slide04_logo" src="<?php echo G5_THEME_URL?>/img/main_top_view_slide_img04_logo_m.png" alt="그것이 알고싶다 로고"></span> 자문의 출연</span> 
                                <span class="fz_45 lh_1"><span class="fz_70 lh_12 bold">박진이</span> 대표원장</span>
                            </h1>
                            <div class="main_top_view_slide_img04_cont01 m_30">
                                <img src="<?php echo G5_THEME_URL?>/img/main_top_view_slide_img04_cont01_m.png" alt="그것이 알고싶다 출연 이미지">
                            </div>
                            <div class="main_top_view_slide_img04_text flex_row fw jc_center al_fs">
                                <p class="text_row fz_24 lh_14 ls_2 normal m_10">
                                    <span>&lt;그것이 알고싶다 1242회 방송&gt;</span>
                                </p>
                                <p class="text_row fz_22 lh_14 ls_2 light">
                                    <span>구강구조에 대해 잘 아는 박진이 대표원장이 출연하여</span>
                                    <span>자문 인터뷰를 진행하였습니다.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="main_top_view_slide main_top_view_slide05">
                        <div class="main_top_view_slide_text ta_c pc_cont_480">
                            <h1 class="text_row fz_48 lh_13 nanummyeongjo normal m_40">
                                <span class="c-blue-t">과잉진료 없이 정직한 치과</span> 
                                <span>안산 연세세브란스 치과</span>
                            </h1>
                            <p class="text_row fz_20 lh_14 light">
                                <span>자연치아를 예방·보존하는 치료를 우선으로 하며,</span>
                                <span>진단부터 사후관리까지 대표원장이 1:1 책임진료 합니다.</span>
                            </p>
                        </div>
                        <div class="main_top_view_slide_text ta_c m_cont_480">
                            <h1 class="text_row fz_48 lh_13 nanummyeongjo normal m_40">
                                <span class="c-blue-t">과잉진료 없이</span> 
                                <span class="c-blue-t">정직한 치과</span> 
                                <span>안산 연세세브란스 치과</span>
                            </h1>
                        </div>
                        <div class="main_top_view_slide_img05_cont01 m_cont_480">
                            <img src="<?php echo G5_THEME_URL?>/img/main_top_view_slide_img05_cont01.png" alt="치과보존과전문의 이상희 대표원장">
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="main_top_view_slide main_top_view_slide06">
                        <div class="main_top_view_slide_text ta_c pc_cont_480">
                            <h1 class="text_row fz_50 lh_13 nanummyeongjo normal m_10">
                                <span><span class="c-beige-t">대학병원 수준</span>의 고품격 치과</span>
                            </h1>
                            <p class="text_row fz_20 lh_14 light m_40">
                                <span>세브란스 치과대학병원의 우수한 진료 시스템을 안산에서도 경험해보세요.</span>
                            </p>
                            <div class="main_top_view_slide_img06_cont01">
                                <img src="<?php echo G5_THEME_URL?>/img/main_top_view_slide_img06_cont01.png" alt="진료 시스템 이미지">
                            </div>
                        </div>
                        <div class="main_top_view_slide_text ta_c m_cont_480">
                            <h1 class="text_row fz_50 lh_13 nanummyeongjo normal m_20">
                                <span><span class="c-beige-t">대학병원 수준</span>의</span>
                                <span>고품격 치과</span>
                            </h1>
                            <p class="text_row fz_22 lh_14 light m_40">
                                <span>세브란스 치과대학병원의 우수한</span>
                                <span>진료 시스템을 안산에서도 경험해보세요.</span>
                            </p>
                            <div class="main_top_view_slide_img06_cont01">
                                <img src="<?php echo G5_THEME_URL?>/img/main_top_view_slide_img06_cont01_m.png" alt="진료 시스템 이미지">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="main_top_view_slide main_top_view_slide07">
                        <div class="main_top_view_slide_text ta_c pc_cont_480">
                            <h1 class="text_row fz_45 lh_13 nanummyeongjo normal m_10">
                                <span>연세 세브란스치과만의</span>
                                <span class="c-blue-t">남다른 의료진 실력</span>
                            </h1>
                            <p class="text_row fz_20 lh_14 light m_40">
                                <span>치아의 수명을 결정하는 치과선택의 기준</span>
                                <span><span class="medium">초진부터 수술까지 치과보존과 전문의 대표원장이 직접</span> 진료합니다.</span>
                            </p>
                            <div class="main_top_view_slide_img07_cont01">
                                <img src="<?php echo G5_THEME_URL?>/img/main_top_view_slide_img07_cont01.png" alt="논문&학회자료">
                            </div>
                        </div>
                        <div class="main_top_view_slide_text ta_c m_cont_480">
                            <h1 class="text_row fz_50 lh_13 nanummyeongjo normal m_10">
                                <span>연세 세브란스치과만의</span>
                                <span class="c-blue-t">남다른 의료진 실력</span>
                            </h1>
                            <p class="text_row fz_22 lh_14 light m_40">
                                <span>치아의 수명을 결정하는 치과선택의 기준</span>
                                <span><span class="medium">초진부터 수술까지 치과보존과 전문의</span></span>
                                <span><span class="medium">대표원장이 직접</span> 진료합니다.</span>
                            </p>
                            <div class="main_top_view_slide_img07_cont01">
                                <img src="<?php echo G5_THEME_URL?>/img/main_top_view_slide_img07_cont01_m.png" alt="논문&학회자료">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </article>
    
    <article class="main_cont02 pd_160" id="main_cont02">
        <div class="main_cont02_wrap flex_row fw sb center">
            <div class="main_cont02_text_wrap">
                <div class="main_cont02_text_box ta_l">
                    <div class="main_cont02_text m_60">
                        <p class="main_cont02_text01 fz_25 c-blue sortsmillgoudy m_20 gs_reveal">Speciality</p>
                        <p class="main_cont02_text02 fz_37 nanummyeongjo light m_20 gs_reveal" data-gs-delay="300">
                            <span class="c-blue normal">의료진의 전문성</span>이 <br>
                            결과의 차이를 만듭니다
                        </p>
                        <p class="main_cont02_text03 c-gray fz_17 light gs_reveal" data-gs-delay="600">
                            연세대학교 치과 대학 수석 졸업, <br>
                            외래교수 출신의 전문의 2인 협진 진료
                        </p>
                    </div>
                    <div class="main_cont02_text_arrow m_50">
                        <a href="<?php echo G5_THEME_URL?>/sub/sub1_2.php">
                            <img src="<?php echo G5_THEME_URL?>/img/arrow_long.png" alt="" title="" class="arrow_long_btn">
                        </a>
                    </div>
                    <div class="main_cont02_text_img">
                        <img src="<?php echo G5_THEME_URL?>/img/main_cont02_img02.png" alt="논문&학회자료">
                    </div>
                </div>
            </div>
            <div class="main_cont02_img_wrap">
                <img src="<?php echo G5_THEME_URL?>/img/main_cont02_img01.jpg" alt="">
                
                <div class="main_cont02_doctor main_cont02_doctor01 open-on-hover">
                    <a href="<?php echo G5_THEME_URL?>/sub/sub1_2.php">
                        <div class="main_cont02_doctor_text main_cont02_doctor_text01 c-b ta_c">
                            <p class="fz_17 lh_14 medium">임플란트/치아보존</p>
                            <p class="fz_30 lh_14 normal">이 상 희 <span class="fz_15">대표원장</span></p>
                        </div>
                        <div class="main_cont02_doctor_text_hover main_cont02_doctor_text01_hover open-on-hover-list c-w ta_c">
                            <p class="medium fz_20 m_20">임플란트/보존치료</p>
                            <p class="light fz_22 lh_12">
                                “다년간의 임상경험과 노하우로 <br>
                                최대한 자연치아를 살리겠습니다”
                            </p>
                        </div>
                    </a>
                </div>
                <div class="main_cont02_doctor main_cont02_doctor02 open-on-hover">
                    <a href="<?php echo G5_THEME_URL?>/sub/sub1_2.php">
                        <div class="main_cont02_doctor_text main_cont02_doctor_text02 c-b ta_c">
                            <p class="fz_17 lh_14 medium">치아교정/일반진료</p>
                            <p class="fz_30 lh_14 normal">박 진 이 <span class="fz_15">대표원장</span></p>
                        </div>
                        <div class="main_cont02_doctor_text_hover main_cont02_doctor_text02_hover open-on-hover-list c-w ta_c">
                            <p class="medium fz_20 m_20">치아교정/일반진료</p>
                            <p class="light fz_22 lh_12">
                                “진료 처음부터 끝까지 <br>
                                함께 하겠습니다.”
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </article>
    
    <article class="main_cont03" id="main_cont03">
        <div class="main_cont03_wrap p_r">
            <div class="main_cont03_video pc_cont">
                <video id="main_cont03_video" style="position:relative; width: 100%; height: 100%;" width="100%" height="100%" poster="<?php echo G5_THEME_URL?>/img/main_cont03_video_bg.jpg" preload="none" autoplay loop muted playsinline webkit-playsinline>
                    <source type="video/mp4" src="<?php echo G5_THEME_URL?>/video/main_cont03_video01.mp4" />
                </video>
            </div>
            <div class="main_cont03_bg m_cont">
                <img src="<?php echo G5_THEME_URL?>/img/main_cont03_video_bg.jpg" alt="">
            </div>
            
            <div class="main_cont03_box">
                <p class="main_cont03_text fz_25 c-blue sortsmillgoudy">Check Point</p>
                <div class="swiper-container main_cont03_swiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="main_cont03_slide main_cont03_slide01 m_40">
                                <p class="fz_35 lh_12 nanummyeongjo normal m_20">
                                    바른 진료 <br>
                                    정직한 진료
                                </p>
                                <p class="fz_17 lh_12 light pc_cont_434">
                                    자연치아를 최대한 살리는 치료 <br>
                                    과잉진료 없이 바르게, 정직하게 진료합니다.
                                </p>
                                <p class="fz_17 lh_12 light m_cont_434">
                                    자연치아를 최대한 살리는 치료 
                                    과잉진료 없이 바르게, 정직하게 진료합니다.
                                </p>
                            </div>
                            <!--
                            <div class="main_cont03_arrow">
                                <a href="<?php echo G5_THEME_URL?>/sub/sub1_1.php">
                                    <img src="<?php echo G5_THEME_URL?>/img/arrow_long.png" alt="" title="" class="arrow_long_btn">
                                </a>
                            </div>
                            -->
                        </div>
                        <div class="swiper-slide">
                            <div class="main_cont03_slide main_cont03_slide02 m_40">
                                <p class="fz_35 lh_12 nanummyeongjo normal m_20">
                                    10년 후에도 <br>
                                    사후관리 보증
                                </p>
                                <p class="fz_17 lh_12 light pc_cont_434">
                                    치과교정과 전문의가 직접 상담부터 <br>
                                    치료 끝까지 책임 진료하며, 교정치료 중 <br>
                                    의료진이 바뀌지 않습니다.
                                </p>
                                <p class="fz_17 lh_12 light m_cont_434">
                                    치과교정과 전문의가 직접 상담부터 
                                    치료 끝까지 책임 진료하며, 교정치료 중 
                                    의료진이 바뀌지 않습니다.
                                </p>
                            </div>
                            <!--
                            <div class="main_cont03_arrow">
                                <a href="<?php echo G5_THEME_URL?>/sub/sub1_1.php">
                                    <img src="<?php echo G5_THEME_URL?>/img/arrow_long.png" alt="" title="" class="arrow_long_btn">
                                </a>
                            </div>
                            -->
                        </div>
                        <div class="swiper-slide">
                            <div class="main_cont03_slide main_cont03_slide03 m_40">
                                <p class="fz_35 lh_12 nanummyeongjo normal m_20">
                                    합리적인 비용과 <br>
                                    분납 시스템
                                </p>
                                <p class="fz_17 lh_12 light pc_cont_434">
                                    국내 메이저 병원 출신 전문의 진료를 <br>
                                    합리적인 가격과 분납 시스템으로 부담 없이 <br>
                                    받아볼 수 있습니다.
                                </p>
                                <p class="fz_17 lh_12 light m_cont_434">
                                    국내 메이저 병원 출신 전문의 진료를 
                                    합리적인 가격과 분납 시스템으로 부담 없이 
                                    받아볼 수 있습니다.
                                </p>
                            </div>
                            <!--
                            <div class="main_cont03_arrow">
                                <a href="<?php echo G5_THEME_URL?>/sub/sub1_1.php">
                                    <img src="<?php echo G5_THEME_URL?>/img/arrow_long.png" alt="" title="" class="arrow_long_btn">
                                </a>
                            </div>
                            -->
                        </div>
                        <div class="swiper-slide">
                            <div class="main_cont03_slide main_cont03_slide04 m_40">
                                <p class="fz_35 lh_12 nanummyeongjo normal m_20">
                                    철저한 멸균소독 <br>
                                    감염예방 클린 시스템
                                </p>
                                <p class="fz_17 lh_12 light pc_cont_434">
                                    환자별로 모든 진료 기구 개별 소독 및 포장하고 <br>
                                    깨끗한 정수 시스템을 도입하여 환자분의 위생 안전까지 <br>
                                    관리합니다.
                                </p>
                                <p class="fz_17 lh_12 light m_cont_434">
                                    환자별로 모든 진료 기구 개별 소독 및 포장하고 
                                    깨끗한 정수 시스템을 도입하여 환자분의 위생 안전까지 
                                    관리합니다.
                                </p>
                            </div>
                            <!--
                            <div class="main_cont03_arrow">
                                <a href="<?php echo G5_THEME_URL?>/sub/sub1_1.php">
                                    <img src="<?php echo G5_THEME_URL?>/img/arrow_long.png" alt="" title="" class="arrow_long_btn">
                                </a>
                            </div>
                            -->
                        </div>
                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                    <div class="main_cont03_arrow">
                        <a href="<?php echo G5_THEME_URL?>/sub/sub1_1.php">
                            <img src="<?php echo G5_THEME_URL?>/img/arrow_long.png" alt="" title="" class="arrow_long_btn">
                        </a>
                    </div>
                </div>
                <div class="main_cont03_pagination"></div>
            </div>
        </div>
    </article>
    
    <article class="main_cont04 pd_60 pt_200" id="main_cont04">
        <div class="main_cont04_wrap flex_row fw jc_fs center">
            <div class="main_cont04_text m_60">
                <p class="main_cont04_text01 fz_45 lh_12 c-blue2 sortsmillgoudy m_20 gs_reveal">Before & After</p>
                <p class="main_cont04_text02 fz_18 lh_12 c-gray2 light gs_reveal" data-gs-delay="300">
                    다양한 임상경험이 의료인의 실력을 보증합니다. <br>
                    실제 치료 사례를 확인해 보세요.
                </p>
            </div>
            <div class="main_cont04_tab">
                <ul class="main_cont04_tab_ul flex_row fw jc_fs center">
                    <li class="tablinks tablinks01 active c-gray" id="tabbtn01">
                        <a href="#tabcontent01"><p class="fz_16 lh_1">치아교정</p></a>
                    </li>
                    <li class="tablinks tablinks02 c-gray" id="tabbtn02">
                        <a href="#tabcontent02"><p class="fz_16 lh_1">임플란트</p></a>
                    </li>
                    <li class="tablinks tablinks03 c-gray" id="tabbtn03">
                        <a href="#tabcontent03"><p class="fz_16 lh_1">자연치아 살리기</p></a>
                    </li>
                    <li class="tablinks tablinks04 c-gray" id="tabbtn04">
                        <a href="#tabcontent04"><p class="fz_16 lh_1">일반진료</p></a>
                    </li>
                </ul>
            </div>
            <!-- 비포&애프터 PC -->
            <div class="main_cont04_tabcontent_wrap pc_cont">
                <div class="tabcontent tabcontent01" id="tabcontent01">
                    <div class="swiper-container main_cont04_swiper m_80">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide main_cont04_slide_box">
                                <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery&wr_id=8">
                                    <div class="main_cont04_slide main_cont04_slide01">
                                        <div class="prs-before-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide01_1_1.jpg" alt="before">
                                            <span class="after-month fz_20">before</span>
                                        </div>
										<div class="prs-after-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide01_1_2.jpg" alt="after">
                                            <span class="after-month fz_20">after</span>
                                            <p class="prs-after-text ls_2 fz_18 c-w normal ta_c">
                                                로그인 후 <br>
                                                확인 가능합니다.
                                            </p>
                                            <p class="prs-after-text ls_2 fz_18 c-w normal ta_c">
                                                로그인 후 <br>
                                                확인 가능합니다.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide main_cont04_slide_box act">
                                <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery&wr_id=7">
                                    <div class="main_cont04_slide main_cont04_slide02">
                                        <div class="prs-before-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide01_2_1.jpg" alt="before">
                                            <span class="after-month fz_20">before</span>
                                        </div>
										<div class="prs-after-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide01_2_2.jpg" alt="after">
                                            <span class="after-month fz_20">after</span>
                                            <p class="prs-after-text ls_2 fz_18 c-w normal ta_c">
                                                로그인 후 <br>
                                                확인 가능합니다.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide main_cont04_slide_box">
                                <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery&wr_id=8">
                                    <div class="main_cont04_slide main_cont04_slide03">
                                        <div class="prs-before-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide01_1_1.jpg" alt="before">
                                            <span class="after-month fz_20">before</span>
                                        </div>
										<div class="prs-after-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide01_1_2.jpg" alt="after">
                                            <span class="after-month fz_20">after</span>
                                            <p class="prs-after-text ls_2 fz_18 c-w normal ta_c">
                                                로그인 후 <br>
                                                확인 가능합니다.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide main_cont04_slide_box act">
                                <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery&wr_id=7">
                                    <div class="main_cont04_slide main_cont04_slide04">
                                        <div class="prs-before-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide01_2_1.jpg" alt="before">
                                            <span class="after-month fz_20">before</span>
                                        </div>
										<div class="prs-after-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide01_2_2.jpg" alt="after">
                                            <span class="after-month fz_20">after</span>
                                            <p class="prs-after-text ls_2 fz_18 c-w normal ta_c">
                                                로그인 후 <br>
                                                확인 가능합니다.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="main_cont04_arrow">
                        <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery">
                            <img src="<?php echo G5_THEME_URL?>/img/arrow_long.png" alt="" title="" class="arrow_long_btn">
                        </a>
                    </div>
                </div>
                <div class="tabcontent tabcontent02" id="tabcontent02">
                    <div class="swiper-container main_cont04_swiper m_80">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide main_cont04_slide_box">
                                <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery&wr_id=8">
                                    <div class="main_cont04_slide main_cont04_slide01">
                                        <div class="prs-before-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide02_1_1.jpg" alt="before">
                                            <span class="after-month fz_20">before</span>
                                        </div>
										<div class="prs-after-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide02_1_2.jpg" alt="after">
                                            <span class="after-month fz_20">after</span>
                                            <p class="prs-after-text ls_2 fz_18 c-w normal ta_c">
                                                로그인 후 <br>
                                                확인 가능합니다.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide main_cont04_slide_box act">
                                <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery&wr_id=7">
                                    <div class="main_cont04_slide main_cont04_slide02">
                                        <div class="prs-before-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide02_2_1.jpg" alt="before">
                                            <span class="after-month fz_20">before</span>
                                        </div>
										<div class="prs-after-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide02_2_2.jpg" alt="after">
                                            <span class="after-month fz_20">after</span>
                                            <p class="prs-after-text ls_2 fz_18 c-w normal ta_c">
                                                로그인 후 <br>
                                                확인 가능합니다.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide main_cont04_slide_box">
                                <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery&wr_id=8">
                                    <div class="main_cont04_slide main_cont04_slide03">
                                        <div class="prs-before-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide02_1_1.jpg" alt="before">
                                            <span class="after-month fz_20">before</span>
                                        </div>
										<div class="prs-after-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide02_1_2.jpg" alt="after">
                                            <span class="after-month fz_20">after</span>
                                            <p class="prs-after-text ls_2 fz_18 c-w normal ta_c">
                                                로그인 후 <br>
                                                확인 가능합니다.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide main_cont04_slide_box act">
                                <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery&wr_id=7">
                                    <div class="main_cont04_slide main_cont04_slide04">
                                        <div class="prs-before-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide02_2_1.jpg" alt="before">
                                            <span class="after-month fz_20">before</span>
                                        </div>
										<div class="prs-after-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide02_2_2.jpg" alt="after">
                                            <span class="after-month fz_20">after</span>
                                            <p class="prs-after-text ls_2 fz_18 c-w normal ta_c">
                                                로그인 후 <br>
                                                확인 가능합니다.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="main_cont04_arrow">
                        <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery">
                            <img src="<?php echo G5_THEME_URL?>/img/arrow_long.png" alt="" title="" class="arrow_long_btn">
                        </a>
                    </div>
                </div>
                <div class="tabcontent tabcontent03" id="tabcontent03">
                    <div class="swiper-container main_cont04_swiper m_80">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide main_cont04_slide_box">
                                <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery&wr_id=8">
                                    <div class="main_cont04_slide main_cont04_slide01">
                                        <div class="prs-before-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide03_1_1.jpg" alt="before">
                                            <span class="after-month fz_20">before</span>
                                        </div>
										<div class="prs-after-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide03_1_2.jpg" alt="after">
                                            <span class="after-month fz_20">after</span>
                                            <p class="prs-after-text ls_2 fz_18 c-w normal ta_c">
                                                로그인 후 <br>
                                                확인 가능합니다.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide main_cont04_slide_box act">
                                <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery&wr_id=7">
                                    <div class="main_cont04_slide main_cont04_slide02">
                                        <div class="prs-before-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide03_2_1.jpg" alt="before">
                                            <span class="after-month fz_20">before</span>
                                        </div>
										<div class="prs-after-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide03_2_2.jpg" alt="after">
                                            <span class="after-month fz_20">after</span>
                                            <p class="prs-after-text ls_2 fz_18 c-w normal ta_c">
                                                로그인 후 <br>
                                                확인 가능합니다.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide main_cont04_slide_box">
                                <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery&wr_id=8">
                                    <div class="main_cont04_slide main_cont04_slide03">
                                        <div class="prs-before-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide03_1_1.jpg" alt="before">
                                            <span class="after-month fz_20">before</span>
                                        </div>
										<div class="prs-after-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide03_1_2.jpg" alt="after">
                                            <span class="after-month fz_20">after</span>
                                            <p class="prs-after-text ls_2 fz_18 c-w normal ta_c">
                                                로그인 후 <br>
                                                확인 가능합니다.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide main_cont04_slide_box act">
                                <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery&wr_id=7">
                                    <div class="main_cont04_slide main_cont04_slide04">
                                        <div class="prs-before-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide03_2_1.jpg" alt="before">
                                            <span class="after-month fz_20">before</span>
                                        </div>
										<div class="prs-after-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide03_2_2.jpg" alt="after">
                                            <span class="after-month fz_20">after</span>
                                            <p class="prs-after-text ls_2 fz_18 c-w normal ta_c">
                                                로그인 후 <br>
                                                확인 가능합니다.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="main_cont04_arrow">
                        <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery">
                            <img src="<?php echo G5_THEME_URL?>/img/arrow_long.png" alt="" title="" class="arrow_long_btn">
                        </a>
                    </div>
                </div>
                <div class="tabcontent tabcontent04" id="tabcontent04">
                    <div class="swiper-container main_cont04_swiper m_80">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide main_cont04_slide_box">
                                <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery&wr_id=8">
                                    <div class="main_cont04_slide main_cont04_slide01">
                                        <div class="prs-before-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide04_1_1.jpg" alt="before">
                                            <span class="after-month fz_20">before</span>
                                        </div>
										<div class="prs-after-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide04_1_2.jpg" alt="after">
                                            <span class="after-month fz_20">after</span>
                                            <p class="prs-after-text ls_2 fz_18 c-w normal ta_c">
                                                로그인 후 <br>
                                                확인 가능합니다.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide main_cont04_slide_box act">
                                <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery&wr_id=7">
                                    <div class="main_cont04_slide main_cont04_slide02">
                                        <div class="prs-before-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide04_2_1.jpg" alt="before">
                                            <span class="after-month fz_20">before</span>
                                        </div>
										<div class="prs-after-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide04_2_2.jpg" alt="after">
                                            <span class="after-month fz_20">after</span>
                                            <p class="prs-after-text ls_2 fz_18 c-w normal ta_c">
                                                로그인 후 <br>
                                                확인 가능합니다.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide main_cont04_slide_box">
                                <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery&wr_id=8">
                                    <div class="main_cont04_slide main_cont04_slide03">
                                        <div class="prs-before-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide04_1_1.jpg" alt="before">
                                            <span class="after-month fz_20">before</span>
                                        </div>
										<div class="prs-after-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide04_1_2.jpg" alt="after">
                                            <span class="after-month fz_20">after</span>
                                            <p class="prs-after-text ls_2 fz_18 c-w normal ta_c">
                                                로그인 후 <br>
                                                확인 가능합니다.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide main_cont04_slide_box act">
                                <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery&wr_id=7">
                                    <div class="main_cont04_slide main_cont04_slide04">
                                        <div class="prs-before-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide04_2_1.jpg" alt="before">
                                            <span class="after-month fz_20">before</span>
                                        </div>
										<div class="prs-after-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide04_2_2.jpg" alt="after">
                                            <span class="after-month fz_20">after</span>
                                            <p class="prs-after-text ls_2 fz_18 c-w normal ta_c">
                                                로그인 후 <br>
                                                확인 가능합니다.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="main_cont04_arrow">
                        <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery">
                            <img src="<?php echo G5_THEME_URL?>/img/arrow_long.png" alt="" title="" class="arrow_long_btn">
                        </a>
                    </div>
                </div>
            </div>
            <!-- //비포&애프터 PC -->
            
            <!-- 비포&애프터 모바일 -->
            <div class="main_cont04_tabcontent_wrap m_cont">
                <div class="tabcontent tabcontent01" id="tabcontent01">
                    <div class="swiper-container main_cont04_swiper m_80">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide main_cont04_slide_box">
                                <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery&wr_id=8">
                                    <div class="main_cont04_slide main_cont04_slide01">
                                        <div class="prs-before-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide01_1_1.jpg" alt="before">
                                            <span class="after-month fz_20">before</span>
                                        </div>
										<div class="prs-after-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide01_1_2.jpg" alt="after">
                                            <span class="after-month fz_20">after</span>
                                            <p class="prs-after-text ls_2 fz_18 c-w normal ta_c">
                                                로그인 후 <br>
                                                확인 가능합니다.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                                <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery&wr_id=7">
                                    <div class="main_cont04_slide main_cont04_slide02">
                                        <div class="prs-before-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide01_2_1.jpg" alt="before">
                                            <span class="after-month fz_20">before</span>
                                        </div>
										<div class="prs-after-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide01_2_2.jpg" alt="after">
                                            <span class="after-month fz_20">after</span>
                                            <p class="prs-after-text ls_2 fz_18 c-w normal ta_c">
                                                로그인 후 <br>
                                                확인 가능합니다.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide main_cont04_slide_box act">
                                <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery&wr_id=8">
                                    <div class="main_cont04_slide main_cont04_slide03">
                                        <div class="prs-before-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide01_1_1.jpg" alt="before">
                                            <span class="after-month fz_20">before</span>
                                        </div>
										<div class="prs-after-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide01_1_2.jpg" alt="after">
                                            <span class="after-month fz_20">after</span>
                                            <p class="prs-after-text ls_2 fz_18 c-w normal ta_c">
                                                로그인 후 <br>
                                                확인 가능합니다.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                                <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery&wr_id=7">
                                    <div class="main_cont04_slide main_cont04_slide04">
                                        <div class="prs-before-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide01_2_1.jpg" alt="before">
                                            <span class="after-month fz_20">before</span>
                                        </div>
										<div class="prs-after-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide01_2_2.jpg" alt="after">
                                            <span class="after-month fz_20">after</span>
                                            <p class="prs-after-text ls_2 fz_18 c-w normal ta_c">
                                                로그인 후 <br>
                                                확인 가능합니다.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide main_cont04_slide_box">
                                <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery&wr_id=8">
                                    <div class="main_cont04_slide main_cont04_slide01">
                                        <div class="prs-before-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide01_1_1.jpg" alt="before">
                                            <span class="after-month fz_20">before</span>
                                        </div>
										<div class="prs-after-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide01_1_2.jpg" alt="after">
                                            <span class="after-month fz_20">after</span>
                                            <p class="prs-after-text ls_2 fz_18 c-w normal ta_c">
                                                로그인 후 <br>
                                                확인 가능합니다.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                                <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery&wr_id=7">
                                    <div class="main_cont04_slide main_cont04_slide02">
                                        <div class="prs-before-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide01_2_1.jpg" alt="before">
                                            <span class="after-month fz_20">before</span>
                                        </div>
										<div class="prs-after-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide01_2_2.jpg" alt="after">
                                            <span class="after-month fz_20">after</span>
                                            <p class="prs-after-text ls_2 fz_18 c-w normal ta_c">
                                                로그인 후 <br>
                                                확인 가능합니다.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide main_cont04_slide_box act">
                                <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery&wr_id=8">
                                    <div class="main_cont04_slide main_cont04_slide03">
                                        <div class="prs-before-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide01_1_1.jpg" alt="before">
                                            <span class="after-month fz_20">before</span>
                                        </div>
										<div class="prs-after-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide01_1_2.jpg" alt="after">
                                            <span class="after-month fz_20">after</span>
                                            <p class="prs-after-text ls_2 fz_18 c-w normal ta_c">
                                                로그인 후 <br>
                                                확인 가능합니다.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                                <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery&wr_id=7">
                                    <div class="main_cont04_slide main_cont04_slide04">
                                        <div class="prs-before-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide01_2_1.jpg" alt="before">
                                            <span class="after-month fz_20">before</span>
                                        </div>
										<div class="prs-after-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide01_2_2.jpg" alt="after">
                                            <span class="after-month fz_20">after</span>
                                            <p class="prs-after-text ls_2 fz_18 c-w normal ta_c">
                                                로그인 후 <br>
                                                확인 가능합니다.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="main_cont04_arrow">
                        <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery">
                            <img src="<?php echo G5_THEME_URL?>/img/arrow_long.png" alt="" title="" class="arrow_long_btn">
                        </a>
                    </div>
                </div>
                <div class="tabcontent tabcontent02" id="tabcontent02">
                    <div class="swiper-container main_cont04_swiper m_80">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide main_cont04_slide_box">
                                <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery&wr_id=8">
                                    <div class="main_cont04_slide main_cont04_slide01">
                                        <div class="prs-before-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide02_1_1.jpg" alt="before">
                                            <span class="after-month fz_20">before</span>
                                        </div>
										<div class="prs-after-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide02_1_2.jpg" alt="after">
                                            <span class="after-month fz_20">after</span>
                                            <p class="prs-after-text ls_2 fz_18 c-w normal ta_c">
                                                로그인 후 <br>
                                                확인 가능합니다.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                                <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery&wr_id=7">
                                    <div class="main_cont04_slide main_cont04_slide02">
                                        <div class="prs-before-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide02_2_1.jpg" alt="before">
                                            <span class="after-month fz_20">before</span>
                                        </div>
										<div class="prs-after-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide02_2_2.jpg" alt="after">
                                            <span class="after-month fz_20">after</span>
                                            <p class="prs-after-text ls_2 fz_18 c-w normal ta_c">
                                                로그인 후 <br>
                                                확인 가능합니다.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide main_cont04_slide_box act">
                                <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery&wr_id=8">
                                    <div class="main_cont04_slide main_cont04_slide03">
                                        <div class="prs-before-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide02_1_1.jpg" alt="before">
                                            <span class="after-month fz_20">before</span>
                                        </div>
										<div class="prs-after-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide02_1_2.jpg" alt="after">
                                            <span class="after-month fz_20">after</span>
                                            <p class="prs-after-text ls_2 fz_18 c-w normal ta_c">
                                                로그인 후 <br>
                                                확인 가능합니다.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                                <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery&wr_id=7">
                                    <div class="main_cont04_slide main_cont04_slide04">
                                        <div class="prs-before-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide02_2_1.jpg" alt="before">
                                            <span class="after-month fz_20">before</span>
                                        </div>
										<div class="prs-after-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide02_2_2.jpg" alt="after">
                                            <span class="after-month fz_20">after</span>
                                            <p class="prs-after-text ls_2 fz_18 c-w normal ta_c">
                                                로그인 후 <br>
                                                확인 가능합니다.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide main_cont04_slide_box">
                                <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery&wr_id=8">
                                    <div class="main_cont04_slide main_cont04_slide01">
                                        <div class="prs-before-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide02_1_1.jpg" alt="before">
                                            <span class="after-month fz_20">before</span>
                                        </div>
										<div class="prs-after-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide02_1_2.jpg" alt="after">
                                            <span class="after-month fz_20">after</span>
                                            <p class="prs-after-text ls_2 fz_18 c-w normal ta_c">
                                                로그인 후 <br>
                                                확인 가능합니다.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                                <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery&wr_id=7">
                                    <div class="main_cont04_slide main_cont04_slide02">
                                        <div class="prs-before-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide02_2_1.jpg" alt="before">
                                            <span class="after-month fz_20">before</span>
                                        </div>
										<div class="prs-after-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide02_2_2.jpg" alt="after">
                                            <span class="after-month fz_20">after</span>
                                            <p class="prs-after-text ls_2 fz_18 c-w normal ta_c">
                                                로그인 후 <br>
                                                확인 가능합니다.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide main_cont04_slide_box act">
                                <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery&wr_id=8">
                                    <div class="main_cont04_slide main_cont04_slide03">
                                        <div class="prs-before-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide02_1_1.jpg" alt="before">
                                            <span class="after-month fz_20">before</span>
                                        </div>
										<div class="prs-after-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide02_1_2.jpg" alt="after">
                                            <span class="after-month fz_20">after</span>
                                            <p class="prs-after-text ls_2 fz_18 c-w normal ta_c">
                                                로그인 후 <br>
                                                확인 가능합니다.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                                <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery&wr_id=7">
                                    <div class="main_cont04_slide main_cont04_slide04">
                                        <div class="prs-before-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide02_2_1.jpg" alt="before">
                                            <span class="after-month fz_20">before</span>
                                        </div>
										<div class="prs-after-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide02_2_2.jpg" alt="after">
                                            <span class="after-month fz_20">after</span>
                                            <p class="prs-after-text ls_2 fz_18 c-w normal ta_c">
                                                로그인 후 <br>
                                                확인 가능합니다.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="main_cont04_arrow">
                        <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery">
                            <img src="<?php echo G5_THEME_URL?>/img/arrow_long.png" alt="" title="" class="arrow_long_btn">
                        </a>
                    </div>
                </div>
                <div class="tabcontent tabcontent03" id="tabcontent03">
                    <div class="swiper-container main_cont04_swiper m_80">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide main_cont04_slide_box">
                                <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery&wr_id=8">
                                    <div class="main_cont04_slide main_cont04_slide01">
                                        <div class="prs-before-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide03_1_1.jpg" alt="before">
                                            <span class="after-month fz_20">before</span>
                                        </div>
										<div class="prs-after-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide03_1_2.jpg" alt="after">
                                            <span class="after-month fz_20">after</span>
                                            <p class="prs-after-text ls_2 fz_18 c-w normal ta_c">
                                                로그인 후 <br>
                                                확인 가능합니다.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                                <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery&wr_id=7">
                                    <div class="main_cont04_slide main_cont04_slide02">
                                        <div class="prs-before-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide03_2_1.jpg" alt="before">
                                            <span class="after-month fz_20">before</span>
                                        </div>
										<div class="prs-after-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide03_2_2.jpg" alt="after">
                                            <span class="after-month fz_20">after</span>
                                            <p class="prs-after-text ls_2 fz_18 c-w normal ta_c">
                                                로그인 후 <br>
                                                확인 가능합니다.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide main_cont04_slide_box act">
                                <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery&wr_id=8">
                                    <div class="main_cont04_slide main_cont04_slide03">
                                        <div class="prs-before-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide03_1_1.jpg" alt="before">
                                            <span class="after-month fz_20">before</span>
                                        </div>
										<div class="prs-after-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide03_1_2.jpg" alt="after">
                                            <span class="after-month fz_20">after</span>
                                            <p class="prs-after-text ls_2 fz_18 c-w normal ta_c">
                                                로그인 후 <br>
                                                확인 가능합니다.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                                <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery&wr_id=7">
                                    <div class="main_cont04_slide main_cont04_slide04">
                                        <div class="prs-before-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide03_2_1.jpg" alt="before">
                                            <span class="after-month fz_20">before</span>
                                        </div>
										<div class="prs-after-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide03_2_2.jpg" alt="after">
                                            <span class="after-month fz_20">after</span>
                                            <p class="prs-after-text ls_2 fz_18 c-w normal ta_c">
                                                로그인 후 <br>
                                                확인 가능합니다.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide main_cont04_slide_box">
                                <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery&wr_id=8">
                                    <div class="main_cont04_slide main_cont04_slide01">
                                        <div class="prs-before-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide03_1_1.jpg" alt="before">
                                            <span class="after-month fz_20">before</span>
                                        </div>
										<div class="prs-after-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide03_1_2.jpg" alt="after">
                                            <span class="after-month fz_20">after</span>
                                            <p class="prs-after-text ls_2 fz_18 c-w normal ta_c">
                                                로그인 후 <br>
                                                확인 가능합니다.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                                <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery&wr_id=7">
                                    <div class="main_cont04_slide main_cont04_slide02">
                                        <div class="prs-before-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide03_2_1.jpg" alt="before">
                                            <span class="after-month fz_20">before</span>
                                        </div>
										<div class="prs-after-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide03_2_2.jpg" alt="after">
                                            <span class="after-month fz_20">after</span>
                                            <p class="prs-after-text ls_2 fz_18 c-w normal ta_c">
                                                로그인 후 <br>
                                                확인 가능합니다.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide main_cont04_slide_box act">
                                <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery&wr_id=8">
                                    <div class="main_cont04_slide main_cont04_slide03">
                                        <div class="prs-before-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide03_1_1.jpg" alt="before">
                                            <span class="after-month fz_20">before</span>
                                        </div>
										<div class="prs-after-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide03_1_2.jpg" alt="after">
                                            <span class="after-month fz_20">after</span>
                                            <p class="prs-after-text ls_2 fz_18 c-w normal ta_c">
                                                로그인 후 <br>
                                                확인 가능합니다.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                                <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery&wr_id=7">
                                    <div class="main_cont04_slide main_cont04_slide04">
                                        <div class="prs-before-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide03_2_1.jpg" alt="before">
                                            <span class="after-month fz_20">before</span>
                                        </div>
										<div class="prs-after-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide03_2_2.jpg" alt="after">
                                            <span class="after-month fz_20">after</span>
                                            <p class="prs-after-text ls_2 fz_18 c-w normal ta_c">
                                                로그인 후 <br>
                                                확인 가능합니다.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="main_cont04_arrow">
                        <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery">
                            <img src="<?php echo G5_THEME_URL?>/img/arrow_long.png" alt="" title="" class="arrow_long_btn">
                        </a>
                    </div>
                </div>
                <div class="tabcontent tabcontent04" id="tabcontent04">
                    <div class="swiper-container main_cont04_swiper m_80">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide main_cont04_slide_box">
                                <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery&wr_id=8">
                                    <div class="main_cont04_slide main_cont04_slide01">
                                        <div class="prs-before-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide04_1_1.jpg" alt="before">
                                            <span class="after-month fz_20">before</span>
                                        </div>
										<div class="prs-after-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide04_1_2.jpg" alt="after">
                                            <span class="after-month fz_20">after</span>
                                            <p class="prs-after-text ls_2 fz_18 c-w normal ta_c">
                                                로그인 후 <br>
                                                확인 가능합니다.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                                <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery&wr_id=7">
                                    <div class="main_cont04_slide main_cont04_slide02">
                                        <div class="prs-before-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide04_2_1.jpg" alt="before">
                                            <span class="after-month fz_20">before</span>
                                        </div>
										<div class="prs-after-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide04_2_2.jpg" alt="after">
                                            <span class="after-month fz_20">after</span>
                                            <p class="prs-after-text ls_2 fz_18 c-w normal ta_c">
                                                로그인 후 <br>
                                                확인 가능합니다.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide main_cont04_slide_box act">
                                <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery&wr_id=8">
                                    <div class="main_cont04_slide main_cont04_slide03">
                                        <div class="prs-before-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide04_1_1.jpg" alt="before">
                                            <span class="after-month fz_20">before</span>
                                        </div>
										<div class="prs-after-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide04_1_2.jpg" alt="after">
                                            <span class="after-month fz_20">after</span>
                                            <p class="prs-after-text ls_2 fz_18 c-w normal ta_c">
                                                로그인 후 <br>
                                                확인 가능합니다.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                                <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery&wr_id=7">
                                    <div class="main_cont04_slide main_cont04_slide04">
                                        <div class="prs-before-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide04_2_1.jpg" alt="before">
                                            <span class="after-month fz_20">before</span>
                                        </div>
										<div class="prs-after-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide04_2_2.jpg" alt="after">
                                            <span class="after-month fz_20">after</span>
                                            <p class="prs-after-text ls_2 fz_18 c-w normal ta_c">
                                                로그인 후 <br>
                                                확인 가능합니다.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide main_cont04_slide_box">
                                <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery&wr_id=8">
                                    <div class="main_cont04_slide main_cont04_slide01">
                                        <div class="prs-before-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide04_1_1.jpg" alt="before">
                                            <span class="after-month fz_20">before</span>
                                        </div>
										<div class="prs-after-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide04_1_2.jpg" alt="after">
                                            <span class="after-month fz_20">after</span>
                                            <p class="prs-after-text ls_2 fz_18 c-w normal ta_c">
                                                로그인 후 <br>
                                                확인 가능합니다.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                                <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery&wr_id=7">
                                    <div class="main_cont04_slide main_cont04_slide02">
                                        <div class="prs-before-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide04_2_1.jpg" alt="before">
                                            <span class="after-month fz_20">before</span>
                                        </div>
										<div class="prs-after-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide04_2_2.jpg" alt="after">
                                            <span class="after-month fz_20">after</span>
                                            <p class="prs-after-text ls_2 fz_18 c-w normal ta_c">
                                                로그인 후 <br>
                                                확인 가능합니다.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="swiper-slide main_cont04_slide_box act">
                                <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery&wr_id=8">
                                    <div class="main_cont04_slide main_cont04_slide03">
                                        <div class="prs-before-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide04_1_1.jpg" alt="before">
                                            <span class="after-month fz_20">before</span>
                                        </div>
										<div class="prs-after-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide04_1_2.jpg" alt="after">
                                            <span class="after-month fz_20">after</span>
                                            <p class="prs-after-text ls_2 fz_18 c-w normal ta_c">
                                                로그인 후 <br>
                                                확인 가능합니다.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                                <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery&wr_id=7">
                                    <div class="main_cont04_slide main_cont04_slide04">
                                        <div class="prs-before-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide04_2_1.jpg" alt="before">
                                            <span class="after-month fz_20">before</span>
                                        </div>
										<div class="prs-after-img">
                                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_slide04_2_2.jpg" alt="after">
                                            <span class="after-month fz_20">after</span>
                                            <p class="prs-after-text ls_2 fz_18 c-w normal ta_c">
                                                로그인 후 <br>
                                                확인 가능합니다.
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="main_cont04_arrow">
                        <a href="<?php echo G5_URL?>/bbs/board.php?bo_table=gallery">
                            <img src="<?php echo G5_THEME_URL?>/img/arrow_long.png" alt="" title="" class="arrow_long_btn">
                        </a>
                    </div>
                </div>
            </div>
            <!-- //비포&애프터 모바일 -->
        </div>
        
        <!--
        <div class="main_cont04_bottom">
            <div class="swiper-container main_cont04_bottom_swiper">
                <div class="main_cont04_bottom_text ta_c">
                    <p class="main_cont04_bottom_text01 fz_45 lh_12 c-blue2 sortsmillgoudy gs_reveal">Our Partner</p>
                </div>
                <div class="swiper-wrapper">
                    <div class="swiper-slide main_cont04_bottom_box">
                        <div class="main_cont04_bottom_slide main_cont04_bottom_slide01">
                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_bottom_slide01.jpg" alt="대한구강악안면임플란트학회">
                        </div>
                    </div>
                    <div class="swiper-slide main_cont04_bottom_box">
                        <div class="main_cont04_bottom_slide main_cont04_bottom_slide02">
                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_bottom_slide02.jpg" alt="ICOI">
                        </div>
                    </div>
                    <div class="swiper-slide main_cont04_bottom_box">
                        <div class="main_cont04_bottom_slide main_cont04_bottom_slide03">
                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_bottom_slide03.jpg" alt="카톨릭대학교">
                        </div>
                    </div>
                    <div class="swiper-slide main_cont04_bottom_box">
                        <div class="main_cont04_bottom_slide main_cont04_bottom_slide04">
                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_bottom_slide04.jpg" alt="대한심미치과학회">
                        </div>
                    </div>
                    <div class="swiper-slide main_cont04_bottom_box">
                        <div class="main_cont04_bottom_slide main_cont04_bottom_slide05">
                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_bottom_slide01.jpg" alt="대한구강악안면임플란트학회">
                        </div>
                    </div>
                    <div class="swiper-slide main_cont04_bottom_box">
                        <div class="main_cont04_bottom_slide main_cont04_bottom_slide06">
                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_bottom_slide02.jpg" alt="ICOI">
                        </div>
                    </div>
                    <div class="swiper-slide main_cont04_bottom_box">
                        <div class="main_cont04_bottom_slide main_cont04_bottom_slide07">
                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_bottom_slide03.jpg" alt="카톨릭대학교">
                        </div>
                    </div>
                    <div class="swiper-slide main_cont04_bottom_box">
                        <div class="main_cont04_bottom_slide main_cont04_bottom_slide08">
                            <img src="<?php echo G5_THEME_URL?>/img/main_cont04_bottom_slide04.jpg" alt="대한심미치과학회">
                        </div>
                    </div>
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
        </div>
        -->
    </article>
    
    <article class="main_cont05" id="main_cont05">
        <div class="main_cont05_wrap flex_row fw jc_center center">
            <div class="column_half">
                <div class="main_cont05_img">
                    <img src="<?php echo G5_THEME_URL?>/img/main_cont05_img01.jpg" alt="">
                </div>
            </div>
            <div class="column_half p_r">
                <img class="main_cont05_bg" src="<?php echo G5_THEME_URL?>/img/main_cont05_img01.jpg" alt="">
                
                <div class="main_cont05_info_wrap">
                    <div class="office-hour">
                        <div class="time-wrap gs_reveal">
                            <h3 class="time-top-title fz_27 lh_12 nanummyeongjo light">진료시간 안내</h3>
                            <div class="time-table fz_20 light">
                                <div class="dp-tr">
                                    <span class="dp-th">월&ensp;&ensp;&ensp;&ensp;목&emsp;:</span>
                                    <span class="dp-td">오전 10:00 - 오후 08:30</span>
                                    <span class="dp-td fz_16 lh_2"></span>
                                </div>
                                <div class="dp-tr">
                                    <span class="dp-th">화&ensp;수&ensp;금&emsp;:</span>
                                    <span class="dp-td">오전 10:00 - 오후 07:00</span>
                                    <span class="dp-td"></span>
                                </div>
                                <div class="dp-tr">
                                    <span class="dp-th">토&ensp;요&ensp;일&emsp;:</span>
                                    <span class="dp-td">오전 10:00 - 오후 02:00</span>
                                    <span class="dp-td fz_16 lh_2">&nbsp;(점심시간 없음)</span>
                                </div>
                                <div class="dp-tr">
                                    <span class="dp-th">점심시간&emsp;:</span>
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
                        <div class="reserv-wrap gs_reveal" data-gs-delay="300">
                            <div class="reserv-top-title flex_row sb center">
                                <h3 class="fz_27 lh_12 nanummyeongjo light">오시는 길</h3>
                                
                                <div class="main_cont05_arrow">
                                    <a href="<?php echo G5_THEME_URL?>/sub/sub1_3.php">
                                        <img src="<?php echo G5_THEME_URL?>/img/arrow_long.png" alt="" title="" class="arrow_long_btn">
                                    </a>
                                </div>
                            </div>
                            <p class="fz_17"><a href="<?php echo G5_THEME_URL?>/sub/sub1_3.php">경기도 안산시 상록구 석호로 290 2층,3층(본오동)</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </article>
    
</main>
<!-- //main -->


<script>
    $(function() {
        var vid = document.getElementById('main_cont03_video');
        vid.pause();
    }); 
    
    
    function befoerafter(){
        alert("글을 읽을 권한이 없습니다. \n\n회원이시라면 로그인 후 이용해주시기 바랍니다.");
    }
</script>
<?php
include_once(G5_PATH.'/tail.php');
                                     