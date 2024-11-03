<?php
include_once('./_common.php');
$date = substr(Date('Y-m-d'), 0, 10); // 오늘
$day1 = date("Y-m-d", strtotime($date." -1 day")); // 1일전

$day_arr = Array();
if($ed_date){
	for($i=1;$i<=35;$i++){
		$day_arr[$i-1] = date("Y-m-d", strtotime($ed_date." -".(35-$i)." day"));
	}
}else{
	for($i=1;$i<=35;$i++){
		$day_arr[$i-1] = date("Y-m-d", strtotime($date." -".(36-$i)." day"));
	}
}


$where = " where 1 = 1 ";
//if($st_date) $datetime .= " and date(wr_datetime) >= '$st_date' ";
if($ed_date) $datetime .= " and date(wr_datetime) >= date_sub('$ed_date', interval 34 day) and date(wr_datetime) <= '$ed_date' ";
if(!$st_date && !$ed_date) $datetime .= " and date(wr_datetime) >= date_sub('$day1', interval 34 day)  and date(wr_datetime) <= '$day1' ";

if($sta_type){
	if($sta_type == "비용상담") $where .= " and wr_5 = '비용상담' ";
	if($sta_type == "랜딩상담") $where .= " and wr_5='랜딩상담' ";
}
if($device){
	if($device == "PC") $where .= " and wr_10 = 'PC' ";
	if($device == "mobile") $where .= " and wr_10 = '모바일' ";
}

$sql = sql_query("select date(wr_datetime) as wr_datetime, count(*) as cnt from g5_write_db_collect $where $datetime group by date(wr_datetime) order by date(wr_datetime) asc");
//echo "select date(wr_datetime) as wr_datetime, count(*) as cnt from g5_write_db_collect $where $datetime group by date(wr_datetime) order by date(wr_datetime) asc";
$cnt = 0;
$tot_cnt = 0; // Chart bar seq
$sub_cnt = 0; // 주 계산
$lable = ''; // 날자 담음
$while_cnt = 0;
for($i=0;$row=sql_fetch_array($sql);$i++){
	while($row['wr_datetime'] != $day_arr[$while_cnt]){ // 쿼리의 날짜가 비교 날짜랑 없으면
		$sub_cnt++;
		if($sub_cnt % 7 != 0 ) {
			if($sub_cnt == 1) $label = $day_arr[$while_cnt].' ~ ';
		}else{
			$json['result'][0][$tot_cnt]['num'] = $label.$day_arr[$while_cnt];
			$json['result'][0][$tot_cnt]['value'] = $cnt;
			$json['result'][0][$tot_cnt]['item'] = $tot_cnt+1;
			$sub_cnt = 0;
			$tot_cnt++;
			$label = '';
			$cnt = 0;
		}
		$while_cnt++;
	}
	$sub_cnt++; // 주를 계산

	if($sub_cnt % 7 != 0){ // 일이 7개가 아니면(한주로 묶지못하면) 
		if($sub_cnt == 1) $label = $row['wr_datetime'].' ~ ';
		$cnt += $row['cnt'];
	}else{
		$cnt += $row['cnt'];
		$json['result'][0][$tot_cnt]['num'] = $label.$row['wr_datetime'];
		$json['result'][0][$tot_cnt]['value'] = $cnt;
		$json['result'][0][$tot_cnt]['item'] = $tot_cnt+1;
		$sub_cnt = 0;
		$tot_cnt++;
		$label = '';
		$cnt = 0;
	}
	$total += $row['cnt'];
	$while_cnt++;
}

// 이후 데이터 계산
if(count($json['result'][0]) < 5){ // 주가 5개가 안되면	
	while($while_cnt < 35){ // 여기서부터 안됨
		$sub_cnt++;
		if($sub_cnt % 7 != 0 ) {
			if($sub_cnt == 1) $label =  $day_arr[$while_cnt].' ~ ';
		}else{
			$json['result'][0][$tot_cnt]['num'] = $label.$day_arr[$while_cnt];
			$json['result'][0][$tot_cnt]['value'] = $cnt;
			$json['result'][0][$tot_cnt]['item'] = $tot_cnt+1;
			$sub_cnt = 0;
			$tot_cnt++;
			$label = '';
			$cnt = 0;
		}
		$while_cnt++;
	}
}

/*1.count(josn{result}[0]) < 5 개보다 작으면  추가 if문
2. for문 다섯번 돌리고 for(i<5) if(!json[result][0][i]) 이 안에서 while문
3.while의 조건 ($while_cnt != 7) 그안에
4.$sub_cnt++;
		if($sub_cnt % 7 != 0 ) {
			if($sub_cnt == 1) $label = $day_arr[$while_cnt].' ~ '; //label =  ($i X 7) - (7 - $while_cnt)
		}else{
			$json['result'][0][$tot_cnt]['num'] = $label.$day_arr[$while_cnt];
			$json['result'][0][$tot_cnt]['value'] = $cnt;
			$json['result'][0][$tot_cnt]['item'] = $tot_cnt+1;
			$sub_cnt = 0;
			$tot_cnt++;
			$label = '';
			$cnt = 0;
		}
		$while_cnt++;
5. 그안에서 에러가남
*/

$json['total'] = $total;

echo json_encode($json, JSON_NUMERIC_CHECK);
?>
