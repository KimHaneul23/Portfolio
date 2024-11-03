<?php
include_once('./_common.php');

$date = substr(Date('Y-m-d'), 0, 10);
$week_cnt = date('w', strtotime($date));
$where = " where 1 = 1 ";
if($st_date) $datetime .= " and vi_date >= '".$st_date."' ";
if($ed_date) $datetime .= " and vi_date <= '".$ed_date."' ";
if(!$st_date && !$ed_date) $datetime .= " and vi_date >= date_sub('".$date."', interval ".$week_cnt." day) and vi_date <= date_add('".$date."', interval ".(6-$week_cnt)." day)";
if($device){
	if($device == "PC") $where .= " and vi_os NOT IN('', 'Android', 'iOS') ";
	if($device == "mobile") $where .= " and vi_os IN('Android', 'iOS') ";
}

$sql = sql_query("select vi_date, count(*) as cnt from g5_visit $where $datetime group by vi_date order by vi_date desc");

$total = 0;
$week = '';
$max = 0;
$while = false;
for($i=0;$row=sql_fetch_array($sql);$i++){
	if($max < $row['cnt']) $max = $row['cnt'];
	$time_cnt = date('w', strtotime($row['vi_date']));
	switch($time_cnt){
		case 1: $week = '월'; break;
		case 2: $week = '화'; break;
		case 3: $week = '수'; break;
		case 4: $week = '목'; break;
		case 5: $week = '금'; break;
		case 6: $week = '토'; break;
		default: $week = '일'; break;
	}
	//if($time_cnt == 0) $time_cnt = 7;
	$json_tmp[$time_cnt]['index'] = $time_cnt;
	$json_tmp[$time_cnt]['item'] = $week;
	$json_tmp[$time_cnt]['value'] += $row['cnt'];
	$total += $row['cnt'];
}

if(count($json_tmp) != 7){
	for($i=0;$i<7;$i++){
		$cnt = $i;
		//if($i == 0) $cnt = 7;
		if($json_tmp[$cnt]['item'] == ""){
			switch($i){
				case 1: $week = '월'; break;
				case 2: $week = '화'; break;
				case 3: $week = '수'; break;
				case 4: $week = '목'; break;
				case 5: $week = '금'; break;
				case 6: $week = '토'; break;
				default: $week = '일'; break;
			}
			$json_tmp[$cnt]['index'] = $cnt;
			$json_tmp[$cnt]['item'] = $week;
			$json_tmp[$cnt]['value'] = 0;
		}
	}
}
$json = '{"result":[[';
for($i=0;$i<count($json_tmp);$i++) $json .= '{"index":"'.$json_tmp[$i]['index'].'", "item":"'.$json_tmp[$i]['item'].'", "value":"'.$json_tmp[$i]['value'].'"},';
$json = substr($json, 0, -1);
$json .= ']],"total":"'.$total.'"}';
echo $json;
?>