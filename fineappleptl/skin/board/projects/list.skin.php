<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가
if (defined('G5_IS_ADMIN')) {
	include_once($board_skin_path.'/list.skin.admin.php');
}else{
	include_once($board_skin_path.'/list.skin.web.php');
}
?>
