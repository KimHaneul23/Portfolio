<?php
include_once('./_common.php');

//$qry = sql_fetch("select sum(case when vi_os in ('Android', 'iOS') then 1 else 0 end) as mobile, sum(case when vi_os in ('Android', 'iOS') then 0 else 1 end) as pc from g5_visit where vi_date >= '".date('Y-m-d')."' group by vi_date");
$qry = sql_fetch("select sum(case when vi_os in ('Android', 'iOS') then 1 else 0 end) as mobile, sum(case when vi_os in ('Android', 'iOS') then 0 else 1 end) as pc from g5_visit where vi_date BETWEEN DATE_ADD(NOW(),INTERVAL -1 MONTH ) AND NOW() group by vi_date");


$json['result']['0']['0']['item'] = 'PC';
$json['result']['0']['0']['value'] = $qry['pc'];
$json['result']['0']['1']['item'] = 'mobile';
$json['result']['0']['1']['value'] = $qry['mobile'];

echo json_encode($json, JSON_NUMERIC_CHECK);

?>