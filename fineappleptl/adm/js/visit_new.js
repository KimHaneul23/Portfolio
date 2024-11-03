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

$(window).on('load', function() {
	var today = moment().format('YYYY-MM-DD'); // 오늘
	var yesterday =moment().subtract(1,'day').format('YYYY-MM-DD'); // 어제
	var one_month =moment().subtract(1,'months').format('YYYY-MM-DD'); // 전월(한달전 오늘)
	var three_month = moment().subtract(3,'months').format('YYYY-MM-DD'); // 3개월전 오늘

	$('.date').text(today);
	dashboard()
	visit(1)	
	weekly()
	monthly()
	yearly()
});

$(document).ready(function(){
	
	
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
	for(var i=1; i<= 6; i++){
		data_visit(i);
	}
	
});

function downloadXlsx(id){
	var wb = XLSX.utils.table_to_book(document.getElementById(id), {sheet:"sheet1",raw:true});
	XLSX.writeFile(wb, ('google-analytics-report.xlsx'));
}

function nummberComman(e){
	if (e == null){
		return 0;
	}else{
		return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}	
}

function yearly() {
	var year = $('select[name="start_year"]').val();
	$('#yearly_statistic').html('')
	var device = $('label.active > input[name="year_device"]').val();
	$.ajax({
		url : g5_url + '/adm/json/year_visit.php',
		dataType: 'json',
		data:{year:year,device:device},
		type: 'POST',
		success : function(data){
			data2 = data.result;
			$('#year_title').text("TOTAL: "+nummberComman(data['total']));
			
			if(data2) {
				for(var i = 0; i < data2[0].length; i++){
					date = data2[0][i]['item'];
					var ele_date = document.createElement("td");
					ele_date.innerHTML = date;

					var year_total = document.createElement("td");
					year_total.innerHTML = nummberComman(data2[0][i]['value']);

					var tr = document.createElement("tr");
					year_total.style.textAlign = 'center'

					tr.append(ele_date);
					tr.append(year_total);
					$('#yearly_statistic').append(tr);
				}
			}
//			write_yearly_table(data['data'])
		}
	});
};

function write_yearly_table(response_date){
	response_date.forEach(element => {
		date = element[0];
		var ele_date = document.createElement("td");
		ele_date.innerHTML = date;

		var year_total = document.createElement("td");
		year_total.innerHTML = nummberComman(element[1]);

		var tr = document.createElement("tr");
		year_total.style.textAlign = 'center'

		tr.append(ele_date);
		tr.append(year_total);
		$('#yearly_statistic').append(tr);
	})
}


function monthly() {
	var year = $('select[name="monthly_year"]').val();
	var device = $('label.active > input[name="monthly_device"]').val();
	$('#monthly_statistic').html('')
	$.ajax({
		url : g5_url + '/adm/json/month_visit.php',
		dataType: 'json',
		data:{year:year,device:device},
		type: 'POST',
		success : function(data){			
			data2 = data.result;
			$('#month_title').text("TOTAL: "+nummberComman(data['total']));
			if(data2) {
				for(var i = 0; i < data2[0].length; i++){
					date = data2[0][i]['item'];
					var ele_date = document.createElement("td");
					ele_date.innerHTML = date;
					
					var this_year_total = document.createElement("td");
					this_year_total.innerHTML = nummberComman(data2[1][i]['value']);
					
					var before_year_total = document.createElement("td");
					before_year_total.innerHTML = nummberComman(data2[0][i]['value']);

					var tr = document.createElement("tr");
					this_year_total.style.textAlign = 'center'
					before_year_total.style.textAlign = 'center'

					tr.append(ele_date);
					tr.append(this_year_total);
					tr.append(before_year_total);
					$('#monthly_statistic').append(tr);
				}
			}
//			write_monthly_table(data['data'])
		}
	});
};

function write_monthly_table(response_date){
	response_date.forEach(element => {
		date = element['month']
		var ele_date = document.createElement("td");
		ele_date.innerHTML = date;

		var this_year_total = document.createElement("td");
		this_year_total.innerHTML = nummberComman(element['thisYear']);

		var before_year_total = document.createElement("td");
		before_year_total.innerHTML = nummberComman(element['beforeYear']);

		var tr = document.createElement("tr");
		this_year_total.style.textAlign = 'center'

		tr.append(ele_date);
		tr.append(this_year_total);
		tr.append(before_year_total);
		$('#monthly_statistic').append(tr);
	})
}

function weekly() {
	var start_date = $('input[name="week_start"]').val();
	var end_date = $('input[name="week_end"]').val();
	var device = $('label.active > input[name="weekly_device"]').val();
	$('#weekly_statistic').html('')
	$.ajax({
		url : g5_url + '/adm/json/week_visit.php',
		dataType: 'json',
		data:{start_date:start_date, end_date:end_date, device:device},
		type: 'POST',
		success : function(data){
			data2 = data.result;
			$('#week_title').text("TOTAL: "+nummberComman(data['total']));
			
			if(data2) {
				for(var i = 0; i < data2[0].length; i++){
					date = data2[0][i]['num'];
					var ele_date = document.createElement("td");
					ele_date.innerHTML = date;
					
					var weekly_total = document.createElement("td");
					weekly_total.innerHTML = nummberComman(data2[0][i]['value']);

					var tr = document.createElement("tr");
					weekly_total.style.textAlign = 'center'

					tr.append(ele_date);
					tr.append(weekly_total);
					$('#weekly_statistic').append(tr);
				}
			}
//			write_weekly_table(data['data'])
		}
	});
};

function write_weekly_table(response_date){
	response_date.forEach(element => {
		date = element[0]['start'] + ' ~ ' + element[0]['end']
		var ele_date = document.createElement("td");
		ele_date.innerHTML = date;

		var weekly_total = document.createElement("td");
		weekly_total.innerHTML = nummberComman(element[1]);

		var tr = document.createElement("tr");
		weekly_total.style.textAlign = 'center'

		tr.append(ele_date);
		tr.append(weekly_total);
		$('#weekly_statistic').append(tr);
	})
}

function visit(currentIndex) {
	var start_date = $('input[name="start_date"]').val();
	var end_date = $('input[name="end_date"]').val();
	var device = $('label.active > input[name="day_device"]').val();
	$('#statistic').html('')
	
	$.ajax({
		url : g5_url + '/adm/json/day_visit.php',
		dataType: 'json',
		data:{start_date:start_date, end_date:end_date,device:device,startIndex:currentIndex},
		type: 'POST',
		success : function(data){
			daily_paging(data['count'], currentIndex)
			$('#daily_total').text('TOTAL: '+nummberComman(data['total']))
			
			var returning_visitor_td = '';
			var returning_visitor_td_p = '';
			var new_visitor_td = '';
			var new_visitor_td_p = '';
			var visitor_td = '';
			var visitor_td_p = '';
			
			var total = data.total;
			var total2 = data.total2;
			var max = data.max;
			var total3 = data.total3;
			data = data.result;
			var total4;
			console.log(total4);
			for(var i=0; i<data.length; i++){
				var per = Math.round(data[i].cnt / max * 100);
				var prev_per = 0;
				
				if(data.length == 10){
					date = data[i]['date'];
				}
				var ele_date = document.createElement("td");
				ele_date.innerHTML = date;
				
				// 재방문
				var ele_returning = document.createElement("td");
				var ele_returning_v = document.createElement("td");
				var ele_returning_p = document.createElement("td");
				
				if(data[i].per > 0) {
					if(Math.round(per / 100 * (data[i]['prev_cnt'] / data[i]['cnt'] * 100)) > 99) prev_per = 100;
					else prev_per = Math.round(per / 100 * (data[i]['prev_cnt'] / data[i]['cnt'] * 100));
				}
				
				returning_visitor_td = data[i]['cnt'] - data[i]['prev_cnt'];
				returning_visitor_td_p = (returning_visitor_td / data[i]['prev_cnt'] * 100).toFixed(2) + "%";
				
				var per_style = '#aaa';
				if(returning_visitor_td < 0) per_style = '#1155cc';
				if(returning_visitor_td > 0) per_style = '#EE0000';
				
				ele_returning.innerHTML = data[i]['cnt1'];
				ele_returning_v.innerHTML = returning_visitor_td;
				ele_returning_p.innerHTML = returning_visitor_td_p;
				ele_returning_v.style.color = per_style;
				ele_returning_p.style.color = per_style;
				
				// 신규 방문
				var ele_new = document.createElement("td");
				var ele_new_v = document.createElement("td");
				var ele_new_p = document.createElement("td");
				
				var per2 = Math.round(( (total2 / total3) * 100), 2);
				if(total3 == 0){
					per2 = 0;
				}
				
				// 총 방문자
				var ele_visitor = document.createElement("td");
				var ele_visitor_v = document.createElement("td");
				var ele_visitor_p = document.createElement("td");

				

				ele_visitor.innerHTML = data[i].cnt;
				ele_visitor_v.innerHTML = visitor_td;
				ele_visitor_p.innerHTML = visitor_td_p;
				
				

				ele_new.innerHTML = data[i].cnt;
				ele_new_v.innerHTML = new_visitor_td;
				ele_new_p.innerHTML = new_visitor_td_p;
				
				
				var tr = document.createElement("tr");
				ele_returning.style.textAlign = 'center';
				tr.append(ele_date);
				tr.append(ele_returning);
				tr.append(ele_returning_v);
				tr.append(ele_returning_p);
				
				tr.append(ele_new);
				tr.append(ele_new_v);
				tr.append(ele_new_p);

				tr.append(ele_visitor);
				tr.append(ele_visitor_v);
				tr.append(ele_visitor_p);

				$('#statistic').append(tr);
				
//				$.ajax({
//					url : g5_url + '/adm/json/day_paging.php',
//					async : false,
//					data:{device : device, st_date : start_date, ed_date : end_date, total : total},
//					type: 'POST',
//					success : function(data){
//						$('div.page_bar.day').html(data);
//					}
//				});
			}
			
//			if(data) {
//				for(var i = 0; i < data.length; i++){
//					var date = '';
//					var today_visitor = Number(data[i]['cnt']);
//					var returning_visitor_td = '';
//					var returning_visitor_td_p = '';
//					var new_visitor_td = '';
//					var new_visitor_td_p = '';
//					var visitor_td = '';
//					var visitor_td_p = '';
//					
//					if(data.length == 10){
//						date = data[i]['date'];
//					}
//					var ele_date = document.createElement("td");
//					ele_date.innerHTML = date;
//					
//					var ele_returning = document.createElement("td");
//					var ele_returning_v = document.createElement("td");
//					var ele_returning_p = document.createElement("td");
//					
//					// 재방문
//					
//					ele_returning.innerHTML = Number(data[i]['cnt3']);
//					ele_returning_v.innerHTML = returning_visitor_td;
//					ele_returning_p.innerHTML = returning_visitor_td_p;
//					
//					var ele_new = document.createElement("td");
//					var ele_new_v = document.createElement("td");
//					var ele_new_p = document.createElement("td");
//					
//					// 신규 방문
//					
//					ele_new.innerHTML = Number(data[i]['cnt4']);
//					ele_new_v.innerHTML = new_visitor_td;
//					ele_new_p.innerHTML = new_visitor_td_p;
//					
//					
//					var ele_visitor = document.createElement("td");
//					var ele_visitor_v = document.createElement("td");
//					var ele_visitor_p = document.createElement("td");
//					
//					// 오늘 방문
//					
//					ele_visitor.innerHTML = today_visitor;
//					ele_visitor_v.innerHTML = visitor_td;
//					ele_visitor_p.innerHTML = visitor_td_p;
//					
					
//					returning_visitor = Number(data[i]['cnt3']);
//					new_visitor = Number(data[i]['cnt4']);
//					visitor = Number(data[1]['totle']);
//					
//				}
//			}
//			write_visit_table(data['data'])
		}
	});
};

function daily_paging(count, currentIndex){
	var limit_page_count = 10;
	var page_count = 0;
	if(count <= limit_page_count){
		page_count = 0
	}else{
		page_count = parseInt((count-1) / limit_page_count) + 1;
	}

	var span = document.createElement("span");
	span.className = 'pg_wrap'
	var inner_span = document.createElement("span");
	inner_span.className = 'pg'
	var first = null;
	var end = null;
	
	if(page_count >= 1){
		if(currentIndex == 1){
			for(var index = 1 ; index <= page_count ; index++){
				var pager = null;
				if(currentIndex == index){
					pager = document.createElement("a");
					pager.className = 'pg_current'
					pager.text = index
				}else{
					pager = document.createElement("a");
					pager.className = 'pg_page'
					pager.text = index
					pager.setAttribute('onclick', 'visit('+index+')')
				}
				inner_span.append(pager)
			}

			end = document.createElement("a");
			end.className = 'pg_page pg_start'
			end.text = '끝'	
			end.setAttribute('onclick', 'visit('+page_count+')')
			inner_span.append(end)

		}else if(currentIndex >= page_count){
			first = document.createElement("a");
			first.className = 'pg_page pg_start'
			first.text = '처음'
			first.setAttribute('onclick', 'visit('+1+')')
			inner_span.append(first)

			for(var index = 1 ; index <= page_count ; index++){
				var pager = null;
				if(currentIndex == index){
					pager = document.createElement("a");
					pager.className = 'pg_current'
					pager.text = index
				}else{
					pager = document.createElement("a");
					pager.className = 'pg_page'
					pager.text = index
					pager.setAttribute('onclick', 'visit('+index+')')
				}
				inner_span.append(pager)
			}

		}else{
			first = document.createElement("a");
			first.className = 'pg_page pg_start'
			first.text = '처음'
			first.setAttribute('onclick', 'visit('+1+')')
			inner_span.append(first)
			
			for(var index = 1 ; index <= page_count ; index++){
				var pager = null;
				if(currentIndex == index){
					pager = document.createElement("a");
					pager.className = 'pg_current'
					pager.text = index
				}else{
					pager = document.createElement("a");
					pager.className = 'pg_page'
					pager.text = index
					pager.setAttribute('onclick', 'visit('+index+')')
				}
				inner_span.append(pager)
			}
			end = document.createElement("a");
			end.className = 'pg_page pg_end'
			end.text = '끝'
			end.setAttribute('onclick', 'visit('+page_count+')')
			inner_span.append(end)
		}		
	}

	span.append(inner_span);
	$('div.page_bar.day').html('')
	$('div.page_bar.day').append(span);
}

function write_visit_table(response_date){
	var returning_visitor = '';
	var new_visitor = '';
	var visitor = '';
	
	response_date.forEach(element => {
		var date = '';
		var today_visitor = Number(element[1]['Total']);
		var returning_visitor_td = '';
		var returning_visitor_td_p = '';
		var new_visitor_td = '';
		var new_visitor_td_p = '';
		var visitor_td = '';
		var visitor_td_p = '';
		
		if(element[0].length == 10){
			date = element[0];
		}
		var ele_date = document.createElement("td");
		ele_date.innerHTML = date;

		var ele_returning = document.createElement("td");
		var ele_returning_v = document.createElement("td");
		var ele_returning_p = document.createElement("td");
		
		if(Number.isInteger(returning_visitor)){
			if(returning_visitor > element[1]['Returning Visitor']){
				returning_visitor_td = returning_visitor - element[1]['Returning Visitor'];
				returning_visitor_td_p = (returning_visitor_td / returning_visitor * 100).toFixed(2);
				returning_visitor_td = "-" + returning_visitor_td;
				returning_visitor_td_p = "-" + returning_visitor_td_p + "%";
				ele_returning_v.style.color = 'red';
				ele_returning_p.style.color = 'red';
			} else if(returning_visitor < element[1]['Returning Visitor']){
				returning_visitor_td = element[1]['Returning Visitor'] - returning_visitor;
				returning_visitor_td_p = (returning_visitor_td / returning_visitor * 100).toFixed(2);
				returning_visitor_td = "+" + returning_visitor_td;
				returning_visitor_td_p = "+" + returning_visitor_td_p + "%";
				ele_returning_v.style.color = 'blue';
				ele_returning_p.style.color = 'blue';
			}
		}
		ele_returning.innerHTML = element[1]['Returning Visitor'];
		ele_returning_v.innerHTML = returning_visitor_td;
		ele_returning_p.innerHTML = returning_visitor_td_p;
		
		var ele_new = document.createElement("td");
		var ele_new_v = document.createElement("td");
		var ele_new_p = document.createElement("td");
		if(Number.isInteger(new_visitor)){
			if(new_visitor > element[1]['New Visitor']){
				new_visitor_td = new_visitor - element[1]['New Visitor'];
				new_visitor_td_p = (new_visitor_td / new_visitor * 100).toFixed(2);
				new_visitor_td = "-" + new_visitor_td;
				new_visitor_td_p = "-" + new_visitor_td_p + "%";
				ele_new_v.style.color = 'red';
				ele_new_p.style.color = 'red';
			} else if(new_visitor < element[1]['New Visitor']){
				new_visitor_td = element[1]['New Visitor'] - new_visitor;
				new_visitor_td_p = (new_visitor_td / new_visitor * 100).toFixed(2);
				new_visitor_td = "+" + new_visitor_td;
				new_visitor_td_p = "+" + new_visitor_td_p + "%";
				ele_new_v.style.color = 'blue';
				ele_new_p.style.color = 'blue';
			}			
		}
		ele_new.innerHTML = element[1]['New Visitor'];
		ele_new_v.innerHTML = new_visitor_td;
		ele_new_p.innerHTML = new_visitor_td_p;
		

		var ele_visitor = document.createElement("td");
		var ele_visitor_v = document.createElement("td");
		var ele_visitor_p = document.createElement("td");
		if(Number.isInteger(visitor)){
			if(visitor > today_visitor){
				visitor_td = visitor - today_visitor;
				visitor_td_p = (visitor_td / today_visitor * 100).toFixed(2);
				visitor_td = "-" + visitor_td;
				visitor_td_p = "-" + visitor_td_p + "%";
				ele_visitor_v.style.color = 'red';
				ele_visitor_p.style.color = 'red';
			} else if(visitor < today_visitor){
				visitor_td = today_visitor - visitor;
				visitor_td_p = (visitor_td / today_visitor * 100).toFixed(2);
				visitor_td = "+" + visitor_td;
				visitor_td_p = "+" + visitor_td_p + "%";
				ele_visitor_v.style.color = 'blue';
				ele_visitor_p.style.color = 'blue';
			}
		}
		ele_visitor.innerHTML = today_visitor;
		ele_visitor_v.innerHTML = visitor_td;
		ele_visitor_p.innerHTML = visitor_td_p;

		var tr = document.createElement("tr");
		ele_returning.style.textAlign = 'center';
		tr.append(ele_date);
		tr.append(ele_returning);tr.append(ele_returning_v);tr.append(ele_returning_p);
		tr.append(ele_new);tr.append(ele_new_v);tr.append(ele_new_p);
		tr.append(ele_visitor);tr.append(ele_visitor_v);tr.append(ele_visitor_p);
		
		$('#statistic').append(tr);
		
		returning_visitor = Number(element[1]['Returning Visitor']);
		new_visitor = Number(element[1]['New Visitor']);
		visitor = Number(element[1]['Total']);
	});
}

dashboard_api_url = ['ajax.ga.all.day.php','ajax.ga.before.month.php','ajax.ga.today.php','ajax.ga.yesterday.php']
dashboard_elements = ['all', 'before_month','today','yesterday']
dashboard__custom_api_url = 'ajax.ga.returning.new.php'
function dashboard(today,yesterday,one_month,three_month,new_mb,returning){
	$.ajax({
		url : g5_url + '/adm/json/visit.php',
		dataType: 'json',
		data: {today:today,yesterday:yesterday,one_month:one_month,three_month:three_month,new_mb:new_mb,returning:returning},
		type: 'POST',
		success : function(data){
			let data2 = data.result;
			$('.today').animateNumber({
				number:data2[0]['today'],
				numberStep: $.animateNumber.numberStepFactories.separator(',')
			});

			$('.one_month').animateNumber({
				number:data2[0]['one_month'],
				numberStep: $.animateNumber.numberStepFactories.separator(',')
			});

			$('.yesterday').animateNumber({
				number:data2[0]['yesterday'],
				numberStep: $.animateNumber.numberStepFactories.separator(',')
			});

			$('.total').animateNumber({
				number:data2[0]['total'],
				numberStep: $.animateNumber.numberStepFactories.separator(',')
			});

			$('.new_mb').animateNumber({
				number:data2[0]['new_mb'],
				numberStep: $.animateNumber.numberStepFactories.separator(',')
			});

			$('.returning').animateNumber({
				number:data2[0]['returning'],
				numberStep: $.animateNumber.numberStepFactories.separator(',')
			});

		}
	});
}


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
