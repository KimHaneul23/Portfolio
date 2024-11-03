<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가
include_once(G5_LIB_PATH.'/thumbnail.lib.php');

// add_stylesheet('css 구문', 출력순서); 숫자가 작을 수록 먼저 출력됨
//add_stylesheet('<link rel="stylesheet" href="'.$board_skin_url.'/admin.css">', 0);
?>

<link rel="stylesheet" href="<?php echo G5_JS_URL; ?>/font-awesome/css/font-awesome.min.css">

<style>
    .admin_title{display:none;}
    .tbl_head01 thead th a{color:#383838;}
    .tbl_head01 tbody tr:nth-child(even){background: #f7f7f7;}
    .td_subject > a{text-decoration:none !important;}
    .tbl_head01 tbody td{padding:10px 5px; position:relative;}
    
    .primary-badge { background-color:#344a3d; padding:2px 4px; border-radius:3px; color:#fff; font-size:1rem; font-weight:400; }
    
    .new_icon {display:inline-block;line-height:16px;font-size:0.8em;color:#ff0000;text-align:center;border-radius:2px;margin-left:2px;font-weight:bold;vertical-align:middle; margin-top: -10px;}
    
    .list_memo{
        width: auto;
        height: auto;
        min-height: auto;
        resize:vertical;
        z-index:1;
    }
    span.ing{}
    span.done{color:#344a3d; font-weight:600;}
    span.none{color:#c30000;}
</style>

<h1 id="container_title"><?php echo $board['bo_subject'] ?></h1>

<div class="local_ov01 local_ov">
	<span class="btn_ov01"><span class="ov_txt">Total </span><span class="ov_num"> <?php echo number_format($total_count) ?>건 </span></span>
	<span class="btn_ov01"><span class="ov_txt">현재 </span><span class="ov_num"> <?php echo $page ?> 페이지 </span></span>
</div>

<!-- 게시판 카테고리 시작 { -->
<?php if ($is_category) { ?>
<div class="local_ov02 local_ov">
	<?php echo $category_option ?>
</div>
<?php } ?>
<!-- } 게시판 카테고리 끝 -->
    
<div class="local_sch local_sch01">
	<form name="fsearch" method="get" autocomplete="off" class="local_sch">
		<input type="hidden" name="bo_table" value="<?php echo $bo_table ?>">
		<input type="hidden" name="sca" value="<?php echo $sca ?>">
		<input type="hidden" name="sop" value="and">
		<select name="sfl" id="sfl">
			<option value="wr_subject||wr_content">전체</option>
			<option value="wr_subject" <?php echo get_selected($_GET['sfl'], "wr_subject"); ?>>제목</option>
			<option value="wr_content" <?php echo get_selected($_GET['sfl'], "wr_content"); ?>>내용</option>
		</select>
		<label for="stx" class="sound_only">검색어<strong class="sound_only"> 필수</strong></label>
		<input type="text" name="stx" value="<?php echo $stx ?>" id="stx" required class="required frm_input">
		<input type="submit" value="검색" class="btn_submit">
	</form>
</div>

<form name="fboardlist"  id="fboardlist" action="<?php echo G5_BBS_URL; ?>/board_list_update.php" onsubmit="return fboardlist_submit(this);" method="post">
    <input type="hidden" name="bo_table" value="<?php echo $bo_table ?>">
    <input type="hidden" name="sfl" value="<?php echo $sfl ?>">
    <input type="hidden" name="stx" value="<?php echo $stx ?>">
    <input type="hidden" name="spt" value="<?php echo $spt ?>">
    <input type="hidden" name="sst" value="<?php echo $sst ?>">
    <input type="hidden" name="sod" value="<?php echo $sod ?>">
    <input type="hidden" name="page" value="<?php echo $page ?>">
    <input type="hidden" name="sw" value="">
	
	<div class="tbl_head01 tbl_wrap">
        <table>
			<caption><?php echo $board['bo_subject'] ?> 목록</caption>
			<colgroup>
				<col style="width:4%;">
				<col style="width:4%;">
				<col style="width:8%;">
				<col style="width:auto;">
				<col style="width:10%;">
				<col style="width:10%;">
				<col style="width:8%;">
				<col style="width:14%;">
				<col style="width:10%;">
				<col style="width:6%;">
			</colgroup>
			<thead>
				<tr>
					<?php if ($is_checkbox) { ?>
					<th scope="col" class="all_chk chk_box">
						<input type="checkbox" id="chkall" onclick="if (this.checked) all_checked(true); else all_checked(false);" class="selec_chk">
						<label for="chkall">
							<b class="sound_only">현재 페이지 게시물  전체선택</b>
						</label>
					</th>
					<?php } ?>
					<th scope="col">번호</th>
					<th scope="col">제작방법</th>
					<th scope="col">업체명</th>
					<th scope="col">담담자</th>
					<th scope="col">담당자 연락처</th>
					<th scope="col">응대상태</th>
					<th scope="col">관리자메모</th>
					<th scope="col"><?php echo subject_sort_link('wr_datetime', $qstr2, 1) ?>등록날짜</th>
					<th scope="col">관리</th>
				</tr>
			</thead>
			<tbody>
				<?php
				$update_href = $delete_href = '';
				set_session('ss_delete_token', $token = uniqid(time()));
						
				for ($i=0; $i<count($list); $i++) {
					if($is_admin) {
						$update_href = short_url_clean(G5_BBS_URL.'/write.php?w=u&amp;bo_table='.$bo_table.'&amp;wr_id='.$list[$i]['wr_id'].'&amp;page='.$page.$qstr);
						$delete_href = G5_URL.'/bbs/delete.php?bo_table='.$bo_table.'&amp;wr_id='.$list[$i]['wr_id'].'&amp;token='.$token.'&amp;page='.$page.urldecode($qstr);
					}
					
					if ($i%2==0) $lt_class = "even";
					else $lt_class = "";
				?>
				<tr class="<?php if ($list[$i]['is_notice']) echo "bo_notice"; ?> <?php echo $lt_class ?>">
					<?php if ($is_checkbox) { ?>
					<td class="td_chk chk_box">
						<input type="checkbox" name="chk_wr_id[]" value="<?php echo $list[$i]['wr_id'] ?>" id="chk_wr_id_<?php echo $i ?>" class="selec_chk">
						<label for="chk_wr_id_<?php echo $i ?>">
							<b class="sound_only"><?php echo $list[$i]['subject'] ?></b>
						</label>
					</td>
					<?php } ?>
					<td class="td_num2">
					    <?php
					    echo $list[$i]['num'];
				        ?>
					</td>
					<td>
						<span class="primary-badge"><?php echo $list[$i]['wr_6'] ?></span>
					</td>
					<td>
						<a href="./write.php?w=u&bo_table=<?=$bo_table?>&wr_id=<?=$list[$i][wr_id] ?>&page=<?=$page ?>">
                            <!--<?php //echo $list[$i]['wr_name'] ?>님의 상담&amp;문의가 도착했습니다.-->
                            <?php echo $list[$i]['wr_subject'] ?>
                        </a>
					</td>
					<td>
						<?php echo $list[$i]['wr_name'] ?>
					</td>
					<td>
						<?php echo $list[$i]['wr_1'] ?>
					</td>
					<td class="td_cmt">
						<?php if ($list[$i]['wr_10'] == 'YET') { ?>
                            <span class="ing">확인중</span>
                        <?php } else if ($list[$i]['wr_10'] == 'CONFIRM'){ ?>
                            <span class="done">응대완료</span>
                        <?php } else if ($list[$i]['wr_10'] == 'ABSENCE'){ ?>
                            <span class="none">부재중</span>
                        <?php } ?>
					</td>
					<td>
						<textarea class="list_memo" readonly ><?php echo $list[$i]['wr_11'] ?></textarea>
					</td>
					<td class="td_datetime"><?php echo $list[$i]['datetime'] ?></td>
					<td class="td_mng td_mng_s">
						<a href="./write.php?w=u&bo_table=<?=$bo_table?>&wr_id=<?=$list[$i][wr_id] ?>&page=<?=$page ?>" class="btn btn_03">확인</a>
						<? if ($delete_href) { ?>
						<!--<a href="<?php echo $delete_href ?>" class="btn btn_02" onclick="del(this.href); return false;">삭제</a>-->
						<? } ?>
					</td>
				</tr>
				<?php } ?>
				<?php if (count($list) == 0) { echo '<tr><td colspan="'.$colspan.'" class="empty_table">게시물이 없습니다.</td></tr>'; } ?>
			</tbody>
        </table>
    </div>   
    
    <!-- 페이지 -->
    <?php echo $write_pages; ?>
    <!-- 페이지 -->
    
    <div class="btn_fixed_top">
		<?php if ($is_admin == 'super' || $is_auth) {  ?>
		<?php if ($is_checkbox) { ?>
		<button type="submit" name="btn_submit" value="선택삭제" onclick="document.pressed=this.value" class="btn_02 btn">선택삭제</button>
		<!--<button type="submit" name="btn_submit" value="선택복사" onclick="document.pressed=this.value" class="btn_02 btn">선택복사</button>
		<button type="submit" name="btn_submit" value="선택이동" onclick="document.pressed=this.value" class="btn_02 btn">선택이동</button>-->
		<?php } ?>
		<?php } ?>
		<?php if ($write_href) { ?>
		<!--<a href="./write.php?bo_table=<?=$bo_table ?>" class="btn_01 btn" title="글쓰기">글쓰기</a>-->
		<?php } ?>
	</div>
</form>

<?php if($is_checkbox) { ?>
<noscript>
<p>자바스크립트를 사용하지 않는 경우<br>별도의 확인 절차 없이 바로 선택삭제 처리하므로 주의하시기 바랍니다.</p>
</noscript>
<?php } ?>

<?php if ($is_checkbox) { ?>
<script>
function all_checked(sw) {
    var f = document.fboardlist;

    for (var i=0; i<f.length; i++) {
        if (f.elements[i].name == "chk_wr_id[]")
            f.elements[i].checked = sw;
    }
}

function fboardlist_submit(f) {
    var chk_count = 0;

    for (var i=0; i<f.length; i++) {
        if (f.elements[i].name == "chk_wr_id[]" && f.elements[i].checked)
            chk_count++;
    }

    if (!chk_count) {
        alert(document.pressed + "할 게시물을 하나 이상 선택하세요.");
        return false;
    }

    if(document.pressed == "선택복사") {
        select_copy("copy");
        return;
    }

    if(document.pressed == "선택이동") {
        select_copy("move");
        return;
    }

    if(document.pressed == "선택삭제") {
        if (!confirm("선택한 게시물을 정말 삭제하시겠습니까?\n\n한번 삭제한 자료는 복구할 수 없습니다\n\n답변글이 있는 게시글을 선택하신 경우\n답변글도 선택하셔야 게시글이 삭제됩니다."))
            return false;

        f.removeAttribute("target");
        f.action = g5_url+"/bbs/board_list_update.php";
    }

    return true;
}

// 선택한 게시물 복사 및 이동
function select_copy(sw) {
    var f = document.fboardlist;

    if (sw == 'copy')
        str = "복사";
    else
        str = "이동";

    var sub_win = window.open("", "move", "left=50, top=50, width=500, height=550, scrollbars=1");

    f.sw.value = sw;
    f.target = "move";
    f.action = g5_admin_url+"/bbs/move.php";
    f.submit();
}

// 게시판 리스트 관리자 옵션
jQuery(function($){
    $(".btn_more_opt.is_list_btn").on("click", function(e) {
        e.stopPropagation();
        $(".more_opt.is_list_btn").toggle();
    });
    $(document).on("click", function (e) {
        if(!$(e.target).closest('.is_list_btn').length) {
            $(".more_opt.is_list_btn").hide();
        }
    });
});
</script>
<?php } ?>
<!-- } 게시판 목록 끝 -->
