<?php
include_once('./_common.php');

// 신청
$sql1 = "select count(*) as cnt from g5_write_db_collect where wr_4 ='신청' and date(wr_datetime) = '{$_POST['yesterday']}' group by wr_4";
$result1 = sql_fetch($sql1);

// 내원 
$sql2 ="select count(*) as cnt from g5_write_db_collect where wr_4 ='내원' and date(wr_datetime) = '{$_POST['yesterday']}' group by wr_4";
$result2 = sql_fetch($sql2);

$json = '{"result":[';
$json .= '{"mng1":"'.$result1['cnt'].'","mng2":"'.$result2['cnt'].'"}';
$json .= ']}';

echo $json;
?>
