<?
//print_r($_POST);
//exit;

if (!defined("_GNUBOARD_")) exit; // 개별 페이지 접근 불가 
// 자신만의 코드를 넣어주세요.

if ($is_admin){
	$sql1 = " update $write_table set wr_datetime='$wr_datetime', wr_last='$wr_datetime', wr_hit='$wr_hit' where wr_id = '$wr_id' "; 
} else {
	$wr_datetime = date("Y-m-d H:i:s");
	$wr_hit = 0;
	$sql1 = " update $write_table set wr_datetime='$wr_datetime', wr_hit='$wr_hit' where wr_id = '$wr_id' "; 
}
sql_query($sql1);
?>