<?php
if (!defined("_GNUBOARD_")) exit; // 개별 페이지 접근 불가



$sql = " select * from {$g5['new_win_table']}
          where '".G5_TIME_YMDHIS."' between nw_begin_time and nw_end_time
            and nw_device = 'pc' order by nw_sort asc limit 0, 5";
$result = sql_query($sql, false);

for ($i=0; $nw=sql_fetch_array($result); $i++) {
    // 이미 체크 되었다면 Continue
    if (isset($_COOKIE["hd_pops_{$nw['nw_id']}"]) && $_COOKIE["hd_pops_{$nw['nw_id']}"])
        continue;
	
	preg_match_all("/<img[^>]*src=[\"']?([^>\"']+)[\"']?[^>]*>/i", $nw['nw_content'], $matches);
	$nw['img'] = $matches[1][0];
	$popup[] = $nw;
	$pop_title .= "'".$nw['nw_subject']."',";
}
?>

<script src="<?=G5_THEME_URL ?>/plugins/swiper/swiper-bundle.min.js"></script>

<style>
	/* 팝업레이어 */
	.main-popup-sect { display:block; opacity:1; visibility:visible; }
	.main-m-popup-sect { display:none; opacity:0; visibility:hidden; }
	
	.main-popup-bg { position:fixed; left:0; top:0; width:100%; height:100%; opacity:1; visibility:visible; z-index:8900; background:rgba(0,0,0,.4); }
	
	.main-popup-content { position:fixed; left:50%; top:50%; width:90%; max-width:1000px; transform:translate(-50%, -50%); -webkit-transform:translate(-50%, -50%); -moz-transform:translate(-50%, -50%); -ms-transform:translate(-50%, -50%); -o-transform:translate(-50%, -50%); opacity:1; visibility:visible; background:none; z-index:9900; }
	
	[id^=hd_pops_] .main-popup-pagination { position:relative; left:inherit; bottom:inherit; width:100%; height:35px; }
	[id^=hd_pops_] .main-popup-pagination .swiper-pagination-bullet { position:relative; width:100%; height:35px; font-size:15px; border-radius:0; margin:0; padding:7px 0 0; background-color:#fff; opacity:1; color:#888; }
	[id^=hd_pops_] .main-popup-pagination .swiper-pagination-bullet + .swiper-pagination-bullet { border-left:1px solid #ddd; }
	[id^=hd_pops_] .main-popup-pagination .swiper-pagination-bullet-active { color:#515c3e; opacity:1; font-weight:600; }
	
	[id^=hd_pops_] .modal-footer { position:relative; width:100%; height:34px; background-color:#000; }
	[id^=hd_pops_] .hd_pops_reject { padding:0 0.8rem; height:100%; font-size:13px; color:#fff; text-align:left; background:none; border:0; margin:0;}
	[id^=hd_pops_] .main-popup-close { position:absolute; right:10px; top:7px; width:20px; height:20px; background:url("../img/modal-close.png") no-repeat center/100% auto; transition:all 0.8s; transform:rotate(0deg); transform-origin:50% 50%; outline:none; border:0; }
	[id^=hd_pops_] .main-popup-close:hover { transform:rotate(180deg); }
	
	@media (max-width:991px) {
		.main-popup-sect { display:none; visibility:hidden; opacity:0; }
		.main-m-popup-sect { display:block; visibility:visible; opacity:1; }
		
		.main-m-popup-bg { position:fixed; left:0; top:0; width:100%; height:100%; opacity:1; visibility:visible; z-index:8900; background:rgba(0,0,0,.4); }
		
		.main-popup-content { max-width:480px; }
		[id^=hd_pops_] .main-popup-pagination { position:absolute; bottom:3%; height:auto; }
		[id^=hd_pops_] .main-popup-pagination .swiper-pagination-bullet { width:6px; height:6px; margin:0 4px; background-color:#fff; border-radius:50%; opacity:0.8; vertical-align:middle; }
		[id^=hd_pops_] .main-popup-pagination .swiper-pagination-bullet-active { width:10px; height:10px; background-color:#515c3e; opacity:1; }
		[id^=hd_pops_] .main-popup-pagination .swiper-pagination-bullet + .swiper-pagination-bullet { border-left:1px solid transparent; }
		
		[id^=hd_pops_] .hd_pops_reject_m { padding:0 0.8rem; height:100%; font-size:13px; color:#fff; text-align:left; background:none; border:0; margin:0;}
		[id^=hd_pops_] .main-m-popup-close { position:absolute; right:10px; top:7px; width:20px; height:20px; background:url("../img/modal-close.png") no-repeat center/100% auto; transition:all 0.8s; transform:rotate(0deg); transform-origin:50% 50%; background-color:none; border:0; margin:0;}
		[id^=hd_pops_] .main-m-popup-close:hover { transform:rotate(180deg); }
	}
</style>

<?php
if ($i > 0) {
?>
<div id="hd_pops_pc" class="main-popup-sect">
	<div class="main-popup-content">
		<div class="swiper-container main-popup-slide">
			<div class="swiper-wrapper">
				<?php
				for($i=0; $i< count($popup); $i++){
				?>
				<div class="swiper-slide">
					<?
					if(!empty($popup[$i]['nw_href'])) {
						echo '<a href="'.$popup[$i]['nw_href'].'" target="_blank">';
					}
					?>
						<img src="<?=$popup[$i]['img'] ?>" alt="<?=$popup[$i]['nw_subject'] ?>" class="img-fluid" />
					<?
					if(isset($popup[$i]['nw_href'])) {
						echo '</a>';
					}
					?>
				</div>
				<?php } ?>
			</div>
			<div class="swiper-pagination main-popup-pagination">
				<? for($i=0;$i<count($popup);$i++){?>
				<div class="swiper-pagination-bullet main-popup-pagination" aria-label="<?=(i+1)?>"></div>
				<?}?>
			</div>
		</div>
		<div class="modal-footer">
			<button class="hd_pops_reject">하루동안 보지 않기</button>
			<button type="button" class="main-popup-close"></button>
		</div>
	</div>
	<div class="main-popup-bg"></div>
</div>
<? } ?>

<?php
$sql = " select * from {$g5['new_win_table']}
          where '".G5_TIME_YMDHIS."' between nw_begin_time and nw_end_time
            and nw_device = 'mobile' order by nw_sort asc limit 0, 5";
$result = sql_query($sql, false);

for ($i=0; $nw2=sql_fetch_array($result); $i++) {
	
	preg_match_all("/<img[^>]*src=[\"']?([^>\"']+)[\"']?[^>]*>/i", $nw2['nw_content'], $matches);
	$nw2['img'] = $matches[1][0];
	$popup2[] = $nw2;
	
}
?>

<?php
if ($i > 0) {
?>
<div id="hd_pops_m" class="main-m-popup-sect">
	<div class="main-popup-content">
		<div class="swiper-container main-m-popup-slide">
			<div class="swiper-wrapper">
				<?php
				for($i=0; $i< count($popup2); $i++){
				?>
				<div class="swiper-slide">
					<?
					if(!empty($popup2[$i]['nw_href'])) {
						echo '<a href="'.$popup2[$i]['nw_href'].'" target="_blank">';
					}
					?>
						<img src="<?=$popup2[$i]['img'] ?>" alt="<?=$popup2[$i]['nw_subject'] ?>" class="img-fluid" />
					<?
					if(isset($popup2[$i]['nw_href'])) {
						echo '</a>';
					}
					?>
				</div>
				<?php } ?>
			</div>
			<div class="swiper-pagination main-popup-pagination">
				<? for($i=0;$i<count($popup2);$i++){?>
				<div class="swiper-pagination-bullet main-popup-pagination" aria-label="<?=(i+1)?>"></div>
				<?}?>
			</div>
		</div>
		<div class="modal-footer">
			<button class="hd_pops_reject_m">하루동안 보지 않기</button>
			<button type="button" class="main-m-popup-close"></button>
		</div>
	</div>
	<div class="main-m-popup-bg"></div>
</div>
<? } ?>

<script>
const mainPopUpModalClose = Array.from(document.getElementsByClassName('main-popup-close'));
const mainPopUpModalClosebg = Array.from(document.getElementsByClassName('main-popup-bg'));
if(mainPopUpModalClose){
    mainPopUpModalClose.forEach((button)=>{
        button.addEventListener('click',(event)=>{
          document.querySelector('.main-popup-sect').style.visibility = 'hidden';
          document.querySelector('.main-popup-bg').style.visibility = 'hidden';
          document.querySelector('.main-popup-sect').style.display = 'none';
        });
    });
    
    mainPopUpModalClosebg.forEach((button)=>{
        button.addEventListener('click',(event)=>{
          document.querySelector('.main-popup-sect').style.visibility = 'hidden';
          document.querySelector('.main-popup-bg').style.visibility = 'hidden';
          document.querySelector('.main-popup-sect').style.display = 'none';
        });
    });
}
const main_m_PopUpModalClose = Array.from(document.getElementsByClassName('main-m-popup-close'));
const main_m_PopUpModalClosebg = Array.from(document.getElementsByClassName('main-m-popup-bg'));
if(main_m_PopUpModalClose){
    main_m_PopUpModalClose.forEach((button)=>{
        button.addEventListener('click',(event)=>{
          document.querySelector('.main-m-popup-sect').style.visibility = 'hidden';
          document.querySelector('.main-m-popup-bg').style.visibility = 'hidden';
          document.querySelector('.main-m-popup-sect').style.display = 'none';
        });
    });
    
    main_m_PopUpModalClosebg.forEach((button)=>{
        button.addEventListener('click',(event)=>{
          document.querySelector('.main-m-popup-sect').style.visibility = 'hidden';
          document.querySelector('.main-m-popup-bg').style.visibility = 'hidden';
          document.querySelector('.main-m-popup-sect').style.display = 'none';
        });
    });
}	
</script>

<script>
	let options2 = {};
	if ($(".main-popup-slide .swiper-slide").length == 1 ) {
		options2 = {
			speed:800,
			autoplay: false,
			autoplayDisableOnInteraction: false,
			loop: false,
			loopAdditionalSlides: 1,
			centeredSlides : true,
			observer: true,
			observeParents: true,
			pagination: {
				el: '.swiper-pagination.main-popup-pagination',
				clickable: true,
				renderBullet: function (index, className) {
					return '<div class="' + className + '"><span>' + (bullet[index]) + '</span></div>';
				}
			},
		}
	} else {
		options2 = {
			speed:800,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
			autoplayDisableOnInteraction: false,
			loop: true,
			loopAdditionalSlides: 1,
			centeredSlides : true,
			observer: true,
			observeParents: true,
			pagination: {
				el: '.swiper-pagination.main-popup-pagination',
				clickable: true,
				renderBullet: function (index, className) {
					return '<div class="' + className + '"><span>' + (bullet[index]) + '</span></div>';
				}
			},
		}
	}
	
	var bullet = [<?=substr($pop_title, 0, -1)?>];
	var mainPopUp = new Swiper('.main-popup-slide', options2);
	
	var len = '<?=count($popup)?>';
    var con_wid = $(".swiper-pagination.main-popup-pagination").width();
    var li_wid = 100 /len;
    $(".main-popup-pagination .swiper-pagination-bullet").css({"width":li_wid+"%"});
	
	let options4 = {};
	if ($(".main-popup-slide .swiper-slide").length == 1 ) {
		options4 = {
			speed:800,
			autoplay: false,
			autoplayDisableOnInteraction: false,
			loop: false,
			loopAdditionalSlides: 1,
			centeredSlides : true,
			observer: true,
			observeParents: true,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
			},
		}
	} else {
		options4 = {
			speed:800,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
			autoplayDisableOnInteraction: false,
			loop: true,
			loopAdditionalSlides: 1,
			centeredSlides : true,
			observer: true,
			observeParents: true,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
			},
		}
	}
	var main_m_PopUp = new Swiper('.main-m-popup-slide', options4);
</script>

<script>
$(".hd_pops_reject").click(function() {
	$("#hd_pops_pc").css('display', 'none');
	setCookie("hd_pops_pc", 1, 1);
});

var checkCookie = getCookie("hd_pops_pc");

if(checkCookie == 1) {
	$("#hd_pops_pc").css('display', 'none');
}else {
	
}
	
function setCookie(name, value, expiredays){
	var today = new Date();
	today.setDate(today.getDate() + expiredays); // 현재시간에 하루를 더함 
	document.cookie = name + '=' + escape(value) + '; expires=' + today.toGMTString();
}

function getCookie(name) {
	var cookie = document.cookie;
	if (document.cookie != "") {
		var cookie_array = cookie.split("; ");
		for ( var index in cookie_array) {
			var cookie_name = cookie_array[index].split("=");
			if (cookie_name[0] == "hd_pops_pc") {
				return cookie_name[1];
			}
		}
	}
	return;
}
</script>

<script>
$(".hd_pops_reject_m").click(function() {
	$("#hd_pops_m").css('display', 'none');
	setCookie("hd_pops_m", 1, 1);
})

var checkCookie = getCookie("hd_pops_m");
	
if(checkCookie == 1) {
	$("#hd_pops_m").css('display', 'none');
}else {
	
}

function setCookie(name, value, expiredays){
	var today = new Date();
	today.setDate(today.getDate() + expiredays); // 현재시간에 하루를 더함 
	document.cookie = name + '=' + escape(value) + '; expires=' + today.toGMTString();
}

function getCookie(name) {
	var cookie = document.cookie;
	if (document.cookie != "") {
		var cookie_array = cookie.split("; ");
		for ( var index in cookie_array) {
			var cookie_name = cookie_array[index].split("=");
			if (cookie_name[0] == "hd_pops_m") {
				return cookie_name[1];
			}
		}
	}
	return;
}
</script>
