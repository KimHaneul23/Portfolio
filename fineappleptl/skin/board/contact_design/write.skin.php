<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

// add_stylesheet('css 구문', 출력순서); 숫자가 작을 수록 먼저 출력됨
//add_stylesheet('<link rel="stylesheet" href="'.$board_skin_url.'/style.css">', 0);
include_once(G5_PATH.'/plugin/jquery-ui/datepicker.php');

add_stylesheet('<link rel="stylesheet" href="'.$board_skin_url.'/style.css">', 0);

$secret_checked = 'checked';
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
    <input type="hidden" name="wr_subject" value="<?php echo $wr_subject ?>">
    <input type="hidden" name="wr_content" value="디자인 제작 문의">
    <input type="hidden" name="wr_datetime" value="<?php echo $wr_datetime ?>">
    <input type="hidden" name="wr_1" value="<?php echo $wr_1 ?>">
    <input type="hidden" name="wr_2" value="<?php echo $wr_2 ?>">
    <input type="hidden" name="wr_3" value="<?php echo $wr_3 ?>">
    <input type="hidden" name="wr_4" value="<?php echo $wr_4 ?>">
    <input type="hidden" name="wr_5" value="<?php echo $wr_5 ?>">
    <input type="hidden" name="wr_6" value="<?php echo $wr_6 ?>">
    <input type="hidden" name="ch_wr_7[]" value="<?php echo $wr_7 ?>">
    <input type="hidden" name="wr_8" value="<?php echo $wr_8 ?>">
    <input type="hidden" name="wr_9" value="<?php echo $wr_9 ?>">
    <input type="hidden" name="wr_10" value="<?php echo $wr_10 ?>">
    
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
                
                <tr>
                    <th><label for="ca_name">프로젝트 문의</label></th>
                    <td>
                        디자인 제작 문의
                    </td>
                </tr>
                <tr>
                    <th><label for="wr_datetime">작성일</label></th>
                    <td>
                        <input type="text" name="wr_datetime" <?php if(!$write['wr_datetime']) echo "value='".date("Y-m-d H:i:s")."'"; else echo "value='".$write['wr_datetime']."'"; ?> id="wr_datetime" class="frm_input" size="29">
                    </td>
                </tr>
                <tr>
                    <th><label for="ca_name">업체명</label></th>
                    <td>
                        <input type="text" name="wr_subject" value="<?php echo $subject ?>" id="wr_subject" required class="frm_input required" maxlength="255">
                    </td>
                </tr>
                <tr>
                    <th><label for="wr_name">담당자 성함 / 직책</label></th>
                    <td>
                        <?php echo $write['wr_name'] ?>
                    </td>
                </tr>
                <tr>
                    <th><label for="wr_1">담당자 연락처</label></th>
                    <td>
                        <?php echo $write['wr_1'] ?>
                    </td>
                </tr>
                <tr>
                    <th><label for="wr_email">이메일 주소</label></th>
                    <td>
                        <?php echo $write['wr_email'] ?>
                    </td>
                </tr>
                <tr>
                    <th><label for="wr_2">프로젝트 예산</label></th>
                    <td>
                        <?php echo $write['wr_2'] ?>만원
                    </td>
                </tr>
                <tr>
                    <th><label for="wr_3">제작 페이지 수</label></th>
                    <td>
                        <?php echo $write['wr_3'] ?>
                    </td>
                </tr>
                <tr>
                    <th><label for="wr_4">제작 목적</label></th>
                    <td>
                        <?php echo $write['wr_4'] ?>
                    </td>
                </tr>
                <tr>
                    <th><label for="wr_5">제작 형태</label></th>
                    <td>
                        <?php echo $write['wr_5'] ?>
                    </td>
                </tr>
                <tr>
                    <th><label for="wr_6">제작 방법</label></th>
                    <td>
                        <?php echo $write['wr_6'] ?>
                    </td>
                </tr>
                <tr>
                    <th><label for="wr_7">제작 시 필요한 항목</label></th>
                    <td>
                        <?php echo $write['wr_7'] ?>
                        <script>
                            var f2 = document.fwrite;
                            var str2=",<?php echo $write[wr_7]?>,";
                            for (var j=0; j<f2.length; j++) {
                                if (f2.elements[j].name == "ch_wr_7[]") {
                                    if (str2.indexOf(','+f2.elements[j].value+',')>=0) {
                                        f2.elements[j].checked = true;
                                    }
                                }
                            }
                        </script>
                    </td>
                </tr>
                <tr>
                    <th><label for="wr_8">자사 프로젝트 중 마음에 들었던 홈페이지</label></th>
                    <td>
                        <?php echo $write['wr_8'] ?>
                    </td>
                </tr>
                <tr>
                    <th><label for="wr_9">기타 요청사항</label></th>
                    <td>
                        <?php echo $write['wr_9'] ?>
                    </td>
                </tr>
                
                <tr>
                    <th scope="row" style="width:85px;"><label for="wr_11">관리자 메모</label></th>
                    <td>
                        <div class="form-wrap">
                            <p class="frm_info fz_16 medium lh_16 m_5"><span style="color:#ff0000; font-weight:600;"> ※ 응대 시 응대 날짜, 응대 내용, 특이사항 등 메모가 필요한 내용 메모(관리자만 작성 가능)</span></p>
                            <textarea type="text" name="wr_11" value="<?php echo $wr_11 ?>" class=" half_input frm_input" placeholder="메모" size="29" style="line-height:1.6;"><?php echo $wr_11 ?></textarea>
                        </div>
                    </td>
                </tr>
                
                <tr>
                    <th scope="row"><label for="wr_10">응대상태</label></th>
                    <td class="td_half">
                        <select name="wr_10" id="wr_10" class="form-control full_input">
                            <?
                            $res = array('YET', 'CONFIRM', 'ABSENCE');
                            $res_text = array('확인중', '응대완료', '부재중');
                            
                            for($j=0;$j<count($res);$j++){ ?>
                            <option value="<?=$res[$j]?>" <?=$res[$j]== $write['wr_10']?'selected':''?>><?=$res_text[$j]?></option>
                            <?}?>
                        </select>
                    </td>
                </tr>
                
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

        <?php echo $captcha_js; // 캡챠 사용시 자바스크립트에서 입력된 캡챠를 검사함  ?>

        document.getElementById("btn_submit").disabled = "disabled";

        return true;
    }
    </script>
</div>
<!-- } 게시물 작성/수정 끝 -->
