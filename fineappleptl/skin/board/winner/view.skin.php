<?php
if (!defined("_GNUBOARD_")) exit; // 개별 페이지 접근 불가
include_once(G5_LIB_PATH.'/thumbnail.lib.php');

add_stylesheet('<link rel="stylesheet" href="'.$board_skin_url.'/style.css">', 0);
?>
<style>
    #bo_gall .gall_now .gall_text_href a{
        color:#383838;
    }
    
    @media (max-width:480px) {

    }
</style>
<script src="<?php echo G5_JS_URL; ?>/viewimageresize.js"></script>
<script>
    $(document).ready(function() {
        $('.header_menu_li01_1').stop().removeClass('on');
        $('.header_menu_li01_2').stop().removeClass('on');
        $('.header_menu_li01_3').stop().addClass('on');
        $('.header_menu_li01_4').stop().removeClass('on');
    });
</script>

<main id="content">
    <!--
    <article class="sub_top_cont sub1_3_top_cont sub13_top_cont_view" id="startContent">
        <div class="sub_top_cont_wrap">
            <div class="sub_top_text sub_titlebox ta_c">
                <p class="txt01 reveal fade-up delay_200 fz_80 ls_2 lh_16 sortsmillgoudy normal">
                    Projects
                </p>
                <p class="txt02 reveal fade-up delay_200 fz_16 ls_p1 lh_14 pretendard normal">
                    우리는 공감이 필요한 클라이언트를 기다리고 있습니다
                </p>
            </div>
        </div>
    </article>
    -->
    <article id="href_id" class="sub_cont_wrap s13_c01_wrap s13_c01_wrap_view">
        
            <!-- 게시물 읽기 시작 { -->
            
            <section id="bo_v_atc">
                <h2 id="bo_v_atc_title">본문</h2>
                
                <!-- 본문 내용 시작 { -->
                <div id="bo_v_con" class="ta_c kopubworldbatang normal lh_16">
                    <?php echo get_view_thumbnail($view['content']); ?>
                </div>
                <!-- } 본문 내용 끝 -->
                
                <!-- sns 공유 버튼 시작 { -->
                <div class="bo_bottom">
                    <div id="bo_v_share">
                        <?php include_once(G5_SNS_PATH."/view.sns.skin.php"); ?>
                    </div>
                </div>
                <!-- } sns 공유 버튼 끝 -->
            </section>

            <!-- 링크 버튼 시작 { -->
            <div id="bo_v_bot">
                <?php if ($prev_href || $next_href) { ?>
                <ul class="bo_v_nb">
                    <li style="<?=($prev_href ? '':'opacity:0; pointer-events:none;')?>"><a href="<?php echo $prev_href ?>#href_id" class="btn_b01">이전글</a></li>
                    <li style="<?=($next_href ? '':'opacity:0; pointer-events:none;')?>"><a href="<?php echo $next_href ?>#href_id" class="btn_b01">다음글</a></li>
                </ul>
                <?php } ?>
                
                <ul class="bo_v_com">
                    <?php if ($update_href) { ?><li style="display:none;"><a href="<?php echo $update_href ?>#href_id" class="btn_b01">수정</a></li><?php } ?>
                    <?php if ($delete_href) { ?><li style="display:none;"><a href="<?php echo $delete_href ?>#href_id" class="btn_b01" onclick="del(this.href); return false;">삭제</a></li><?php } ?>
                    <li><a href="<?php echo $list_href ?>#href_id" class="btn_b01">목록</a></li>
                    <?php if ($write_href) { ?><li style="display:none;"><a href="<?php echo $write_href ?>#href_id" class="btn_b02">글쓰기</a></li><?php } ?>
                </ul>
            </div>
            <!-- } 링크 버튼 끝 -->
            
            <style>
                #bo_sch{display:none;}
                
                @media (max-width:480px) {
                    
                }
            </style>
            
        <!-- } 게시판 읽기 끝 -->


        <script>
        <?php if ($board['bo_download_point'] < 0) { ?>
        $(function() {
            $("a.view_file_download").click(function() {
                if(!g5_is_member) {
                    alert("다운로드 권한이 없습니다.\n회원이시라면 로그인 후 이용해 보십시오.");
                    return false;
                }

                var msg = "파일을 다운로드 하시면 포인트가 차감(<?php echo number_format($board['bo_download_point']) ?>점)됩니다.\n\n포인트는 게시물당 한번만 차감되며 다음에 다시 다운로드 하셔도 중복하여 차감하지 않습니다.\n\n그래도 다운로드 하시겠습니까?";

                if(confirm(msg)) {
                    var href = $(this).attr("href")+"&js=on";
                    $(this).attr("href", href);

                    return true;
                } else {
                    return false;
                }
            });
        });
        <?php } ?>

        function board_move(href)
        {
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
                if(this.id == "good_button")
                    $tx = $("#bo_v_act_good");
                else
                    $tx = $("#bo_v_act_nogood");

                excute_good(this.href, $(this), $tx);
                return false;
            });

            // 이미지 리사이즈
            $("#bo_v_atc").viewimageresize();



        });

        function excute_good(href, $el, $tx)
        {
            $.post(
                href,
                { js: "on" },
                function(data) {
                    if(data.error) {
                        alert(data.error);
                        return false;
                    }

                    if(data.count) {
                        $el.find("strong").text(number_format(String(data.count)));
                        if($tx.attr("id").search("nogood") > -1) {
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
        </script>
        <!-- } 게시글 읽기 끝 -->

    </article>
</main>
<!-- //main -->
