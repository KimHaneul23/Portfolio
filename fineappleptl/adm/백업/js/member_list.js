$(window).load(function() {
	var today = moment().format('YYYY-MM-DD'); // 오늘
	var yesterday =moment().subtract(1,'day').format('YYYY-MM-DD'); // 어제
	member(today,yesterday);

	$('.date').text(today);
});

$(document).ready(function(){
	var url1 = g5_url + "/adm/json/member_chart1.php";
	// var color4 = new Array('rgba(63,162,230,1)', 'rgba(48,150,235,1)', 'rgba(124,215,206,1)', 'rgba(90,187,220,1)', 'rgba(2,112,251,1)', 'rgba(133,207,145,1)');
	var color4 = new Array('rgba(2,112,251,1)','rgba(13,51,163,1)', 'rgba(90,187,220,1)','rgba(77,227,102,1)','rgba(230,63,110,1)','rgba(225,12,240,1)');
	var title = new Array('예약', '내원','예약', '내원','예약', '내원')
	//var title = new Array('녹취');
	var dateformat = 'MM월';//moment
	var direction = 'right';
	
	// 날짜 기본값 넣어주기 
	var mb_start = $('.start_date').val();
	var mb_end = $('.end_date').val();
	 var now = moment(new Date()).format('YYYY-MM-DD');
	if(mb_start == ''){
		$('.start_date').val('2020-01-01');
	}
	if(mb_end == ''){
		$('.end_date').val(now);
	}
	// 회원관리
	chart('chart24', url1, 6, color4, title, dateformat, direction, 1);

	// 전체 선택 클릭시
	$("#allcheck").click(function(){
		if($("#allcheck").prop("checked")) { 	//만약 전체 선택 체크박스가 체크된상태일경우
			$(".cnk_num").prop("checked",true); //해당화면에 전체 checkbox들을 체크해준다
		} else {  // 전체선택 체크박스가 해제된 경우
			$(".cnk_num").prop("checked",false); //해당화면에 모든 checkbox들의 체크를해제시킨다.
		}
	})

	// 삭제
	$('.member_delete').click(function(){
		var num = $(this).attr('id');

		$.ajax({
			url : g5_url + '/adm/json/member_delete.php',
			//dataType: 'json',
			data:{num:num},
			type: 'POST',
			success : function(data){
				alert(data);
				window.location.href = g5_url + '/adm/member_list.php';
			}
		});
	});

	// 클릭한 멤버 선택 삭제
	$('.chk_delete').click(function(){
		var code = new Array();
		$('input[name=cnk_num]:checked').each(function() {
			code.push($(this).val());
			//console.log(code);
		});
		$.ajax({
			url : g5_url + '/adm/json/member_chk_delete.php',
			//dataType: 'json',
			data:{code:code},
			type: 'POST',
			success : function(data){
				alert(data);
				window.location.href = g5_url + '/adm/member_list.php';
			}
		});
	});
});
// 내원여부 업뎃
function change_mb_3(num,mb_3){
	var mb_3 = $(mb_3).val();
	$.ajax({
		url : g5_url + '/adm/json/member_mb3_update.php',
		dataType: 'json',
		data:{num:num,mb_3:mb_3},
		type: 'POST',
		success : function(data){
			alert("수정완료");
		}
	});
}
// sms 업뎃
function change_mb_sms(num,sms){
	var chk_sms ='';
	if($(sms).is(":checked") == true) {
		chk_sms = 1;
	} else {
		chk_sms = 0;
	}
	$.ajax({
		url : g5_url + '/adm/json/member_sms_update.php',
		data:{num:num,chk_sms:chk_sms},
		type: 'POST',
		success : function(data){
				alert("수정완료");
		}
	});
}
// 성인인증 업뎃
function change_mb_adult(num,adult){
	var chk_adult ='';
	if($(adult).is(":checked") == true) {
		chk_adult = 1;
	} else {
		chk_adult = 0;
	}
	$.ajax({
		url : g5_url + '/adm/json/member_adult_update.php',
		data:{num:num,chk_adult:chk_adult},
		type: 'POST',
		success : function(data){
			alert("수정완료");
		}
	});
}
// 이메일 업뎃
function change_mb_mail(num,mail){
	var chk_mail ='';
	if($(mail).is(":checked") == true) {
		chk_mail = 1;
	} else {
		chk_mail = 0;
	}
	$.ajax({
		url : g5_url + '/adm/json/member_mail_update.php',
		data:{num:num,chk_mail:chk_mail},
		type: 'POST',
		success : function(data){
			alert("수정완료");
		}
	});
}
// 신규 회원 카운트
function member(today,yesterday){
	$.ajax({
		url : g5_url + '/adm/json/member_count2.php',
		dataType: 'json',
		data:{today:today,yesterday:yesterday},
		type: 'POST',
		success : function(data){
			//console.log(data);
			$('.today_member').animateNumber({
				number:data.result[0]['today_member'],
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
			$('.yesterday_member').animateNumber({
				number:data.result[0]['yesterday_member'],
				numberStep: $.animateNumber.numberStepFactories.separator(',')
			},{
				easing: 'swing',
				duration: 1000
  			});
			$('.leave_member').animateNumber({
				number:data.result[0]['leave_member'],
				numberStep: $.animateNumber.numberStepFactories.separator(',')
			},{
				easing: 'swing',
				duration: 1000
  			});
			//$('.today_member').text(data.result[0]['today_member']);
			//$('.total_member').text(data.result[0]['total_member']);
			//$('.yesterday_member').text(data.result[0]['yesterday_member']);
			//$('.leave_member').text(data.result[0]['leave_member']);

			$('.date_all_mb').text(data.result[0]['total_member']);
			$('.date_out').text(data.result[0]['leave_member']);
		}
	});
};
