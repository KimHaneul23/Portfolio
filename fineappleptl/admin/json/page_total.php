<?php
include_once('./_common.php');

$sql = sql_query("select me_code, me_name from g5_menu where length(me_code) = 2 and me_code > 10 and me_code < 100 order by me_code asc");
for($i=0;$me = sql_fetch_array($sql);$i++) {
	$type_text[] = $me['me_name'];
	$me_cd[] = $me['me_code'];
}

for($i=0;$i<count($type_text);$i++){
	$qry2 = "select me_code, me_link, me_name from g5_menu where left(me_code, 2) = '".$me_cd[$i]['me_code']."0' and length(me_code) = 4 order by me_code asc";
	$sql2 = sql_query($qry2);
	$data_val = '';
	$data_name = '';
	for($j=0;$me2 = sql_fetch_array($sql2);$j++){
		$me_name[] = $me2['me_name'];
		$me_link[] = $me2['me_link'];
		$data_val .= str_replace('.php', '', str_replace(G5_URL.'/subpage/', '', $me2['me_link'])).'|';
	}
	$type[] = substr($data_val, 0, -1);
}

$date = Date("Y-m-d");
$where = " where 1 = 1 ";
if($device){
	if($device == "PC") $where .= " and vi_os NOT IN('', 'Android', 'iOS') ";
	if($device == "mobile") $where .= " and vi_os IN('Android', 'iOS') ";
}
$datetime = "";
if($st_date) $datetime .= " and vi_date >= '{$st_date}' "; 
if($ed_date) $datetime .= " and vi_date <= '{$ed_date}' "; 
if(!$st_date && !$ed_date) $datetime .= " and vi_date = '{$date}' ";

$max = 0;
$max_title = '';
for($i=0;$i<count($type);$i++){
	$cnt = 0;
	$sql = sql_query("select count(*) as cnt from g5_visit $where and vi_requri regexp '{$type[$i]}' $datetime  group by vi_date");
	for($j=0;$row=sql_fetch_array($sql);$j++){
		$cnt += $row['cnt'];
	}
	if($max < $cnt) {
		$max_title = $type_text[$i];
		$max = $cnt;
	}
}
// 페이지 조회 수
if($max > 0){
	$json['result'][0]['item'] = $max_title;
	$json['result'][0]['value'] = $max;
}else{
	$json['result'][0]['item'] = "-";
	$json['result'][0]['value'] = 0;
}

$max = 0;
$where = " where 1 = 1 ";
if($device){
	if($device == "PC") $where .= " and vi_os NOT IN('', 'Android', 'iOS') ";
	if($device == "mobile") $where .= " and vi_os IN('Android', 'iOS') ";
}
$datetime = "";
if($st_date) $datetime .= " and vi_date >= '{$st_date}' "; 
if($ed_date) $datetime .= " and vi_date <= '{$ed_date}' "; 
if(!$st_date && !$ed_date) $datetime .= " and vi_date = '{$date}' ";
$new_max = 0;
$new_max_title = '';
$old_max = 0;
$old_max_title = '';
for($i=0;$i<count($type);$i++){
	$new_cnt = 0;
	$old_cnt = 0;
	$tot_cnt = 0;
	$sql = sql_query("select * from g5_visit $where and vi_requri regexp '{$type[$i]}' $datetime ");
	for($j=0;$row=sql_fetch_array($sql);$j++){
		$tot_cnt++;
		$sql2 = sql_fetch("select count(*) as cnt from g5_visit $where and vi_ip='{$row['vi_ip']}'  group by vi_ip");
		if($sql2['cnt'] > 1){
			$old_cnt++;
		}else $new_cnt++;
	}
	if($new_max < $new_cnt) {
		$new_max_title = $type_text[$i];
		$new_max = $new_cnt;
	}
	if($old_max < $old_cnt) {
		$old_max_title = $type_text[$i];
		$old_max = $old_cnt;
		$old_per = round(($old_cnt / $tot_cnt) * 100);
	}
}
// 신규 방문자 수
if($new_max > 0){
	$json['result'][1]['item'] = $new_max_title;
	$json['result'][1]['value'] = $new_max;
}else{
	$json['result'][1]['item'] = "-";
	$json['result'][1]['value'] = 0;
}
// 재 방문자 수
if($old_max > 0){
	$json['result'][2]['item'] = $old_max_title;
	$json['result'][2]['value'] = $old_max;
	$json['result'][2]['per'] = $old_per;
}else{
	$json['result'][2]['item'] = "-";
	$json['result'][2]['value'] = 0;
}


$max = 0;
$where = " where 1 = 1 ";
if($device){
	if($device == "PC") $where .= " and vi_os NOT IN('', 'Android', 'iOS') ";
	if($device == "mobile") $where .= " and vi_os IN('Android', 'iOS') ";
}
$datetime = "";
if($st_date) $datetime .= " and vi_date >= '{$st_date}' "; 
if($ed_date) $datetime .= " and vi_date <= '{$ed_date}' "; 
if(!$st_date && !$ed_date) $datetime .= " and vi_date = '{$date}' ";
for($i=0;$i<count($type);$i++){
	$cnt = 0;
	$sql = sql_query("select vi_date, vi_stay from g5_visit $where and vi_requri regexp '{$type[$i]}' $datetime ");
	$tot_cnt = 0;
	for($j=0;$row=sql_fetch_array($sql);$j++){
		$tot_cnt++;
		$cnt += $row['vi_stay'];
	}
	if($tot_cnt > 0){
		if($max < round($cnt / $tot_cnt)) {
			$max_title = $type_text[$i];
			$max = round($cnt / $tot_cnt);
		}
	}
}
// 페이지 별 체류시간
if($max > 0){
	$json['result'][3]['item'] = $max_title;
	if($max < 3600) $max = sprintf('%02d',floor($max / 60)).":".sprintf('%02d',($max - (floor($max / 60)*60)));
	else if($max < 60) $max = "00:".sprintf('%02d',$max);

	$json['result'][3]['value'] = $max;
}else{
	$json['result'][3]['item'] = "-";
	$json['result'][3]['value'] = 0;
}


$tot_cnt = 0;
$cnt = 0;
$where = " where vi_requri not regexp 'admin|plugin'";
if($device){
	if($device == "PC") $where .= " and vi_os NOT IN('', 'Android', 'iOS') ";
	if($device == "mobile") $where .= " and vi_os IN('Android', 'iOS') ";
}
$datetime = "";
if($st_date) $datetime .= " and vi_date >= '{$st_date}' "; 
if($ed_date) $datetime .= " and vi_date <= '{$ed_date}' "; 
if(!$st_date && !$ed_date) $datetime .= " and vi_date = '{$date}' ";


// 데이터
for($i=0;$i<count($type);$i++) $type2 = $type[$i].'|';
$type2 = substr($type2, 0, -1);
$sql = "select vi_requri, sum(case when vi_stay = 0 then 1 else 0 end) as stay1, sum(case when vi_stay > 0 then 1 else 0 end) as stay2, count(*) as cnt from g5_visit where 1=1 $datetime and vi_requri regexp '".$type2."' group by vi_requri order by stay1 desc limit 1";
$qry = sql_fetch($sql);

for($i=0;$i<count($me_link);$i++) {
	if(strpos($me_link, $qry['vi_requri']) !== false) $name = $me_name[$i];
	else if($qry['vi_requri'] == '/') $name = '메인페이지';
	else $name = $qry['vi_requri'];
}

$json['result'][4]['item'] = $name;
$json['result'][4]['value'] = round(($qry['stay1'] / ($qry['stay1'] + $qry['stay2']) ) * 100, 2);


$type_text_tmp = Array('모티바가슴성형', '멘토가슴성형', '세빈 인테그리티', '가슴재수술', '가슴축소', '출산후가슴성형');
$max = 0;
$where = " where 1 = 1 ";
if($device){
	if($device == "PC") $where .= " and wr_10 = 'PC' ";
	if($device == "mobile") $where .= " and wr_10 = '모바일' ";
}
$datetime = "";
if($st_date) $datetime .= " and wr_datetime >= '{$st_date}' "; 
if($ed_date) $datetime .= " and wr_datetime <= '{$ed_date}' "; 
if(!$st_date && !$ed_date) $datetime .= " and date(wr_datetime) = '{$date}' ";
for($i=0;$i<count($type);$i++){
	$sql = sql_fetch("select count(*) as cnt from g5_write_db_collect $where $datetime and wr_2='{$type_text[$i]}'");
	if($max < $sql['cnt']){
		$max = $sql['cnt'];
		$max_title = $type_text[$i];
	}
}
// 온라인상담 신청건수
if($max > 0){
	$json['result'][5]['item'] = $max_title;
	$json['result'][5]['value'] = $max;
}else{
	$json['result'][5]['item'] = "-";
	$json['result'][5]['value'] = 0;
}

echo json_encode($json, JSON_NUMERIC_CHECK);
?>