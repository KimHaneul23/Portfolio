<?php
include_once('./_common.php');

// 누적 방문자
$sql1 = "select sum(vs_count) as count from g5_visit_sum";
$result1 = sql_fetch($sql1);

// 전일 방문자
$sql2 = "select vs_count from g5_visit_sum where vs_date='{$_POST['yesterday']}'";
$result2 = sql_fetch($sql2);

// 오늘 방문자
$sql3 ="select vs_count from g5_visit_sum where vs_date='{$_POST['today']}'";
$result3 = sql_fetch($sql3);

// 전월 방문자
$sql4 = "select vs_count from g5_visit_sum where vs_date='{$_POST['one_month']}'";
$result4 = sql_fetch($sql4);

// 3개월전 방문자
$sql5 = "select vs_count from g5_visit_sum where vs_date='{$_POST['three_month']}'";
$result5 = sql_fetch($sql5);

// 신규 방문자
$qry = sql_query("select vi_ip, vi_date, count(*) as cnt from g5_visit WHERE vi_date BETWEEN DATE_ADD(NOW(),INTERVAL -2 day ) AND NOW() group by vi_date, vi_ip");
$become[] = "";
for($i=0;$row=sql_fetch_array($qry);$i++) {
	if(array_search($row['vi_ip'], $become) === false) $cnt2++;
	else $cnt1++;
	$become[] = $row['vi_ip'];
	
}
$result6 = $cnt1;
$result7 = $cnt2;

$json = '{"result":[';
$json .= '{"total":"'.$result1['count'].'","yesterday":"'.$result2['vs_count'].'", "today":"'.$result3['vs_count'].'", "one_month":"'.$result4['vs_count'].'", "three_month":"'.$result5['vs_count'].'","new_mb":"'.$cnt1.'","returning":"'.$cnt2.'"}';
$json .= ']}';

echo $json;
?>
