<?php
include_once('./_common.php');
//신규방문자
$sql1 = "select count(c.vi_ip) as cnt from (select vi_ip from g5_visit group by vi_ip having count(vi_ip) = 1) as c";
$count1 = sql_fetch($sql1);

//재방문자
$sql2 = "select count(c.vi_ip) as cnt from (select vi_ip from g5_visit group by vi_ip having count(vi_ip) > 1) as c";
$count2 = sql_fetch($sql2);

$json = array();
$json['result']['0']['item'] = '재방문자';
$json['result']['0']['value'] = $count1['cnt'];
$json['result']['1']['item'] = '신규방문자';
$json['result']['1']['value'] = $count2['cnt'];

echo json_encode($json);

?>