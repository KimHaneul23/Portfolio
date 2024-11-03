<?php
if (!defined('_INDEX_')) define('_INDEX_', true);
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가


//if (G5_IS_MOBILE) {
//    include_once(G5_THEME_MOBILE_PATH.'/index.php');
//    return;
//}

include_once(G5_THEME_PATH.'/head.php');
?>



<main>
    
    <article class="main_cont" id="startContent">
        <div class="swiper-container main_cont_slider" id="main_cont_slider">
            <div class="swiper-wrapper">
                <div class="swiper-slide main_slider01">
                    <div class="main_cont_wrap main_cont_wrap01" data-swiper-parallax-y="0">
                        <div class="main_cont_slider_img main_cont_slider_img01"></div>
                        <div class="main_cont_slider_text_wrap ta_c">
                            <div class="main_cont_slider_text_notani">
                                <p class="c-w fz_60 lh_11 ls_0 pretendard">ANDAS DESIGN</p>
                            </div>
                            <div class="main_cont_slider_text_notani">
                                <p class="c-w fz_16 lh_16 ls_p2 nanumgothic normal">INTERIOR DESIGN COMPANY</p>
                            </div>
                            <div class="main_cont_slider_text_notani">
                                <p class="c-w fz_18 lh_16 ls_2 notosans light">편안하게 숨을 쉬는 공간을 제안합니다</p>
                            </div>
                        </div>
                        <div class="mouse_scroll main_slide">
                            <div class="mouse">
                                <div class="wheel"></div>
                            </div>
                            <div>
                                <span class="m_scroll_arrows m_scroll_arrows_one"></span>
                                <span class="m_scroll_arrows m_scroll_arrows_two"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide main_slider02">
                    <div class="main_cont_wrap main_cont_wrap02" data-swiper-parallax-y="0">
                        <div class="main_cont_slider_img main_cont_slider_img02"></div>
                    </div>
                </div>
                <div class="swiper-slide main_slider03">
                    <div class="main_cont_wrap main_cont_wrap03" data-swiper-parallax-y="0">
                        <div class="main_cont_slider_img main_cont_slider_img03"></div>
                    </div>
                </div>
                <div class="swiper-slide main_slider04">
                    <div class="main_cont_wrap main_cont_wrap04" data-swiper-parallax-y="0">
                        <div class="main_cont_slider_img main_cont_slider_img04"></div>
                    </div>
                </div>
                <div class="swiper-slide main_slider05">
                    <div class="main_cont_wrap main_cont_wrap05" data-swiper-parallax-y="0">
                        <div class="main_cont_slider_img main_cont_slider_img05"></div>
                    </div>
                </div>
                <div class="swiper-slide main_slider06">
                    <div class="main_cont_wrap main_cont_wrap06" data-swiper-parallax-y="0">
                        <div class="main_cont_slider_img main_cont_slider_img06"></div>
                    </div>
                </div>
                <div class="swiper-slide main_slider07">
                    <div class="main_cont_wrap main_cont_wrap07" data-swiper-parallax-y="0">
                        <div class="main_cont_slider_img main_cont_slider_img07"></div>
                    </div>
                </div>
                <!-- 
                <div class="swiper-slide main_slider08">
                    <div class="main_cont_wrap main_cont_wrap08" data-swiper-parallax-y="0">
                        <div class="main_cont_slider_img main_cont_slider_img08"></div>
                        <div class="main_cont08_slider_text_wrap main_cont_slider_text_wrap ta_c">
                            <div class="main_cont08_slider_text main_cont_slider_text01 m_60">
                                <p class="main_cont08_slider_text_line fz_30 ls_0 montserrat medium">INQUIRY</p>
                            </div>
                            <div class="online-wrap" id="onlineDB">
                                <div class="container-online">
                                    <p class="ta_r fz_15 ls_2 lh_16 notosans light">* 빈칸을 채워주세요. 자세할수록 좋습니다.</p>
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
                                            <div class="apply-con row fw">
                                                <div class="apply-con-top">
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row" class="fz_18 montserrat medium"><label for="wr_name">NAME <span style="color:#000;">*</span><strong class="sound_only">필수</strong></label></th>
                                                                <td>
                                                                    <input type="input" name="wr_name" id="wr_name" class="frm_input fz_16 ls_2 notosans light" value="<?php echo $name ?>" placeholder="이름 or 상호명">
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row" class="fz_18 montserrat medium"><label for="wr_3">E-MAIL <span style="color:#000;">*</span><strong class="sound_only">필수</strong></label></th>
                                                                <td>
                                                                    <input type="input" name="wr_3" id="wr_3" class="frm_input fz_16 ls_2 notosans light" value="<?php echo $email ?>" placeholder="이메일">
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row" class="fz_18 montserrat medium"><label for="wr_2">PHONE <span style="color:#000;">*</span><strong class="sound_only">필수</strong></label></th>
                                                                <td>
                                                                    <input type="input" name="wr_2" id="wr_2" class="frm_input fz_16 ls_2 notosans light" value="<?php echo $write['wr_2']; ?>" maxlength="13" placeholder="핸드폰 번호">
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row" class="fz_18 montserrat medium"><label for="wr_4">SUBJECT <span style="color:#000;">*</span><strong class="sound_only">필수</strong></label></th>
                                                                <td>
                                                                    <input type="input" name="wr_4" id="wr_4" class="frm_input fz_16 ls_2 notosans light" value="<?php echo $homepage ?>" placeholder="업종">
                                                                </td>
                                                            </tr>
                                                            <tr class="online_content">
                                                                <th scope="row" class="fz_18 montserrat medium"><label for="wr_content">MESSEGE <span style="color:#000;">*</span><strong class="sound_only">필수</strong></label></th>
                                                                <td class="wr_content">
                                                                    <span class="ap-con">
                                                                        <textarea class="fz_16 ls_2 notosans light" name="wr_content" required="" itemname="상담내용" placeholder="공사시기 / 평형 / 예산"></textarea>
                                                                    </span>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div class="apply-btn-item row">
                                                    <div class="apply-receive-btn">
                                                        <input name="image" type="submit" value="SEND" alt="SEND" class="submit_ios fz_19 montserrat medium">
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                -->
                
                <div class="swiper-slide main_slider09">
                    <div class="main_cont_wrap main_cont_wrap09" data-swiper-parallax-y="0">
                        <div class="main_cont_slider_img main_cont_slider_img09"></div>
                        <div class="main_cont09_slider_text_wrap main_cont_slider_text_wrap ta_c">
                            <div class=" main_cont_slider_text_notani pc_cont_640">
                                <p class="nanumgothic fz_15 lh_16 ls_2 light m_40">
                                    환자와 의사의 밀접한 소통과 교감의 장소로서 가지는 병원의 의미를 생각할 때 분명한 차별성 가지고 <br>
                                    밀접한 상호 교류의 공간을 제공할 수 있는 비전과 방향성을 가진 기업
                                </p>
                                <p class="nanumgothic fz_15 lh_16 ls_2 light m_40">
                                    고객에게 무한한 신뢰와 믿음을 주는 기업이라는 선명성을 가지고 고객 만족을 추구하고 <br>
                                    병원 인테리어 분야에서 '빛을 발하는 기업'이 되기 위해 보다 안락하고 편안함을 주는 공간을 창조하는 기업
                                </p>
                                <p class="nanumgothic fz_15 lh_16 ls_2 light">
                                    시설·의료·생명·건강 그리고 행복한 삶에 이르기까지 가치 통합적으로 접근하여 '최적'의 공간을 제공하며 <br>
                                    열정과 경험과 전문성을 바탕으로 고객에게 무한한 신뢰와 믿음을 주는 기업
                                </p>
                            </div>
                            <div class=" main_cont_slider_text_notani m_cont_640">
                                <p class="nanumgothic fz_15 lh_16 ls_2 light m_40">
                                    환자와 의사의 밀접한 소통과 교감의 장소로서 가지는 병원의 의미를 생각할 때 분명한 차별성 가지고 
                                    밀접한 상호 교류의 공간을 제공할 수 있는 비전과 방향성을 가진 기업
                                </p>
                                <p class="nanumgothic fz_15 lh_16 ls_2 light m_40">
                                    고객에게 무한한 신뢰와 믿음을 주는 기업이라는 선명성을 가지고 고객 만족을 추구하고 
                                    병원 인테리어 분야에서 '빛을 발하는 기업'이 되기 위해 보다 안락하고 편안함을 주는 공간을 창조하는 기업
                                </p>
                                <p class="nanumgothic fz_15 lh_16 ls_2 light">
                                    시설·의료·생명·건강 그리고 행복한 삶에 이르기까지 가치 통합적으로 접근하여 '최적'의 공간을 제공하며 
                                    열정과 경험과 전문성을 바탕으로 고객에게 무한한 신뢰와 믿음을 주는 기업
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                <div class="swiper-slide footer" id="footerHeight">
                    <footer class="footer" id="footer">
                        <div class="container">
                            <div class="foot-info-area flex_row fw sb center">
                                <a href="<?php echo G5_URL?>">
                                    <img class="pc_cont_480" src="<?php echo G5_THEME_URL?>/img/f_logo_g.png" alt="안다스디자인">
                                    <img class="m_cont_480" src="<?php echo G5_THEME_URL?>/img/m_f_logo_g.png" alt="안다스디자인">
                                </a>
                                <div class="footer_info_links_wrap pc_cont_640">
                                    <div class="footer_info_links flex_row fw jc_fs center">
                                        <p class="footer-info-link-item fz_14 lh_16 ls_2 notosans light">상호: 에이디에스 디자인(ADS design)</p>
                                        <p class="footer-info-link-item fz_14 lh_16 ls_2 notosans light">대표자: 이정원</p>
                                        <p class="footer-info-link-item fz_14 lh_16 ls_2 notosans light">사업자등록번호: 614-02-93239</p>
                                        <p class="footer-info-link-item fz_14 lh_16 ls_2 notosans light">전화번호: 032-710-1180</p>
                                        <p class="footer-info-link-item fz_14 lh_16 ls_2 notosans light">E-mail: ads_design@daum.net</p>
                                        <p class="footer-info-link-item fz_14 lh_16 ls_2 notosans light">주소: 인천광역시 서구 청라에메랄드로102번길 8, 3층 302호(청라동, 우성메디피아)</p>
                                    </div>

                                    <div class="footer_bottom">
                                        <div class="footer_bottom_wrap flex_row fw jc_fs al_fe">
                                            <div class="footer_bottom_box01">
                                                <p class="fz_14 lh_16 ls_2 ta_l montserrat light">Copyright Incheon ANDAS design. All rights reserved</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="footer_info_links_wrap m_cont_640">
                                    <div class="footer_info_links footer_info_links01 flex_row fw jc_fs center">
                                        <p class="footer-info-link-item fz_14 lh_16 ls_2 notosans light">상호: 에이디에스 디자인(ADS design)</p>
                                    </div>
                                    <div class="footer_info_links footer_info_links02 flex_row fw jc_fs center">
                                        <p class="footer-info-link-item fz_14 lh_16 ls_2 notosans light">대표자: 이정원</p>
                                        <p class="footer-info-link-item fz_14 lh_16 ls_2 notosans light">사업자등록번호: 614-02-93239</p>
                                    </div>
                                    <div class="footer_info_links footer_info_links03 flex_row fw jc_fs center">
                                        <p class="footer-info-link-item fz_14 lh_16 ls_2 notosans light">전화번호: 032-710-1180</p>
                                        <p class="footer-info-link-item fz_14 lh_16 ls_2 notosans light">E-mail: ads_design@daum.net</p>
                                    </div>
                                    <div class="footer_info_links footer_info_links04 flex_row fw jc_fs center">
                                        <p class="footer-info-link-item fz_14 lh_16 ls_2 notosans light">주소: 인천광역시 서구 청라에메랄드로102번길 8, 3층 302호(청라동, 우성메디피아)</p>
                                    </div>

                                    <div class="footer_bottom">
                                        <div class="footer_bottom_wrap flex_row fw jc_fs al_fe">
                                            <div class="footer_bottom_box01">
                                                <p class="fz_14 lh_16 ls_2 ta_l montserrat light">Copyright Incheon ANDAS design. All rights reserved</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
                
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </article>
    
</main>

<script>
    <?php if($write_min || $write_max) { ?>
    // 글자수 제한
    var char_min = parseInt(<?php echo $write_min; ?>); // 최소
    var char_max = parseInt(<?php echo $write_max; ?>); // 최대
    check_byte("wr_content", "char_count");

    $(function() {
        $("#wr_content").on("keyup", function() {
            check_byte("wr_content", "char_count");
        });
    });

    <?php } ?>
    function html_auto_br(obj)
    {
        if (obj.checked) {
            result = confirm("자동 줄바꿈을 하시겠습니까?\n\n자동 줄바꿈은 게시물 내용중 줄바뀐 곳을<br>태그로 변환하는 기능입니다.");
            if (result)
                obj.value = "html2";
            else
                obj.value = "html1";
        }
        else
            obj.value = "";
    }

    function fwrite_submit(f)
    {

        <?php echo $editor_js; // 에디터 사용시 자바스크립트에서 내용을 폼필드로 넣어주며 내용이 입력되었는지 검사함   ?>

        var subject = "";
        var content = "";
        $.ajax({
            url: g5_bbs_url+"/ajax.filter.php",
            type: "POST",
            data: {
                "subject": f.wr_subject.value,
                "content": f.wr_content.value
            },
            dataType: "json",
            async: false,
            cache: false,
            success: function(data, textStatus) {
                subject = data.subject;
                content = data.content;
            }
        });

        if (subject) {
            alert("제목에 금지단어('"+subject+"')가 포함되어있습니다");
            f.wr_subject.focus();
            return false;
        }

        if (content) {
            alert("내용에 금지단어('"+content+"')가 포함되어있습니다");
            if (typeof(ed_wr_content) != "undefined")
                ed_wr_content.returnFalse();
            else
                f.wr_content.focus();
            return false;
        }

        if (document.getElementById("char_count")) {
            if (char_min > 0 || char_max > 0) {
                var cnt = parseInt(check_byte("wr_content", "char_count"));
                if (char_min > 0 && char_min > cnt) {
                    alert("내용은 "+char_min+"글자 이상 쓰셔야 합니다.");
                    return false;
                }
                else if (char_max > 0 && char_max < cnt) {
                    alert("내용은 "+char_max+"글자 이하로 쓰셔야 합니다.");
                    return false;
                }
            }
        }

        

        document.getElementById("btn_submit").disabled = "disabled";

        return true;
    }
</script>

<?php
include_once(G5_THEME_PATH.'/tail.php');
