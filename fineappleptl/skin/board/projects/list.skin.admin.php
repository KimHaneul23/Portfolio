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
    .tbl_head01 tbody td{padding:10px 5px;}
    
    .primary-badge { background-color:#344a3d; padding:2px 4px; border-radius:3px; color:#fff; font-size:1rem; font-weight:400; }
    
    .list_memo{
        width: auto;
        height: auto;
        min-height: auto;
        resize:vertical;
        z-index:1;
    }
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
	
	<div class="tbl_head01 tbl_wrap type02">
		<table>
			<caption><?php echo $board['bo_subject'] ?> 목록</caption>
			<colgroup>
				<col style="width:4%;">
				<col style="width:4%;">
				<col style="width:20%;">
				<col style="width:auto;">
				<col style="width:6%;">
				<col style="width:8%;">
				<col style="width:10%;">
				<col style="width:10%">
			</colgroup>
			<thead>
				<tr>
					<?php if ($is_checkbox) { ?>
					<th scope="col" class="all_chk chk_box">
						<input type="checkbox" id="chkall" onclick="if (this.checked) all_checked(true); else all_checked(false);" class="selec_chk">
						<label for="chkall">
							<span></span>
							<b class="sound_only">현재 페이지 게시물  전체선택</b>
						</label>
					</th>
					<?php } ?>
					<th scope="col">번호</th>
					<th scope="col">이미지</th>
					<th scope="col">제목</th>
					<th scope="col">제작년도</th>
					<th scope="col">수상작 구분</th>
					<th scope="col">글쓴이</th>
					<th scope="col"><?php echo subject_sort_link('wr_datetime', $qstr2, 1) ?>등록날짜</th>
				</tr>
			</thead>
			<tbody>
				<?php
				for ($i=0; $i<count($list); $i++) {
					if ($i%2==0) $lt_class = "even";
					else $lt_class = "";
                    
                    $list[$i]['file'] = get_file($bo_table, $list[$i]['wr_id']);
				?>
				<tr class="<?php if ($list[$i]['is_notice']) echo "bo_notice"; ?> <?php echo $lt_class ?>">
					<?php if ($is_checkbox) { ?>
					<td class="td_chk chk_box">
						<input type="checkbox" name="chk_wr_id[]" value="<?php echo $list[$i]['wr_id'] ?>" id="chk_wr_id_<?php echo $i ?>" class="selec_chk">
						<label for="chk_wr_id_<?php echo $i ?>">
							<span></span>
							<b class="sound_only"><?php echo $list[$i]['subject'] ?></b>
						</label>
					</td>
					<?php } ?>
					<td class="td_num2">
					<?php
					if ($wr_id == $list[$i]['wr_id'])
						echo "<span class=\"bo_current\">열람중</span>";
					else
						echo $list[$i]['num'];
					?>
					</td>
					<td>
						<div class="gall_img" style="display:flex; align-items:center; width:100%;">
							<a href="./write.php?w=u&bo_table=<?php echo $bo_table?>&wr_id=<?php echo $list[$i]['wr_id'] ?>&page=<?php echo $page ?>" style="position:relative; width:100%; height:100%; display:inline-block; text-decoration:none; font-weight:400;">
                                <img src="<?php echo G5_URL ?>/data/file/<?php echo $bo_table?>/<?php echo $list[$i][file][0][file] ?>" alt="<?php echo $list[$i]['subject'] ?>" style="max-width:100%; vertical-align:top;">
                                
                                <?php if($list[$i]['wr_12'] == 'g' && $list[$i]['wr_13'] == '' && $list[$i]['wr_14'] == '') { ?>
                                <div class="projects_award_icon">
                                    <i class="gdweb_icon"></i>
                                </div>
                                <?php } else if($list[$i]['wr_13'] == 'i' && $list[$i]['wr_12'] == '' && $list[$i]['wr_14'] == '') { ?>
                                <div class="projects_award_icon">
                                    <i class="iaward_icon"></i>
                                </div>
                                <?php } else if($list[$i]['wr_14'] == 'n' && $list[$i]['wr_12'] == '' && $list[$i]['wr_13'] == '') { ?>
                                <div class="projects_award_icon">
                                    <i class="naward_icon"></i>
                                </div>
                                <?php } else if($list[$i]['wr_12'] == 'g' && $list[$i]['wr_13'] == 'i' && $list[$i]['wr_14'] == '') { ?>
                                <div class="projects_award_icon">
                                    <i class="gdweb_icon"></i>
                                    <i class="iaward_icon"></i>
                                </div>
                                <?php } else if($list[$i]['wr_12'] == 'g' && $list[$i]['wr_14'] == 'n' && $list[$i]['wr_13'] == '') { ?>
                                <div class="projects_award_icon">
                                    <i class="gdweb_icon"></i>
                                    <i class="naward_icon"></i>
                                </div>
                                <?php } else if($list[$i]['wr_13'] == 'i' && $list[$i]['wr_14'] == 'n' && $list[$i]['wr_12'] == '') { ?>
                                <div class="projects_award_icon">
                                    <i class="iaward_icon"></i>
                                    <i class="naward_icon"></i>
                                </div>
                                <?php } else if($list[$i]['wr_12'] == 'g' && $list[$i]['wr_13'] == 'i' && $list[$i]['wr_14'] == 'n') { ?>
                                <div class="projects_award_icon">
                                    <i class="gdweb_icon"></i>
                                    <i class="iaward_icon"></i>
                                    <i class="naward_icon"></i>
                                </div>
                                <?php } ?>
                                <style>
                                    .projects_award_icon{position:absolute; bottom:0.4rem; left:0.6rem; display:flex; justify-content:center; align-items:flex-end; gap:0 0.4rem;}
                                    .iaward_icon{ display:inline-block; position:relative; width:1.8125rem; height:2.4375rem; background:url("../img/main_iaward_icon.png") 50% 50%/100% no-repeat; }
                                    .naward_icon{ display:inline-block; position:relative; width:4rem; height:1.5rem; background:url("../img/naward_icon.png") 50% 50%/100% no-repeat; }
                                    .gdweb_icon{ display:inline-block; position:relative; width:1.9375rem; height:3rem; background:url("../img/main_gdweb_icon.png") 50% 50%/100% no-repeat; }
                                </style>
							</a>
						</div>
					</td>
					<td class="td_subject">
						<?php
						if ($is_category && $list[$i]['ca_name']) {
						?>
						<span class="primary-badge"><?php echo $list[$i]['ca_name'] ?></span>
						<?php } ?>
						<a href="./write.php?w=u&bo_table=<?php echo $bo_table?>&wr_id=<?php echo $list[$i]['wr_id'] ?>&page=<?php echo $page ?>">
							<?php echo $list[$i]['icon_reply'] ?>
							<?php
								if (isset($list[$i]['icon_secret'])) echo rtrim($list[$i]['icon_secret']);
				            ?>
							<?php echo $list[$i]['subject'] ?>
						</a>
					</td>
					<td>
						<?php if(!$list[$i]['wr_11'] == '') { ?>
                            <?php echo $list[$i]['wr_11'] ?>
                        <?php } ?>
					</td>
					<td>
						<div style="display:flex; flex-direction:column; justify-content:center; align-items:center; width:100%;">
							<?php if($list[$i]['wr_12'] == 'g' && $list[$i]['wr_13'] == '' && $list[$i]['wr_14'] == '') { ?>
                            지디웹
                            <?php } else if($list[$i]['wr_13'] == 'i' && $list[$i]['wr_12'] == '' && $list[$i]['wr_14'] == '') { ?>
                            아이어워즈
                            <?php } else if($list[$i]['wr_14'] == 'n' && $list[$i]['wr_12'] == '' && $list[$i]['wr_13'] == '') { ?>
                            앤어워즈
                            <?php } else if($list[$i]['wr_12'] == 'g' && $list[$i]['wr_13'] == 'i' && $list[$i]['wr_14'] == '') { ?>
                            지디웹,<br>
                            아이어워즈
                            <?php } else if($list[$i]['wr_12'] == 'g' && $list[$i]['wr_14'] == 'n' && $list[$i]['wr_13'] == '') { ?>
                            지디웹,<br>
                            앤어워즈
                            <?php } else if($list[$i]['wr_13'] == 'i' && $list[$i]['wr_14'] == 'n' && $list[$i]['wr_12'] == '') { ?>
                            아이어워즈,<br>
                            앤어워즈
                            <?php } else if($list[$i]['wr_12'] == 'g' && $list[$i]['wr_13'] == 'i' && $list[$i]['wr_14'] == 'n') { ?>
                            지디웹,<br>
                            아이어워즈,<br>
                            앤어워즈
                            <?php } ?>
						</div>
					</td>
					<td class="td_name">
						<?php echo $list[$i]['wr_name'] ?>
					</td>
					<td class="td_datetime"><?php echo $list[$i]['datetime'] ?></td>
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
		<a href="./write.php?bo_table=<?=$bo_table ?>" class="btn_01 btn" title="글쓰기">글쓰기</a>
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
