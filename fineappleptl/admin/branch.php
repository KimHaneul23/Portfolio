<?php
define('adm_board', true);
$sub_menu = "100250";
require_once './_common.php';

auth_check_menu($auth, $sub_menu, 'r');

if ($is_admin != 'super') {
    alert('최고관리자만 접근 가능합니다.');
}

$sql_common = "from g5_branch ";

$sql_search = " where (1) ";

$sql_order = "order by biz_sort, idx asc";

$sql = "select count(*) as cnt {$sql_common} {$sql_search} {$sql_order}";

$row = sql_fetch($sql);
$total_count = $row['cnt'];

$rows = $config['cf_page_rows'];
$total_page  = ceil($total_count / $rows);  // 전체 페이지 계산
if ($page < 1) {
    $page = 1; // 페이지가 없으면 첫 페이지 (1 페이지)
}
$from_record = ($page - 1) * $rows; // 시작 열을 구함

$listall = '<a href="' . $_SERVER['SCRIPT_NAME'] . '" class="ov_listall btn_ov02">전체목록</a>';

$g5['title'] = "지점설정";
require_once './admin.head.php';

$sql = " select * {$sql_common} {$sql_search} {$sql_order} limit {$from_record}, {$rows} ";

$result = sql_query($sql);

$colspan = 5;
?>

<div class="local_ov01 local_ov">
    <?php echo $listall ?>
    <span class="btn_ov01"><span class="ov_txt">등록된 지점</span><span class="ov_num"><?php echo number_format($total_count) ?>개</span></span>
</div>

<form name="fbranchlist" id="fbranchlist" method="post" action="./branch_list_update.php" onsubmit="return fbranchlist_submit(this);">
	<input type="hidden" name="sst" value="<?php echo $sst ?>">
    <input type="hidden" name="sod" value="<?php echo $sod ?>">
    <input type="hidden" name="sfl" value="<?php echo $sfl ?>">
    <input type="hidden" name="stx" value="<?php echo $stx ?>">
    <input type="hidden" name="page" value="<?php echo $page ?>">
<!--    <input type="hidden" name="token" value="">-->
	
	<div class="tbl_head01 tbl_wrap">
        <table>
            <caption><?php echo $g5['title']; ?> 목록</caption>
            <thead>
				<tr>
					<th scope="col">
						<label for="chkall" class="sound_only">현재 페이지 전체</label>
                        <input type="checkbox" name="chkall" value="1" id="chkall" onclick="check_all(this.form)">
					</th>
					<th scope="col">노출순서</th>
					<th scope="col">지점명</th>
					<th scope="col">사업장주소</th>
					<th scope="col">지점대표번호</th>
				</tr>
			</thead>
			<tbody>
				
				<? for($i=0; $row = sql_fetch_array($result); $i++){ 
					$row2[$i] = $row;
				?>
				<tr>
					<td class="td_chk">
						<input type="hidden" name="idx[<?php echo $i ?>]" value="<?php echo $row2[$i]['idx'] ?>" id="idx_<?php echo $i ?>">
						<label for="chk_<?php echo $i; ?>" class="sound_only"></label>
						<input type="checkbox" name="chk[]" value="<?php echo $row2[$i]['idx'] ?>" id="chk_<?php echo $i ?>">
					</td>
					<td><?=$row2[$i]['biz_sort']?></td>
					<td>
						<a href="./branch_form.php?<?=$qstr ?>&amp;w=u&amp;idx=<?=$row2[$i]['idx']?>"><?=$row2[$i]['biz_name']?></a>
					</td>
					<td><?=$row2[$i]['biz_address01']?></td>
					<td><?=$row2[$i]['biz_tel']?></td>
				</tr>
				<? } ?>
			</tbody>
		</table>
	</div>
	
	<div class="btn_fixed_top">
        <input type="submit" name="act_button" value="선택삭제" onclick="document.pressed=this.value" class="btn btn_02">
        <?php if ($is_admin == 'super') { ?>
            <a href="./branch_form.php" id="member_add" class="btn btn_01">지점추가</a>
        <?php } ?>
    </div>
</form>

<?php echo get_paging(G5_IS_MOBILE ? $config['cf_mobile_pages'] : $config['cf_write_pages'], $page, $total_page, '?' . $qstr . '&amp;page='); ?>

<script>
    function fbranchlist_submit(f) {
        if (!is_checked("chk[]")) {
            alert(document.pressed + " 하실 항목을 하나 이상 선택하세요.");
            return false;
        }

        if (document.pressed == "선택삭제") {
            if (!confirm("선택한 자료를 정말 삭제하시겠습니까?")) {
                return false;
            }
        }

        return true;
    }
</script>

<?php
require_once './admin.tail.php';