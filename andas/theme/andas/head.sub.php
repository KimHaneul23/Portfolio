<?php
// 이 파일은 새로운 파일 생성시 반드시 포함되어야 함
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

$g5_debug['php']['begin_time'] = $begin_time = get_microtime();

if (!isset($g5['title'])) {
    $g5['title'] = $config['cf_title'];
    $g5_head_title = $g5['title'];
}
else {
    // 상태바에 표시될 제목
    $g5_head_title = implode(' | ', array_filter(array($g5['title'], $config['cf_title'])));
}

$g5['title'] = strip_tags($g5['title']);
$g5_head_title = strip_tags($g5_head_title);

// 현재 접속자
// 게시판 제목에 ' 포함되면 오류 발생
$g5['lo_location'] = addslashes($g5['title']);
if (!$g5['lo_location'])
    $g5['lo_location'] = addslashes(clean_xss_tags($_SERVER['REQUEST_URI']));
$g5['lo_url'] = addslashes(clean_xss_tags($_SERVER['REQUEST_URI']));
if (strstr($g5['lo_url'], '/'.G5_ADMIN_DIR.'/') || $is_admin == 'super') $g5['lo_url'] = '';

/*
// 만료된 페이지로 사용하시는 경우
header("Cache-Control: no-cache"); // HTTP/1.1
header("Expires: 0"); // rfc2616 - Section 14.21
header("Pragma: no-cache"); // HTTP/1.0
*/
?>

<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<?php
if (G5_IS_MOBILE) {
    echo '<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=0,maximum-scale=1,user-scalable=no">'.PHP_EOL;
    echo '<meta name="HandheldFriendly" content="true">'.PHP_EOL;
    echo '<meta name="format-detection" content="telephone=no">'.PHP_EOL;
} else {
    echo '<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">'.PHP_EOL;
    echo '<meta http-equiv="imagetoolbar" content="no">'.PHP_EOL;
    echo '<meta http-equiv="X-UA-Compatible" content="IE=edge">'.PHP_EOL;
}
    
if($config['cf_add_meta'])
    echo $config['cf_add_meta'].PHP_EOL;
?>
<title><?php echo $g5_head_title; ?></title>
<link rel="stylesheet" href="<?php echo run_replace('head_css_url', G5_THEME_CSS_URL.'/'.('default').'.css?ver='.G5_CSS_VER, G5_THEME_URL); ?>">
<!--[if lte IE 8]>
<script src="<?php echo G5_JS_URL ?>/html5.js"></script>
<![endif]-->
<script>
// 자바스크립트에서 사용하는 전역변수 선언
var g5_url       = "<?php echo G5_URL ?>";
var g5_bbs_url   = "<?php echo G5_BBS_URL ?>";
var g5_is_member = "<?php echo isset($is_member)?$is_member:''; ?>";
var g5_is_admin  = "<?php echo isset($is_admin)?$is_admin:''; ?>";
var g5_is_mobile = "<?php echo G5_IS_MOBILE ?>";
var g5_bo_table  = "<?php echo isset($bo_table)?$bo_table:''; ?>";
var g5_sca       = "<?php echo isset($sca)?$sca:''; ?>";
var g5_editor    = "<?php echo ($config['cf_editor'] && $board['bo_use_dhtml_editor'])?$config['cf_editor']:''; ?>";
var g5_cookie_domain = "<?php echo G5_COOKIE_DOMAIN ?>";

<?php if(defined('G5_IS_ADMIN')) { ?>
var g5_admin_url = "<?php echo G5_ADMIN_URL; ?>";
<?php } ?>
</script>
<?php
add_javascript('<script src="'.G5_JS_URL.'/jquery-1.12.4.min.js"></script>', 0);
add_javascript('<script src="'.G5_JS_URL.'/jquery-migrate-1.4.1.min.js"></script>', 0);
add_javascript('<script src="'.G5_JS_URL.'/jquery.menu.js?ver='.G5_JS_VER.'"></script>', 0);
add_javascript('<script src="'.G5_JS_URL.'/common.js?ver='.G5_JS_VER.'"></script>', 0);
add_javascript('<script src="'.G5_JS_URL.'/wrest.js?ver='.G5_JS_VER.'"></script>', 0);
add_javascript('<script src="'.G5_JS_URL.'/placeholders.min.js"></script>', 0);
add_stylesheet('<link rel="stylesheet" href="'.G5_JS_URL.'/font-awesome/css/font-awesome.min.css">', 0);

if(G5_IS_MOBILE) {
    add_javascript('<script src="'.G5_JS_URL.'/modernizr.custom.70111.js"></script>', 1); // overflow scroll 감지
}
if(!defined('G5_IS_ADMIN'))
    echo $config['cf_add_script'];
?>

<!--  추가  --
<meta name='keywords' content='안다스디자인, 에이디에스디자인, ADS디자인'>
<meta name='description' content='안다스디자인, 에이디에스디자인, ADS디자인'>

<meta property='og:url' content='<?php echo G5_URL?>'>
<meta property='og:type' content='website'>
<meta property='og:title' id='ogtitle' itemprop='name' content='안다스디자인'>
<meta property='og:description' id='ogdesc' content='안다스디자인'>
<meta property='og:image' id='ogimg' content='<?php echo G5_THEME_URL?>/img/andas_og_img.jpg'>
<meta property='og:image:width' content='1200'>
<meta property='og:image:height' content='600'>

<meta name='twitter:title' content='안다스디자인'>
<meta name='twitter:description' content='안다스디자인'>
<meta name='twitter:domain' content='<?php echo G5_URL?>'>
<meta name='twitter:url' content='<?php echo G5_URL?>'>
<meta name='twitter:image' content='<?php echo G5_THEME_URL?>/img/andas_og_img.jpg'>
<meta name='twitter:image:width' content='1200'>
<meta name='twitter:image:height' content='600'>
<meta name='twitter:card' content='summary'>

<meta name='apple-mobile-web-app-title' content='안다스디자인'>
<meta name='format-detection' content='telephone=no'>
--  //추가  -->

<!-- favicon -->
<link rel="apple-touch-icon" sizes="57x57" href="<?php echo G5_THEME_URL?>/img/favicon/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="<?php echo G5_THEME_URL?>/img/favicon/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="<?php echo G5_THEME_URL?>/img/favicon/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="<?php echo G5_THEME_URL?>/img/favicon/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="<?php echo G5_THEME_URL?>/img/favicon/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="<?php echo G5_THEME_URL?>/img/favicon/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="<?php echo G5_THEME_URL?>/img/favicon/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="<?php echo G5_THEME_URL?>/img/favicon/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="<?php echo G5_THEME_URL?>/img/favicon/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="36x36"  href="<?php echo G5_THEME_URL?>/img/favicon/android-icon-36x36.png">
<link rel="icon" type="image/png" sizes="48x48"  href="<?php echo G5_THEME_URL?>/img/favicon/android-icon-48x48.png">
<link rel="icon" type="image/png" sizes="72x72"  href="<?php echo G5_THEME_URL?>/img/favicon/android-icon-72x72.png">
<link rel="icon" type="image/png" sizes="96x96"  href="<?php echo G5_THEME_URL?>/img/favicon/android-icon-96x96.png">
<link rel="icon" type="image/png" sizes="144x144"  href="<?php echo G5_THEME_URL?>/img/favicon/android-icon-144x144.png">
<link rel="icon" type="image/png" sizes="192x192"  href="<?php echo G5_THEME_URL?>/img/favicon/android-icon-192x192.png">
<link rel="icon" type="image/png" sizes="32x32" href="<?php echo G5_THEME_URL?>/img/favicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="<?php echo G5_THEME_URL?>/img/favicon/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="<?php echo G5_THEME_URL?>/img/favicon/favicon-16x16.png">
<link rel="manifest" href="<?php echo G5_THEME_URL?>/img/favicon/manifest.json">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="<?php echo G5_THEME_URL?>/img/favicon/ms-icon-144x144.png">
<meta name="theme-color" content="#ffffff">

<!-- Google Font -->
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
<!-- Plugin CSS -->
<link href="<?php echo G5_THEME_URL?>/plugins/swiper/swiper-bundle.min.css" rel="stylesheet">
<!-- Custom CSS -->
<link href="<?php echo G5_THEME_URL?>/css/common.css" rel="stylesheet">
<link href="<?php echo G5_THEME_URL?>/css/main.css" rel="stylesheet">
<link href="<?php echo G5_THEME_URL?>/css/sub.css" rel="stylesheet">
<link href="<?php echo G5_THEME_URL?>/css/responsive.css" rel="stylesheet">
<!--<link href="<?php echo G5_THEME_URL?>/dist/main.css" rel="stylesheet">-->


</head>
<body<?php echo isset($g5['body_script']) ? $g5['body_script'] : ''; ?>>
