var today =moment().subtract(0,'day').format('YYYY-MM-DD'); // 오늘
//var yesterday =moment().subtract(1,'day').format('YYYY-MM-DD'); // 어제
$(document).ready(function(){
	$('input.date').val(today);
//	total_top();
	// total_bottom('', '', today, today);
	$('.page_search_btn').trigger('click');
	$('select[name="order"]').on('change', function(){
		switch($(this).find(':selected').val()){
			case '1':
			break;
			default:
				$(".tablesorter thead th:nth-child("+$(this).find(':selected').val()+")").trigger('click');
			break;
		}
		$(".tablesorter thead th:nth-child("+$(this).find(':selected').val()+")").trigger('click');
	})
	$('select[name="view_list"]').change(function(){
		var val = $('select[name="view_list"]').val();
		if(val != "all"){
			$('table.board_table > tbody > tr').each(function(){
				if($(this).attr("class") != val) $(this).hide();
				else $(this).show();
			});
		}else{
			$('table.board_table > tbody > tr').each(function(){
				$(this).show();
			});
		}
	});
});

function total_top(f){
	var device = '';
	if($('input[name="device"]:checked', f).val() != 'all') device = $('input[name="device"]:checked').val();
	var st_date = '';
	if($('input[name="start_date"]', f).val() != today) st_date = $('input[name="start_date"]', f).val();
	var ed_date = '';
	if($('input[name="end_date"]', f).val() != today) ed_date = $('input[name="end_date"]', f).val();
	var order = $('select[name="order"]').val();

	var url1 =  g5_url + '/adm/json/page_chart1.php?device='+device+'&st_date='+st_date+'&ed_date='+ed_date+'&order='+order;
	// var color4 = new Array('rgba(63,162,230,1)', 'rgba(48,150,235,1)', 'rgba(124,215,206,1)', 'rgba(90,187,220,1)', 'rgba(2,112,251,1)', 'rgba(133,207,145,1)', 'rgba(153,257,145,1)', 'rgba(163,157,145,1)');
	var color4 = new Array('rgba(2,112,251,1)','rgba(13,51,163,1)', 'rgba(90,187,220,1)','rgba(77,227,102,1)','rgba(230,63,110,1)','rgba(225,12,240,1)', 'rgba(255,239,15,1)', 'rgba(163,157,145,1)');
	var title1 = new Array('모티바가슴확대', '멘토 가슴확대','세빈 인테그리티','가슴재수술','가슴축소','출산 후 가슴성형','출산 후 가슴성형','출산 후 가슴성형');
	var title_tmp = new Array('motiva', 'mento', 'sebbin', 'revision', 'reduction', 'birth');
	var dateformat = 'MM월';//moment
	var direction = 'right';

	// 페이지별 접속 통계
	chart('chart16', url1, 6, color4, title1, dateformat, direction, 1);
	$('div.wait_box_page1').css('display', 'block');
setTimeout(function() {
	$.ajax({
		url : g5_url + '/adm/json/page_board.php',
		type : 'post',
		dataType : 'json',
		data : {device : device, st_date : st_date, ed_date : ed_date, order : order},
		async: false,
		success : function(data){
			var html = '';
			var str1 = [];
			var str2 = [];
			data = data.result;
			for(var i=0;i<data.length;i++){
				var option = '';
				for(var j=0;j<title1.length;j++) if(title1[j] == data[i].item) option = title_tmp[j];
				html += '<tr class="'+option+'"><td>'+data[i].item+'</td>';
				html += '<td>'+number_format(data[i].page_view)+'</td>';
				html += '<td>'+number_format(data[i].new_cnt)+'</td>';
				html += '<td>'+number_format(data[i].old_cnt)+'</td>';
				html += '<td>'+data[i].old_per+'%</td>';
				html += '<td>'+data[i].time+'</td>';
				html += '<td>'+number_format(data[i].exit)+'%</td>';
				html += '<td>'+number_format(data[i].online)+'</td></tr>';
				
				//조회수
				if(i == 0 || str1[0] < data[i].page_view) {
					str1[0] = data[i].page_view;
					str2[0] = data[i].item;
				}
				//신규방문자수
				if(i == 0 || str1[1] < data[i].new_cnt) {
					str1[1] = data[i].new_cnt;
					str2[1] = data[i].item;
				}
				//재방문자율
				if(i == 0 || str1[2] < data[i].old_cnt) {
					str1[2] = data[i].old_cnt;
					str2[2] = data[i].item;
				}
				//채류시간
				if(i == 0 || str1[3] < data[i].time) {
					str1[3] = data[i].time;
					str2[3] = data[i].item;
				}
				//이탈률
				if(i == 0 || str1[4] < data[i].exit) {
					str1[4] = data[i].exit+"%";
					str2[4] = data[i].item;
				}
				//이탈률
				if(i == 0 || str1[5] < data[i].online) {
					str1[5] = data[i].online;
					str2[5] = data[i].item;
				}
			}
			//조회수
			for(i=0;i<str1.length;i++) {
				$('p.title_'+(i+1)).html( str2[i] );
				var html_tmp = str1[i];
//				if( str2[i] != '') html_tmp += ' ('+str2[i]+'%)';
				$('p.value_'+(i+1)).html( html_tmp );
			}
			$('table.board_table > tbody > tr').empty(); // 추가
			$('table.board_table > tbody').html(html);
			$('div.wait_box_page1').css('display', 'none');
			$(".tablesorter").trigger("updateAll");
			$(".tablesorter").tablesorter(
			{
				headers: {
				  0: { lockedOrder: 'asc' },
				  1: { lockedOrder: 'desc' },
				  2: { lockedOrder: 'desc' },
				  3: { lockedOrder: 'desc' },
				  4: { lockedOrder: 'desc' },
				  5: { lockedOrder: 'desc' },
				  6: { lockedOrder: 'desc' },
				  7: { lockedOrder: 'desc' },
				  8: { lockedOrder: 'desc' }
				}

			}
			
			);
			$(".tablesorter thead th:nth-child(1)").trigger('click');
		}
	}); // ajax 끝
}, 10);
}

function page_excel(f){
	var device = '';
	if($('input[name="device"]:checked', f).val() != 'all') device = $('input[name="device"]:checked').val();
	var st_date = '';
	if($('input[name="start_date"]', f).val() != today) st_date = $('input[name="start_date"]', f).val();
	var ed_date = '';
	if($('input[name="end_date"]', f).val() != today) ed_date = $('input[name="end_date"]', f).val();
	var order = $('select[name="order"]').val();

	$.ajax({
		url : g5_url + '/adm/json/page_board.php',
		type : 'post',
		dataType : 'json',
		data : {device : device, st_date : st_date, ed_date : ed_date, order : order},
		success : function(data){
			//console.log(data);
			location.href=g5_url +'/adm/json/page.excel1.php?data='+JSON.stringify(data)+"&st_date="+st_date+"&ed_date="+ed_date+"&device="+device;
		}
	});
}

function page_excel2(f){
	var page=1;
	var device = '';
	if($('input[name="device"]:checked', f).val() != 'all') device = $('input[name="device"]:checked', f).val();
	var st_date = '';
	if($('input[name="start_date"]', f).val() != today) st_date = $('input[name="start_date"]', f).val();
	var ed_date = '';
	if($('input[name="end_date"]', f).val() != today) ed_date = $('input[name="end_date"]', f).val();
	var order = $('select[name="order2"]').val();
	var type = $('select[name="sub_catagory"]').val();
	var catagory = $('select[name="catagory"]').val();
	console.log(catagory);
	console.log(type);
	$.ajax({
		url : g5_url + '/adm/json/page_requri.php',
		dataType : 'json',
		async : false,
		type : 'post',
		data : {device : device, st_date : st_date, ed_date : ed_date, order : order, type : type, page : page},
		success : function(data){
			location.href=g5_url +'/adm/json/page.excel2.php?&st_date='+st_date+"&ed_date="+ed_date+"&device="+device+"&order="+order+"&type="+type+"&catagory="+catagory;
		}
	});

}
function total_bottom(f, sub_device, sub_st_date, sub_ed_date, sub_page){

	if(sub_page) var page = sub_page;
	else var page = 1;
	if(sub_device) var device = sub_device;
	else var device = '';
	if($('input[name="device"]:checked', f).val() != 'all') device = $('input[name="device"]:checked', f).val();
	if(sub_st_date) var st_date = sub_st_date;
	else var st_date = '';
	if($('input[name="start_date"]', f).val() != today) st_date = $('input[name="start_date"]', f).val();
	if(sub_ed_date) var ed_date = sub_ed_date;
	else var ed_date = '';
	if($('input[name="end_date"]', f).val() != today) ed_date = $('input[name="end_date"]', f).val();
	var order = $('select[name="order2"]').val();
	//var type = $('select[name="sub_catagory"]').val();
	var type = $('select[name="catagory"]').find("option:selected").data("val");
	console.log(type);
	$('div.wait_box_page2').css('display', 'block');
	
	setTimeout(function() {
		$.ajax({
			url : g5_url + '/adm/json/page_requri.php',
			dataType : 'json',
			async : false,
			type : 'post',
			data : {device : device, st_date : st_date, ed_date : ed_date, order : order, type : type, page : page},
			success : function(data){
				var html = '';
				var html2 = '';
				var html3 = '';
				var total = data.total;
				var total2 = data.total2;
				var total3 = data.total3;
				data2 = data.result;
				if(total > 0){
					for(var i=0; i<data2.length; i++){
						html += '<tr><td>'+(((page - 1) * 10) + i + 1)+'</td>';
						html += '<td><a href="'+data2[i].referer+'" target="_blank">'+data2[i].referer+'</a></td>';
						html += '<td>'+number_format(data2[i].cnt)+'</td>';
						html += '<td>'+Math.round(data2[i].cnt / total * 100)+'%</td></tr>';
					}
				}else{
					html += '<tr><td colspan="4">결과가 없습니다.</td></tr>';
				}

				data2 = data.result2;
				if(total2 > 0){
					for(var i=0; i<data2.length; i++){
						html2 += '<tr><td>'+(i+1)+'</td>';
						html2 += '<td data-tooltip-text='+data2[i].referer+'>'+data2[i].referer.substring(0, 40)+'</td>';
						html2 += '<td>'+number_format(data2[i].cnt)+'</td>';
						html2 += '<td>'+Math.round(data2[i].cnt / total2 * 100)+'%</td></tr>';
					}
				}else{
					html2 += '<tr><td colspan="4">결과가 없습니다.</td></tr>';
				}

				data2 = data.result3;
				var text_null = "";
				if(total3 > 0){
					for(var i=0; i<data2.length; i++){
						if(data2[i].referer == null) {
							text_null = "검색어 없음";
						}else{
							text_null =data2[i].referer;
						}
						html3 += '<tr><td>'+(i+1)+'</td>';
						html3 += '<td>'+text_null+'</td>';
						html3 += '<td>'+number_format(data2[i].cnt)+'</td>';
						html3 += '<td>'+Math.round(data2[i].cnt / total3 * 100)+'%</td></tr>';
					}
				}else{
					html3 += '<tr><td colspan="4">결과가 없습니다.</td></tr>';
				}
				// $('table.top20 > tbody').html(html);
				// $('table.referer10 > tbody').html(html2);
				// $('table.word10 > tbody').html(html3);
				$('span.tot_cnt').html(number_format(data.total));
				$('div.wait_box_page2').css('display', 'none');
				// $.ajax({
				// 	url : g5_url + '/adm/json/page_paging.php',
				// 	type : 'post',
				// 	data : {page : page, total : data.page, device : device, st_date : st_date, ed_date : ed_date},
				// 	success : function(data){
				// 		$('div.page_bar').html(data);
				// 	}
				// });
			}
		}); // ajax끝
	}, 10);
}
