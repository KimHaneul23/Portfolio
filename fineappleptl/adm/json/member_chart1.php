<?php
include_once('./_common.php');
$today = date('Y-m-d');
$yesterday = date("Y-m-d", strtotime($today." -1 day")); // 하루전
$month3 = date("Y-m-d", strtotime($today." -3 month")); // 세달전

$sql ="select mb_4,count(*) as cnt from g5_member where date(mb_datetime) >='{$month3}' and date(mb_datetime) <= '{$today}' and mb_4 != '' group by mb_4 ";
$result = sql_query($sql);
$json = '{"result":[[';
for ($i=0; $row=sql_fetch_array($result); $i++){
	$json .= '{"item":"'.$row['mb_4'].'","value":'.$row['cnt'].'},';
}
$json = substr($json,0,-1);
$json .= ']]}';

if($i == 0) {
	$json = '{"result":[[{"item":"가슴재수술","value":"0"},{"item":"가슴축소","value":"0"},{"item":"멘토 가슴성형","value":"0"},{"item":"모티바가슴성형","value":"0"},{"item":"세빈 인테그리티","value":"0"},{"item":"출산후 가슴성형","value":"0"}]]}';
}
echo $json;
?>
