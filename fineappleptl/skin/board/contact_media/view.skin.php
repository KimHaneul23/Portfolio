<?php
if (!defined("_GNUBOARD_")) exit; // 개별 페이지 접근 불가
include_once(G5_LIB_PATH.'/thumbnail.lib.php');

// add_stylesheet('css 구문', 출력순서); 숫자가 작을 수록 먼저 출력됨
add_stylesheet('<link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css">', 0);
add_stylesheet('<link rel="stylesheet" href="'.$board_skin_url.'/common.css">', 0);
add_stylesheet('<link rel="stylesheet" href="'.$board_skin_url.'/style.css">', 0);
?>

<script>
$(window).on('load', function() {
    $('.btn_v_01 a').css("background-color", "#445b54");
    $('.bo_vc_w .btn_submit').css("background-color", "#445b54");

});
</script>

<script src="<?php echo G5_JS_URL; ?>/viewimageresize.js"></script>

<?php
if (!$is_admin && $view['mb_id'] != 'admin') {
    $view['name'] = preg_replace('/(?<=.{1})./u','*',$view['wr_name']);
}
?>

<style>
    .cmt_btn{display:none;}
</style>
<!-- 게시물 읽기 시작 { -->
<div class="tbl_frm01 tbl_wrap">
	<table>
		<caption><?php echo $board['bo_subject'] ?> 목록</caption>
		<colgroup>
			<col class="grid_4">
			<col>
		</colgroup>
		<tbody>
			<tr>
				<th><label for="ca_name">프로젝트 문의</label></th>
				<td>
					Web / Mobile HP 제작 문의
				</td>
			</tr>
			<tr>
				<th><label for="wr_datetime">작성일</label></th>
				<td>
					<?php echo $view['wr_datetime'] ?>
				</td>
			</tr>
			<tr>
				<th><label for="ca_name">업체명</label></th>
				<td>
					<?php echo $view['wr_subject'];?>
				</td>
			</tr>
			<tr>
				<th><label for="wr_name">담당자 성함 / 직책</label></th>
				<td>
					<?php echo $view['wr_name'] ?>
				</td>
			</tr>
			<tr>
				<th><label for="wr_1">담당자 연락처</label></th>
				<td>
					<?php echo $view['wr_1'] ?>
				</td>
			</tr>
			<tr>
				<th><label for="wr_email">이메일 주소</label></th>
				<td>
					<?php echo $view['wr_email'] ?>
				</td>
			</tr>
			<tr>
				<th><label for="wr_2">프로젝트 예산</label></th>
				<td>
					<?php echo $view['wr_2'] ?>
				</td>
			</tr>
			<tr>
				<th><label for="wr_3">제작 페이지 수</label></th>
				<td>
					<?php echo $view['wr_3'] ?>
				</td>
			</tr>
			<tr>
				<th><label for="wr_4">제작 목적</label></th>
				<td>
					<?php echo $view['wr_4'] ?>
				</td>
			</tr>
			<tr>
				<th><label for="wr_5">제작 형태</label></th>
				<td>
					<?php echo $view['wr_5'] ?>
				</td>
			</tr>
			<tr>
				<th><label for="wr_6">제작 방법</label></th>
				<td>
					<?php echo $view['wr_6'] ?>
				</td>
			</tr>
			<tr>
				<th><label for="wr_7">제작 시 필요한 항목</label></th>
				<td>
					<?php echo $view['wr_7'] ?>
				</td>
			</tr>
			<tr>
				<th><label for="wr_8">자사 프로젝트 중 마음에 들었던 홈페이지</label></th>
				<td>
					<?php echo $view['wr_8'] ?>
				</td>
			</tr>
			<tr>
				<th><label for="wr_9">기타 요청사항</label></th>
				<td>
					<?php echo $view['wr_9'] ?>
				</td>
			</tr>
			<tr>
				<th><label for="wr_content">문의 내용</label></th>
				<td>
					<?php echo get_view_thumbnail(nl2br($view['content'])); ?>
				</td>
			</tr>
		</tbody>
	</table>
</div>
<!-- } 본문 내용 끝 -->


<div class="btn_fixed_top">
	<a href="javascript:window.history.back();" class="btn btn_02">목록</a>
<!--	<?php if ($update_href) { ?><a href="<?php echo $update_href ?>" class="btn type01">수정</a><?php } ?>-->
</div>

<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>    
AOS.init({
    duration: 1400,
    // once: true,
})
window.addEventListener('load', function () {
    AOS.refresh();
});
</script>

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