<?
include_once('./_common.php');
include_once(G5_LIB_PATH.'/PHPExcel.php');
$date = substr(Date('Y-m-d'), 0, 10);
$where = " where 1 = 1 ";
if($st_date) $datetime .= " and vi_date >= '$st_date' ";
if($ed_date) $datetime .= " and vi_date <= '$ed_date' ";
if(!$st_date && !$ed_date) $datetime .= " and vi_date <= '$date' ";
if($device){
	if($device == "PC") $where .= " and vi_os NOT IN('', 'Android', 'iOS') ";
	if($device == "mobile") $where .= " and vi_os IN('Android', 'iOS') ";
}

$limit = 0;
if($page) $limit = ($page - 1) * 10;

$cnt = sql_query("select count(*) as cnt from g5_visit $where $datetime group by vi_date");
for($i=0;$row=sql_fetch_array($cnt);$i++) $total2 += $row['cnt'];
$total = sql_num_rows($cnt);

$sql = sql_query("select vi_date, count(*) as cnt from g5_visit $where $datetime group by vi_date order by vi_date desc");

$json = array();
$max = 0;
for($i=0;$row=sql_fetch_array($sql);$i++){
	$sql2 = sql_fetch("select vi_date, count(*) as cnt from g5_visit $where and vi_date = date_sub('{$row['vi_date']}', interval 3 month) group by vi_date");
	if($max < $row['cnt']) $max = $row['cnt'];
	$json['result'][$i]['date'] = $row['vi_date'];
	$json['result'][$i]['cnt'] = $row['cnt'];
	if($sql2['cnt'] > 0) {
		$json['result'][$i]['prev_cnt'] = $sql2['cnt'];
		$json['result'][$i]['per'] = round(($row['cnt'] / $sql2['cnt']) * 100);
		$json['result'][$i]['prev_date'] = substr($sql2['vi_date'], 5, 10);
	}else{
		$json['result'][$i]['prev_cnt'] = 0;
		$json['result'][$i]['per'] = 0;
	}
}
$json['total2'] = $total2;
$json['total'] = $total;
$json['max'] = $max;

 json_encode($json);
if(!$_GET['device']) $_GET['device'] = "전체";
// 엑셀 생성
$objPHPExcel = new PHPExcel();

// 고정값 엑셀에 넣기!
$objPHPExcel -> setActiveSheetIndex(0)

// 타이틀
->mergeCells('A1:E1')
->setCellValue('A1',"일별 접속 통계(" .$_GET['device']. ")")
->setCellValue('A2',"날짜")
->setCellValue('B2',"접속자수")
->setCellValue('C2',"3개월전 접속자수")
->setCellValue('D2',"비율");

for($i = 0; $i<count($json['result']); $i++){
	$cell_a = "A".($i+3);
	$cell_b = "B".($i+3);
  $cell_c = "C".($i+3);
  $cell_d = "D".($i+3);

	$objPHPExcel -> setActiveSheetIndex(0)
	-> setCellValue($cell_a,$json['result'][$i]['date'])
	-> setCellValue($cell_b,$json['result'][$i]['cnt'])
  -> setCellValue($cell_c,$json['result'][$i]['prev_cnt'])
  -> setCellValue($cell_d,$json['result'][$i]['per']."%");

	$objPHPExcel->getActiveSheet()->getStyle($cell_a.":".$cell_d)->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
	$objPHPExcel->getActiveSheet()->getStyle ($cell_a.":".$cell_d)->getAlignment ()->setVertical (PHPExcel_Style_Alignment::VERTICAL_CENTER );
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
$filename = iconv("UTF-8", "EUC-KR", "방문자일별접속".date('ymd'));

// 브라우저로 엑셀파일을 리다이렉션
header("Content-Type:application/vnd.ms-excel");
header("Content-Disposition: attachment;filename=".$filename.".xls");
header("Cache-Control:max-age=0");

$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, "Excel5");
$objWriter -> save("php://output");

?>
