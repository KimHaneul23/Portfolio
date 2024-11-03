<?
include_once('./_common.php');

// 웹사이트 타이틀
$g5['title'] = '비급여진료비';

include_once(G5_THEME_PATH.'/head.php');

?>
<link rel='stylesheet' href='<?php echo G5_THEME_URL?>/member/css/style.css' media='all' />
<style>
    .sub_all_cont{display:none;}
    .main_privacy{padding-top:8%;}
    .nonpay_cont_wrap{max-width:1200px; padding:0 4%; margin:0 auto;}
    .nonpay_cont_wrap > h1{padding:4% 0; font-size: 40px; text-align:center; font-weight:400; color:#333;}
    
    @media (max-width: 800px){
        .main_privacy{padding-top:8%;}
        .nonpay_cont_wrap{}
    }
    @media (max-width: 480px){
        .main_privacy{padding-top:10%;}
        .member_wrap_privacy{max-width:90%;}
    }
    @media (max-width: 376px){
        .main_privacy{padding-top:12%;}
    }
</style>


<main id="content" class="main_privacy pd_100">
    <div id="startContent"></div>
    
    <style type="text/css">
        .table_free {width:100%; border-collapse:collapse; font-size:12px;}
        .table_free > tbody > tr > th {vertical-align: middle; border:1px solid #b9b9b9; padding:5px 10px 4px; background-color:#F2F2F2 }
        .table_free > tbody > tr > td {vertical-align: middle; border:1px solid #b9b9b9; padding:5px 10px 4px; }
        .table_free > tbody > tr > th > b{font-weight:600;}
        .table_free > tbody > tr > td > b{font-weight:600;}
    </style>
    <div class="nonpay_cont_wrap">
        <h1> 비급여항목안내 </h1>
        <table class="table_free" cellpadding="0" cellspacing="0">
            <tbody>
                <tr>
                    <th rowspan="1" align="Center"><b>분류(구분)</b></th>
                    <th colspan="1" align="Center"><b>진료내용</b></th>
                    <th colspan="1" align="Center"><b>비용(단위:만원)</b></th>
                    <th colspan="1" align="Center"><b>비고</b></th>
                    <th align="Center"><b>이벤트기간</b></th>
                </tr>
                <tr>
                    <td rowspan="5" align="Center"><b>Resin</b></td>
                    <td align="Center">전치</td>
                    <td align="Center">15</td>
                    <td align="Center">치아당</td>
                    <td align="Right"></td>
                </tr>
                <tr>
                    <td align="Center">구치(간단)</td>
                    <td align="Center">10</td>
                    <td align="Center">치아당</td>
                    <td align="Right"></td>
                </tr>
                <tr>
                    <td align="Center">구치(복잡)</td>
                    <td align="Center">15</td>
                    <td align="Center">치아당</td>
                    <td align="Right"></td>
                </tr>
                <tr>
                    <td align="Center">치경부</td>
                    <td align="Center">8</td>
                    <td align="Center">치아당</td>
                    <td align="Right"></td>
                </tr>
                <tr>
                    <td align="Center">proximal</td>
                    <td align="Center">15</td>
                    <td align="Center">치아당</td>
                    <td align="Right"></td>
                </tr>
                <tr>
                    <td rowspan="2" align="Center"><b>inlay</b></td>
                    <td align="Center">E-max</td>
                    <td align="Center">25</td>
                    <td align="Center">치아당</td>
                    <td align="Right"></td>
                </tr>
                <tr>
                    <td align="Center">gold</td>
                    <td align="Center">30</td>
                    <td align="Center">치아당</td>
                    <td align="Right"></td>
                </tr>
                <tr>
                    <td rowspan="5" align="Center"><b>crown</b></td>
                    <td align="Center">zir(전치)</td>
                    <td align="Center">50</td>
                    <td align="Center">치아당</td>
                    <td align="Right"></td>
                </tr>
                <tr>
                    <td align="Center">zir(구치)</td>
                    <td align="Center">45</td>
                    <td align="Center">치아당</td>
                    <td align="Right"></td>
                </tr>
                <tr>
                    <td align="Center">gold</td>
                    <td align="Center">50</td>
                    <td align="Center">치아당</td>
                    <td align="Right"></td>
                </tr>
                <tr>
                    <td align="Center">laminate</td>
                    <td align="Center">60</td>
                    <td align="Center">치아당</td>
                    <td align="Right"></td>
                </tr>
                <tr>
                    <td align="Center">ss crown</td>
                    <td align="Center">10</td>
                    <td align="Center">치아당</td>
                    <td align="Right"></td>
                </tr>
                <tr>
                    <td rowspan="3" align="Center"><b>implant</b></td>
                    <td align="Center">메가젠</td>
                    <td align="Center">79</td>
                    <td align="Center">치아당</td>
                    <td align="Center">~5/31</td>
                </tr>
                <tr>
                    <td align="Center">덴티스</td>
                    <td align="Center">79</td>
                    <td align="Center">치아당</td>
                    <td align="Center">~5/31</td>
                </tr>
                <tr>
                    <td align="Center">오스템</td>
                    <td align="Center">89</td>
                    <td align="Center">치아당</td>
                    <td align="Center">~5/31</td>
                </tr>
                <tr>
                    <td rowspan="2" align="Center"><b>sinus</b></td>
                    <td align="Center">crestal</td>
                    <td align="Center">50</td>
                    <td align="Center">치아당</td>
                    <td align="Center"></td>
                </tr>
                <tr>
                    <td align="Center">lateral</td>
                    <td align="Center">100</td>
                    <td align="Center">부위당</td>
                    <td align="Right"></td>
                </tr>
                <tr>
                    <td colspan="2" align="Center"><b>GBR</b></td>
                    <td align="Center">50</td>
                    <td align="Center">치아당</td>
                    <td align="Center"></td>
                </tr>
                <tr>
                    <td colspan="2" align="Center"><b>발치와 보존술</b></td>
                    <td align="Center">60</td>
                    <td align="Center">치아당</td>
                    <td align="Center"></td>
                </tr>
                <tr>
                    <td colspan="2" align="Center"><b>Denture</b></td>
                    <td align="Center">150</td>
                    <td align="Center">악당</td>
                    <td align="Center"></td>
                </tr> 
                <tr>
                    <td colspan="2" align="Center"><b>scaling</b></td>
                    <td align="Center">5</td>
                    <td align="Center"></td>
                    <td align="Center"></td>
                </tr> 
                <tr>
                    <td colspan="2" align="Center"><b>전문가 미백</b></td>
                    <td align="Center">30</td>
                    <td align="Center">3회</td>
                    <td align="Center"></td>
                </tr>
                <tr>
                    <td colspan="2" align="Center"><b>1차교정</b></td>
                    <td align="Center">150</td>
                    <td align="Center"></td>
                    <td align="Center">~5/31</td>
                </tr> 
                <tr>
                    <td rowspan="4" align="Center"><b>전체교정</b></td>
                    <td align="Center">클리피씨</td>
                    <td align="Center">279</td>
                    <td align="Center">월비 5 / 유지장치 40</td>
                    <td align="Center">~3/31</td>
                </tr> 
                <tr>
                    <td align="Center">메탈</td>
                    <td align="Center">320</td>
                    <td align="Center">월비 5 / 유지장치 40</td>
                    <td align="Center"></td>
                </tr>
                <tr>
                    <td align="Center">투명교정</td>
                    <td align="Center">300</td>
                    <td align="Center">월비 3 / 유지장치 40</td>
                    <td align="Center"></td>
                </tr>
                <tr>
                    <td align="Center">인비절라인</td>
                    <td align="Center">600</td>
                    <td align="Center"></td>
                    <td align="Center"></td>
                </tr>
                <tr>
                    <td rowspan="3" align="Center"><b>부분교정</b></td>
                    <td align="Center">편악</td>
                    <td align="Center">180</td>
                    <td align="Center"></td>
                    <td align="Center"></td>
                </tr> 
                <tr>
                    <td align="Center">양악</td>
                    <td align="Center">250</td>
                    <td align="Center"></td>
                    <td align="Center"></td>
                </tr>
            </tbody>
        </table>
    </div>

</main>
<!-- //main -->

<?php
include_once(G5_THEME_PATH.'/tail.php');