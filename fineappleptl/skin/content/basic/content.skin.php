<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

// add_stylesheet('css 구문', 출력순서); 숫자가 작을 수록 먼저 출력됨
add_stylesheet('<link rel="stylesheet" href="'.$content_skin_url.'/style.css">', 0);
?>

<?php if($co_id == 'nonpay') { ?>
<link href="<?php echo G5_THEME_URL?>/skin/content/basic/style.css" rel="stylesheet">
<article id="ctt" class="ctt_<?php echo $co_id; ?>">
    <header>
        <h1><?php echo $g5['title']; ?></h1>
    </header>
    
    <div id="ctt_con">
        <?php echo $str; ?>
    </div>
    
</article>

<?php } else if($co_id == 'privacy') {   ?>
    <link href="<?php echo G5_THEME_URL?>/skin/content/basic/style2.css" rel="stylesheet">
    
	<!-- S : 내용 시작 -->
	<article id="ctt" class="container-cnt ctt_<?php echo $co_id; ?>">
        <ul class="tabbox">
            <li class="<?php if($co_id == 'privacy') { echo 'active'; } ?>"><a href="<?php echo get_pretty_url('content', 'privacy'); ?>">개인정보 처리방침</a></li>
            <li class="<?php if($co_id == 'provision') { echo 'active'; } ?>"><a href="<?php echo get_pretty_url('content', 'provision'); ?>">이용약관</a></li>
        </ul>
        
        <div id="ctt_con">
            <?php echo $str; ?>
        </div>
    </article>
	<!-- E : 내용 끝 -->
	
<?php } else if($co_id == 'provision') {   ?>
    <link href="<?php echo G5_THEME_URL?>/skin/content/basic/style2.css" rel="stylesheet">
    
	<!-- S : 내용 시작 -->
	<article id="ctt" class="container-cnt ctt_<?php echo $co_id; ?>">
        <ul class="tabbox">
            <li class="<?php if($co_id == 'privacy') { echo 'active'; } ?>"><a href="<?php echo get_pretty_url('content', 'privacy'); ?>">개인정보 처리방침</a></li>
            <li class="<?php if($co_id == 'provision') { echo 'active'; } ?>"><a href="<?php echo get_pretty_url('content', 'provision'); ?>">이용약관</a></li>
        </ul>
        
        <div id="ctt_con">
            <?php echo $str; ?>
        </div>
    </article>
	<!-- E : 내용 끝 -->
	
<?php } ?>