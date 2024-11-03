<?
include_once('./_common.php');

// 웹사이트 타이틀
$g5['title'] = '비급여진료비';

include_once(G5_THEME_PATH.'/head.php');

?>
<link rel='stylesheet' href='<?php echo G5_THEME_URL?>/member/css/style.css' media='all' />
<style>
    .ht-inner{background-color:rgba(255, 255, 255, 0);}
    .main-header .header_left_icon > p { color:#000; }
    .main-header .header_right_icon_text { color:#000; }
    .main-header .normal_color{display:none;}
    .main-header .icon_white_color{display:inline-block;}
    .top_menu_nav{box-shadow: 0 6px 6px -4px rgb(0 0 0 / 20%);}
    .main-header .top_menu{color:#000;}
    .main-header .top_menu > a{color:#000;}
    .footer{border-top:1px solid #e1e1e1;}
    .sub_all_cont{display:none;}
    .main_privacy{padding: 12% 0 8%;}
    .nonpay_cont_wrap{max-width:1200px; padding:0 4%; margin:0 auto;}
    .nonpay_cont_wrap > h1{padding:4% 0; font-size: 2.2rem; text-align:center; font-weight:400; color:#333;}
    
    @media (max-width: 800px){
        .nonpay_cont_wrap > h1{font-size: 3rem;}
        .main_privacy{padding-top:8%;}
        .nonpay_cont_wrap{padding: 18% 4% 0;}
    }
    @media (max-width: 480px){
        .main_privacy{padding-top:18%;}
        .member_wrap_privacy{max-width:90%;}
    }
    @media (max-width: 434px){
        .main_privacy{padding-top:21%;}
    }
    @media (max-width: 376px){
        .main_privacy{padding-top:25%;}
    }
</style>


<main id="content" class="main_privacy">
    <div id="startContent"></div>
    
    <style type="text/css">
        .table_free {width:100%; border-collapse:collapse; font-size:12px;}
        .table_free > tbody > tr > th {vertical-align: middle; border:1px solid #b9b9b9; padding:5px 10px 4px; background-color:#F2F2F2 }
        .table_free > tbody > tr > td {vertical-align: middle; border:1px solid #b9b9b9; padding:5px 10px 4px; }
        .table_free > tbody > tr > th > b{font-weight:600;}
        .table_free > tbody > tr > td > b{font-weight:600;}
        
        @media (max-width: 800px){
            .table_free {font-size:1rem;}
        }
    </style>
    <div class="nonpay_cont_wrap">
        <h1> 비급여항목안내 </h1>
        <table class="table_free" cellpadding="0" cellspacing="0">
            <tbody>
                <tr>
                    <!--<th rowspan="1" align="Center"><b>분류(구분)</b></th>-->
                    <th colspan="1" align="Center"><b>진료내용</b></th>
                    <th colspan="1" align="Center"><b>비용(단위:만원)</b></th>
                    <th colspan="1" align="Center"><b>비고</b></th>
                </tr>
                <tr>
                    <!--<td rowspan="5" align="Center"><b>crown</b></td>-->
                    <td align="Center">오스템 임플란트</td>
                    <td align="Center">109</td>
                    <td align="Center"></td>
                </tr>
                <tr>
                    <td align="Center">메가젠 임플란트</td>
                    <td align="Center">99</td>
                    <td align="Center"></td>
                </tr>
                <tr>
                    <td align="Center">치조골이식술</td>
                    <td align="Center">30~50</td>
                    <td align="Center"></td>
                </tr>
                <tr>
                    <td align="Center">상악동거상술</td>
                    <td align="Center">50~150</td>
                    <td align="Center"></td>
                </tr>
                <tr>
                    <td align="Center">크라운</td>
                    <td align="Center">40~60</td>
                    <td align="Center"></td>
                </tr>
                <tr>
                    <td align="Center">부분틀니, 완전틀니</td>
                    <td align="Center">150</td>
                    <td align="Center"></td>
                </tr>
                <tr>
                    <td align="Center">불소도포</td>
                    <td align="Center">3</td>
                    <td align="Center"></td>
                </tr>
                <!--
                <tr>
                    <td align="Center">골드</td>
                    <td align="Center">55</td>
                    <td align="Center"></td>
                </tr>
                <tr>
                    <td align="Center">PFM</td>
                    <td align="Center">40</td>
                    <td align="Center"></td>
                </tr>
                <tr>
                    <td align="Center">임시치아</td>
                    <td align="Center">5</td>
                    <td align="Center"></td>
                </tr>
                <tr>
                    <td align="Center">인레이 이맥스</td>
                    <td align="Center">27</td>
                    <td align="Center"></td>
                </tr>
                <tr>
                    <td align="Center">골드</td>
                    <td align="Center">35</td>
                    <td align="Center"></td>
                </tr>
                <tr>
                    <td align="Center">인접면포함</td>
                    <td align="Center">37</td>
                    <td align="Center"></td>
                </tr>
                <tr>
                    <td align="Center">CT</td>
                    <td align="Center">10</td>
                    <td align="Center"></td>
                </tr>
                <tr>
                    <td align="Center">레진 구치부</td>
                    <td align="Center">10</td>
                    <td align="Center"></td>
                </tr>
                <tr>
                    <td align="Center">전치부</td>
                    <td align="Center">15</td>
                    <td align="Center"></td>
                </tr>
                <tr>
                    <td align="Center">치경부 유치</td>
                    <td align="Center">8</td>
                    <td align="Center"></td>
                </tr>
                <tr>
                    <td align="Center">post+core</td>
                    <td align="Center">15</td>
                    <td align="Center"></td>
                </tr>
                <tr>
                    <td align="Center">core</td>
                    <td align="Center">5</td>
                    <td align="Center"></td>
                </tr>
                <tr>
                    <td align="Center">라미네이트</td>
                    <td align="Center">55</td>
                    <td align="Center">부가세별도</td>
                </tr>
                <tr>
                    <td align="Center">RPD, CD</td>
                    <td align="Center">150</td>
                    <td align="Center"></td>
                </tr>
                <tr>
                    <td align="Center">temp flipper</td>
                    <td align="Center">10</td>
                    <td align="Center">치아당 3추가</td>
                </tr>
                <tr>
                    <td align="Center">splint</td>
                    <td align="Center">50</td>
                    <td align="Center"></td>
                </tr>
                <tr>
                    <td align="Center">미백</td>
                    <td align="Center">11</td>
                    <td align="Center">부가세포함</td>
                </tr>
                <tr>
                    <td align="Center">자가미백</td>
                    <td align="Center">22</td>
                    <td align="Center"></td>
                </tr>
                <tr>
                    <td align="Center">불소</td>
                    <td align="Center">3</td>
                    <td align="Center"></td>
                </tr>
                -->
          </tbody>
        </table>
    </div>

</main>
<!-- //main -->

<?php
include_once(G5_THEME_PATH.'/tail.php');