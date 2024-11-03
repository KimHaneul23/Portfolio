<?php
include_once('./_common.php');

$sql ="update g5_member set mb_mailling = '{$chk_mail}' where mb_no ='{$num}'";
$result = sql_query($sql);

?>
