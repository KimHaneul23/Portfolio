$(window).load(function() {
	//var yesterday = moment().format('YYYY-MM-DD'); // 오늘
	var yesterday =moment().subtract(1,'day').format('YYYY-MM-DD'); // 어제
	$('.date').text(yesterday);
	 mng(yesterday);
});

$(document).ready(function(){
	// 전체 선택 클릭시
	$("#allcheck").click(function(){
		if($("#allcheck").prop("checked")) { 	//만약 전체 선택 체크박스가 체크된상태일경우
			$("input[type=checkbox]").prop("checked",true); //해당화면에 전체 checkbox들을 체크해준다
		} else {  // 전체선택 체크박스가 해제된 경우
			$("input[type=checkbox]").prop("checked",false); //해당화면에 모든 checkbox들의 체크를해제시킨다.
		}
	})
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

	// 클릭한 상담 선택 삭제
	$('.chk_delete').click(function(){
		var code = new Array();
		$('input[name=cnk_num]:checked').each(function() {
			code.push($(this).val());
		});
		$.ajax({
			url : g5_url + '/adm/json/mng_chk_delete.php',
			//dataType: 'json',
			data:{code:code},
			type: 'POST',
			success : function(data){
				alert(data);
				 window.location.href = g5_url + '/adm/consul_mng.php';
			}
		});
	});

});

// 답변여부 업뎃
function change_wr_1(num,answer){
	var answer = $(answer).val();
	$.ajax({
		url : g5_url + '/adm/json/mng_update.php',
		data:{num:num,answer:answer},
		type: 'POST',
		success : function(data){
			console.log(data);
			alert("수정완료");
		}
	});
}

// 내원여부 업뎃
function change_wr_4(num,visit_num){
	var visit_num = $(visit_num).val();
	$.ajax({
		url : g5_url + '/adm/json/mng_update2.php',
		data:{num:num,visit_num:visit_num},
		type: 'POST',
		success : function(data){
			console.log(data);
			alert("수정완료");
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
