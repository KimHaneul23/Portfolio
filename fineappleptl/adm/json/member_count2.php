<?php
include_once('./_common.php');

// 어제 가입자 수
$sql1 = "select count(mb_no) as count from g5_member where date(mb_datetime) ='{$_POST['yesterday']}'";
$result1 = sql_fetch($sql1);

// 오늘 가입자 수 
$sql2 = "select count(mb_no) as count from g5_member where date(mb_datetime) ='{$_POST['today']}'";
$result2 = sql_fetch($sql2);

// 누적 가입자 수 
$sql3 = "select count(mb_no)  as count from g5_member where mb_leave_date =''";
$result3 = sql_fetch($sql3);

// 누적 탈퇴 회원 수 
$sql4 = "select count(mb_no)  as count from g5_member where mb_leave_date !=''";
$result4 = sql_fetch($sql4);

$json = '{"result":[';
$json .= '{"yesterday_member":'.$result1['count'].',"total_member":'.$result3['count'].' ,"today_member":'.$result2['count'].' ,"leave_member":'.$result4['count'].'}';
$json .= ']}';

echo $json;
?>
