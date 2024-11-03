<?php

define('adm_board', true);

$sub_menu = "400000"; // 게시판이 나타나야 하는 기본 메뉴


include_once('./_common.php');

auth_check($auth[$sub_menu], 'r');

//include_once('./admin.head.php');

include_once(G5_PATH.'/bbs/write_update.php');

?>

 

<?php

//include_once('./admin.tail.php');

?>