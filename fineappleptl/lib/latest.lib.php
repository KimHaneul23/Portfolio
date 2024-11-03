<?php
if (!defined('_GNUBOARD_')) exit;
@include_once(G5_LIB_PATH.'/thumbnail.lib.php');

// 최신글 추출
// $cache_time 캐시 갱신시간
function latest($skin_dir='', $bo_table, $rows=10, $subject_len=40, $cache_time=1, $options='')
{
    global $g5;

    if (!$skin_dir) $skin_dir = 'basic';
    
    $time_unit = 3600;  // 1시간으로 고정

    if(preg_match('#^theme/(.+)$#', $skin_dir, $match)) {
        if (G5_IS_MOBILE) {
            $latest_skin_path = G5_THEME_MOBILE_PATH.'/'.G5_SKIN_DIR.'/latest/'.$match[1];
            if(!is_dir($latest_skin_path))
                $latest_skin_path = G5_THEME_PATH.'/'.G5_SKIN_DIR.'/latest/'.$match[1];
            $latest_skin_url = str_replace(G5_PATH, G5_URL, $latest_skin_path);
        } else {
            $latest_skin_path = G5_THEME_PATH.'/'.G5_SKIN_DIR.'/latest/'.$match[1];
            $latest_skin_url = str_replace(G5_PATH, G5_URL, $latest_skin_path);
        }
        $skin_dir = $match[1];
    } else {
        if(G5_IS_MOBILE) {
            $latest_skin_path = G5_MOBILE_PATH.'/'.G5_SKIN_DIR.'/latest/'.$skin_dir;
            $latest_skin_url  = G5_MOBILE_URL.'/'.G5_SKIN_DIR.'/latest/'.$skin_dir;
        } else {
            $latest_skin_path = G5_SKIN_PATH.'/latest/'.$skin_dir;
            $latest_skin_url  = G5_SKIN_URL.'/latest/'.$skin_dir;
        }
    }

    $caches = false;

    if(G5_USE_CACHE) {
        $cache_file_name = "latest-{$bo_table}-{$skin_dir}-{$rows}-{$subject_len}-".g5_cache_secret_key();
        $caches = g5_get_cache($cache_file_name, (int) $time_unit * (int) $cache_time);
        $cache_list = isset($caches['list']) ? $caches['list'] : array();
        g5_latest_cache_data($bo_table, $cache_list);
    }

    if( $caches === false ){

        $list = array();

        $board = get_board_db($bo_table, true);

        if( ! $board ){
            return '';
        }

        $bo_subject = get_text($board['bo_subject']);

        $tmp_write_table = $g5['write_prefix'] . $bo_table; // 게시판 테이블 전체이름
        $sql = " select * from {$tmp_write_table} where wr_is_comment = 0 order by wr_num limit 0, {$rows} ";
        
        $result = sql_query($sql);
        for ($i=0; $row = sql_fetch_array($result); $i++) {
            try {
                unset($row['wr_password']);     //패스워드 저장 안함( 아예 삭제 )
            } catch (Exception $e) {
            }
            $row['wr_email'] = '';              //이메일 저장 안함
            if (strstr($row['wr_option'], 'secret')){           // 비밀글일 경우 내용, 링크, 파일 저장 안함
                $row['wr_content'] = $row['wr_link1'] = $row['wr_link2'] = '';
                $row['file'] = array('count'=>0);
            }
            $list[$i] = get_list($row, $board, $latest_skin_url, $subject_len);

            $list[$i]['first_file_thumb'] = (isset($row['wr_file']) && $row['wr_file']) ? get_board_file_db($bo_table, $row['wr_id'], 'bf_file, bf_content', "and bf_type in (1, 2, 3, 18) ", true) : array('bf_file'=>'', 'bf_content'=>'');
            $list[$i]['bo_table'] = $bo_table;
            // 썸네일 추가
            if($options && is_string($options)) {
                $options_arr = explode(',', $options);
                $thumb_width = $options_arr[0];
                $thumb_height = $options_arr[1];
                $thumb = get_list_thumbnail($bo_table, $row['wr_id'], $thumb_width, $thumb_height, false, true);
                // 이미지 썸네일
                if($thumb['src']) {
                    $img_content = '<img src="'.$thumb['src'].'" alt="'.$thumb['alt'].'" width="'.$thumb_width.'" height="'.$thumb_height.'">';
                    $list[$i]['img_thumbnail'] = '<a href="'.$list[$i]['href'].'" class="lt_img">'.$img_content.'</a>';
                // } else {
                //     $img_content = '<img src="'. G5_IMG_URL.'/no_img.png'.'" alt="'.$thumb['alt'].'" width="'.$thumb_width.'" height="'.$thumb_height.'" class="no_img">';
                }
            }

            if(! isset($list[$i]['icon_file'])) $list[$i]['icon_file'] = '';
        }
        g5_latest_cache_data($bo_table, $list);

        if(G5_USE_CACHE) {

            $caches = array(
                'list' => $list,
                'bo_subject' => sql_escape_string($bo_subject),
            );

            g5_set_cache($cache_file_name, $caches, (int) $time_unit * (int) $cache_time);
        }
    } else {
        $list = $cache_list;
        $bo_subject = (is_array($caches) && isset($caches['bo_subject'])) ? $caches['bo_subject'] : '';
    }

    ob_start();
    include $latest_skin_path.'/latest.skin.php';
    $content = ob_get_contents();
    ob_end_clean();

    return $content;
}

// $cache_time 캐시 갱신시간, 단위는 시간이며, 0 이면 갱신하지 않는다.
function latest_multi($skin_dir='', $bo_table, $rows=10, $subject_len=40, $cache_time=0, $options='')
{
	global $g5;

	if (!$skin_dir) $skin_dir = 'basic';

	if(preg_match('#^theme/(.+)$#', $skin_dir, $match)) {
		if (G5_IS_MOBILE) {
			$latest_skin_path = G5_THEME_MOBILE_PATH.'/'.G5_SKIN_DIR.'/latest/'.$match[1];
			if(!is_dir($latest_skin_path))
				$latest_skin_path = G5_THEME_PATH.'/'.G5_SKIN_DIR.'/latest/'.$match[1];
			$latest_skin_url = str_replace(G5_PATH, G5_URL, $latest_skin_path);
		} else {
			$latest_skin_path = G5_THEME_PATH.'/'.G5_SKIN_DIR.'/latest/'.$match[1];
			$latest_skin_url = str_replace(G5_PATH, G5_URL, $latest_skin_path);
		}
		$skin_dir = $match[1];
	} else {
		if(G5_IS_MOBILE) {
			$latest_skin_path = G5_MOBILE_PATH.'/'.G5_SKIN_DIR.'/latest/'.$skin_dir;
			$latest_skin_url  = G5_MOBILE_URL.'/'.G5_SKIN_DIR.'/latest/'.$skin_dir;
		} else {
			$latest_skin_path = G5_SKIN_PATH.'/latest/'.$skin_dir;
			$latest_skin_url  = G5_SKIN_URL.'/latest/'.$skin_dir;
		}
	}
	$latest_skin_url = parse_url($latest_skin_url, PHP_URL_PATH);	// url 에서 프로토콜과 도메인 포트 등 앞부분을 제거한다.
	//echo $latest_skin_url;

	$cache_fwrite = false;
	if(G5_USE_CACHE) {
		$cache_file = G5_DATA_PATH."/cache/latest-multi-{$bo_table}-{$skin_dir}-{$rows}-{$subject_len}-{$cache_time}-{$options}.php";	// latest- 로 시작해야 관리자페이지에서 삭제된다.

		if(!file_exists($cache_file)) {
			$cache_fwrite = true;
		} else {
			if($cache_time > 0) {
				$filetime = filemtime($cache_file);
				if($filetime && $filetime < (G5_SERVER_TIME - 3600 * $cache_time)) {
					@unlink($cache_file);
					$cache_fwrite = true;
				}
			}

			if(!$cache_fwrite)
				include($cache_file);
		}
	}

	if(!G5_USE_CACHE || $cache_fwrite) {
		$list = array();

		$sql = " select * from {$g5['board_table']} where bo_table = '{$bo_table}' ";
		$board = sql_fetch($sql);
		$bo_subject = get_text($board['bo_subject']);
		$bo_mobile_subject = get_text($board['bo_mobile_subject']);

		$tmp_write_table = $g5['write_prefix'] . $bo_table; // 게시판 테이블 전체이름

		$sql_where = " where wr_is_comment = 0 ";
		if (stristr($options, "notice_only"))		$sql_where .= " and INSTR(concat(',','{$board['bo_notice']}',','),concat(',',wr_id,',')) > 0 ";
		if (stristr($options, "notice_exclude"))	$sql_where .= " and INSTR(concat(',','{$board['bo_notice']}',','),concat(',',wr_id,',')) = 0 ";
		if (stristr($options, "reply_exclude"))		$sql_where .= " and wr_reply = '' ";
		if (stristr($options, "file_exist"))		$sql_where .= " and wr_file > 0 ";
		//if (stristr($options, "mine_only"))			$sql_where .= " and mb_id = '{$member['mb_id']}' ";	// 이 기능을 사용하려면 global 에 $member 를 추가해야 한다. 하지만, 사용하려 해도 최신글 캐시 기능 때문에 활용이 어렵다.
		//echo $sql_where;

		$sql_order = " order by ";
		if (stristr($options, "notice_up"))			$sql_order .= " case when INSTR(concat(',','{$board['bo_notice']}',','),concat(',',wr_id,',')) > 0 then 0 else 1 end, ";
		if (stristr($options, "reply_list"))		$sql_order .= " wr_num, wr_reply, ";
		if (stristr($options, "datetime_asc"))		$sql_order .= " wr_datetime asc, ";
		if (stristr($options, "datetime_desc"))		$sql_order .= " wr_datetime desc, ";
		if (stristr($options, "hit_asc"))			$sql_order .= " wr_hit asc, ";
		if (stristr($options, "hit_desc"))			$sql_order .= " wr_hit desc, ";
		if (stristr($options, "last_asc"))			$sql_order .= " wr_last asc, ";
		if (stristr($options, "last_desc"))			$sql_order .= " wr_last desc, ";
		if (stristr($options, "comment_asc"))		$sql_order .= " wr_comment asc, ";
		if (stristr($options, "comment_desc"))		$sql_order .= " wr_comment desc, ";
		if (stristr($options, "comment_cnt_desc"))	$sql_order .= " wr_comment desc, ";
		if (stristr($options, "good_asc"))			$sql_order .= " wr_good asc, ";
		if (stristr($options, "good_desc"))			$sql_order .= " wr_good desc, ";
		if (stristr($options, "subject_asc"))		$sql_order .= " wr_subject asc, ";
		if (stristr($options, "subject_desc"))		$sql_order .= " wr_subject desc, ";
		if (stristr($options, "ca_name_asc"))		$sql_order .= " ca_name asc, ";
		if (stristr($options, "ca_name_desc"))		$sql_order .= " ca_name desc, ";
		if (stristr($options, "wr_1_asc"))			$sql_order .= " wr_1 asc, ";
		if (stristr($options, "wr_1_desc"))			$sql_order .= " wr_1 desc, ";
		if (stristr($options, "random"))			$sql_order .= " rand(), ";
		$sql_order .= " wr_num limit 0, {$rows} ";
		//echo $sql_order;

		$sql = " select * from {$tmp_write_table} " . $sql_where . $sql_order;
		$result = sql_query($sql);
		for ($i=0; $row = sql_fetch_array($result); $i++) {
			$list[$i] = get_list($row, $board, $latest_skin_url, $subject_len);
		}

		if($cache_fwrite) {
			$handle = fopen($cache_file, 'w');
			$cache_content = "<?php\nif (!defined('_GNUBOARD_')) exit;\n\$bo_subject='".sql_escape_string($bo_subject)."';\n\$bo_mobile_subject='".sql_escape_string($bo_mobile_subject)."';\n\$list=".var_export($list, true)."?>";
			fwrite($handle, $cache_content);
			fclose($handle);
		}
	}

	ob_start();
	include $latest_skin_path.'/latest.skin.php';
	$content = ob_get_contents();
	ob_end_clean();

	return $content;
}