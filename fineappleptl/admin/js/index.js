var yesterday =moment().subtract(1,'day').format('YYYY-MM-DD'); // 어제

$(window).on('load', function() {
	var today = moment().format('YYYY-MM-DD'); // 오늘
	var yesterday =moment().subtract(1,'day').format('YYYY-MM-DD'); // 어제
	var one_month =moment().subtract(1,'months').format('YYYY-MM-DD'); // 전월(한달전 오늘)
	var three_month = moment().subtract(3,'months').format('YYYY-MM-DD'); // 3개월전 오늘

	$('.date').text(today);
	member(today);
});

$(document).ready(function(){
	$('.excel_button').click(function(){
		var date = $('.date').text();
		location.href = g5_url + '/admin/json/chart.excel.php?today='+date;
	});

	var url = g5_url + "/admin/json/index_chart1.php";
	var url2 = g5_url + "/admin/json/index_chart2.php";
	var url3 = g5_url + "/admin/json/index_chart3.php";
	var url4 = g5_url + "/admin/json/index_chart4.php";
	var color = new Array('rgba(87,92,98,1)', 'rgba(223,223,223,1)', 'rgba(189,234,216,1)');
	var title1 = new Array('재방문자', '신규방문자')
	var title2= new Array('PC', '모바일')
	var dateformat = 'MM월';//moment
	var dateformat2 = 'DD일';//moment
	var direction = 'right';

	// 관리자 메인
	chart('chart1', url, 6, color, title1, dateformat, direction, 1);
	chart('chart2', url2, 6, color, title2, dateformat, direction, 1);
	$('input.date').val(yesterday);
	domain20();
	keyword20();
});

// 신규 회원 통계
function member(yesterday){
	$.ajax({
		url : g5_url + '/admin/json/member_count.php',
		dataType: 'json',
		data:{yesterday:yesterday},
		type: 'POST',
		success : function(data){
			$('.new_member').animateNumber({
				number:data.result[0]['new_member'],
				numberStep: $.animateNumber.numberStepFactories.separator(',')
			},{
				easing: 'swing',
				duration: 1000
  			});
			$('.total_member').animateNumber({
				number:data.result[0]['total_member'],
				numberStep: $.animateNumber.numberStepFactories.separator(',')
			},{
				easing: 'swing',
				duration: 1000
  			});
		}
	});
};

// 키워드20
function keyword20(device, st_date, ed_date, page) {
	if(!device) device = '';
	if(!st_date) st_date = '';
	if(!ed_date) ed_date = '';
	if(!page) page = 1;
	$('div.wait_box').css('display', 'block');
setTimeout(function() {
	$.ajax({
		url : g5_url + '/admin/json/index_keyword.php',
		dataType: 'json',
		data:{device : device, st_date : st_date, ed_date : ed_date, page : page},
		type: 'POST',
		success : function(data){
			var total = data.total;
			var total3 = data.total3;
			var html = '';
			var add_cnt = 0;
			var all_cnt = 0;
			data = data.result;
			for(var i=0; i<data.length; i++){

					html += "<tr>";
					html += "<td class='td1'>"+(((page - 1) * 10) + i + 1)+"</td>";
					html += "<td ><span class='td2'>"+data[i]['date']+"</span></td>";
					if(data[i]['add']){
						add_cnt = (parseInt(data[i]['cnt'])+parseInt(data[i]['add']))
						html += "<td class='td3'>"+add_cnt +"</td>";
					}else{
						add_cnt = (parseInt(data[i]['cnt']));
						html += "<td class='td3'>"+ add_cnt+"</td>";
					}
					//html += "<td class='td4'>"+Math.round(add_cnt / total3 * 100)+"% </td>";
					if(add_cnt == 0) html += "<td class='td4'>0% </td>";
					else html += "<td class='td4'>"+Math.round(add_cnt / total3 * 100)+"% </td>";
					html += "</tr>";
			}
			$('input[name="total_page1"]').val(total);
			$('.keyword').html(html);
			$('div.wait_box').css('display', 'none');
			// 페이징
			$.ajax({
				url : g5_url + '/admin/json/index_paging1.php',
				async : false,
				data:{device : device, st_date : st_date, ed_date : ed_date, total : total, page : page},
				type: 'POST',
				success : function(data){
					$('div.page_bar.day1').html(data);
				}
			});
		}

	});// ajax 끝
}, 10);

}
function search1(f){
	var page = $('input[name="page1"]', f).val();
	var st_date = $('input[name="start_date"]', f).val();
	var ed_date = $('input[name="end_date"]', f).val();
	var device = $('input[name="device"]:checked', f).val();
	if(device == 'all') device = '';
	keyword20(device, st_date, ed_date, page);
}

// 도메인 top20
function domain20(device, st_date, ed_date, page) {
	if(!device) device = '';
	if(!st_date) st_date = '';
	if(!ed_date) ed_date = '';
	if(!page) page = 1;
	$('div.wait_box2').css('display', 'block');
setTimeout(function() {
	$.ajax({
		url : g5_url + '/admin/json/index_domain.php',
		dataType: 'json',
		data:{device : device, st_date : st_date, ed_date : ed_date, page : page},
		type: 'POST',
		success : function(data){
			var total = data.total;
			var html = '';
			data = data.result;
			for(var i=0; i<data.length; i++){
				html += "<tr>";
				html += "<td class='td1'>"+(((page - 1) * 10) + i + 1)+"</td>";
				html += "<td><span class='td2'><a href='"+data[i]['date']+"' target='_blank'>"+data[i]['date']+"</a></span></td>";
				html += "<td class='td3'>"+data[i]['cnt']+"</td>";
				html += "<td class='td4'>"+data[i]['per']+"% </td>";
				html += "</tr>";
			}
			$('input[name="total_page2"]').val(total);
			$('.domain').html(html);
			$('div.wait_box2').css('display', 'none');
			// 페이징
			$.ajax({
				url : g5_url + '/admin/json/index_paging2.php',
				async : false,
				data:{device : device, st_date : st_date, ed_date : ed_date, total : total, page : page},
				type: 'POST',
				success : function(data){
					$('div.page_bar.day2').html(data);
				}
			});

		}
	});// ajax 끝
}, 10);
}
function search2(f){
	var page = $('input[name="page2"]', f).val();
	var st_date = $('input[name="start_date"]', f).val();
	var ed_date = $('input[name="end_date"]', f).val();
	var device = $('input[name="device"]:checked', f).val();
	if(device == 'all') device = '';
	domain20(device, st_date, ed_date, page);
}

function number_format( number )
{
  var nArr = String(number).split('').join(',').split('');
  for( var i=nArr.length-1, j=1; i>=0; i--, j++)  if( j%6 != 0 && j%2 == 0) nArr[i] = '';
  return nArr.join('');
}
