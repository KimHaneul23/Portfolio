<?php
include_once('./_common.php');
$date = substr(Date('Y-m-d'), 0, 4); // 오늘
$day1 = date("Y-m-d", strtotime($date." -1 day")); // 1일전

// pc
$sql1 = "select count(*) as cnt from g5_write_db_collect where wr_10 = 'PC' and date(wr_datetime) = '{$day1}' ";
$result1 = sql_fetch($sql1);

// 모바일
$sql2 = "select count(*) as cnt from g5_write_db_collect where wr_10 = '모바일' and date(wr_datetime) = '{$day1}' ";
$result2 = sql_fetch($sql2);

$json = array();
$json['result']['0']['0']['item'] = 'PC';
if($result1['cnt']){
	$json['result']['0']['0']['value'] = $result1['cnt'];
}else{
	$json['result']['0']['0']['value'] = 0;
}

$json['result']['0']['1']['item'] = '모바일';
if($result2['cnt']){
	$json['result']['0']['1']['value'] = $result2['cnt'];
}else{
	$json['result']['0']['1']['value'] = 0;
}
echo json_encode($json);

?>
