<?php
$sub_menu = "100100";
include_once('./_common.php');

auth_check($auth[$sub_menu], 'r');

$g5['title'] = '시간별 접속자집계';
include_once('./visit.sub.php');

$colspan = 4;

$max = 0;
$sum_count = 0;
$sql = " select SUBSTRING(vi_time,1,2) as vi_hour, count(vi_id) as cnt
            from {$g5['visit_table']}
            where vi_date between '{$fr_date}' and '{$to_date}'
            group by vi_hour
            order by vi_hour ";
$result = sql_query($sql);
for ($i=0; $row=sql_fetch_array($result); $i++) {
    $arr[$row['vi_hour']] = $row['cnt'];

    if ($row['cnt'] > $max) $max = $row['cnt'];

    $sum_count += $row['cnt'];
}
?>
<div style="padding:20px; font-size:20px; font-weight:bold">Total : <?php echo $sum_count?></div>
<?php
$k = 0;
$j = 0;
if ($i) {
	for ($i=0; $i<24; $i++) {
		$hour = sprintf("%02d", $i);
		$count = (int)$arr[$hour];

		$rate = ($count / $sum_count * 100);
		$s_rate[$j] = number_format($rate, 1);
		
		$scount[$j] = $count;
		$j++;

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
            text: '※ Hour'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: [<?
			for ($i=0; $i<24; $i++)
			{
				if (strlen($i) == 1)
				{
					$str = "0".$i;
				} else {
					$str = $i;
				}
				echo "'".$str."<br>(".$s_rate[$i]."%)',";
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
			for ($m=0; $m < 24; $m++)
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
