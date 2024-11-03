<?php
//  error_reporting( E_ALL );
//  ini_set( "display_errors", 1 );
  if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

$mode = "";

if ($is_admin && $adm_bbs == 1){
	$mode = "admin";
}


if(!empty($wr_1_search)){
	$qstr .= "&wr_1_search=".$wr_1_search;
}


switch ($mode){
	case "admin" :
		include "$board_skin_path/list.admin.php";
		break;
	default :
		include "$board_skin_path/list.member.php";
}
?>
