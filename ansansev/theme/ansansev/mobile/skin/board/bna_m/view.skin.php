<?php
if (!defined("_GNUBOARD_")) exit; // 개별 페이지 접근 불가
include_once(G5_LIB_PATH.'/thumbnail.lib.php');

// add_stylesheet('css 구문', 출력순서); 숫자가 작을 수록 먼저 출력됨
add_stylesheet('<link rel="stylesheet" href="'.$board_skin_url.'/style.css">', 0);
?>

<script src="<?php echo G5_JS_URL; ?>/viewimageresize.js"></script>
<script src="<?php echo $board_skin_url; ?>/js/jquery.rwdImageMaps.min.js"></script>

<article id="bo_v">
	<div id="bo_v_wrap" style="max-width:720px; margin:0 auto;">
		<?php
		// 파일 출력
		$v_img_count = count($view['file']);
		if($v_img_count) {
		?>

		<!---------------일반성형모드-------------------------->
		<div id="bo_v_be_af" style="<?php if($view['wr_3'] == 'mode_2') { echo 'display:none'; } ?>">
			<div id="bo_v_img">
				<?php 
				$v_img_1 =  $view['file'][0]['path']."/".$view['file'][0]['file'];
				$v_img_2 =  $view['file'][3]['path']."/".$view['file'][3]['file'];
				$v_img_3 =  $view['file'][1]['path']."/".$view['file'][1]['file'];
				$v_img_4 =  $view['file'][4]['path']."/".$view['file'][4]['file'];
				$v_img_5 =  $view['file'][2]['path']."/".$view['file'][2]['file'];
				$v_img_6 =  $view['file'][5]['path']."/".$view['file'][5]['file'];
				?>
				<img src="<?=$v_img_1?>" alt="수술 전" id="beforeIMG"><img src="<?=$v_img_2?>" alt="수술 후" id="afterIMG"">
			</div>
		</div>

		<!---------------일반성형모드-------------------------->
		<div id="bo_v_be_af" style="<?php if($view['wr_3'] == 'mode_1') { echo 'display:none'; } ?>">
			<div id="bo_v_img2" style="margin:0 0 10px;width:100%;overflow:hidden;zoom:1">
				<?php 
				$v_img_7 =  $view['file'][6]['path']."/".$view['file'][6]['file'];
				$v_img_8 =  $view['file'][7]['path']."/".$view['file'][7]['file'];
				?>
				<img src="<?=$v_img_7?>" alt="수술 전" id="beforeIMG"><img src="<?=$v_img_8?>" alt="수술 후" id="afterIMG">
			</div>
		</div>




			<div id="bo_v_img_btn">
				<div style="<?php if($view['wr_4'] == 'degree_3') { echo 'display:block'; }else{echo 'display:none';} ?>">
					<a href="javascript:changIMAGE('<?=$v_img_1?>','<?=$v_img_2?>', 'bottom');">
						<img src="<?php echo $board_skin_url ?>/img/180_active.png" alt="정면" class="v_img_bottom" style="float:left;">
					</a>
					<a href="javascript:changIMAGE('<?=$v_img_3?>','<?=$v_img_4?>','right');">
						<img src="<?php echo $board_skin_url ?>/img/45_over.png" alt="45도" class="v_img_right" style="float:left;">
					</a>
					<a href="javascript:changIMAGE('<?=$v_img_5?>','<?=$v_img_6?>', 'left');">
						<img src="<?php echo $board_skin_url ?>/img/90_over.png" alt="측면" class="v_img_left" style="float:left;">
					</a>
				</div>

				<div style="<?php if($view['wr_4'] == 'degree_2') { echo 'display:block'; }else{echo 'display:none';} ?>">
					<a href="javascript:changIMAGE('<?=$v_img_1?>','<?=$v_img_2?>', 'bottom');">
						<img src="<?php echo $board_skin_url ?>/img/180_active.png" alt="정면" class="v_img_bottom" style="float:left;">
					</a>
					<a href="javascript:changIMAGE('<?=$v_img_5?>','<?=$v_img_6?>', 'left');">
						<img src="<?php echo $board_skin_url ?>/img/90_over.png" alt="측면" class="v_img_left" style="float:left;">
					</a>
				</div>
					
				<div style="clear:both"></div>
			</div>

		<div style="<?php if($view['wr_4'] == 'degree_1') { echo 'display:block'; }else{echo 'display:none';} ?>"></div>
		<div style="<?php if($view['wr_3'] == 'mode_1') {echo 'display:none';} ?>"></div>
		



		<?php } ?>
		<!-- 본문 내용 시작 { 
		<div id="bo_v_con">
			<?php echo cut_str(get_text($view['wr_subject']), 70); // 글제목 출력 ?>
		</div>
		-->
			<div style="position:relative; width:50%; text-align:center; background-color: rgba(0, 0, 0, 0.8); color:white;  padding: 17px 0; float:left;">
				Before
			</div>
			<div style="position:relative; width:50%; border-left:1px solid #4c4c4c; box-sizing:border-box; text-align:center; background-color: rgba(0, 0, 0, 0.8); color:white;  padding: 17px 0; float:left;">
				After [ <?php echo $view['wr_5']?> ]
			</div>
			<div style="clear:both;"></div>
			<div style="width:100%; margin:0 auto; border-top:1px solid #4c4c4c;  padding: 17px 0; text-align:center; background-color: rgba(0, 0, 0, 0.8); color:white;">
				[ <?php echo cut_str(get_text($view['wr_subject']), 70); // 글제목 출력 ?> ]
			</div>

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

<!-- 게시글 보기 끝 -->

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
		if($('.v_img_bottom').css('src','<?php echo $board_skin_url ?>/img/180_over.png')){
			$('.v_img_bottom').attr('src', '<?php echo $board_skin_url ?>/img/180_active.png');
			$('.v_img_left').attr('src', '<?php echo $board_skin_url ?>/img/90_over.png');
			$('.v_img_right').attr('src', '<?php echo $board_skin_url ?>/img/45_over.png');
		}
	} else if(href == 'left'){
		if($('.v_img_left').css('src','<?php echo $board_skin_url ?>/img/90_over.png')){
			$('.v_img_bottom').attr('src', '<?php echo $board_skin_url ?>/img/180_over.png');
			$('.v_img_left').attr('src', '<?php echo $board_skin_url ?>/img/90_active.png');
			$('.v_img_right').attr('src', '<?php echo $board_skin_url ?>/img/45_over.png');
		}
	} else if(href == 'right'){
		if($('.v_img_right').css('src','<?php echo $board_skin_url ?>/img/45_over.png')){
			$('.v_img_bottom').attr('src', '<?php echo $board_skin_url ?>/img/180_over.png');
			$('.v_img_left').attr('src', '<?php echo $board_skin_url ?>/img/90_over.png');
			$('.v_img_right').attr('src', '<?php echo $board_skin_url ?>/img/45_active.png');
		}
	}
}
</script>