<?php
if (!defined("_GNUBOARD_")) exit; // 개별 페이지 접근 불가

include_once(G5_LIB_PATH .'/thumbnail.lib.php');

// 웹사이트 타이틀
$g5['title'] = '통합검색';

// add_stylesheet('css 구문', 출력순서); 숫자가 작을 수록 먼저 출력됨
add_stylesheet('<link rel="stylesheet" href="'.$search_skin_url.'/style.css">', 0);

$srows = 10;
?>
<style>
    @media (max-width:480px) { /* 헤더 블랙 */
        .header_menu_li > a{color:#000;}
        .header_menu_li > a::after{border-bottom:1px solid #000; }
        .logo > a > .logo_b{display:block;}
        .logo > a > .logo_w{display:none;}
        .glob-icon{background: url(<?php echo G5_THEME_URL?>/img/global-icon.png)0 100%/100% no-repeat;}
        .select-lang-btn::after{border-top-color:#000;}
        .lang-select-list{background-color:#000;}
        .lang-select-list li{color:#fff;}
        .lang-select-list li.active{color: #fff;}
        .lang-select-list > li:hover > a{color: #fff;}
        .search_icon{background: url(<?php echo G5_THEME_URL?>/img/search-icon-w.png)0 100%/100% no-repeat;}
        .hamberger .line{background:#000;}
        .hamberger .line_close{background:#000;}
        .hamberger.open .line{background:#fff;}
        .hamberger.open .line_close{ background:#fff;}
        .m_call_btn{background: url(<?php echo G5_THEME_URL?>/img/call_icon.png)0 100%/100% no-repeat;}
        .header_number > a{color:#fff;}
    }
</style>
<main id="content">
    
    <article class="sub_top_cont sub7_1_top_cont" id="startContent">
        <div class="sub_top_cont_wrap">
            <div class="sub_top_view_bg sub7_1_top_view_bg"></div>
            <div class="sub_top_text sub_titlebox ta_c">
                <p class="txt01 reveal fade-up delay_200 fz_17 lh_16 sortsmillgoudy normal">
                    SEARCH
                </p>
                <p class="txt02 reveal fade-up delay_400 fz_40 ls_p3 lh_16 kopubworlddotum semibold">
                    통합검색
                </p>
                <div class="s71_search_box reveal fade-up delay_600">
                    <!-- 전체검색 시작 { -->
                    <form name="fsearch" onsubmit="return fsearch_submit(this);" method="get">
                        <input type="hidden" name="srows" value="<?php echo $srows ?>">
                        <input type="hidden" name="gr_id" value="community">
                        <input type="hidden" name="sfl" value="wr_subject||wr_content||ca_name||wr_name">
                        <fieldset id="sch_res_detail">
                            <legend>상세검색</legend>
                            <label for="stx" class="sound_only">검색어<strong class="sound_only"> 필수</strong></label>
                            <span class="sch_wr">
                                <input type="text" name="stx" placeholder="검색어를 입력해주세요" value="<?php echo $text_stx ?>" id="stx" required class="frm_input" size="40">
                                <button type="submit" class="btn_submit"></button>
                            </span>
                            
                            <script>
                            function fsearch_submit(f) {
                                if (f.stx.value.length < 2) {
                                    alert("검색어는 두글자 이상 입력하십시오.");
                                    f.stx.select();
                                    f.stx.focus();
                                    return false;
                                }
                                
                                // 검색에 많은 부하가 걸리는 경우 이 주석을 제거하세요.
                                var cnt = 0;
                                for (var i=0; i<f.stx.value.length; i++) {
                                    if (f.stx.value.charAt(i) == ' ')
                                        cnt++;
                                }
                                
                                if (cnt > 1) {
                                    alert("빠른 검색을 위하여 검색어에 공백은 한개만 입력할 수 있습니다.");
                                    f.stx.select();
                                    f.stx.focus();
                                    return false;
                                }
                                
                                f.action = "";
                                return true;
                            }
                            </script>
                        </fieldset>
                    </form>
                    
                    <?php
                    if ($stx) {
                        if ($board_count) {
                    ?>
                    <section id="sch_res_ov">
                        <p class="txt01 c-333 fz_18 ls_p2 lh_16 kopubworlddotum normal"><span class="c-b semibold">‘<?php echo $stx ?>’</span> 에 대한 총 <span class="c-b semibold"><?php echo number_format($total_count) ?>건</span>의 검색 결과가 있습니다.</p>
                    </section>
                    <?php
                        }
                    }
                    ?>
                </div>
            </div>
        </div>
    </article>
    
    <article id="href_id" class="sub_cont_wrap s71_c01_wrap">
        
        <div id="sch_result">
            <?php
            if ($stx) {
                if ($board_count) {
            ?>
            <!--<ul id="sch_res_board">
                <li><a href="?<?php echo $search_query ?>&amp;gr_id=<?php echo $gr_id ?>" <?php echo $sch_all ?>>전체게시판</a></li>
                <?php echo $str_board_list; ?>
            </ul>-->
            <?php
                } else {
            ?>
            <div class="empty_list fz_16 kopubworlddotum normal">검색된 자료가 하나도 없습니다.</div>
            <?php } }  ?>
            
            <?php if ($stx && $board_count) { ?><section class="sch_res_list"><?php }  ?>
            <?php
            $k_a = 0;
            for ($idx=$table_index; $idx<count($search_table) && ($k_a + $k_b)<$rows; $idx++) {
                $cnt = $search_table[$idx];
            ?>
                <?php if($search_table[$idx] == 'before_after') { ?>
                <div class="search_board_result">
                    <p class="search_board_title">
                        <a href="<?php echo get_pretty_url($search_table[$idx], '', $search_query); ?>">
                            <span class="fz_20 ls_p5 lh_16 kopubworlddotum normal" style="color:#787878;"><?php echo $bo_subject[$idx] ?></span>&ensp;<span class="fz_20 ls_p5 lh_16 kopubworlddotum semibold" style="color:#000;"><?php echo $table_cnt[$cnt]; ?>건</span>
                        </a>
                    </p>
                    <ul class="">
                    <?php
                    for ($i=0; $i<count($list[$idx]) && $k_a<$rows; $i++, $k_a++) {
                        if ($list[$idx][$i]['wr_is_comment']) {
                            $comment_def = '<span class="cmt_def"><i class="fa fa-commenting-o" aria-hidden="true"></i><span class="sound_only">댓글</span></span> ';
                            $comment_href = '#c_'.$list[$idx][$i]['wr_id'];
                        } else {
                            $comment_def = '';
                            $comment_href = '';
                        }
                        
                        // 이미지파일 호출
                        $file = get_file($search_table[$idx], $list[$idx][$i]['wr_id']);
                    ?>
                        
                        <li class="<?php echo $i; ?> <?php echo $k_a + $k_b; ?> <?php echo $total_count; ?> <?php echo $rows; ?>">
                            <div class="sch_tit sch_tit_bna ta_c">
                                <a href="<?php echo $list[$idx][$i]['href'] ?><?php echo $comment_href ?>" class="sch_res_title sch_res_title_bna">
                                    <span class="s71_search_bna_text fz_19 lh_16 kopubworlddotum semibold">[<?php echo $list[$idx][$i]['ca_name'] ?>]</span>
                                    <span class="s71_search_bna_text fz_19 lh_16 kopubworlddotum normal"><?php echo $list[$idx][$i]['subject'] ?></span>
                                </a>
                            </div>
                            <div class="s71_search_img">
                                <?php
                                    $thumb_width = 319;
                                    $thumb_height = 189;
                                    
                                    if(preg_match("/\.({$config['cf_image_extension']})$/i", $file[0]['file'])) {
                                        $file_src1 = '<img src="'.$file[0]['path'].'/'.$file[0]['file'].'" width="'.$thumb_width.'" height="'.$thumb_height.'">';
                                    }else {
                                        $file_src1 = '<img src="'.G5_THEME_URL.'/img/noimage.png"> width="'.$thumb_width.'"';
                                    }
                                    
                                    if(preg_match("/\.({$config['cf_image_extension']})$/i", $file[1]['file'])) {
                                        $file_src2 = '<img src="'.$file[1]['path'].'/'.$file[1]['file'].'" width="'.$thumb_width.'" height="'.$thumb_height.'">';
                                    }else {
                                        $file_src2 = '<img src="'.G5_THEME_URL.'/img/noimage.png"> width="'.$thumb_width.'"';
                                    }
                                ?>
                                <a href="<?php echo $list[$idx][$i]['href'] ?><?php echo $comment_href ?>">
                                    <div class="s71_search_img_bna s71_search_img_b">
                                        <?php echo $file_src1; ?>
                                        
                                        <p class="s71_search_bna_txt fz_16 lh_16 kopubworlddotum normal">
                                           <span>BEFORE</span><span><?php echo $list[$idx][$i]['wr_1'] ?></span> 
                                        </p>
                                    </div>
                                    <div class="s71_search_img_bna s71_search_img_a">
                                        <?php echo $file_src2; ?>
                                        
                                        <p class="s71_search_bna_txt fz_16 lh_16 kopubworlddotum normal">
                                            <span>AFTER</span><span><?php echo $list[$idx][$i]['wr_2'] ?></span> 
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </li>
                    <?php } //end for ?>
                    </ul>
                    
                    <?php echo $write_pages ?>
                    
                    <div class="s71_sch_bottom">
                        <div class="text_box s71_sch_bottom_text reveal fade-up delay_200">
                            <i class="check_icon2"></i>
                            <p class="txt01 c-w fz_14 lh_16 kopubworlddotum normal pc_cont_480">
                                모든 치료사례 전후사진은 환자분의 동의하에 촬영되었습니다. <br>
                                모든사진은 동일 환자분의 전후모습을 촬영하였으며, 사진의 밝기조절 외에 임의 수정이 없음을 알려드립니다. <br>
                                모든 치료는 부작용의 우려가 있기때문에 의사와의 충분한 상담후에 치료가 진행됩니다.
                            </p>
                            <p class="txt01 c-w fz_14 lh_16 kopubworlddotum normal m_cont_480">
                                모든 치료사례 전후사진은 환자분의 동의하에 촬영되었습니다. <br>
                                모든사진은 동일 환자분의 전후모습을 촬영하였으며, 사진의 밝기조절 외에 <br>
                                임의 수정이 없음을 알려드립니다. 모든 치료는 부작용의 우려가 있기때문에 <br>
                                의사와의 충분한 상담후에 치료가 진행됩니다.
                            </p>
                        </div>
                    </div>
                </div>
                <?php } //end if ?>
            <?php } //end for ?>
            
            <?php
            $k_b = 0;
            for ($idx=$table_index; $idx<count($search_table) && ($k_a + $k_b)<$rows; $idx++) {
                $cnt = $search_table[$idx];
            ?>
                <?php if($search_table[$idx] == 'c_article') { ?>
                <div class="search_board_result search_board_result_article <?php echo $search_table[$idx]; ?>">
                    <p class="search_board_title">
                        <a href="<?php echo get_pretty_url($search_table[$idx], '', $search_query); ?>">
                            <span class="fz_20 ls_p5 lh_16 kopubworlddotum normal" style="color:#787878;"><?php echo $bo_subject[$idx] ?></span>&ensp;<span class="fz_20 ls_p5 lh_16 kopubworlddotum semibold" style="color:#000;"><?php echo $table_cnt[$cnt]; ?>건</span>
                        </a>
                    </p>
                    <ul class="article_ul">
                    <?php
                    for ($i=0; $i<count($list[$idx]) && $k_b<$rows; $i++, $k_b++) {
                        if ($list[$idx][$i]['wr_is_comment']) {
                            $comment_def = '<span class="cmt_def"><i class="fa fa-commenting-o" aria-hidden="true"></i><span class="sound_only">댓글</span></span> ';
                            $comment_href = '#c_'.$list[$idx][$i]['wr_id'];
                        } else {
                            $comment_def = '';
                            $comment_href = '';
                        }
                        
                        // 이미지파일 호출
                        $file = get_file($search_table[$idx], $list[$idx][$i]['wr_id']);
                    ?>
                        
                        <li class="article_li <?php echo $i; ?> <?php echo $k_a + $k_b; ?> <?php echo $total_count; ?> <?php echo $rows; ?>">
                            <div class="s71_search_img">
                                <?php
                                $thumb_width = 311;
                                $thumb_height = 311;

                                if(preg_match("/\.({$config['cf_image_extension']})$/i", $file[0]['file'])) {
                                    $file_src1 = '<img src="'.$file[0]['path'].'/'.$file[0]['file'].'" width="'.$thumb_width.'" height="'.$thumb_height.'">';
                                }else {
                                    $file_src1 = '<img src="'.G5_THEME_URL.'/img/noimage.png"> width="'.$thumb_width.'"';
                                }
                                ?>
                                <a href="<?php echo $list[$idx][$i]['href'] ?><?php echo $comment_href ?>">
                                    <div class="s71_search_img_article">
                                        <?php echo $file_src1; ?>
                                    </div>
                                    
                                    <div class="main_cont05_slider_hover_wrap">
                                        <div class="main_cont05_slider_hover">
                                            <div class="main_cont05_slider_hover_box"></div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="sch_tit sch_tit_arti">
                                <a href="<?php echo $list[$idx][$i]['href'] ?><?php echo $comment_href ?>" class="sch_res_title sch_res_title_article">
                                    <p class="s71_search_arti_text txt01 fz_16 ls_p2 lh_16 kopubworlddotum semibold"><?php echo $list[$idx][$i]['ca_name'] ?></p>
                                    <p class="s71_search_arti_text txt02 fz_20 lh_16 kopubworlddotum normal"><?php echo $list[$idx][$i]['subject'] ?></p>
                                </a>
                            </div>
                        </li>
                    <?php } //end for ?>
                    </ul>
                    
                    <?php echo $write_pages ?>
                    
                </div>
                <?php } //end if ?>
            <?php } //end for ?>
            <?php if ($stx && $board_count) { ?></section><?php } ?>
            
        </div>
        <!-- } 전체검색 끝 -->
        
    </article>
</main>
<!-- //main -->