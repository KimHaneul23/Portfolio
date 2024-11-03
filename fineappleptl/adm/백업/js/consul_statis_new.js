var color = new Array('rgba(87,92,98,1)', 'rgba(223,223,223,1)', 'rgba(189,234,216,1)');
var color2 = new Array('rgba(87,92,98,1)', 'rgba(223,223,223,1)');
var color3 = new Array('rgba(254,190,30,1)', 'rgba(30,30,30,1)');
var color9 = new Array('rgba(137,170,205,1)');
var color10 = new Array('rgba(254,190,30,1)', 'rgba(217,217,217,1)');
var color11 = new Array( 'rgba(217,217,217,1)','rgba(254,190,30,1)');
var color12 = new Array('rgba(254,190,30,1)', 'rgb(30, 30, 30)');
var title = new Array('내원','신청');
var title2 = new Array('PC','mobile');
var dateformat = 'MM월';//moment
var dateformat2 = 'ddd';//moment
var dateformat3 = 'DD일';//moment
var dateformat0 = '';//moment
var direction = 'right';

$(window).load(function() {
	//var yesterday = moment().format('YYYY-MM-DD'); // 오늘
	var yesterday =moment().subtract(1,'day').format('YYYY-MM-DD'); // 어제
	$('.date').text(yesterday);
	 mng(yesterday);
	 all_consul(yesterday);
	 chart21();
});

$(document).ready(function(){

	chart('chart18', g5_url + "/adm/json/statis_chart1.php", 3, color12, title, dateformat3, direction, 1);
	chart('chart19', g5_url + "/adm/json/statis_chart2.php", 6, color10, title, dateformat, direction, 1);
	chart('chart20', g5_url + "/adm/json/statis_chart3.php", 6, color2, title2, dateformat2, direction, 1);

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

	// 페이지 로드 후 모든 함수 호출
	for(var i=1; i<= 5; i++) data_statis(i);


});

// 엑셀다운로드
function data_excel(type, device, st_date, ed_date,sta_type, page){
	/*console.log(type);
	console.log(device);
	console.log(st_date);
	console.log(ed_date);
	console.log(sta_type);
	console.log(page);*/
	var url1 = '';
	var url2 = '';
	var url3 = '';
	var url4 = '';

	switch(type){
		case 2: // 상담신청 주간
			url2 = g5_url + '/adm/json/statis_chart5.php?device='+device+'&st_date='+st_date+'&ed_date='+ed_date+'&sta_type='+sta_type;
			break;
		case 3: // 상담신청 월간
			url3 = g5_url + '/adm/json/statis_chart6.php?device='+device+'&st_date='+st_date+'&ed_date='+ed_date+'&sta_type='+sta_type;
			break;
		case 4: // 상담신청 요일별
			url4 = g5_url + '/adm/json/statis_chart7.php?device='+device+'&st_date='+st_date+'&ed_date='+ed_date+'&sta_type='+sta_type;
			break;
		default: // 상담신청 일간
			url1 = g5_url + '/adm/json/statis_day.php';
			break;
	}

	if(!device) device = '';
	if(!st_date) st_date = '';
	if(!ed_date) ed_date = '';
	if(!sta_type) sta_type = '';
	if(!page) page = 1;

	if(type = 1){
		$.ajax({
			url : url1,
			async : false,
			dataType : 'json',
			data:{device : device, st_date : st_date, ed_date : ed_date, sta_type : sta_type},
			type: 'POST',
			success : function(data){
				location.href=g5_url +'/adm/json/statis.excel1.php?data='+JSON.stringify(data)+"&device="+device+"&st_date="+st_date+"&ed_date="+ed_date;
			}
		});
	}

	if(type = 2){
		$.ajax({
			url : url2,
			async : false,
			dataType : 'json',
			data:{device : device, st_date : st_date, ed_date : ed_date, sta_type : sta_type},
			type: 'POST',
			success : function(data){
				location.href=g5_url +'/adm/json/statis.excel2.php?data='+JSON.stringify(data)+"&device="+device+"&st_date="+st_date+"&ed_date="+ed_date+"&sta_type="+sta_type;
			}
		});
	}

	if(type = 3){
		if(!st_date) st_date = $("#area_4 form input[name='start_date']").val()
		if(!ed_date) ed_date = $("#area_4 form input[name='end_date']").val()
		$.ajax({
			url : url3,
			async : false,
			dataType : 'json',
			data:{device : device, st_date : st_date, ed_date : ed_date, sta_type : sta_type},
			type: 'POST',
			success : function(data){
				location.href=g5_url +'/adm/json/statis.excel3.php?data='+JSON.stringify(data)+"&device="+device+"&st_date="+st_date+"&ed_date="+ed_date+"&sta_type="+sta_type;
			}
		});
	}

	if(type = 4){
		//console.log(device);
		$.ajax({
			url : url4,
			async : false,
			dataType : 'json',
			data:{device : device, st_date : st_date, ed_date : ed_date, sta_type : sta_type},
			type: 'POST',
			success : function(data){
				//console.log(data);
				location.href=g5_url +'/adm/json/statis.excel4.php?data='+JSON.stringify(data)+"&device="+device+"&st_date="+st_date+"&ed_date="+ed_date+"&sta_type="+sta_type;
			}
		});
	}
}

// 차트 호출
function data_statis(type, device, st_date, ed_date,sta_type, page){
	if(!sta_type) sta_type = '';
	if(!device) device = '';
	if(!st_date) st_date = '';
	if(!ed_date) ed_date = '';
	if(!page) page = 1;
	switch(type){
		case 2: // 상담신청 주간
			if(ed_date == '') {
				ed_date = moment().subtract(1,'day').format('YYYY-MM-DD'); 
				$('input.week_end').val(ed_date);
			}
			if(st_date == ''){
				st_date =moment().subtract(35,'day').format('YYYY-MM-DD'); 
				$('input.week_start').val(st_date);
			}
			var color_2 = new Array('#3b3b3b');
			if(device == "mobile") color_2 = new Array('#ffbe22');
			if(device == "PC") color_2 = new Array('#89aacd');
			chart('chart21', g5_url + '/adm/json/statis_chart5.php?device='+device+'&st_date='+st_date+'&ed_date='+ed_date+'&sta_type='+sta_type, 1, color_2, title, '', direction, 1, 'week_title','week');
			break;
		case 3: // 상담신청 월간
			if(st_date == ''){
				 var today = new Date();
				 var today_year = today.getFullYear();
				$('.month_visit_date').val(today_year);
			}
			var color_3 = new Array('rgba(217,217,217,1)','#3b3b3b');
			if(device == "mobile"){ color_3 = new Array('rgba(217,217,217,1)','#ffbe22'); $('.search_year_text').css("color","#ffbe22");}
			if(device == "PC"){ color_3 = new Array('rgba(217,217,217,1)','#89aacd'); $('.search_year_text').css("color","#89aacd");}
			if(device == ""){ $('.search_year_text').css("color","#3b3b3b");}
			if(!st_date) st_date = $("#area_4 form input[name='start_date']").val()
			if(!ed_date) ed_date = $("#area_4 form input[name='end_date']").val()
			chart('chart22', g5_url + '/adm/json/statis_chart6.php?device='+device+'&st_date='+st_date+'&ed_date='+ed_date+'&sta_type='+sta_type, 1, color_3, title, '', direction, 1, 'month_title','month');
			break;
		case 4: // 상담신청 요일별
			var color_4 = new Array('#3b3b3b');
			if(device == "mobile") color_4 = new Array('#ffbe22');
			if(device == "PC") color_4 = new Array('#89aacd');
			if(!st_date) st_date = $("#area_4 form input[name='start_date']").val()
			if(!ed_date) ed_date = $("#area_4 form input[name='end_date']").val()
			chart('chart23', g5_url + '/adm/json/statis_chart7.php?device='+device+'&st_date='+st_date+'&ed_date='+ed_date+'&sta_type='+sta_type, 1, color_4, title, '', direction, 1, 'dayofweek_title','weekday');
			break;
		default: // 상담신청 일간
			if(ed_date == '') {
				ed_date = moment().subtract(1,'day').format('YYYY-MM-DD'); 
				$('input.day_end').val(ed_date);
			}
			if(st_date == ''){
				st_date =moment().subtract(10,'day').format('YYYY-MM-DD'); 
				$('input.day_start').val(st_date);
			}
			$.ajax({
				url : g5_url + '/adm/json/statis_day_new.php',
				dataType: 'json',
				async : false,
				data:{device : device, st_date : st_date, ed_date : ed_date, page : page, sta_type : sta_type},
				type: 'POST',
				success : function(data){
					var html = '';
					var total = data.total;
					var total2 = data.total2;
					var max = data.max;
					var max3 = data.max3;
					data = data.result;
					//if(!data){ alert("해당 요일에 상담 신청이 없습니다.");return false;}	
					if(!data) html += '<tr><td colspan="6" style="text-align:center;">해당 데이터가 없습니다.</td></tr>';
					else
					for(var i=0; i<data.length; i++){
						var per = Math.round(data[i].cnt / max * 100);
						var prev_per = 0;
						html += '<tr><td class="st_date">'+data[i].date+'</td>';
						html += '<td><div class="chart_line_new data_width" data-width="'+per+'"></div>';

							prev_per = Math.round(data[i].prev_cnt / max3 * 100);
							html += '<div class="chart_line_old"><div class="data_width" data-width="'+prev_per+'"><p></p></div>';

							if(data[i].prev_date){
								html += '</div><div  style="float:left; width: 100%;"><span style="font-size:10px;">(3개월전 '+data[i].prev_date+' / '+number_format(data[i].prev_cnt)+')</span></td>';
							}else{
								html += '</div><div  style="float:left; width: 100%;"><span style="font-size:10px;">(3개월전 없음 / '+number_format(data[i].prev_cnt)+')</span></div></td>';
							}
							html += '<td class="type1">'+number_format(data[i].quick)+'</td>';
							html += '<td class="type2">'+number_format(data[i].landing)+'</td>';

							html += '<td class="total">'+number_format(data[i].cnt)+'</td>';

							html += '<td class="total3">'+data[i].prev_cnt+'</td></tr>';
					}
					$('input[name="total_page"]').val(total);
					$('div.search_ranking.day > div.title > p').html('TOTAL  '+number_format(total2));
					$('table.day > tbody').html(html);
					if(device == "mobile") {$('.chart_line_new').css("background","#ffbe22")};
					if(device == "PC") {$('.chart_line_new').css("background","#89aacd")};
					$('div.data_width').each(function(){
						$(this).css('width', $(this).data('width')+'%');
					});
					map_data = {device : device, st_date : st_date, ed_date : ed_date, total : total, page : page, sta_type : sta_type}
					console.log(map_data)
					$.ajax({
						url : g5_url + '/adm/json/statis_paging_new.php',
						async : false,
						data: map_data,
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

// 검색
function search(type, f, word){
	var page = 1;

	var st_date = $('input[name="start_date"]', f).val();
	if(type == 3) st_date = $('select[name="start_date"]', f).val();

	var ed_date = $('input[name="end_date"]', f).val();

	var device = $('input[name="device"]:checked', f).val();
	if(device == 'all') device = '';

	var sta_type = $('input[name="sta_type"]:checked', f).val();
	if(sta_type == 'all') sta_type = '';

	if(type == 1) page = $('input[name="page"]', f).val();

	//console.log(device);
	if(type == 2) chart21(type, device, st_date, ed_date,  sta_type, page);

	if(word == 'list') data_statis(type, device, st_date, ed_date,  sta_type, page);
	else data_excel(type, device, st_date, ed_date, sta_type, page);
}

// post 보내기
function pageGoPost(d){
	var insdoc = "";
	for (var i = 0; i < d.vals.length; i++) {
		insdoc+= "<input type='hidden' name='"+ d.vals[i][0] +"' value='"+ d.vals[i][1] +"'>";
	}
	var goform = $("<form>", {
		method: "post",
		action: d.url,
		target: d.target,
		html: insdoc }).appendTo("body");
		goform.submit();
}

function chart21(type, device, st_date, ed_date,sta_type, page){
	if(!sta_type) sta_type = '';
	if(!device) device = '';
	if(!st_date) st_date = '';
	if(!ed_date) ed_date = '';
	if(!page) page = 1;

	$.ajax({
		url : g5_url + '/adm/json/statis_chart5.php',
		dataType: 'json',
		data:{device : device, st_date : st_date, ed_date : ed_date,sta_type : sta_type},
		type: 'POST',
		success : function(data){
			data = data.result;
			//console.log(data[0][0]['num']);
			for(var i = 0; i < data[0].length; i++){
				$('.chart21_text'+(i+1)).text(data[0][i]['num']);
			}
		}
	});

}
function all_consul(yesterday){
	$.ajax({
		url : g5_url + '/adm/json/all_consul.php',
		dataType: 'json',
		data:{yesterday:yesterday},
		type: 'POST',
		success : function(data){
			//console.log(data);

			$('.all_consul1').animateNumber({
				number:data.result[0]['count1'],
				numberStep: $.animateNumber.numberStepFactories.separator(',')
			},{
				easing: 'swing',
				duration: 1000
			});

			$('.all_consul2').animateNumber({
				number:data.result[0]['count2'],
				numberStep: $.animateNumber.numberStepFactories.separator(',')
			},{
				easing: 'swing',
				duration: 1000
			});
		}
	});
}
// 전체 상담 관리 카운트
function mng(yesterday){
	$.ajax({
		url : g5_url + '/adm/json/mng_count.php',
		dataType: 'json',
		data:{yesterday:yesterday},
		type: 'POST',
		success : function(data){
			//console.log(data);

			$('.count1').animateNumber({
				number:data.result[0]['count1'],
				numberStep: $.animateNumber.numberStepFactories.separator(',')
			},{
				easing: 'swing',
				duration: 1000
			});

			$('.count2').animateNumber({
				number:data.result[0]['count2'],
				numberStep: $.animateNumber.numberStepFactories.separator(',')
			},{
				easing: 'swing',
				duration: 1000
			});

			$('.count3').animateNumber({
				number:data.result[0]['count3'],
				numberStep: $.animateNumber.numberStepFactories.separator(',')
			},{
				easing: 'swing',
				duration: 1000
			});

			$('.count4').animateNumber({
				number:data.result[0]['count4'],
				numberStep: $.animateNumber.numberStepFactories.separator(',')
			},{
				easing: 'swing',
				duration: 1000
			});

			$('.count5').text(data.result[0]['count5']);
			$('.count6').text(data.result[0]['count6']);

		}
	});
};
