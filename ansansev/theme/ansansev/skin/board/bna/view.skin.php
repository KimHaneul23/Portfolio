<?php
if (!defined("_GNUBOARD_")) exit; // 개별 페이지 접근 불가
include_once(G5_LIB_PATH.'/thumbnail.lib.php');

// add_stylesheet('css 구문', 출력순서); 숫자가 작을 수록 먼저 출력됨
add_stylesheet('<link rel="stylesheet" href="'.$board_skin_url.'/style.css">', 0);
?>

<script src="<?php echo G5_JS_URL; ?>/viewimageresize.js"></script>
<!--
<div id="bo_title">
	<?php echo $board['bo_subject'] ?>
</div>
-->


<div class="bo_fx"></div>

<script>
$(window).ready(function(){

	$('#beforeIMG').stop().css('opacity','0');
	$('#beforeIMG').stop().delay(200).animate({'opacity':'1'},1000);
	$('#afterIMG').stop().css('opacity','0');
	$('#afterIMG').stop().delay(700).animate({'opacity':'1'},1000);

	// $('#allow').stop().css('opacity','0');
	// $('#allow').stop().css('left','0px');
	// $('#allow').stop().delay(1000).animate({'left':'500','opacity':'1'},1200, 'easeOutExpo' ,function(){
	// 	$('#allow').stop().animate({'left':'1000','opacity':'0'},1200, 'easeInExpo');	
	// });

	// $('#allow2').stop().css('opacity','0');
	// $('#allow2').stop().css('top','-30px');
	// $('#allow2').stop().animate({'top':'130','opacity':'1'},1200, 'easeOutExpo' ,function(){
	// 	$('#allow2').stop().animate({'top':'240','opacity':'0'},1200, 'easeInExpo');	
	// });

});
</script>

<article id="bo_v" style="width:60%; margin:160px auto 0; padding:100px 0;">
<!-- <div style="width:700px; position:relative; margin:0 auto;">
<div style="width:150px; height:150px; top:200px; position:absolute; z-index:10; background:url('<?php echo $board_skin_url?>/img/bna_arrow.png') 50% 50%/contain no-repeat; <?php if($view['wr_3'] == 'mode_2') { echo 'display:none'; } ?>" id="allow"></div>

<div style="width:200px; height:200px; top:140px; left:500px; position:absolute; z-index:10; background:url('<?php echo $board_skin_url?>/img/bna_arrow2.png'); <?php if($view['wr_3'] == 'mode_1') { echo 'display:none'; } ?>" id="allow2"></div>
</div> -->

	<div id="bo_v_wrap" style="width:700px; overflow: hidden; margin-top: 80px;">

		<?php
		// 파일 출력
		$v_img_count = count($view['file']);
		if($v_img_count) {
		?>
		<!---------------일반성형모드-------------------------->
		<div id="bo_v_be_af" style="<?php if($view['wr_3'] == 'mode_2') { echo 'display:none'; } ?> ">
			<div id="bo_v_img">									
				<?php 
				$v_img_1 =  $view['file'][0]['path']."/".$view['file'][0]['file'];
				$v_img_2 =  $view['file'][3]['path']."/".$view['file'][3]['file'];
				$v_img_3 =  $view['file'][1]['path']."/".$view['file'][1]['file'];
				$v_img_4 =  $view['file'][4]['path']."/".$view['file'][4]['file'];
				$v_img_5 =  $view['file'][2]['path']."/".$view['file'][2]['file'];
				$v_img_6 =  $view['file'][5]['path']."/".$view['file'][5]['file'];
				?>
				<img src="<?=$v_img_1?>" alt="<?=$view['file'][0]['file']?>" id="beforeIMG" style="opacity:0;"><img src="<?=$v_img_2?>" alt="수술 후" id="afterIMG"  style="opacity:0;">				
			</div>
		</div>

		<!---------------눈성형모드-------------------------->
		<div id="bo_v_be_af" style="<?php if($view['wr_3'] == 'mode_1') { echo 'display:none'; } ?>">
			<div id="bo_v_img2" style="width:700px;overflow:hidden;zoom:1;position:relative;margin:0 auto; border:1px solid black; text-align:center;">										
				<?php 
				$v_img_7 =  $view['file'][6]['path']."/".$view['file'][6]['file'];
				$v_img_8 =  $view['file'][7]['path']."/".$view['file'][7]['file'];
				?>
				<img src="<?=$v_img_7?>" alt="수술 전" id="beforeIMG" style="opacity:1;"><br/>
				<img src="<?=$v_img_8?>" alt="수술 후" id="afterIMG"  style="opacity:1;">				
			</div>
		</div>



		<?php } ?>
		<!-- 본문 내용 시작 { -->
			<div style="display: flex;">
				<div style="position:relative; width:350px; text-align:center; background-color: rgba(0, 0, 0, 0.8); color:white;  padding: 17px 0;">
					Before
				</div>
				<div style="position:relative; width:350px; border-left:1px solid #4c4c4c; box-sizing:border-box; text-align:center; background-color: rgba(0, 0, 0, 0.8); color:white;  padding: 17px 0;">
					After [ <?php echo $view['wr_5']?> ]
				</div>
			</div>
			<!-- <div style="position:relative; width:350px; text-align:center; background-color: rgba(0, 0, 0, 0.8); color:white;  padding: 17px 0; float:left;">
				Before
			</div>
			<div style="position:relative; width:350px; border-left:1px solid #4c4c4c; box-sizing:border-box; text-align:center; background-color: rgba(0, 0, 0, 0.8); color:white;  padding: 17px 0; float:left;">
				After [ <?php echo $view['wr_5']?> ]
			</div>
			<div style="clear:both;"></div> -->
			<div style="width:700px; margin:0 auto; border-top:1px solid #4c4c4c;">
				<div id="bo_v_con">
					[ <?php echo cut_str(get_text($view['wr_subject']), 70); // 글제목 출력 ?> ]
				</div>
			</div>
				<div id="bo_v_href" style="<?php if($view['wr_3'] == 'mode_2') { echo 'display:none'; } ?>">
					<div style="<?php if($view['wr_4'] == 'degree_3') { echo 'display:block'; }else{echo 'display:none';} ?>">
						<a href="javascript:changIMAGE('<?=$v_img_1?>','<?=$v_img_2?>', 'bottom');"><div id="bo_v_href_bottom" class="bo_v_href_bottom_on" style="float:left;">정면</div></a>
						<a href="javascript:changIMAGE('<?=$v_img_3?>','<?=$v_img_4?>','right');"><div id="bo_v_href_right" class="bo_v_href_right_off" style="float:left;">45도</div></a>
						<a href="javascript:changIMAGE('<?=$v_img_5?>','<?=$v_img_6?>', 'left');"><div id="bo_v_href_left" class="bo_v_href_left_off" style="float:left;">측면</div></a>
					</div>

					<div style="padding-left:30px;<?php if($view['wr_4'] == 'degree_2'){ echo 'display:block'; }else{echo 'display:none';} ?>">
						<a href="javascript:changIMAGE('<?=$v_img_1?>','<?=$v_img_2?>', 'bottom');"><div id="bo_v_href_bottom" class="bo_v_href_bottom_on" style="float:left;">정면</div></a>
						<div style="width:20px; float:left;">&nbsp;</div>
						<a href="javascript:changIMAGE('<?=$v_img_5?>','<?=$v_img_6?>', 'left');"><div id="bo_v_href_left" class="bo_v_href_left_off" style="float:left;">측면</div></a>
					</div>
				</div>
			<div style="clear:both;"></div>

	</div>
    <div id="bo_v_top">
        <?php
        ob_start();
         ?>
        <ul class="bo_v_com">
            <!--<?php if ($search_href) { ?><li><a href="<?php echo $search_href ?>" class="btn_b01">검색</a></li><?php } ?>-->
            <?php if ($admin_href) { ?><li><a href="<?php echo $admin_href ?>"><img src="<?php echo G5_URL ?>/img/list_admin.png" alt="관리자"/></a></li><?php } ?>
			<?php if ($update_href) { ?><li><a href="<?php echo $update_href ?>"><img src="<?php echo G5_URL ?>/img/list_modify.png" alt="수정"/></a></li><?php } ?>
            <?php if ($delete_href) { ?><li><a href="<?php echo $delete_href ?>" onclick="del(this.href); return false;"><img src="<?php echo G5_URL ?>/img/list_delete.png" alt="삭제"/></a></li><?php } ?>
			<li><a href="<?php echo $list_href.$qstr ?>"><img src="<?php echo G5_URL ?>/img/list_list.png" alt="목록"/></a></li>
        </ul>
        <?php
        $link_buttons = ob_get_contents();
        ob_end_flush();
         ?>
    </div>
</article>

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

function changIMAGE(img1, img2, href){
	$('#beforeIMG').attr("src", img1);
	$('#afterIMG').attr("src", img2);

	if(href == 'bottom'){
			$('#bo_v_href_bottom').attr('class', 'bo_v_href_bottom_on');
			$('#bo_v_href_left').attr('class', 'bo_v_href_left_off');
			$('#bo_v_href_right').attr('class', 'bo_v_href_right_off');
	} else if(href == 'left'){
		if($('#bo_v_href_left').hasClass('bo_v_href_left_off')){
			$('#bo_v_href_bottom').attr('class', 'bo_v_href_bottom_off');
			$('#bo_v_href_left').attr('class', 'bo_v_href_left_on');
			$('#bo_v_href_right').attr('class', 'bo_v_href_right_off');
		}
	} else if(href == 'right'){
		if($('#bo_v_href_right').hasClass('bo_v_href_right_off')){
			$('#bo_v_href_bottom').attr('class', 'bo_v_href_bottom_off');
			$('#bo_v_href_left').attr('class', 'bo_v_href_left_off');
			$('#bo_v_href_right').attr('class', 'bo_v_href_right_on');
		}
	}

	$('#beforeIMG').stop().css('opacity','0');
	$('#beforeIMG').stop().animate({'opacity':'1'},700);
	$('#afterIMG').stop().css('opacity','0');
	$('#afterIMG').stop().animate({'opacity':'1'},1200);

	// $('#allow').stop().css('opacity','0');
	// $('#allow').stop().css('left','0px');
	// $('#allow').stop().animate({'left':'500','opacity':'1'},1200, 'easeOutExpo' ,function(){
	// 	$('#allow').stop().animate({'left':'1000','opacity':'0'},1200, 'easeInExpo');	
	// });

}
</script>
<!-- } 게시글 읽기 끝 -->