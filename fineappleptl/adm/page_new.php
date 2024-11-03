<?
$sub_menu = '100290';
error_reporting( E_ALL );
ini_set( "display_errors", 1 );
include_once('./_common.php');
$g5['title'] = '페이지 접속 통계';
include_once ('./admin.head.php');

$yesterday = date('Y-m-d', strtotime(' -1 day'));
$month3 = date('Y-m-d', strtotime($yesterday.' -3 month'));
?>

<div class="content_box">
	<div class="search">
		<div class="search_info">
			<form onsubmit="return false;">
				<div>
					<div class="calendar"><img src="<?= G5_URL;?>/adm/img/ico_calendar.png">기간별 검색</div>
					<div>
						<input type="text" name="start_date" class="date start_date" autocomplete="off"> ~ <input type="text" name="end_date" class="date end_date" autocomplete="off">
					</div>
				</div>
				<div>
					<div class="date_search">
						<p>나열 순</p>
						<select name="order">
							<option value="1">페이지 가나다순</option>
							<option value="3">신규 방문자 높은 순</option>
							<option value="4">재방문자 높은 순</option>
							<option value="5">재방문율 높은 순</option>
							<option value="7">이탈률 높은 순</option>
							<option value="6">평균 체류시간 긴 순</option>
							<option value="8">상담신청 많은 순</option>
						</select>
					</div>
					<div class="device">
						<label class="page1 active"><input type="radio" name="device" value="all" checked="checked">전체</label>
						<label class="page1"><input type="radio" name="device" value="PC">PC</label>
						<label class="page1"><input type="radio" name="device" value="mobile">mobile</label>
						<button onclick="total_top(this.form);" class="search_btn">검색</button>
						<button onclick="page_excel(this.form);" class="ex"><img src="./img/excel.png">엑셀로다운<i class="ri-download-2-line"></i></button>
						<!-- <div class="ex btn_excel excel_button"><a href="#"><img src="./img/excel.png">엑셀로다운<i class="ri-download-2-line"></i></a></div> -->
					</div>
				</div>
			</form>
		</div>
		<div class="stats_chart page">
			<div class="chart_title wait_title">
				<span>페이지별 데이터 분석</span>
				<div class="wait_box_page1"><img src="./img/ajax-loader.gif"/></div>
			</div>
			<div class="chart">
				<div class="number_chart total">
					<div><span class="color_gray">페이지 조회 수</span><p class="color_blue title_1"></p><p class="color_blue value_1"></p></div>
					<div class="line">|</div>
					<div><span class="color_gray">신규 방문자 수</span><p class="color_blue title_2"></p><p class="color_blue value_2"></p></div>
					<div class="line">|</div>
					<div><span class="color_gray">재방문자 수</span><p class="color_blue title_3"></p><p class="color_blue value_3"></p></div>
					<div><span class="color_gray">평균 체류시간</span><p class="color_blue title_4"></p><p class="color_blue value_4"></p></div>
					<div class="line">|</div>
					<div><span class="color_gray">이탈률</span><p class="color_blue title_5"></p><p class="color_blue value_5"></p></div>
					<div class="line">|</div>
					<div><span class="color_gray">비용상담 신청건</span><p class="color_blue title_6"></p><p class="color_blue value_6"></p></div>
				</div>
				<div class="circle_chart">
					<div class="graph" id="chart16"></div>
				</div>
			</div>
		</div>
		<div class="chart_table">
			<table class="board_table tablesorter">
				<thead>
					<tr>
						<th>
							<select name="view_list" id="view_list">
								<option value="all" selected="selected">진료페이지</option>
								<option value="1">안면 윤곽</option>
								<option value="2">가슴 성형</option>
								<option value="3">눈성형</option>
								<option value="4">코성형</option>
								<option value="5">안티에이징</option>
								<option value="6">쁘띠</option>
								<option value="7">체형성형</option>
								<option value="8">피부과</option>
							</select>
						</th>
						<th>페이지 뷰 수</th>
						<th>신규 방문자 수</th>
						<th>재방문자 수</th>
						<th>재방문 율</th>
						<th>평균 체류시간</th>
						<th>이탈률</th>
						<th>비용상담 신청수</th>
					</tr>
				</thead>
				<tbody>
				</tbody>
			</table>
		</div>
	</div>
</div>

<div class="content_box">
	<div class="search">
		<div class="search_info">
			<form onsubmit="return false;">
				<div>
					<div class="calendar"><img src="<?= G5_URL;?>/adm/img/ico_calendar.png">기간별 검색</div>
					<div>
						<input type="text" name="start_date" class="date start_date" autocomplete="off"> ~ <input type="text" name="end_date" class="date end_date" autocomplete="off">
					</div>
				</div>
				<div>
					<div class="date_search">
						<p>나열 순</p>
						<select name="order2">
							<option value="desc">페이지 뷰가 높은 순</option>
							<option value="asc">페이지 뷰가 낮은 순</option>
						</select>
					</div>
					<div class="device">
						<label class="page2 active"><input type="radio" name="device" value="all" checked="checked">전체</label>
						<label class="page2"><input type="radio" name="device" value="PC">PC</label>
						<label class="page2"><input type="radio" name="device" value="mobile">mobile</label>
						<button onclick="total_bottom(this.form);search();" class="search_btn page_search_btn">검색</button>
						<!-- <button onclick="page_excel2(this.form);" class="ex"><img src="./img/excel.png">엑셀로다운<i class="ri-download-2-line"></i></button> -->
						<!-- <div class="ex btn_excel excel_button"><a href="#"><img src="./img/excel.png">엑셀로다운<i class="ri-download-2-line"></i></a></div> -->
					</div>
				</div>
				<input type="hidden" name="page" value="<?=$page?>">
				<input type="hidden" name="total_page" value="">
			</form>
		</div>
		<div class="stats_chart">
			<div class="chart_title wait_title">
				<span>페이지별 유입경로 분석</span>
				<div class="wait_box_page2"><img src="./img/ajax-loader.gif"/></div>
			</div>
			<div class="chart chart_tb">
				<div class="tb_page_stats w100">
					<table class="top20">
						<colgroup>
							<col width='90%'>
							<col width='10%'>
						</colgroup>
						<thead>
							<tr>
								<th>Referral URL</th>
								<th>Total</th>
							</tr>
						</thead>
						<tbody>
						</tbody>
					</table>
					<div class="page_bar"></div>
				</div>
				<div class="w100">
					<div class="tb_domain">
						<table class="referer10">
							<colgroup>
								<col width='15%'>
								<col width='60%'>
								<col width='15%'>
								<col width='10%'>
							</colgroup>
							<thead>
								<tr>
									<th>순위</th>
									<th>페이지 유입 도메인 TOP 10</th>
									<th>유입 수</th>
									<th>%</th>
								</tr>
							</thead>
							<tbody></tbody>
						</table>
					</div>
					<div class="tb_keyword">
						<table class="word10">
							<colgroup>
								<col width='15%'>
								<col width='60%'>
								<col width='15%'>
								<col width='10%'>
							</colgroup>
							<thead>
								<tr>
									<th>순위</th>
									<th>상세 유입 키워드 TOP 10</th>
									<th>유입 수</th>
									<th>%</th>
								</tr>
							</thead>
							<tbody></tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
		<div class="ps"><b>!</b>조회가능 기간 <span> <?=$month3?> ~ <?=$yesterday?> (3개월)</span></div>
	</div>
</div>

<script src="<?=G5_URL?>/adm/js/d3.v4.min.js"></script>
<script src="<?=G5_URL?>/adm/js/jquery.tablesorter.min.js"></script>

<script src="<?=G5_URL?>/adm/js/chart2.js"></script>
<script src="<?=G5_URL?>/adm/js/page_new.js"></script>
<script>
	var sorting_flag = '-ga:users'
	$(document).ready(function(){
		search()		
	})

	function search(){
		var st_date = $('input[name="start_date"]').val();
		var ed_date = $('input[name="end_date"]').val();

		var order = $('select[name="order2"]').val();
		if(order == 'desc'){
			sorting_flag = "-ga:users"
		}else{
			sorting_flag = "ga:users"
		}

		var device = $('input[name="device"]:checked').val()
		if(device == 'PC'){
			filters = "ga:deviceCategory==desktop"
		}else if(device == 'PC'){
			filters = "ga:deviceCategory==mobile"
		}else {
			filters = ""
		}

		$.ajax({
	        type: "POST",
	        url: "<?=G5_URL?>/adm/analytics/ajax.ga.referrer.admin.php",
			data: {ref_filters : filters, sort : sorting_flag, start_date: st_date, end_date: ed_date},
	        dataType: "json",
	        success: function(data) {
				$('table.top20 > tbody').html('')
	        	drawTable(data)
	        },
			error:function(request, status, error){
				console.log(error)
			    alert("Error. Retry Please");
			}
		});
	}

	function drawTable(data){
		for(var item in data){
			var row = data[item]
			var tr = document.createElement('tr')
			var referral_td = document.createElement('td')
			var count_td = document.createElement('td')
			referral_td.innerHTML = row[0]
			count_td.innerHTML = row[1]
			tr.append(referral_td)
			tr.append(count_td)

			$('table.top20 > tbody').append(tr);
		}
	}
</script>

<?php
include_once ('./admin.tail.php');