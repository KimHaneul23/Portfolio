<?php
include_once('./_common.php');
$year = substr($ed_date, 0, 4);

if($sta_type == "비용상담") $where .= " and wr_5 = '비용상담' ";
if($sta_type == "랜딩상담") $where .= " and wr_5 = '랜딩상담' ";

if($device == "PC") $where .= " and wr_10 = 'PC' ";
if($device == "mobile") $where .= " and wr_10 = '모바일' ";


$sql = "select left(wr_datetime, 7) as month, count(*) as cnt from g5_write_db_collect where ( left(wr_datetime, 4) = '{$year}' ||  left(wr_datetime, 4) = '".($year-1)."') $where group by left(wr_datetime, 7) order by wr_datetime asc";
$qry = sql_query($sql);
for($i=0;$cnt = sql_fetch_array($qry);$i++){
	if(substr($cnt['month'], 0, 4) == $year) $tmp_i = 1;
	else $tmp_i = 0;
	$tmp2[ $tmp_i ][ substr($cnt['month'], 5, 2) ] = $cnt['cnt'];
	$cnt2 = $cnt['cnt']++;
}

for($i=1;$i<=12;$i++) {
	$month = str_pad($i, 2, 0, STR_PAD_LEFT);
	$json_tmp0[($i-1)]['item'] = $month.'월';
	$json_tmp0[($i-1)]['value']  = 0;

	$json_tmp1[($i-1)]['item'] = $month.'월';	
	$json_tmp1[($i-1)]['value']  = 0;

	if($tmp2[0][$month]) $json_tmp0[($i-1)]['value']  = $tmp2[0][$month];
	if($tmp2[1][$month]) $json_tmp1[($i-1)]['value']  = $tmp2[1][$month];
}
	$json['result'][] = $json_tmp0;
	$json['result'][] = $json_tmp1;
	$json['total'] = $cnt2;
	$json['year'] = $year.'-01-01';
echo json_encode($json, JSON_NUMERIC_CHECK);

?>