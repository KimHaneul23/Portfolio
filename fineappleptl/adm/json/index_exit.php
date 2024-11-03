<?php
include_once('./_common.php');

$date = substr(Date('Y-m-d'), 0, 10); // 오늘 
$day1 = date("Y-m-d", strtotime($date." -1 day")); // 1일전

$where = " where vi_requri not regexp 'admin|plugin'";
$where .= " and vi_stay = 0";
if($st_date) $datetime .= " and vi_date >= '$st_date' ";
if($ed_date) $datetime .= " and vi_date <= '$ed_date' ";
if(!$st_date && !$ed_date) $datetime .= " and vi_date = '$day1' ";
if($device){
	if($device == "PC") $where .= " and vi_os NOT IN('', 'Android', 'iOS') ";
	if($device == "mobile") $where .= " and vi_os IN('Android', 'iOS') ";
}

$limit = 0;
if(!$page) $page = 1;

//데이터 합
$sql = "select count(*) as cnt from g5_visit $where $datetime";
$sql_all = sql_fetch($sql);
// 데이터
$sql_all2 = sql_fetch("select count(*) as cnt from g5_visit $where $datetime group by vi_requri");

// 데이터
$sql = "select vi_requri, count(*) as stay1 from g5_visit $where $datetime group by vi_requri order by stay1 desc limit ".(($page - 1) * 10).", 10";
$qry = sql_query($sql);
//print_r($type);
for($i=0;$row=sql_fetch_array($qry);$i++){
	$temp2[$i]['item'] = $row['vi_requri'];
	$temp2[$i]['value'] = $row['stay1'];
	$total += $row['stay1'];
}
for($i=0;$i<count($temp2);$i++){
	$temp[$i]['item'] = $temp2[$i]['item'];
	$temp[$i]['value'] = $temp2[$i]['value'];
	$temp[$i]['value2'] = round((($temp2[$i]['value'] / $total) * 100), 0);
}


$json['result'] = $temp;
$json['total'] = $sql_all2['cnt'];
if($json['total'] > 20) $json['total'] = 20;
$json['total2'] = $sql_all['cnt'];
echo json_encode($json);
?>