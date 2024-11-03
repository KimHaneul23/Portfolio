<?php
include_once('./_common.php');
$sql = sql_query("select me_code, me_name from g5_menu where length(me_code) = 2 and me_code > 10 and me_code < 100 order by me_code asc");
for($i=0;$me = sql_fetch_array($sql);$i++) {
	$type_text[] = $me['me_name'];
	$me_cd[] = $me['me_code'];
}

for($i=0;$i<count($type_text);$i++){
	$qry2 = "select me_code, me_link, me_name from g5_menu where left(me_code, 2) = '".@$me_cd[$i]['me_code']."0' and length(me_code) = 4 order by me_code asc";
	$sql2 = sql_query($qry2);
	$data_val = '';
	$data_name = '';
	for($j=0;$me2 = sql_fetch_array($sql2);$j++){
		$data_val .= str_replace('.php', '', str_replace(G5_URL.'/sub/', '', $me2['me_link'])).'|';
	}
	$type[] = substr($data_val, 0, -1);
}

$date = Date("Y-m-d");
$where = " where 1 = 1 ";
if($device){
	if($device == "PC") $where .= " and vi_os = 'Windows'";
	if($device == "mobile") $where .= " and vi_os IN('Android', 'iOS') ";
}
$datetime = "";
if($st_date) $datetime .= " and vi_date >= '{$st_date}' "; 
if($ed_date) $datetime .= " and vi_date <= '{$ed_date}' "; 
if(!$st_date && !$ed_date) $datetime .= " and vi_date = '{$date}' ";
$json = '{"result":[[';
for($i=0;$i<count($type_text);$i++) {
	$result_tmp[$i]['item'] = $type_text[$i];
	$qry = "select count(*) as cnt from g5_visit $where and vi_requri regexp '{$type[$i]}' $datetime";
	$cnt = sql_fetch($qry);
	$result_tmp[$i]['value'] = 0;
	if($cnt['cnt']) $result_tmp[$i]['value'] = $cnt['cnt'];
	
	$json .= '{"item":"'.$result_tmp[$i]['item'].'", "value":'.$result_tmp[$i]['value'].'},';
}
$json = substr($json, 0, -1);
$json .= ']]}';
echo $json;
?>