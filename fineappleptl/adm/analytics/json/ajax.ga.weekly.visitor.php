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

// // // Get data from Google Analytics
$row = sql_fetch(" select * from g_analytics ");
$access_token  = $row['access_token'];
$site_id = $row['site_id'];


if($row['refresh_token'])
{
	$analytics = getAnalytics($access_token);
	$metrics = 'ga:users';
	$dimensions = 'ga:date';

	if($device == 'm'){
		$ref_filters = "ga:deviceCategory==mobile,ga:deviceCategory==tablet";
	}

	if($device == 'p'){
		$ref_filters = "ga:deviceCategory==desktop";
	}
	
	$sort = '-ga:date';
	
	$data = execGa($analytics, $site_id, $start_date, $end_date, $metrics, $dimensions, $sort, $ref_filters);
	
	$rows = $data['rows'];
	
	$weekly = array();
	$index = 1;
	$sum = 0;
	$result = array();
	
	for ($i=1; $i <= count($rows); $i++) { 
		
		if($index == 1){
			$result['start'] = date('Y-m-d', strtotime ($rows[$i-1][0]));
		}
		if($index == 7){
			$result['end'] = date('Y-m-d', strtotime ($rows[$i-1][0]));
		}
		
		if($i % 7 != 0){
			$sum += $rows[$i-1][1];
			$index++;
		}else{
			$sum += $rows[$i-1][1];
			$temp = array();
			$temp[0] = $result;
			$temp[1] = $sum;
			array_push($weekly, $temp);
			$sum = 0;
			$index = 1;
		}
		
	}
	$result = array();
	$result['data'] = $weekly;
	$result['total'] = $data['totalsForAllResults']['ga:users'];
	$result['row'] = $data;

	print_r(json_encode($result));

}

?>