<?php
include_once('./_common.php');
//신규방문자
$date = Date('Y-m-d');
$date = substr($date, 0, 10);
$sql = sql_query("select vi_os, count(*) as cnt from g5_visit where vi_date >= '$date' and vi_os != '' group by vi_os");
for($i=0;$row=sql_fetch_array($sql);$i++){
	if($row['vi_os'] == 'Android' || $row['vi_os'] == 'iOS') $cnt1 += $row['cnt'];
	else $cnt2 += $row['cnt'];
}

$json = array();
$json['result']['0']['0']['item'] = '모바일';
$json['result']['0']['0']['value'] = $cnt1;
$json['result']['0']['1']['item'] = 'PC';
$json['result']['0']['1']['value'] = $cnt2;

echo json_encode($json);

?>