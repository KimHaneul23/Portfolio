<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

$sql = " update $write_table
            set wr_good = '$wr_good',
                wr_11 = '$wr_11',
                wr_12 = '$wr_12',
                wr_13 = '$wr_13',
                wr_14 = '$wr_14',
                wr_15 = '$wr_15'
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

goto_url(G5_ADMIN_URL.'/board.php?bo_table='.$bo_table.'&sca='.$sca.'&page='.$page.'"');
?>