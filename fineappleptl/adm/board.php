<?php

define('adm_board', true);

$sub_menu = "400000"; // 게시판이 나타나야 하는 기본 메뉴
if ($_GET['bo_table'] == 'notice') {
	$sub_menu = "400710"; // 게시판이 지정된 메뉴 번호
}else if($_GET['bo_table'] == 'doctor') {
	$sub_menu = "400720";
}else if($_GET['bo_table'] == 'equipment') {
	$sub_menu = "400730";
}else if($_GET['bo_table'] == 'healingstory') {
	$sub_menu = "400740";
}else if($_GET['bo_table'] == 'review') {
	$sub_menu = "400745";
}else if($_GET['bo_table'] == 'diary') {
	$sub_menu = "400750";
}else if($_GET['bo_table'] == 'youtube') {
	$sub_menu = "400770";
}else if($_GET['bo_table'] == 'schedule') {
	$sub_menu = "400760";
}else if($_GET['bo_table'] == 'online_counselling') {
	$sub_menu = "400800";
}

include_once('./_common.php');

auth_check($auth[$sub_menu], 'r');

include_once('./admin.head.php');

include_once(G5_PATH.'/bbs/board.php');

?>

 

<?php

include_once('./admin.tail.php');

?>