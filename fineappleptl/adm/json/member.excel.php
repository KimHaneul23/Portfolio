<?
include_once('./_common.php');
include_once(G5_LIB_PATH.'/PHPExcel.php');

// 엑셀 생성
$objPHPExcel = new PHPExcel();

// 고정값 엑셀에 넣기!
$objPHPExcel -> setActiveSheetIndex(0)

// 타이틀
->mergeCells('A1:O1')
->setCellValue('A1', "회원 관리")
->setCellValue('A2',"아이디")
->setCellValue('B2',"이름")
->setCellValue('C2',"성별")
->setCellValue('D2',"본인확인")
->setCellValue('E2',"메일인증")
->setCellValue('F2',"성인인증")
->setCellValue('G2',"관심부위")
->setCellValue('H2',"내원여부")
->setCellValue('I2',"SMS수신")
->setCellValue('J2',"이메일수신")
->setCellValue('K2',"휴대폰")
->setCellValue('L2',"이메일")
->setCellValue('M2',"나이")
->setCellValue('N2',"로그인 기능")
->setCellValue('O2',"상태");

// 검색 조건
$where ="where 1=1";
if($attention) $where .=" and mb_4 = '{$attention}'"; // 관심부위
if($gender) $where .=" and  mb_1='{$gender}'"; // 성별
//if($visit_tmp) $where .=" and mb_3='{$visit_tmp}'"; // 내원여부
if($age) $where .=" and mb_2='{$age}'"; // 나이대

if($stdt) $where .=" and mb_datetime >= '{$stdt} 00:00:00'"; // 시작날짜
if($eddt) $where .=" and mb_datetime <= '{$eddt} 23:59:59'"; // 끝날짜

if($state == 1) $where .=" and mb_leave_date =''"; // 회원상태(회원)
if($state == 2) $where .=" and mb_leave_date !=''"; // 회원상태(탈퇴)

if($login == 'naver') $where .=" and mb_id like 'naver_%'"; // 로그인 기능
if($login == 'kakao') $where .=" and mb_id like 'kakao_%'"; // 로그인 기능
if($login == 'facebook') $where .=" and mb_id like 'facebook_%'"; // 로그인 기능
if($login== 'google') $where .=" and mb_id like 'google_%'"; // 로그인 기능

if($search) $where .=" and (mb_name like'{$search}%' or mb_id like'{$search}%' or mb_email like'{$search}%' or mb_nick like'{$search}%' or mb_hp like '{$search}%') "; // 검색어

$sql = "select * from g5_member {$where} ";

$result = sql_query($sql);
for($i=3; $row=sql_fetch_array($result); $i++){
	if($row['mb_email_certify'] == "") $email_certify = "N";
	if($row['mb_email_certify'] != "") $email_certify = "Y";
	if($row['mb_adult'] == 0) $adult = "N";
	if($row['mb_adult'] == 1) $adult = "Y";
	if($row['mb_sms'] == 0) $sms = "N";
	if($row['mb_sms'] == 1) $sms = "Y";
	if($row['mb_mailling'] == 0) $mailling = "N";
	if($row['mb_mailling'] == 1) $mailling = "Y";
	if(strpos($row['mb_id'],"kakao_") !== false){
		$login ="kakao";
	}else if(strpos($row['mb_id'],"naver_") !== false){
		$login ="naver";
	}else if(strpos($row['mb_id'],"facebook_") !== false) {
		$login ="facebook";
	}else if(strpos($row['mb_id'],"google_") !== false) {
		$login ="google";
	}else{
		$login ="사이트 가입";
	}
	if($row['mb_leave_date'] =="")  $state = "회원";
	if($row['mb_leave_date'] !="") $state = "탈퇴";

	$objPHPExcel -> setActiveSheetIndex(0) -> setCellValue("A".$i,$row['mb_id']);
	$objPHPExcel -> setActiveSheetIndex(0) -> setCellValue("B".$i,$row['mb_name']);
	$objPHPExcel -> setActiveSheetIndex(0) -> setCellValue("C".$i,$row['mb_1']);
	$objPHPExcel -> setActiveSheetIndex(0) -> setCellValue("D".$i,$row['mb_10']);
	$objPHPExcel -> setActiveSheetIndex(0) -> setCellValue("E".$i, $email_certify);
	$objPHPExcel -> setActiveSheetIndex(0) -> setCellValue("F".$i, $adult);
	$objPHPExcel -> setActiveSheetIndex(0) -> setCellValue("G".$i, $row['mb_4']);
	$objPHPExcel -> setActiveSheetIndex(0) -> setCellValue("H".$i, $row['mb_3']);
	$objPHPExcel -> setActiveSheetIndex(0) ->setCellValue("I".$i,$sms);
	$objPHPExcel -> setActiveSheetIndex(0) ->setCellValue("J".$i,$mailling);
	$objPHPExcel -> setActiveSheetIndex(0) ->setCellValue("K".$i,$row['mb_hp']);
	$objPHPExcel -> setActiveSheetIndex(0) ->setCellValue("L".$i,$row['mb_email']);
	$objPHPExcel -> setActiveSheetIndex(0) ->setCellValue("M".$i,$row['mb_2']);
	$objPHPExcel -> setActiveSheetIndex(0) ->setCellValue("N".$i,$login);
	$objPHPExcel -> setActiveSheetIndex(0) ->setCellValue("O".$i,$state);

	$objPHPExcel->getActiveSheet()->getStyle("A".$i.":O".$i)->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
	$objPHPExcel->getActiveSheet()->getStyle ("A".$i.":O".$i)->getAlignment ()->setVertical (PHPExcel_Style_Alignment::VERTICAL_CENTER );
}
// 셀 배경색
$objPHPExcel->getActiveSheet()->getStyle ("A1:O1")->getFill ()->getStartColor ()->setRGB ( 'D9D9D9' );
$objPHPExcel->getActiveSheet()->getStyle ("A1:O1")->getFill ()->setFillType ( PHPExcel_Style_Fill::FILL_SOLID );

// 값들 가로 중앙정렬
$objPHPExcel->getActiveSheet()->getStyle("A1:O1")->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
$objPHPExcel->getActiveSheet()->getStyle("A2:O2")->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);

// 값들 세로 정렬
$objPHPExcel->getActiveSheet()->getStyle ( "A2:O2" )->getAlignment ()->setVertical (PHPExcel_Style_Alignment::VERTICAL_CENTER );
$objPHPExcel->getActiveSheet()->getStyle ( "A1:O2" )->getAlignment ()->setVertical (PHPExcel_Style_Alignment::VERTICAL_CENTER );

// 셀 넓이 조절
//$objPHPExcel -> getActiveSheet() -> getColumnDimension('A') -> setWidth(10);
//$objPHPExcel -> getActiveSheet() -> getColumnDimension('C') -> setAutoSize(true);
$objPHPExcel -> getActiveSheet() -> getColumnDimension('A') -> setAutoSize(true);
$objPHPExcel -> getActiveSheet() -> getColumnDimension('B') -> setAutoSize(true);
$objPHPExcel -> getActiveSheet() -> getColumnDimension('C') -> setWidth(10);
$objPHPExcel -> getActiveSheet() -> getColumnDimension('D') -> setWidth(10);
$objPHPExcel -> getActiveSheet() -> getColumnDimension('E') -> setWidth(10);
$objPHPExcel -> getActiveSheet() -> getColumnDimension('F') -> setWidth(10);
$objPHPExcel -> getActiveSheet() -> getColumnDimension('G') -> setWidth(15);
$objPHPExcel -> getActiveSheet() -> getColumnDimension('H') -> setWidth(10);
$objPHPExcel -> getActiveSheet() -> getColumnDimension('I') -> setWidth(10);
$objPHPExcel -> getActiveSheet() -> getColumnDimension('J') -> setWidth(10);
$objPHPExcel -> getActiveSheet() -> getColumnDimension('K') -> setWidth(15);
$objPHPExcel -> getActiveSheet() -> getColumnDimension('L') -> setAutoSize(true);
$objPHPExcel -> getActiveSheet() -> getColumnDimension('M') -> setWidth(10);
$objPHPExcel -> getActiveSheet() -> getColumnDimension('N') -> setWidth(15);
$objPHPExcel -> getActiveSheet() -> getColumnDimension('O') -> setWidth(10);

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
//$objPHPExcel->setActiveSheetIndex(0)->getStyle("H13")->getNumberFormat()->setFormatCode('#,##0');

// 시트 네임
$objPHPExcel -> getActiveSheet() -> setTitle("Sheet1");

// 첫번째 시트(Sheet)로 열리게 설정
$objPHPExcel -> setActiveSheetIndex(0);

// 파일의 저장형식이 utf-8일 경우 한글파일 이름은 깨지므로 euc-kr로 변환해준다.
$filename = iconv("UTF-8", "EUC-KR", "회원관리".date('ymd'));

// 브라우저로 엑셀파일을 리다이렉션
header("Content-Type:application/vnd.ms-excel");
header("Content-Disposition: attachment;filename=".$filename.".xls");
header("Cache-Control:max-age=0");

$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, "Excel5");
$objWriter -> save("php://output");
?>
