<?php
include_once('./_common.php');
$qry = sql_query("select vi_ip, vi_date, count(*) as cnt from g5_visit WHERE vi_date BETWEEN DATE_ADD(NOW(),INTERVAL -1 MONTH ) AND NOW() group by vi_date, vi_ip");
$become[] = "";
for($i=0;$row=sql_fetch_array($qry);$i++) {
	if(array_search($row['vi_ip'], $become) === false) $cnt2++;
	else $cnt1++;
	$become[] = $row['vi_ip'];
}
$json['result']['0']['0']['item'] = '재방문자';
$json['result']['0']['0']['value'] = $cnt1;
$json['result']['0']['1']['item'] = '신규방문자';
$json['result']['0']['1']['value'] = $cnt2;

echo json_encode($json);
?>