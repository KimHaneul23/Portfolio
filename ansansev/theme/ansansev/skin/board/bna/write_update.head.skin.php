<?php
if (!defined("_GNUBOARD_")) exit; // 개별 페이지 접근 불가 
// 자신만의 코드를 넣어주세요.

for ($i = 0 ; $i < count($chk) ; $i++){
	$wr_1 .= $chk[$i] . "|";
}
$ca_name='';
foreach($_POST[chk_ca_name] as $var) {
 $ca_name.=",$var";
}
if (strlen($ca_name)) $ca_name=substr($ca_name,1);
?>