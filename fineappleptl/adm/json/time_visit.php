<?php
include_once('./_common.php');

$date = substr(Date('Y-m-d'), 0, 10);
$where = " where 1 = 1 ";
if($st_date) $datetime .= " and vi_date >= '".$st_date."' ";
if($ed_date) $datetime .= " and vi_date <= '".$ed_date."' ";
if(!$st_date && !$ed_date) $datetime .= " and vi_date = '".$date."' ";
if($device){
	if($device == "PC") $where .= " and vi_os NOT IN('', 'Android', 'iOS') ";
	if($device == "mobile") $where .= " and vi_os IN('Android', 'iOS') ";
}


$sql = sql_query("select vi_date, vi_time, count(*) as cnt from g5_visit $where $datetime group by left(vi_time, 2) order by vi_time asc");

$json = array();

$time = 0;
$tot_cnt = 0;
$time_cnt = 0;
$max = 0;
$while = false;
for($i=0;$row=sql_fetch_array($sql);$i++){
	while(substr($row['vi_time'], 0, 2) != sprintf('%02d',$time)){
		$json['result'][$time_cnt]['item'] = sprintf('%02d',$time)."시";
		$json['result'][$time_cnt]['value'] = 0;
		$time++;
		$time_cnt++;
		$while = true;
	}
	if($max < $row['cnt']) $max = $row['cnt'];
	$json['result'][$time_cnt]['item'] = substr($row['vi_time'], 0, 2)."시";
	$json['result'][$time_cnt]['value'] = $row['cnt'];
	$total = $total + $row['cnt'];
	$tot_cnt++;
	$time_cnt++;
	$time++;
}
	//echo $time;
	//print_r($json);
if($tot_cnt < 24){
	while($time != 24){
		$json['result'][$time]['item'] = sprintf('%02d',$time)."시";
		$json['result'][$time]['value'] = 0;
		$time++;
		$tot_cnt++;

	}
}

$json['max'] = $max;
$json['total'] = $total;
echo json_encode($json, JSON_NUMERIC_CHECK);
?>