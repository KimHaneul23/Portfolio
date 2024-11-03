<?php
include_once('./_common.php');
$day = date("Y-m-d"); // 오늘
$day1 = date("Y-m-d", strtotime($day." -1 day")); // 1일전
$day7 = date("Y-m-d", strtotime($day." -7 day")); // 7일전

$day_arr = Array();
for($i=1;$i<=7;$i++){
	$day_arr[$i-1] = date("Y-m-d", strtotime($day." -".(8-$i)." day"));
}

// 7일치 신청 내역
$select ="select wr_4,left(wr_datetime, 10) as wr_datetime,count(wr_datetime) as cnt ";
$from = "from g5_write_db_collect ";
$where ="where wr_4 ='신청' and date(wr_datetime) >= '{$day7}' and date(wr_datetime) <= '{$day1}' ";
$group_by = "group by(date(wr_datetime)) order by wr_datetime asc";
$sql = sql_query($select.$from.$where.$group_by);
$test = $select.$from.$where.$group_by;
/*echo $sql; 
echo "<br>";
Array('1', '2');
// 7일치 내원 내역
$select2 ="select wr_4,wr_datetime,count(wr_datetime) ";
$from2 = "from g5_write_db_collect ";
$where2 ="where wr_4 ='내원' and date(wr_datetime) >='{$day7}' and date(wr_datetime) <= '{$day1}' ";
$group_by2 = "group by(date(wr_datetime))";
$sql2 = $select2.$from2.$where2.$group_by2;

echo $sql2; */
$while_cnt = 0;
$tot_cnt = 0;
$date_tmp = '';
for($i=0;$row=sql_fetch_array($sql);$i++){
	while($row['wr_datetime'] != $day_arr[$while_cnt]){
		$json['result'][0][$while_cnt]['item'] = $day_arr[$while_cnt];
		$json['result'][0][$while_cnt]['value'] = 0;

		$select ="select wr_4,wr_datetime,count(wr_datetime) as cnt ";
		$from = "from g5_write_db_collect ";
		$where ="where wr_4 ='내원' and date(wr_datetime) = '{$day_arr[$while_cnt]}' ";
		$group_by = "group by(date(wr_datetime)) order by wr_datetime asc";
		$sql2 = $select.$from.$where.$group_by;
		$result2 = sql_fetch($sql2);

		$json['result'][1][$while_cnt]['item'] = $day_arr[$while_cnt];
		if($result2) $json['result'][1][$while_cnt]['value'] = $result2['cnt'];
		else $json['result'][1][$while_cnt]['value'] = 0;
		$while_cnt++;
	}
	$json['result'][0][$while_cnt]['item'] = $row['wr_datetime'];
	$json['result'][0][$while_cnt]['value'] = $row['cnt'];

	$select ="select wr_4,wr_datetime,count(wr_datetime) as cnt ";
	$from = "from g5_write_db_collect ";
	$where ="where wr_4 ='내원' and date(wr_datetime) = '{$row['wr_datetime']}' ";
	$group_by = "group by(date(wr_datetime)) order by wr_datetime asc";
	$sql2 = $select.$from.$where.$group_by;
	$result2 = sql_fetch($sql2);

	$json['result'][1][$while_cnt]['item'] = $day_arr[$while_cnt];
	if($result2) $json['result'][1][$while_cnt]['value'] = $result2['cnt'];
	else $json['result'][1][$while_cnt]['value'] = 0;
	$while_cnt++;
}

if($while_cnt < 7){
	for($i=$while_cnt; $i < 7; $i++){
		$select ="select wr_4,wr_datetime,count(wr_datetime) as cnt ";
		$from = "from g5_write_db_collect ";
		$where ="where wr_4 ='내원' and date(wr_datetime) = '{$row['wr_datetime']}' ";
		$group_by = "group by(date(wr_datetime)) order by wr_datetime asc";
		$sql2 = $select.$from.$where.$group_by;
		$result2 = sql_fetch($sql2);

		$json['result'][1][$while_cnt]['item'] = $day_arr[$while_cnt];
		if($result2) $json['result'][1][$while_cnt]['value'] = $result2['cnt'];
		else $json['result'][1][$while_cnt]['value'] = 0;
		
		$select ="select wr_4,wr_datetime,count(wr_datetime) as cnt ";
		$from = "from g5_write_db_collect ";
		$where ="where wr_4 ='신청' and date(wr_datetime) = '{$row['wr_datetime']}' ";
		$group_by = "group by(date(wr_datetime)) order by wr_datetime asc";
		$sql3 = $select.$from.$where.$group_by;
		$result3 = sql_fetch($sql3);

		$json['result'][0][$while_cnt]['item'] = $day_arr[$while_cnt];
		if($result3) $json['result'][0][$while_cnt]['value'] = $result3['cnt'];
		else $json['result'][0][$while_cnt]['value'] = 0;
		$while_cnt++;
	}
}
$json['sql'] = $test;
echo json_encode($json);
?>
