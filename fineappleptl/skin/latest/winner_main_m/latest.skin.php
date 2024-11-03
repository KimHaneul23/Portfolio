<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

// add_stylesheet('css 구문', 출력순서); 숫자가 작을 수록 먼저 출력됨
add_stylesheet('<link rel="stylesheet" href="'.$latest_skin_url.'/style.css">', 0);

$list = array();
$sql = "select * from g5_write_winner where 1";
$row = sql_fetch($sql);

$sql = " select * from g5_write_winner where 1 order by `g5_write_winner`.`wr_datetime` desc limit 0, 20 ";
$result = sql_query($sql);

for ($i=0; $row = sql_fetch_array($result); $i++) {
	$list[$i] = get_list($row, $board, $board_skin_url, $board['bo_subject_len']);
}

?>

<?php
for ($i=0; $i<count($list); $i++) {
?>
<div class="swiper-slide main_cont02_slider main_cont02_slider0<?php echo $i+1 ?>">
    <a href="<?php echo G5_URL?>/projects">
        <div class="main_cont02_slider_img">
            <img src="<?php echo G5_URL ?>/data/file/<?php echo $bo_table?>/<?php echo $list[$i][file][1][file] ?>" alt="<?php echo $list[$i]['subject'] ?>">
        </div>
        <div class="main_cont02_slider_box main_cont02_slider_box0<?php echo $i+1 ?>">
            <p class="txt01 fz_15 ls_p1 lh_16 pretendard normal">
                <?php if($list[$i]['wr_1'] == 'g' && $list[$i]['wr_2'] == '' && $list[$i]['wr_3'] == '' && $list[$i]['wr_4'] == '') { ?>
                지디웹 수상
                <?php } else if($list[$i]['wr_1'] == '' && $list[$i]['wr_2'] == 'i' && $list[$i]['wr_3'] == '' && $list[$i]['wr_4'] == '') { ?>
                아이어워즈 대상 수상
                <?php } else if($list[$i]['wr_1'] == '' && $list[$i]['wr_2'] == '' && $list[$i]['wr_3'] == 'i2' && $list[$i]['wr_4'] == '') { ?>
                아이어워즈 최우수상
                <?php } else if($list[$i]['wr_1'] == '' && $list[$i]['wr_2'] == '' && $list[$i]['wr_3'] == '' && $list[$i]['wr_4'] == 'n') { ?>
                앤어워즈 수상
                <?php } else if($list[$i]['wr_1'] == 'g' && $list[$i]['wr_2'] == 'i' && $list[$i]['wr_3'] == '' && $list[$i]['wr_4'] == '') { ?>
                지디웹 | 아이어워즈 대상 수상
                <?php } else if($list[$i]['wr_1'] == 'g' && $list[$i]['wr_2'] == '' && $list[$i]['wr_3'] == 'i2' && $list[$i]['wr_4'] == '') { ?>
                지디웹 | 아이어워즈 최우수상
                <?php } else if($list[$i]['wr_1'] == 'g' && $list[$i]['wr_2'] == '' && $list[$i]['wr_3'] == '' && $list[$i]['wr_4'] == 'n') { ?>
                지디웹 | 앤어워즈 수상
                <?php } else if($list[$i]['wr_1'] == '' && $list[$i]['wr_2'] == 'i' && $list[$i]['wr_3'] == 'i2' && $list[$i]['wr_4'] == '') { ?>
                아이어워즈 대상 수상 | 아이어워즈 최우수상
                <?php } else if($list[$i]['wr_1'] == '' && $list[$i]['wr_2'] == 'i' && $list[$i]['wr_3'] == '' && $list[$i]['wr_4'] == 'n') { ?>
                아이어워즈 대상 수상 | 앤어워즈 수상
                <?php } else if($list[$i]['wr_1'] == '' && $list[$i]['wr_2'] == '' && $list[$i]['wr_3'] == 'i2' && $list[$i]['wr_4'] == 'n') { ?>
                아이어워즈 최우수상 | 앤어워즈 수상
                <?php } else if($list[$i]['wr_1'] == 'g' && $list[$i]['wr_2'] == 'i' && $list[$i]['wr_3'] == 'i2' && $list[$i]['wr_4'] == '') { ?>
                지디웹 | 아이어워즈 대상 수상 | 아이어워즈 최우수상
                <?php } else if($list[$i]['wr_1'] == 'g' && $list[$i]['wr_2'] == 'i' && $list[$i]['wr_3'] == '' && $list[$i]['wr_4'] == 'n') { ?>
                지디웹 | 아이어워즈 대상 수상 | 앤어워즈 수상
                <?php } else if($list[$i]['wr_1'] == 'g' && $list[$i]['wr_2'] == '' && $list[$i]['wr_3'] == 'i2' && $list[$i]['wr_4'] == 'n') { ?>
                지디웹 | 아이어워즈 최우수상 | 앤어워즈 수상
                <?php } else if($list[$i]['wr_1'] == '' && $list[$i]['wr_2'] == 'i' && $list[$i]['wr_3'] == 'i2' && $list[$i]['wr_4'] == 'n') { ?>
                아이어워즈 대상 수상 | 아이어워즈 최우수상 | 앤어워즈 수상
                <?php } else if($list[$i]['wr_1'] == 'g' && $list[$i]['wr_2'] == 'i' && $list[$i]['wr_3'] == 'i2' && $list[$i]['wr_4'] == 'n') { ?>
                지디웹 | 아이어워즈 대상 수상 | 아이어워즈 최우수상 | 앤어워즈 수상
                <?php } ?>
            </p>
            <p class="txt02 fz_30 ls_p1 lh_12 pretendard medium">
                <?php echo $list[$i]['subject'] ?><br>
                <span class="fz_20 ls_p1 lh_12">
                    <?php if($list[$i]['wr_7'] == 'new') { ?>
                    NEW
                    <?php } else if($list[$i]['wr_7'] == 'renewal') { ?>
                    RENEWAL
                    <?php } ?>
                </span>
            </p>
        </div>
    </a>
</div> 
<?php } ?>
<?php if ($list == 0) { //게시물이 없을 때  ?>
<div class="no-data">게시글 준비 중입니다.</div>
<?php } ?>

<script src="<?php echo G5_URL?>/plugins/swiper/swiper-bundle.min.js"></script>
<script>
    // slide 
    (function() {
        var window_width = $(window).width();
        if (window_width <= 960) { // 모바일
            var main_cont02_swiper_m = new Swiper('.main_cont02_swiper_m', {
                slidesPerView:'auto',
                spaceBetween: 0,
                speed:1000,
                autoplay: {
                    delay: 4500,
                    disableOnInteraction: false,
                },
                loop: true,
                loopAdditionalSlides: 1,
                observer: true,
                observeParents: true,
                centeredSlides: true,
            });
            
        } else { // PC
            
        }
    })(); // resize 최적화
</script>
