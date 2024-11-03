// 페이징
$(document).ready(function(){
	visit_paging();
});
function visit_paging(st_date, ed_date, page) {
	if(!st_date) st_date = '';
	if(!ed_date) ed_date = '';
	if(!page) page = 1;
	
	$.ajax({
		url : g5_url + '/adm/json/index_paging1.php',
		async : false,
		data:{st_date : st_date, ed_date : ed_date, total : total, page : page},
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
			$('div.page_bar').html(html);
		}
	});
}