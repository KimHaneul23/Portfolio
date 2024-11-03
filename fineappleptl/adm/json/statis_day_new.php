<?php
include_once('./_common.php');
$date = substr(Date('Y-m-d'), 0, 10); // 오늘 
$day1 = date("Y-m-d", strtotime($date." -1 day")); // 1일전

$where = " where 1 = 1 ";
if($st_date) $datetime .= " and wr_datetime >= '{$st_date} 00:00:00'";
if($ed_date) $datetime .= " and wr_datetime <= '{$ed_date} 23:59:59'";
if(!$st_date && !$ed_date) $datetime .= " and wr_datetime <= '{$day1} 23:59:59' ";
if($sta_type){
	if($sta_type == "빠른상담") $where .= " and wr_5 = '빠른상담' ";
	if($sta_type == "랜딩상담") $where .= " and wr_5= '랜딩상담' ";
}
if($device){
	if($device == "PC") $where .= " and wr_10 = 'PC' ";
	if($device == "mobile") $where .= " and wr_10 = '모바일' ";
}

$limit = 0;
if($page) $limit = ($page - 1) * 10;

// 현재 데이터 10개 
$qry = "select date(wr_datetime) as wr_date_time, wr_5, count(*) as cnt from g5_write_db_collect $where $datetime group by date(wr_datetime), wr_5 order by date(wr_datetime) desc, wr_5 asc limit $limit, 10";
$sql = sql_query($qry);

for($i=0;$row=sql_fetch_array($sql);$i++){
	$list[] = $row;
	// $total += $row['cnt'];	
}

$qry = "select date(wr_datetime) as wr_date_time, wr_5, count(*) as cnt from g5_write_db_collect $where $datetime group by date(wr_datetime), wr_5";
$sql = sql_query($qry);

for($i=0;$row=sql_fetch_array($sql);$i++){
	$total_list[] = $row;
	$list2['total2'] += $row['cnt'];
	// print_r($row);print_r("</br>");	
}

$j = 0;
for($i=0;$i<count($list);$i++){
	$list2[$j]['date'] = $list[$i]['wr_date_time'];
	
	if($list[$i]['wr_5'] == '랜딩상담') $list2[$j]['landing'] = $list[$i]['cnt'];
	else $list2[$j]['quick'] = $list[$i]['cnt'];

	if($list[$i]['wr_date_time'] != $list[$i+1]['wr_date_time']) {
		// 3개월전 데이터 
		$qry2 = "select count(*) as cnt from g5_write_db_collect $where and left(wr_datetime, 10) = date_sub('{$row['wr_date_time']}', interval 3 month) ";
		$sql2 = sql_fetch($qry2);
		$list2[$j]['prev_cnt'] = $sql2['cnt'];
		$list2[$j]['cnt'] = $list2[$j]['landing'] + $list2[$j]['quick'];
		
		if(!$list2[$j]['landing']) $list2[$j]['landing'] = 0;
		if(!$list2[$j]['quick']) $list2[$j]['quick'] = 0;

		if($list2['max'] < $list2[$j]['cnt']) $list2['max'] = $list2[$j]['cnt'];
		if($list2['max3'] < $list2[$j]['cnt']) $list2['max3'] = $list2[$j]['prev_cnt'];

		// $list2['total2'] += $list2[$j]['cnt'];
		$j++;
	}
}

// print_r(count($total_list));print_r("</br>");

for($i=0;$i<count($total_list);$i++){
	$key_date = $total_list[$i]['wr_date_time'];
	$total_count[$key_date] = 1;
}

// print_r(count($total_count));print_r("</br>");



$list2['total'] = count($total_count);

for($i=0;$i<$j;$i++) $json['result'][] = $list2[$i];
if($list2['max']) $json['max'] = $list2['max'];
else $json['max'] = 0;

if($list2['max3']) $json['max3'] = $list2['max3'];
else $json['max3'] = 0;

if($list2['total']) $json['total'] = $list2['total'];
else $json['total'] = 0;

if($list2['total2']) $json['total2'] = $list2['total2'];
else $json['total2'] = 0;

echo json_encode($json, JSON_NUMERIC_CHECK );
?>