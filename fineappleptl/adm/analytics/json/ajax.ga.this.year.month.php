<?php
// include_once('./_common.php');

// if ($is_admin != 'super') die('');

include_once ('../../../common.php');
include_once('../../admin.lib.php');

include_once('../google-api-php/src/Google/autoload.php');	
include_once('../lib/lib_new.php');	


$year = $_POST['year'] == "" ? "2021" : $_POST['year'];
$device = $_POST['device'] == "" ? "" : $_POST['device'];


// // // Get data from Google Analytics
$row = sql_fetch(" select * from g_analytics ");
$access_token  = $row['access_token'];
$site_id = $row['site_id'];


if($row['refresh_token'])
{
	$analytics = getAnalytics($access_token);
	$metrics = 'ga:users';
	$dimensions = 'ga:yearMonth';
	
	$start_date = $year."-01-01";
	$end_date = $year."-12-31";

	if($device == 'm'){
		$ref_filters = "ga:deviceCategory==mobile,ga:deviceCategory==tablet";
	}

	if($device == 'p'){
		$ref_filters = "ga:deviceCategory==desktop";
	}

	$sort = '-ga:yearMonth';
		
	$data = execGa($analytics, $site_id, $start_date, $end_date, $metrics, $dimensions, $sort, $ref_filters);
	$this_year = $data['rows'];


	$analytics = getAnalytics($access_token);
	$metrics = 'ga:users';
	$dimensions = 'ga:yearMonth';
	
	$start_date = ($year-1)."-01-01";
	$end_date = ($year-1)."-12-31";

	$total = $data['totalsForAllResults']['ga:users'];
	
	$sort = '-ga:yearMonth';

	$data = execGa($analytics, $site_id, $start_date, $end_date, $metrics, $dimensions, $sort, $ref_filters);
	$before_year = $data['rows'];

	$yearMonth = $year.'12';
	$before = date('Ym', strtotime ( '-1 year' , strtotime ( $yearMonth."01" )));;
	$result = array();
	for ($i=12; $i >= 1; $i--){
		$yearMonth .= "01";
		$before = $before."01";
		
		$temp = array();
		for ($this_index=0; $this_index < count($this_year); $this_index++) { 
			if($this_year[$this_index][0] == substr($yearMonth,0,6)){
				$temp['thisYear'] = $this_year[$this_index][1];
			}
		}

		for ($before_index=0; $before_index < count($before_year); $before_index++) { 
			if($before_year[$before_index][0] == substr($before,0,6)){
				$temp['beforeYear'] = $before_year[$before_index][1];
			}
		}
		
		$temp['month'] = $i;
		array_push($result, $temp);
		// $result[$i] = $temp;

		$yearMonth = date('Ym', strtotime ( '-1 month' , strtotime ( $yearMonth )));
		$before = date('Ym', strtotime ( '-1 month' , strtotime ( $before )));
	}

	$temp = array();
	$temp['data'] = $result;
	$temp['total'] = $total;
	
	print_r(json_encode($temp));
}
?>