<?php
include_once('./_common.php');
$time = date('Ymd');

$sql = "update g5_member set mb_leave_date ='{$time}' where mb_no ='{$num}'";
$result = sql_query($sql);

echo("탈퇴완료");
?>
