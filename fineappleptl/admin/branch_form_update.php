<?php
define('adm_board', true);
$sub_menu = "100250";
require_once './_common.php';

if ($w == 'u') {
    check_demo();
}

auth_check_menu($auth, $sub_menu, 'w');

$biz_1 = implode(',', $_POST['biz_1']);

$sql_common = "  biz_sort = '{$biz_sort}',
                 biz_name = '{$biz_name}',
                 biz_ceo = '{$biz_ceo}',
                 biz_number = '{$biz_number}',
                 biz_address01 = '{$biz_address01}',
                 biz_address02 = '{$biz_address02}',
                 biz_address03 = '{$biz_address03}',
                 biz_tel = '{$biz_tel}',
                 biz_fax = '{$biz_fax}',
                 biz_homepage = '{$biz_homepage}',
                 biz_navertalktalk = '{$biz_navertalktalk}',
                 biz_kakaotalk = '{$biz_kakaotalk}',
                 biz_img = '{$biz_img}',
                 biz_location = '{$biz_location}',
                 biz_meta = '{$biz_meta}',
                 biz_opengraph = '{$biz_opengraph}',
                 weekday_1 = '{$weekday_1}',
                 weekday_2 = '{$weekday_2}',
                 weekday_3 = '{$weekday_3}',
                 weekday_4 = '{$weekday_4}',
                 weekday_5 = '{$weekday_5}',
                 weekday_6 = '{$weekday_6}',
                 weekday_7 = '{$weekday_7}',
                 weekday_breaktime = '{$weekday_breaktime}',
                 biz_1 = '{$biz_1}',
                 biz_2 = '{$biz_2}',
                 biz_3 = '{$biz_3}' ";

if ($w == '') {
	sql_query(" insert into g5_branch set {$sql_common} ");
} elseif ($w == 'u') {
	$sql = " update g5_branch
                set {$sql_common}
                where idx = '{$idx}' ";
    sql_query($sql);
} else {
    alert('제대로 된 값이 넘어오지 않았습니다.');
}

goto_url('./branch.php?' . $qstr, false);