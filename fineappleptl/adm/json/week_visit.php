<?php
include_once('./_common.php');
$date = substr(Date('Y-m-d'), 0, 10);
$where = " where 1 = 1 ";
if($st_date) $datetime .= " and vi_date >= '$st_date' ";
if($ed_date) $datetime .= " and vi_date <= '$ed_date' ";
if(!$st_date && !$ed_date) $datetime .= " and vi_date >= date_sub('$date', interval 34 day) ";
if($device){
	if($device == "PC") $where .= " and vi_os = 'Windows' ";
	if($device == "mobile") $where .= " and vi_os IN('Android', 'iOS') ";
}
$qry = "select vi_date, yearweek(vi_date, 1) as week, count(*) as cnt from g5_visit $where $datetime group by yearweek(vi_date, 1) order by vi_date asc limit 5";
$sql = sql_query($qry);
for($i=0;$row=sql_fetch_array($sql);$i++){
	$w_day = get_monday_sunday(substr($row['week'], 0, 4), substr($row['week'], 4, 2));
	$json['result'][0][$i]['num'] = $w_day['mon'].'~'.$w_day['sun'];
	$json['result'][0][$i]['value'] = $row['cnt'];
	$json['result'][0][$i]['item'] = $i+1;
	$total += $row['cnt'];
}
$json['total'] = $total;

echo json_encode($json);

function get_monday_sunday($year, $week){
  for($i=1; $i<=7; $i++){
    $first_week_day = mktime(0, 0, 0, 1, $i, $year);

    if(date('W', $first_week_day) == 1){
      $first_monday = $i;
      $first_sunday = $i + 6;
      break;
    }
  }

  $week_day['mon'] = date('Y-m-d', mktime(0, 0, 0, 1, $first_monday + 7*($week - 1), $year));
  $week_day['sun'] = date('Y-m-d', mktime(0, 0, 0, 1, $first_sunday + 7*($week - 1), $year));

  return $week_day;
}
?>