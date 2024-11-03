<?php
// include_once('./_common.php');

// if ($is_admin != 'super') die('');

include_once ('../../../../common.php');
include_once('../../../admin.lib.php');

include_once('../../google-api-php/src/Google/autoload.php');	
include_once('../../lib/lib_new.php');	


// $start_date = $_POST['start_date'] == "" ? "today" : $_POST['start_date'];
// $end_date = $_POST['end_date'] == "" ? "today" : $_POST['end_date'];
// $ref_filters = $_POST['ref_filters'];
// $sort = $_POST['sort'];


// // // Get data from Google Analytics
$row = sql_fetch(" select * from g_analytics ");
$access_token  = $row['access_token'];
$site_id = $row['site_id'];


if($row['refresh_token'])
{
	$analytics = getAnalytics($access_token);
	$metrics = 'ga:pageviews';
	
	$today = date("Y-m-d");
	$before_1_month_date = $today." -1 Month";
	$month_start_date = date('Y-m-01', strtotime($before_1_month_date));
	$month_end_date = date('Y-m-t', strtotime($before_1_month_date));
		

	$data = execGa($analytics, $site_id, $month_start_date, $month_end_date, $metrics, $dimensions, $sort, $ref_filters);
	$rows = $data['rows'];

	print_r(json_encode($rows));

}
?>