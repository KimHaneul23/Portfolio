<?php
include_once('./_common.php');

$sql ="update g5_member set mb_3 = '{$mb_3}' where mb_no ='{$num}'";
$result = sql_query($sql);


?>
