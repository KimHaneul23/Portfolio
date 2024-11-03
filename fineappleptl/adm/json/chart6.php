<?php
include_once('./_common.php');
//신규방문자
$date = Date('Y-m-d');
$date = substr($date, 0, 10);
$sql = sql_query("select vi_ip, vi_date from g5_visit where vi_date >= '$date'");
for($i=0;$row=sql_fetch_array($sql);$i++){
	$visit = sql_fetch("select count(*) as cnt from g5_visit where vi_ip = '{$row['vi_ip']}'");
	if($visit['cnt'] > 1) $cnt1++;
	else $cnt2++;
}

$json = array();
$json['result']['0']['0']['item'] = '재방문자';
$json['result']['0']['0']['value'] = $cnt1;
$json['result']['0']['1']['item'] = '신규방문자';
$json['result']['0']['1']['value'] = $cnt2;

echo json_encode($json);

?>