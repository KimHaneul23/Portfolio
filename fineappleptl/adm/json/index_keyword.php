<?php
include_once('./_common.php');
$date = substr(Date('Y-m-d'), 0, 10); // 오늘
$day1 = date("Y-m-d", strtotime($date." -1 day")); // 1일전

//$where = " where 1 = 1 and vi_referer != '' ";
$where = " where 1 = 1 ";
if($st_date) $datetime .= " and vi_date >= '$st_date' ";
if($ed_date) $datetime .= " and vi_date <= '$ed_date' ";
if(!$st_date && !$ed_date) $datetime .= " and vi_date = '$day1' ";
if($device){
	if($device == "PC") $where .= " and vi_os NOT IN('', 'Android', 'iOS') ";
	if($device == "mobile") $where .= " and vi_os IN('Android', 'iOS') ";
}

$limit = 0;
if($page) $limit = ($page - 1) * 10;

// 토탈
//$cnt = sql_query("select vi_referer,count(*) as cnt from g5_visit $where $datetime group by vi_referer order by cnt desc limit 0,20 ");
//$total = sql_num_rows($cnt);

// 총합
//$all = sql_fetch("select sum(cnt) as sum from(select count(*)as cnt from g5_visit $where $datetime group by vi_referer order by cnt desc limit 0,20) cnt2");
$test  = 0;
$cnt= sql_query("select vi_id, substring_Index(substring_Index(substring_Index(vi_referer, 'q=', -1), 'query=', -1), '&', 1) as ref, count(*) as cnt from g5_visit $where $datetime and vi_referer != '' and vi_referer regexp('q=|query=') and vi_referer regexp('naver.com|google.com|nate.com|daum.net') group by ref order by cnt desc limit 0,20");
for($i=0;$row2=sql_fetch_array($cnt);$i++) $test += $row2['cnt'];
// 현재 데이터 10개
//$sql = sql_query("select vi_referer,count(*) as cnt from g5_visit $where $datetime and vi_referer regexp '/search' group by vi_referer");
//$sql = sql_query("SELECT SUBSTRING_INDEX(SUBSTRING_INDEX(SUBSTRING_INDEX(vi_referer, 'query=', -1), 'q=', -1), '&', 1) as vi_referer, count(*) as cnt from g5_visit where 1 = 1 and vi_date >= '2021-04-01' and vi_referer != '' and (vi_referer regexp 'q=|query=' and vi_referer regexp 'google|daum|naver|nate') group by vi_referer");
//$sql = sql_query("select vi_id, substring_Index(substring_Index(substring_Index(vi_referer, 'q=', -1), 'query=', -1), '&', 1) as ref, count(*) as cnt from g5_visit where 1 = 1 and vi_date >= '2021-04-06' and vi_referer != '' and vi_referer regexp('q=|query=') and vi_referer regexp('naver.com|google.com|nate.com|daum.net') group by ref order by cnt desc limit $limit,10");
$sql = sql_query("select vi_id, substring_Index(substring_Index(substring_Index(vi_referer, 'q=', -1), 'query=', -1), '&', 1) as ref, count(*) as cnt from g5_visit $where $datetime and vi_referer != '' and vi_referer regexp('q=|query=') and vi_referer regexp('naver.com|google.com|nate.com|daum.net') group by ref order by cnt desc limit $limit,10");
$top10 = 0;
$word10 = 0;
$cnt = 0;
$result2_cnt = 0;
$result3_cnt = 0;
$page = 0;
$json = array();
$page_num = 0;
for($i=0;$row=sql_fetch_array($sql);$i++){
	$word = preg_replace("/[^가-힣 ]/", "", urldecode($row['ref']));
	$word = iconv("UTF-8", "UTF-8", $word);
	//if($word != '') $word." ".$row['cnt']."<br/>";
	if($word =='') {$word = "알수없음";}
	$json['result'][$i]['date'] =  $word;
	$json['result'][$i]['cnt'] = $row['cnt'];
	$json['result'][$i]['per'] = round(($row['cnt']  / $test) * 100);
}

//$json['total'] = $total;
$json['total'] =  20;
$json['total3'] = $test;

if($i==0) {
	$json['result'][0]['date'] = '키워드가 없습니다.';
	$json['result'][0]['cnt'] = 0;
	$json['result'][0]['per'] = 0;
	$json['total'] =  0;
	$json['total3'] = 0;
}
echo json_encode($json);
?>


