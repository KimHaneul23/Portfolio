<?php
$sub_menu = "100250";
require_once './_common.php';

check_demo();

auth_check_menu($auth, $sub_menu, "d");

check_admin_token();

$msg = "";
for ($i = 0; $i < count($idx); $i++) {
	sql_query("DELETE FROM g5_branch WHERE idx='".$idx."'");
	
	$msg = "삭제 되었습니다.";
}

if ($msg) {
    echo "<script type='text/javascript'> alert('$msg'); </script>";
}

goto_url("./branch.php?$qstr");