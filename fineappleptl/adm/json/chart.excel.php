<?
include_once('./_common.php');
include_once(G5_LIB_PATH.'/PHPExcel.php');

// 엑셀 생성
$objPHPExcel = new PHPExcel();

$today = date('Y-m-d'); // 오늘
$yesterday = date("Y-m-d", strtotime($today." -1 day")); // 하루전

// 누적 방문자
$sql1 = "select sum(vs_count) as count from g5_visit_sum";
$result1 = sql_fetch($sql1);

// 전일 방문자
$sql2 = "select vs_count from g5_visit_sum where vs_date='{$yesterday}'";
$result2 = sql_fetch($sql2);

//신규방문자
$date = substr(Date('Y-m-d'), 0, 10); // 오늘
$day1 = date("Y-m-d", strtotime($date." -1 day")); // 1일전

$sql3 = sql_query("select vi_ip, vi_date from g5_visit where vi_date >= '$day1'");
for($i=0;$row=sql_fetch_array($sql3);$i++){
	$visit = sql_fetch("select count(*) as cnt from g5_visit where vi_ip = '{$row['vi_ip']}'");
	if($visit['cnt'] > 1) $cnt1++;
	else $cnt2++;
}

$json = array();
$json['result']['0']['0']['item'] = '재방문자';
$json['result']['0']['0']['value'] = $cnt1;
$json['result']['0']['1']['item'] = '신규방문자';
$json['result']['0']['1']['value'] = $cnt2;

json_encode($json);


$sql4 = sql_query("select vi_os, count(*) as cnt from g5_visit where vi_date >= '$day1' and vi_os != '' group by vi_os");
for($i=0;$row2=sql_fetch_array($sql4);$i++){
	if($row2['vi_os'] == 'Android' || $row2['vi_os'] == 'iOS') $cnt3 += $row2['cnt'];
	else $cnt4 += $row2['cnt'];
}

$json2 = array();
$json2['result']['0']['0']['item'] = '모바일';
$json2['result']['0']['0']['value'] = $cnt3;
$json2['result']['0']['1']['item'] = 'PC';
$json2['result']['0']['1']['value'] = $cnt4;

json_encode($json2);

// 고정값 엑셀에 넣기!
$objPHPExcel -> setActiveSheetIndex(0)
// 타이틀
->mergeCells('A1:G1')
->setCellValue('A1', "방문자 접속 통계")
->setCellValue('A2',"날짜")
->setCellValue('B2',"누적 방문자수")
->setCellValue('C2',"방문자수")
->setCellValue('D2',"재방문자")
->setCellValue('E2',"신규방문자")
->setCellValue('F2',"모바일")
->setCellValue('G2',"PC");

// 검색 조건
$objPHPExcel -> setActiveSheetIndex(0)
-> setCellValue("A3",$yesterday)
-> setCellValue("B3",$result1['count'])
-> setCellValue("C3",$result2['vs_count'])
-> setCellValue("D3",$json['result'][0][0]['value'])
-> setCellValue("E3",$json['result'][0][1]['value'])
-> setCellValue("F3",$json2['result'][0][0]['value'])
-> setCellValue("G3",$json2['result'][0][1]['value']);

$objPHPExcel->getActiveSheet()->getStyle("A3:G3")->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
$objPHPExcel->getActiveSheet()->getStyle ( "A3:G3" )->getAlignment ()->setVertical (PHPExcel_Style_Alignment::VERTICAL_CENTER );

// 셀 배경색
$objPHPExcel->getActiveSheet()->getStyle ("A1:G1")->getFill ()->getStartColor ()->setRGB ( 'D9D9D9' );
$objPHPExcel->getActiveSheet()->getStyle ("A1:G1")->getFill ()->setFillType ( PHPExcel_Style_Fill::FILL_SOLID );

// 값들 가로 중앙정렬
$objPHPExcel->getActiveSheet()->getStyle("A1:G1")->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
$objPHPExcel->getActiveSheet()->getStyle("A2:G2")->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);

// 값들 세로 정렬
$objPHPExcel->getActiveSheet()->getStyle ( "A2:G2" )->getAlignment ()->setVertical (PHPExcel_Style_Alignment::VERTICAL_CENTER );
$objPHPExcel->getActiveSheet()->getStyle ( "A1:G2" )->getAlignment ()->setVertical (PHPExcel_Style_Alignment::VERTICAL_CENTER );

// 셀 넓이 조절
$objPHPExcel -> getActiveSheet() -> getColumnDimension('A') -> setWidth(15);
$objPHPExcel -> getActiveSheet() -> getColumnDimension('B') -> setWidth(15);
$objPHPExcel -> getActiveSheet() -> getColumnDimension('C') -> setWidth(15);
$objPHPExcel -> getActiveSheet() -> getColumnDimension('D') -> setWidth(15);
$objPHPExcel -> getActiveSheet() -> getColumnDimension('E') -> setWidth(15);
$objPHPExcel -> getActiveSheet() -> getColumnDimension('F') -> setWidth(15);
$objPHPExcel -> getActiveSheet() -> getColumnDimension('G') -> setWidth(15);


// 값 셀 높이 조절
$objPHPExcel -> getActiveSheet() -> getDefaultRowDimension() -> setRowHeight(30);

// 콤마찍기
//$objPHPExcel->setActiveSheetIndex(0)->getStyle("H13")->getNumberFormat()->setFormatCode('#,##0');

// 시트 네임
$objPHPExcel -> getActiveSheet() -> setTitle("Sheet1");

// 첫번째 시트(Sheet)로 열리게 설정
$objPHPExcel -> setActiveSheetIndex(0);

// 파일의 저장형식이 utf-8일 경우 한글파일 이름은 깨지므로 euc-kr로 변환해준다.
$filename = iconv("UTF-8", "EUC-KR", "방문자접속".date('yymd'));

// 브라우저로 엑셀파일을 리다이렉션
header("Content-Type:application/vnd.ms-excel");
header("Content-Disposition: attachment;filename=".$filename.".xls");
header("Cache-Control:max-age=0");

$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, "Excel5");
$objWriter -> save("php://output");
?>
