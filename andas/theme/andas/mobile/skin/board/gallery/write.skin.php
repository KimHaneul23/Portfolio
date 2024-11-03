<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

include_once(G5_THEME_PATH.'/head.php');

//add_stylesheet('<link rel="stylesheet" href="'.G5_THEME_URL.'/skin/board/gallery/autoptimize_bbs.css">', 0);
//add_stylesheet('<link rel="stylesheet" href="'.G5_THEME_URL.'/skin/board/gallery/style.css">', 0);


// 웹사이트 타이틀
$g5['title'] = 'PORTFOLIO';

?>
<link rel="stylesheet" href="<?php echo G5_JS_URL; ?>/font-awesome/css/font-awesome.min.css">
<link href="<?php echo G5_THEME_URL?>/skin/board/gallery/autoptimize_bbs.css" rel="stylesheet">
<link href="<?php echo G5_THEME_URL?>/skin/board/gallery/style.css" rel="stylesheet">
<link href="<?php echo G5_THEME_URL?>/css/default.css" rel="stylesheet">

<script>
    $(document).ready(function(){
        $('.main-header').removeClass('color_change');
        $('#move_top_btn').addClass('slideBG_F');
    });
</script>
<style>
    .top_menu{color:rgba(60, 55, 51, 0.5);}
    .color_change .top_menu{color:#fff;}
    .main-header.scrolled .top_menu > a{color:rgba(60, 55, 51, 0.5);}
    .color_change.scrolled .top_menu > a{color:rgba(60, 55, 51, 0.5);}
    .top_menu02{color:#3c3733; font-weight: 300;}
    .color_change .top_menu02{color:#3c3733;}
    .main-header.scrolled .top_menu02 > a{color:#3c3733;}
    .color_change.scrolled .top_menu02 > a{color:#3c3733;}
    
    .move_top_btn_sub{display:none;}
</style>

<div class="container-1280 gallery_container" id="bo_w">
<div id="ajax-a" class="bo_w">
	<div class="ajax-b">
		<div class="main-content">
			<div class="section">
                <div class="container pt_60">
                    <div id="comments" class="item comments animated">
                        <div class="comments-form">
                            <div id="respond" class="comment-respond">
                                <form name="fwrite" id="fwrite" action="<?php echo $action_url ?>" onsubmit="return fwrite_submit(this);" method="post" enctype="multipart/form-data" autocomplete="off" style="width:<?php echo $width; ?>">
                                    <input type="hidden" name="uid" value="<?php echo get_uniqid(); ?>">
                                    <input type="hidden" name="w" value="<?php echo $w ?>">
                                    <input type="hidden" name="bo_table" value="<?php echo $bo_table ?>">
                                    <input type="hidden" name="wr_id" value="<?php echo $wr_id ?>">
                                    <input type="hidden" name="sca" value="<?php echo $sca ?>">
                                    <input type="hidden" name="str" value="<?php echo $ca_name ?>">
                                    <input type="hidden" name="sfl" value="<?php echo $sfl ?>">
                                    <input type="hidden" name="stx" value="<?php echo $stx ?>">
                                    <input type="hidden" name="spt" value="<?php echo $spt ?>">
                                    <input type="hidden" name="sst" value="<?php echo $sst ?>">
                                    <input type="hidden" name="sod" value="<?php echo $sod ?>">
                                    <input type="hidden" name="page" value="<?php echo $page ?>">
                                    <?php
                                    $option = '';
                                    $option_hidden = '';
                                    if ($is_notice || $is_html || $is_secret || $is_mail) { 
                                        $option = '';
                                        if ($is_notice) {
                                            $option .= PHP_EOL.'<li class="chk_box"><input type="checkbox" id="notice" name="notice"  class="selec_chk" value="1" '.$notice_checked.'>'.PHP_EOL.'<label for="notice"><span></span>공지</label></li>';
                                        }
                                        if ($is_html) {
                                            if ($is_dhtml_editor) {
                                                $option_hidden .= '<input type="hidden" value="html1" name="html">';
                                            } else {
                                                $option .= PHP_EOL.'<li class="chk_box"><input type="checkbox" id="html" name="html" onclick="html_auto_br(this);" class="selec_chk" value="'.$html_value.'" '.$html_checked.'>'.PHP_EOL.'<label for="html"><span></span>html</label></li>';
                                            }
                                        }
                                        if ($is_secret) {
                                            if ($is_admin || $is_secret==1) {
                                                $option .= PHP_EOL.'<li class="chk_box"><input type="checkbox" id="secret" name="secret"  class="selec_chk" value="secret" '.$secret_checked.'>'.PHP_EOL.'<label for="secret"><span></span>비밀글</label></li>';
                                            } else {
                                                $option_hidden .= '<input type="hidden" name="secret" value="secret">';
                                            }
                                        }
                                        if ($is_mail) {
                                            $option .= PHP_EOL.'<li class="chk_box"><input type="checkbox" id="mail" name="mail"  class="selec_chk" value="mail" '.$recv_email_checked.'>'.PHP_EOL.'<label for="mail"><span></span>답변메일받기</label></li>';
                                        }
                                    }
                                    echo $option_hidden;
                                    ?>
									
                                    <span class="tit">분류</span>
                                    <div class='cont'>
                                        <?php $arr = explode("|",$board['bo_category_list']);
                                            foreach($arr as $str) { ?>
                                            <input type="checkbox" name="chk_ca_name[]" value="<?php echo $str; ?>" <?php if($ca_name == $str) echo "checked"; ?>> <?php echo $str; ?>
                                        <?php } ?>
                                        <script>
                                            var f = document.fwrite;
                                            var str=",<?php echo $write[ca_name]?>,";
                                            for (var i=0; i<f.length; i++) {
                                                if (f.elements[i].name == "chk_ca_name[]") {
                                                    if (str.indexOf(','+f.elements[i].value+',')>=0) {
                                                        f.elements[i].checked = true;
                                                    }
                                                }
                                            }
                                        </script>
                                    </div>
                                    <!--
                                    <?php if ($is_category) { ?>
                                    <div class="bo_w_select write_div">
                                        <label for="ca_name" class="sound_only">분류<strong>필수</strong></label>
                                        <select name="ca_name" id="ca_name" required>
                                            <option value="">분류를 선택하세요</option>
                                            <?php echo $category_option ?>
                                        </select>
                                    </div>
                                    <?php } ?>
                                    -->

                                    <?php if ($is_password) { ?>
                                    <div class="theme-form mt-4">
                                        <div class="row">

                                            <div class="col-6">
                                                <input type="password" name="wr_password" id="wr_password" <?php echo $password_required ?> class="form-control field txt <?php echo $password_required ?> required" placeholder="비밀번호" required>
                                            </div>


                                            <div class="col-6">
                                                <input type="text" name="wr_email" value="<?php echo $email ?>" id="wr_email" class="form-control field txt email required" placeholder="이메일" required>
                                            </div>
                                        </div>

                                    </div>
                                    <?php } ?>

                                    <div class="theme-form mt-3">
                                        <span class="tit">제목</span>
                                        <div class='cont'>
                                            <input type="text" name="wr_subject" value="<?php echo $subject ?>" id="wr_subject" class="form-control field txt required" placeholder="제목" required>
                                        </div>
                                    </div>
							
                                    <div class="theme-form mt-3">
                                        <span class="tit">Type</span>
                                        <div class='cont'>
                                            <input type="text" name="wr_1" value="<?php echo $write['wr_1']?>" id="wr_1" class="form-control field txt required" placeholder="Type" required>
                                        </div>
                                    </div>

                                    <div class="theme-form mt-3">
                                        <span class="tit">Project</span>
                                        <div class='cont'>
                                            <input type="text" name="wr_2" value="<?php echo $write['wr_2']?>" id="wr_2" class="form-control field txt required" placeholder="Project" required>
                                        </div>
                                    </div>

                                    <div class="theme-form mt-3">
                                        <span class="tit">Completion</span>
                                        <div class='cont'>
                                            <input type="text" name="wr_3" value="<?php echo $write['wr_3']?>" id="wr_3" class="form-control field txt required" placeholder="Completion" required>
                                        </div>
                                    </div>

                                    <div class="theme-form mt-3">
                                        <span class="tit">Location</span>
                                        <div class='cont'>
                                            <input type="text" name="wr_4" value="<?php echo $write['wr_4']?>" id="wr_4" class="form-control field txt required" placeholder="Location" required>
                                        </div>
                                    </div>

                                    <div class="theme-form mt-3">
                                        <span class="tit">Space area</span>
                                        <div class='cont'>
                                            <input type="text" name="wr_5" value="<?php echo $write['wr_5']?>" id="wr_5" class="form-control field txt required" placeholder="Space_area" required>
                                        </div>
                                    </div>
                                    <!--
                                    <div class="theme-form mt-3">
                                        <div class="form-group" style="font-size:12px;" class="txt">
                                            <?php if ($option) { ?>
                                            <div class="write_div">
                                                <span class="sound_only">옵션</span>
                                                <?php echo $option ?>
                                            </div>
                                            <?php } ?>
                                        </div>
                                    </div>
                                    -->
                                    <style>
                                        textarea {background-color:#f3f3f3; border:0px;}
                                    </style>
                                    <div class="theme-form mt-3">
                                        <div class="form-group w_bo_edit <?php echo $is_dhtml_editor ? $config['cf_editor'] : ''; ?>">
                                            <span class="tit">내용 - 내용을 입력하지 않을 경우 보여지지 않으니 보여질 내용이 있으실 경우에만 입력해주시면 됩니다.</span>
                                            <div class="cont">
                                                <?php echo $editor_html; // 에디터 사용시는 에디터로, 아니면 textarea 로 노출 ?>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="bf_file_text">
                                        <p class="medium fz_14 ls_2">
                                            <span style="color:#ff0000;">★</span> 썸네일 이미지는 최소 가로 : 600px, 세로 : 410px 이상으로 업로드해 주시기 바랍니다!<br>
                                            <span class="fz_14 ls_2">썸네일 이미지 사이즈 같은 경우 비율에 맞게 자동으로 사이즈가 변환되기 때문에 가로, 세로 사이즈가 위 사이즈보다 크거나 비율이 다를 경우 이미지에 짤리는 부분이 생기거나 이미지가 깨져보일 수 있습니다.</span>
                                        </p>
                                        <p class="medium fz_14 ls_2" style="margin-top:10px; color:#ff0000;">
                                            파일 업로드 용량 최대 40M 이하 업로드 가능, 5 MB = 5,242,880 bytes <br>
                                            업로드 파일 한개당 5,242,880 bytes 이하
                                        </p>
                                    </div>
                                    
                                    <div class="theme-form mt-3">
                                        <div class="form-group">
                                            <span class="tit fz_14">썸네일 이미지 - <span class="medium" style="color:#ff0000;">필수</span></span>
                                            <div class="cont">
                                                <input type="file" name="bf_file[]" id="bf_file_0" title="파일첨부 0 : 용량 <?php echo $upload_max_filesize ?> 이하만 업로드 가능" class="form-control field txt" style="line-height:32px;">
                                            </div>
                                        </div>
                                        <?php if($w == 'u' && $file[0]['file']) { ?>
                                        <span class="file_del" style="font-size:11px;">
                                            <input type="checkbox" id="bf_file_del0" name="bf_file_del[0]" value="0"> <label for="bf_file_del0"><?php echo $file[0]['source'].'('.$file[0]['size'].')';  ?> 파일 삭제</label>
                                        </span>
                                        <?php } ?>
                                    </div>
                                    
                                    <div class="theme-form mt-3">
                                        <div class="form-group">
                                            <span class="tit fz_14">상단 이미지(설명 옆에 보여질 이미지) - <span class="medium" style="color:#ff0000;">필수</span></span>
                                            <div class="cont">
                                                <input type="file" name="bf_file[]" id="bf_file_1" title="파일첨부 1 : 용량 <?php echo $upload_max_filesize ?> 이하만 업로드 가능" class="form-control field txt" style="line-height:32px;">
                                            </div>
                                        </div>
                                        <?php if($w == 'u' && $file[1]['file']) { ?>
                                        <span class="file_del" style="font-size:11px;">
                                            <input type="checkbox" id="bf_file_del1" name="bf_file_del[1]" value="1"> <label for="bf_file_del1"><?php echo $file[1]['source'].'('.$file[1]['size'].')';  ?> 파일 삭제</label>
                                        </span>
                                        <?php } ?>
                                    </div>
                                    
                                    <div class="theme-form mt-3">
                                        <div class="form-group">
                                            <span class="tit fz_14">큰 이미지(게시물 상단에 위치될 큰 사이즈의 이미지) - 첨부하지 않을 경우 보여지지 않으니 업로드 필요 시 첨부해주시면 됩니다.(1장씩만 첨부되며 최대 3장까지 등록 가능)</span>
                                            <div class="cont">
                                                <input type="file" name="bf_file[]" id="bf_file_2" title="파일첨부 2 : 용량 <?php echo $upload_max_filesize ?> 이하만 업로드 가능" class="form-control field txt" style="line-height:32px;">
                                            </div>
                                        </div>
                                        <?php if($w == 'u' && $file[2]['file']) { ?>
                                        <span class="file_del" style="font-size:11px;">
                                            <input type="checkbox" id="bf_file_del2" name="bf_file_del[2]" value="2"> <label for="bf_file_del2"><?php echo $file[2]['source'].'('.$file[2]['size'].')';  ?> 파일 삭제</label>
                                        </span>
                                        <?php } ?>
                                    </div>
                                    
                                    <div class="theme-form mt-3">
                                        <div class="form-group">
                                            <span class="tit fz_14">큰 이미지(게시물 상단에 위치될 큰 사이즈의 이미지) - 첨부하지 않을 경우 보여지지 않으니 업로드 필요 시 첨부해주시면 됩니다.(1장씩만 첨부되며 최대 3장까지 등록 가능)</span>
                                            <div class="cont">
                                                <input type="file" name="bf_file[]" id="bf_file_3" title="파일첨부 3 : 용량 <?php echo $upload_max_filesize ?> 이하만 업로드 가능" class="form-control field txt" style="line-height:32px;">
                                            </div>
                                        </div>
                                        <?php if($w == 'u' && $file[3]['file']) { ?>
                                        <span class="file_del" style="font-size:11px;">
                                            <input type="checkbox" id="bf_file_del3" name="bf_file_del[3]" value="3"> <label for="bf_file_del3"><?php echo $file[3]['source'].'('.$file[3]['size'].')';  ?> 파일 삭제</label>
                                        </span>
                                        <?php } ?>
                                    </div>
                                    
                                    <div class="theme-form mt-3">
                                        <div class="form-group">
                                            <span class="tit fz_14">큰 이미지(게시물 상단에 위치될 큰 사이즈의 이미지) - 첨부하지 않을 경우 보여지지 않으니 업로드 필요 시 첨부해주시면 됩니다.(1장씩만 첨부되며 최대 3장까지 등록 가능)</span>
                                            <div class="cont">
                                                <input type="file" name="bf_file[]" id="bf_file_4" title="파일첨부 4 : 용량 <?php echo $upload_max_filesize ?> 이하만 업로드 가능" class="form-control field txt" style="line-height:32px;">
                                            </div>
                                        </div>
                                        <?php if($w == 'u' && $file[4]['file']) { ?>
                                        <span class="file_del" style="font-size:11px;">
                                            <input type="checkbox" id="bf_file_del4" name="bf_file_del[4]" value="4"> <label for="bf_file_del4"><?php echo $file[4]['source'].'('.$file[4]['size'].')';  ?> 파일 삭제</label>
                                        </span>
                                        <?php } ?>
                                    </div>
							        
                                    <div class="theme-form mt-3">
                                        <div class="form-group">
                                            <span class="tit fz_14">슬라이드 이미지(게시물 큰 이미지 밑에 보여질 슬라이드 이미지 - 클릭 시 슬라이드로 확인 가능) - 최대 20개까지 동시 등록 가능</span>
                                            <div class="cont">
                                                <input multiple="multiple" type="file" name="bf_file[]" id="bf_file_5" title="파일첨부 5 : 용량 <?php echo $upload_max_filesize ?> 이하만 업로드 가능" class="form-control field txt" style="line-height:32px;">
                                            </div>
                                        </div>
                                        <?php if($w == 'u' && $file[5]['file']) { ?>
                                        <span class="file_del" style="font-size:11px;">
                                            <input type="checkbox" id="bf_file_del5" name="bf_file_del[5]" value="5"> <label for="bf_file_del5"><?php echo $file[5]['source'].'('.$file[5]['size'].')';  ?> 파일 삭제</label>
                                        </span>
                                        <?php } ?>
                                    </div>

                                    <?php if ($is_use_captcha) { //자동등록방지  ?>
                                    <div class="form-group">
                                        <?php echo $captcha_html ?>
                                    </div>
                                    <?php } ?>
							
                                    <div class="form-submit pt_60">
                                        <input type="button" value="취소" class="submit real_btn" onClick="location.href='<?php echo G5_URL ?>/bbs/board.php?bo_table=<?php echo $bo_table ?>'">
                                        <input type="submit" value="작성완료" id="btn_submit" class="real_btn" accesskey="s" class="submit" style="position: relative; display: inline-block; border-radius: 4px; background-color:#080808; padding: 10px 20px; color: #fff; font-size: 14px; font-weight: 500; overflow: hidden; border: none;"/>
                                    </div>
						        </form>
					        </div>
                        </div>
                    </div>
                </div>
            </div>
	    </div>
	</div>
</div>
</div>


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
        <?php //echo $editor_js; // 에디터 사용시 자바스크립트에서 내용을 폼필드로 넣어주며 내용이 입력되었는지 검사함   ?>
        
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

        <?php //echo $captcha_js; // 캡챠 사용시 자바스크립트에서 입력된 캡챠를 검사함  ?>

        document.getElementById("btn_submit").disabled = "disabled";

        return true;
    }
</script>

<?php
include_once(G5_THEME_PATH.'/tail.php');
?>
    

