<?php
include_once('./_common.php');
//if (G5_IS_MOBILE) {
//    include_once(G5_MOBILE_PATH.'/index.php');
//    return;
//}

// 웹사이트 타이틀
$g5['title'] = 'INQUIRY';

include_once(G5_THEME_PATH.'/head.php');
?>
    
    <script>
        $(document).ready(function(){
            $('.main-header').removeClass('color_change');
            $('#move_top_btn').addClass('slideBG_F');
            $('.gnb-menu-depth1_4').addClass('on');
        });
    </script>
    <style>
        html{overflow-y:auto !important;}
        
        .top_menu{color:rgba(60, 55, 51, 0.5);}
        .color_change .top_menu{color:#fff;}
        .main-header.scrolled .top_menu > a{color:rgba(60, 55, 51, 0.5);}
        .color_change.scrolled .top_menu > a{color:rgba(60, 55, 51, 0.5);}
        .top_menu04{color:#3c3733; font-weight: 300;}
        .color_change .top_menu04{color:#3c3733;}
        .main-header.scrolled .top_menu04 > a{color:#3c3733;}
        .color_change.scrolled .top_menu04 > a{color:#3c3733;}
        
        .move_top_btn_sub{display:none;}
    </style>
    <main id="content">
        <article class="sub_online_contact" id="startContent">
            <!--
            <div class="sub_contact_text pd_60 pt_200">
                <p class="sub_contact_text_line fz_30 montserrat medium ta_c">INQUIRY</p>
            </div>
            -->
            <div class="sub_contact_box flex_row jc_center al_fs ta_l">
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
                <div class="sub-online-wrap" id="onlineDB">
                    <div class="sub-online-container">
                        <p class="ta_r fz_13 ls_2 lh_16 nanumgothic normal">* 빈칸을 채워주세요. 자세할수록 좋습니다.</p>
                        <div class="consult-form">
                            <form name="fwrite" id="fwrite" action="<?=G5_URL ?>/bbs/write_update.php" method="post" onsubmit="return fwrite_submit(this);" autocomplete="off" class="row">
                                <input type="hidden" name="token" value="<?php echo get_write_token('online') ?>">
                                <input type="hidden" name="w"        value="<?php echo $w ?>">
                                <input type="hidden" name="bo_table" value="online">
                                <input type="hidden" name="sca"      value="<?php echo $sca ?>">
                                <input type="hidden" name="sfl"      value="<?php echo $sfl ?>">
                                <input type="hidden" name="stx"      value="<?php echo $stx ?>">
                                <input type="hidden" name="spt"      value="<?php echo $spt ?>">
                                <input type="hidden" name="sst"      value="<?php echo $sst ?>">
                                <input type="hidden" name="sod"      value="<?php echo $sod ?>">
                                <input type="hidden" name="s"    value="s">
                                <input type="hidden" name="wr_subject" value="">
                                <input type="hidden" name="wr_content" value="">
                                <input type="hidden" name="wr_name" value="빠른상담신청">
                                <input type="hidden" name="uid" value="<?php echo get_uniqid(); ?>">
                                <input type="hidden" name="wr_email" value="">
                                <input type="hidden" name="wr_homepage" value="">
                                <input type="hidden" name="wr_7" value="">
                                <input type="hidden" name="wr_8" value="">
                                <input type="hidden" name="wr_9" value="">
                                <input type="hidden" name="wr_5" value="<?php echo $ad;?>" />
                                <div class="bo_w_tit write_div" style="opacity:0; visibility:hidden; height:1px;">
                                    <label for="wr_subject" class="sound_only">제목<strong>필수</strong></label>

                                    <div id="autosave_wrapper" class="write_div">
                                        <input type="text" name="wr_subject" value="온라인 견적 문의" id="wr_subject" required class="frm_input full_input required" size="50" maxlength="255" placeholder="제목">
                                        <?php if ($is_member) { // 임시 저장된 글 기능 ?>
                                        <script src="<?php echo G5_JS_URL; ?>/autosave.js"></script>
                                        <?php if($editor_content_js) echo $editor_content_js; ?>
                                        <button type="button" id="btn_autosave" class="btn_frmline">임시 저장된 글 (<span id="autosave_count"><?php echo $autosave_count; ?></span>)</button>
                                        <div id="autosave_pop">
                                            <strong>임시 저장된 글 목록</strong>
                                            <ul></ul>
                                            <div><button type="button" class="autosave_close">닫기</button></div>
                                        </div>
                                        <?php } ?>
                                    </div>
                                </div>
                                <div class="sub-apply-con row fw">
                                    <div class="sub-apply-con-top">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">
                                                        <label class="fz_13 lh_16 montserrat medium" for="wr_name">NAME <span style="color:#ff0000;">*</span><strong class="sound_only">필수</strong></label>
                                                        <p class="fz_13 lh_16 ls_2 c-lightgray nanumgothic light">이름 or 상호명</p>
                                                    </th>
                                                    <td>
                                                        <input type="input" name="wr_name" id="wr_name" class="frm_input fz_13 ls_2 nanumgothic normal" value="<?php echo $name ?>">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <label class="fz_13 lh_16 montserrat medium" for="wr_2">PHONE <span style="color:#ff0000;">*</span><strong class="sound_only">필수</strong></label>
                                                        <p class="fz_13 lh_16 ls_2 c-lightgray nanumgothic light">핸드폰 번호</p>
                                                    </th>
                                                    <td>
                                                        <input type="input" name="wr_2" id="wr_2" class="frm_input fz_13 ls_2 nanumgothic normal" value="<?php echo $write['wr_2']; ?>" maxlength="13">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <label class="fz_13 lh_16 montserrat medium" for="wr_3">E-MAIL <span style="color:#ff0000;">*</span><strong class="sound_only">필수</strong></label>
                                                        <p class="fz_13 lh_16 ls_2 c-lightgray nanumgothic light">이메일</p>
                                                    </th>
                                                    <td>
                                                        <input type="input" name="wr_3" id="wr_3" class="frm_input fz_13 ls_2 nanumgothic normal" value="<?php echo $email ?>">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <label class="fz_13 lh_16 montserrat medium" for="wr_4">SUBJECT <span style="color:#ff0000;">*</span><strong class="sound_only">필수</strong></label>
                                                        <p class="fz_13 lh_16 ls_2 c-lightgray nanumgothic light">업종</p>
                                                    </th>
                                                    <td>
                                                        <input type="input" name="wr_4" id="wr_4" class="frm_input fz_13 ls_2 nanumgothic normal" value="<?php echo $homepage ?>">
                                                    </td>
                                                </tr>
                                                <tr class="sub_online_content">
                                                    <th scope="row">
                                                        <label class="fz_13 lh_16 montserrat medium" for="wr_content">MESSEGE <span style="color:#ff0000;">*</span><strong class="sound_only">필수</strong></label>
                                                        <p class="fz_13 lh_16 ls_2 c-lightgray nanumgothic light">공사시기 / 평형 / 예산</p>
                                                    </th>
                                                    <td class="wr_content">
                                                        <span class="sub-ap-con">
                                                            <textarea class="fz_13 ls_2 nanumgothic normal" name="wr_content" required="" itemname="상담내용"></textarea>
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="sub-apply-btn-item row">
                                        <div class="sub-apply-receive-btn">
                                            <input name="image" type="submit" value="SEND" alt="SEND" class="submit_ios fz_13 montserrat medium">
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </article>
        
    </main>
    <!-- //main -->
    
<?php
include_once(G5_THEME_PATH.'/tail.php');
?>