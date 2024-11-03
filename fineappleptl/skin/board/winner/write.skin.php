<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

// add_stylesheet('css 구문', 출력순서); 숫자가 작을 수록 먼저 출력됨
//add_stylesheet('<link rel="stylesheet" href="'.$board_skin_url.'/style.css">', 0);
include_once(G5_PATH.'/plugin/jquery-ui/datepicker.php');

add_stylesheet('<link rel="stylesheet" href="'.$board_skin_url.'/style.css">', 0);
?>

<style>
    .cke_sc{display:none;}
    #bo_w{margin-left:0; margin-right:auto;}
</style>

<div id="bo_w" class="">
    
    <!-- 게시물 작성/수정 시작 { -->
    <form name="fwrite" id="fwrite" action="<?php echo $action_url ?>" onsubmit="return fwrite_submit(this);" method="post" enctype="multipart/form-data" autocomplete="off" style="width:<?php echo $width; ?>">
        <input type="hidden" name="uid" value="<?php echo get_uniqid(); ?>">
        <input type="hidden" name="w" value="<?php echo $w ?>">
        <input type="hidden" name="bo_table" value="<?php echo $bo_table ?>">
        <input type="hidden" name="wr_id" value="<?php echo $wr_id ?>">
        <input type="hidden" name="sca" value="<?php echo $sca ?>">
        <input type="hidden" name="sfl" value="<?php echo $sfl ?>">
        <input type="hidden" name="stx" value="<?php echo $stx ?>">
        <input type="hidden" name="spt" value="<?php echo $spt ?>">
        <input type="hidden" name="sst" value="<?php echo $sst ?>">
        <input type="hidden" name="sod" value="<?php echo $sod ?>">
        <input type="hidden" name="page" value="<?php echo $page ?>">
        <input type="hidden" name="wr_content" value="Web Award Winner">
        <?php
        $option = '';
        $option_hidden = '';
        if ($is_notice || $is_html || $is_secret || $is_mail) {
            $option = '';
            if ($is_notice) {
                $option .= "\n".'<input type="checkbox" id="notice" name="notice" value="1" '.$notice_checked.'>'."\n".'<label for="notice">공지</label>';
            }
            
            if ($is_html) {
                if ($is_dhtml_editor) {
                    $option_hidden .= '<input type="hidden" value="html1" name="html">';
                } else {
                    $option .= "\n".'<input type="checkbox" id="html" name="html" onclick="html_auto_br(this);" value="'.$html_value.'" '.$html_checked.'>'."\n".'<label for="html">html</label>';
                }
            }
            
            if ($is_secret) {
                if ($is_admin || $is_secret==1) {
                    $option .= "\n".'<input type="checkbox" id="secret" name="secret" value="secret" '.$secret_checked.'>'."\n".'<label for="secret">비밀글</label>';
                } else {
                    $option_hidden .= '<input type="hidden" name="secret" value="secret">';
                }
            }
            
            if ($is_mail) {
                $option .= "\n".'<input type="checkbox" id="mail" name="mail" value="mail" '.$recv_email_checked.'>'."\n".'<label for="mail">답변메일받기</label>';
            }
        }
        
        echo $option_hidden;
        ?>
        
        <div class="tbl_frm01 tbl_wrap">
            <table>
                <tbody>
                    <?php if ($is_name) { ?>
                    <tr>
                        <th scope="row"><label for="wr_name">이름<strong class="c-green2"> *</strong></label></th>
                        <td><input type="text" name="wr_name" value="<?php echo $name ?>" id="wr_name" required class="frm_input required" size="10" maxlength="20"></td>
                    </tr>
                    <?php } ?>
                    
                    <?php if ($is_password) { ?>
                    <tr>
                        <th scope="row"><label for="wr_password">비밀번호<strong class="c-green2"> *</strong></label></th>
                        <td><input type="password" name="wr_password" id="wr_password" <?php echo $password_required ?> class="frm_input <?php echo $password_required ?>" maxlength="20"></td>
                    </tr>
                    <?php } ?>
                    
                    <?php if ($is_email) { ?>
                    <tr>
                        <th scope="row"><label for="wr_email">이메일</label></th>
                        <td><input type="text" name="wr_email" value="<?php echo $email ?>" id="wr_email" class="frm_input email" size="50" maxlength="100"></td>
                    </tr>
                    <?php } ?>
                    
                    <?php if ($is_homepage) { ?>
                    <tr>
                        <th scope="row"><label for="wr_homepage">홈페이지</label></th>
                        <td><input type="text" name="wr_homepage" value="<?php echo $homepage ?>" id="wr_homepage" class="frm_input" size="50"></td>
                    </tr>
                    <?php } ?>
                    
                    <?php if ($option) { ?>
                    <!--<tr>
                        <th scope="row">옵션</th>
                        <td><?php echo $option ?></td>
                    </tr>-->
                    <?php } ?>
                    
                    <?php if ($is_category) { ?>
                    <tr>
                        <th><label for="ca_name">카테고리</label></th>
                        <td>
                            <div style="display:flex; justify-content:flex-start; align-items:center; gap:0 10px;">
                                <?php
                                $arr = explode("|",$board['bo_category_list']);
                                foreach($arr as $str) { ?>
                                    <label for="ca_name" style="display:flex; justify-content:flex-start; align-items:center; font-weight:500; letter-spacing:-0.01em;"><input type="checkbox" name="chk_ca_name[]" value="<?php echo $str; ?>">&nbsp;<?php echo $str; ?></label>
                                <?php } ?>
                                <script>
                                    var f = document.fwrite;
                                    var str=",<?php echo $write['ca_name']?>,";
                                    for (var i=0; i<f.length; i++) {
                                        if (f.elements[i].name == "chk_ca_name[]") {
                                            if (str.indexOf(','+f.elements[i].value+',')>=0) {
                                                f.elements[i].checked = true;
                                            }
                                        }
                                    }
                                </script>
                            </div>
                        </td>
                    </tr>
                    <?php } ?>
                    <!--
                    <tr>
                        <th><label for="wr_15">메인 노출여부</label></th>
                        <td>
                            <span class="frm_info" style="color:#5b747e; font-size:13px; letter-spacing:-0.02em; font-weight:600;">최대 4개의 게시물이 노출됩니다.</span>
                            <div style="display:flex; justify-content:flex-start; align-items:center; gap:0 10px; ">
                                <label style="display:flex; justify-content:flex-start; align-items:center; font-weight:500;">
                                    <input type="radio" name="wr_15" value="0" required <?php if($write['wr_15'] == '0' || $w != 'u') echo "checked='checked'"; ?> class="checkbox">&nbsp;Y
                                </label>
                                <label style="display:flex; justify-content:flex-start; align-items:center; font-weight:500;">
                                    <input type="radio" name="wr_15" value="1" required <?php if($write['wr_15'] == '1') echo "checked='checked'"; ?> class="checkbox">&nbsp;N
                                </label>
                            </div>
                        </td>
                    </tr>
                    -->
                    <tr>
                        <th><label for="wr_1">수상작</label></th>
                        <td>
                            <div style="display:flex; justify-content:flex-start; align-items:center; gap:0 10px;">
                                <label for="wr_1" style="display:flex; justify-content:flex-start; align-items:center; font-weight:500; letter-spacing:-0.01em;"><input type="checkbox" id="wr_1" name="wr_1" value="g" <?php if($write['wr_1'] == 'g') echo "checked='checked'"; ?>>&nbsp;지디웹</label>
                                <label for="wr_2" style="display:flex; justify-content:flex-start; align-items:center; font-weight:500; letter-spacing:-0.01em;"><input type="checkbox" id="wr_2" name="wr_2" value="i" <?php if($write['wr_2'] == 'i') echo "checked='checked'"; ?>>&nbsp;아이어워즈 대상 수상</label>
                                <label for="wr_3" style="display:flex; justify-content:flex-start; align-items:center; font-weight:500; letter-spacing:-0.01em;"><input type="checkbox" id="wr_3" name="wr_3" value="i2" <?php if($write['wr_3'] == 'i2') echo "checked='checked'"; ?>>&nbsp;아이어워즈 최우수상</label>
                                <label for="wr_4" style="display:flex; justify-content:flex-start; align-items:center; font-weight:500; letter-spacing:-0.01em;"><input type="checkbox" id="wr_4" name="wr_4" value="n" <?php if($write['wr_4'] == 'n') echo "checked='checked'"; ?>>&nbsp;앤어워즈 수상</label>
                            </div>
                        </td>
                    </tr>
                    
                    <tr>
                        <th><label for="wr_7">제작형태</label></th>
                        <td>
                            <div style="display:flex; justify-content:flex-start; align-items:center; gap:0 10px;">
                                <label for="wr_7_n" style="display:flex; justify-content:flex-start; align-items:center; font-weight:500; letter-spacing:-0.01em;"><input type="radio" id="wr_7_n" name="wr_7" value="new" <?php if($write['wr_7'] == 'new') echo "checked='checked'"; ?>>&nbsp;신규</label>
                                <label for="wr_7_r" style="display:flex; justify-content:flex-start; align-items:center; font-weight:500; letter-spacing:-0.01em;"><input type="radio" id="wr_7_r" name="wr_7" value="renewal" <?php if($write['wr_7'] == 'renewal') echo "checked='checked'"; ?>>&nbsp;리뉴얼</label>
                            </div>
                        </td>
                    </tr>
                    
                    <tr>
                        <th scope="row"><label for="wr_subject">프로젝트</label></th>
                        <td>
                            <div id="autosave_wrapper">
                                <input type="text" name="wr_subject" value="<?php echo $subject ?>" id="wr_subject" placeholder="프로젝트" required class="eventTit_ip frm_input" size="50" maxlength="255">
                            </div>
                        </td>
                    </tr>
                    
                    <tr>
                        <th scope="row">PC 이미지</th>
                        <td>
                            <p class="frm_info fz_16 normal lh_16 m_5">이미지 크기는 <span style="color:#ff0000;">가로 1920px, 세로 937px</span>로 해주세요.</p>
                            <input type="file" name="bf_file[]" id="file1" title="파일첨부 1 :  용량 <?php echo $upload_max_filesize ?> 이하만 업로드 가능" <?php if($w != 'u'){ echo 'required'; }else if(!$file[0]['file']){ echo 'required'; } ?> class="frm_file frm_input"><span style="color:#ff0000; font-size:13px; letter-spacing:-0.02em; font-weight:600;">&ensp;* 필수 업로드</span>
                            <p onclick="fileReset(file1)" class="frm_info fz_16 normal lh_16 m_5" style="display:flex; justify-content:flex-start; align-items:center; margin:0.5rem 0 0; cursor:pointer;">
                                <span style="display:inline-block; width:1rem; height:1rem; border:1px solid #000;"></span><span style="display:inline-block; color:#000; font-size:11px; letter-spacing:-0.02em; font-weight:300;">&ensp;첨부 취소</span>
                            </p>
                            
                            <?php if($w == 'u' && $file[0]['file']) { ?>
                            <span class="file_del" style="font-size:11px;">
                                <input type="checkbox" id="bf_file_del0" name="bf_file_del[0]" value="1"> <label for="bf_file_del0"><?php echo $file[0]['source'].'('.$file[0]['size'].')';  ?>첨부 파일 삭제</label>
                            </span>
                            <?php } ?>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">모바일 이미지</th>
                        <td>
                            <p class="frm_info fz_16 normal lh_16 m_5">이미지 크기는 <span style="color:#ff0000;">가로 1116px, 세로 756px</span>로 해주세요.</p>
                            <input type="file" name="bf_file[]" id="file2" title="파일첨부 2 :  용량 <?php echo $upload_max_filesize ?> 이하만 업로드 가능" <?php if($w != 'u'){ echo 'required'; }else if(!$file[0]['file']){ echo 'required'; } ?> class="frm_file frm_input"><span style="color:#ff0000; font-size:13px; letter-spacing:-0.02em; font-weight:600;">&ensp;* 필수 업로드</span>
                            <p onclick="fileReset(file2)" class="frm_info fz_16 normal lh_16 m_5" style="display:flex; justify-content:flex-start; align-items:center; margin:0.5rem 0 0; cursor:pointer;">
                                <span style="display:inline-block; width:1rem; height:1rem; border:1px solid #000;"></span><span style="display:inline-block; color:#000; font-size:11px; letter-spacing:-0.02em; font-weight:300;">&ensp;첨부 취소</span>
                            </p>
                            
                            <?php if($w == 'u' && $file[1]['file']) { ?>
                            <span class="file_del" style="font-size:11px;">
                                <input type="checkbox" id="bf_file_del1" name="bf_file_del[1]" value="2"> <label for="bf_file_del1"><?php echo $file[1]['source'].'('.$file[1]['size'].')';  ?>첨부 파일 삭제</label>
                            </span>
                            <?php } ?>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">프로젝트 로고</th>
                        <td>
                            <input type="file" name="bf_file[]" id="file3" title="파일첨부 3 :  용량 <?php echo $upload_max_filesize ?> 이하만 업로드 가능" <?php if($w != 'u'){ echo 'required'; }else if(!$file[0]['file']){ echo 'required'; } ?> class="frm_file frm_input"><span style="color:#ff0000; font-size:13px; letter-spacing:-0.02em; font-weight:600;">&ensp;* 필수 업로드</span>
                            <p onclick="fileReset(file3)" class="frm_info fz_16 normal lh_16 m_5" style="display:flex; justify-content:flex-start; align-items:center; margin:0.5rem 0 0; cursor:pointer;">
                                <span style="display:inline-block; width:1rem; height:1rem; border:1px solid #000;"></span><span style="display:inline-block; color:#000; font-size:11px; letter-spacing:-0.02em; font-weight:300;">&ensp;첨부 취소</span>
                            </p>
                            
                            <?php if($w == 'u' && $file[2]['file']) { ?>
                            <span class="file_del" style="font-size:11px;">
                                <input type="checkbox" id="bf_file_del2" name="bf_file_del[2]" value="3"> <label for="bf_file_del2"><?php echo $file[2]['source'].'('.$file[2]['size'].')';  ?>첨부 파일 삭제</label>
                            </span>
                            <?php } ?>
                        </td>
                    </tr>
                    <script>
                        function fileReset(file) {
                            var file_parent_el = file.parentNode;
                            var file_next_el = file.nextSibling;
                            var form_temp = document.createElement("FORM");
                            form_temp.appendChild(file);
                            form_temp.reset();
                            file_parent_el.insertBefore(file, file_next_el);
                            form_temp = null;
                        }
                    </script>
                    
                    <tr>
                        <th scope="row"><label for="wr_5">수상연도</label></th>
                        <td>
                            <div class="cont">
                                <input type="text" name="wr_5" value="<?php echo $write['wr_5'] ?>" class="frm_input full_input" placeholder="프로젝트 수상연도" size="50" maxlength="255" >
                            </div>
                        </td>
                    </tr>
                    
                    <tr style="display:none;">
                        <th scope="row"><label for="wr_hit">조회수</label></th> 
                        <td class="td_half">
                            <input type="text" name="wr_hit" <?php if(!$write['wr_hit']) echo "value='0'"; else echo "value='".$write['wr_hit']."'"; ?> id="wr_hit" class="frm_input" size="29">
                        </td>
                    </tr>
                    
                    <tr>
                        <th scope="row"><label for="wr_datetime">날짜</label></th>
                        <td class="td_half">
                            <input type="text" name="wr_datetime" <?php if(!$write['wr_datetime']) echo "value='".date("Y-m-d H:i:s")."'"; else echo "value='".$write['wr_datetime']."'"; ?> id="wr_datetime" class="frm_input" size="29"><span style="color:#000; font-size:13px; letter-spacing:-0.02em; font-weight:600;">&ensp;게시물 업로드 날짜</span>
                        </td>
                    </tr>
                    
                    <tr>
                        <th scope="row"><label for="wr_6">HP 연결 링크(URL)</label></th>
                        <td>
                            <div class="cont">
                                <input type="text" name="wr_6" value="<?php echo $write['wr_6'] ?>" class="frm_input full_input" placeholder="HP URL" size="50" maxlength="255" >
                            </div>
                        </td>
                    </tr>
                    
                    <?php if ($is_guest) { //자동등록방지  ?>
                    <tr>
                        <th scope="row">자동등록방지</th>
                        <td>
                            <?php echo $captcha_html ?>
                        </td>
                    </tr>
                    <?php } ?>
                    
                </tbody>
            </table>
        </div>
        
        <div class="btn_fixed_top">
            <a href="javascript:window.history.back();" class="btn_02 btn">취소</a>
            <button type="submit" id="btn_submit" accesskey="s" class="btn_01 btn">작성완료</button>
        </div>
    </form>
    
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
        
        function html_auto_br(obj){
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
        
        function fwrite_submit(f){
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
            
            <?php echo $captcha_js; // 캡챠 사용시 자바스크립트에서 입력된 캡챠를 검사함  ?>
            
            document.getElementById("btn_submit").disabled = "disabled";
            
            return true;
        }
    </script>
</div>
<!-- } 게시물 작성/수정 끝 -->