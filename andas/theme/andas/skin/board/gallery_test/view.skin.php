<?php
if (!defined("_GNUBOARD_")) exit; // 개별 페이지 접근 불가
include_once(G5_LIB_PATH.'/common.lib.php');
include_once(G5_LIB_PATH.'/thumbnail.lib.php');

include_once(G5_THEME_PATH.'/head.php');

// add_stylesheet('css 구문', 출력순서); 숫자가 작을 수록 먼저 출력됨
//add_stylesheet('<link rel="stylesheet" href="'.G5_THEME_URL.'/skin/board/gallery/style.css">', 0);

// 웹사이트 타이틀
$g5['title'] = 'PORTFOLIO';

//$t_day = date("Y-m-d H:i:s", time());  // 오늘
//$start_day = $view['wr_1']." 00:00:00"; // 시작일
//$end_day = $view['wr_2']." 23:59:59"; // 종료일
?>


<link href="<?php echo G5_THEME_URL?>/skin/board/gallery/style.css" rel="stylesheet">
<link rel="stylesheet" href="<?php echo G5_THEME_URL?>/skin/board/gallery/css/style.css">
<link rel="stylesheet" href="<?php echo G5_THEME_URL?>/skin/board/gallery/css/lightgallery.css">
<link href="<?php echo G5_THEME_URL?>/css/default.css" rel="stylesheet">

<script>
    $(document).ready(function(){
        $('.main-header').removeClass('color_change');
        $('#move_top_btn').addClass('slideBG_F');
    });
</script>
<style>
    .top_menu{color:rgba(60, 55, 51, 0.5);}
    .color_change .top_menu{color:#fff;}
    .main-header.scrolled .top_menu > a{color:rgba(60, 55, 51, 0.5);}
    .color_change.scrolled .top_menu > a{color:rgba(60, 55, 51, 0.5);}
    .top_menu02{color:#3c3733; font-weight: 300;}
    .color_change .top_menu02{color:#3c3733;}
    .main-header.scrolled .top_menu02 > a{color:#3c3733;}
    .color_change.scrolled .top_menu02 > a{color:#3c3733;}
    
    .move_top_btn_sub{display:none;}
</style>

<script src="<?php echo G5_JS_URL; ?>/viewimageresize.js"></script>
<script type="text/javascript" src="<?php echo $board_skin_url ?>/js/lightgallery-all.min.js"></script>
<script type="text/javascript" src="<?php echo $board_skin_url ?>/js/newWaterfall.js"></script>
<script type="text/javascript" src="<?php echo $board_skin_url ?>/js/jquery.mousewheel.min.js"></script>
<script type="text/javascript" src="<?php echo $board_skin_url ?>/js/picturefill.min.js"></script>


        
<!-- 게시물 읽기 시작 { -->
<div class="container-1280 gallery_container">
<article id="bo_v" style="width:<?php echo $width; ?>; max-width:100%; margin-left:auto; margin-right:auto; margin-top: 3%;">
    <!--
    <h2 id="bo_v_title" class="container-1280">
        <span class="bo_v_tit nanumgothic medium ta_l fz_40 lh_16 m_80">
            <?php
                echo cut_str(get_text($view['wr_subject']), 70); // 글제목 출력
            ?>
        </span>
    </h2> 
    -->
    <section class="container-1280 flex_row sb al_fs" id="bo_v_info">
        
        <div class="first_info flex_row jc_fs center">
            <div class="sub_text">
                <div class="bo_v_tit m_22">
                    <p class="montserrat bold fz_13 lh_16 m_5" style="color:#3c3733;">Type</p>
                    <p class="nanumgothic light fz_13 lh_16" style="color:rgba(60,55,51,0.7);">
                        <?php
                            echo cut_str(get_text($view['wr_1']), 70); // Type 출력
                        ?>
                    </p>
                </div>
                <div class="bo_v_tit m_22">
                    <p class="montserrat bold fz_13 lh_16 m_5" style="color:#3c3733;">Project</p>
                    <p class="nanumgothic light fz_13 lh_16" style="color:rgba(60,55,51,0.7);">
                        <?php
                            echo cut_str(get_text($view['wr_2']), 70); // Project 출력
                        ?>
                    </p>
                </div>
                <div class="bo_v_tit m_22">
                    <p class="montserrat bold fz_13 lh_16 m_5" style="color:#3c3733;">Completion</p>
                    <p class="nanumgothic light fz_13 lh_16" style="color:rgba(60,55,51,0.7)3;">
                        <?php
                            echo cut_str(get_text($view['wr_3']), 70); // Completion 출력
                        ?>
                    </p>
                </div>
                <div class="bo_v_tit m_22">
                    <p class="montserrat bold fz_13 lh_16 m_5" style="color:#3c3733;">Location</p>
                    <p class="nanumgothic light fz_13 lh_16" style="color:rgba(60,55,51,0.7);">
                        <?php
                            echo cut_str(get_text($view['wr_4']), 70); // Location 출력
                        ?>
                    </p>
                </div>
                <div class="bo_v_tit">
                    <p class="montserrat bold fz_13 lh_16 m_5" style="color:#3c3733;">Space area</p>
                    <p class="nanumgothic light fz_13 lh_16" style="color:rgba(60,55,51,0.7);">
                        <?php
                            echo cut_str(get_text($view['wr_5']), 70); // Space area 출력
                        ?>
                    </p>
                </div>
            </div>
        </div>
        
        <div id="first_img">
            <?php echo get_file_thumbnail($view['file'][1]); ?>
        </div>
    </section>

    <section id="bo_v_atc">
        <h2 id="bo_v_atc_title">본문</h2>
        
        <!-- 본문 내용 시작 { -->
        <div class="container-1280" id="bo_v_con">
            <?php 
                if($view['content']){
                echo "<p class=\"fz_14 montserrat medium lh_14 c-gray2\">\n";
                    echo get_view_thumbnail($view['content']); 
                echo "</p>\n";
                }
            ?>
        </div>
        <!-- } 본문 내용 끝 -->
        <!--
        <div class="container-1280" id="bo_v_img">
            <?php echo get_file_thumbnail($view['file'][2]); ?>
            
            <?php echo get_file_thumbnail($view['file'][3]); ?>
            
            <?php echo get_file_thumbnail($view['file'][4]); ?>
        </div>
        -->
        
        
        <script>
            /*
            $(document).ready(function (){
                var window_width = $(window).width();
                if (window_width <= 480) {
                    var lightgallery_width_1 = Math.floor($('#lightgallery').width());

                    $('#lightgallery').NewWaterfall({
                        width: lightgallery_width_1,
                        delay: 50,
                    });

                    $('#lightgallery').lightGallery();
                } else {
                    var lightgallery_width_2 = Math.floor($('#lightgallery').width() / 2);

                    $('#lightgallery').NewWaterfall({
                        width: lightgallery_width_2,
                        delay: 50,
                    });

                    $('#lightgallery').lightGallery();
                }
            });
            */
//            if(matchMedia("screen and (max-width: 480px)").matches){/* 브라우저 사이즈가 480px 이하일때 */
//                $(document).ready(function (){
//                    $('#lightgallery').stop().removeClass('lightgallery');
//                    $('#lightgallery').stop().removeClass('flex_row');
//                    $('#lightgallery').stop().removeClass('fw');
//                    $('#lightgallery').stop().removeClass('sb');
//                    $('#lightgallery').stop().removeClass('al_fs');
//                    
//                    $('#lightgallery').lightGallery();
//                });
//            }else if(matchMedia("screen and (max-width: 640px)").matches){/* 브라우저 사이즈가 640px 이하일때 */
//                $(document).ready(function (){
//                    var list_w = $('#lightgallery').width() / 2;
//                    $('.lightgallery').NewWaterfall({
//                        width: list_w,
//                        delay: 50,
//                    });
//                    
//                    $('#lightgallery').lightGallery();
//                });
//            }else if(matchMedia("screen and (max-width: 800px)").matches){/* 브라우저 사이즈가 800px 이하일때 */
//                $(document).ready(function (){
//                    var list_w = $('#lightgallery').width() / 2;
//                    $('.lightgallery').NewWaterfall({
//                        width: list_w,
//                        delay: 50,
//                    });
//                    
//                    $('#lightgallery').lightGallery();
//                });
//            }else 
//            if(matchMedia("screen and (max-width: 960px)").matches){/* 브라우저 사이즈가 960px 이하일때 */
//                $(document).ready(function (){
//                    $('#lightgallery').stop().removeClass('lightgallery');
//                    $('#lightgallery').stop().removeClass('flex_row');
//                    $('#lightgallery').stop().removeClass('fw');
//                    $('#lightgallery').stop().removeClass('sb');
//                    $('#lightgallery').stop().removeClass('al_fs');
//                    
//                    $('#lightgallery').lightGallery();
//                });
//            }else if(matchMedia("screen and (max-width: 1024px)").matches){/* 브라우저 사이즈가 1024px 이하일때 */
//                $(document).ready(function (){
//                    var list_w = $('#lightgallery').width() / 2;
//                    $('.lightgallery').NewWaterfall({
//                        width: list_w,
//                        delay: 50,
//                    });
//                    
//                    $('#lightgallery').lightGallery();
//                });
//            }else if(matchMedia("screen and (max-width: 1280px)").matches){/* 브라우저 사이즈가 1280px 이하일때 */
//                $(document).ready(function (){
//                    var list_w = $('#lightgallery').width() / 2;
//                    $('.lightgallery').NewWaterfall({
//                        width: list_w,
//                        delay: 50,
//                    });
//                    
//                    $('#lightgallery').lightGallery();
//                });
//            }else if(matchMedia("screen and (min-width: 1281px)").matches){/* 브라우저 사이즈가 1280px 이상일때 */
//                $(document).ready(function (){
//                    var list_w = $('#lightgallery').width() / 2;
//                    $('.lightgallery').NewWaterfall({
//                        width: list_w,
//                        delay: 50,
//                    });
//
//                    $('#lightgallery').lightGallery();
//                });
//            }
            if(matchMedia("screen and (max-width: 1440px)").matches){/* 브라우저 사이즈가 1440px 이하일때 */
                $(document).ready(function (){
                    $('#lightgallery').stop().removeClass('lightgallery');
                    $('#lightgallery').stop().removeClass('flex_row');
                    $('#lightgallery').stop().removeClass('fw');
                    $('#lightgallery').stop().removeClass('sb');
                    $('#lightgallery').stop().removeClass('al_fs');
                    
                    $('#lightgallery').lightGallery();
                });
            }else if(matchMedia("screen and (min-width: 1441px)").matches){/* 브라우저 사이즈가 1441px 이상일때 */
                $(document).ready(function (){
                    var list_w = $('#lightgallery').width() / 2;
                    $('.lightgallery').NewWaterfall({
                        width: list_w,
                        delay: 50,
                    });

                    $('#lightgallery').lightGallery();
                });
            }
            
            
            window.onresize = function(){
                document.location.reload();
            };
            
        </script>
        <div id="gallery_img_box">
            <ul id="lightgallery" class="lightgallery flex_row fw sb al_fs">
                <?php 
//                    $sql = "select * from g5_board_file where bo_table = 'gallery_test' order by bf_no asc";
//                    $qry = sql_query($sql);
//                    for($i=0;$row=sql_fetch_array($qry);$i++) {
//                        $thumb_filename[$i] = $row;
//                        
//                        
//                    }
//                    for($i=0; $i<count($thumb_filename); $i++) {
//                        $thumb_filename2 = preg_replace("/\.[^\.]+$/i", "", $thumb_filename[$i]['bf_file']);
//                        
//                        
//                        
//                    }
//                    
                    for ($i=2; $i<count($view['file'])-1; $i++) {
                        $thumb_filename = preg_replace("/\.[^\.]+$/i", "", $view['file'][$i]['file']);
                        $thumb_url = G5_URL."/data/file/".$bo_table."/thumb-".$thumb_filename."_1690x1127.jpg";
                        $thumb_url2 = G5_URL."/data/file/".$bo_table."/thumb-".$thumb_filename."_1690x2535.jpg";
                        
                        echo "<li data-responsive=\"$thumb_url2\" data-src=\"$thumb_url2\">\n";
                            echo "<div>\n";
                                echo get_file_thumbnail($view['file'][$i]);
                            echo "</div>\n";
                        echo "</li>\n";
                        
                    } 
                ?>
            </ul>
        </div>


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

    <?php if ($prev_href || $next_href) { ?>
    <ul class="container-1280 bo_v_nb">
        <?php if ($prev_href) { ?>
        <li class="btn_prv">
            <dd class="elc_01"><span class="nb_tit fz_14 normal"><i class="fa fa-chevron-up" aria-hidden="true"></i> 다음글</span></dd>
            <dd class="elc_02 fz_14 notosans normal lh_16"><a href="<?php echo $prev_href ?>"><?php echo $prev_wr_subject;?></a></dd>
            <!--<dd class="elc_03"><span class="nb_date"><?php echo str_replace('-', '.', substr($prev_wr_date, '2', '8')); ?></span></dd>-->
            <div style="clear:both"></div>
        </li>
        <?php } ?>

        <?php if ($next_href) { ?>
        <li class="btn_next">
            <dd class="elc_01"><span class="nb_tit fz_14 normal"><i class="fa fa-chevron-down" aria-hidden="true"></i> 이전글</span></dd>
            <dd class="elc_02 fz_14 notosans normal lh_16"><a href="<?php echo $next_href ?>"><?php echo $next_wr_subject;?></a></dd>
            <!--<dd class="elc_03"><span class="nb_date"><?php echo str_replace('-', '.', substr($next_wr_date, '2', '8')); ?></span></dd>-->
            <div style="clear:both"></div>
        </li>
        <?php } ?>
    </ul>
    <?php } ?>
    
    <?php if($is_admin) { ?>
    <form name="update_date" action="<?php echo $board_skin_url; ?>/update_num.php" method="post" style="padding:0; margin:0;">
    <input type="hidden" name="bo_table" value="<?php echo $bo_table; ?>">
    <input type="hidden" name="page" value="<?php echo $page; ?>">
    <input type="hidden" name="wr_id" value="<?php echo $wr_id; ?>">
    <div class="tbl_frm01 tbl_wrap">
        <table>
            <tbody>
                <tr>
                    <th style="width:100px; vertical-align:middle;"><p class="fz_14 normal lh_16 ls_0 notosans">글 순서변경</p></th>
                    <td><p class="fz_14 normal lh_16 ls_0 notosans">목록에서 이동하고자 하는 위치의 번호 <input type="text" name="insert_num" style="width:30px;"> 게시글의 뒤로 <input type="submit" value="이동" class="btn_list">합니다.</p></td>
                </tr>
            </tbody>
        </table>
    </div>
    </form>
    <?php } ?>
    
    <!-- 링크 버튼 시작 { -->
    <div class="container-1280" id="bo_v_top">
        <?php
        ob_start();
         ?>
         
        <ul class="bo_v_com">
            
            <?php if ($admin_href) { ?><li><a href="<?php echo $admin_href ?>"><p class="list_btn list_btn_admin nanumgothic medium ta_c ls_p2">관리자</p></a></li><?php } ?>
			<?php if ($update_href) { ?><li><a href="<?php echo $update_href ?>"><p class="list_btn nanumgothic medium ta_c ls_p2">수정</p></a></li><?php } ?>
            <?php if ($delete_href) { ?><li><a href="<?php echo $delete_href ?>" onclick="del(this.href); return false;"><p class="list_btn nanumgothic medium ta_c ls_p2">삭제</p></a></li><?php } ?>
			
			<?php if ($write_href) { ?><li><a href="<?php echo $write_href ?>"><p class="list_btn nanumgothic medium ta_c ls_p2">글쓰기</p></a></li><?php } ?>
			
			<li><a href="<?php echo $list_href ?>"><p class="list_btn nanumgothic medium ta_c ls_p2">LIST</p></a></li>
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
include_once(G5_THEME_PATH.'/tail.php');
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
    
    /*$(function() {
        $("#bo_v_con img, #bo_v_img img").each(function() {
            $(this).attr("title", "<?php echo $view[wr_subject]; ?>");
            $(this).attr("alt", "<?php echo $view[wr_subject]; ?>");
        });
    });*/
</script>
<!-- } 게시글 읽기 끝 -->


