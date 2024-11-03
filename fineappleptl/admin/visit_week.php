<?php
$sub_menu = "100100";
include_once('./_common.php');

auth_check($auth[$sub_menu], 'r');

$g5['title'] = '요일별 접속자집계';
include_once('./visit.sub.php');

$colspan = 4;
$weekday = array ('월', '화', '수', '목', '금', '토', '일');

$sum_count = 0;
$sql = " select WEEKDAY(vs_date) as weekday_date, SUM(vs_count) as cnt
            from {$g5['visit_sum_table']}
            where vs_date between '{$fr_date}' and '{$to_date}'
            group by weekday_date
            order by weekday_date ";
$result = sql_query($sql);
for ($i=0; $row=sql_fetch_array($result); $i++) {
    $arr[$row['weekday_date']] = $row['cnt'];

    $sum_count += $row['cnt'];
}
?>
<div style="padding:20px; font-size:20px; font-weight:bold">Total : <?php echo $sum_count?></div>
<?php
$k = 0;
$temp = 0;
$mi = 0;
if ($i) {
	for ($i=0; $i<7; $i++) {
		$count = (int)$arr[$i];
		if($count > $temp){
			$mi = $i;
			$temp = $count;
		}
		$rate = ($count / $sum_count * 100);
		$s_rate[$i] = number_format($rate, 1);
		
		$skey[$i] = $key;
		$scount[$i] = $count;

	
	}
}
?>

<script type="text/javascript">
$(function () {
    $('#graph').highcharts({
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
        },
        title: {
            text: '※ Week'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            data: [
			<?
			for ($m=0; $m<7; $m++) 
			{
				if ($m == $mi){
					echo "
					{
						name: '$weekday[$m] $scount[$m]명($s_rate[$m]%)',
						y: $scount[$m],
						sliced: true,
						selected: true
					},
					
					";
				} else {
					echo "['$weekday[$m] $scount[$m]명($s_rate[$m]%)', $scount[$m]],";
				}
			}	
			?>    
			]
        }]
    });
});
</script>
<script src="./js/highcharts.js"></script>
<script src="./js/highcharts-3d.js"></script>
<script src="./js/modules/exporting.js"></script>

<div id="graph" style=" width:98%; height: 550px; margin: 0 auto"></div>
  
<?php
include_once('./admin.tail.php');
?>
