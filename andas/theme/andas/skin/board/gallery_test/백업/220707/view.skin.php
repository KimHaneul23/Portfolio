<?php
if (!defined("_GNUBOARD_")) exit; // 개별 페이지 접근 불가
include_once(G5_LIB_PATH.'/thumbnail.lib.php');

include_once(G5_PATH.'/head.php');

// add_stylesheet('css 구문', 출력순서); 숫자가 작을 수록 먼저 출력됨
//add_stylesheet('<link rel="stylesheet" href="'.G5_THEME_URL.'/skin/board/gallery/style.css">', 0);

$t_day = date("Y-m-d H:i:s", time());  // 오늘
$start_day = $view['wr_1']." 00:00:00"; // 시작일
$end_day = $view['wr_2']." 23:59:59"; // 종료일
?>


<link href="<?php echo G5_THEME_URL?>/skin/board/gallery/style.css" rel="stylesheet">
<link rel="stylesheet" href="<?php echo G5_THEME_URL?>/skin/board/gallery/css/style.css">
<link rel="stylesheet" href="<?php echo G5_THEME_URL?>/skin/board/gallery/css/lightgallery.css">
<link href="<?php echo G5_THEME_URL?>/css/default.css" rel="stylesheet">

<script>
    $(window).on('load', function() {
        $('.btn_v_01 a').css("background-color", "<?php echo $board['bo_1']; ?>");
        $('.bo_vc_w .btn_submit').css("background-color", "<?php echo $board['bo_1']; ?>");
        
        //진행중 아이콘 백그라운드 색상 처리
    $('.status_b1').css("background-color", "<?php echo $board['bo_1']; ?>");

    });
</script>
<script>
    $(document).ready(function(){
        $('.main-header').removeClass('color_change');
    });
</script>

<script src="<?php echo G5_JS_URL; ?>/viewimageresize.js"></script>
<script type="text/javascript" src="<?php echo $board_skin_url ?>/js/lightgallery-all.min.js"></script>
<script type="text/javascript" src="<?php echo $board_skin_url ?>/js/newWaterfall.js"></script>
<script type="text/javascript" src="<?php echo $board_skin_url ?>/js/jquery.mousewheel.min.js"></script>
<script type="text/javascript" src="<?php echo $board_skin_url ?>/js/picturefill.min.js"></script>


        
<!-- 게시물 읽기 시작 { -->
<div class="gallery_container">
<article id="bo_v" style="width:<?php echo $width; ?>; max-width:100%; margin-left:auto; margin-right:auto;">
    <!-- <header style="text-align: center;"> -->

        <!-- <h5 style="font-size: 16px">이벤트기간 : <?php echo $view['wr_1'] ?> ~ <?php echo $view['wr_2'] ?></h5> -->
        <h2 id="bo_v_title" class="container-1280">
            <span class="bo_v_tit medium ta_c fz_20 lh_14 m_80">
                <?php
                    echo cut_str(get_text($view['wr_subject']), 70); // 글제목 출력
                ?>
            </span>
        </h2> 

        <!-- <h6> <?php echo $view['wr_3'] ?></h6> -->

    <!-- </header> -->

    <section class="container-1280" id="bo_v_info">
        <h2>페이지 정보</h2>
        <div class="flex_row sb al_fs">
            <div class="sub_text column_third">
                <div class="bo_v_tit m_30">
                    <p class="medium c-b fz_16 lh_16 m_5">Status</p>
                    <p class="normal fz_14 lh_14 c-gray">
                        <?php
                            echo cut_str(get_text($view['wr_1']), 70); // Status 출력
                        ?>
                    </p>
                </div>
                <div class="bo_v_tit m_30">
                    <p class="medium c-b fz_16 lh_16 m_5">Project</p>
                    <p class="normal fz_14 lh_14 c-gray">
                        <?php
                            echo cut_str(get_text($view['wr_2']), 70); // Project 출력
                        ?>
                    </p>
                </div>
                <div class="bo_v_tit m_30">
                    <p class="medium c-b fz_16 lh_16 m_5">Completion</p>
                    <p class="normal fz_14 lh_14 c-gray">
                        <?php
                            echo cut_str(get_text($view['wr_3']), 70); // Completion 출력
                        ?>
                    </p>
                </div>
                <div class="bo_v_tit m_30">
                    <p class="medium c-b fz_16 lh_16 m_5">Location</p>
                    <p class="normal fz_14 lh_14 c-gray">
                        <?php
                            echo cut_str(get_text($view['wr_4']), 70); // Location 출력
                        ?>
                    </p>
                </div>
                <div class="bo_v_tit">
                    <p class="medium c-b fz_16 lh_16 m_5">Space area</p>
                    <p class="normal fz_14 lh_14 c-gray">
                        <?php
                            echo cut_str(get_text($view['wr_5']), 70); // Space area 출력
                        ?>
                    </p>
                </div>
            </div>
            
            <div id="first_img" style="width:100%; max-width:960px;">
                <?php echo get_file_thumbnail($view['file'][1]); ?>
            </div>
        </div>
        
        <!-- <div class="profile_info">
            
        	<div class="pf_img"><?php echo get_member_profile_img($view['mb_id']) ?></div>
           
            <div class="profile_info_ct">
                <span class="sound_only">작성자</span> <strong><?php echo $view['name'] ?></strong>
                <?php if($view['ca_name']) { ?><strong><?php echo $view['ca_name']; ?></strong><?php } ?>
                <span class="sound_only">댓글</span><strong><a href="#bo_vc"><i class="fa fa-commenting-o" aria-hidden="true"></i> <?php echo number_format($view['wr_comment']) ?>건</a></strong>
                <span class="sound_only">조회</span><strong><i class="fa fa-eye" aria-hidden="true"></i> <?php echo number_format($view['wr_hit']) ?>회</strong>
                
                <strong class="if_date"><span class="sound_only">작성일</span><i class="fa fa-clock-o" aria-hidden="true"></i> <?php echo date("y-m-d H:i", strtotime($view['wr_datetime'])) ?></strong>
               
            </div>
        </div> -->
    </section>

    <section id="bo_v_atc">
        <h2 id="bo_v_atc_title">본문</h2>
        
        <!-- 본문 내용 시작 { -->
        <div class="container-1280" id="bo_v_con">
            <p class="fz_17 normal lh_14 c-gray2">
                <?php echo get_view_thumbnail($view['content']); ?>
            </p>
        </div>
        <?php //echo $view['rich_content']; // {이미지:0} 과 같은 코드를 사용할 경우 ?>
        <!-- } 본문 내용 끝 -->
        
        <?php
            // 파일 출력
            /*$v_img_count = count($view['file']);
            if($v_img_count) {
                echo "<div id=\"bo_v_img\">\n";

                for ($i=2; $i<=count($view['file']); $i++) {
                    echo get_file_thumbnail($view['file'][$i]);
                }

                echo "</div>\n";
            }*/
        ?>
        <div class="container-1280" id="bo_v_img">
            <?php echo get_file_thumbnail($view['file'][2]); ?>
            <div class="m_20"></div>
            <?php echo get_file_thumbnail($view['file'][3]); ?>
            <div class="m_20"></div>
            <?php echo get_file_thumbnail($view['file'][4]); ?>
        </div>
        
        <script>
            $(document).ready(function (){
                $('#lightgallery').NewWaterfall({
                    width: 650,
                    delay: 50,
                });
                
                $('#lightgallery').lightGallery();
            });
            
            /*lightGallery(document.getElementById('lightgallery'), {
                thumbnail: false,
                animateThumb: false,
                swipeThreshold : 20,
                showThumbByDefault: false,
                mode: 'lg-fade',
                speed: 200,
            }); */
        </script>
        <div id="gallery_img_box">
            <ul id="lightgallery" class="flex_row fw sb al_fs">
                <?php 
                    for ($i=1; $i<count($view['file'])-1; $i++) {
                        $thumb_url = G5_URL."/data/file/".$bo_table."/".$view['file'][$i]['file'];
                        
                        echo "<li data-responsive=\"$thumb_url\" data-src=\"$thumb_url\">\n";
                            echo "<div>\n";
                                echo "<a href=\"\">\n";
                                    echo "<img class=\"img-responsive\" src=\"$thumb_url\">\n";
                                echo "</a>\n";
                            echo "</div>\n";
                        echo "</li>\n";
                        
                    } 
                ?>
            </ul>
        </div>

        <!--<div id="bo_v_share">
            <?php /*include_once(G5_SNS_PATH."/view.sns.skin.php");*/ ?>
            <?php if ($scrap_href) { ?><a href="<?php echo $scrap_href;  ?>" target="_blank" class="btn btn_b03" onclick="win_scrap(this.href); return false;"><i class="fa fa-bookmark" aria-hidden="true"></i><span class="pc_view"> 스크랩</span></a><?php } ?>

        </div>-->



        <!--
        <div class="btn_bo_user_btm_v">


            <li class="btn_v_01">
                <a href="<?php echo $list_href ?>" class="btn_b01 sub_btns btn" title="목록">
                    <i class="fa fa-bars mo_view" aria-hidden="true" style="line-height:35px;"></i>
                    <span class="pc_view">목록</span>
                </a>
                
                <?php if ($reply_href) { ?>
                <a href="<?php echo $reply_href ?>" class="btn_b01 sub_btns btn" title="답변">
                    <i class="fa fa-reply mo_view" aria-hidden="true" style="line-height:35px;"></i>
                    <span class="pc_view">답변</span>
                </a>
                <?php } ?>
                
                
                <?php if ($write_href) { ?>
                <a href="<?php echo $write_href ?>" class="btn_b01 sub_btns btn" title="글쓰기">
                    <i class="fa fa-pencil mo_view" aria-hidden="true" style="line-height:35px;"></i>
                    <span class="pc_view">글쓰기</span>
                </a>
                <?php } ?>
            </li>

        </div>
        -->


        <?php/* if ($is_signature) { ?><p><?php echo $signature ?></p><?php } */?>


        <!--  추천 비추천 시작 { -->
        <?php /*if ( $good_href || $nogood_href) { ?>
        <div id="bo_v_act">
            <?php if ($good_href) { ?>
            <span class="bo_v_act_gng">
                <a href="<?php echo $good_href.'&amp;'.$qstr ?>" id="good_button" class="bo_v_good"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i><span class="sound_only">추천</span><strong><?php echo number_format($view['wr_good']) ?></strong></a>
                <b id="bo_v_act_good"></b>
            </span>
            <?php } ?>
            <?php if ($nogood_href) { ?>
            <span class="bo_v_act_gng">
                <a href="<?php echo $nogood_href.'&amp;'.$qstr ?>" id="nogood_button" class="bo_v_nogood"><i class="fa fa-thumbs-o-down" aria-hidden="true"></i><span class="sound_only">비추천</span><strong><?php echo number_format($view['wr_nogood']) ?></strong></a>
                <b id="bo_v_act_nogood"></b>
            </span>
            <?php } ?>
        </div>
        <?php } else {
            if($board['bo_use_good'] || $board['bo_use_nogood']) {
        ?>
        <div id="bo_v_act">
            <?php if($board['bo_use_good']) { ?><span class="bo_v_good"><i class="fa fa-thumbs-o-up" aria-hidden="true"></i><span class="sound_only">추천</span><strong><?php echo number_format($view['wr_good']) ?></strong></span><?php } ?>
            <?php if($board['bo_use_nogood']) { ?><span class="bo_v_nogood"><i class="fa fa-thumbs-o-down" aria-hidden="true"></i><span class="sound_only">비추천</span><strong><?php echo number_format($view['wr_nogood']) ?></strong></span><?php } ?>
        </div>
        <?php
            }
        }
        */?>
        <!-- }  추천 비추천 끝 -->
    </section>

    <br>

    <?php
    $cnt = 0;
    if ($view['file']['count']) {
        for ($i=0; $i<count($view['file']); $i++) {
            if (isset($view['file'][$i]['source']) && $view['file'][$i]['source'] && !$view['file'][$i]['view'])
                $cnt++;
        }
    }
	?>

    <?php if($cnt) { ?>
    <!-- 첨부파일 시작 { -->
    <section class="container-1280" id="bo_v_file">
        <h2>첨부파일</h2>
        <ul>
            <?php
        // 가변 파일
        for ($i=0; $i<count($view['file']); $i++) {
            if (isset($view['file'][$i]['source']) && $view['file'][$i]['source'] && !$view['file'][$i]['view']) {
         ?>
            <li>
                <i class="fa fa-folder-open" aria-hidden="true"></i>
                <a href="<?php echo $view['file'][$i]['href'];  ?>" class="view_file_download" download>
                    <strong><?php echo $view['file'][$i]['source'] ?></strong> <?php echo $view['file'][$i]['content'] ?> (<?php echo $view['file'][$i]['size'] ?>)
                </a>
                <br>
                <span class="bo_v_file_cnt"><?php echo $view['file'][$i]['download'] ?>회 다운로드 | DATE : <?php echo $view['file'][$i]['datetime'] ?></span>
            </li>
            <?php
            }
        }
         ?>
        </ul>
    </section>
    <!-- } 첨부파일 끝 -->
    <?php } ?>

    <?php if(isset($view['link'][1]) && $view['link'][1]) { ?>
    <!-- 관련링크 시작 { -->
    <section class="container-1280" id="bo_v_link">
        <h2>관련링크</h2>
        <ul>
            <?php
        // 링크
        $cnt = 0;
        for ($i=1; $i<=count($view['link']); $i++) {
            if ($view['link'][$i]) {
                $cnt++;
                $link = cut_str($view['link'][$i], 70);
            ?>
            <li>
                <i class="fa fa-link" aria-hidden="true"></i>
                <a href="<?php echo $view['link_href'][$i] ?>" target="_blank">
                    <strong><?php echo $link ?></strong>
                </a>
                <br>
                <span class="bo_v_link_cnt"><?php echo $view['link_hit'][$i] ?>회 연결</span>
            </li>
            <?php
            }
        }
        ?>
        </ul>
    </section>
    <!-- } 관련링크 끝 -->
    <?php } ?>

    <?php if ($prev_href || $next_href) { ?>
    <ul class="container-1280 bo_v_nb">
        <?php if ($prev_href) { ?>
        <li class="btn_prv">
            <dd class="elc_01"><span class="nb_tit"><i class="fa fa-chevron-up" aria-hidden="true"></i> 다음글</span></dd>
            <dd class="elc_02"><a href="<?php echo $prev_href ?>"><?php echo $prev_wr_subject;?></a></dd>
            <!--<dd class="elc_03"><span class="nb_date"><?php echo str_replace('-', '.', substr($prev_wr_date, '2', '8')); ?></span></dd>-->
            <div style="clear:both"></div>
        </li>
        <?php } ?>

        <?php if ($next_href) { ?>
        <li class="btn_next">
            <dd class="elc_01"><span class="nb_tit"><i class="fa fa-chevron-down" aria-hidden="true"></i> 이전글</span></dd>
            <dd class="elc_02"><a href="<?php echo $next_href ?>"><?php echo $next_wr_subject;?></a></dd>
            <!--<dd class="elc_03"><span class="nb_date"><?php echo str_replace('-', '.', substr($next_wr_date, '2', '8')); ?></span></dd>-->
            <div style="clear:both"></div>
        </li>
        <?php } ?>
    </ul>
    <?php } ?>
    
    <!-- 링크 버튼 시작 { -->
    <div class="container-1280" id="bo_v_top">
        <?php
        ob_start();
         ?>
         
        <ul class="bo_v_com">
            
			<!--
            <?php if ($copy_href) { ?><li><a href="<?php echo $copy_href ?>" class="btn_admin" onclick="board_move(this.href); return false;">복사</a></li><?php } ?>
            <?php if ($move_href) { ?><li><a href="<?php echo $move_href ?>" class="btn_admin" onclick="board_move(this.href); return false;">이동</a></li><?php } ?>
			-->
            <?php if ($search_href) { ?><li><a href="<?php echo $search_href ?>" class="btn_b01">검색</a></li><?php } ?>
            <?php if ($admin_href) { ?><li><a href="<?php echo $admin_href ?>"><img src="<?php echo G5_URL ?>/img/list_admin.png" alt="관리자"/></a></li><?php } ?>
            <!--<?php if ($reply_href) { ?><li><a href="<?php echo $reply_href ?>"><img src="<?php echo G5_URL ?>/img/list_reply.png" alt="답변"/></a></li><?php } ?>-->
			<?php if ($update_href) { ?><li><a href="<?php echo $update_href ?>"><img src="<?php echo G5_URL ?>/img/list_modify.png" alt="수정"/></a></li><?php } ?>
            <?php if ($delete_href) { ?><li><a href="<?php echo $delete_href ?>" onclick="del(this.href); return false;"><img src="<?php echo G5_URL ?>/img/list_delete.png" alt="삭제"/></a></li><?php } ?>
			
			<?php if ($write_href) { ?><li><a href="<?php echo $write_href ?>"><img src="<?php echo G5_URL ?>/img/list_write.png" alt="글쓰기"/></a></li><?php } ?>
			
			<li><a href="<?php echo $list_href ?>"><img src="<?php echo G5_URL ?>/img/list_list.png" alt="목록"/></a></li>
        </ul>
        <?php
        $link_buttons = ob_get_contents();
        ob_end_flush();
         ?>
    </div>
    <!-- } 링크 버튼 끝 -->

    <?php
    // 코멘트 입출력
    //include_once(G5_BBS_PATH.'/view_comment.php');
	?>
</article>
</div>
<!-- } 게시판 읽기 끝 -->

<?php
include_once(G5_PATH.'/tail.php');
?>

<script>
    <?php if ($board['bo_download_point'] < 0) { ?>
    $(function() {
        $("a.view_file_download").click(function() {
            if (!g5_is_member) {
                alert("다운로드 권한이 없습니다.\n회원이시라면 로그인 후 이용해 보십시오.");
                return false;
            }

            var msg = "파일을 다운로드 하시면 포인트가 차감(<?php echo number_format($board['bo_download_point']) ?>점)됩니다.\n\n포인트는 게시물당 한번만 차감되며 다음에 다시 다운로드 하셔도 중복하여 차감하지 않습니다.\n\n그래도 다운로드 하시겠습니까?";

            if (confirm(msg)) {
                var href = $(this).attr("href") + "&js=on";
                $(this).attr("href", href);

                return true;
            } else {
                return false;
            }
        });
    });
    <?php } ?>

    function board_move(href) {
        window.open(href, "boardmove", "left=50, top=50, width=500, height=550, scrollbars=1");
    }
</script>

<script>
    $(function() {
        $("a.view_image").click(function() {
            window.open(this.href, "large_image", "location=yes,links=no,toolbar=no,top=10,left=10,width=10,height=10,resizable=yes,scrollbars=no,status=no");
            return false;
        });

        // 추천, 비추천
        $("#good_button, #nogood_button").click(function() {
            var $tx;
            if (this.id == "good_button")
                $tx = $("#bo_v_act_good");
            else
                $tx = $("#bo_v_act_nogood");

            excute_good(this.href, $(this), $tx);
            return false;
        });

        // 이미지 리사이즈
        $("#bo_v_atc").viewimageresize();
    });

    function excute_good(href, $el, $tx) {
        $.post(
            href, {
                js: "on"
            },
            function(data) {
                if (data.error) {
                    alert(data.error);
                    return false;
                }

                if (data.count) {
                    $el.find("strong").text(number_format(String(data.count)));
                    if ($tx.attr("id").search("nogood") > -1) {
                        $tx.text("이 글을 비추천하셨습니다.");
                        $tx.fadeIn(200).delay(2500).fadeOut(200);
                    } else {
                        $tx.text("이 글을 추천하셨습니다.");
                        $tx.fadeIn(200).delay(2500).fadeOut(200);
                    }
                }
            }, "json"
        );
    }
    
    $(function() {
        $("#bo_v_con img, #bo_v_img img").each(function() {
            $(this).attr("title", "<?php echo $view[wr_subject]; ?>");
            $(this).attr("alt", "<?php echo $view[wr_subject]; ?>");
        });
    });
</script>
<!-- } 게시글 읽기 끝 -->


