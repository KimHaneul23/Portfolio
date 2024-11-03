<?php
include_once('./_common.php');
$date = substr(Date('Y-m-d'), 0, 10); // 오늘 
$day1 = date("Y-m-d", strtotime($date." -1 day")); // 1일전
$week_cnt = date('w', strtotime($date));

$where = " where 1 = 1 ";
if($st_date) $datetime .= " and date(wr_datetime) >= '".$st_date."' ";
if($ed_date) $datetime .= " and date(wr_datetime) <='".$ed_date."' ";
if(!$st_date && !$ed_date) $datetime .= " and date(wr_datetime)  >= date_sub('".$day1."', interval ".$week_cnt." day) and date(wr_datetime)  <= date_add('".$day1."', interval ".(6-$week_cnt)." day)";
if($sta_type){
	if($sta_type == "비용상담") $where .= " and wr_5 = '비용상담' ";
	if($sta_type == "랜딩상담") $where .= " and wr_5='랜딩상담' ";
}
if($device){
	if($device == "PC") $where .= " and wr_10 = 'PC' ";
	if($device == "mobile") $where .= " and wr_10 = '모바일' ";
}

//$sql = sql_query("select vi_date, count(*) as cnt from g5_visit $where $datetime group by vi_date order by vi_date desc");
$sql = "select date(wr_datetime) as wr_date_time, count(*) as cnt from g5_write_db_collect $where $datetime group by date(wr_datetime) order by date(wr_datetime) desc";
$qry = sql_query($sql);

$total = 0;
$week = '';
$max = 0;
$while = false;
for($i=0;$row=sql_fetch_array($qry);$i++){
	if($max < $row['cnt']) $max = $row['cnt'];
	$time_cnt = date('w', strtotime($row['wr_date_time']));
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
sort($json_tmp);

$json = '{"result":[[';
for($i=0;$i<count($json_tmp);$i++) 
	$json .= '{"index":"'.$json_tmp[$i]['index'].'", "item":"'.$json_tmp[$i]['item'].'", "value":"'.$json_tmp[$i]['value'].'"},';

$json = substr($json, 0, -1);
$json .= ']],"total":"'.$total.'"}';
echo $json;
?>