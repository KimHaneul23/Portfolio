<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

//add_stylesheet('<link rel="stylesheet" href="'.G5_THEME_URL.'/skin/board/gallery/autoptimize_bbs.css">', 0);
//add_stylesheet('<link rel="stylesheet" href="'.G5_THEME_URL.'/skin/board/gallery/style.css">', 0);
?>
<link rel="stylesheet" href="<?php echo G5_JS_URL; ?>/font-awesome/css/font-awesome.min.css">
<link href="<?php echo G5_THEME_URL?>/skin/board/gallery/autoptimize_bbs.css" rel="stylesheet">
<link href="<?php echo G5_THEME_URL?>/skin/board/gallery/style.css" rel="stylesheet">
<link href="<?php echo G5_THEME_URL?>/css/default.css" rel="stylesheet">

<div class="container-1200 gallery_container">
<div id="ajax-a" class="w_bo_w">
	<div class="ajax-b">

		<div class="main-content">

			<div class="section">
						<div class="container">
							<div id="comments" class="item comments animated">
								<div class="comments-form">

									<div id="respond" class="comment-respond">


									<form name="fwrite" id="fwrite" action="<?php echo $action_url ?>" onsubmit="return fwrite_submit(this);" method="post" enctype="multipart/form-data" autocomplete="off" style="width:<?php echo $width; ?>" class="comment-form">
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
												$option .= "\n".'<input type="checkbox" id="html" name="html" onclick="html_auto_br(this);" value="'.$html_value.'" '.$html_checked.'>'."\n".'<label for="html">HTML</label>';
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



							<div class="theme-form mt-4">
								<div class="row">
								<?php if ($is_name) { ?>
									<div class="col-6">
										<input type="text" name="wr_name" id="wr_name" class="form-control field txt required" value="<?php echo $name ?>" placeholder="성함" required>
									</div>
								<?php } ?>
								<span class="tit">분류</span>
								<div class='cont'>
									<?php $arr = explode("|",$board['bo_category_list']);
										foreach($arr as $str) { ?>
										<input type="checkbox" name="chk_ca_name[]" value="<?php echo $str; ?>"> <?php echo $str; ?>
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
								<!-- <?php if ($is_category) { ?>
									<span class="tit">분류</span>
									<div class='cont'>
										<select name="ca_name" id="ca_name" class="form-control field txt" required>
											<option value="">분류 선택</option>
											<?php echo $category_option ?>
										</select>
									</div>
								<?php } ?> -->
								</div>
							</div>

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
								<div class="form-group" style="font-size:12px;" class="txt">
									<?php if ($option) { ?>
									<div class="write_div">
										<span class="sound_only">옵션</span>
										<?php echo $option ?>
									</div>
									<?php } ?>
								</div>
							</div>


							
							<style>
								textarea {background-color:#f3f3f3; border:0px;}
							</style>

							<div class="theme-form mt-3">
							<div class="form-group w_bo_edit <?php echo $is_dhtml_editor ? $config['cf_editor'] : ''; ?>">
								<!-- <div class="form-group w_bo_edit<?php echo $is_dhtml_editor ? $config['cf_editor'] : ''; ?>" class="form-control txt"> -->
								<span class="tit">내용</span>
								<div class="cont">
									<?php echo $editor_html; // 에디터 사용시는 에디터로, 아니면 textarea 로 노출 ?>
								</div>
								</div>
							</div>




							<!-- 유튜브 동영상 ID입력부분 -->
							
							<!-- <div class="theme-form mt-3">
								<span class="df">유튜브 ID 예시) https://www.youtube.com/watch?v=<span class="dr">ID</span></span>
							</div>

							<div class="theme-form mt-0">
								<div class="form-group">
									<input type="text" name="wr_10" value="<?php echo $write['wr_10'] ?>" class="form-control field txt" placeholder="유튜브 동영상 ID">
								</div>
							</div> -->

							<!-- //유튜브 동영상 ID입력부분 -->



							
							<!-- <?php for ($i=1; $is_link && $i<=G5_LINK_COUNT; $i++) { ?>
							<div class="theme-form mt-3">
								<div class="form-group">
									<input type="text" name="wr_link<?php echo $i ?>" value="<?php if($w=="u"){echo$write['wr_link'.$i];} ?>" id="wr_link<?php echo $i ?>" class="form-control field txt" placeholder="링크">
								</div>
							</div>
							<?php } ?> -->
							
							<div class="bf_file_text">
							    <p class="medium fz_14 ls_2">
							        <span style="color:#ff0000;">★</span> 썸네일 이미지는 가로: 440px, 세로 : 290px 로 업로드해 주시기 바랍니다!<br>
							        <span class="fz_14 ls_2">가로, 세로 사이즈가 위 사이즈보다 크거나 비율이 다를 경우 이미지 사이즈가 비율에 맞게 자동으로 변환되기 때문에 이미지에 짤리는 부분이 생길수 있습니다.</span>
							    </p>
							</div>
							
							<div class="theme-form mt-3">
								<div class="form-group">
								<span class="tit">썸네일 이미지</span>
								<div class="cont">
									<input type="file" name="bf_file[]" id="bf_file_<?php echo $i+1 ?>" title="파일첨부 <?php echo $i+1 ?> : 용량 <?php echo $upload_max_filesize ?> 이하만 업로드 가능" class="form-control field txt" style="line-height:32px;">
								</div>
								</div>
								<?php if($w == 'u' && $file[$i]['file']) { ?>
									<span class="file_del" style="font-size:11px;">
										<input type="checkbox" id="bf_file_del<?php echo $i ?>" name="bf_file_del[<?php echo $i;  ?>]" value="1"> <label for="bf_file_del<?php echo $i ?>"><?php echo $file[$i]['source'].'('.$file[$i]['size'].')';  ?> 파일 삭제</label>
									</span>
									<?php } ?>
							</div>

							<?php if ($is_use_captcha) { //자동등록방지  ?>
								<div class="form-group">
									<?php echo $captcha_html ?>
								</div>
							<?php } ?>



<br>
<br>

							<p class="form-submit">
							<input type="button" value="취소" class="submit real_btn" onClick="location.href='<?php echo G5_URL; ?>/<?php echo $bo_table ?>'">
							<input type="submit" value="작성완료" id="btn_submit" class="real_btn" accesskey="s" class="submit" style="position: relative; display: inline-block; border-radius: 4px; background-color:#080808; padding: 10px 20px; color: #fff; font-size: 12px; font-weight: 500; overflow: hidden; border: none;"/>
							</p>

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
