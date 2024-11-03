<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가
include_once(G5_LIB_PATH.'/thumbnail.lib.php');

include_once(G5_PATH.'/head.php');

//add_stylesheet('<link rel="stylesheet" href="'.G5_THEME_URL.'/skin/board/gallery/autoptimize_bbs.css">', 0);
//add_stylesheet('<link rel="stylesheet" href="'.G5_THEME_URL.'/skin/board/gallery/style.css">', 0);
?>
<link href="<?php echo G5_THEME_URL?>/css/main.css" rel="stylesheet">
<link rel="stylesheet" href="<?php echo G5_JS_URL; ?>/font-awesome/css/font-awesome.min.css">
<link href="<?php echo G5_THEME_URL?>/skin/board/gallery/autoptimize_bbs.css" rel="stylesheet">
<link href="<?php echo G5_THEME_URL?>/skin/board/gallery/style.css" rel="stylesheet">
<link href="<?php echo G5_THEME_URL?>/css/default.css" rel="stylesheet">

<?php
// 날짜 계산 함수
function passing_time($datetime) {
	$time_lag = time() - strtotime($datetime);
	
	if($time_lag < 60) {
		$posting_time = "방금";
	} elseif($time_lag >= 60 and $time_lag < 3600) {
		$posting_time = floor($time_lag/60)."분 전";
	} elseif($time_lag >= 3600 and $time_lag < 86400) {
		$posting_time = floor($time_lag/3600)."시간 전";
	} elseif($time_lag >= 86400 and $time_lag < 2419200) {
		$posting_time = floor($time_lag/86400)."일 전";
	} else {
		$posting_time = date("Y.m.d", strtotime($datetime));
	} 
	
	return $posting_time;
}
?>

<script>
    $(document).ready(function(){
        $('.main-header').removeClass('color_change');
    });
</script>

<div class="container-1200 gallery_container">

<!-- 게시판 검색 시작 { -->
<div style="clear:both;">
<fieldset id="bo_sch">
    <legend>게시물 검색</legend>

    <form name="fsearch" method="get">
    <input type="hidden" name="bo_table" value="<?php echo $bo_table ?>">
    <input type="hidden" name="sca" value="<?php echo $sca ?>">
    <input type="hidden" name="sop" value="and">
    <label for="sfl" class="sound_only">검색대상</label>
    <select name="sfl" id="sfl">
        <option value="wr_subject"<?php echo get_selected($sfl, 'wr_subject', true); ?>>제목</option>
        <option value="wr_content"<?php echo get_selected($sfl, 'wr_content'); ?>>내용</option>
        <option value="wr_subject||wr_content"<?php echo get_selected($sfl, 'wr_subject||wr_content'); ?>>제목+내용</option>
        <!--<option value="mb_id,1"<?php echo get_selected($sfl, 'mb_id,1'); ?>>회원아이디</option>-->
        <!--<option value="mb_id,0"<?php echo get_selected($sfl, 'mb_id,0'); ?>>회원아이디(코)</option>-->
        <!--<option value="wr_name,1"<?php echo get_selected($sfl, 'wr_name,1'); ?>>글쓴이</option>-->
        <!--<option value="wr_name,0"<?php echo get_selected($sfl, 'wr_name,0'); ?>>글쓴이(코)</option>-->
    </select>
    <label for="stx" class="sound_only">검색어<strong class="sound_only"> 필수</strong></label>
    <input type="text" name="stx" value="<?php echo stripslashes($stx) ?>" required id="stx" class="frm_input required" size="15" maxlength="20">
    <input type="image" src="<?php echo G5_URL ?>/img/list_search.png" value="검색" style="vertical-align:middle;">
    </form>
</fieldset>
</div>
<!-- } 게시판 검색 끝 -->

<!--
<div class="mo_view sub-headline">
	<h1 class="sub-headline-tit"><a href=""><?php echo $board['bo_subject'] ?></a></h1>
</div>
-->


<div id="ajax-a">
	<div class="ajax-b">
		<div class="main-content">
            <?php if ($is_category) { ?>
            <div class="mo_view bo_mo_cate">
                <form name="fcategory" method="get">
                    <input type="hidden" name="bo_table" value="<?php echo $bo_table; ?>">
                    <select name="sca" onchange="this.form.submit()" class="bo_cate_sel">
                        <option value=''>전체</option>
                        <?php echo get_category_option($bo_table, $sca); // SELECT OPTION 태그로 넘겨받음 ?>
                    </select>
                </form>
            </div>
            <?php } ?>
            
			<form name="fboardlist"  id="fboardlist" action="./board_list_update.php" onsubmit="return fboardlist_submit(this);" method="post">
                <input type="hidden" name="bo_table" value="<?php echo $bo_table ?>">
                <input type="hidden" name="sfl" value="<?php echo $sfl ?>">
                <input type="hidden" name="stx" value="<?php echo $stx ?>">
                <input type="hidden" name="spt" value="<?php echo $spt ?>">
                <input type="hidden" name="sst" value="<?php echo $sst ?>">
                <input type="hidden" name="sod" value="<?php echo $sod ?>">
                <input type="hidden" name="page" value="<?php echo $page ?>">
                <input type="hidden" name="sw" value="">
			
                <div class="section gallery_section">
                    <div class="">

                        <?php if ($is_category) { ?>
                        <ul id="bo_cate" class="pc_view">
                            <?php echo $category_option ?>
                        </ul>
                        <?php } ?>

                        <div class="cbt"></div>
                        
                        <?php if ($is_checkbox) { ?>
                        <div class="chk">
                            <label for="chkall" class="sound_only">현재 페이지 게시물 전체</label>
                            <span class="tit">전체선택</span>
                            <input type="checkbox" id="chkall" onclick="if (this.checked) all_checked(true); else all_checked(false);">
                        </div>
                        <?php } ?>


                        <div class="portfolio__grid hover--one two--columns flex_row fw sb al_fs">
                            <div class="sizer"></div>
                            <div class="item item_tit">
                                <?php if ($is_checkbox) { ?>
                                    <div class="chk">
                                        <label for="chkall" class="sound_only">현재 페이지 게시물 전체</label>
                                        <input type="checkbox" id="chkall" onclick="if (this.checked) all_checked(true); else all_checked(false);">
                                    </div>
                                <?php } ?>
                                <a href="#">이미지</a>
                                <div class="txt">제목</div>
                            </div>
                            
                            <?php for ($i=0; $i<count($list); $i++) {
                                $classes = array();
                                $classes[] = 'gall_li';
                                $classes[] = 'col-gn-'.$bo_gallery_cols;
                                if( $i && ($i % $bo_gallery_cols == 0) ){
                                    $classes[] = 'box_clear';
                                }
                                if( $wr_id && $wr_id == $list[$i]['wr_id'] ){
                                    $classes[] = 'gall_now';
                                }
                            ?>

                            <div class="item">
                                <a href="<?php echo $list[$i]['href'] ?>">
                                    <?php
                                        $thumb = get_list_thumbnail($board['bo_table'], $list[$i]['wr_id'], $board['bo_gallery_width'], $board['bo_gallery_height'], false, true);

                                        if($thumb['src']) {
                                            $img_content = '<img src="'.$thumb['src'].'" alt="'.$thumb['alt'].'" >';
                                        } /*else if ($list[$i]['wr_10']){
                                            $img_content = '<img src="https://s.ytimg.com/yts/img/favicon_144-vfliLAfaB.png" style="position:absolute; width:30px; margin:15px 20px;"><img src="https://img.youtube.com/vi/'.$list[$i]['wr_10'].'/0.jpg">';
                                        } */else {
                                            $img_content = '<div class="no_image">No Image</div>';
                                        }
                                        echo $img_content;
                                    ?>
                                    <div class="caption">
                                        <div class="inner">
                                            <?php if ($list[$i]['ca_name']) { ?><span style="color:#fff; font-size:14px; padding:bottom:5px;"><?php echo $list[$i]['ca_name']; ?><span><?php } ?>
                                            <h4><?php echo $list[$i]['subject'] ?></h4>
                                            <!-- <p><?php echo passing_time($list[$i]['wr_datetime']); ?>　<?php echo $list[$i]['name'] ?></p> -->
                                        </div>
                                    </div>
                                </a>
                                <!--
                                <div style="color:#333;" class="txt">
                                    <a href="<?php echo $list[$i]['href'] ?>">
                                    <?php echo $list[$i]['subject'] ?><?php if ($list[$i]['comment_cnt']) { ?><span style="font-weight:bold; color:#ff6666;">　<?php echo $list[$i]['wr_comment']; ?><span><?php } ?></a>
                                </div>
                                -->
                                <?php if ($is_checkbox) { ?>
                                <div class="txt" style="font-size:9px; color:#999; letter-spacing:0px; padding: 0; line-height:1; text-align:right;">
                                    <input type="checkbox" name="chk_wr_id[]" value="<?php echo $list[$i]['wr_id'] ?>" id="chk_wr_id_<?php echo $i ?>">
                                </div>
                                <?php } ?>
                                <div style="clear:both;"></div>
                            </div>
                            <?php } ?>
                            <?php if (count($list) == 0) { ?> 
                            <div class="item" style="width:100%; text-align:center;">
                                <h3 class="mt-5 mb-2">등록된 게시물이 없습니다.</h3>
                            </div> 
                            <?php } ?>
                        </div>
                    </div>
                </div>
            
                <div class="section">
                    <div class="container">
                        <div class="template-form flex_row jc_fe center">
                        <?php if ($list_href || $is_checkbox || $write_href) { ?>
                            <?php if ($list_href || $write_href) { ?>
                                <?php if ($is_checkbox) { ?>
                                <div class="submit_btn">
                                    <button type="submit" name="btn_submit" value="선택삭제" onclick="document.pressed=this.value" class="wpcf7-form-control wpcf7-submit txt btn_del">선택삭제</button>
                                    <!--<button type="submit" name="btn_submit" value="선택복사" onclick="document.pressed=this.value" class="wpcf7-form-control wpcf7-submit txt">복사</button>
                                    <button type="submit" name="btn_submit" value="선택이동" onclick="document.pressed=this.value" class="wpcf7-form-control wpcf7-submit txt">이동</button>
                                    -->
                                </div>
                                <?php } ?>

                                <?php if ($list_href) { ?><input type="button" value="목록" class="wpcf7-form-control wpcf7-submit txt" onClick="location.href='<?php echo $list_href ?>'"><?php } ?>
                                <!--<?php if ($write_href) { ?><input type="button" value="글쓰기" class="wpcf7-form-control wpcf7-submit txt in_write" onClick="location.href='<?php echo $write_href ?>'"><?php } ?>-->
                                <?php if ($write_href) { ?><a href="<?php echo $write_href ?>" class="in_write"><img src="http://ptldesign.cafe24.com/img/list_write.png" alt="글쓰기"></a><?php } ?>

                                <?php if ($is_admin) { ?>
                                <div id="bo_admin">
                                    <a href="<?php echo G5_ADMIN_URL ?>" target="_blank"><img src="http://ptldesign.cafe24.com/img/list_admin.png" alt="관리자"></a>
                                </div>
                                <?php } ?>
                            <?php } ?>
                        <?php } ?>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
</div>



<?php
include_once(G5_PATH.'/tail.php');
?>

<?php if($is_checkbox) { ?>
<noscript>
<p>자바스크립트를 사용하지 않는 경우<br>별도의 확인 절차 없이 바로 선택삭제 처리하므로 주의하시기 바랍니다.</p>
</noscript>
<?php } ?>



<!-- 페이지 -->
<?php echo $write_pages;  ?>


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
        f.action = "./board_list_update.php";
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
    f.action = "./move.php";
    f.submit();
}
</script>
<?php } ?>
<!-- } 게시판 목록 끝 -->

<script type="text/javascript" defer src="<?php echo $board_skin_url ?>/autoptimize_bbs.js"></script>
<script src="<?php echo $board_skin_url ?>/imagesloaded.pkgd.min.js" type="text/javascript"></script>

