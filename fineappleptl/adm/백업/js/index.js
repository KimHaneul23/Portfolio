var yesterday =moment().subtract(1,'day').format('YYYY-MM-DD'); // 어제

$(window).on('load', function() {
	var today = moment().format('YYYY-MM-DD'); // 오늘
	var yesterday =moment().subtract(1,'day').format('YYYY-MM-DD'); // 어제
	var one_month =moment().subtract(1,'months').format('YYYY-MM-DD'); // 전월(한달전 오늘)
	var three_month = moment().subtract(3,'months').format('YYYY-MM-DD'); // 3개월전 오늘

	$('.date').text(yesterday);
	visit(today,yesterday,one_month,three_month);
	member(yesterday);
	mng(yesterday);
	page();
	exit20;
});

$(document).ready(function(){
	$('.excel_button').click(function(){
			var date = $('.date').text();
			//console.log(date);
			location.href = g5_url + '/adm/json/chart.excel.php?yesterday='+date;
	});

	var url = g5_url + "/adm/json/index_chart1.php";
	var url2 = g5_url + "/adm/json/index_chart2.php";
	var url3 = g5_url + "/adm/json/index_chart3.php";
	var url4 = g5_url + "/adm/json/index_chart4.php";
	//var url5 = g5_url + "/adm/json/chart5.json";
	var color = new Array('rgba(87,92,98,1)', 'rgba(223,223,223,1)', 'rgba(189,234,216,1)');
	var color3 = new Array('rgba(254,190,30,1)', 'rgba(30,30,30,1)');
	// var color4 = new Array('rgba(63,162,230,1)', 'rgba(48,150,235,1)', 'rgba(124,215,206,1)', 'rgba(90,187,220,1)', 'rgba(2,112,251,1)', 'rgba(133,207,145,1)');
	//광고주 요청으로 인해 색상 변경 20210621
	var color4 = new Array('rgba(2,112,251,1)','rgba(13,51,163,1)', 'rgba(90,187,220,1)','rgba(77,227,102,1)','rgba(230,63,110,1)','rgba(225,12,240,1)');
	var title3 = new Array('예약', '내원')
	var title1 = new Array('재방문자', '신규방문자')
	var title2= new Array('PC', '모바일')
	//var title4 = new Array('PC', '모바일','PC', '모바일','PC', '모바일')
	var title4 = new Array('안면 윤곽', '가슴 성형', '눈성형', '코성형', '안티에이징', '쁘띠', '체형성형', '피부과');
	//var title = new Array('녹취');
	var dateformat = 'MM월';//moment
	var dateformat2 = 'DD일';//moment
	var direction = 'right';

	// 관리자 메인
	chart('chart1', url, 6, color, title1, dateformat, direction, 1);
	chart('chart2', url2, 6, color, title2, dateformat, direction, 1);
	chart('chart3', url3, 3, color3, title3, dateformat2, direction, 1);
//	chart('chart5', url4, 6, color4, title4, dateformat, direction, 1);
	$('input.date').val(yesterday);
	domain20();
	keyword20();
	page20();
	exit20();
});

// 페이지별 접속 통계
function page() {
	$.ajax({
		url : g5_url + '/adm/json/page_total.php',
		dataType: 'json',
		type: 'POST',
		success : function(data){
			console.log(data.result);
			$('.page_content1').text(data.result[0].item);
			$('.page_content2').text(data.result[1].item);
			$('.page_content3').text(data.result[2].item);
			$('.page_content4').text(data.result[3].item);
			$('.page_content5').text(data.result[4].item);
			$('.page_content6').text(data.result[5].item);

			$('.page_count1').animateNumber({
				number:data.result[0]['value'],
				numberStep: $.animateNumber.numberStepFactories.append(' 명')
			},{
				easing: 'swing',
				duration: 1000
  			});
			$('.page_count2').animateNumber({
				number:data.result[1]['value'],
				numberStep: $.animateNumber.numberStepFactories.append(' 명')
			},{
				easing: 'swing',
				duration: 1000
  			});
			$('.page_count3').animateNumber({
				number:data.result[2]['value'],
				numberStep: $.animateNumber.numberStepFactories.append(' 명')
			},{
				easing: 'swing',
				duration: 1000
  			});
			$('.page_count4').text(data.result[3]['value']);
			$('.page_count5').animateNumber({
				number:data.result[4]['value'],
				numberStep: $.animateNumber.numberStepFactories.append('%')
			},{
				easing: 'swing',
				duration: 1000
  			});
			$('.page_count6').animateNumber({
				number:data.result[5]['value'],
				numberStep: $.animateNumber.numberStepFactories.append(' 명')
			},{
				easing: 'swing',
				duration: 1000
  			});

		}
	})
}



// 방문자 접속 통계(방문자수,누적 방문자 수)
function visit(today,yesterday,one_month,three_month) {
	$.ajax({
		url : g5_url + '/adm/json/visit.php',
		dataType: 'json',
		data:{today:today,yesterday:yesterday,one_month:one_month,three_month:three_month},
		type: 'POST',
		success : function(data){
			$('.total').animateNumber({
				number:data.result[0]['total'],
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
			//$('.total').text(data.result[0]['total']);
			//$('.yesterday').text(data.result[0]['yesterday']);
		}
	});
};

// 신규 회원 통계
function member(yesterday){
	$.ajax({
		url : g5_url + '/adm/json/member_count.php',
		dataType: 'json',
		data:{yesterday:yesterday},
		type: 'POST',
		success : function(data){
			//console.log(data);
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
			//$('.new_member').text(data.result[0]['new_member']);
			//$('.total_member').text(data.result[0]['total_member']);
		}
	});
};

// 상담신청 통계
function mng(yesterday){
	$.ajax({
		url : g5_url + '/adm/json/index_mng_count.php',
		dataType: 'json',
		data:{yesterday:yesterday},
		type: 'POST',
		success : function(data){

			$('.mng1').animateNumber({
				number:data.result[0]['mng1'],
				numberStep: $.animateNumber.numberStepFactories.separator(',')
			},{
				easing: 'swing',
				duration: 1000
  			});
			$('.mng2').animateNumber({
				number:data.result[0]['mng2'],
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
		url : g5_url + '/adm/json/index_keyword.php',
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
				url : g5_url + '/adm/json/index_paging1.php',
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
		url : g5_url + '/adm/json/index_domain.php',
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
				url : g5_url + '/adm/json/index_paging2.php',
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

// page top20
function page20(device, st_date, ed_date, page) {
	if(!device) device = '';
	if(!st_date) st_date = '';
	if(!ed_date) ed_date = '';
	if(!page) page = 1;
	$('div.wait_box3').css('display', 'block');
setTimeout(function() {
	$.ajax({
		url : g5_url + '/adm/json/index_page.php',
		dataType: 'json',
		data:{device : device, st_date : st_date, ed_date : ed_date, page : page},
		type: 'POST',
		success : function(data){
			var total = data.total;
			var total2 = data.total2;
			var html = '';
			data = data.result;
			for(var i=0; i<data.length; i++){
				html += "<tr>";
				html += "<td class='td1'>"+(((page - 1) * 10) + i + 1)+"</td>";
				html += "<td><span class='td2'><a href='"+g5_url+'/'+data[i]['item']+"' target='_blank'>"+data[i]['item']+"</a></span></td>";
				html += "<td class='td3'>"+number_format(data[i]['value'])+"</td>";
				html += "<td class='td4'>"+Math.round(data[i]['value'] / total2 * 100)+"% </td>";
				html += "</tr>";
			}
			$('input[name="total_page3"]').val(total);
			$('.page20').html(html);
			$('div.wait_box3').css('display', 'none');
			// 페이징
			$.ajax({
				url : g5_url + '/adm/json/index_paging3.php',
				async : false,
				data:{device : device, st_date : st_date, ed_date : ed_date, total : total, page : page},
				type: 'POST',
				success : function(data){
					$('div.page_bar.day3').html(data);
				}
			});

		}
	});// ajax 끝
}, 10);
}
function search3(f){
	var page = $('input[name="page3"]', f).val();
	var st_date = $('input[name="start_date"]', f).val();
	var ed_date = $('input[name="end_date"]', f).val();
	var device = $('input[name="device"]:checked', f).val();
	if(device == 'all') device = '';
	page20(device, st_date, ed_date, page);
}
// exit top20
function exit20(device, st_date, ed_date, page) {
	if(!device) device = '';
	if(!st_date) st_date = '';
	if(!ed_date) ed_date = '';
	if(!page) page = 1;
	$('div.wait_box4').css('display', 'block');
setTimeout(function() {
	$.ajax({
		url : g5_url + '/adm/json/index_exit.php',
		dataType: 'json',
		data:{device : device, st_date : st_date, ed_date : ed_date, page : page},
		type: 'POST',
		success : function(data){
			var total = data.total;
			var total2 = data.total2;
			var html = '';
			data = data.result;
			for(var i=0; i<data.length; i++){
				html += "<tr>";
				html += "<td class='td1'>"+(((page - 1) * 10) + i + 1)+"</td>";
				html += "<td><span class='td2'><a href='"+g5_url+'/'+data[i]['item']+"' target='_blank'>"+data[i]['item']+"</a></span></td>";
				html += "<td class='td3'>"+number_format(data[i]['value'])+"</td>";
				html += "<td class='td4'>"+data[i]['value2']+"% </td>";
				html += "</tr>";
			}
			$('input[name="total_page4"]').val(total);
			$('.exit').html(html);
			$('div.wait_box4').css('display', 'none');
			// 페이징
			$.ajax({
				url : g5_url + '/adm/json/index_paging4.php',
				async : false,
				data:{device : device, st_date : st_date, ed_date : ed_date, total : total, page : page},
				type: 'POST',
				success : function(data){
					$('div.page_bar.day4').html(data);
				}
			});

		}
	});// ajax 끝
}, 10);
}
function search4(f){
	var page = $('input[name="page3"]', f).val();
	var st_date = $('input[name="start_date"]', f).val();
	var ed_date = $('input[name="end_date"]', f).val();
	var device = $('input[name="device"]:checked', f).val();
	if(device == 'all') device = '';
	exit20(device, st_date, ed_date, page);
}
function number_format( number )
{
  var nArr = String(number).split('').join(',').split('');
  for( var i=nArr.length-1, j=1; i>=0; i--, j++)  if( j%6 != 0 && j%2 == 0) nArr[i] = '';
  return nArr.join('');
}
