$(window).load(function() {
	var today = moment().format('YYYY-MM-DD'); // 오늘
	var yesterday =moment().subtract(1,'day').format('YYYY-MM-DD'); // 어제
	member(today,yesterday);
});

// 신규 회원 카운트
function member(today,yesterday){
	$.ajax({
		url : g5_url + '/adm/json/member_count2.php',
		dataType: 'json',
		data:{today:today,yesterday:yesterday},
		type: 'POST',
		success : function(data){
			//console.log(data);
			$('.date_all_mb').text(data.result[0]['total_member']);
			$('.date_out').text(data.result[0]['leave_member']);
		}
	});
};
