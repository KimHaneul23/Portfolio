<?php
include_once('./_common.php');

// 신규 가입자 수
$sql1 = "select count(mb_no) as count from g5_member where date(mb_datetime) ='{$_POST['yesterday']}'";
$result1 = sql_fetch($sql1);

// 누적 가입자 수 
$sql2 = "select count(mb_no)  as count from g5_member";
$result2 = sql_fetch($sql2);

$json = '{"result":[';
$json .= '{"new_member":"'.$result1['count'].'","total_member":"'.$result2['count'].'"}';
$json .= ']}';

echo $json;
?>
