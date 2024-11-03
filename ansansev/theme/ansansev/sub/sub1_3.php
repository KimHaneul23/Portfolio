<?php
include_once('./_common.php');
//if (G5_IS_MOBILE) {
//    include_once(G5_MOBILE_PATH.'/index.php');
//    return;
//}

// 웹사이트 타이틀
$g5['title'] = '둘러보기 · 오시는길';

include_once(G5_PATH.'/head.php');
?>
    
    <main id="content">
        <article class="sub1_1_content01" id="startContent">
            <div class="sub1_1_top_view flex_row jc_center center">
                <div class="sub1_1_top_view_bg pc_cont_480">
                    <img src="<?php echo G5_THEME_URL?>/sub/img/sub1_1_top_view_img.jpg" alt="">
                </div>
                <div class="sub1_1_top_view_text_wrap pc_cont_480">
                    <div class="sub1_1_top_view_text01 m_20 gs_reveal">
                        <h1 class="fz_35 nanummyeongjo noemal">
                            안산 연세세브란스치과 <br>
                            <span class="medium">둘러보기 · 오시는길</span>
                        </h1>
                    </div>
                </div>
                <div class="sub1_1_top_view_bg_m m_cont_480">
                    <img src="<?php echo G5_THEME_URL?>/sub/img/sub1_1_top_view_img_m.jpg" alt="">
                    
                    <div class="sub1_1_top_view_text_wrap_m">
                        <div class="sub1_1_top_view_text01 m_20 gs_reveal">
                            <h1 class="fz_35 nanummyeongjo noemal">
                                안산 연세세브란스치과 <br>
                                <span class="medium">둘러보기 · 오시는길</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </article>
        
        <article class="sub1_3_content02" id="sub1_3_content02">
            <div class="sub_cont_section pd_100">
                <div class="container-1200">
                    <div class="sub1_3_cont_text m_20">
                        <p class="fz_25 medium">오시는 길</p>
                    </div>
                    <div class="sub1_3_cont02_map m_60">
                        <div id="map"></div>
                        <style>
                            /* 지점별 맵 연동 */
                            #map > div{z-index: 0!important;}
                            .map_marker{  border-radius:40px; -webkit-border-radius:40px; -moz-border-radius:40px; -ms-border-radius:40px; -o-border-radius:40px; padding:5px;}
                            .map_active.map_marker{border:1px solid transparent; background-color:#0475f4;}
                            .map_normal.map_marker{border:1px solid #0475f4; background-color:#fff;}
                            .map_marker:after{ content:''; position: absolute; width:7px; height:7px; bottom:-3px; left:18px; transform:rotate(45deg) ; -webkit-transform:rotate(45deg) ; -moz-transform:rotate(45deg) ; -ms-transform:rotate(45deg) ; -o-transform:rotate(45deg) ; }
                            .map_normal.map_marker:after{background: #fff; border-right:1px solid #0475f4; border-bottom:1px solid #0475f4}
                            .map_active.map_marker:after{background: #0475f4;}

                            .map_link_icon,
                            .map_link_txt{vertical-align: middle; display: inline-block;}
                            .map_link_txt{font-weight: 500; margin:0 5px}
                            .map_normal .map_link_txt{font-size:13px; }
                            .map_normal .map_link_txt:hover{color: #0475f4;}
                            .map_active .map_link_txt{font-size:15px; color: #fff;}
                            .map_active .map_link_txt:hover{color: #fff;}
                            
                            @media (max-width:434px) {
                                
                                #map{height:300px !important;}
                                
                            }
                        </style>
                        <script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=jyqrhlapwd"></script>
                        <script>
                            var mapWidth;
                            if (window.matchMedia("(min-width: 1200px)").matches) {
                              mapWidth = 1200
                            /* 뷰포트 너비가 400 픽셀 이상 */
                            } else {
                              mapWidth = window.innerWidth - 40
                              /* 뷰포트 너비가 400 픽셀 미만 */
                            }

                            document.addEventListener("DOMContentLoaded", function(){
                              var HOME_PATH = window.HOME_PATH || '.';
                              var map = new naver.maps.Map('map', {
                                bounds: naver.maps.LatLngBounds.bounds(new naver.maps.LatLng(37.29401776812999, 126.86051868674765),
                                  new naver.maps.LatLng(37.29193515460792, 126.86676286882715)),
                                zoom: 18,
                                scrollWheel: false,
                                size:{
                                  width:mapWidth,
                                  height:348
                                }
                              });
                              var greenMarker = new naver.maps.Marker({
                                position: new naver.maps.LatLng(37.293255700355566, 126.86269955041999),
                                map: map,
                                title: '연세세브란스치과의원',
                                icon: {
                                  content: [
                                    '<div class="map_active map_marker">',
                                    '<div class="map_group">',
                                    '<a href="https://map.naver.com/v5/entry/place/1940133631?placePath=%2Fhome&c=14121827.4967167,4480077.1163252,15,0,0,0,dh" target="_blank" class="map_link"> ',
                                    '<span class="map_link_icon"><img src="<?php echo G5_THEME_URL?>/sub/img/marker-white.png"/></span>',
                                    '<span class="map_link_txt">연세세브란스치과의원</span>',
                                    '</a>',
                                    '</div>',
                                    '</div>'
                                  ].join(''),
                                  size: new naver.maps.Size(38, 58),
                                  anchor: new naver.maps.Point(19, 58),
                                },
                                draggable: false
                              });
                            });
                        </script>
                    </div>
                    <div class="sub1_3_cont02_info_wrap">
                        <table class="sub1_3_cont02_info fz_20 lh_14 light">
                            <tbody>
                                <tr>
                                    <th>주&ensp;&emsp;&ensp;소</th>
                                    <td>경기도 안산시 상록구 석호로 290 2층,3층(본오동)</td>
                                </tr>
                                <tr>
                                    <th>문의전화</th>
                                    <td><a href="tel:031-502-2080">031-502-2080</a></td>
                                </tr>
                                <tr>
                                    <th>운영시간</th>
                                    <td>
                                        <table class="sub1_3_cont02_worktime">
                                            <tbody>
                                                <tr>
                                                    <th>월&ensp;&emsp;목&nbsp;:&nbsp;</th>
                                                    <td>오전 10:00 - 오후 08:30&nbsp;</td>
                                                    <!--<td class="fz_14">야간진료</td>-->
                                                </tr>
                                                <tr>
                                                    <th>화 수 금&nbsp;:&nbsp;</th>
                                                    <td>오전 10:00 - 오후 07:00</td>
                                                </tr>
                                                <tr>
                                                    <th>토 요 일&nbsp;:&nbsp;</th>
                                                    <td>오전 10:00 - 오후 02:00&nbsp;<span class="fz_16">(점심시간 없음)</span></td>
                                                </tr>
                                                <tr>
                                                    <th class="fz_19">점심시간&nbsp;:&nbsp;</th>
                                                    <td>오후 01:00 - 오후 02:00</td>
                                                </tr>
                                                <tr>
                                                    <th class="fz_19"></th>
                                                    <td>일요일, 공휴일 휴진</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </article>
        
        <article class="sub1_3_content03" id="sub1_3_content03">
            <div class="sub_cont_section">
                <div class="container-1200">
                    <div class="sub1_3_cont_text m_40">
                        <p class="fz_25 medium">대중교통 이용시</p>
                    </div>
                    <div class="sub1_3_cont03_text flex_row jc_fs al_fs">
                        <div class="sub1_3_cont03_text01">
                            <p class="fz_20 medium m_10">지하철 이용시</p>
                            <p class="fz_20 medium">버스 이용시</p>
                        </div>
                        <div class="sub1_3_cont03_text02">
                            <p class="fz_20 light m_10 pc_cont_480">수인분당선 사리역 1번출구, 4호선 상록수역 1,3번 출구</p>
                            <p class="fz_20 light m_10 m_cont_480">수인분당선 사리역 1번출구, <br>4호선 상록수역 1,3번 출구</p>
                            <p class="fz_20 light">지선버스(초록) 52,80A,125,101,22,90 광역버스(빨강) 301</p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
        
        <article class="sub1_3_content04" id="sub1_3_content04">
            <div class="sub_cont_section pd_100">
                <div class="container-1200">
                    <div class="sub1_3_cont_text m_40">
                        <p class="fz_25 medium">자가용 이용시</p>
                    </div>
                    <div class="sub1_3_cont04_text flex_row jc_fs al_fs">
                        <div class="sub1_3_cont04_text01">
                            <p class="fz_20 medium">자가용 이용</p>
                        </div>
                        <div class="sub1_3_cont04_text02">
                            <p class="fz_20 light">경기도 안산시 상록구 석호로 290</p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
        
        <article class="sub1_3_content05 pd_60 pt_100" id="sub1_3_content05">
            <div class="sub1_3_cont_text sub1_3_cont05_text m_20">
                <p class="fz_25 medium">치과 둘러보기</p>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
            <div class="swiper-container sub1_3_cont05_swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide sub1_3_cont05_slide">
                        <div class="sub1_3_cont05_slide_img sub1_3_cont05_slide_img01">
                            <img src="<?php echo G5_THEME_URL?>/sub/img/sub1_3_cont05_slide01.jpg" alt="">
                        </div>
                    </div>
                    <div class="swiper-slide sub1_3_cont05_slide">
                        <div class="sub1_3_cont05_slide_img sub1_3_cont05_slide_img02">
                            <img src="<?php echo G5_THEME_URL?>/sub/img/sub1_3_cont05_slide02.jpg" alt="">
                        </div>
                    </div>
                    <div class="swiper-slide sub1_3_cont05_slide">
                        <div class="sub1_3_cont05_slide_img sub1_3_cont05_slide_img03">
                            <img src="<?php echo G5_THEME_URL?>/sub/img/sub1_3_cont05_slide03.jpg" alt="">
                        </div>
                    </div>
                    <div class="swiper-slide sub1_3_cont05_slide">
                        <div class="sub1_3_cont05_slide_img sub1_3_cont05_slide_img04">
                            <img src="<?php echo G5_THEME_URL?>/sub/img/sub1_3_cont05_slide04.jpg" alt="">
                        </div>
                    </div>
                    <div class="swiper-slide sub1_3_cont05_slide">
                        <div class="sub1_3_cont05_slide_img sub1_3_cont05_slide_img05">
                            <img src="<?php echo G5_THEME_URL?>/sub/img/sub1_3_cont05_slide05.jpg" alt="">
                        </div>
                    </div>
                    <div class="swiper-slide sub1_3_cont05_slide">
                        <div class="sub1_3_cont05_slide_img sub1_3_cont05_slide_img06">
                            <img src="<?php echo G5_THEME_URL?>/sub/img/sub1_3_cont05_slide06.jpg" alt="">
                        </div>
                    </div>
                    <div class="swiper-slide sub1_3_cont05_slide">
                        <div class="sub1_3_cont05_slide_img sub1_3_cont05_slide_img07">
                            <img src="<?php echo G5_THEME_URL?>/sub/img/sub1_3_cont05_slide07.jpg" alt="">
                        </div>
                    </div>
                    <div class="swiper-slide sub1_3_cont05_slide">
                        <div class="sub1_3_cont05_slide_img sub1_3_cont05_slide_img08">
                            <img src="<?php echo G5_THEME_URL?>/sub/img/sub1_3_cont05_slide08.jpg" alt="">
                        </div>
                    </div>
                    <div class="swiper-slide sub1_3_cont05_slide">
                        <div class="sub1_3_cont05_slide_img sub1_3_cont05_slide_img09">
                            <img src="<?php echo G5_THEME_URL?>/sub/img/sub1_3_cont05_slide09.jpg" alt="">
                        </div>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </article>
        
        <article class="sub_cont_bottom_wrap pt_80 m_40" id="sub_cont_bottom">
            <div class="sub_cont_bottom_section ta_c">
                <img src="<?php echo G5_THEME_URL?>/sub/img/sub_cont_bottom_bg.jpg" alt="">
                
                <div class="sub_cont_bottom_box flex_row jc_center center">
                    <div class="sub_cont_bottom_text ta_l">
                        <p class="sub_cont_bottom_text01 fz_28 lh_14 nanummyeongjo m_20 gs_reveal">
                            안산 연세세브란스치과는 <br>
                            현재에 머무르지 않고 늘 연구하고 <br>
                            정진하겠습니다.
                        </p>
                        <p class="sub_cont_bottom_text02 fz_16 lh_14 gs_reveal" data-gs-delay="200">
                            치과 선택에 있어 중요한 것 중 하나는 바로 의료진의 전문성입니다. <br>
                            환자분들께 더 나은 치료를 위해 끊임없이 연구하고 계속 정진하겠습니다
                        </p>
                    </div>
                    <div class="sub_cont_bottom_img02">
                        <img src="<?php echo G5_THEME_URL?>/sub/img/sub_cont_bottom_img02.png" alt="">
                    </div>
                </div>
            </div>
        </article>
        
    </main>
    <!-- //main -->
    
<?php
include_once(G5_PATH.'/tail.php');