<?php
include_once('./_common.php');

//이 달 누적 상담건
$sql1 = "select count(*) as cnt from g5_write_db_collect where date_format(wr_datetime,'%y-%m') = date_format('{$_POST['yesterday']}','%y-%m')";
$result1 = sql_fetch($sql1);

// 빠른상담
$sql2 = "select count(*) as cnt from g5_write_db_collect where wr_5 ='빠른상담' and date(wr_datetime) = '{$_POST['yesterday']}' ";
$result2 = sql_fetch($sql2);

// 랜딩상담
$sql3 = "select count(*) as cnt from g5_write_db_collect where wr_5 ='랜딩상담' and date(wr_datetime) = '{$_POST['yesterday']}' ";
$result3 = sql_fetch($sql3);

// 총 상담건
$sql4 = "select count(*) as cnt from g5_write_db_collect where date(wr_datetime) ='{$_POST['yesterday']}' ";
$result4 = sql_fetch($sql4);

// 상담신청 페이지 TOP
$sql5 = "select wr_content,count(*) as cnt from g5_write_db_collect where date(wr_datetime) = '{$_POST['yesterday']}' group by wr_content order by cnt desc limit 1";
$result5 = sql_fetch($sql5);

if($result5['wr_content'] == "http://notebreast.com/sub/motiva.php") $page_top1 = "모티바가슴확대";
if($result5['wr_content'] == "http://notebreast.com/sub/mento.php") $page_top1 = "멘토 가슴확대";
if($result5['wr_content'] == "http://notebreast.com/sub/sebbin.php") $page_top1 = "세빈 인테그리티";
if($result5['wr_content'] == "http://notebreast.com/sub/revision.php")  $page_top1 = "가슴재수술";
if($result5['wr_content'] == "http://notebreast.com/sub/reduction.php")  $page_top1 = "가슴축소";
if($result5['wr_content'] == "http://notebreast.com/sub/birth.php")  $page_top1 = "출산 후 가슴성형";
if($result5['wr_content'] == "http://notebreast.com/sub/intro.php")  $page_top1 = "권순근 대표원장";
if($result5['wr_content'] == "http://notebreast.com/sub/intro2.php")  $page_top1 = "김주원 원장";
if($result5['wr_content'] == "http://notebreast.com/m_landing.php")  $page_top1 = "모바일 랜딩페이지";
if($result5['wr_content'] == "http://notebreast.com/bbs/board.php?bo_table=online_consulting")  $page_top1 = "상담문의";
if($result5['wr_content'] == "http://notebreast.com/landing.php")  $page_top1 = "랜딩페이지";
if($result5['wr_content'] == "http://notebreast.com/m_landing.php")  $page_top1 = "모바일 랜딩페이지";
if($result5['wr_content'] == "") $page_top1 = "-";
else $page_top1 = "메인 페이지";

// 상담분야 TOP
$sql6 = "select wr_2,count(*) as cnt from g5_write_db_collect where date(wr_datetime) = '{$_POST['yesterday']}' and wr_5 != '랜딩상담'   group by wr_2 order by cnt desc limit 1";
$result6 = sql_fetch($sql6);
if($result6['wr_2']) $wr_2 = $result6['wr_2'];
if($result6['wr_2'] == "") $wr_2 = "-";
$json = '{"result":[';
$json .= '{"count1":"'.$result1['cnt'].'","count2":"'.$result2['cnt'].'", "count3":"'.$result3['cnt'].'", "count4":"'.$result4['cnt'].'", "count5":"'.$page_top1.'" , "count6":"'.$wr_2.'"}';
$json .= ']}';


echo $json;
?>
