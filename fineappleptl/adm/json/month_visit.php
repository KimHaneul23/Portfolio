<?php
include_once('./_common.php');

$date = substr(Date('Y-m-d'), 0, 4);
$where = " where 1 = 1 ";
if($st_date) $datetime .= " and vi_date >= '".$st_date."-01-01' and vi_date <= '".$st_date."-12-31' ";
if(!$st_date && !$ed_date) $datetime .= " and vi_date >= '".$date."-01-01' and vi_date <= '".$date."-12-31' ";
if($device){
	if($device == "PC") $where .= " and vi_os NOT IN('', 'Android', 'iOS') ";
	if($device == "mobile") $where .= " and vi_os IN('Android', 'iOS') ";
}


$sql = sql_query("select vi_date, count(*) as cnt from g5_visit $where $datetime group by left(vi_date, 7) order by left(vi_date, 7) asc");

$month = 1;
$tot_cnt = 0;
$month_cnt = 0;
$while = false;
$total = 0;
for($i=0;$row=sql_fetch_array($sql);$i++){
	// 이전 월 체크
	while(substr($row['vi_date'], 5, 2) != sprintf('%02d',$month)){
		$date = substr(Date('Y-m-d'), 0, 4);
		$where = " where 1 = 1 ";
		$datetime = "";
		if($st_date) $datetime .= " and left(vi_date, 7) = '".($st_date-1)."-".sprintf('%02d',$month)."'";
		if(!$st_date && !$ed_date) $datetime .= " and left(vi_date, 7) = '".($date-1)."-".sprintf('%02d',$month)."'";
		if($device){
			if($device == "PC") $where .= " and vi_os NOT IN('', 'Android', 'iOS') ";
			if($device == "mobile") $where .= " and vi_os IN('Android', 'iOS') ";
		}
		$sql2 = sql_fetch("select vi_date, count(*) as cnt from g5_visit $where $datetime group by left(vi_date, 7) order by left(vi_date, 7) asc");
		$total += $sql2['cnt'];
		$json['result'][0][$month_cnt]['item'] = sprintf('%02d',$month)."월";
		$json['result'][0][$month_cnt]['value'] = (int)$sql2['cnt'];
		$json['result'][1][$month_cnt]['item'] = sprintf('%02d',$month)."월";
		$json['result'][1][$month_cnt]['value'] = 0;
		$month++;
		$month_cnt++;
		$while = true;
	}

	// 정상적인 데이터
	$date = substr(Date('Y-m-d'), 0, 4);
	$where = " where 1 = 1 ";
	$datetime = "";
	if($st_date) $datetime .= " and left(vi_date, 7) = '".($st_date-1)."-".sprintf('%02d',$month)."'";
	if(!$st_date && !$ed_date) $datetime .= " and left(vi_date, 7) = '".($date-1)."-".sprintf('%02d',$month)."'";
	if($device){
		if($device == "PC") $where .= " and vi_os NOT IN('', 'Android', 'iOS') ";
		if($device == "mobile") $where .= " and vi_os IN('Android', 'iOS') ";
	}
	$sql2 = sql_fetch("select vi_date, count(*) as cnt from g5_visit $where $datetime group by left(vi_date, 7) order by left(vi_date, 7) asc");
	$total += $sql2['cnt'];
	$total += $row['cnt'];
	$json['result'][0][$month_cnt]['item'] = sprintf('%02d',$month)."월";
	$json['result'][0][$month_cnt]['value'] = (int)$sql2['cnt'];
	$json['result'][1][$month_cnt]['item'] = substr($row['vi_date'], 5, 2)."월";
	$json['result'][1][$month_cnt]['value'] = $row['cnt'];
	$tot_cnt++;
	$month_cnt++;
	$month++;
}
// 이후 월 체크
if($tot_cnt < 13){
	while($month != 13){
		$date = substr(Date('Y-m-d'), 0, 4);
		$where = " where 1 = 1 ";
		$datetime = "";
		if($st_date) $datetime .= " and left(vi_date, 7) = '".($st_date-1)."-".sprintf('%02d',$month)."'";
		if(!$st_date && !$ed_date) $datetime .= " and left(vi_date, 7) = '".($date-1)."-".sprintf('%02d',$month)."'";
		if($device){
			if($device == "PC") $where .= " and vi_os NOT IN('', 'Android', 'iOS') ";
			if($device == "mobile") $where .= " and vi_os IN('Android', 'iOS') ";
		}
		$sql2 = sql_fetch("select vi_date, count(*) as cnt from g5_visit $where $datetime group by left(vi_date, 7) order by left(vi_date, 7) asc");
		$total += $sql2['cnt'];
		$json['result'][0][$month_cnt]['item'] = sprintf('%02d',$month)."월";
		$json['result'][0][$month_cnt]['value'] = (int)$sql2['cnt'];
		$json['result'][1][$month_cnt]['item'] = sprintf('%02d',$month)."월";
		$json['result'][1][$month_cnt]['value'] = 0;
		$month++;
		$month_cnt++;

	}
}
$json['total'] = $total;
if($st_date) $year = $st_date;
if(!$st_date) $year = substr(Date('Y-m-d'), 0, 4);
$json['year'] = $year;

echo json_encode($json);
?>
