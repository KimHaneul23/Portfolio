<?php
include_once('./_common.php');

$sql ="update g5_member set mb_sms = '{$chk_sms}' where mb_no ='{$num}'";
$result = sql_query($sql);

?>
