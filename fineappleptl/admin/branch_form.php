<?php
define('adm_board', true);
$sub_menu = "100250";
require_once './_common.php';

auth_check_menu($auth, $sub_menu, 'w');

$branch = array(
    'biz_sort' => null,
    'biz_name' => null,
    'biz_ceo' => null,
    'biz_number' => null,
    'biz_address01' => null,
    'biz_address02' => null,
    'biz_address03' => null,
    'biz_tel' => null,
    'biz_fax' => null,
    'biz_homepage' => null,
    'biz_navertalktalk' => null,
    'biz_kakaotalk' => null,
    'biz_img' => null,
    'biz_location' => null,
    'biz_meta' => null,
    'biz_opengraph' => null,
    'weekday_1' => null,
    'weekday_2' => null,
    'weekday_3' => null,
    'weekday_4' => null,
    'weekday_5' => null,
    'weekday_6' => null,
    'weekday_7' => null,
    'weekday_breaktime' => null,
    'biz_1' => null,
    'biz_2' => null,
    'biz_3' => null,
);

$sound_only = '';
$required = '';
//$required_mb_id = '';
//$required_mb_id_class = '';
//$required_mb_password = '';
$html_title = '';

if ($w == '') {
    $required = 'required';
    $sound_only = '<strong class="sound_only">필수</strong>';

//    $mb['mb_mailling'] = 1;
//    $mb['mb_open'] = 1;
//    $mb['mb_level'] = $config['cf_register_level'];
    $html_title = '추가';
} elseif ($w == 'u') {
	$sql = "select * from g5_branch where idx=".$idx;
	echo $sql;
    $branch = sql_fetch($sql);
	
    if (!$idx) {
        alert('존재하지 않는 자료입니다.');
    }
	
	$required = 'required';
	$sound_only = '<strong class="sound_only">필수</strong>';
//    $required_mb_id = 'readonly';
    $html_title = '수정';

    $branch['biz_sort'] = get_text($branch['biz_sort']);
    $branch['biz_name'] = get_text($branch['biz_name']);
    $branch['biz_ceo'] = get_text($branch['biz_ceo']);
    $branch['biz_number'] = get_text($branch['biz_number']);
    $branch['biz_address01'] = get_text($branch['biz_address01']);
    $branch['biz_address02'] = get_text($branch['biz_address02']);
    $branch['biz_address03'] = get_text($branch['biz_address03']);
    $branch['biz_tel'] = get_text($branch['biz_tel']);
    $branch['biz_fax'] = get_text($branch['biz_fax']);
    $branch['biz_homepage'] = get_text($branch['biz_homepage']);
    $branch['biz_navertalktalk'] = get_text($branch['biz_navertalktalk']);
    $branch['biz_kakaotalk'] = get_text($branch['biz_kakaotalk']);
    $branch['biz_img'] = get_text($branch['biz_img']);
    $branch['biz_location'] = get_text($branch['biz_location']);
    $branch['biz_meta'] = get_text($branch['biz_meta']);
    $branch['biz_opengraph'] = get_text($branch['biz_opengraph']);
    $branch['weekday_1'] = get_text($branch['weekday_1']);
    $branch['weekday_2'] = get_text($branch['weekday_2']);
    $branch['weekday_3'] = get_text($branch['weekday_3']);
    $branch['weekday_4'] = get_text($branch['weekday_4']);
    $branch['weekday_5'] = get_text($branch['weekday_5']);
    $branch['weekday_6'] = get_text($branch['weekday_6']);
    $branch['weekday_7'] = get_text($branch['weekday_7']);
    $branch['weekday_breaktime'] = get_text($branch['weekday_breaktime']);
    $branch['biz_1'] = get_text($branch['biz_1']);
    $branch['biz_2'] = get_text($branch['biz_2']);
    $branch['biz_3'] = get_text($branch['biz_3']);
	
	
} else {
    alert('제대로 된 값이 넘어오지 않았습니다.');
}

$g5['title'] .= '지점 ' . $html_title;
require_once './admin.head.php';

add_javascript(G5_POSTCODE_JS, 0);    //다음 주소 js
?>

<form name="fbranch" id="fbranch" action="./branch_form_update.php" onsubmit="return fbranch_submit(this);" method="post" enctype="multipart/form-data">
    <input type="hidden" name="w" value="<?php echo $w ?>">
    <input type="hidden" name="sfl" value="<?php echo $sfl ?>">
    <input type="hidden" name="stx" value="<?php echo $stx ?>">
    <input type="hidden" name="sst" value="<?php echo $sst ?>">
    <input type="hidden" name="sod" value="<?php echo $sod ?>">
	<input type="hidden" name="idx" value="<?=$idx?>">
    <input type="hidden" name="page" value="<?php echo $page ?>">
<!--    <input type="hidden" name="token" value="">-->

    <div class="tbl_frm01 tbl_wrap">
		<table>
            <caption><?php echo $g5['title']; ?></caption>
            <colgroup>
                <col class="grid_4">
                <col>
            </colgroup>
            <tbody>
				<tr>
					<th scope="row"><label for="biz_sort">노출순서</label></th>
					<td>
						<input type="text" name="biz_sort" value="<?php echo $branch['biz_sort'] ?>" id="biz_sort" class="frm_input" size="40">
					</td>
				</tr>
				<tr>
					<th scope="row"><label for="biz_name">지점명<?php echo $sound_only ?></label></th>
					<td>
						<input type="text" name="biz_name" value="<?php echo $branch['biz_name'] ?>" id="biz_name" <?php echo $required ?> class="required frm_input" size="40">
					</td>
				</tr>
				<tr>
					<th scope="row"><label for="biz_number">사업자번호<?php echo $sound_only ?></label></th>
					<td>
						<input type="text" name="biz_number" value="<?php echo $branch['biz_number'] ?>" id="biz_number" <?php echo $required ?> class="required frm_input" size="40">
					</td>
				</tr>
				<tr>
					<th scope="row"><label for="biz_address01">사업장주소<?php echo $sound_only ?></label></th>
					<td>
						<input type="text" name="biz_address01" value="<?php echo $branch['biz_address01'] ?>" id="biz_address01" <?php echo $required ?> class="required frm_input" size="40">
					</td>
				</tr>
				<tr>
					<th scope="row"><label for="biz_address03">오시는길<?php echo $sound_only ?></label></th>
					<td>
						<?php include_once(G5_EDITOR_LIB); ?>
						<?php echo editor_html('biz_address03', $branch['biz_address03'], true) ?>
					</td>
				</tr>
				<tr>
					<th scope="row"><label for="biz_ceo">대표자명<?php echo $sound_only ?></label></th>
					<td>
						<input type="text" name="biz_ceo" value="<?php echo $branch['biz_ceo'] ?>" id="biz_ceo" <?php echo $required ?> class="required frm_input" size="40">
					</td>
				</tr>
				<tr>
					<th scope="row"><label for="biz_tel">대표번호<?php echo $sound_only ?></label></th>
					<td>
						<input type="text" name="biz_tel" value="<?php echo $branch['biz_tel'] ?>" id="biz_tel" <?php echo $required ?> class="required frm_input" size="40">
					</td>
				</tr>
				<tr>
					<th scope="row"><label for="biz_fax">팩스번호</label></th>
					<td>
						<input type="text" name="biz_fax" value="<?php echo $branch['biz_fax'] ?>" id="biz_fax" class="frm_input" size="40">
					</td>
				</tr>
				<tr>
					<th scope="row"><label for="biz_navertalktalk">네이버톡톡</label></th>
					<td>
						<input type="text" name="biz_navertalktalk" value="<?php echo $branch['biz_navertalktalk'] ?>" id="biz_navertalktalk" class="frm_input" size="40">
					</td>
				</tr>
				<tr>
					<th scope="row"><label for="biz_kakaotalk">카카오톡</label></th>
					<td>
						<input type="text" name="biz_kakaotalk" value="<?php echo $branch['biz_kakaotalk'] ?>" id="biz_kakaotalk" class="frm_input" size="40">
					</td>
				</tr>
				<tr>
					<th scope="row"><label for="biz_homepage">지점페이지</label></th>
					<td>
						<input type="text" name="biz_homepage" value="<?php echo $branch['biz_homepage'] ?>" id="biz_homepage" class="frm_input" size="40">
					</td>
				</tr>
				<tr>
					<th scope="row"><label for="biz_meta">메타태그</label></th>
					<td>
						<textarea name="biz_meta" id="biz_meta" rows="5" cols="100" style="width:100%; height:200px;"><? echo $branch['biz_meta']; ?></textarea>
					</td>
				</tr>
				<tr>
					<th scope="row"><label for="biz_1">사용페이지</label></th>
					<td>
						<?php
						$biz_1 = explode(',', $branch['biz_1']);
						$menu_datas = get_menu_db(0, true);
						$i = 0;
						foreach( $menu_datas as $row ){
							if( empty($row) ) continue;
							$k = 0;
							foreach( (array) $row['sub'] as $row2 ){
								if( empty($row2) ) continue;
								$j = 0;
								foreach( (array) $row2['sub'] as $row3 ){
									if( empty($row3) ) {
										continue; 
									}
									$checked = '';
									for($z=0;$z<count($biz_1);$z++) {
										if(strpos($biz_1[$z],$row3['me_id'])) {
											$checked = ' checked';
										}
									}
									?>
										<input type="checkbox" name="biz_1[]" id="use_menu_<?=$row3['me_id'] ?>" value="use_menu_<?=$row3['me_id'] ?>" <?=$checked ?>/> <label for="use_menu_<?=$row3['me_id'] ?>"><? echo $row3['me_name'] ?></label>
									<?php
									$j++;
								}   //end foreach $row3
								if($j % 4) {
									echo "<br>";
								}
							$k++;
							}   //end foreach $row2
						$i++;
						}   //end foreach $row
						?>
					</td>
				</tr>
			</tbody>
		</table>

	</div>
	<div class="btn_fixed_top">
        <a href="./branch.php?<?php echo $qstr ?>" class="btn btn_02">목록</a>
        <input type="submit" value="확인" class="btn_submit btn" accesskey='s'>
    </div>
</form>

<script>
    function fbranch_submit(f) {
		<?php echo get_editor_js('biz_address03', true); ?>
//        if (!f.mb_icon.value.match(/\.(gif|jpe?g|png)$/i) && f.mb_icon.value) {
//            alert('아이콘은 이미지 파일만 가능합니다.');
//            return false;
//        }
//
//        if (!f.mb_img.value.match(/\.(gif|jpe?g|png)$/i) && f.mb_img.value) {
//            alert('회원이미지는 이미지 파일만 가능합니다.');
//            return false;
//        }

        return true;
    }
</script>
<?php
run_event('admin_branch_form_after', $branch, $w);

require_once './admin.tail.php';

