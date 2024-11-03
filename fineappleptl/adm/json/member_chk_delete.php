<?php
include_once('./_common.php');
$time = date('Ymd');
for($i =0; $i<count($code); $i++){
$sql = "update g5_member set mb_leave_date ='{$time}' where mb_no ='{$code[$i]}'";

$result = sql_query($sql);
}

echo"탈퇴완료";
?>
