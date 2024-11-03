<?php
$sub_menu = "100100";
include_once('./_common.php');

auth_check($auth[$sub_menu], 'r');

$g5['title'] = '일별 접속자집계';
include_once('./visit.sub.php');

$colspan = 4;

$max = 0;
$sum_count = 0;
$sql = " select vs_date, vs_count as cnt
            from {$g5['visit_sum_table']}
            where vs_date between '{$fr_date}' and '{$to_date}'
            order by vs_date desc ";
$result = sql_query($sql);
for ($i=0; $row=sql_fetch_array($result); $i++) {
    $arr[$row['vs_date']] = $row['cnt'];

    if ($row['cnt'] > $max) $max = $row['cnt'];

    $sum_count += $row['cnt'];
}
?>
<div style="padding:20px; font-size:20px; font-weight:bold">Total : <?php echo $sum_count?></div>
<?php
$i = 0;
$j = 0;
$k = 0;
$save_count = -1;
$tot_count = 0;
if (count($arr)) {
	foreach ($arr as $key=>$value) {
		$count = $value;

		$rate = ($count / $sum_count * 100);
		$s_rate[$j] = number_format($rate, 1);

		$skey[$j] = $key;
		$scount[$j] = $count;
		$j ++;

	}
}
?>

<script type="text/javascript">
$(function () {
    $('#graph').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: '※ Day'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: [<?
			for ($m=0; $m<$skey[$m]; $m++)
			{
				echo "'".$skey[$m]."<br>(".$s_rate[$m]."%)',";
			}	
			?>]
        },
        yAxis: {
            title: {
                text: 'Count'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: 'Count',
            data: [<?
			for ($m=0; $m<$skey[$m]; $m++)
			{
				echo "$scount[$m],";
			}	
			?>]
        }]
    });
});
</script>

<script src="./js/highcharts.js"></script>
<script src="./js/modules/exporting.js"></script>

<div id="graph" style="min-width: 310px; height: 400px; margin: 0 auto"></div>

<?php
include_once('./admin.tail.php');
?>
