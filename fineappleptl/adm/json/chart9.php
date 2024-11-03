<?php
include_once('./_common.php');
$json = array();
$sql = "select * from g5_visit_sum where vs_date >= '2020-02-01' and vs_date <= '2020-02-31'";
$qry = sql_query($sql);
for($i=0;$vi_count = sql_fetch_array($qry);$i++){
	$json['result']['0'][$i]['item'] = $vi_count['vs_date'];
	$json['result']['0'][$i]['value'] = (int)$vi_count['vs_count'];
}
echo json_encode($json);

?>