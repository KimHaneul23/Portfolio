<?php
include_once('./_common.php');
//if (G5_IS_MOBILE) {
//    include_once(G5_MOBILE_PATH.'/index.php');
//    return;
//}

// 웹사이트 타이틀
$g5['title'] = 'ABOUT';

include_once(G5_THEME_PATH.'/head.php');
?>
    <script>
        $(document).ready(function(){
            $('.main-header').removeClass('color_change');
            $('#move_top_btn').addClass('slideBG_F');
            $('.gnb-menu-depth1_1').addClass('on');
        });
    </script>
    <style>
        html{overflow-y:auto !important;}
        
        .top_menu{color:rgba(60, 55, 51, 0.5);}
        .color_change .top_menu{color:#fff;}
        .main-header.scrolled .top_menu > a{color:rgba(60, 55, 51, 0.5);}
        .color_change.scrolled .top_menu > a{color:rgba(60, 55, 51, 0.5);}
        .top_menu01{color:#3c3733; font-weight: 300;}
        .color_change .top_menu01{color:#3c3733;}
        .main-header.scrolled .top_menu01 > a{color:#3c3733;}
        .color_change.scrolled .top_menu01 > a{color:#3c3733;}
        
        .move_top_btn_sub{display:none;}
    </style>
    <main id="content">
        <article class="sub_content01" id="startContent">
            <div class="sub_top_view sub1_1_top_view">
                <div class="sub_top_view_bg sub1_1_top_view_bg"></div>
                <div class="sub_top_view_text_wrap sub1_1_top_view_text_wrap pc_cont_480">
                    <div class="sub_top_view_text sub_top_view_text01 sub1_1_top_view_text01 sub_text_ani">
                        <p class="nanumgothic fz_15 lh_16 ls_2 ta_c normal m_20">
                            머무르는 모두가 편안하게 숨을 쉬는 공간을 만듭니다.
                        </p>
                        <p class="nanumgothic fz_15 lh_16 ls_2 ta_c normal m_20">
                            ANDAS는 병원 인테리어 전문 회사로서 어설픈 기교나 시각적 화려함보다는, <br>
                            공간 이용자의 편의성에 중점을 두고 편안하게 숨쉬는 공간을 추구합니다.
                        </p>
                        <p class="nanumgothic fz_15 lh_16 ls_2 ta_c normal m_20">
                            모든 디자이너와 엔지니어는 시설·의료·생명·건강 그리고 행복한 삶에 이르기까지 <br>
                            가치통합적인 접근과 전문성을 바탕으로 편안한 공간을 창출하고 있습니다.
                        </p>
                        <p class="nanumgothic fz_15 lh_16 ls_2 ta_c normal m_40">
                            공간과 사람에 대한 연구를 바탕으로 보다 안락하고 편안함을 주는 공간을 창조하며 나아가겠습니다.
                        </p>
                        <p class="nanumgothic fz_15 lh_16 ls_2 ta_c normal">
                            ANDAS DESIGN
                        </p>
                    </div>
                </div>
                <div class="sub_top_view_text_wrap sub1_1_top_view_text_wrap m_cont_480">
                    <div class="sub_top_view_text sub_top_view_text01 sub1_1_top_view_text01 sub_text_ani">
                        <p class="nanumgothic fz_15 lh_16 ls_2 ta_c normal m_20">
                            머무르는 모두가 편안하게 숨을 쉬는 공간을 만듭니다.
                        </p>
                        <p class="nanumgothic fz_15 lh_16 ls_2 ta_c normal m_20">
                            ANDAS는 병원 인테리어 전문 회사로서 어설픈 기교나 시각적 화려함보다는, 
                            공간 이용자의 편의성에 중점을 두고 편안하게 숨쉬는 공간을 추구합니다.
                        </p>
                        <p class="nanumgothic fz_15 lh_16 ls_2 ta_c normal m_20">
                            모든 디자이너와 엔지니어는 시설·의료·생명·건강 그리고 행복한 삶에 이르기까지 
                            가치통합적인 접근과 전문성을 바탕으로 편안한 공간을 창출하고 있습니다.
                        </p>
                        <p class="nanumgothic fz_15 lh_16 ls_2 ta_c normal m_40">
                            공간과 사람에 대한 연구를 바탕으로 보다 안락하고 편안함을 주는 공간을 창조하며 나아가겠습니다.
                        </p>
                        <p class="nanumgothic fz_15 lh_16 ls_2 ta_c normal">
                            ANDAS DESIGN
                        </p>
                    </div>
                </div>
            </div>
        </article>
        
    </main>
    <!-- //main -->
    
<?php
include_once(G5_THEME_PATH.'/tail.php');
?>