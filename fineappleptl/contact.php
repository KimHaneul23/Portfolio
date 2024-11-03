<?php
include_once('./_common.php');

//////////////////////////////////////////////////////////////////////
////////////////////////////// SEO 시작 //////////////////////////////
//////////////////////////////////////////////////////////////////////

// 웹사이트 타이틀
$g5['title'] = 'Contact | 프로젝트문의';

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

<style>
    main{background-color:#f9f9f9;}
</style>
<main id="content">
    
    <article class="sub_top_cont sub1_4_top_cont" id="startContent">
        <div class="sub_top_cont_wrap">
            <div class="sub_top_text sub_titlebox ta_c">
                <h2 class="txt01 reveal fade-up delay_200 fz_80 ls_2 lh_16 sortsmillgoudy normal">
                    Contact
                </h2>
                <h3 class="txt02 reveal fade-up delay_200 fz_16 ls_p1 lh_14 pretendard normal">
                    우리는 공감이 필요한 클라이언트를 기다리고 있습니다
                </h3>
                
                <div class="href_id" id="href_id"></div>
            </div>
            
            <div class="sub1_4_tab" style="opacity:0;">
                <ul class="sub1_4_tab_ul">
                    <!--<li id="sub1_4_tab_li01" class="sub1_4_tab_li sub1_4_tab_li01 active" onclick="opensubtab(event, 'sub1_4_tab_cont1')">
                        <a href="javascript:void(0);">
                            <p class="txt01 fz_14 ls_p1 lh_16 pretendard normal">
                                Web / Mobile HP
                            </p>
                        </a>
                    </li>
                    <li id="sub1_4_tab_li02" class="sub1_4_tab_li sub1_4_tab_li02" onclick="opensubtab(event, 'sub1_4_tab_cont2')">
                        <a href="javascript:void(0);">
                            <p class="txt01 fz_14 ls_p1 lh_16 pretendard normal">
                                MEDIA
                            </p>
                        </a>
                    </li>
                    <li id="sub1_4_tab_li03" class="sub1_4_tab_li sub1_4_tab_li03" onclick="opensubtab(event, 'sub1_4_tab_cont3')">
                        <a href="javascript:void(0);">
                            <p class="txt01 fz_14 ls_p1 lh_16 pretendard normal">
                                SNS / MARKETING
                            </p>
                        </a>
                    </li>
                    <li id="sub1_4_tab_li04" class="sub1_4_tab_li sub1_4_tab_li04" onclick="opensubtab(event, 'sub1_4_tab_cont4')">
                        <a href="javascript:void(0);">
                            <p class="txt01 fz_14 ls_p1 lh_16 pretendard normal">
                                DESIGN
                            </p>
                        </a>
                    </li>-->
                </ul>
            </div>
        </div>
    </article>
    
    <article class="sub_cont_wrap s14_c01_wrap">
        <div class="sub1_4_section">
            <div class="sub1_4_tab_cont sub1_4_tab_cont1" id="sub1_4_tab_cont1">
                <?php include_once(G5_PATH.'/include/contact_web.php'); ?>
            </div>
            <!--<div class="sub1_4_tab_cont sub1_4_tab_cont2" id="sub1_4_tab_cont2">
                <?php //include_once(G5_PATH.'/include/contact_media.php'); ?>
            </div>
            <div class="sub1_4_tab_cont sub1_4_tab_cont3" id="sub1_4_tab_cont3">
                <?php //include_once(G5_PATH.'/include/contact_sns.php'); ?>
            </div>
            <div class="sub1_4_tab_cont sub1_4_tab_cont4" id="sub1_4_tab_cont4">
                <?php //include_once(G5_PATH.'/include/contact_design.php'); ?>
            </div>-->
        </div>
    </article>
    
</main>

<?php
include_once(G5_PATH.'/tail.php');
?>
<script>
    $(document).ready(function() {
        $('.header_menu_li01_1').stop().removeClass('on');
        $('.header_menu_li01_2').stop().removeClass('on');
        $('.header_menu_li01_3').stop().removeClass('on');
        $('.header_menu_li01_4').stop().addClass('on');
    });
    
//    function opensubtab(evt, tabName) {
//        var i, tabcontent2, tablinks2;
//        tabcontent2 = document.getElementsByClassName("sub1_4_tab_cont");
//        for (i = 0; i < tabcontent2.length; i++) {
//          tabcontent2[i].style.display = "none";
//        }
//        tablinks2 = document.getElementsByClassName("sub1_4_tab_li");
//        for (i = 0; i < tablinks2.length; i++) {
//          tablinks2[i].className = tablinks2[i].className.replace(" active", "");
//        }
//        document.getElementById(tabName).style.display = "block";
//        evt.currentTarget.className += " active";
//        
//        ScrollTrigger.refresh();
//    }
</script>