<?php
$sub_menu = "100250";
require_once './_common.php';

check_demo();

if (!(isset($_POST['chk']) && is_array($_POST['chk']))) {
    alert($_POST['act_button'] . " 하실 항목을 하나 이상 체크하세요.");
}

auth_check_menu($auth, $sub_menu, 'w');

check_admin_token();

$msg = '';

if ($_POST['act_button'] == "선택삭제") {
    for ($i = 0; $i < count($_POST['chk']); $i++) {
        // 실제 번호를 넘김
        $k = isset($_POST['chk'][$i]) ? (int) $_POST['chk'][$i] : 0;
		
        sql_query("DELETE FROM g5_branch WHERE idx='".$k."'");
	
		$msg = "삭제 되었습니다.";
    }
}

if ($msg) {
    //echo '<script> alert("'.$msg.'"); </script>';
    alert($msg);
}

run_event('admin_branch_list_update', $_POST['act_button'], $mb_datas);

goto_url('./branch.php?' . $qstr);