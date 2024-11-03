<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

// add_stylesheet('css 구문', 출력순서); 숫자가 작을 수록 먼저 출력됨
add_stylesheet('<link rel="stylesheet" href="'.$latest_skin_url.'/style.css">', 0);

$list = array();
$sql = "select * from g5_write_projects where 1";
$row = sql_fetch($sql);

$sql = " select * from g5_write_projects where wr_15 = '0' order by `g5_write_projects`.`wr_datetime` desc limit 0, 4 ";
$result = sql_query($sql);

for ($i=0; $row = sql_fetch_array($result); $i++) {
	$list[$i] = get_list($row, $board, $board_skin_url, $board['bo_subject_len']);
}

?>

<?php
for ($i=0; $i<count($list); $i++) {
    //if($list[$i]['ca_name']=='수상작' || $list[$i]['ca_name']=='HP'){
?>   
<div class="swiper-slide main_cont03_slider main_cont03_slider0<?php echo $i+1 ?>">
    <a href="<?php echo G5_URL?>/projects">
        <div class="main_cont03_list_box">
            <div class="main_cont03_list_img">
                <?php
                $thumb_width = 521;
                $thumb_height = 263;
                $thumb = get_list_thumbnail($board['bo_table'], $list[$i]['wr_id'], $thumb_width, $thumb_height, false, true);
                
                if($thumb['src']) {
                    $img_content = '<img src="'.$thumb['src'].'" alt="'.$thumb['alt'].'" >';
                } else {
                    $img_content = '
                    <img src="'.$board_skin_url.'/img/no_image.jpg" alt="" >
                    <span class="no_image">이미지가 없습니다.</span>';
                }
                
                echo $img_content;
                ?>
                
                <?php if($list[$i]['wr_12'] == 'g' && $list[$i]['wr_13'] == '' && $list[$i]['wr_14'] == '') { ?>
                <div class="main_cont03_award_icon">
                    <i class="gdweb_icon"></i>
                </div>
                <?php } else if($list[$i]['wr_13'] == 'i' && $list[$i]['wr_12'] == '' && $list[$i]['wr_14'] == '') { ?>
                <div class="main_cont03_award_icon">
                    <i class="iaward_icon"></i>
                </div>
                <?php } else if($list[$i]['wr_14'] == 'n' && $list[$i]['wr_12'] == '' && $list[$i]['wr_13'] == '') { ?>
                <div class="main_cont03_award_icon">
                    <i class="naward_icon"></i>
                </div>
                <?php } else if($list[$i]['wr_12'] == 'g' && $list[$i]['wr_13'] == 'i' && $list[$i]['wr_14'] == '') { ?>
                <div class="main_cont03_award_icon">
                    <i class="gdweb_icon"></i>
                    <i class="iaward_icon"></i>
                </div>
                <?php } else if($list[$i]['wr_12'] == 'g' && $list[$i]['wr_14'] == 'n' && $list[$i]['wr_13'] == '') { ?>
                <div class="main_cont03_award_icon">
                    <i class="gdweb_icon"></i>
                    <i class="naward_icon"></i>
                </div>
                <?php } else if($list[$i]['wr_13'] == 'i' && $list[$i]['wr_14'] == 'n' && $list[$i]['wr_12'] == '') { ?>
                <div class="main_cont03_award_icon">
                    <i class="iaward_icon"></i>
                    <i class="naward_icon"></i>
                </div>
                <?php } else if($list[$i]['wr_12'] == 'g' && $list[$i]['wr_13'] == 'i' && $list[$i]['wr_14'] == 'n') { ?>
                <div class="main_cont03_award_icon">
                    <i class="gdweb_icon"></i>
                    <i class="iaward_icon"></i>
                    <i class="naward_icon"></i>
                </div>
                <?php } ?>
            </div>
            <div class="main_cont03_list_txt">
                <p class="txt01 fz_16 lh_16 medium">
                    <?php if(!$list[$i]['wr_11'] == '') { ?>
                        <?php echo $list[$i]['wr_11'] ?>
                    <?php } ?>
                </p>
                <p class="txt02 fz_16 lh_16 normal">
                    <!--<i class="winner_icon"></i> --><span><?php echo $list[$i]['wr_subject'] ?></span>
                </p>
            </div>
        </div>
    </a>
</div> 
<?php //} ?>
<?php } ?>
<?php if ($list == 0) { //게시물이 없을 때  ?>
<div class="no-data">게시글 준비 중입니다.</div>
<?php } ?>
