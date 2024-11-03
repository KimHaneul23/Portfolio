var color = new Array('rgba(87,92,98,1)', 'rgba(223,223,223,1)');
var color9 = new Array('rgba(137,170,205,1)');
var color10 = new Array('rgba(254,190,30,1)', 'rgba(217,217,217,1)');
var color11 = new Array('rgba(217,217,217,1)','rgba(254,190,30,1)');
var title = new Array('해당기간', '1년전')
var title1 = new Array('재방문자', '신규방문자')
var title2= new Array('PC', '모바일')
var dateformat = 'MM월DD일';//moment
var dateformat2= 'yyyy';
var dateformat3 ='dddd';
var direction = 'right';

$(window).on("load",function() {
	var today = moment().format('YYYY-MM-DD'); // 오늘
	var yesterday =moment().subtract(1,'day').format('YYYY-MM-DD'); // 어제
	var one_month =moment().subtract(1,'months').format('YYYY-MM-DD'); // 전월(한달전 오늘)
	var three_month = moment().subtract(3,'months').format('YYYY-MM-DD'); // 3개월전 오늘

	$('.date').text(today);
	visit(today,yesterday,one_month,three_month);
});

$(document).ready(function(){
	$('.excel_button').click(function(){
			location.href = g5_url + '/adm/json/chart.excel.php';
	});
	chart21();
	// 주간 통계 (날짜 자동 지정)
	$('input.week_start').change(function(){ // 시작일 변경 시 종료일 컨트롤
		var now = moment(new Date()).format('YYYY-MM-DD');
		var prev_date = moment($(this).val()).format('YYYY-MM-DD');
		var next_date = moment(prev_date).add(34, 'days').format('YYYY-MM-DD');
		if(moment.duration(moment(next_date, 'YYYY-MM-DD').diff(moment(now, 'YYYY-MM-DD'))).asDays() > 0) {
			alert('현재일을 초과하여 검색할 수 없습니다.');
			$(this).val('');
			return false;
		}
		$('input.week_end').val(next_date);
	});
	$('input.week_end').change(function(){ // 종료일 변경 시 시작일 컨트롤
		var now = moment(new Date()).format('YYYY-MM-DD');
		var prev_date = moment($(this).val()).format('YYYY-MM-DD');
		var next_date = moment(prev_date).subtract(34, 'days').format('YYYY-MM-DD');
		if(moment.duration(moment(prev_date, 'YYYY-MM-DD').diff(moment(now, 'YYYY-MM-DD'))).asDays() > 0) {
			alert('현재일을 초과하여 검색할 수 없습니다.');
			$(this).val('');
			return false;
		}
		$('input.week_start').val(next_date);
	});

	// 방문자 통계 및 카운터
//	chart('chart6', g5_url + "/adm/json/index_chart1.php", 6, color, title1, dateformat, direction, 1);
//	chart('chart7', g5_url + "/adm/json/index_chart2.php", 6, color, title2, dateformat, direction, 1);

	// 페이지 로드 후 모든 함수 호출
	for(var i=1; i<= 6; i++){
		data_visit(i);
	}
});

function visit(today,yesterday,one_month,three_month) {
	$.ajax({
		url : g5_url + '/adm/json/visit.php',
		dataType: 'json',
		data:{today:today,yesterday:yesterday,one_month:one_month,three_month:three_month},
		type: 'POST',
		success : function(data){
			$('.today').animateNumber({
				number:data.result[0]['today'],
				numberStep: $.animateNumber.numberStepFactories.separator(',')
			},{
				easing: 'swing',
				duration: 1000
  		});
			$('.yesterday').animateNumber({
				number:data.result[0]['yesterday'],
				numberStep: $.animateNumber.numberStepFactories.separator(',')
			},{
				easing: 'swing',
				duration: 1000
  		});
			$('.one_month').animateNumber({
				number:data.result[0]['one_month'],
				numberStep: $.animateNumber.numberStepFactories.separator(',')
			},{
				easing: 'swing',
				duration: 1000
  		});
			$('.three_month').animateNumber({
				number:data.result[0]['total'],
				numberStep: $.animateNumber.numberStepFactories.separator(',')
			},{
				easing: 'swing',
				duration: 1000
  		});
		}
	});
};

function data_excel(type, device, st_date, ed_date, page){
	var url1 = '';
	var url2 = '';
	var url3 = '';
	var url4 = '';
	var url5 = '';
	var url6 = '';
	switch(type){
		case 2:
			url2 = g5_url + '/adm/json/week_visit.php?device='+device+'&st_date='+st_date+'&ed_date='+ed_date;
			break;
		case 3:
			url3 = g5_url + '/adm/json/month_visit.php?device='+device+'&st_date='+st_date+'&ed_date='+ed_date;
			break;
		case 4:
			url4 = g5_url + '/adm/json/year_visit.php?device='+device+'&st_date='+st_date+'&ed_date='+ed_date;
			break;
		case 5:
			url5 = g5_url + '/adm/json/time_visit.php?device='+device+'&st_date='+st_date+'&ed_date='+ed_date;
			break;
		case 6:
			url6 = g5_url + '/adm/json/dayofweek_visit.php?device='+device+'&st_date='+st_date+'&ed_date='+ed_date;
			break;
		default:
			url1 = g5_url + '/adm/json/day_visit.php?device='+device+'&st_date='+st_date+'&ed_date='+ed_date+"&page"+page;
			break;
	}
	if(!device) device = '';
	if(!st_date) st_date = '';
	if(!ed_date) ed_date = '';
	if(!page) page = 1;

	if(type = 1){
		var total = $('input[name="total_page"]').val();
		$.ajax({
			url : url1,
			async : false,
			dataType : 'json',
			data:{device : device, st_date : st_date, ed_date : ed_date,total:total,page : page},
			type: 'POST',
			success : function(data){
				//console.log(data);
				location.href=g5_url +'/adm/json/visit.excel1.php?data='+JSON.stringify(data)+"&device="+device+"&st_date="+st_date+"&ed_date="+ed_date;
			}
		});
	}

	if(type = 2){
		$.ajax({
			url : url2,
			async : false,
			dataType : 'json',
			data:{device : device, st_date : st_date, ed_date : ed_date},
			type: 'POST',
			success : function(data){
				location.href=g5_url +'/adm/json/visit.excel2.php?data='+JSON.stringify(data)+"&device="+device+"&st_date="+st_date+"&ed_date="+ed_date;
			}
		});
	}

	if(type = 3){
		$.ajax({
			url : url3,
			async : false,
			dataType : 'json',
			data:{device : device, st_date : st_date, ed_date : ed_date},
			type: 'POST',
			success : function(data){
				location.href=g5_url +'/adm/json/visit.excel3.php?data='+JSON.stringify(data)+"&device="+device+"&st_date="+st_date+"&ed_date="+ed_date;
			}
		});
	}

	if(type = 4){
		$.ajax({
			url : url4,
			async : false,
			dataType : 'json',
			data:{device : device, st_date : st_date, ed_date : ed_date},
			type: 'POST',
			success : function(data){
				location.href=g5_url +'/adm/json/visit.excel4.php?data='+JSON.stringify(data)+"&device="+device+"&st_date="+st_date+"&ed_date="+ed_date;
			}
		});
	}

	if(type = 5){
		$.ajax({
			url : url5,
			async : false,
			dataType : 'json',
			data:{device : device, st_date : st_date, ed_date : ed_date},
			type: 'POST',
			success : function(data){
				location.href=g5_url +'/adm/json/visit.excel5.php?data='+JSON.stringify(data)+"&device="+device+"&st_date="+st_date+"&ed_date="+ed_date;
			}
		});
	}

	if(type = 6){
		$.ajax({
			url : url6,
			async : false,
			dataType : 'json',
			data:{device : device, st_date : st_date, ed_date : ed_date},
			type: 'POST',
			success : function(data){
				location.href=g5_url +'/adm/json/visit.excel6.php?data='+JSON.stringify(data)+"&device="+device+"&st_date="+st_date+"&ed_date="+ed_date;
			}
		});
	}


}

function data_visit(type, device, st_date, ed_date, page){
	if(!device) device = '';
	if(!st_date) st_date = '';
	if(!ed_date) ed_date = '';
	if(!page) page = 1;

	switch(type){
		case 2:
			var color_2 = new Array('#3b3b3b');
			if(device == "mobile") color_2 = new Array('#ffbe22');
			if(device == "PC") color_2 = new Array('#89aacd');
			if(ed_date == '') {
				ed_date = moment(new Date()).format('YYYY-MM-DD');
				$('input.week_end').val(ed_date);
			}
			if(st_date == ''){
				st_date =moment().subtract(34,'day').format('YYYY-MM-DD'); 
				$('input.week_start').val(st_date);
			}
			chart('chart9', g5_url + '/adm/json/week_visit.php?device='+device+'&st_date='+st_date+'&ed_date='+ed_date, 1, color_2, title, '', direction, 1, 'week_title');
			break;
		case 3:
			if(st_date == ''){
				 var today = new Date();
				 var today_year = today.getFullYear();
				$('.month_visit_date').val(today_year);
			}
			var color_3 = new Array('rgba(217,217,217,1)','#3b3b3b');
			if(device == "mobile"){ color_3 = new Array('rgba(217,217,217,1)','#ffbe22'); $('.search_year_text').css("color","#ffbe22");}
			if(device == "PC"){ color_3 = new Array('rgba(217,217,217,1)','#89aacd'); $('.search_year_text').css("color","#89aacd");}
			if(device == ""){ $('.search_year_text').css("color","#3b3b3b");}
			chart('chart10', g5_url + '/adm/json/month_visit.php?device='+device+'&st_date='+st_date+'&ed_date='+ed_date, 1, color_3, title, '', direction, 1, 'month_title','month');
			break;
		case 4:
			if(st_date == ''){
				 var today = new Date();
				 var today_year = today.getFullYear();
				$('.year_visit_date').val(today_year);
			}
			var color_4 = new Array('#3b3b3b');
			if(device == "mobile") color_4 = new Array('#ffbe22');
			if(device == "PC") color_4 = new Array('#89aacd');
			chart('chart11', g5_url + '/adm/json/year_visit.php?device='+device+'&st_date='+st_date+'&ed_date='+ed_date, 1, color_4, title, '', direction, 1, 'year_title');
			break;
		case 5:
			if(ed_date == '') {
				ed_date = moment(new Date()).format('YYYY-MM-DD');
				$('.end_time_date').val(ed_date);
			}
			if(st_date == ''){
				st_date =moment(new Date()).format('YYYY-MM-DD');
				$('.start_time_date').val(st_date);
			}
			$.ajax({
				url : g5_url + '/adm/json/time_visit.php',
				dataType: 'json',
				async : false,
				data:{device : device, st_date : st_date, ed_date : ed_date},
				type: 'POST',
				success : function(data2){
					var moon = '<div><i class="ri-moon-line"></i></div>';
					var sun = '<div><i class="ri-sun-line"></i></div>';
					var max = parseInt(data2.max);
					data = data2.result;
					for(var i=0; i<data.length; i++){
						if(i < 12){
							moon += '<li>'+i+'시</li><li><div class="time_databar" data-width="'+Math.round((80 / max) * data[i].value)+'"/>'+number_format(data[i].value)+'명</li>';
						}else{
							sun += '<li>'+i+'시</li><li><div class="time_databar" data-width="'+Math.round((80 / max) * data[i].value)+'"/>'+number_format(data[i].value)+'명</li>';
						}
					}
					$('ul.moon').html(moon);
					$('ul.sun').html(sun);
					$('div.time_chart > ul > li > div').each(function(){
						$(this).css('width', $(this).data('width')+'%');
					});
					if(device == "mobile") {$('.time_databar').css("background","#ffbe22")};
					if(device == "PC") {$('.time_databar').css("background","#89aacd")};

					$('.time_total').text('TOTAL '+number_format(data2.total));
				}
			});
			break;
		case 6:
		var color_6 = new Array('#3b3b3b');
		if(device == "mobile") color_6 = new Array('#ffbe22');
		if(device == "PC") color_6 = new Array('#89aacd');
			chart('chart13', g5_url + '/adm/json/dayofweek_visit.php?device='+device+'&st_date='+st_date+'&ed_date='+ed_date, 1, color_6, title, '', direction, 1, 'dayofweek_title');
			break;
		default:
			if(ed_date == '') {
				ed_date = moment(new Date()).format('YYYY-MM-DD');
				$('input.day_end').val(ed_date);
			}
			if(st_date == ''){
				st_date =moment().subtract(9,'day').format('YYYY-MM-DD'); // 어제
				$('input.day_start').val(st_date);
			}
			$.ajax({
				url : g5_url + '/adm/json/day_visit.php',
				dataType: 'json',
				async : false,
				data:{device : device, st_date : st_date, ed_date : ed_date, page : page},
				type: 'POST',
				success : function(data){
					//console.log(data);
					var html = '';
					var total = data.total;
					var total2 = data.total2;
					var max = data.max;
					var total3 = data.total3;
					data = data.result;
					var total4;
					for(var i=0; i<data.length; i++){
						var per = Math.round(data[i].cnt / max * 100);
						var prev_per = 0;
						html += '<tr><td>'+data[i].date+'</td>';
						html += '<td><div class="chart_line_new data_width" data-width="'+per+'"></div>';
						if(data[i].per > 0) {
							if(Math.round(per / 100 * (data[i].prev_cnt / data[i].cnt * 100)) > 99) prev_per = 100;
							else prev_per = Math.round(per / 100 * (data[i].prev_cnt / data[i].cnt * 100));
							html += '<div class="chart_line_old"><div class="data_width" data-width="'+prev_per+'"><p></p></div>';
							html += '</div><div style="float:left; width: 100%;"><span style="font-size:10px;">(1개월전 '+data[i].prev_date+' / '+number_format(data[i].prev_cnt)+')</span></div></td>';
							html += '<td>'+number_format(data[i].cnt)+'</td>';
							html += '<td>'+number_format(data[i].prev_cnt)+'</td>';
							//html += '<td>'+number_format(data[i].per)+'%</td></tr>';
							//광고주 요청으로 삭제 20210621
						}else{
							html += '</td>';
							html += '<td>'+data[i].cnt+'</td>';
							html += '<td>0</td>';
							//html += '<td>-</td></tr>';
							//광고주 요청으로 삭제 20210621
						}

					}
					console.log(total2);
					var per2 = Math.round(( (total2 / total3) * 100), 2);
					if(total3 == 0){
						per2 = 0;
					}
					var per_style = 'color:#AAAAA';
					if(per2 < 100) per_style = 'color:#1155cc';
					if(per2 > 100) per_style = 'color:#EE0000';
					$('input[name="total_page"]').val(total);
					$('div.search_ranking.day > div.title > p').html('TOTAL  '+number_format(total2) + '<br><nobr>'+number_format(total3)+' ( <span style="'+per_style+'">' + number_format(per2) + '% </span>)</nobr>');
					$('table.day > tbody').html(html);
					if(device == "mobile") {$('.chart_line_new').css("background","#ffbe22")};
					if(device == "PC") {$('.chart_line_new').css("background","#89aacd")};
					$('div.data_width').each(function(){
						$(this).css('width', $(this).data('width')+'%');
					});

					$.ajax({
						url : g5_url + '/adm/json/day_paging.php',
						async : false,
						data:{device : device, st_date : st_date, ed_date : ed_date, total : total, page : page},
						type: 'POST',
						success : function(data){
							$('div.page_bar.day').html(data);
						}
					});
				}
			});
			break;
	}
}
function chart21(type, device, st_date, ed_date, page){
	if(!device) device = '';
	if(!st_date) st_date = '';
	if(!ed_date) ed_date = '';
	if(!page) page = 1;

	$.ajax({
		url : g5_url + '/adm/json/week_visit.php',
		dataType: 'json',
		data:{device : device, st_date : st_date, ed_date : ed_date},
		type: 'POST',
		success : function(data){
			data2 = data.result;
			if(data2[0].length == 4){$('.chart21_text > div > div').css('width','calc(100% / 6)');}
			if(data2[0].length == 2){$('.chart21_text > div > div').css('width','calc(100% / 3)');}
			if(data)
			$('.chart21_text1, .chart21_text2, .chart21_text3, .chart21_text4, .chart21_text5').text('');
			if(data2) {
				for(var i = 0; i < data2[0].length; i++){
					$('.chart21_text'+(i+1)).text(data2[0][i]['num']);
				}
			}
		}
	});

}
function search(type, f, word){
	var page = $('input[name="page"]', f).val();

	//var page = 1;
	var st_date = $('input[name="start_date"]', f).val();
	if(type == 3 || type == 4) st_date = $('select[name="start_date"]', f).val();
	var ed_date = $('input[name="end_date"]', f).val();
	var device = $('input[name="device"]:checked', f).val();
	if(device == 'all') device = '';
	if(type == 1) page = $('input[name="page"]', f).val();

	if(type == 2) chart21(type, device, st_date, ed_date, page);

	if(word == 'list') data_visit(type, device, st_date, ed_date, page);
	else data_excel(type, device, st_date, ed_date, page);
}
