<?
$sub_menu = '100100';
include_once('./_common.php');

$g5['title'] = '방문자 접속 통계';
include_once ('./admin.head.php');

$end_day = Date("Y-m-d");
$end_num = Date('w',strtotime($end_day));

if($end_num > 0){
	$start_day = Date("Y-m-d", strtotime($date." -".$end_num."day"));
}else{
	$start_day  = Date("Y-m-d");
}
?>

<div class="content_box">
	<div class="title">
		<div>
			<p class="date"></p>
			<p>일자 방문자 접속 통계</p>
		</div>
	</div>
	<div class="stats_chart" style="margin-top:0; ">
		<div style="text-align:center">
			<div style="display:inline-block;padding: 30px 30px 0px 30px;width: 15%;"><p>오늘 방문자</p><span class="count today"></span></div>
			<div style="display:inline-block;padding: 30px 30px 0px 30px;width: 15%;"><p>전월 방문자</p><span class="count one_month"></span></div>
			<div style="display:inline-block;padding: 30px 30px 0px 30px;width: 15%;"><p>재 방문자(당일)</p><span class="count returning"></span></div>
		</div>
		<div style="text-align:center">
			<div style="display:inline-block;padding: 30px 30px 0px 30px;width: 15%;"><p>어제 방문자</p><span class="count yesterday"></span></div>
			<div style="display:inline-block;padding: 30px 30px 0px 30px;width: 15%;"><p>누적 방문자</p><span class="count total"></span></div>
			<div style="display:inline-block;padding: 30px 30px 0px 30px;width: 15%;"><p>신규 방문자(당일)</p><span class="count new_mb"></span></div>
		</div>
	</div>
</div>

<div class="content_box" id="area1">
	<div class="search">
		<div class="search_info">
			<form onsubmit="return false;">
				<div>
					<div class="calendar"><img src="<?= G5_URL;?>/adm/img/ico_calendar.png">기간별 검색</div>
					<div>
						<input type="text" name="start_date" class="date start_date day_start" autocomplete="off"> ~ <input type="text" name="end_date" class="date end_date day_end" autocomplete="off">
					</div>
				</div>
				<div>
					<div class="date_search">
						<a href="#area1" class="active">일간</a>
						<a href="#area2">주간</a>
						<a href="#area3">월간</a>
						<a href="#area4">연간</a>
					</div>
					<div class="device">
						<label class="visit1 active" for="all1"><input id="all1" type="radio" name="device" value="" checked="checked">전체</label>
						<label class="visit1"><input type="radio" name="day_device" value="p">PC</label>
						<label class="visit1"><input type="radio" name="day_device" value="m">mobile</label>
						<button onclick="visit(1);" class="search_btn">검색</button>
						<button onclick="downloadXlsx('statistic');" class="ex"><img src="./img/excel.png">엑셀로다운<i class="ri-download-2-line"></i></button>
					</div>
				</div>
				<input type="hidden" name="page" value="<?=$page?>">
				<input type="hidden" name="total_page" value="">
			</form>
		</div>
		<div class="search_ranking day">
			<div class="title">방문자 일별 접속 통계
				<p id="daily_total"></p>
			</div>
			<div class="ranking_list">
				<table class="day">
				<colgroup>
					<col width="10%" />
					<col width="10%" />
					<col width="10%" />
					<col width="10%" />
					<col width="10%" />
					<col width="10%" />
					<col width="10%" />
					<col width="10%" />
					<col width="10%" />
					<col width="10%" />
				</colgroup>
					<thead>
						<tr>
							<th>날짜</th>
							<th colspan="1" style="width: auto;">전일 방문자</th>
							<th colspan="2">금일 대비 전일 방문자 증가 수</th>
							<th colspan="1">신규 방문자</th>
							<th colspan="2">금일 대비 전일 신규 방문자 증가 수</th>
							<th colspan="1">총 방문자</th>
							<th colspan="2">총 방문자(금일 대비 전일 증가 수)</th>
						</tr>
					</thead>
					<tbody id="statistic">
					</tbody>
				</table>
				<div class="page_bar day">
				</div>
			</div>
		</div>
	</div>
</div>

<div class="content_box" id="area2">
	<div class="search">
		<div class="search_info">
			<form onsubmit="return false;">
				<div>
					<div class="calendar"><img src="<?= G5_URL;?>/adm/img/ico_calendar.png">기간별 검색</div>
					<div>
						<input type="text" class="date week_start" name="week_start" autocomplete="off"> ~ <input type="text" class="date week_end" name="week_end" autocomplete="off">
					</div>
				</div>
				<div class="w70">
					<div class="date_search">
						<a href="#area1">일간</a>
						<a href="#area2" class="active">주간</a>
						<a href="#area3">월간</a>
						<a href="#area4">연간</a>
					</div>
					<div class="device">
						<label class="visit2 active"><input type="radio" name="device" value="" checked="checked">전체</label>
						<label class="visit2"><input type="radio" name="weekly_device" value="p">PC</label>
						<label class="visit2"><input type="radio" name="weekly_device" value="m">mobile</label>
						<button onclick="weekly();" class="search_btn">검색</button>
						<button onclick="downloadXlsx('weekly_statistic');" class="ex"><img src="./img/excel.png">엑셀로다운<i class="ri-download-2-line"></i></button>
					</div>
				</div>
			</form>
		</div>
		<div class="search_ranking">
			<div class="title">방문자 주간 접속통계<p id="week_title"></p></div>
			<div class="ranking_list chart21_wrap_text">
				<!-- <div id="chart9"></div> -->
				<table class="day">
					<colgroup>
						<col width="30%" />
						<col width="70%" />
					</colgroup>
					<thead>
						<tr>
							<th>Date</th>
							<th>총 방문자</th>
						</tr>
					</thead>
					<tbody id="weekly_statistic">
					</tbody>
				</table>
			</div>
				<div class="chart21_text">
				<div>
					<div><span class="chart21_text1"></span></div>
					<div><span class="chart21_text2"></span></div>
					<div><span class="chart21_text3"></span></div>
					<div><span class="chart21_text4"></span></div>
					<div><span class="chart21_text5"></span></div>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="content_box" id="area3">
	<div class="search">
		<div class="search_info">
			<form onsubmit="return false;" class="search_year">
				<div class="search_year_ca">
					<div class="calendar"><img src="<?= G5_URL;?>/adm/img/ico_calendar.png">연도 검색</div>
					<div>
						<select name="monthly_year" class="month_visit_date">
							<option value=""></option>
							<?
								$date = substr(Date('Y-m-d'), 0, 4);
								for($i=2019; $i<=$date; $i++){
									echo '<option value="'.$i.'">'.$i.'</option>';
								}
							?>
						</select>
					</div>
				</div>
				<div class="w70">
					<div class="date_search">
						<a href="#area1">일간</a>
						<a href="#area2" >주간</a>
						<a href="#area3" class="active">월간</a>
						<a href="#area4">연간</a>
					</div>
					<div class="device">
						<label class="visit3 active"><input type="radio" name="device" value="" checked="checked">전체</label>
						<label class="visit3"><input type="radio" name="monthly_device" value="p">PC</label>
						<label class="visit3"><input type="radio" name="monthly_device" value="m">mobile</label>
						<button onclick="monthly()" class="search_btn">검색</button>
						<button onclick="downloadXlsx('monthly_statistic');" class="ex"><img src="./img/excel.png">엑셀로다운<i class="ri-download-2-line"></i></button>
					</div>
				</div>
			</form>
		</div>
		<div class="search_ranking">
			<div class="title">방문자 월간 접속통계<p id="month_title"></p></div>
			<div class="ranking_list chart11_list">
				<!-- <div id="chart10"></div> -->
				<table class="day">
					<colgroup>
						<col width="20%" />
						<col width="40%" />
						<col width="40%" />
					</colgroup>
					<thead>
						<tr>
							<th>Date</th>
							<th>총 방문자</th>
							<th>전년도 방문자</th>
						</tr>
					</thead>
					<tbody id="monthly_statistic">
					</tbody>
				</table>
			</div>
			<div class="chart22_text">
			</div>
		</div>
	</div>
</div>

<div class="content_box" id="area4">
	<div class="search">
		<div class="search_info">
			<form onsubmit="return false;" class="search_year">
				<div class="search_year_ca">
					<div class="calendar"><img src="<?= G5_URL;?>/adm/img/ico_calendar.png">연도 검색</div>
					<div>
						<select name="monthly_year" class="month_visit_date">
							<option value=""></option>
							<?
								$date = substr(Date('Y-m-d'), 0, 4);
								for($i=2019; $i<=$date; $i++){
									echo '<option value="'.$i.'">'.$i.'</option>';
								}
							?>
						</select>
					</div>
				</div>
				<div class="w70">
					<div class="date_search">
						<a href="#area1">일간</a>
						<a href="#area2" >주간</a>
						<a href="#area3">월간</a>
						<a href="#area4" class="active">연간</a>
					</div>
					<div class="device">
						<label class="visit3 active"><input type="radio" name="device" value="" checked="checked">전체</label>
						<label class="visit3"><input type="radio" name="monthly_device" value="p">PC</label>
						<label class="visit3"><input type="radio" name="monthly_device" value="m">mobile</label>
						<button onclick="monthly()" class="search_btn">검색</button>
						<button onclick="downloadXlsx('yearly_statistic');" class="ex"><img src="./img/excel.png">엑셀로다운<i class="ri-download-2-line"></i></button>
					</div>
				</div>
			</form>
		</div>
		<div class="search_ranking">
			<div class="title">방문자 연간 접속통계<p id="month_title"></p></div>
			<div class="ranking_list chart11_list">
				<table class="day">
					<colgroup>
						<col width="20%" />
						<col width="40%" />
						<col width="40%" />
					</colgroup>
					<thead>
						<tr>
							<th>Date</th>
							<th>총 방문자</th>
							<th>전년도 방문자</th>
						</tr>
					</thead>
					<tbody id="yearly_statistic">
					</tbody>
				</table>
			</div>
			<div class="chart22_text">
			</div>
		</div>
	</div>
</div>

<script src="<?=G5_URL?>/adm/js/xlsx.full.min.js"></script>
<script src="<?=G5_URL?>/adm/js/d3.v4.min.js"></script>
<script src="<?=G5_URL?>/adm/js/moment.min.js"></script>
<script src="<?=G5_URL?>/adm/js/jquery.animateNumber.min.js"></script>
<script src="<?=G5_URL?>/adm/js/chart.js"></script>
<script src="<?=G5_URL?>/adm/js/visit_new.js"></script>

<?php
include_once ('./admin.tail.php');