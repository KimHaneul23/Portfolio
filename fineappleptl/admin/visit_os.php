<?php
$sub_menu = "100100";
include_once('./_common.php');

auth_check($auth[$sub_menu], 'r');

$g5['title'] = 'OS별 접속자집계';
include_once('./visit.sub.php');

$colspan = 5;

$max = 0;
$sum_count = 0;
$sql = " select * from {$g5['visit_table']}
          where vi_date between '$fr_date' and '$to_date' ";
$result = sql_query($sql);
while ($row=sql_fetch_array($result)) {
    $s = get_os($row['vi_agent']);

    $arr[$s]++;

    if ($arr[$s] > $max) $max = $arr[$s];

    $sum_count++;
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
	arsort($arr);
	foreach ($arr as $key=>$value) {
		$count = $arr[$key];
		if ($save_count != $count) {
			$i++;
			$no = $i;
			$save_count = $count;
		} else {
			$no = '';
		}

		if (!$key) {
			$key = '직접';
		}

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
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
        },
        title: {
            text: '※ OS'
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
			for ($m = 0; $m < count($arr); $m++)
			{
				if ($m == 0){
					echo "
					{
						name: '$skey[$m] $scount[$m]명($s_rate[$m]%)',
						y: $scount[$m],
						sliced: true,
						selected: true
					},
					
					";
				} else {
					echo "['$skey[$m] $scount[$m]명($s_rate[$m]%)', $scount[$m]],";
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
