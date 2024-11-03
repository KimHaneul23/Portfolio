<?php
// include_once('./_common.php');

// if ($is_admin != 'super') die('');

include_once ('../../../common.php');
include_once('../../admin.lib.php');

include_once('../google-api-php/src/Google/autoload.php');	
include_once('../lib/lib_new.php');	


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
	
	$dashboard['allday'] = allday($access_token, $site_id)[0][0];
	$dashboard['beforeMonth'] = beforeMonth($access_token, $site_id)[0][0];
	$returningAndNew = returningAndNew($access_token, $site_id);
	$dashboard['returning'] =$returningAndNew[1][1];
	$dashboard['new'] =$returningAndNew[0][1];
	$dashboard['today'] = today($access_token, $site_id)[0][0];
	$dashboard['yesterday'] = yesterday($access_token, $site_id)[0][0];

	print_r(json_encode($dashboard));

}


function allday($access_token, $site_id) {
	$analytics = getAnalytics($access_token);

	$metrics = 'ga:users';

	$start_date = '2019-11-22';
	$end_date = 'today';

	$data = execGa($analytics, $site_id, $start_date, $end_date, $metrics, $dimensions, $sort, $ref_filters);
	// print_r($data);
	$rows = $data['rows'];

	return $rows;
}

function beforeMonth($access_token, $site_id) {
	$analytics = getAnalytics($access_token);

	$metrics = 'ga:users';
	
	$today = date("Y-m-d");
	$before_1_month_date = $today." -1 Month";
	$month_start_date = date('Y-m-01', strtotime($before_1_month_date));
	$month_end_date = date('Y-m-t', strtotime($before_1_month_date));

	$data = execGa($analytics, $site_id, $month_start_date, $month_end_date, $metrics, $dimensions, $sort, $ref_filters);
	$rows = $data['rows'];

	return $rows;
}

function returningAndNew($access_token, $site_id) {
	$analytics = getAnalytics($access_token);

	$metrics = 'ga:users';
	$dimensions = 'ga:userType';
	
	$start_date = 'today';
	$end_date = 'today';

	$data = execGa($analytics, $site_id, $start_date, $end_date, $metrics, $dimensions, $sort, $ref_filters);
	$rows = $data['rows'];

	return $rows;
}


function today($access_token, $site_id) {
	$analytics = getAnalytics($access_token);

	$metrics = 'ga:users';

	$start_date = 'today';
	$end_date = 'today';
	

	$data = execGa($analytics, $site_id, $start_date, $end_date, $metrics, $dimensions, $sort, $ref_filters);
	$rows = $data['rows'];

	return $rows;
}

function yesterday($access_token, $site_id) {
	$analytics = getAnalytics($access_token);

	$metrics = 'ga:users';

	$analytics = getAnalytics($access_token);
	
	$start_date = 'yesterday';
	$end_date = 'yesterday';
		

	$data = execGa($analytics, $site_id, $start_date, $end_date, $metrics, $dimensions, $sort, $ref_filters);
	$rows = $data['rows'];

	return $rows;
}
?>