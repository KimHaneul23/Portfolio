<?php
include_once('./_common.php');
$date = substr(Date('Y-m-d'), 0, 10); // 오늘 
$day1 = date("Y-m-d", strtotime($date." -1 day")); // 1일전

$where = " where 1 = 1 and vi_referer != '' ";
if($st_date) $datetime .= " and vi_date >= '$st_date' ";
if($ed_date) $datetime .= " and vi_date <= '$ed_date' ";
if(!$st_date && !$ed_date) $datetime .= " and vi_date = '$day1' ";
if($device){
	if($device == "PC") $where .= " and vi_os NOT IN('', 'Android', 'iOS') ";
	if($device == "mobile") $where .= " and vi_os IN('Android', 'iOS') ";
}

$limit = 0;
if($page) $limit = ($page - 1) * 10;

// 토탈 
$cnt = sql_query("select vi_referer,count(*) as cnt from g5_visit $where $datetime group by vi_referer order by cnt desc limit 0,20 ");
$total = sql_num_rows($cnt);
//$cnt ="select count(*) as cnt from g5_write_db_collect";
//$total2 = sql_fetch($cnt);
$all = sql_fetch("select sum(cnt) as sum from(select count(*)as cnt from g5_visit $where $datetime group by vi_referer order by cnt desc limit 0,20) cnt2");

// 현재 데이터 10개 
$sql = sql_query("select vi_referer,count(*) as cnt from g5_visit $where $datetime group by vi_referer order by cnt desc limit $limit,10");

$json = array();

for($i=0;$row=sql_fetch_array($sql);$i++){
	$json['result'][$i]['date'] = $row['vi_referer'];
	$json['result'][$i]['cnt'] = $row['cnt'];
	$json['result'][$i]['per'] = round(($row['cnt']  / $all['sum']) * 100);
}

$json['total'] = $total;

if($i==0) {
	$json['result'][0]['date'] = '도메인이 없습니다.';
	$json['result'][0]['cnt'] = 0;
	$json['result'][0]['per'] = 0;
}
echo json_encode($json);
?>