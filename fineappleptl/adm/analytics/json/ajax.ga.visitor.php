<?php
// include_once('./_common.php');

// if ($is_admin != 'super') die('');

include_once ('../../../common.php');
include_once('../../admin.lib.php');

include_once('../google-api-php/src/Google/autoload.php');	
include_once('../lib/lib_new.php');	


$start_date = $_POST['start_date'] == "" ? "today" : $_POST['start_date'];
$end_date = $_POST['end_date'] == "" ? "today" : $_POST['end_date'];
$device = $_POST['device'] == "" ? "" : $_POST['device'];
$startIndex = $_POST['startIndex'] == "" ? 1 : $_POST['startIndex'];

// // // Get data from Google Analytics
$row = sql_fetch(" select * from g_analytics ");
$access_token  = $row['access_token'];
$site_id = $row['site_id'];


function total_users($access_token, $site_id, $ref_filters, $sort) {


	return $rows;
}


if($row['refresh_token'])
{
	$analytics = getAnalytics($access_token);
	$metrics = 'ga:users';
	$dimensions = 'ga:date,ga:userType';

	if($device == 'm'){
		$ref_filters = "ga:deviceCategory==mobile,ga:deviceCategory==tablet";
	}

	if($device == 'p'){
		$ref_filters = "ga:deviceCategory==desktop";
	}

	$sort = '-ga:date';

	$data = execGa($analytics, $site_id, $start_date, $end_date, $metrics, $dimensions, $sort, $ref_filters, $cnt, $name, $startIndex);
	$rows = $data['rows'];
	

	$analytics = getAnalytics($access_token);

	$metrics = 'ga:users';
	$dimensions = 'ga:date';


	$data = execGa($analytics, $site_id, $start_date, $end_date, $metrics, $dimensions, $sort, $ref_filters);
	$total_rows = $data['rows'];
	
	$diff = date_diff(new DateTime($start_date), new DateTime($end_date));
	
	$interval_day = 0;
	foreach($diff as $key=>$value){
		if($key == 'days'){
			$interval_day = $value+1;
		}
	}	

	$new_obj;
	$returning_obj;
	for ($i=0; $i < count($rows); $i++) { 
		if($rows[$i][1]=='New Visitor'){
			$new_obj[$rows[$i][0]] = $rows[$i][2];
		}
		if($rows[$i][1]=='Returning Visitor'){
			$returning_obj[$rows[$i][0]] = $rows[$i][2];
		}
	}

	$total_obj;
	for ($i=0; $i < count($total_rows); $i++) {
		$total_obj[$total_rows[$i][0]] = $total_rows[$i][1];
	}

	$end_date = date('Ymd', strtotime ($end_date));
	$html_doc = array();
	for ($i=0; $i < $interval_day; $i++) { 
		$format_date = date('Y-m-d', strtotime ($end_date));

		if( (($startIndex-1)*10) <= $i && $i < ($startIndex*10) ){
			$temp = array();
			$temp[0] = $format_date;
			$inner_temp['New Visitor'] = $new_obj[$end_date];
			$inner_temp['Returning Visitor'] = $returning_obj[$end_date];
			$inner_temp['Total'] = $total_obj[$end_date];

			if (!array_key_exists($end_date, $new_obj)){
				$temp[1]['New Visitor'] = 0;
			}
			if (!array_key_exists($end_date, $returning_obj)){
				$temp[1]['Returning Visitor'] = 0;
			}
			if (!array_key_exists($end_date, $total_obj)){
				$temp[1]['Total'] = 0;
			}

			$temp[1] = $inner_temp;
			array_push($html_doc, $temp);
		}		
		
		$end_date = date('Ymd',(strtotime ( '-1 day' , strtotime ( $end_date) ) ));
	}
	$result = array();
	$result['data'] = $html_doc;
	$result['total'] = $data['totalsForAllResults']['ga:users'];
	$result['count'] = $data['totalResults'] / 2;
	$result['row'] = $data;
	
	print_r(json_encode($result));
}
?>