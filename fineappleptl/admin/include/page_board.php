<?
include_once('../../_common.php');
$listnum = ( !$boardSet["pagenumber"]  ) ? 10: $boardSet["pagenumber"];
	$fpage = 1;
	$lpage = $listnum;
	$pageSkin = ( $boardSet["skin"] ) ? $boardSet["skin"] : "notice";

	while($fpage<=$total_page) {
		if(($fpage<=$page) && ($page<=$lpage)) {
			if($lpage>$total_page) { $lpage=$total_page; }
			break;
		}		
		$fpage=$fpage+$listnum;
		$lpage=$lpage+$listnum;
	}

	if($page>$listnum) {
		$pre10page=$fpage-1;
		echo "<a href=$PHP_SELF?$get_val&p=$pre10page><img src='".D365_URL."/board/images/btn_first.gif'></a>";
	}
	if($page == 1) { 
		echo "<a><img src='".D365_URL."/board/images/btn_prev.gif'></a>"; 
	} else { 
		$prevpage = $page-1; 
		echo "<a href=$PHP_SELF?$get_val&p=$prevpage><img src='".D365_URL."/board/images/btn_prev.gif'></a>";
	}
	echo "<ul class='paging'>";
	for ($page = $fpage; $page <= $lpage; $page++) {
		if( $page > 1 ) { echo ""; }
		if ($page == $page) { echo "<li class='over'><a href=$PHP_SELF?$get_val&p=$page>".$page."</a></li>"; }
		else { echo "<li><a href=$PHP_SELF?$get_val&p=$page>".$page."</a></li>"; }
	}	
	echo "</ul>";
	if($page == $total_page) {	
		echo "<a><img src='".D365_URL."/board/images/btn_next.gif'></a>"; 
	}	else { 
		$nextpage = $page+1; 
		echo"<a href=$PHP_SELF?$get_val&p=$nextpage><img src='".D365_URL."/board/images/btn_next.gif'></a>"; 
	}
	if($lpage<$total_page) {
		$next10page=$lpage+1;
		echo"<a href=$PHP_SELF?$get_val&p=$next10page><img src='".D365_URL."/board/images/btn_end.gif'></a>";
	}	
?>