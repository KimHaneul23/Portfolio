<?php
$menu['menu100'] = array (
    array('100000', '설정관리', G5_ADMIN_URL.'/config_form.php',   'config'),
    array('100100', '기본설정', G5_ADMIN_URL.'/config_form.php',   'cf_basic'),
    array('100200', '관리권한설정', G5_ADMIN_URL . '/auth_list.php',     'cf_auth'),
	//array('100250', '지점설정', G5_ADMIN_URL . '/branch.php',     'branch'),
    array('100290', '메뉴설정', G5_ADMIN_URL.'/menu_list.php',     'cf_menu', 1),
    array('100310', '팝업관리', G5_ADMIN_URL.'/newwinlist.php', 'scf_poplayer'),
    array('100800', '세션파일 일괄삭제',G5_ADMIN_URL.'/session_file_delete.php', 'cf_session', 1),
    array('100900', '캐시파일 일괄삭제',G5_ADMIN_URL.'/cache_file_delete.php',   'cf_cache', 1),
    array('100910', '캡챠파일 일괄삭제',G5_ADMIN_URL.'/captcha_file_delete.php',   'cf_captcha', 1),
    array('100920', '썸네일파일 일괄삭제',G5_ADMIN_URL.'/thumbnail_file_delete.php',   'cf_thumbnail', 1),
);