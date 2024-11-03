<?php
if (!defined('_INDEX_')) define('_INDEX_', true);
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

//if (G5_IS_MOBILE) {
//    include_once(G5_THEME_MOBILE_PATH.'/index.php');
//    return;
//}

include_once(G5_THEME_PATH.'/head.php');
?>

<main id="content">
    
    <article class="main_visual sect" id="sect01">
        <div class="main_visual_img">
            <img src="<?php echo G5_THEME_URL?>/img/main_visual_img01.jpg" alt="안산 연세세브란스치과에서 진행하는 프로모션">
        </div>
    </article>

    <article class="doctor_sect sect" id="sect02">
        <div class="doctor_box_wrap flex_row fw jc_center center">
            <div class="column_half">
                <div class="doctor_sect_img01 pd_100 flex_row jc_center center">
                    <img src="<?php echo G5_THEME_URL?>/img/doctor_sect_img01.png" alt="보존과 전문의 이상희 대표원장">
                </div>
            </div>
            <div class="column_half">
                <div class="doctor_sect_img02 pd_100 flex_row jc_center center">
                    <img src="<?php echo G5_THEME_URL?>/img/doctor_sect_img02.png" alt="교정과 전문의 박진이 대표원장">
                </div>
            </div>
        </div>
    </article>

    <article class="equipment_sect sect" id="sect03">
        <div class="equipment_sect_text">
            <p class="pc_cont_480 nanumbarungothic normal fz_34 ta_c pt_160 m_40">
                안산 연세세브란스치과 첨단 디지털 장비 소개
            </p>
            <p class="m_cont_480 nanumbarungothic normal fz_34 ta_c pt_160 m_40">
                안산 연세세브란스치과<br> 첨단 디지털 장비 소개
            </p>
        </div>
        <div class="equipment_list_wrap flex_row fw jc_center center">
            <div class="column_quarter">
                <div class="equipment_list_img">
                    <img src="<?php echo G5_THEME_URL?>/img/equipment_sect_img01.jpg" alt="3D 구강스캐너">
                </div>
            </div>
            <div class="column_quarter">
                <div class="equipment_list_img">
                    <img src="<?php echo G5_THEME_URL?>/img/equipment_sect_img02.jpg" alt="3차원 CT, 세팔로, 파노라마">
                </div>
            </div>
            <div class="column_quarter">
                <div class="equipment_list_img">
                    <img src="<?php echo G5_THEME_URL?>/img/equipment_sect_img03.jpg" alt="네비게이션">
                </div>
            </div>
            <div class="column_quarter">
                <div class="equipment_list_img">
                    <img src="<?php echo G5_THEME_URL?>/img/equipment_sect_img04.jpg" alt="I-ROOT 전자근관장 측정기">
                </div>
            </div>
        </div>
        <div class="equipment_list_wrap flex_row fw jc_center center">
            <div class="column_fifth">
                <div class="equipment_list_img">
                    <img src="<?php echo G5_THEME_URL?>/img/equipment_sect_img05.jpg" alt="소독관리 시스템">
                </div>
            </div>
            <div class="column_fifth">
                <div class="equipment_list_img">
                    <img src="<?php echo G5_THEME_URL?>/img/equipment_sect_img06.jpg" alt="무통마취 시스템">
                </div>
            </div>
            <div class="column_fifth">
                <div class="equipment_list_img">
                    <img src="<?php echo G5_THEME_URL?>/img/equipment_sect_img07.jpg" alt="큐레이">
                </div>
            </div>
            <div class="column_fifth">
                <div class="equipment_list_img">
                    <img src="<?php echo G5_THEME_URL?>/img/equipment_sect_img08.jpg" alt="임플란트 ISQ 측정기">
                </div>
            </div>
            <div class="column_fifth">
                <div class="equipment_list_img">
                    <img src="<?php echo G5_THEME_URL?>/img/equipment_sect_img09.jpg" alt="전문가용 미백기">
                </div>
            </div>
        </div>
    </article>
    
    <article class="office_info_sect sect" id="sect04">
        <div class="office_info_text">
            <p class="nanumbarungothic normal fz_34 ta_c pt_160 m_40">
                오시는길 / 진료시간
            </p>
        </div>
        <div class="office_info_box_wrap flex_row fw jc_center center">
            <div class="column_half">
                <div class="office_info_sect_img">
                    <img src="<?php echo G5_THEME_URL?>/img/office_info_sect_map.jpg" alt="경기도 안산시 상록구 석호로 290 2층,3층(본오동)">
                </div>
            </div>
            <div class="column_half">
                <div class="office_info_sect_img">
                    <img src="<?php echo G5_THEME_URL?>/img/office_info_sect_time.jpg" alt="진료시간 안내">
                </div>
            </div>
        </div>
    </article>
    
</main>

<?php
include_once(G5_THEME_PATH.'/tail.php');