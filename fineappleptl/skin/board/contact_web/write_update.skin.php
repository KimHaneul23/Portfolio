<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가
include_once(G5_LIB_PATH.'/icode.sms.lib.php');

$wr_7 ='';
$wr_7 = implode(',', $_POST['ch_wr_7']);

$sql = " update $write_table
            set wr_good = '$wr_good',
                wr_7 = '$wr_7',
                wr_11 = '$wr_11'
          where wr_id = '$wr_id' ";
sql_query($sql);
delete_cache_latest($bo_table);
if ($is_admin){
	$sql1 = " update $write_table set wr_datetime='$wr_datetime', wr_last='$wr_datetime', wr_hit='$wr_hit' where wr_id = '$wr_id' "; 
} else {
	$wr_datetime = date("Y-m-d H:i:s");
	$wr_hit = 0;
	$sql1 = " update $write_table set wr_datetime='$wr_datetime', wr_hit='$wr_hit' where wr_id = '$wr_id' "; 
}
sql_query($sql1);

if (defined('G5_IS_ADMIN')) {
    $site_msg = "프로젝트 문의 수정이 완료되었습니다.";
    alert($site_msg, G5_ADMIN_URL.'/board.php?bo_table='.$bo_table.'&sca='.$sca.'&page='.$page.'"');
}else{
    
    // 문의글 등록시 관리자에게 전송
    $send_hp_mb = "07046332028"; // 보내는 전화번호
    $recv_hp_mb1 = "01088169943"; //  받는 전화번호1
    $recv_hp_mb2 = "01050058614"; //  받는 전화번호2
    
    $send_hp = str_replace("-","",$send_hp_mb); // - 제거
    $recv_hp1 = str_replace("-","",$recv_hp_mb1); // - 제거
    $recv_hp2 = str_replace("-","",$recv_hp_mb2); // - 제거
    
    $send_number =  "$send_hp";
    $recv_number1 = "$recv_hp1";
    $recv_number2 = "$recv_hp2";
    
    $sms_content = "프로젝트 문의가 접수되었습니다.\r\n업제명:".$wr_subject."\r\n담당자:".$wr_name;  // 문자 내용    
    
    $SMS = new SMS; // SMS 연결
    $SMS->SMS_con($config['cf_icode_server_ip'], $config['cf_icode_id'], $config['cf_icode_pw'], $config['cf_icode_server_port']);
    
    $SMS->Add($recv_number1, $send_number, $config['cf_icode_id'], iconv("utf-8", "euc-kr", stripslashes($sms_content)), "");
    $SMS->Send();
    
    $SMS->Add($recv_number2, $send_number, $config['cf_icode_id'], iconv("utf-8", "euc-kr", stripslashes($sms_content)), "");
    $SMS->Send(); 
    // 문자보내기 끝
    
    $site_msg = "프로젝트 문의가 접수되었습니다.";
    alert($site_msg, G5_URL.'/contact.php');
}
?>