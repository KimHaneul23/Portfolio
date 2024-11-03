<?php

define('adm_board', true);

$sub_menu = "400000"; // 게시판이 나타나야 하는 기본 메뉴
if ($_GET['bo_table'] == 'projects') {
	$sub_menu = "400100"; // 게시판이 지정된 메뉴 번호
}else if($_GET['bo_table'] == 'contact_web') {
	$sub_menu = "400200";
}else if($_GET['bo_table'] == 'contact_media') {
	$sub_menu = "400300";
}else if($_GET['bo_table'] == 'contact_sns') {
	$sub_menu = "400400";
}else if($_GET['bo_table'] == 'contact_design') {
	$sub_menu = "400500";
}else if($_GET['bo_table'] == 'winner') {
	$sub_menu = "400700";
}

include_once('./_common.php');

auth_check($auth[$sub_menu], 'r');

include_once('./admin.head.php');

include_once(G5_PATH.'/bbs/board.php');

?>

 

<?php

include_once('./admin.tail.php');

?>