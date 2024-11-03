<?php
include_once('./_common.php');

$sql ="update g5_member set mb_adult = '{$chk_adult}' where mb_no ='{$num}'";
$result = sql_query($sql);

?>
