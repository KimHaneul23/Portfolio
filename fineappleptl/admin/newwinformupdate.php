<?php
$sub_menu = '100310';
require_once './_common.php';

$nw_id = isset($_REQUEST['nw_id']) ? (string)preg_replace('/[^0-9]/', '', $_REQUEST['nw_id']) : 0;

if ($w == "u" || $w == "d") {
    check_demo();
}

if ($w == 'd') {
    auth_check_menu($auth, $sub_menu, "d");
} else {
    auth_check_menu($auth, $sub_menu, "w");
}

check_admin_token();

$nw_subject = isset($_POST['nw_subject']) ? strip_tags(clean_xss_attributes($_POST['nw_subject'])) : '';
$posts = array();

$check_keys = array(
	'nw_sort'=>'int',
	'nw_device'=>'str',
	'nw_division'=>'str',
	'nw_begin_time'=>'str',
	'nw_end_time'=>'str',
	'nw_disable_hours'=>'int',
	'nw_left'=>'int',
	'nw_top'=>'int',
	'nw_height'=>'int',
	'nw_width'=>'int',
	'nw_content'=>'text',
	'nw_content_html'=>'text',
	'nw_href'=>'str',
);

foreach ($check_keys as $key => $val) {
    if ($val === 'int') {
        $posts[$key] = isset($_POST[$key]) ? (int) $_POST[$key] : 0;
    } elseif ($val === 'str') {
        $posts[$key] = isset($_POST[$key]) ? clean_xss_tags($_POST[$key], 1, 1) : 0;
    } else {
        $posts[$key] = isset($_POST[$key]) ? trim($_POST[$key]) : 0;
    }
}

$sql_common = " nw_sort = '{$posts['nw_sort']}',
				nw_device = '{$posts['nw_device']}',
                nw_division = '{$posts['nw_division']}',
                nw_begin_time = '{$posts['nw_begin_time']}',
                nw_end_time = '{$posts['nw_end_time']}',
                nw_disable_hours = '{$posts['nw_disable_hours']}',
                nw_left = '{$posts['nw_left']}',
                nw_top = '{$posts['nw_top']}',
                nw_height = '{$posts['nw_height']}',
                nw_width = '{$posts['nw_width']}',
                nw_subject = '{$nw_subject}',
                nw_content = '{$posts['nw_content']}',
                nw_content_html = '{$posts['nw_content_html']}',
                nw_href = '{$posts['nw_href']}' ";

if ($w == "") {
    $msg .= "등록 되었습니다.\\n";
    $sql = " insert {$g5['new_win_table']} set $sql_common ";
    sql_query($sql);

    $nw_id = sql_insert_id();
} elseif ($w == "u") {
	$msg .= "수정 되었습니다.\\n";
    $sql = " update {$g5['new_win_table']} set $sql_common where nw_id = '$nw_id' ";
    sql_query($sql);
} elseif ($w == "d") {
	$msg .= "삭제 되었습니다.\\n";
    $sql = " delete from {$g5['new_win_table']} where nw_id = '$nw_id' ";
    sql_query($sql);
}

goto_url('./newwinlist.php');
//if ($w == "d") {
//    goto_url('./newwinlist.php');
//} else {
//    goto_url("./newwinform.php?w=u&amp;nw_id=$nw_id");
//}
