<?php
include_once('./_common.php');

$mb_zip1 = substr($_POST['mb_zip'], 0, 3);
$mb_zip2 = substr($_POST['mb_zip'], 3);

if($write_type == u){
if ($mb_password)
	$sql_password = ", mb_password = '".get_encrypt_string($mb_password)."' ";
else
	$sql_password = "";

$sql ="update g5_member
	set mb_name = '{$_POST['mb_name']}',
	mb_level='{$_POST['mb_level']}',
	mb_email='{$_POST['mb_email']}',
	mb_hp='{$_POST['mb_hp']}',
	mb_certify='{$_POST['mb_certify']}',
	mb_zip1='$mb_zip1',
	mb_zip2='$mb_zip2',
	mb_addr1 = '{$_POST['mb_addr1']}',
	mb_addr2 = '{$_POST['mb_addr2']}',
	mb_addr3 = '{$_POST['mb_addr3']}',
	mb_addr_jibeon = '{$_POST['mb_addr_jibeon']}',
	mb_memo = '{$_POST['mb_memo']}',
	mb_nick='{$_POST['mb_nick']}',
	mb_1='{$_POST['mb_1']}',
	mb_2='{$_POST['mb_2']}',
	mb_tel='{$_POST['mb_tel']}',
	mb_3='{$_POST['mb_3']}',
	mb_4='{$_POST['mb_4']}',
	mb_mailling='{$_POST['mb_mailling']}',
	mb_sms='{$_POST['mb_sms']}',
	mb_open='{$_POST['mb_open']}',
	mb_adult='{$_POST['mb_adult']}'
	{$sql_password}
	where mb_no = {$_POST['mb_no']}
";
}else{
	$sql ="insert into g5_member
		set mb_name = '{$_POST['mb_name']}',
		mb_id = '{$_POST['mb_id']}',
		mb_level='{$_POST['mb_level']}',
		mb_email='{$_POST['mb_email']}',
		mb_hp='{$_POST['mb_hp']}',
		mb_certify='{$_POST['mb_certify']}',
		mb_zip1='$mb_zip1',
		mb_zip2='$mb_zip2',
		mb_addr1 = '{$_POST['mb_addr1']}',
		mb_addr2 = '{$_POST['mb_addr2']}',
		mb_addr3 = '{$_POST['mb_addr3']}',
		mb_addr_jibeon = '{$_POST['mb_addr_jibeon']}',
		mb_memo = '{$_POST['mb_memo']}',
	  mb_nick_date = '".G5_TIME_YMD."',
		mb_datetime = '".G5_TIME_YMDHIS."',
		mb_today_login = '".G5_TIME_YMDHIS."',
  	mb_login_ip = '{$_SERVER['REMOTE_ADDR']}',
		mb_email_certify ='".G5_TIME_YMDHIS."',
		mb_ip = '{$_SERVER['REMOTE_ADDR']}',
		mb_password='".get_encrypt_string($mb_password)."',
		mb_nick='{$_POST['mb_nick']}',
		mb_1='{$_POST['mb_1']}',
		mb_2='{$_POST['mb_2']}',
		mb_tel='{$_POST['mb_tel']}',
		mb_3='{$_POST['mb_3']}',
		mb_4='{$_POST['mb_4']}',
		mb_mailling='{$_POST['mb_mailling']}',
		mb_sms='{$_POST['mb_sms']}',
		mb_open='{$_POST['mb_open']}',
		mb_adult='{$_POST['mb_adult']}',
		mb_open_date = '".G5_TIME_YMD."'
	";
}
$result = sql_query($sql);

if($write_type == u){
	goto_url('../member_write.php?mb_no='.$_POST['mb_no']);
} else{
	goto_url('../member_list.php');
}
?>
