<?
include_once('./_common.php');
include_once(G5_LIB_PATH.'/PHPExcel.php');

// 엑셀 생성
$objPHPExcel = new PHPExcel();

// 고정값 엑셀에 넣기!
$objPHPExcel -> setActiveSheetIndex(0)

// 타이틀
->mergeCells('A1:J1')
->setCellValue('A1', "상담신청 관리")
->setCellValue('A2',"등록일")
->setCellValue('B2',"이름")
->setCellValue('C2',"연락처")
->setCellValue('D2',"상담분야")
->setCellValue('E2',"접속IP")
->setCellValue('F2',"디바이스")
->setCellValue('G2',"답변")
->setCellValue('H2',"내원여부")
->setCellValue('I2',"상담분류")
->setCellValue('J2',"유입경로");

// 검색 조건
$where ="where 1=1";
if($stdt) $where .=" and wr_datetime >= '{$stdt} 00:00:00'"; // 시작날짜
if($eddt) $where .=" and wr_datetime <= '{$eddt} 23:59:59'"; // 끝날짜
if($attention) $where .=" and wr_2='{$attention}'";//상담분야
if($answer) $where .=" and wr_1='{$answer}'";//답변여부
if($visit_yn) $where .=" and wr_4='{$visit_yn}'"; // 내원여부
if($device) $where .=" and wr_10='{$device}'";//접속기기
if($consulting_type) $where .=" and wr_5='{$consulting_type}'";//상담분류
if($search) $where .=" and (wr_3 like'{$search}%' or wr_6 like'{$search}%' or wr_content like'{$search}%' ) "; // 검색어
$sql ="select * from g5_write_db_collect {$where} order by wr_datetime desc";
$result = sql_query($sql);

for($i=3; $row=sql_fetch_array($result); $i++){
	$objPHPExcel -> setActiveSheetIndex(0) -> setCellValue("A".$i,$row['wr_datetime']);
	$objPHPExcel -> setActiveSheetIndex(0) -> setCellValue("B".$i,$row['wr_3']);
	$objPHPExcel -> setActiveSheetIndex(0) -> setCellValue("C".$i,$row['wr_6']);
	$objPHPExcel -> setActiveSheetIndex(0) -> setCellValue("D".$i,$row['wr_2']);
	$objPHPExcel -> setActiveSheetIndex(0) -> setCellValue("E".$i, $row['wr_ip']);
	$objPHPExcel -> setActiveSheetIndex(0) -> setCellValue("F".$i, $row['wr_10']);
	$objPHPExcel -> setActiveSheetIndex(0) -> setCellValue("G".$i, $row['wr_1']);
	$objPHPExcel -> setActiveSheetIndex(0) -> setCellValue("H".$i, $row['wr_4']);
	$objPHPExcel -> setActiveSheetIndex(0) -> setCellValue("I".$i,$row['wr_5']);
	$objPHPExcel -> setActiveSheetIndex(0) -> setCellValue("J".$i,$row['wr_content']);

	$objPHPExcel->getActiveSheet()->getStyle("A".$i.":J".$i)->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
	$objPHPExcel->getActiveSheet()->getStyle ("A".$i.":J".$i)->getAlignment ()->setVertical (PHPExcel_Style_Alignment::VERTICAL_CENTER );
}

// 셀 배경색
$objPHPExcel->getActiveSheet()->getStyle ("A1:J1")->getFill ()->getStartColor ()->setRGB ( 'D9D9D9' );
$objPHPExcel->getActiveSheet()->getStyle ("A1:J1")->getFill ()->setFillType ( PHPExcel_Style_Fill::FILL_SOLID );

// 값들 중앙정렬
$objPHPExcel->getActiveSheet()->getStyle("A1:J1")->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
$objPHPExcel->getActiveSheet()->getStyle("A2:J2")->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);

// 값들 세로 정렬
$objPHPExcel->getActiveSheet()->getStyle ( "A2:J2" )->getAlignment ()->setVertical (PHPExcel_Style_Alignment::VERTICAL_CENTER );
$objPHPExcel->getActiveSheet()->getStyle ( "A1:J2" )->getAlignment ()->setVertical (PHPExcel_Style_Alignment::VERTICAL_CENTER );

// 셀 넓이 조절
$objPHPExcel -> getActiveSheet() -> getColumnDimension('A') -> setAutoSize(true);
$objPHPExcel -> getActiveSheet() -> getColumnDimension('B') -> setAutoSize(true);
$objPHPExcel -> getActiveSheet() -> getColumnDimension('C') -> setAutoSize(true);
$objPHPExcel -> getActiveSheet() -> getColumnDimension('D') -> setWidth(15);
$objPHPExcel -> getActiveSheet() -> getColumnDimension('E') -> setAutoSize(true);
$objPHPExcel -> getActiveSheet() -> getColumnDimension('F') -> setWidth(10);
$objPHPExcel -> getActiveSheet() -> getColumnDimension('G') -> setWidth(15);
$objPHPExcel -> getActiveSheet() -> getColumnDimension('H') -> setWidth(15);
$objPHPExcel -> getActiveSheet() -> getColumnDimension('I') -> setWidth(15);
$objPHPExcel -> getActiveSheet() -> getColumnDimension('J') -> setAutoSize(true);

// 값 셀 높이 조절
// $objPHPExcel->getActiveSheet()->getRowDimension(5)->setRowHeight(18);
// $objPHPExcel->getActiveSheet()->getRowDimension(6)->setRowHeight(18);
// $objPHPExcel->getActiveSheet()->getRowDimension(7)->setRowHeight(18);
// $objPHPExcel->getActiveSheet()->getRowDimension(8)->setRowHeight(18);
// $objPHPExcel->getActiveSheet()->getRowDimension(9)->setRowHeight(18);
// $objPHPExcel->getActiveSheet()->getRowDimension(10)->setRowHeight(18);
// $objPHPExcel->getActiveSheet()->getRowDimension(12)->setRowHeight(18);
// $objPHPExcel->getActiveSheet()->getRowDimension(13)->setRowHeight(18);
// $objPHPExcel->getActiveSheet()->getRowDimension(15)->setRowHeight(18);
$objPHPExcel -> getActiveSheet() -> getDefaultRowDimension() -> setRowHeight(30);

// 콤마찍기
// $objPHPExcel->setActiveSheetIndex(0)->getStyle("H13")->getNumberFormat()->setFormatCode('#,##0');
// $objPHPExcel->setActiveSheetIndex(0)->getStyle("I13")->getNumberFormat()->setFormatCode('#,##0');
// $objPHPExcel->setActiveSheetIndex(0)->getStyle("J13")->getNumberFormat()->setFormatCode('#,##0');
// $objPHPExcel->setActiveSheetIndex(0)->getStyle("K13")->getNumberFormat()->setFormatCode('#,##0');
// $objPHPExcel->setActiveSheetIndex(0)->getStyle("J15")->getNumberFormat()->setFormatCode('#,##0');

// 시트 네임
$objPHPExcel -> getActiveSheet() -> setTitle("Sheet1");

// 첫번째 시트(Sheet)로 열리게 설정
$objPHPExcel -> setActiveSheetIndex(0);

// 파일의 저장형식이 utf-8일 경우 한글파일 이름은 깨지므로 euc-kr로 변환해준다.
$filename = iconv("UTF-8", "EUC-KR", "상담신청관리".date('ymd'));

// 브라우저로 엑셀파일을 리다이렉션
header("Content-Type:application/vnd.ms-excel");
header("Content-Disposition: attachment;filename=".$filename.".xls");
header("Cache-Control:max-age=0");

$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, "Excel5");
$objWriter -> save("php://output");
?>
