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
                    
                    <tr>
                        <th><label for="wr_15">메인 노출여부</label></th>
                        <td>
                            <span class="frm_info" style="color:#5b747e; font-size:13px; letter-spacing:-0.02em; font-weight:600;">최대 4개의 게시물이 노출됩니다.</span>
                            <div style="display:flex; justify-content:flex-start; align-items:center; gap:0 10px; ">
                                <label style="display:flex; justify-content:flex-start; align-items:center; font-weight:500;">
                                    <input type="radio" name="wr_15" value="0" required <?php if($write['wr_15'] == '0') echo "checked='checked'"; ?> class="checkbox">&nbsp;Y
                                </label>
                                <label style="display:flex; justify-content:flex-start; align-items:center; font-weight:500;">
                                    <input type="radio" name="wr_15" value="1" required <?php if($write['wr_15'] == '1' || $w != 'u') echo "checked='checked'"; ?> class="checkbox">&nbsp;N
                                </label>
                            </div>
                        </td>
                    </tr>
                    
                    <tr>
                        <th><label for="wr_12">수상작</label></th>
                        <td>
                            <div style="display:flex; justify-content:flex-start; align-items:center; gap:0 10px;">
                                <label for="wr_12" style="display:flex; justify-content:flex-start; align-items:center; font-weight:500; letter-spacing:-0.01em;"><input type="checkbox" id="wr_12" name="wr_12" value="g" <?php if($write['wr_12'] == 'g') echo "checked='checked'"; ?>>&nbsp;지디웹</label>
                                <label for="wr_13" style="display:flex; justify-content:flex-start; align-items:center; font-weight:500; letter-spacing:-0.01em;"><input type="checkbox" id="wr_13" name="wr_13" value="i" <?php if($write['wr_13'] == 'i') echo "checked='checked'"; ?>>&nbsp;아이어워즈</label>
                                <label for="wr_14" style="display:flex; justify-content:flex-start; align-items:center; font-weight:500; letter-spacing:-0.01em;"><input type="checkbox" id="wr_14" name="wr_14" value="n" <?php if($write['wr_14'] == 'n') echo "checked='checked'"; ?>>&nbsp;앤어워즈</label>
                            </div>
                        </td>
                    </tr>
                    
                    <tr>
                        <th scope="row"><label for="wr_subject">제목</label></th>
                        <td>
                            <div id="autosave_wrapper">
                                <input type="text" name="wr_subject" value="<?php echo $subject ?>" id="wr_subject" placeholder="제목" required class="eventTit_ip frm_input" size="50" maxlength="255">
                            </div>
                        </td>
                    </tr>
                    
                    <tr>
                        <th scope="row">썸네일 이미지</th>
                        <td>
                            <p class="frm_info fz_16 normal lh_16 m_5">이미지 크기는 <span style="color:#ff0000;">가로 980px, 세로 475px</span>로 해주세요.</p>
                            <input type="file" name="bf_file[]" id="file1" title="파일첨부 1 :  용량 <?php echo $upload_max_filesize ?> 이하만 업로드 가능" <?php if($w != 'u'){ echo 'required'; }else if(!$file[0]['file']){ echo 'required'; } ?> class="frm_file frm_file_thumb frm_input"><span style="color:#ff0000; font-size:13px; letter-spacing:-0.02em; font-weight:600;">&ensp;* 필수(공통) 업로드</span>
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
                        <th scope="row"><label for="wr_11">제작연도</label></th>
                        <td>
                            <div class="cont">
                                <input type="text" name="wr_11" value="<?php echo $write['wr_11'] ?>" class="frm_input full_input" placeholder="프로젝트 제작연도" size="50" maxlength="255" ><span style="color:#000; font-size:13px; letter-spacing:-0.02em; font-weight:600;">&ensp;|&nbsp;HP 프로젝트 해당</span>
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
                        <th scope="row"><label for="wr_1">클라이언트</label></th>
                        <td>
                            <div class="cont">
                                <input type="text" name="wr_1" value="<?php echo $write['wr_1'] ?>" class="frm_input full_input" required placeholder="클라이언트" size="50" maxlength="255" >
                            </div>
                        </td>
                    </tr>
                    
                    <tr>
                        <th scope="row"><label for="wr_2">HP 연결 링크(URL)</label></th>
                        <td>
                            <div class="cont">
                                <input type="text" name="wr_2" value="<?php echo $write['wr_2'] ?>" class="frm_input full_input" placeholder="HP URL" size="50" maxlength="255" >
                            </div>
                        </td>
                    </tr>
                    
                    <tr>
                        <th scope="row"><label for="wr_3">작업 기간</label></th>
                        <td>
                            <div class="cont">
                                <input type="text" name="wr_3" value="<?php echo $write['wr_3'] ?>" class="frm_input full_input" placeholder="기간  ex) 6개월 (2020.01.01~2020.07.30)" size="50" maxlength="255" ><span style="color:#000; font-size:13px; letter-spacing:-0.02em; font-weight:600;">&ensp;ex) 6개월 (2020.01.01~2020.07.30)</span>
                            </div>
                        </td>
                    </tr>
                    
                    <tr>
                        <th scope="row"><label for="wr_4">프로젝트 내용</label></th>
                        <td>
                            <div class="cont">
                                <input type="text" name="wr_4" value="<?php echo $write['wr_4'] ?>" class="frm_input full_input" placeholder="프로젝트 내용" size="50" maxlength="255" >
                            </div>
                        </td>
                    </tr>
                    
                    <tr>
                        <th scope="row"><label for="wr_5">작업 키워드</label></th>
                        <td>
                            <div class="cont">
                                <span class="frm_info" style="color:#5b747e; font-size:13px; letter-spacing:-0.02em; font-weight:500;">키워드와 키워드 사이는 | 로 구분하세요. (예: 브랜딩영상|기획|디자인|전체페이지)</span>
                                <input type="text" name="wr_5" value="<?php echo $write['wr_5'] ?>" class="frm_input full_input" placeholder="브랜딩영상|기획|디자인|전체페이지" size="50" maxlength="255" >
                            </div>
                        </td>
                    </tr>
                    
                    <tr>
                        <th scope="row"><label for="wr_6">컨셉 키워드</label></th>
                        <td>
                            <div class="cont">
                                <span class="frm_info" style="color:#5b747e; font-size:13px; letter-spacing:-0.02em; font-weight:500;">키워드와 키워드 사이는 | 로 구분하세요. (예: 세련된|심플한|브랜딩|커스텀)</span>
                                <input type="text" name="wr_6" value="<?php echo $write['wr_6'] ?>" class="frm_input full_input" placeholder="세련된|심플한|브랜딩|커스텀" size="50" maxlength="255" >
                            </div>
                        </td>
                    </tr>
                    
                    <tr>
                        <th><label for="wr_8">동영상 ID</label></th>
                        <td>
                            <div style="display:flex; justify-content:flex-start; align-items:center; gap:0 10px;">
                                <label style="display:flex; justify-content:flex-start; align-items:center; font-weight:500;">
                                    <input type="radio" name="wr_7" value="0" <?php if($write['wr_7'] == '0' || $w != 'u') echo "checked='checked'"; ?> class="checkbox" style="margin-top:2px;">&nbsp;유튜브
                                </label>
                                <label style="display:flex; justify-content:flex-start; align-items:center; font-weight:500;">
                                    <input type="radio" name="wr_7" value="1" <?php if($write['wr_7'] == '1') echo "checked='checked'"; ?> class="checkbox" style="margin-top:2px;">&nbsp;비메오
                                </label>
                            </div>
                            <span class="frm_info" style="font-weight:500; margin-top:5px;">유튜브 동영상 ID 예시) https://www.youtube.com/watch?v=<span class="txt_true" style="color:#ff0000; font-weight:600;">ID</span></span>
                            <span class="frm_info" style="font-weight:500;">비메오 동영상 ID 예시) https://vimeo.com/manage/videos/<span class="txt_true" style="color:#ff0000; font-weight:600;">ID</span></span>
                            <div class="cont">
                                <input type="text" name="wr_8" value="<?php echo $write['wr_8'] ?>" class="frm_input full_input" placeholder="동영상 ID" size="50" maxlength="255" ><span style="color:#000; font-size:13px; letter-spacing:-0.02em; font-weight:600;">&ensp;|&nbsp;미디어 프로젝트 해당</span>
                            </div>
                        </td>
                    </tr>
                    
                    <tr>
                        <th scope="row"><label for="wr_9">인스타그램 URL</label></th>
                        <td>
                            <div class="cont">
                                <input type="text" name="wr_9" value="<?php echo $write['wr_9'] ?>" class="frm_input full_input" placeholder="인스타그램 URL" size="50" maxlength="255" ><span style="color:#000; font-size:13px; letter-spacing:-0.02em; font-weight:600;">&ensp;|&nbsp;마케팅 프로젝트 해당</span>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row"><label for="wr_10">블로그 URL</label></th>
                        <td>
                            <div class="cont">
                                <input type="text" name="wr_10" value="<?php echo $write['wr_10'] ?>" class="frm_input full_input" placeholder="블로그 URL" size="50" maxlength="255" ><span style="color:#000; font-size:13px; letter-spacing:-0.02em; font-weight:600;">&ensp;|&nbsp;마케팅 프로젝트 해당</span>
                            </div>
                        </td>
                    </tr>
                    
                    <tr>
                        <th scope="row">상단 슬라이드 이미지 - 01</th>
                        <td>
                            <p class="frm_info fz_16 normal lh_16 m_5">이미지 크기는 <span style="color:#ff0000;">가로 980px, 세로 475px</span>로 해주세요.</p>
                            <input type="file" name="bf_file[]" id="file2" title="파일첨부 2 :  용량 <?php echo $upload_max_filesize ?> 이하만 업로드 가능" class="frm_file frm_input"><span style="color:#000; font-size:13px; letter-spacing:-0.02em; font-weight:600;">&ensp;|&nbsp;HP 프로젝트 해당</span>
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
                        <th scope="row">상단 슬라이드 이미지 - 02</th>
                        <td>
                            <p class="frm_info fz_16 normal lh_16 m_5">이미지 크기는 <span style="color:#ff0000;">가로 980px, 세로 475px</span>로 해주세요.</p>
                            <input type="file" name="bf_file[]" id="file3" title="파일첨부 3 :  용량 <?php echo $upload_max_filesize ?> 이하만 업로드 가능" class="frm_file frm_input"><span style="color:#000; font-size:13px; letter-spacing:-0.02em; font-weight:600;">&ensp;|&nbsp;HP 프로젝트 해당</span>
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
                    <tr>
                        <th scope="row">상단 슬라이드 이미지 - 03</th>
                        <td>
                            <p class="frm_info fz_16 normal lh_16 m_5">이미지 크기는 <span style="color:#ff0000;">가로 980px, 세로 475px</span>로 해주세요.</p>
                            <input type="file" name="bf_file[]" id="file4" title="파일첨부 4 :  용량 <?php echo $upload_max_filesize ?> 이하만 업로드 가능" class="frm_file frm_input"><span style="color:#000; font-size:13px; letter-spacing:-0.02em; font-weight:600;">&ensp;|&nbsp;HP 프로젝트 해당</span>
                            <p onclick="fileReset(file4)" class="frm_info fz_16 normal lh_16 m_5" style="display:flex; justify-content:flex-start; align-items:center; margin:0.5rem 0 0; cursor:pointer;">
                                <span style="display:inline-block; width:1rem; height:1rem; border:1px solid #000;"></span><span style="display:inline-block; color:#000; font-size:11px; letter-spacing:-0.02em; font-weight:300;">&ensp;첨부 취소</span>
                            </p>
                            
                            <?php if($w == 'u' && $file[3]['file']) { ?>
                            <span class="file_del" style="font-size:11px;">
                                <input type="checkbox" id="bf_file_del3" name="bf_file_del[3]" value="4"> <label for="bf_file_del3"><?php echo $file[3]['source'].'('.$file[3]['size'].')';  ?>첨부 파일 삭제</label>
                            </span>
                            <?php } ?>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">하단 이미지 - 01</th>
                        <td>
                            <p class="frm_info fz_16 normal lh_16 m_5">이미지 크기는 <span style="color:#ff0000;">가로 330px</span>로 해주세요.</p>
                            <input type="file" name="bf_file[]" id="file5" title="파일첨부 5 :  용량 <?php echo $upload_max_filesize ?> 이하만 업로드 가능" class="frm_file frm_input"><span style="color:#000; font-size:13px; letter-spacing:-0.02em; font-weight:600;">&ensp;|&nbsp;HP 프로젝트 해당</span>
                            <p onclick="fileReset(file5)" class="frm_info fz_16 normal lh_16 m_5" style="display:flex; justify-content:flex-start; align-items:center; margin:0.5rem 0 0; cursor:pointer;">
                                <span style="display:inline-block; width:1rem; height:1rem; border:1px solid #000;"></span><span style="display:inline-block; color:#000; font-size:11px; letter-spacing:-0.02em; font-weight:300;">&ensp;첨부 취소</span>
                            </p>
                            
                            <?php if($w == 'u' && $file[4]['file']) { ?>
                            <span class="file_del" style="font-size:11px;">
                                <input type="checkbox" id="bf_file_del4" name="bf_file_del[4]" value="5"> <label for="bf_file_del4"><?php echo $file[4]['source'].'('.$file[4]['size'].')';  ?>첨부 파일 삭제</label>
                            </span>
                            <?php } ?>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">하단 이미지 - 02</th>
                        <td>
                            <p class="frm_info fz_16 normal lh_16 m_5">이미지 크기는 <span style="color:#ff0000;">가로 330px</span>로 해주세요.</p>
                            <input type="file" name="bf_file[]" id="file6" title="파일첨부 6 :  용량 <?php echo $upload_max_filesize ?> 이하만 업로드 가능" class="frm_file frm_input"><span style="color:#000; font-size:13px; letter-spacing:-0.02em; font-weight:600;">&ensp;|&nbsp;HP 프로젝트 해당</span>
                            <p onclick="fileReset(file6)" class="frm_info fz_16 normal lh_16 m_5" style="display:flex; justify-content:flex-start; align-items:center; margin:0.5rem 0 0; cursor:pointer;">
                                <span style="display:inline-block; width:1rem; height:1rem; border:1px solid #000;"></span><span style="display:inline-block; color:#000; font-size:11px; letter-spacing:-0.02em; font-weight:300;">&ensp;첨부 취소</span>
                            </p>
                            
                            <?php if($w == 'u' && $file[5]['file']) { ?>
                            <span class="file_del" style="font-size:11px;">
                                <input type="checkbox" id="bf_file_del5" name="bf_file_del[5]" value="6"> <label for="bf_file_del5"><?php echo $file[5]['source'].'('.$file[5]['size'].')';  ?>첨부 파일 삭제</label>
                            </span>
                            <?php } ?>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">하단 이미지 - 03</th>
                        <td>
                            <p class="frm_info fz_16 normal lh_16 m_5">이미지 크기는 <span style="color:#ff0000;">가로 330px</span>로 해주세요.</p>
                            <input type="file" name="bf_file[]" id="file7" title="파일첨부 7 :  용량 <?php echo $upload_max_filesize ?> 이하만 업로드 가능" class="frm_file frm_input"><span style="color:#000; font-size:13px; letter-spacing:-0.02em; font-weight:600;">&ensp;|&nbsp;HP 프로젝트 해당</span>
                            <p onclick="fileReset(file7)" class="frm_info fz_16 normal lh_16 m_5" style="display:flex; justify-content:flex-start; align-items:center; margin:0.5rem 0 0; cursor:pointer;">
                                <span style="display:inline-block; width:1rem; height:1rem; border:1px solid #000;"></span><span style="display:inline-block; color:#000; font-size:11px; letter-spacing:-0.02em; font-weight:300;">&ensp;첨부 취소</span>
                            </p>
                            
                            <?php if($w == 'u' && $file[6]['file']) { ?>
                            <span class="file_del" style="font-size:11px;">
                                <input type="checkbox" id="bf_file_del6" name="bf_file_del[6]" value="7"> <label for="bf_file_del6"><?php echo $file[6]['source'].'('.$file[6]['size'].')';  ?>첨부 파일 삭제</label>
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
                        <?php //에디터 창 높이 값 조절
                        //if ($is_dhtml_editor && $config['cf_editor'] == "smarteditor2") { 
                        //    $se2_height = "200px";
                        //    echo "<script>document.addEventListener('DOMContentLoaded', () => { wr_content.style.height = '".$se2_height."'; } );</script>";
                        //}
                        ?>
                        <th scope="row"><label for="wr_content">프로젝트 소개</label></th>
                        <td class="wr_content">
                            <?php if($write_min || $write_max) { ?>
                            <!-- 최소/최대 글자 수 사용 시 -->
                            <p id="char_count_desc">이 게시판은 최소 <strong><?php echo $write_min; ?></strong>글자 이상, 최대 <strong><?php echo $write_max; ?></strong>글자 이하까지 글을 쓰실 수 있습니다.</p>
                            <?php } ?>
                            <?php echo $editor_html; // 에디터 사용시는 에디터로, 아니면 textarea 로 노출 ?>
                            <?php if($write_min || $write_max) { ?>
                            <!-- 최소/최대 글자 수 사용 시 -->
                            <div id="char_count_wrap"><span id="char_count"></span>글자</div>
                            <?php } ?>
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