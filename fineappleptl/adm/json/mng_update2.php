<?php
include_once('./_common.php');
$sql ="update g5_write_db_collect set wr_4 = '{$visit_num}' where wr_id='{$num}'";
$result = sql_query($sql);

echo $sql;
?>
