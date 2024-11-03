<?php
include_once('./_common.php');

$date = substr(Date('Y-m-d'), 0, 10);
$where = " where 1 = 1 ";
if($st_date) $datetime .= " and vi_date >= '$st_date' ";
if($ed_date) $datetime .= " and vi_date <= '$ed_date' ";
if(!$st_date && !$ed_date) $datetime .= " and vi_date <= '$date' ";
if($device){
	if($device == "PC") $where .= " and vi_os NOT IN('', 'Android', 'iOS') ";
	if($device == "mobile") $where .= " and vi_os IN('Android', 'iOS') ";
}

$limit = 0;
if($page) $limit = ($page - 1) * 10;

$cnt = sql_query("select count(*) as cnt from g5_visit $where $datetime group by vi_date");
for($i=0;$row=sql_fetch_array($cnt);$i++) $total2 += $row['cnt'];
$total = sql_num_rows($cnt);

$sql = sql_query("select vi_date, count(*) as cnt from g5_visit $where $datetime group by vi_date order by vi_date desc limit $limit, 10");

$cnt2 = sql_query("select vi_date, count(*) as cnt from g5_visit $where $datetime group by vi_date order by vi_date desc");
for($i=0;$row=sql_fetch_array($cnt2);$i++){
$sql3 = sql_fetch("select vi_date, count(*) as cnt from g5_visit $where and vi_date = date_sub('{$row['vi_date']}', interval 1 month) group by vi_date");
	$total3 += $sql3['cnt'];
}

$json = array();
$max = 0;
for($i=0;$row=sql_fetch_array($sql);$i++){
	$sql2 = sql_fetch("select vi_date, count(*) as cnt from g5_visit $where and vi_date = date_sub('{$row['vi_date']}', interval 1 day) group by vi_date");
	//$total3 += $sql2['cnt'];
	if($max < $row['cnt']) $max = $row['cnt'];
	$json['result'][$i]['date'] = $row['vi_date'];
	$json['result'][$i]['cnt'] = $row['cnt'];
	if($sql2['cnt'] > 0) {
		$json['result'][$i]['prev_cnt'] = $sql2['cnt'];
		$json['result'][$i]['per'] = round(($row['cnt'] / $sql2['cnt']) * 100);
		$json['result'][$i]['prev_date'] = substr($sql2['vi_date'], 5, 10);
		
	}else{
		$json['result'][$i]['prev_cnt'] = 0;
		$json['result'][$i]['per'] = 0;
	}
	// 신규 방문자
	$qry = sql_query("select vi_ip, vi_date, count(*) as cnt from g5_visit WHERE vi_date BETWEEN DATE_ADD(NOW(),INTERVAL -2 day ) AND NOW() group by vi_date, vi_ip");
	$become[] = "";
	for($i=0;$row=sql_fetch_array($qry);$i++) {
		if(array_search($row['vi_ip'], $become) === false) $cnt2++;
		else $cnt1++;
		$become[] = $row['vi_ip'];

	}
	
	$json['result'][$i]['cnt1'] = $cnt1;
	$json['result'][$i]['cnt2'] = $cnt2;
}
$json['total3'] = $total3;
$json['total2'] = $total2;
$json['total'] = $total;
$json['max'] = $max;


echo json_encode($json, JSON_NUMERIC_CHECK);
?>