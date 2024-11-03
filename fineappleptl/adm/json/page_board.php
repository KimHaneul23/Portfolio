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
	if($device == "PC") $where .= " and vi_os = 'Windows' ";
	if($device == "mobile") $where .= " and vi_os IN('Android', 'iOS') ";
}
$datetime = "";
if($st_date) $datetime .= " and vi_date >= '{$st_date}' "; 
if($ed_date) $datetime .= " and vi_date <= '{$ed_date}' "; 
if(!$st_date && !$ed_date) $datetime .= " and vi_date = '{$date}' ";

$max = 0;
$max_title = '';

$json = '{"result":[';
for($i=0;$i<count($type);$i++){
	$cnt = 0;
	$new_cnt = 0;
	$old_cnt = 0;
	$timer = 0;
	$online = 0;
	$exit = 0;
	$qry = "select * from g5_visit $where and vi_requri regexp '{$type[$i]}' $datetime ";
	$sql = sql_query($qry);
	for($j=0;$row=sql_fetch_array($sql);$j++){
		$cnt++;
		$cnt_sql = sql_fetch("select count(*) as cnt from g5_visit $where and vi_ip='{$row['vi_ip']}'  group by vi_ip");
		if($cnt_sql['cnt'] > 1) $old_cnt++;
		else $new_cnt++;
		$timer += $row['vi_stay'];
		if($row['vi_stay'] == 0) $exit++;
	
		$where2 = " where 1 = 1 ";
		$datetime2 = "";
		if($st_date) $datetime2 .= " and wr_datetime >= '{$st_date}' "; 
		if($ed_date) $datetime2 .= " and wr_datetime <= '{$ed_date}' "; 
		if(!$st_date && !$ed_date) $datetime2 .= " and date(wr_datetime) = '{$date}' ";
		$online_sql = sql_fetch("select count(*) as cnt from g5_write_db_collect $where2 $datetime2 and wr_2='{$type_text[$i]}'");
		$online = $online_sql['cnt'];
	}

	switch($order){
		case 2: $json_tmp[$i][0] = $new_cnt; break;
		case 3: $json_tmp[$i][0] = $old_cnt; break;
		case 4: 
			if($old_cnt > 0) $json_tmp[$i][0] = round(($old_cnt / $cnt) * 100);
			else $json_tmp[$i][0] = 0;
			break;
		case 5: 
			if($exit > 0) $json_tmp[$i][0] = round(($exit / $cnt) * 100);
			else $json_tmp[$i][0] = 0;
			break;
		case 6: $json_tmp[$i][0] = $timer; break;
		case 7: 
			if($online == null) $json_tmp[$i][0] = 0;
			else $json_tmp[$i][0] = $online;
			 break;
		default : $json_tmp[$i][0] = $type_text[$i]; break;
	}

	if($timer > 0) $time = round($timer / $cnt);
	if($time < 3600) $time = sprintf('%02d',floor($time / 60)).":".sprintf('%02d',($time - (floor($time / 60)*60)));
	else if($time < 60) $time = "00:".sprintf('%02d',$time);
	if($old_cnt > 0) $json_tmp[$i]['old_per'] = round(($old_cnt / $cnt) * 100);
	else $json_tmp[$i]['old_per'] = 0;
	if($exit > 0) $json_tmp[$i]['exit'] = round(($exit / $cnt) * 100);
	else $json_tmp[$i]['exit'] = 0;
	if($online == null) $json_tmp[$i]['online'] = 0;
	else $json_tmp[$i]['online'] = $online;
	$json_tmp[$i]['item'] = $type_text[$i];
	$json_tmp[$i]['page_view'] = $cnt;
	$json_tmp[$i]['new_cnt'] = $new_cnt;
	$json_tmp[$i]['old_cnt'] = $old_cnt;
	$json_tmp[$i]['time'] = $time;

	$json .= '{"0":"'. $json_tmp[$i][0] .'", "old_per":'. $json_tmp[$i]['old_per'] .', "exit":'. $json_tmp[$i]['exit'] .', "online":'. $json_tmp[$i]['online'] .', "item":"'. $json_tmp[$i]['item'] .'", "page_view":'. $json_tmp[$i]['page_view'] .', "new_cnt":'. $json_tmp[$i]['new_cnt'] .', "old_cnt":'. $json_tmp[$i]['old_cnt'] .', "time":"'. $json_tmp[$i]['time'] .'"},';

}
$json = substr($json, 0, -1);
$json .= ']}';
echo $json;
?>