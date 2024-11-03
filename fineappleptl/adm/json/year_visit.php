<?php
include_once('./_common.php');

$date = substr(Date('Y-m-d'), 0, 4);
$where = " where 1 = 1 ";
if($st_date) $datetime .= " and left(vi_date, 4) >= '".($st_date-2)."' and left(vi_date, 4) <= '".$st_date."'  ";
if(!$st_date && !$ed_date) $datetime .= " and left(vi_date, 4) >= '".($date-2)."' and left(vi_date, 4) <= '".$date."' ";
if($device){
	if($device == "PC") $where .= " and vi_os NOT IN('', 'Android', 'iOS') ";
	if($device == "mobile") $where .= " and vi_os IN('Android', 'iOS') ";
}

$total = 0;
$sql = sql_query("select left(vi_date, 4) as vi_date, count(*) as cnt from g5_visit $where $datetime group by left(vi_date, 4) order by left(vi_date, 4) asc");

for($i=0;$row=sql_fetch_array($sql);$i++){
	$json['result'][0][$i]['item'] = $row['vi_date'];
	$json['result'][0][$i]['value'] = $row['cnt'];
	$total += $row['cnt'];
}
$json['total'] = $total;

echo json_encode($json);
?>
