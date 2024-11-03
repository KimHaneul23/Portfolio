<?php
include_once('./_common.php');

$date = Date("Y-m-d");
//$date = Date("Y-m-d", strtotime($date." -1 day"));
$where = " where 1 = 1";
if($type) $where .= " and vi_requri regexp '$type' ";
if($device){
	if($device == "PC") $where .= " and vi_os NOT IN('', 'Android', 'iOS') ";
	if($device == "mobile") $where .= " and vi_os IN('Android', 'iOS') ";
}
$datetime = "";
if($st_date) $datetime .= " and vi_date >= '{$st_date}' "; 
if($ed_date) $datetime .= " and vi_date <= '{$ed_date}' "; 
if(!$st_date && !$ed_date) $datetime .= " and vi_date = '{$date}' ";
if($page) $page = ($page - 1) * 10;
else $page = 0;

$sql = "select vi_referer, count(*) as cnt from g5_visit $where $datetime group by left(vi_referer, 50) order by cnt $order";
$tot_cnt = sql_num_rows(sql_query($sql));

$sql = "select count(*) as cnt from g5_visit $where $datetime";
$tot2_cnt = sql_fetch($sql);

$sql = "select vi_referer, count(*) as cnt from g5_visit $where $datetime group by left(vi_referer, 50) order by cnt $order limit $page, 10";
$qry = sql_query($sql);
//and left(vi_referer, ".strlen(G5_URL).") = '".G5_URL."'"
for($i=0;$row=sql_fetch_array($qry);$i++){
	$json['result'][$i]['referer'] = $row['vi_referer'];
	if($json['result'][$i]['referer'] == '') $json['result'][$i]['referer'] = '-';
	$json['result'][$i]['cnt'] = $row['cnt'];
	
	$cnt = $cnt + $row['cnt'];
}

$sql = "select vi_referer, count(*) as cnt from g5_visit $where and left(vi_referer, ".strlen(G5_URL).") != '".G5_URL."' $datetime group by left(vi_referer, 30) order by cnt $order limit 0, 10";
$qry = sql_query($sql);

for($i=0;$row=sql_fetch_array($qry);$i++){
	if($row['vi_referer'] == '') $json['result2'][$i]['referer'] = 'direct';
	else if(strpos($row['vi_referer'], 'search.yahoo.com') !== false) $json['result2'][$i]['referer'] = '야후 / 검색';
	else if(strpos($row['vi_referer'], 'br.nate.com') !== false) $json['result2'][$i]['referer'] = '네이트 / 링크';
	else if(strpos($row['vi_referer'], 'm.search.naver.com') !== false) $json['result2'][$i]['referer'] = '네이버 / 모바일 검색';
	else if(strpos($row['vi_referer'], 'm.ad.search.naver.com') !== false) $json['result2'][$i]['referer'] = '네이버 / 모바일 광고';
	else if(strpos($row['vi_referer'], 'ad.search.naver.com') !== false) $json['result2'][$i]['referer'] = '네이버 / 광고';
	else if(strpos($row['vi_referer'], 'search.naver.com') !== false) $json['result2'][$i]['referer'] = '네이버 / 검색';
	else if(strpos($row['vi_referer'], 'cafe.naver.com') !== false) $json['result2'][$i]['referer'] = '네이버 / 카페';
	else if(strpos($row['vi_referer'], 'blog.naver.com') !== false) $json['result2'][$i]['referer'] = '네이버 / 블로그';
	else if(strpos($row['vi_referer'], 'adrc.naver.com') !== false) $json['result2'][$i]['referer'] = '네이버 / 광고';
	else if(strpos($row['vi_referer'], 'nid.naver.com') !== false) $json['result2'][$i]['referer'] = '네이버 / 소셜로그인';    
	else if(strpos($row['vi_referer'], 'search.daum.net') !== false) $json['result2'][$i]['referer'] = '다음 / 검색';
	else if(strpos($row['vi_referer'], 'cafe.daum.com') !== false) $json['result2'][$i]['referer'] = '다음 / 카페';
	else if(strpos($row['vi_referer'], 'www.google.com') !== false) $json['result2'][$i]['referer'] = '구글 / 검색';
    else if(strpos($row['vi_referer'], 'www.youtube.com') !== false) $json['result2'][$i]['referer'] = '유튜브 / 검색';
	else $json['result2'][$i]['referer'] = '일반유입('.$row['vi_referer'].')';

	$json['result2'][$i]['referer2'] = $row['vi_referer'];
	$json['result2'][$i]['cnt'] = $row['cnt'];
	
	$cnt2 = $cnt2 + $row['cnt'];
}

$sql = "select vi_referer, count(*) as cnt from g5_visit $where and left(vi_referer, ".strlen(G5_URL).") != '".G5_URL."' and vi_referer regexp 'q=|query=' $datetime group by left(vi_referer, 30) order by cnt $order limit 0, 10";
$qry = sql_query($sql);

for($i=0;$row=sql_fetch_array($qry);$i++){
	if($row['vi_referer'] == '') $json['result3'][$i]['referer'] = 'direct';
	else if(strpos($row['vi_referer'], 'search.yahoo.com') !== false) $json['result3'][$i]['referer'] = '야후 / 검색';
	else if(strpos($row['vi_referer'], 'br.nate.com') !== false) $json['result3'][$i]['referer'] = '네이트 / 링크';
	else if(strpos($row['vi_referer'], 'm.search.naver.com') !== false) $json['result3'][$i]['referer'] = '네이버 / 모바일 검색';
	else if(strpos($row['vi_referer'], 'm.ad.search.naver.com') !== false) $json['result3'][$i]['referer'] = '네이버 / 모바일 광고';
	else if(strpos($row['vi_referer'], 'search.naver.com') !== false) $json['result3'][$i]['referer'] = '네이버 / 검색';
	else if(strpos($row['vi_referer'], 'cafe.naver.com') !== false) $json['result3'][$i]['referer'] = '네이버 / 카페';
	else if(strpos($row['vi_referer'], 'blog.naver.com') !== false) $json['result3'][$i]['referer'] = '네이버 / 블로그';
	else if(strpos($row['vi_referer'], 'adrc.naver.com') !== false) $json['result3'][$i]['referer'] = '네이버 / 광고';
    else if(strpos($row['vi_referer'], 'nid.naver.com') !== false) $json['result2'][$i]['referer'] = '네이버 / 소셜로그인';
	else if(strpos($row['vi_referer'], 'search.daum.net') !== false) $json['result3'][$i]['referer'] = '다음 / 검색';
	else if(strpos($row['vi_referer'], 'cafe.daum.com') !== false) $json['result3'][$i]['referer'] = '다음 / 카페';
	else if(strpos($row['vi_referer'], 'www.youtube.com') !== false) $json['result2'][$i]['referer'] = '유튜브 / 검색';
	else $json['result3'][$i]['referer'] = '일반유입';

	$s_tmp = explode('q=', $row['vi_referer']);
	if($s_tmp[1] == '')
	$s_tmp = explode('query=', $row['vi_referer']);
	$s_tmp = explode('=', $s_tmp[1]);
	$s_tmp = explode('&', $s_tmp[0]);
	if(!$s_tmp[0]) $s_tmp[0] = '알수없음';
	$json['result3'][$i]['referer'] .= "-".substr(urldecode($s_tmp[0]), 0, 31);
	$json['result3'][$i]['referer2'] = $row['vi_referer'];
	$json['result3'][$i]['cnt'] = $row['cnt'];
	
	$cnt3 = $cnt3 + $row['cnt'];
}
$json['page'] = $tot_cnt;
$json['total'] = $tot2_cnt['cnt'];
$json['total2'] = $cnt2;
$json['total3'] = $cnt3;
$json = json_encode($json, JSON_NUMERIC_CHECK);
if(strlen($json) == 0) echo '{"code":1, "total":0, "result":[]}';
else echo $json;
?>

