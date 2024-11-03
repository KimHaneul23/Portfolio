<?php
$sub_menu = "100290";
require_once './_common.php';

if ($is_admin != 'super') {
    alert_close('최고관리자만 접근 가능합니다.');
}

$g5['title'] = '메뉴 추가';
require_once G5_PATH . '/head.sub.php';

$firstcode = isset($firstcode) ? preg_replace('/[^0-9a-zA-Z]/', '', strip_tags($firstcode)) : '';
$parentcode = isset($parentcode) ? preg_replace('/[^0-9a-zA-Z]/', '', strip_tags($parentcode)) : '';
$new    = isset($_GET['new']) ? clean_xss_tags($_GET['new'], 1, 1) : '';
$code   = isset($_GET['code']) ? (string)preg_replace('/[^0-9a-zA-Z]/', '', $_GET['code']) : '';

// 코드
if ($new == 'new' || !$code) {
    $code = base_convert(substr($code,0, 3), 36, 10);
    $code += 1296;
    $code = base_convert((string)$code, 10, 36);
}

?>

<div id="menu_frm" class="new_win">
    <h1><?php echo $g5['title']; ?></h1>

    <form name="fmenuform" id="fmenuform" class="new_win_con">

        <div class="new_win_desc">
            <label for="me_type">대상선택</label>
            <select name="me_type" id="me_type">
                <option value="">직접입력</option>
                <option value="group">게시판그룹</option>
                <option value="board">게시판</option>
                <option value="content">내용관리</option>
            </select>
        </div>

        <div id="menu_result"></div>

    </form>

</div>

<script>
    $(function() {
        $("#menu_result").load(
            "./menu_form_search.php"
        );

        function link_checks_all_chage() {

            var $links = $(opener.document).find("#menulist input[name='me_link[]']"),
                $o_link = $(".td_mngsmall input[name='link[]']"),
                hrefs = [],
                menu_exist = false;

            if ($links.length) {
                $links.each(function(index) {
                    hrefs.push($(this).val());
                });

                $o_link.each(function(index) {
                    if ($.inArray($(this).val(), hrefs) != -1) {
                        $(this).closest("tr").find("td:eq( 0 )").addClass("exist_menu_link");
                        menu_exist = true;
                    }
                });
            }

            if (menu_exist) {
                $(".menu_exists_tip").show();
            } else {
                $(".menu_exists_tip").hide();
            }
        }

        function menu_result_change(type) {

            var dfd = new $.Deferred();

            $("#menu_result").empty().load(
                "./menu_form_search.php", {
                    type: type
                },
                function() {
                    dfd.resolve('Finished');
                }
            );

            return dfd.promise();
        }

        $("#me_type").on("change", function() {
            var type = $(this).val();

            var promise = menu_result_change(type);

            promise.done(function(message) {
                link_checks_all_chage(type);
            });

        });

        $(document).on("click", "#add_manual", function() {
            var me_name = $.trim($("#me_name").val());
            var me_link = $.trim($("#me_link").val());

            add_menu_list(me_name, me_link, "<?php echo $code; ?>", "<?php echo $parentcode; ?>", "<?php echo $firstcode; ?>");
        });

        $(document).on("click", ".add_select", function() {
            var me_name = $.trim($(this).siblings("input[name='subject[]']").val());
            var me_link = $.trim($(this).siblings("input[name='link[]']").val());

            add_menu_list(me_name, me_link, "<?php echo $code; ?>", "<?php echo $parentcode; ?>", "<?php echo $firstcode; ?>");
        });
    });

    function add_menu_list(name, link, code, parentcode, firstcode) {
        var $menulist = $("#menulist", opener.document);
        var ms = new Date().getTime();
        var sub_menu_class;
        <?php if($new == 'new') { ?>
		sub_menu_class = " class=\"td_category\"";
		<?php } else if($new == 'subnew') { ?>
		sub_menu_class = " class=\"td_category sub_menu_class\"";
		<?php } else { ?>
		sub_menu_class = " class=\"td_category two_sub_menu_class\"";
		<?php } ?>

        var list = "<tr class=\"menu_list menu_group_<?php echo $code; ?>\" data-code=\"<?php if($firstcode){echo $firstcode.$parentcode.$code;} else if($parentcode){echo $parentcode.$code;}else{echo $code;}?>\">";
		list += "<td"+sub_menu_class+">";
        list += "<label for=\"me_name_" + ms + "\"  class=\"sound_only\">메뉴<strong class=\"sound_only\"> 필수</strong></label>";
        list += "<input type=\"hidden\" name=\"code[]\" value=\"<?php echo $code; ?>\">";
		<?php if($parentcode){?>list += "<input type=\"hidden\" name=\"parentcode[]\" data-parent=\"<?php echo $parentcode; ?>\" value=\"<?php echo $parentcode; ?>\">";<?php } else {?>list += "<input type=\"hidden\" name=\"parentcode[]\" data-parent=\"0\" value=\"0\">";<?php }?>
    	<?php if($firstcode){?>list += "<input type=\"hidden\" name=\"firstcode[]\" data-first=\"<?php echo $firstcode; ?>\" value=\"<?php echo $firstcode; ?>\">";<?php } else {?>list += "<input type=\"hidden\" name=\"firstcode[]\" data-first=\"0\" value=\"0\">";<?php }?>
        list += "<input type=\"text\" name=\"me_name[]\" value=\"" + name + "\" id=\"me_name_" + ms + "\" required class=\"required frm_input full_input\">";
        list += "</td>";
        list += "<td>";
        list += "<label for=\"me_link_" + ms + "\"  class=\"sound_only\">링크<strong class=\"sound_only\"> 필수</strong></label>";
        list += "<input type=\"text\" name=\"me_link[]\" value=\"" + link + "\" id=\"me_link_" + ms + "\" required class=\"required frm_input full_input\">";
        list += "</td>";
        list += "<td class=\"td_mng\">";
        list += "<label for=\"me_target_" + ms + "\"  class=\"sound_only\">새창</label>";
        list += "<select name=\"me_target[]\" id=\"me_target_" + ms + "\">";
        list += "<option value=\"self\">사용안함</option>";
        list += "<option value=\"blank\">사용함</option>";
        list += "</select>";
        list += "</td>";
        list += "<td class=\"td_numsmall\">";
        list += "<label for=\"me_order_" + ms + "\"  class=\"sound_only\">순서<strong class=\"sound_only\"> 필수</strong></label>";
        list += "<input type=\"text\" name=\"me_order[]\" value=\"0\" id=\"me_order_" + ms + "\" required class=\"required frm_input\" size=\"5\">";
        list += "</td>";
        list += "<td class=\"td_mngsmall\">";
        list += "<label for=\"me_use_" + ms + "\"  class=\"sound_only\">PC사용</label>";
        list += "<select name=\"me_use[]\" id=\"me_use_" + ms + "\">";
        list += "<option value=\"1\">사용함</option>";
        list += "<option value=\"0\">사용안함</option>";
        list += "</select>";
        list += "</td>";
        list += "<td class=\"td_mngsmall\">";
        list += "<label for=\"me_mobile_use_" + ms + "\"  class=\"sound_only\">모바일사용</label>";
        list += "<select name=\"me_mobile_use[]\" id=\"me_mobile_use_" + ms + "\">";
        list += "<option value=\"1\">사용함</option>";
        list += "<option value=\"0\">사용안함</option>";
        list += "</select>";
        list += "</td>";
        list += "<td class=\"td_mng\">";
        <?php if ($new == 'new') { ?>
            list += "<button type=\"button\" class=\"btn_add_submenu btn_03\">추가</button>\n";
        <?php } else if($new == 'subnew') { ?>
		list += "<button type=\"button\" class=\"btn_add_two_submenu btn_03\">추가</button>\n";
		<?php } ?>
        list += "<button type=\"button\" class=\"btn_del_menu btn_02\">삭제</button>";
        list += "</td>";
        list += "</tr>";

        var $menu_last = null;
		if(parentcode.length == 2){
			if(parentcode){
				// 3차 
				if(code == "1"){
					$menu_last = $menulist.find("tr.menu_group_"+parentcode+":last");
					$menulist.find("tr.menu_group_"+parentcode).each(function(){
						parent_chk = $(this).find("input[name='parentcode[]']").val();
						if(parent_chk == firstcode){
							$menu_last = $(this);
						}
					});
				} else {
					$menulist.find("tr.menu_group_"+(code-1)).each(function(){
						parent_chk = $(this).find("input[name='parentcode[]']").val();
						first_chk = $(this).find("input[name='parentcode[]']").next("input[name='firstcode[]']").val();
						if(parent_chk == parentcode){
							if(first_chk == firstcode){
								$menu_last = $(this);
							}
						}
					});
				}
			}else{
				$menu_last = $menulist.find("tr.menu_list:last");
			}
		} else {
			if(parentcode){
				// 2차
				if(code == "10"){
					$menu_last = $menulist.find("tr.menu_group_"+parentcode+":last");
				} else {
					$menulist.find("tr.menu_group_"+(code-10)).each(function(){
						parent_chk = $(this).find("input[name='parentcode[]']").val();
						first_chk = $(this).find("input[name='firstcode[]']").val();
						if(parent_chk == parentcode){
							$menu_last = $(this);
						}
					});
				}
			}else{
				// 1차
				$menu_last = $menulist.find("tr.menu_list:last");
			}
		}
//		
//        if (code)
//            $menu_last = $menulist.find("tr.menu_group_" + code + ":last");
//        else
//            $menu_last = $menulist.find("tr.menu_list:last");

        if ($menu_last.length > 0) {
            $menu_last.after(list);
        } else {
            if ($menulist.find("#empty_menu_list").length > 0)
                $menulist.find("#empty_menu_list").remove();

            $menulist.find("table tbody").append(list);
        }

        $menulist.find("tr.menu_list").each(function(index) {
            $(this).removeClass("bg0 bg1")
                .addClass("bg" + (index % 2));
        });

        window.close();
    }
</script>

<?php
require_once G5_PATH . '/tail.sub.php';
