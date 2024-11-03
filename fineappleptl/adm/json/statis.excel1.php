<?
include_once('./_common.php');
include_once(G5_LIB_PATH.'/PHPExcel.php');
$date = substr(Date('Y-m-d'), 0, 10); // 오늘 
$day1 = date("Y-m-d", strtotime($date." -1 day")); // 1일전

$where = " where 1 = 1 ";
if($st_date) $datetime .= " and date(wr_datetime) >= '$st_date' ";
if($ed_date) $datetime .= " and date(wr_datetime) <= '$ed_date' ";
if(!$st_date && !$ed_date) $datetime .= " and date(wr_datetime) <= '$day1' ";
if($sta_type){
	if($sta_type == "빠른상담") $where .= " and wr_5 = '빠른상담' ";
	if($sta_type == "랜딩상담") $where .= " and wr_5='랜딩상담' ";
}
if($device){
	if($device == "PC") $where .= " and wr_10 = 'PC' ";
	if($device == "mobile") $where .= " and wr_10 = '모바일' ";
}

$limit = 0;
if($page) $limit = ($page - 1) * 10;

// 토탈 
$cnt = sql_query("select count(*) as cnt from g5_write_db_collect $where $datetime group by date(wr_datetime)");
for($i=0;$row=sql_fetch_array($cnt);$i++) $total2 += $row['cnt'];
$total = sql_num_rows($cnt);

// 현재 데이터 10개 
$sql = sql_query("select date(wr_datetime) as wr_date_time, count(*) as cnt from g5_write_db_collect $where $datetime group by date(wr_datetime) order by date(wr_datetime) desc");

$json = array();
$max = 0;
$max3 = 0;
for($i=0;$row=sql_fetch_array($sql);$i++){
	// 3개월전 데이터 
	$sql2 = sql_fetch("select date(wr_datetime) as wr_date_time, count(*) as cnt from g5_write_db_collect $where and date(wr_datetime) = date_sub('{$row['wr_date_time']}', interval 3 month) group by date(wr_datetime)");

	$sql3 = sql_fetch("select date(wr_datetime) as wr_date_time, count(*) as cnt from g5_write_db_collect $where and date(wr_datetime) = '{$row['wr_date_time']}' and wr_5 ='비용상담'  group by date(wr_datetime)");

	$sql4 = sql_fetch("select date(wr_datetime) as wr_date_time, count(*) as cnt from g5_write_db_collect $where and date(wr_datetime) = '{$row['wr_date_time']}' and wr_5 ='랜딩상담'  group by date(wr_datetime)");

	if($max < $row['cnt']) $max = $row['cnt'];
	if($max3 < $sql2['cnt']) $max3 = $sql2['cnt'];

	$json['result'][$i]['date'] = $row['wr_date_time'];
	$json['result'][$i]['cnt'] = $row['cnt'];

	if($sql2['cnt'] > 0) {
		$json['result'][$i]['prev_cnt'] = $sql2['cnt'];
		$json['result'][$i]['prev_date'] = substr($sql2['wr_date_time'], 5, 10);
	}else{
		$json['result'][$i]['prev_cnt'] = 0;
	}
	if($sql3['cnt']>0){
		$json['result'][$i]['quick'] = $sql3['cnt'];
	}else{
		$json['result'][$i]['quick'] = 0;
	}

	if($sql4['cnt']>0){
		$json['result'][$i]['landing'] = $sql4['cnt'];
	}else{
		$json['result'][$i]['landing'] = 0;
	}
	
}
$json['total'] = $total;
$json['total2'] =  $total2;
$json['max'] = $max;
$json['max3'] = $max3;

 json_encode($json);
if(!$_GET['device']) $_GET['device'] = "전체";
// 엑셀 생성
$objPHPExcel = new PHPExcel();

// 고정값 엑셀에 넣기!
$objPHPExcel -> setActiveSheetIndex(0)

// 타이틀
->mergeCells('A1:E1')
->setCellValue('A1',"일간 통계(" .$_GET['device']. ")")
->setCellValue('A2',"날짜")
->setCellValue('B2',"비용상담")
->setCellValue('C2',"랜딩상담")
->setCellValue('D2',"총신청건")
->setCellValue('E2',"3개월전 신청건");


for($i = 0; $i<count($json['result']); $i++){
	$cell_a = "A".($i+3);
	$cell_b = "B".($i+3);
  $cell_c = "C".($i+3);
  $cell_d = "D".($i+3);
  $cell_e = "E".($i+3);
	$objPHPExcel -> setActiveSheetIndex(0)
	-> setCellValue($cell_a,$json['result'][$i]['date'])
	-> setCellValue($cell_b,$json['result'][$i]['quick'])
  -> setCellValue($cell_c,$json['result'][$i]['landing'])
  -> setCellValue($cell_d,$json['result'][$i]['cnt'])
  -> setCellValue($cell_e,$json['result'][$i]['prev_cnt']);

	$objPHPExcel->getActiveSheet()->getStyle($cell_a.":".$cell_e)->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
	$objPHPExcel->getActiveSheet()->getStyle ($cell_a.":".$cell_e)->getAlignment ()->setVertical (PHPExcel_Style_Alignment::VERTICAL_CENTER );
}


// 셀 배경색
$objPHPExcel->getActiveSheet()->getStyle ("A1:E1")->getFill ()->getStartColor ()->setRGB ( 'D9D9D9' );
$objPHPExcel->getActiveSheet()->getStyle ("A1:E1")->getFill ()->setFillType ( PHPExcel_Style_Fill::FILL_SOLID );

// 값들 가로 중앙정렬
$objPHPExcel->getActiveSheet()->getStyle("A1:E1")->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
$objPHPExcel->getActiveSheet()->getStyle("A2:E2")->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);

// 값들 세로 정렬
$objPHPExcel->getActiveSheet()->getStyle ( "A2:C2" )->getAlignment ()->setVertical (PHPExcel_Style_Alignment::VERTICAL_CENTER );
$objPHPExcel->getActiveSheet()->getStyle ( "A1:E2" )->getAlignment ()->setVertical (PHPExcel_Style_Alignment::VERTICAL_CENTER );

// 셀 넓이 조절
$objPHPExcel -> getActiveSheet() -> getColumnDimension('A') -> setWidth(10);
$objPHPExcel -> getActiveSheet() -> getColumnDimension('B') -> setWidth(10);
$objPHPExcel -> getActiveSheet() -> getColumnDimension('C') -> setWidth(10);
$objPHPExcel -> getActiveSheet() -> getColumnDimension('D') -> setWidth(10);
$objPHPExcel -> getActiveSheet() -> getColumnDimension('E') -> setWidth(20);
// 값 셀 높이 조절
$objPHPExcel -> getActiveSheet() -> getDefaultRowDimension() -> setRowHeight(30);

// 콤마찍기
//$objPHPExcel->setActiveSheetIndex(0)->getStyle("H13")->getNumberFormat()->setFormatCode('#,##0');

// 시트 네임
$objPHPExcel -> getActiveSheet() -> setTitle("Sheet1");

// 첫번째 시트(Sheet)로 열리게 설정
$objPHPExcel -> setActiveSheetIndex(0);

// 파일의 저장형식이 utf-8일 경우 한글파일 이름은 깨지므로 euc-kr로 변환해준다.
$filename = iconv("UTF-8", "EUC-KR", "상담신청일간".date('yymd'));

// 브라우저로 엑셀파일을 리다이렉션
header("Content-Type:application/vnd.ms-excel");
header("Content-Disposition: attachment;filename=".$filename.".xls");
header("Cache-Control:max-age=0");

$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, "Excel5");
$objWriter -> save("php://output");

?>
