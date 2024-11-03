<?php
include_once('./_common.php');

$sql ="update g5_write_db_collect set wr_1 = '{$answer}' where wr_id='{$num}'";
$result = sql_query($sql);

?>
