<?php
include_once('./_common.php');
//////////////////////////////////////////////////////////////////////
////////////////////////////// SEO 시작 //////////////////////////////
//////////////////////////////////////////////////////////////////////

// 웹사이트 타이틀
$g5['title'] = '테스트';

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
    main{height:100vh; background-color:#fff;}
    
    .radial_quick_icon{position:relative; display:block; width:2.5rem; height:2.5rem; }
    .radial_quick_icon.radial_quick_icon_call{background: url(./img/m_quick_icon_call.png) 50% 50%/100% no-repeat;}
    .radial_quick_icon.radial_quick_icon_insta{background: url(./img/m_quick_icon_insta.png) 50% 50%/100% no-repeat;}
    .radial_quick_icon.radial_quick_icon_contact{width:2.8rem; height:2.8rem; background: url(./img/m_quick_icon_contact.png) 50% 50%/100% no-repeat;}
    .radial_quick_icon.radial_quick_icon_blog{background: url(./img/m_quick_icon_blog.png) 50% 50%/100% no-repeat;}
    .radial_quick_icon.radial_quick_icon_youtube{background: url(./img/m_quick_icon_youtube.png) 50% 50%/100% no-repeat;}
    
    .radial_quick_wrap{position:fixed; top:0; bottom:0; left:0; right:0; z-index:100;}
    .radial_quick_dimmed{
        position:absolute; top:0; bottom:0; left:0; right:0; background-color:rgba(0, 0, 0, 0.5); opacity:0; z-index:1;
        transition:opacity 0.5s ease;
        -webkit-transition:opacity 0.5s ease; 
        -moz-transition:opacity 0.5s ease; 
        -ms-transition:opacity 0.5s ease; 
        -o-transition:opacity 0.5s ease; 
    }
    .radial_quick_wrap.open .radial_quick_dimmed{opacity:1;}
    .radial_quick_menu_wrap{
        position:absolute; bottom:-8rem; left:calc(50% - 13rem); width:26rem; height:26rem; opacity:0;
        transform:rotate(-112deg) scale(0.2) translateZ(0); 
        -webkit-transform:rotate(-112deg) scale(0.2) translateZ(0); 
        -moz-transform:rotate(-112deg) scale(0.2) translateZ(0); 
        -ms-transform:rotate(-112deg) scale(0.2) translateZ(0); 
        -o-transform:rotate(-112deg) scale(0.2) translateZ(0); 
        transition: 0.2s cubic-bezier(.215,.61,.355,1);
        -webkit-transition: 0.2s cubic-bezier(.215,.61,.355,1); 
        -moz-transition: 0.2s cubic-bezier(.215,.61,.355,1); 
        -ms-transition: 0.2s cubic-bezier(.215,.61,.355,1); 
        -o-transition: 0.2s cubic-bezier(.215,.61,.355,1); 
        background: url(./img/m_quick_menu_bg.png) 50% 100%/100% no-repeat; z-index:2;
    }
    .radial_quick_wrap.open .radial_quick_menu_wrap{
        opacity:1;
        transform:rotate(0deg) scale(1) translateZ(0); 
        -webkit-transform:rotate(0deg) scale(1) translateZ(0); 
        -moz-transform:rotate(0deg) scale(1) translateZ(0); 
        -ms-transform:rotate(0deg) scale(1) translateZ(0); 
        -o-transform:rotate(0deg) scale(1) translateZ(0); 
    }
    .radial_quick_menu_btn{
        position:absolute; bottom:2rem; left:50%; width:5rem; height:5rem; outline:none;
        border:none; border-radius:100%; box-shadow:0px 0px 6px 2px rgba(0, 0, 0, 0.3);
        transform:translateX(-50%) translateZ(0); 
        -webkit-transform:translateX(-50%) translateZ(0); 
        -moz-transform:translateX(-50%) translateZ(0); 
        -ms-transform:translateX(-50%) translateZ(0); 
        -o-transform:translateX(-50%) translateZ(0);
        transition: 0.2s cubic-bezier(.215,.61,.355,1);
        -webkit-transition: 0.2s cubic-bezier(.215,.61,.355,1); 
        -moz-transition: 0.2s cubic-bezier(.215,.61,.355,1); 
        -ms-transition: 0.2s cubic-bezier(.215,.61,.355,1); 
        -o-transition: 0.2s cubic-bezier(.215,.61,.355,1); 
        background: url(./img/m_quick_menu_toggle.png) 50% 100%/100% no-repeat; z-index:2;
    }
    .radial_quick_wrap.open .radial_quick_menu_btn{bottom:1rem; width:8rem; height:8rem;}
    .radial_quick_menu_btn:focus,
    .radial_quick_menu_btn:active{outline:none; border:none;}
    
    .radial_quick_menu{
        position:relative; width:100%; height:100%;
        transform:rotate(-112deg) translateZ(0); 
        -webkit-transform:rotate(-112deg) translateZ(0); 
        -moz-transform:rotate(-112deg) translateZ(0); 
        -ms-transform:rotate(-112deg) translateZ(0); 
        -o-transform:rotate(-112deg) translateZ(0); 
        transition: 0.2s cubic-bezier(.215,.61,.355,1);
        -webkit-transition: 0.2s cubic-bezier(.215,.61,.355,1); 
        -moz-transition: 0.2s cubic-bezier(.215,.61,.355,1); 
        -ms-transition: 0.2s cubic-bezier(.215,.61,.355,1); 
        -o-transition: 0.2s cubic-bezier(.215,.61,.355,1);
    }
    .radial_quick_wrap.open .radial_quick_menu{
        transform:rotate(0deg) translateZ(0); 
        -webkit-transform:rotate(0deg) translateZ(0); 
        -moz-transform:rotate(0deg) translateZ(0); 
        -ms-transform:rotate(0deg) translateZ(0); 
        -o-transform:rotate(0deg) translateZ(0); 
    }
    .radial_quick_menu > li{position:absolute; }
    .radial_quick_menu > li.radial_quick_menu_li_call{top:11.6rem; left:2.7rem;}
    .radial_quick_menu > li.radial_quick_menu_li_insta{top:5rem; left:3.6rem;}
    .radial_quick_menu > li.radial_quick_menu_li_contact{top:1.6rem; left:11.2rem;}
    .radial_quick_menu > li.radial_quick_menu_li_blog{top:5.1rem; left:18.9rem;}
    .radial_quick_menu > li.radial_quick_menu_li_youtube{top:11.7rem; left:20.6rem;}
    .radial_quick_menu > li > a{position:relative; width:auto; text-align:center; display:flex; flex-direction:column; justify-content:center; align-items:center; gap:0.4rem 0;}
    .radial_quick_menu > li.radial_quick_menu_li_contact > a > .txt01{margin:0.2rem 0 0;}
    .radial_quick_menu > li > a > .txt01{display:block; color:#fff;}
    
    .radial_quick_contact_btn{
        position:absolute; top:0; left:50%; 
        width:2.8rem; height:2.8rem; 
        border-radius:100%; text-align:center; 
        margin-left:auto; margin-right:auto; 
        display:flex; justify-content:space-evenly; align-items:center; 
        transform:translateX(-50%) translateZ(0); 
        -webkit-transform:translateX(-50%) translateZ(0); 
        -moz-transform:translateX(-50%) translateZ(0); 
        -ms-transform:translateX(-50%) translateZ(0); 
        -o-transform:translateX(-50%) translateZ(0);
    }
    .radial_quick_contact_btn > div { 
        width:5px; height:5px; border-radius:100%; 
        display:inline-block; margin:0; 
        background-color:#105d4e; 
        -webkit-animation:sk-bouncedelay 1.4s infinite ease-in-out both; 
        animation:sk-bouncedelay 1.4s infinite ease-in-out both; 
        transition: 0.3s ease;
        -webkit-transition: 0.3s ease;
        -moz-transition: 0.3s ease;
        -ms-transition: 0.3s ease;
        -o-transition: 0.3s ease;
    }
    .radial_quick_contact_btn > .bounce1 { -webkit-animation-delay:-0.32s; animation-delay:-0.32s; }
    .radial_quick_contact_btn > .bounce2 { -webkit-animation-delay:-0.16s; animation-delay:-0.16s; }
    @-webkit-keyframes sk-bouncedelay {
        0%,
        80%,
        100% {
            -webkit-transform: scale(0);
        }

        40% {
            -webkit-transform: scale(1.0);
        }
    }
    @keyframes sk-bouncedelay {
        0%,
        80%,
        100% {
            -webkit-transform: scale(0);
            transform: scale(0);
        }

        40% {
            -webkit-transform: scale(1.0);
            transform: scale(1.0);
        }
    }
</style>
<main id="content">
    
    <div class="radial_quick_wrap m_cont_960" id="radial_quick_m">
        <div class="radial_quick_dimmed"></div>
        <div class="radial_quick_menu_wrap" id="radial_quick_menu_wrap_m">
            <ul class="radial_quick_menu">
                <li class="radial_quick_menu_list radial_quick_menu_li_call">
                    <a href="tel:070-4015-7776" target="_blank">
                        <i class="radial_quick_icon radial_quick_icon_call"></i>
                        <span class="txt01 fz_15 ls_p1 lh_1 pretendard medium">문의전화</span>
                    </a>
                </li>
                <li class="radial_quick_menu_list radial_quick_menu_li_insta">
                    <a href="https://www.instagram.com/creative_ptl/" target="_blank">
                        <i class="radial_quick_icon radial_quick_icon_insta"></i>
                        <span class="txt01 fz_15 ls_p1 lh_1 pretendard medium">인스타그램</span>
                    </a>
                </li>
                <li class="radial_quick_menu_list radial_quick_menu_li_contact">
                    <a href="<?php echo G5_URL?>/contact.php" target="_blank">
                        <i class="radial_quick_icon radial_quick_icon_contact"></i>
                        <span class="txt01 fz_15 ls_p1 lh_1 pretendard medium">빠른 문의</span>
                        
                        <div class="radial_quick_contact_btn">
                            <div class="bounce1"></div>
                            <div class="bounce2"></div>
                            <div class="bounce3"></div>
                        </div>
                    </a>
                </li>
                <li class="radial_quick_menu_list radial_quick_menu_li_blog">
                    <a href="https://blog.naver.com/fineapple_ptl" target="_blank">
                        <i class="radial_quick_icon radial_quick_icon_blog"></i>
                        <span class="txt01 fz_15 ls_p1 lh_1 pretendard medium">블로그</span>
                    </a>
                </li>
                <li class="radial_quick_menu_list radial_quick_menu_li_youtube">
                    <a href="https://www.youtube.com/@user-qm4lt1vh2q" target="_blank">
                        <i class="radial_quick_icon radial_quick_icon_youtube"></i>
                        <span class="txt01 fz_15 ls_p1 lh_1 pretendard medium">유튜브</span>
                    </a>
                </li>
            </ul>
        </div>
        <button class="radial_quick_menu_btn" id="radial_btn_m">
            <span class="blind">퀵메뉴 버튼</span>
        </button>
    </div>
    
</main>

<?php
include_once(G5_PATH.'/tail.php');
?>