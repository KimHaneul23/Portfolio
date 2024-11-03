<?
$sub_menu = '100290';
//error_reporting( E_ALL );
//ini_set( "display_errors", 1 );
include_once('./_common.php');

$g5['title'] = '페이지별 접속 통계';
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
							<!--<option value="8">상담신청 많은 순</option>--><!-- 220126 숨김처리 -->
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
					<!--<div><span class="color_gray">비용상담 신청건</span><p class="color_blue title_6"></p><p class="color_blue value_6"></p></div>--><!-- 220126 숨김처리 -->
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
							<!--<select name="view_list" id="view_list">
								<option value="all" selected="selected">-->진료페이지<!--</option>-->
								<!--<option value="1">안면 윤곽</option>
								<option value="2">가슴 성형</option>
								<option value="3">눈성형</option>
								<option value="4">코성형</option>
								<option value="5">안티에이징</option>
								<option value="6">쁘띠</option>
								<option value="7">체형성형</option>
								<option value="8">피부과</option>-->
							<!--</select>-->
						</th>
						<th>페이지 뷰 수</th>
						<th>신규 방문자 수</th>
						<th>재방문자 수</th>
						<th>재방문 율</th>
						<th>평균 체류시간</th>
						<th>이탈률</th>
						<!--<th>비용상담 신청수</th>--><!-- 220126 숨김처리 -->
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
						<button onclick="total_bottom(this.form);" class="search_btn page_search_btn">검색</button>
						<button onclick="page_excel2(this.form);" class="ex"><img src="./img/excel.png">엑셀로다운<i class="ri-download-2-line"></i></button>
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
			<div class="chart_select">
				<form>
					<div>
						<select name="catagory">
							<? 
							//1deps category

							$sql = sql_query("select me_code, me_name from g5_menu where length(me_code) = 2 and me_code > 10 and me_code < 100 order by me_code asc");

							for($i=0;$me = sql_fetch_array($sql);$i++){

								//2deps category
								$qry2 = "select me_code, me_link, me_name from g5_menu where left(me_code, 2) = '".$me['me_code']."' and length(me_code) = 4 order by me_code asc";
								$sql2 = sql_query($qry2);
								$data_val = '';
								$data_name = '';
								for($j=0;$me2 = sql_fetch_array($sql2);$j++){
									$data_val .= str_replace('.php', '', str_replace(G5_URL.'/sub/', '', $me2['me_link'])).'|';
									$data_name .= $me2['me_name'].'|';
									if($i==0) {
										$data_val_tmp[] = str_replace('.php', '', str_replace(G5_URL.'/sub/', '', $me2['me_link']));
										$data_name_tmp[] = $me2['me_name'];
									}
								}
								$data_val = substr($data_val, 0, -1);
								$data_name = substr($data_name, 0, -1);
							?>
							<option value="<?=$me['me_name']?>" data-val="<?=$data_val?>" data-name="<?=$data_name?>" <?=$i==0?'selected':''?>><?=$me['me_name']?></option>
							<?}?>
						</select>

						<p class="line"> | </p>
					</div>
					<div>
						<p class="color_gray">페이지 뷰 수</p><span class="color_blue tot_cnt"></span>
					</div>
				</form>
			</div>
			<div class="chart chart_tb">
				<div class="tb_page_stats w100">
					<table class="top20">
						<thead>
							<tr>
								<th>순위</th>
								<th>이전 페이지 경로</th>
								<th>유입 수</th>
								<th>%</th>
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

<?php
include_once ('./admin.tail.php');