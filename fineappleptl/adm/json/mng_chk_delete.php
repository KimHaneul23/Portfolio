<?php
include_once('./_common.php');

for($i =0; $i<count($code); $i++){
$sql ="delete from g5_write_db_collect where wr_id='{$code[$i]}' ";
$result = sql_query($sql);
}

echo"삭제완료";
?>
