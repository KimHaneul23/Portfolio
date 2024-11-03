<?
include_once('./_common.php');
include_once(G5_LIB_PATH.'/PHPExcel.php');
$date = Date("Y-m-d");
$date = Date("Y-m-d", strtotime($date." -1 day"));
$where = " where 1 = 1 and vi_referer != '' ";
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

$qry = "select count(*) as cnt from g5_visit $where $datetime group by vi_referer";
$tot_cnt_sql = sql_query($qry);
$tot_cnt = sql_num_rows($tot_cnt_sql);
$sql = sql_query("select vi_referer, vi_requri, count(*) as cnt from g5_visit $where $datetime group by vi_referer order by cnt $order ");
$top10 = 0;
$word10 = 0;
$cnt = 0;
$result2_cnt = 0;
$result3_cnt = 0;
$page = 0;
for($i=0;$row=sql_fetch_array($sql);$i++){
	$word = '';
	$exisit = false;
	$cnt += $row['cnt'];
	//페이지별 유입경로 분석
	$json['result'][$i]['referer'] = $row['vi_referer'];
	$json['result'][$i]['cnt'] = $row['cnt'];
	if($top10 < 10){
		//페이지 유입 도메인 TOP 10
		$json['result2'][$i]['referer'] = $row['vi_referer'];
		$json['result2'][$i]['cnt'] = $row['cnt'];
		$top10++;
		$result2_cnt += $row['cnt'];
	}

	if($word10 < 10){
		//상세 유입 키워드 TOP 10
		if(strpos($row['vi_referer'], "search")) {
			if(strpos($row['vi_referer'], "google")){
				$word = explode("q=", $row['vi_referer']);
				if(strpos($word[1], "&")) {
					$word = explode("&", $word[1]);
					$word = urldecode($word[0]);
				}else $word = urldecode($word[1]);
				for($j=0; $j<count($json['result3']); $j++){
					if($json['result3'][$j]['referer'] == $word) {
						$json['result3'][$j]['add'] += $row['cnt'];
						$result3_cnt += $row['cnt'];
						$exisit = true;
					}
				}
				if(!$exisit){
					$json['result3'][$word10]['referer'] = $word;
					$json['result3'][$word10]['cnt'] = $row['cnt'];
					$result3_cnt += $row['cnt'];
					$word10++;
				}
			}else if(strpos($row['vi_referer'], "daum")){
				$word = explode("q=", $row['vi_referer']);
				if(strpos($word[1], "&")) {
					$word = explode("&", $word[1]);
					$word = urldecode($word[0]);
				}else $word = urldecode($word[1]);
				for($j=0; $j<count($json['result3']); $j++){
					if($json['result3'][$j]['referer'] == $word) {
						$json['result3'][$j]['add'] += $row['cnt'];
						$result3_cnt += $row['cnt'];
						$exisit = true;
					}
				}
				if(!$exisit){
					$json['result3'][$word10]['referer'] = $word;
					$json['result3'][$word10]['cnt'] = $row['cnt'];
					$result3_cnt += $row['cnt'];
					$word10++;
				}
			}else if(strpos($row['vi_referer'], "naver")){
				$word = explode("query=", $row['vi_referer']);
				if(strpos($word[1], "&")) {
					$word = explode("&", $word[1]);
					$word = urldecode($word[0]);
				}else $word = urldecode($word[1]);
				for($j=0; $j<count($json['result3']); $j++){
					if($json['result3'][$j]['referer'] == $word) {
						$json['result3'][$j]['add'] += $row['cnt'];
						$result3_cnt += $row['cnt'];
						$exisit = true;
					}
				}
				if(!$exisit){
					$json['result3'][$word10]['referer'] = $word;
					$json['result3'][$word10]['cnt'] = $row['cnt'];
					$result3_cnt += $row['cnt'];
					$word10++;
				}
			}
		}
	}
}
$json['page'] = $tot_cnt;
$json['total'] = $cnt;
$json['total2'] = $result2_cnt;
$json['total3'] = $result3_cnt;

$today = Date("Y-m-d", strtotime($date." -1 day"));
if($st_date) $time = $st_date."~".$date;
if($ed_date) $time = $date."~".$ed_date;
if(!$st_date && !$ed_date) $time = $date."~".$date;
if($st_date && $ed_date) $time = $st_date."~".$ed_date;
if(!$_GET['device']) $_GET['device'] = "전체";
// 엑셀 생성
$objPHPExcel = new PHPExcel();

// 시트 생성
$objPHPExcel->createSheet(0);
$objPHPExcel->createSheet(1);
$objPHPExcel->createSheet(2);

// 고정값 엑셀에 넣기!
$objPHPExcel -> setActiveSheetIndex(0)
->mergeCells('A1:D1')
->setCellValue('A1',$time."페이지별 유입경로 분석(".$_GET['device'].")")
->mergeCells('A2:D2')
->setCellValue('A2',$_GET['catagory'])
->setCellValue('A3',"순위")
->setCellValue('B3',"이전 페이지 경로")
->setCellValue('C3',"유입수")
->setCellValue('D3',"%");

$objPHPExcel -> setActiveSheetIndex(1)
->mergeCells('A1:D1')
->setCellValue('A1',$time."페이지별 유입경로 분석(".$_GET['device'].")")
->mergeCells('A2:D2')
->setCellValue('A2',$_GET['catagory'])
->setCellValue('A3',"순위")
->setCellValue('B3',"페이지 유입 도메인 Top10")
->setCellValue('C3',"유입수")
->setCellValue('D3',"%");

$objPHPExcel -> setActiveSheetIndex(2)
->mergeCells('A1:D1')
->setCellValue('A1',$time."페이지별 유입경로 분석(".$_GET['device'].")")
->mergeCells('A2:D2')
->setCellValue('A2',$_GET['catagory'])
->setCellValue('A3',"순위")
->setCellValue('B3',"상세 유입 키워드 Top10")
->setCellValue('C3',"유입수")
->setCellValue('D3',"%");


for($i = 0; $i<count($json['result']); $i++){
	$cell_a = "A".($i+4);
	$cell_b = "B".($i+4);
	$cell_c = "C".($i+4);
	$cell_d = "D".($i+4);

	$objPHPExcel -> setActiveSheetIndex(0)
	-> setCellValue($cell_a,$i+1)
	-> setCellValue($cell_b,$json['result'][$i]['referer'])
	-> setCellValue($cell_c,$json['result'][$i]['cnt'])
	-> setCellValue($cell_d,round($json['result'][$i]['cnt'] / $json['page'] * 100)."%");

	$objPHPExcel->getActiveSheet(0)->getStyle($cell_a.":".$cell_d)->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
	$objPHPExcel->getActiveSheet(0)->getStyle ($cell_a.":".$cell_d)->getAlignment ()->setVertical (PHPExcel_Style_Alignment::VERTICAL_CENTER );
}

for($i = 0; $i<count($json['result2']); $i++){
	$cell_a = "A".($i+4);
	$cell_b = "B".($i+4);
	$cell_c = "C".($i+4);
	$cell_d = "D".($i+4);

	$objPHPExcel -> setActiveSheetIndex(1)
	-> setCellValue($cell_a,$i+1)
	-> setCellValue($cell_b,$json['result2'][$i]['referer'])
	-> setCellValue($cell_c,$json['result2'][$i]['cnt'])
	-> setCellValue($cell_d,round($json['result2'][$i]['cnt'] / $json['total2'] * 100)."%");

	$objPHPExcel->getActiveSheet(1)->getStyle($cell_a.":".$cell_d)->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
	$objPHPExcel->getActiveSheet(1)->getStyle ($cell_a.":".$cell_d)->getAlignment ()->setVertical (PHPExcel_Style_Alignment::VERTICAL_CENTER );
}

for($i = 0; $i<count($json['result3']); $i++){
	$cell_a = "A".($i+4);
	$cell_b = "B".($i+4);
	$cell_c = "C".($i+4);
	$cell_d = "D".($i+4);

	$objPHPExcel -> setActiveSheetIndex(2)
	-> setCellValue($cell_a,$i+1)
	-> setCellValue($cell_b,$json['result3'][$i]['referer'])
	-> setCellValue($cell_c,$json['result3'][$i]['cnt'])
	-> setCellValue($cell_d,round($json['result3'][$i]['cnt'] / $json['total3'] * 100)."%");

	$objPHPExcel->getActiveSheet(2)->getStyle($cell_a.":".$cell_d)->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
	$objPHPExcel->getActiveSheet(2)->getStyle ($cell_a.":".$cell_d)->getAlignment ()->setVertical (PHPExcel_Style_Alignment::VERTICAL_CENTER );
}

// 셀 배경색
$objPHPExcel->setActiveSheetIndex(0)->getStyle ("A1:D1")->getFill ()->getStartColor ()->setRGB ( 'D9D9D9' );
$objPHPExcel->setActiveSheetIndex(0)->getStyle ("A1:D1")->getFill ()->setFillType ( PHPExcel_Style_Fill::FILL_SOLID );
$objPHPExcel->setActiveSheetIndex(1)->getStyle ("A1:D1")->getFill ()->getStartColor ()->setRGB ( 'D9D9D9' );
$objPHPExcel->setActiveSheetIndex(1)->getStyle ("A1:D1")->getFill ()->setFillType ( PHPExcel_Style_Fill::FILL_SOLID );
$objPHPExcel->setActiveSheetIndex(2)->getStyle ("A1:D1")->getFill ()->getStartColor ()->setRGB ( 'D9D9D9' );
$objPHPExcel->setActiveSheetIndex(2)->getStyle ("A1:D1")->getFill ()->setFillType ( PHPExcel_Style_Fill::FILL_SOLID );

// 값들 가로 중앙정렬
$objPHPExcel->setActiveSheetIndex(0)->getStyle("A1:D1")->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
$objPHPExcel->setActiveSheetIndex(0)->getStyle("A2:D2")->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
$objPHPExcel->setActiveSheetIndex(0)->getStyle("A3:D3")->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
$objPHPExcel->setActiveSheetIndex(1)->getStyle("A1:D1")->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
$objPHPExcel->setActiveSheetIndex(1)->getStyle("A2:D2")->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
$objPHPExcel->setActiveSheetIndex(1)->getStyle("A3:D3")->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
$objPHPExcel->setActiveSheetIndex(2)->getStyle("A1:D1")->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
$objPHPExcel->setActiveSheetIndex(2)->getStyle("A2:D2")->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);
$objPHPExcel->setActiveSheetIndex(2)->getStyle("A3:D3")->getAlignment()->setHorizontal(PHPExcel_Style_Alignment::HORIZONTAL_CENTER);

// 값들 세로 정렬
$objPHPExcel->setActiveSheetIndex(0)->getStyle ( "A2:C2" )->getAlignment ()->setVertical (PHPExcel_Style_Alignment::VERTICAL_CENTER );
$objPHPExcel->setActiveSheetIndex(0)->getStyle ( "A1:D3" )->getAlignment ()->setVertical (PHPExcel_Style_Alignment::VERTICAL_CENTER );
$objPHPExcel->setActiveSheetIndex(1)->getStyle ( "A2:C2" )->getAlignment ()->setVertical (PHPExcel_Style_Alignment::VERTICAL_CENTER );
$objPHPExcel->setActiveSheetIndex(1)->getStyle ( "A1:D3" )->getAlignment ()->setVertical (PHPExcel_Style_Alignment::VERTICAL_CENTER );
$objPHPExcel->setActiveSheetIndex(2)->getStyle ( "A2:C2" )->getAlignment ()->setVertical (PHPExcel_Style_Alignment::VERTICAL_CENTER );
$objPHPExcel->setActiveSheetIndex(2)->getStyle ( "A1:D3" )->getAlignment ()->setVertical (PHPExcel_Style_Alignment::VERTICAL_CENTER );

// 셀 넓이 조절
$objPHPExcel -> setActiveSheetIndex(0) -> getColumnDimension('A') -> setWidth(10);
$objPHPExcel -> setActiveSheetIndex(0) -> getColumnDimension('B') -> setWidth(50);
$objPHPExcel -> setActiveSheetIndex(0) -> getColumnDimension('C') -> setWidth(10);
$objPHPExcel -> setActiveSheetIndex(0) -> getColumnDimension('D') -> setWidth(10);
$objPHPExcel -> setActiveSheetIndex(1) -> getColumnDimension('A') -> setWidth(10);
$objPHPExcel -> setActiveSheetIndex(1) -> getColumnDimension('B') -> setWidth(50);
$objPHPExcel -> setActiveSheetIndex(1) -> getColumnDimension('C') -> setWidth(10);
$objPHPExcel -> setActiveSheetIndex(1) -> getColumnDimension('D') -> setWidth(10);
$objPHPExcel -> setActiveSheetIndex(2) -> getColumnDimension('A') -> setWidth(10);
$objPHPExcel -> setActiveSheetIndex(2) -> getColumnDimension('B') -> setWidth(50);
$objPHPExcel -> setActiveSheetIndex(2) -> getColumnDimension('C') -> setWidth(10);
$objPHPExcel -> setActiveSheetIndex(2) -> getColumnDimension('D') -> setWidth(10);

// 값 셀 높이 조절
$objPHPExcel -> setActiveSheetIndex(0) -> getDefaultRowDimension() -> setRowHeight(30);
$objPHPExcel -> setActiveSheetIndex(1) -> getDefaultRowDimension() -> setRowHeight(30);
$objPHPExcel -> setActiveSheetIndex(2) -> getDefaultRowDimension() -> setRowHeight(30);

// 콤마찍기
//$objPHPExcel->setActiveSheetIndex(0)->getStyle("H13")->getNumberFormat()->setFormatCode('#,##0');

// 시트 네임
$objPHPExcel -> setActiveSheetIndex(0) -> setTitle("page");
$objPHPExcel -> setActiveSheetIndex(1) -> setTitle("domain");
$objPHPExcel -> setActiveSheetIndex(2) -> setTitle("keyword");

// 첫번째 시트(Sheet)로 열리게 설정
$objPHPExcel -> setActiveSheetIndex(0);

// 파일의 저장형식이 utf-8일 경우 한글파일 이름은 깨지므로 euc-kr로 변환해준다.
$filename = iconv("UTF-8", "EUC-KR", "페이지별유입경로".date('ymd'));

// 브라우저로 엑셀파일을 리다이렉션
header("Content-Type:application/vnd.ms-excel");
header("Content-Disposition: attachment;filename=".$filename.".xls");
header("Cache-Control:max-age=0");

$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, "Excel5");
$objWriter -> save("php://output");

?>
