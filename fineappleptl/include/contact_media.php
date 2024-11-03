<div class="sub1_4_form_wrap">
    <div class="sub1_4_form_box">
        <div class="sub1_4_form">
            <form name="fwrite" id="fwrite" action="<?php echo G5_URL?>/bbs/write_update.php" onsubmit="return fwrite_submit(this);" method="post" enctype="multipart/form-data" autocomplete="off">
                <input type="hidden" name="uid" value="<?php echo get_uniqid(); ?>">
                <input type="hidden" name="w" value="<?php echo $w ?>">
                <input type="hidden" name="bo_table" value="contact_media">
                <input type="hidden" name="wr_id" value="<?php echo $wr_id ?>">
                <input type="hidden" name="sca" value="<?php echo $sca ?>">
                <input type="hidden" name="sfl" value="<?php echo $sfl ?>">
                <input type="hidden" name="stx" value="<?php echo $stx ?>">
                <input type="hidden" name="spt" value="<?php echo $spt ?>">
                <input type="hidden" name="sst" value="<?php echo $sst ?>">
                <input type="hidden" name="sod" value="<?php echo $sod ?>">
                <input type="hidden" name="page" value="<?php echo $page ?>">
                <input type="hidden" name="wr_content" value="미디어 제작 문의">
                <input type="hidden" name="wr_datetime" value="<?php echo $wr_datetime ?>">
                <input type="hidden" name="wr_10" value="YET">

                <div class="contact_title_box">
                    <p class="txt01 fz_28 ls_p1 lh_16 pretendard normal">
                        미디어 제작 <span class="bold">문의하기</span>
                    </p>
                </div>
                <div class="contact_box_wrap contact_box_wrap01">
                    <div class="contact_text_box">
                        <p class="txt01 fz_15 ls_p1 lh_16 pretendard normal">
                            (*는 필수입력정보 입니다)
                        </p>
                    </div>
                    <div class="contact_box">

                        <div class="contact_write_box contact_write_box01_1" style="display:none;">
                            <label for="wr_datetime" class="fz_20 ls_p1 lh_16 pretendard normal">날짜<strong> *</strong></label>
                            <div class="cont">
                                <input type="text" name="wr_datetime" <?php if(!$write['wr_datetime']) echo "value='".date("Y-m-d H:i:s")."'"; else echo "value='".$write['wr_datetime']."'"; ?> id="wr_datetime" class="frm_input" size="29">
                            </div>
                        </div>

                        <div class="contact_write_box contact_write_box01_1">
                            <label for="wr_subject" class="fz_20 ls_p1 lh_16 pretendard normal">업체명<strong> *</strong></label>
                            <div class="cont">
                                <input type="text" name="wr_subject" value="<?php echo $subject ?>" id="wr_subject" required class="frm_input required" maxlength="255">
                            </div>
                        </div>

                        <div class="contact_write_box contact_write_box01_2">
                            <label for="wr_name" class="fz_20 ls_p1 lh_16 pretendard normal">담당자 성함 / 직책<strong> *</strong></label>
                            <div class="cont">
                                <input type="text" name="wr_name" value="<?php echo $name ?>" id="wr_name" placeholder="홍길동 팀장" required class="frm_input required" maxlength="20">
                            </div>
                        </div>

                        <div class="contact_write_box contact_write_box01_3">
                            <label for="wr_1" class="fz_20 ls_p1 lh_16 pretendard normal">담당자 연락처<strong> *</strong></label>
                            <div class="cont">
                                <input type="text" name="wr_1" value="<?php echo $name ?>" id="wr_1" placeholder="연락처 (-없이 숫자만)" required class="frm_input required" maxlength="11" oninput="inputNum(this.id)">
                            </div>
                            <script>
                                function inputNum(id) {
                                    var element = document.getElementById('wr_1');
                                    element.value = element.value.replace(/[^0-9]/gi, "");
                                }
                            </script>
                        </div>

                        <div class="contact_write_box contact_write_box01_4">
                            <label for="wr_email" class="fz_20 ls_p1 lh_16 pretendard normal">이메일 주소<strong> *</strong></label>
                            <div class="cont">
                                <input type="text" name="wr_email" value="<?php echo $email ?>" id="wr_email" placeholder="fineappleptl@gmail.com" required class="frm_input email required" maxlength="100">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="contact_box_wrap contact_box_wrap02">
                    <div class="contact_box">
                        <div class="contact_write_box contact_write_box02_1">
                            <label for="wr_2" class="fz_20 ls_p1 lh_16 pretendard normal">프로젝트 예산 <br>(단위:만원)</label>
                            <div class="cont">
                                <input type="text" name="wr_2" value="<?php echo $write['wr_2'] ?>" class="frm_input" maxlength="20" >
                            </div>
                        </div>

                        <div class="contact_write_box contact_write_box02_2">
                            <label for="wr_3" class="fz_20 ls_p1 lh_16 pretendard normal">제작 페이지 수를 입력해주세요</label>
                            <div class="cont">
                                <input type="text" name="wr_3" value="<?php echo $write['wr_3'] ?>" class="frm_input" maxlength="20" >
                            </div>
                        </div>

                        <div class="contact_write_box contact_write_box02_3">
                            <label for="wr_4" class="fz_20 ls_p1 lh_16 pretendard normal">제작 목적</label>
                            <div class="cont">
                                <select name="wr_4" id="wr_4" class="form-control full_input">
                                    <option value="" selected>제작 목적</option>
                                    <option value="리브랜딩">리브랜딩</option>
                                    <option value="매출증대">매출증대</option>
                                    <option value="마케팅">마케팅</option>
                                    <option value="기타">기타</option>
                                </select>
                            </div>
                        </div>

                        <div class="contact_write_box contact_write_box02_4">
                            <label for="wr_5" class="fz_20 ls_p1 lh_16 pretendard normal">제작 형태를 선택해주세요</label>
                            <div>
                                <label for="wr_5_1_media" class="fz_18 ls_p1 lh_16 pretendard normal">
                                    <input id="wr_5_1_media" type="radio" name="wr_5" value="원 페이지" <?php if($write['wr_5'] == '원 페이지') echo "checked='checked'"; ?> class="checkbox"><span></span>&nbsp;원 페이지 제작
                                </label>
                                <label for="wr_5_2_media" class="fz_18 ls_p1 lh_16 pretendard normal">
                                    <input id="wr_5_2_media" type="radio" name="wr_5" value="전체 페이지" <?php if($write['wr_5'] == '전체 페이지') echo "checked='checked'"; ?> class="checkbox"><span></span>&nbsp;전체 페이지 제작
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="contact_box_wrap contact_box_wrap03 pc_cont_960">
                    <div class="contact_box">
                        <div class="contact_write_box contact_write_box03_1">
                            <label for="wr_6" class="fz_20 ls_p1 lh_16 pretendard normal">제작방법을 선택해주세요</label>
                            <div>
                                <label for="wr_6_1_media_pc" class="fz_18 ls_p1 lh_16 pretendard normal">
                                    <input id="wr_6_1_media_pc" type="radio" name="wr_6" value="신규" <?php if($write['wr_6'] == '신규') echo "checked='checked'"; ?> class="checkbox"><span></span>&nbsp;신규 제작
                                </label>
                                <label for="wr_6_2_media_pc" class="fz_18 ls_p1 lh_16 pretendard normal">
                                    <input id="wr_6_2_media_pc" type="radio" name="wr_6" value="리뉴얼" <?php if($write['wr_6'] == '리뉴얼') echo "checked='checked'"; ?> class="checkbox"><span></span>&nbsp;기존 홈페이지 리뉴얼
                                </label>
                            </div>
                        </div>

                        <div class="contact_write_box contact_write_box03_2">
                            <label for="wr_7" class="fz_20 ls_p1 lh_16 pretendard normal">제작 시 필요한 항목을 선택해주세요 (중복선택 가능)</label>
                            <div>
                                <label for="wr_7_1_media_pc" class="fz_18 ls_p1 lh_16 pretendard normal">
                                    <input type="checkbox" name="ch_wr_7[]" id="wr_7_1_media_pc" value="전체" onclick='selectAll(this)'><span></span>&nbsp;전체
                                </label>
                                <label for="wr_7_2_media_pc" class="fz_18 ls_p1 lh_16 pretendard normal">
                                    <input type="checkbox" name="ch_wr_7[]" id="wr_7_2_media_pc" value="브랜딩" ><span></span>&nbsp;브랜딩
                                </label>
                                <label for="wr_7_3_media_pc" class="fz_18 ls_p1 lh_16 pretendard normal">
                                    <input type="checkbox" name="ch_wr_7[]" id="wr_7_3_media_pc" value="기획" ><span></span>&nbsp;기획
                                </label>
                                <label for="wr_7_4_media_pc" class="fz_18 ls_p1 lh_16 pretendard normal">
                                    <input type="checkbox" name="ch_wr_7[]" id="wr_7_4_media_pc" value="디자인" ><span></span>&nbsp;디자인
                                </label>
                                <label for="wr_7_5_media_pc" class="fz_18 ls_p1 lh_16 pretendard normal">
                                    <input type="checkbox" name="ch_wr_7[]" id="wr_7_5_media_pc" value="프론트 개발" ><span></span>&nbsp;프론트 개발
                                </label>
                                <label for="wr_7_6_media_pc" class="fz_18 ls_p1 lh_16 pretendard normal">
                                    <input type="checkbox" name="ch_wr_7[]" id="wr_7_6_media_pc" value="백엔드 개발(커스텀)" ><span></span>&nbsp;백엔드 개발(커스텀)
                                </label>
                            </div>
                            <div>
                                <label for="wr_7_7_media_pc" class="fz_18 ls_p1 lh_16 pretendard normal">
                                    <input type="checkbox" name="ch_wr_7[]" id="wr_7_7_media_pc" value="홈페이지 원고" ><span></span>&nbsp;홈페이지 원고
                                </label>
                                <label for="wr_7_8_media_pc" class="fz_18 ls_p1 lh_16 pretendard normal">
                                    <input type="checkbox" name="ch_wr_7[]" id="wr_7_8_media_pc" value="웹/모바일 적응형" ><span></span>&nbsp;웹/모바일 적응형
                                </label>
                                <label for="wr_7_9_media_pc" class="fz_18 ls_p1 lh_16 pretendard normal">
                                    <input type="checkbox" name="ch_wr_7[]" id="wr_7_9_media_pc" value="웹/모바일 반응형" ><span></span>&nbsp;웹/모바일 반응형
                                </label>
                                <label for="wr_7_10_media_pc" class="fz_18 ls_p1 lh_16 pretendard normal">
                                    <input type="checkbox" name="ch_wr_7[]" id="wr_7_10_media_pc" value="사진 촬영" ><span></span>&nbsp;사진 촬영
                                </label>
                                <label for="wr_7_11_media_pc" class="fz_18 ls_p1 lh_16 pretendard normal">
                                    <input type="checkbox" name="ch_wr_7[]" id="wr_7_11_media_pc" value="영상 촬영" ><span></span>&nbsp;영상 촬영
                                </label>
                                <label for="wr_7_12_media_pc" class="fz_18 ls_p1 lh_16 pretendard normal">
                                    <input type="checkbox" name="ch_wr_7[]" id="wr_7_12_media_pc" value="다국어페이지" ><span></span>&nbsp;다국어페이지
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="contact_box_wrap contact_box_wrap03 m_cont_960">
                    <div class="contact_box">
                        <div class="contact_write_box contact_write_box03_1">
                            <label for="wr_6" class="fz_20 ls_p1 lh_16 pretendard normal">제작방법을 선택해주세요</label>
                            <div>
                                <label for="wr_6_1_media_m" class="fz_18 ls_p1 lh_16 pretendard normal">
                                    <input id="wr_6_1_media_m" type="radio" name="wr_6" value="신규" <?php if($write['wr_6'] == '신규') echo "checked='checked'"; ?> class="checkbox"><span></span>&nbsp;신규 제작
                                </label>
                                <label for="wr_6_2_media_m" class="fz_18 ls_p1 lh_16 pretendard normal">
                                    <input id="wr_6_2_media_m" type="radio" name="wr_6" value="리뉴얼" <?php if($write['wr_6'] == '리뉴얼') echo "checked='checked'"; ?> class="checkbox"><span></span>&nbsp;기존 홈페이지 리뉴얼
                                </label>
                            </div>
                        </div>

                        <div class="contact_write_box contact_write_box03_2">
                            <label for="wr_7" class="fz_20 ls_p1 lh_16 pretendard normal">제작 시 필요한 항목을 선택해주세요 (중복선택 가능)</label>
                            <div>
                                <label for="wr_7_1_media_m" class="fz_18 ls_p1 lh_16 pretendard normal">
                                    <input type="checkbox" name="ch_wr_7[]" id="wr_7_1_media_m" value="전체" onclick='selectAll(this)'><span></span>&nbsp;전체
                                </label>
                                <label for="wr_7_2_media_m" class="fz_18 ls_p1 lh_16 pretendard normal">
                                    <input type="checkbox" name="ch_wr_7[]" id="wr_7_2_media_m" value="브랜딩" ><span></span>&nbsp;브랜딩
                                </label>
                                <label for="wr_7_3_media_m" class="fz_18 ls_p1 lh_16 pretendard normal">
                                    <input type="checkbox" name="ch_wr_7[]" id="wr_7_3_media_m" value="기획" ><span></span>&nbsp;기획
                                </label>
                                <label for="wr_7_4_media_m" class="fz_18 ls_p1 lh_16 pretendard normal">
                                    <input type="checkbox" name="ch_wr_7[]" id="wr_7_4_media_m" value="디자인" ><span></span>&nbsp;디자인
                                </label>
                                <label for="wr_7_5_media_m" class="fz_18 ls_p1 lh_16 pretendard normal">
                                    <input type="checkbox" name="ch_wr_7[]" id="wr_7_5_media_m" value="프론트 개발" ><span></span>&nbsp;프론트 개발
                                </label>
                                <label for="wr_7_6_media_m" class="fz_18 ls_p1 lh_16 pretendard normal">
                                    <input type="checkbox" name="ch_wr_7[]" id="wr_7_6_media_m" value="백엔드 개발(커스텀)" ><span></span>&nbsp;백엔드 개발(커스텀)
                                </label>
                                <label for="wr_7_7_media_m" class="fz_18 ls_p1 lh_16 pretendard normal">
                                    <input type="checkbox" name="ch_wr_7[]" id="wr_7_7_media_m" value="홈페이지 원고" ><span></span>&nbsp;홈페이지 원고
                                </label>
                                <label for="wr_7_8_media_m" class="fz_18 ls_p1 lh_16 pretendard normal">
                                    <input type="checkbox" name="ch_wr_7[]" id="wr_7_8_media_m" value="웹/모바일 적응형" ><span></span>&nbsp;웹/모바일 적응형
                                </label>
                                <label for="wr_7_9_media_m" class="fz_18 ls_p1 lh_16 pretendard normal">
                                    <input type="checkbox" name="ch_wr_7[]" id="wr_7_9_media_m" value="웹/모바일 반응형" ><span></span>&nbsp;웹/모바일 반응형
                                </label>
                                <label for="wr_7_10_media_m" class="fz_18 ls_p1 lh_16 pretendard normal">
                                    <input type="checkbox" name="ch_wr_7[]" id="wr_7_10_media_m" value="사진 촬영" ><span></span>&nbsp;사진 촬영
                                </label>
                                <label for="wr_7_11_media_m" class="fz_18 ls_p1 lh_16 pretendard normal">
                                    <input type="checkbox" name="ch_wr_7[]" id="wr_7_11_media_m" value="영상 촬영" ><span></span>&nbsp;영상 촬영
                                </label>
                                <label for="wr_7_12_media_m" class="fz_18 ls_p1 lh_16 pretendard normal">
                                    <input type="checkbox" name="ch_wr_7[]" id="wr_7_12_media_m" value="다국어페이지" ><span></span>&nbsp;다국어페이지
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <script>
                    var f2_media = document.fwrite;
                    var str2_media=",<?php echo $write[wr_7]?>,";
                    for (var j_media=0; j_media<f2_media.length; j_media++) {
                        if (f2_media.elements[j_media].name == "ch_wr_7[]") {
                            if (str2_media.indexOf(','+f2_media.elements[j_media].value+',')>=0) {
                                f2_media.elements[j_media].checked = true;
                            }
                        }
                    }

                    function selectAll(selectAll)  {
                        const checkboxes = document.getElementsByName('ch_wr_7[]');

                        checkboxes.forEach((checkbox) => {
                            checkbox.checked = selectAll.checked;
                        })
                    }
                </script>

                <div class="contact_box_wrap contact_box_wrap04">
                    <div class="contact_box">
                        <div class="contact_write_box contact_write_box04_1">
                            <label for="wr_8" class="fz_20 ls_p1 lh_16 pretendard normal">파인애플 피티엘의 프로젝트 중에서 마음에 드셨던 홈페이지가 있다면 작성해주세요</label>
                            <div class="cont">
                                <textarea type="text" name="wr_8" value="<?php echo $write['wr_8'] ?>" class="fz_18 ls_p1 lh_16 pretendard normal" maxlength="65536"></textarea>
                            </div>
                        </div>

                        <div class="contact_write_box contact_write_box04_2">
                            <label for="wr_9" class="fz_20 ls_p1 lh_16 pretendard normal">기타 요청사항</label>
                            <div class="cont">
                                <textarea type="text" name="wr_9" value="<?php echo $write['wr_9'] ?>" class="fz_18 ls_p1 lh_16 pretendard normal" maxlength="65536"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="contact_agree_wrap">
                    <input type="checkbox" id="agree_media" name="agree_media">
                    <label for="agree_media" class="agree fz_16 ls_p1 lh_16 pretendard light"><span class="bold" onclick='contact_agree_open()'>개인정보처리방침</span> 에 동의합니다.<i class="essential">*</i> (필수)</label>
                    
                    <div class="contact_agree_text" id="contact_agree_text">
                        <div class="contact_agree_text_close" onclick='contact_agree_close()'></div>
                        <p class="txt01 fz_18 ls_p1 lh_16 pretendard bold">
                            개인 정보 처리 방침
                        </p>
                        <div class="contact_agree_text_box">
                            <p class="txt02 fz_14 ls_p1 lh_16 pretendard normal">
                                개인정보 수집이용에 대한 동의
                            </p>
                            <p class="txt03 fz_14 ls_p1 lh_16 pretendard normal">
                                회원님의 소중한 개인정보는 <br>
                                다음과 같은 정책에 따라 수집 및 이용됩니다. <br>
                                저희 파인애플피티엘(주식회사 슬로우슬로우)에서는 <br>
                                해당 목적에 연관되는 개인정보만을 수집하며, <br>
                                수집된 정보를 투명하고 안전하게 보호 관리할 것을 약속합니다. <br>
                                이에 개인정보 수집및 이용에 대한 동의를 구합니다.
                            </p>
                            <p class="txt04 fz_14 ls_p1 lh_16 pretendard normal">
                                [개인정보의 수집·이용 목적]<br>
                                회원님의 프로젝트에 대한 견적, 기간, 개발방법 등의 <br>
                                문의에 대한 정보가 보다 정확한 답변을 위해 수집됩니다.<br>
                                [수집항목]<br>
                                필수항목: 성명/직책, 회사명, 웹사이트, 연락처, 이메일 <br>
                                선택항목: 의뢰내용, 예산, 첨부파일<br>
                                [보유이용기간]<br>
                                원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 <br>
                                해당 정보를 지체 없이 파기합니다. 
                            </p>
                            <p class="txt05 fz_14 ls_p1 lh_16 pretendard normal">
                                최종 수정 날짜: 2019년 02월 01일
                            </p>
                        </div>
                    </div>
                </div>
                <script>
                    function contact_agree_open() {
                        const contact_agree_close_btn = document.getElementById('contact_agree_text');
                        contact_agree_close_btn.classList.add('open');
                    }
                    function contact_agree_close() {
                        const contact_agree_close_btn = document.getElementById('contact_agree_text');
                        contact_agree_close_btn.classList.remove('open');
                    }
                </script>

                <div class="contact_btn_box">
                    <div class="contact_btn">
                        <button type="submit" id="btn_submit" accesskey="s" class="fz_16 ls_p3 lh_16 pretendard bold">작성완료</button>
                    </div>
                </div>
            </form>

            <script>
                <?php if($write_min || $write_max) { ?>
                // 글자수 제한
                var char_min = parseInt(<?php echo $write_min; ?>); // 최소
                var char_max = parseInt(<?php echo $write_max; ?>); // 최대
                check_byte("wr_content", "char_count");

                $(function() {
                    $("#wr_content").on("keyup", function() {
                        check_byte("wr_content", "char_count");
                    });
                });

                <?php } ?>
                function fwrite_submit(f)
                {
                    <?php echo $editor_js; // 에디터 사용시 자바스크립트에서 내용을 폼필드로 넣어주며 내용이 입력되었는지 검사함   ?>

                    var subject = "";
                    var content = "";
                    $.ajax({
                        url: g5_bbs_url+"/ajax.filter.php",
                        type: "POST",
                        data: {
                            "subject": f.wr_subject.value,
                            "content": f.wr_content.value
                        },
                        dataType: "json",
                        async: false,
                        cache: false,
                        success: function(data, textStatus) {
                            subject = data.subject;
                            content = data.content;
                        }
                    });

                    if (subject) {
                        alert("제목에 금지단어('"+subject+"')가 포함되어있습니다");
                        f.wr_subject.focus();
                        return false;
                    }

                    if (content) {
                        alert("내용에 금지단어('"+content+"')가 포함되어있습니다");
                        if (typeof(ed_wr_content) != "undefined")
                            ed_wr_content.returnFalse();
                        else
                            f.wr_content.focus();
                        return false;
                    }

                    if (document.getElementById("char_count")) {
                        if (char_min > 0 || char_max > 0) {
                            var cnt = parseInt(check_byte("wr_content", "char_count"));
                            if (char_min > 0 && char_min > cnt) {
                                alert("내용은 "+char_min+"글자 이상 쓰셔야 합니다.");
                                return false;
                            }
                            else if (char_max > 0 && char_max < cnt) {
                                alert("내용은 "+char_max+"글자 이하로 쓰셔야 합니다.");
                                return false;
                            }
                        }
                    }
                    
                    if ( $('input:checkbox[name="agree_media"]').is(":checked") == false) {
                        alert("개인정보 수집에 동의 하셔야 참여 가능합니다.");
                        return false;
                    }

                    <?php echo $captcha_js; // 캡챠 사용시 자바스크립트에서 입력된 캡챠를 검사함  ?>

                    document.getElementById("btn_submit").disabled = "disabled";

                    return true;
                }
            </script>
        </div>
    </div>
</div>


<div class="s14_c02_wrap">
    <div class="s14_c02_section" id="s14_c02_section2">
        <div class="s14_c02_cont" id="s14_c02_cont2">
            <div class="s14_c02_title">
                <p class="txt01 fz_28 ls_p1 lh_16 pretendard normal">
                    미디어 제작 <span class="bold">프로세스</span>
                </p>
            </div>
            <div class="s14_c02_list_wrap" id="s14_c02_list_wrap2">
                <ul class="s14_c02_list_ul s14_c02_list_ul_up">
                    <li class="reveal fade-down delay_300 s14_c02_list_li s14_c02_list_li02">
                        <div class="s14_c02_list_text">
                            <p class="txt01 fz_25 ls_p1 lh_16 nanummyeongjo bold">
                                02
                            </p>
                            <p class="txt02 fz_20 ls_p1 lh_16 pretendard bold">
                                촬영 기획
                            </p>
                            <p class="txt03 fz_15 ls_p1 lh_16 pretendard normal">
                                상담을 통해 파악한 정보로 <br>
                                촬영 레퍼런스를 제안하고 <br>
                                촬영안을 기획합니다
                            </p>
                        </div>
                    </li>
                    <li class="reveal fade-down delay_500 s14_c02_list_li s14_c02_list_li04">
                        <div class="s14_c02_list_text">
                            <p class="txt01 fz_25 ls_p1 lh_16 nanummyeongjo bold">
                                04
                            </p>
                            <p class="txt02 fz_20 ls_p1 lh_16 pretendard bold">
                                사진/영상 편집
                            </p>
                            <p class="txt03 fz_15 ls_p1 lh_16 pretendard normal">
                                기획안 내용을 중심으로 <br>
                                편집을 진행합니다
                            </p>
                        </div>
                    </li>
                </ul>
                <ul class="s14_c02_list_ul s14_c02_list_ul_down">
                    <li class="reveal fade-up delay_200 s14_c02_list_li s14_c02_list_li01">
                        <div class="s14_c02_list_text">
                            <p class="txt01 fz_25 ls_p1 lh_16 nanummyeongjo bold">
                                01
                            </p>
                            <p class="txt02 fz_20 ls_p1 lh_16 pretendard bold">
                                촬영내용 상담
                            </p>
                            <p class="txt03 fz_15 ls_p1 lh_16 pretendard normal">
                                상담을 통해 <br>
                                제작에 필요한 정보를 <br>
                                파악합니다
                            </p>
                        </div>
                    </li>
                    <li class="reveal fade-up delay_400 s14_c02_list_li s14_c02_list_li03">
                        <div class="s14_c02_list_text">
                            <p class="txt01 fz_25 ls_p1 lh_16 nanummyeongjo bold">
                                03
                            </p>
                            <p class="txt02 fz_20 ls_p1 lh_16 pretendard bold">
                                촬영 진행
                            </p>
                            <p class="txt03 fz_15 ls_p1 lh_16 pretendard normal">
                                사진 및 촬영을 <br>
                                연출하고 진행합니다
                            </p>
                        </div>
                    </li>
                    <li class="reveal fade-up delay_600 s14_c02_list_li s14_c02_list_li05">
                        <div class="s14_c02_list_text">
                            <p class="txt01 fz_25 ls_p1 lh_16 nanummyeongjo bold">
                                05
                            </p>
                            <p class="txt02 fz_20 ls_p1 lh_16 pretendard bold">
                                제작 완료 및 업로드
                            </p>
                            <p class="txt03 fz_15 ls_p1 lh_16 pretendard normal">
                                피드백을 반영하여 수정완료 후 <br>
                                영상을 전달 및 업로드합니다
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>