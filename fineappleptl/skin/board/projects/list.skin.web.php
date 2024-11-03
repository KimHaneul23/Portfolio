<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가
include_once(G5_LIB_PATH.'/thumbnail.lib.php');

// add_stylesheet('css 구문', 출력순서); 숫자가 작을 수록 먼저 출력됨
add_stylesheet('<link rel="stylesheet" href="'.$board_skin_url.'/style.css">', 0);

?>
<style>
    @media (max-width:960px) {
        
    }
</style>
<script>
    $(document).ready(function() {
        $('.header_menu_li01_1').stop().removeClass('on');
        $('.header_menu_li01_2').stop().removeClass('on');
        $('.header_menu_li01_3').stop().addClass('on');
        $('.header_menu_li01_4').stop().removeClass('on');
    });
</script>
<main id="content">
    
    <article class="sub_top_cont sub1_3_top_cont" id="startContent">
        <div class="sub_top_cont_wrap">
            <div class="sub_top_text sub_titlebox ta_c">
                <h2 class="txt01 reveal fade-up delay_200 fz_80 ls_2 lh_16 sortsmillgoudy normal">
                    Projects
                </h2>
                <h3 class="txt02 reveal fade-up delay_200 fz_16 ls_p1 lh_14 pretendard normal">
                    우리는 공감이 필요한 클라이언트를 기다리고 있습니다
                </h3>
                
                <div class="href_id" id="href_id"></div>
            </div>
            
            <!-- 게시판 카테고리 시작 { -->
            <?php if ($is_category) { ?>
            <nav id="bo_cate">
                <ul id="bo_cate_ul">
                    <?php echo $category_option ?>
                </ul>
            </nav>
            <?php } ?>
            <!--<style>
                #bo_cate li:nth-child(3){display:none;}
                #bo_cate li:nth-child(4){display:none;}
                #bo_cate li:nth-child(5){display:none;}
            </style>-->
            <!-- } 게시판 카테고리 끝 -->
        </div>
    </article>
    
    <article class="sub_cont_wrap s13_c01_wrap">
        
        <!-- 게시판 목록 시작 { -->
        <div class="bo_contents" data-aos="fade-up">
            <div class="bo_inner">
                <div id="bo_list" style="width:<?php echo $width; ?>">
                    
                    <!-- 게시판 카테고리 시작 { -->
                    <?php if ($is_category) { ?>
                    <!--<nav id="bo_cate">
                        <ul id="bo_cate_ul">
                            <?php echo $category_option ?>
                        </ul>
                    </nav>-->
                    <?php } ?>
                    <!-- } 게시판 카테고리 끝 -->
                    
                    <form name="fboardlist" id="fboardlist" action="<?php echo G5_BBS_URL; ?>/board_list_update.php" onsubmit="return fboardlist_submit(this);" method="post">
                       
                        <input type="hidden" name="bo_table" value="<?php echo $bo_table ?>">
                        <input type="hidden" name="sfl" value="<?php echo $sfl ?>">
                        <input type="hidden" name="stx" value="<?php echo $stx ?>">
                        <input type="hidden" name="spt" value="<?php echo $spt ?>">
                        <input type="hidden" name="sca" value="<?php echo $sca ?>">
                        <input type="hidden" name="sst" value="<?php echo $sst ?>">
                        <input type="hidden" name="sod" value="<?php echo $sod ?>">
                        <input type="hidden" name="page" value="<?php echo $page ?>">
                        <input type="hidden" name="sw" value="">
                        
                        <div class="projects_list_wrap">
                            <ul id="projects_list" class="projects_list">
                                <?php for ($i=0; $i<count($list); $i++) { ?>
                                <li class="projects_list_li">
                                    <!--<a href="<?php echo $list[$i]['href'] ?>#href_id">-->
                                    <a href="<?php echo $list[$i]['wr_2'] ?>" target="_blank">
                                        <div class="projects_list_box">
                                            <div class="projects_img">
                                                <?php
                                                $thumb = get_list_thumbnail($board['bo_table'], $list[$i]['wr_id'], $board['bo_gallery_width'], $board['bo_gallery_height'], false, true);
                                                
                                                if($thumb['ori']) {
                                                    $img_content = '<img src="'.$thumb['ori'].'" alt="'.$thumb['alt'].'" >';
                                                } else {
                                                    $img_content = '
                                                    <img src="'.$board_skin_url.'/img/no_image.jpg" alt="" >
                                                    <span class="no_image">이미지가 없습니다.</span>';
                                                }
                                                
                                                echo $img_content;
                                                ?>
                                                
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
                                            </div>
                                            <div class="projects_txt">
                                                <p class="txt01 fz_13 notosans medium">
                                                <?php if(!$list[$i]['wr_11'] == '') { ?>
                                                    <?php echo $list[$i]['wr_11'] ?>
                                                <?php } ?>
                                                </p>
                                                <p class="txt02 fz_13 notosans normal">
                                                    <?php echo $list[$i]['wr_subject'] ?>
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <?php } ?>
                                <?php if (count($list) == 0) { echo "<li class=\"empty_list\">게시물이 없습니다.</li>"; } ?>
                            </ul>
                        </div>  
                        
                        <!-- 페이지 -->
                        <?php echo $write_pages; ?>
                        <!-- 페이지 -->
                    </form>
                    <!-- } 게시판 검색 끝 --> 
                </div>
            </div>
        </div>
        
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
                f.action = g5_bbs_url+"/board_list_update.php";
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
            f.action = g5_bbs_url+"/move.php";
            f.submit();
        }
        
        </script>
        <?php } ?>
        <!-- } 게시판 목록 끝 -->
        
    </article>
</main>
<!-- //main -->
