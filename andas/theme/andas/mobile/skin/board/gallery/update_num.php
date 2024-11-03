<?php
include_once "_common.php";

if($is_admin == 'super') {
    // 글순서 변경하기
    // https://sir.kr/g4_tiptech/15990
    $write_table = $g5['write_prefix'].$_POST['bo_table'];
   
    //echo "insert_num = ". $_POST['insert_num'] ."<br>";
   
    if($insert_num && $_POST['insert_num'] > 0) {
        $insert_num--;
        $row2 = sql_fetch(" select wr_num from ".$write_table." where wr_is_comment = 0 order by wr_num DESC limit ".$insert_num.", 1 ");
        $move_wr_num = $row2['wr_num'];
     
        if($w =='') {
            $pre_wr_num = $wr_num;
        } else {
            $row3 = sql_fetch(" select wr_num from ".$write_table." where wr_id= '".$wr_id."' ");
            $pre_wr_num = $row3['wr_num'];
        }
        //echo "<br>///check/////////////1.m_wr_num= $move_wr_num ///pre_wr_num= $pre_wr_num";    exit;
   
        if( $move_wr_num ) {
            // 이동 대상될 게시글의 wr_num를 $ori_num 에 대입
            $ori_wr_num = $move_wr_num;
            // 지정번호 이후것들을 - 증가
            sql_query("update ".$write_table." set wr_num = wr_num - 1 where wr_num<= ".$move_wr_num." " );
        } else {
            $move_wr_num = get_next_num($write_table);
        }
            $ori_wr_num = $move_wr_num;
       
        ///////
        //echo "update ".$write_table." set wr_num = wr_num - 1 where wr_num<= ".$move_wr_num." <br>";
   
        if($move_wr_num > $pre_wr_num) $pre_wr_num--;
       
        sql_query("update ".$write_table." set wr_num = ".$move_wr_num." where wr_num= '".$pre_wr_num."' " );
       
        ///////
        //echo "update ".$write_table." set wr_num = ".$move_wr_num." where wr_num= '".$pre_wr_num."' <br>";
       
            // 이동 대상 wr_num 교체
            sql_query("update ".$write_table." set wr_num = '".$ori_wr_num."' where wr_id= ".$_POST['wr_id']." " );
            //echo "update ".$write_table." set wr_num = '".$ori_wr_num."' where wr_id= ".$_POST['wr_id']." <br>";
   
    }
    //exit;
}
?>
<script>
  location.href="<?php echo G5_BBS_URL."/board.php?bo_table=".$_POST['bo_table']."&page=".$_POST['page']; ?>" ;
</script>