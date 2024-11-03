<?php
include_once('./_common.php');
//if (G5_IS_MOBILE) {
//    include_once(G5_MOBILE_PATH.'/index.php');
//    return;
//}

// 웹사이트 타이틀
$g5['title'] = 'CONTACT';

include_once(G5_THEME_PATH.'/head.php');
?>
    
    <script>
        $(document).ready(function(){
            $('.main-header').removeClass('color_change');
            $('#move_top_btn').addClass('slideBG_F');
            $('.gnb-menu-depth1_3').addClass('on');
        });
    </script>
    <style>
        html{overflow-y:auto !important;}
        
        .top_menu{color:rgba(60, 55, 51, 0.5);}
        .color_change .top_menu{color:#fff;}
        .main-header.scrolled .top_menu > a{color:rgba(60, 55, 51, 0.5);}
        .color_change.scrolled .top_menu > a{color:rgba(60, 55, 51, 0.5);}
        .top_menu03{color:#3c3733; font-weight: 300;}
        .color_change .top_menu03{color:#3c3733;}
        .main-header.scrolled .top_menu03 > a{color:#3c3733;}
        .color_change.scrolled .top_menu03 > a{color:#3c3733;}
        
        .move_top_btn_sub{display:none;}
    </style>
    <main id="content">
        <article class="sub_map_contact" id="startContent">
            <!--
            <div class="sub_contact_text pd_60 pt_200">
                <p class="sub_contact_text_line fz_30 montserrat medium ta_c">CONTACT</p>
            </div>
            -->
            <div class="sub_map_box_wrap flex_row jc_center al_fs ta_l">
                <div class="sub_contact_info_wrap">
                    <div class="sub_contact_info_box">
                        <ul>
                            <li class="sub_contact_info_address">
                                <p class="montserrat fz_13 bold lh_16 ls_2">ADDRESS</p>
                                <p class="nanumgothic fz_13 light lh_16 ls_2 m_20">인천 서구 청라에메랄드로 102번길 8, 우성메디피아 3F</p>
                            </li>
                            <li class="sub_contact_info_tel">
                                <p class="montserrat fz_13 bold lh_16 ls_2">TEL</p>
                                <p class="nanumgothic fz_13 light lh_16 ls_2 m_20">032-710-1180</p>
                            </li>
                            <li class="sub_contact_info_email">
                                <p class="montserrat fz_13 bold lh_16 ls_2">E-MAIL</p>
                                <p class="nanumgothic fz_13 light lh_16 ls_2 m_20">ads_design@daum.net</p>
                            </li>
                            <li class="sub_contact_info_business">
                                <p class="montserrat fz_13 bold lh_16 ls_2">BUSINESS NUMBER</p>
                                <p class="nanumgothic fz_13 light lh_16 ls_2 m_40">614-02-93239</p>
                            </li>
                            <li class="sub_contact_info_sns pc_cont_480">
                                <div class="dp_ib">
                                    <a href="https://blog.naver.com/vividspace" target="_blank">
                                        <img src="<?php echo G5_THEME_URL?>/sub/img/contact_info_sns_blog.png" alt="네이버 블로그">
                                    </a>
                                </div>
                                <div class="dp_ib">
                                    <a href="http://pf.kakao.com/_xdEjgb" target="_blank">
                                        <img src="<?php echo G5_THEME_URL?>/sub/img/contact_info_sns_kakao.png" alt="카카오톡">
                                    </a>
                                </div>
                            </li>
                            <li class="sub_contact_info_sns m_cont_480">
                                <div class="dp_ib">
                                    <a href="https://blog.naver.com/vividspace" target="_blank">
                                        <img src="<?php echo G5_THEME_URL?>/sub/img/contact_info_sns_blog_m.png" alt="네이버 블로그">
                                    </a>
                                </div>
                                <div class="dp_ib">
                                    <a href="http://pf.kakao.com/_xdEjgb" target="_blank">
                                        <img src="<?php echo G5_THEME_URL?>/sub/img/contact_info_sns_kakao_m.png" alt="카카오톡">
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="sub_map_box">
                    <iframe class="sub_map_iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d790.9740327188854!2d126.6557310587219!3d37.53394569999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b7f7f004c8423%3A0xc14fe30cc295c29f!2z7Jqw7ISx66mU65SU7ZS87JWEIOu5jOuUqQ!5e0!3m2!1sko!2skr!4v1657783032180!5m2!1sko!2skr" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </article>
        
    </main>
    <!-- //main -->
    
<?php
include_once(G5_THEME_PATH.'/tail.php');
?>