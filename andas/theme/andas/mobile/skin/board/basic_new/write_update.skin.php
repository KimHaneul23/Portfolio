<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가
//alert('상담문의가 접수되었습니다.', G5_URL);

// 웹사이트 타이틀
$g5['title'] = '견적 문의';
?>
<script>
	try{
        
		setTimeout(function() {
            //alert('상담신청이 완료되었습니다.');

            location.replace("<?=$_SERVER['HTTP_REFERER']?>");
            
		}, 2500);
	}catch(e){}
</script>