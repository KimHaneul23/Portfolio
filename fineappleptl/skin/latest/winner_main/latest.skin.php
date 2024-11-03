<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가
include_once(G5_LIB_PATH.'/thumbnail.lib.php');

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

<div class="main_cont02_fixed_img main_cont02_fixed_img01"></div>
<div class="main_cont02_title">
    <p class="award_cup reveal fade-up">
        <i class="award_cup_icon"></i>
    </p>
    <h2 class="txt01 reveal fade-up c-w fz_24 ls_p1 lh_16 sortsmillgoudy normal">
        Web Award <span class="italic">Winner</span>
    </h2>
    <div class="main_cont02_logo reveal fade-up">
        <div class="swiper-container main_cont02_swiper_logo" id="main_cont02_swiper_logo">
            <div class="swiper-wrapper">
                <?php for ($i=0; $i<count($list); $i++) { ?>
                <div class="swiper-slide main_cont02_slider_logo main_cont02_slider_logo0<?php echo $i+1 ?> <?php if($i == 0){ echo 'on'; } ?>">
                    <a href="<?php echo G5_URL?>/projects">
                        <div class="main_cont02_slider_logo_box main_cont02_slider_logo_box0<?php echo $i+1 ?>">
                            <img src="<?php echo G5_URL ?>/data/file/<?php echo $bo_table?>/<?php echo $list[$i][file][2][file] ?>" alt="<?php echo $list[$i]['subject'] ?> 로고"/>
                        </div>
                    </a>
                </div>
                <?php } ?>
                <?php if ($list == 0) { //게시물이 없을 때  ?>
                <div class="no-data">게시글 준비 중입니다.</div>
                <?php } ?>
            </div>
        </div>
        <style>
            .main_cont02_swiper_logo{position:relative;}
            .main_cont02_slider_logo{width:100% !important; opacity:0 !important;}
            .main_cont02_slider_logo.on{opacity:1 !important;}
            .main_cont02_slider_logo > a{position:relative; width:auto; display:inline-block;}
            
            <?php for ($i=0; $i<count($list); $i++) { ?>
            .main_cont02_fixed_img.main_cont02_fixed_img0<?php echo $i+1 ?>{
                background: url(<?php echo G5_URL ?>/data/file/<?php echo $bo_table?>/<?php echo $list[$i][file][0][file] ?>) 50% 50%/cover fixed no-repeat;
            }
            <?php } ?>
        </style>
    </div>
</div>
<div class="main_cont02_section mouse_hover">
    <div class="main_cont02_swiper_wrap">
        <div class="swiper-container main_cont02_swiper" id="main_cont02_swiper">
            <div class="swiper-wrapper">
                <?php
                for ($i=0; $i<count($list); $i++) {
                ?>
                <div class="swiper-slide main_cont02_slider main_cont02_slider0<?php echo $i+1 ?>">
                    <a href="<?php echo G5_URL?>/projects">
                        <div class="main_cont02_slider_box main_cont02_slider_box0<?php echo $i+1 ?> <?php if($i == 0){ echo 'on'; } ?>">
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
                            <p class="txt03 fz_15 ls_p1 lh_16 pretendard medium">
                                <?php echo $list[$i]['wr_5'] ?>
                            </p>
                        </div>
                    </a>
                </div>
                <?php } ?>
                <?php if ($list == 0) { //게시물이 없을 때  ?>
                <div class="no-data">게시글 준비 중입니다.</div>
                <?php } ?>
            </div>
        </div>
    </div>
    <!-- 마우스 효과 - 메인 -->
    <div class="circle-cursor" id="circleCursor"></div>
</div>

<script src="<?php echo G5_URL?>/plugins/swiper/swiper-bundle.min.js"></script>
<script>
    // slide 
    (function() {
        var window_width = $(window).width();
        if (window_width <= 960) { // 모바일
            
        } else { // PC

            var main_cont02_swiper = new Swiper('.main_cont02_swiper', {
                slidesPerView:'auto',
                spaceBetween: 0,
                speed:800,
                autoplay: {
                    delay: 4500,
                    disableOnInteraction: false,
                },
                loop:false,
                loopAdditionalSlides: 1,
                observer: true,
                observeParents: true,
                slidesPerGroup : 1, //한번에 슬라이딩될 개수
                on: {
                    init: function() {

                    },
                    slideChange: function () {
                        <?php for ($i=0; $i<count($list); $i++) { ?>
                        if(this.realIndex == <?php echo $i ?>){ 
                            <?php for ($z=0; $z<count($list); $z++) { ?>
                            $('.main_cont02_fixed_img').stop().removeClass('main_cont02_fixed_img0<?php echo $z+1 ?>');
                            <?php } ?>
                            $('.main_cont02_fixed_img').stop().addClass('main_cont02_fixed_img0<?php echo $i+1 ?>');
                            
                            <?php for ($t=0; $t<count($list); $t++) { ?>
                            $('.main_cont02_slider_box0<?php echo $t+1 ?>').stop().removeClass('on');
                            <?php } ?>
                            $('.main_cont02_slider_box0<?php echo $i+1 ?>').stop().addClass('on');
                        }
                        <?php } ?>
                    }
                },
            });
            
            <?php for ($i=0; $i<count($list); $i++) { ?>
            $('.main_cont02_slider0<?php echo $i+1 ?>').hover(function(){
                <?php for ($z=0; $z<count($list); $z++) { ?>
                $('.main_cont02_fixed_img').stop().removeClass('main_cont02_fixed_img0<?php echo $z+1 ?>');
                <?php } ?>
                $('.main_cont02_fixed_img').stop().addClass('main_cont02_fixed_img0<?php echo $i+1 ?>');
                
                <?php for ($t=0; $t<count($list); $t++) { ?>
                $('.main_cont02_slider_box0<?php echo $t+1 ?>').stop().removeClass('on');
                <?php } ?>
                $('.main_cont02_slider_box0<?php echo $i+1 ?>').stop().addClass('on');
                
                <?php for ($h=0; $h<count($list); $h++) { ?>
                $('.main_cont02_slider_logo0<?php echo $h+1 ?>').stop().removeClass('on');
                <?php } ?>
                $('.main_cont02_slider_logo0<?php echo $i+1 ?>').stop().addClass('on');
            });
            <?php } ?>
            
            var main_cont02_swiper_logo = new Swiper('.main_cont02_swiper_logo', {
                effect : 'fade', // 페이드 효과 사용
                slidesPerView:'auto',
                spaceBetween: 0,
                speed:800,
                autoplay: false,
                loop: false,
                loopAdditionalSlides: 1,
                observer: true,
                observeParents: true,
                slidesPerGroup : 1, //한번에 슬라이딩될 개수
                on: {
                    init: function() {
                        
                    },
                    slideChange: function () {
                        <?php for ($i=0; $i<count($list); $i++) { ?>
                        if(this.realIndex == <?php echo $i ?>){ 
                            <?php for ($h=0; $h<count($list); $h++) { ?>
                            $('.main_cont02_slider_logo0<?php echo $h+1 ?>').stop().removeClass('on');
                            <?php } ?>
                            $('.main_cont02_slider_logo0<?php echo $i+1 ?>').stop().addClass('on');
                        }
                        <?php } ?>
                    }
                },
            });

            main_cont02_swiper.controller.control = main_cont02_swiper_logo;
            main_cont02_swiper_logo.controller.control = main_cont02_swiper;

        }
    })(); // resize 최적화
</script>
