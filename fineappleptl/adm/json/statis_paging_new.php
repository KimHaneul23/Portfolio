<?php
include_once('./_common.php');

if(!$page) $page = 1;
// $total = 11;
$total_page = ceil($total / 10);

$add = "data_statis(1";
if($device) $add .= ", '".$device."'";
else $add .= ", ''";
if($st_date) $add .= ", '".$st_date."'";
else $add .= ", ''";
if($ed_date) $add .= ", '".$ed_date."'";
else $add .= ", ''";
if($sta_type) $add .= ", '".$sta_type."'";
else $add .= ", ''";

print_r(get_paging2(10, $page, $total_page, '', $add));

function get_paging2($write_pages, $cur_page, $total_page, $url, $add="")
{
    //$url = preg_replace('#&amp;page=[0-9]*(&amp;page=)$#', '$1', $url);
    $url = preg_replace('#&amp;page=[0-9]*#', '', $url) . '&amp;page=';
    // print_r($url);print_r("</br>");
    // print_r($cur_page);print_r("</br>");
    $str = '';
    if ($cur_page > 1) {
        $str .= '<a href="javascript:'.$add.', 1);" class="pg_page pg_start">처음</a>'.PHP_EOL;
    }
    

    $start_page = ( ( (int)( ($cur_page - 1 ) / $write_pages ) ) * $write_pages ) + 1;
    $end_page = $start_page + $write_pages - 1;

    // print_r($total_page);print_r("</br>");
    // print_r($start_page);print_r("</br>");
    // print_r($end_page);print_r("</br>");
    if ($end_page >= $total_page) $end_page = $total_page;

    if ($start_page > 1) $str .= '<a href="javascript:'.$add.', '.($start_page-1).');" class="pg_page pg_prev">이전</a>'.PHP_EOL;

    if ($total_page > 1) {
        for ($k=$start_page;$k<=$end_page;$k++) {
            if ($cur_page != $k)
                $str .= '<a href="javascript:'.$add.', '.$k.');" class="pg_page">'.$k.'<span class="sound_only">페이지</span></a>'.PHP_EOL;
            else
                $str .= '<span class="sound_only">열린</span><strong class="pg_current">'.$k.'</strong><span class="sound_only">페이지</span>'.PHP_EOL;
        }
    }

    if ($total_page > $end_page) $str .= '<a href="javascript:'.$add.', '.($end_page+1).');" class="pg_page pg_next">다음</a>'.PHP_EOL;

    if ($cur_page < $total_page) {
        $str .= '<a href="javascript:'.$add.', '.$total_page.');" class="pg_page pg_end">맨끝</a>'.PHP_EOL;
    }

    // print_r($str);print_r("</br>");

    if ($str)
        return "<nav class=\"pg_wrap\"><span class=\"pg\">{$str}</span></nav>";
    else
        return "";
}

?>