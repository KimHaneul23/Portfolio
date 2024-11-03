<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가
$wr_7 ='';
$wr_7 = implode(',', $_POST['ch_wr_7']);

$sql = " update $write_table
            set wr_good = '$wr_good',
                wr_7 = '$wr_7',
                wr_11 = '$wr_11'
          where wr_id = '$wr_id' ";
sql_query($sql);
delete_cache_latest($bo_table);
if ($is_admin){
	$sql1 = " update $write_table set wr_datetime='$wr_datetime', wr_last='$wr_datetime', wr_hit='$wr_hit' where wr_id = '$wr_id' "; 
} else {
	$wr_datetime = date("Y-m-d H:i:s");
	$wr_hit = 0;
	$sql1 = " update $write_table set wr_datetime='$wr_datetime', wr_hit='$wr_hit' where wr_id = '$wr_id' "; 
}
sql_query($sql1);

if (defined('G5_IS_ADMIN')) {
    $site_msg = "프로젝트 문의가 접수되었습니다.";
    alert($site_msg, G5_ADMIN_URL.'/board.php?bo_table='.$bo_table.'&sca='.$sca.'&page='.$page.'"');
}else{
    $site_msg = "프로젝트 문의가 접수되었습니다.";
    alert($site_msg, G5_URL.'/contact.php');
}
?>