<?
include_once('./_common.php');
include_once(G5_LIB_PATH.'/PHPExcel.php');
function objectToArray($d) {
    if (is_object($d)) {
        $d = get_object_vars($d);
    }
    if (is_array($d)) {
        return array_map(__FUNCTION__, $d);
    } else {
        return $d;
    }
}

$arr = str_replace("\\", "", $_GET['data']);
$arr2 = json_decode($arr);
$arr3 = objectToArray($arr2);
if(!$_GET['device']) $_GET['device'] = "전체";

// 엑셀 생성
$objPHPExcel = new PHPExcel();

// 고정값 엑셀에 넣기!
$objPHPExcel -> setActiveSheetIndex(0)

// 타이틀
->mergeCells('A1:C1')
->setCellValue('A1',  $arr3['year']." 월간 통계(".$_GET['device'].")")
->setCellValue('A2',"날짜")
->setCellValue('B2',"데이터")
->setCellValue('C2',"1년전");

for($i = 0; $i<count($arr3['result'][1]); $i++){
	$cell_a = "A".($i+3);
	$cell_b = "B".($i+3);
	$objPHPExcel -> setActiveSheetIndex(0)
	-> setCellValue($cell_a ,$arr3['result'][1][$i]['item']);
	$objPHPExcel -> setActiveSheetIndex(0)
	-> setCellValue($cell_b,$arr3['result'][1][$i]['value']);

	$objPHPExcel->getActiveSheet()->getStyle($cell_a.":".$cell_b)->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
	$objPHPExcel->getActiveSheet()->getStyle ($cell_a.":".$cell_b )->getAlignment ()->setVertical (PHPExcel_Style_Alignment::VERTICAL_CENTER );
}

for($j= 0; $j<count($arr3['result'][0]); $j++){
	$cell_c = "C".($j+3);
	$objPHPExcel -> setActiveSheetIndex(0)
	-> setCellValue($cell_c,$arr3['result'][0][$j]['value']);

	$objPHPExcel->getActiveSheet()->getStyle($cell_c)->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
	$objPHPExcel->getActiveSheet()->getStyle ($cell_c)->getAlignment ()->setVertical (PHPExcel_Style_Alignment::VERTICAL_CENTER );
}

// 셀 배경색
$objPHPExcel->getActiveSheet()->getStyle ("A1:C1")->getFill ()->getStartColor ()->setRGB ( 'D9D9D9' );
$objPHPExcel->getActiveSheet()->getStyle ("A1:C1")->getFill ()->setFillType ( PHPExcel_Style_Fill::FILL_SOLID );

// 값들 가로 중앙정렬
$objPHPExcel->getActiveSheet()->getStyle("A1:C1")->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
$objPHPExcel->getActiveSheet()->getStyle("A2:C2")->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);

// 값들 세로 정렬
$objPHPExcel->getActiveSheet()->getStyle ( "A2:C2" )->getAlignment ()->setVertical (PHPExcel_Style_Alignment::VERTICAL_CENTER );
$objPHPExcel->getActiveSheet()->getStyle ( "A1:C2" )->getAlignment ()->setVertical (PHPExcel_Style_Alignment::VERTICAL_CENTER );

// 셀 넓이 조절
$objPHPExcel -> getActiveSheet() -> getColumnDimension('A') -> setWidth(10);
$objPHPExcel -> getActiveSheet() -> getColumnDimension('B') -> setWidth(10);
$objPHPExcel -> getActiveSheet() -> getColumnDimension('C') -> setWidth(10);

// 값 셀 높이 조절
$objPHPExcel -> getActiveSheet() -> getDefaultRowDimension() -> setRowHeight(30);

// 콤마찍기
//$objPHPExcel->setActiveSheetIndex(0)->getStyle("H13")->getNumberFormat()->setFormatCode('#,##0');

// 시트 네임
$objPHPExcel -> getActiveSheet() -> setTitle("Sheet1");

// 첫번째 시트(Sheet)로 열리게 설정
$objPHPExcel -> setActiveSheetIndex(0);

// 파일의 저장형식이 utf-8일 경우 한글파일 이름은 깨지므로 euc-kr로 변환해준다.
$filename = iconv("UTF-8", "EUC-KR", "방문자월간접속".date('ymd'));

// 브라우저로 엑셀파일을 리다이렉션
header("Content-Type:application/vnd.ms-excel");
header("Content-Disposition: attachment;filename=".$filename.".xls");
header("Cache-Control:max-age=0");

$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, "Excel5");
$objWriter -> save("php://output");

?>
