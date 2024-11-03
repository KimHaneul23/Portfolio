<?php
include_once('./_common.php');

$bo_table = $_POST['bo_table'];
$wr_id = $_POST['wr_id'];

if ($is_admin == 'super'){ // 최고관리자 통과
	$wr = get_write($write_table, $wr_id);
    if (!$wr['wr_id']) {
        alert("글이 존재하지 않습니다.\\n글이 삭제되었거나 이동하였을 수 있습니다.");
    }

	// 게시글 삭제
    sql_query(" delete from g5_write_{$bo_table} where wr_id = '$wr_id' ");

	// 최근게시물 삭제
    sql_query(" delete from g5_write_{$bo_table} where bo_table = '$bo_table' and wr_id = '$wr_id' ");
	
	// 글숫자 감소
	sql_query(" update {$g5['board_table']} set bo_count_write = bo_count_write - '1' where bo_table = '$bo_table' ");
}

alert("해당 게시물이 삭제되었습니다.", G5_URL.'/admin/bbs/board.php?bo_table='.$bo_table);
?>