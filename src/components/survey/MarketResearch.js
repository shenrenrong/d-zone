import React from "react";

function MarketResearch(){
    return(
        $(document).ready(function () {
            var donut1 = document.getElementById("container");
            var donut2 = document.getElementById("container");
            Highcharts.chart('donut1', {
                colors: ['rgb(155, 187, 89)', 'rgb(128, 127, 127)'],
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie'
                },
                title: {
                    text: ''
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: false
                        },
                        showInLegend: true,
                        innerSize: 80
                    }
                },
                credits: {
                    enabled: false
                },
                series: [{
                    name: '',
                    colorByPoint: true,
                    data: [{
                        name: '응답완료',
                        y: 60
                    }, {
                        name: '응답미완료',
                        y: 40,
                        sliced: false,
                        selected: true
                    }]
                }]
            }); 
            Highcharts.chart('donut2', {
                colors: ['rgb(101, 170, 195)', 'rgb(128, 127, 127)'],
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie'
                },
                title: {
                    text: ''
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: false
                        },
                        showInLegend: true,
                        innerSize: 80
                    }
                },
                credits: {
                    enabled: false
                },
                series: [{
                    name: '',
                    colorByPoint: true,
                    data: [{
                        name: '매칭성공',
                        y: 40
                    }, {
                        name: '매칭실패',
                        y: 60,
                        sliced: false,
                        selected: true
                    }]
                }]
            });
        });
        <div class="market-research">
                <div class="toparea">
                    <section class="imgarea">
                        <img src="./img/digitalnet.png" />
                    </section>
                    <section class="txtarea">
                        <h2>비대면 시장조사 필요성 인식 조사</h2>
                        <p>2021.09.30 ~ 2021.10.25</p>
                    </section>
                </div>
                <div class="chartarea">
                    <div class="chart-txt">
                        <div class="result">
                            <h2>설문지 현황</h2>
                            <section class="result-txt">
                                <span>필요설문</span>
                                <span>2,500 건</span>
                            </section>
                            <section class="result-txt">
                                <span>응답완료</span>
                                <span>1,500 건</span>
                            </section>
                            <section class="result-txt">
                                <span>응답미완료</span>
                                <span>1,000 건</span>
                            </section>
                        </div>
                        <div class="result">
                            <h2>매칭 현황</h2>
                            <section class="result-txt">
                                <span>매칭발송</span>
                                <span>12,500 건</span>
                            </section>
                            <section class="result-txt">
                                <span>매칭성공</span>
                                <span>5,000 건</span>
                            </section>
                            <section class="result-txt">
                                <span>매칭실패</span>
                                <span>7,500 건</span>
                            </section>
                        </div>
                    </div>
                    <div class="donut-chart">
                        <section class="result1">
                            <div id="donut1" style="min-width: 310px; height: 400px; max-width: 600px; margin: 0 auto;"></div>
                        </section>
                        <section class="result2">
                            <div id="donut2" style="min-width: 310px; height: 400px; max-width: 600px; margin: 0 auto;"></div>
                        </section>
                    </div>
                </div>
            </div>
            
            <div class="profile">
                <section class="txtarea">
                    <h2>설문 프로파일</h2>
                </section>
                <section class="step">
                    <dl class="step-area">
                        <dt>1단계</dt>
                        <dd>
                            <div class="scrollbar">
                                <section class="step-tag">
                                    <button class="tag">성별/남성</button>
                                    <button class="tag">나이/20세~39세</button>
                                </section>
                            </div>
                        </dd>
                    </dl>
                    <dl class="step-area">
                        <dt>2단계</dt>
                        <dd>
                            <div class="scrollbar">
                                <section class="step-tag">   
                                    <button class="tag">통신사/SKT</button>
                                </section>
                            </div>
                        </dd>
                    </dl>
                    <dl class="step-area">
                        <dt>3단계</dt>
                        <dd>
                            <div class="scrollbar">
                                <section class="step-tag">
                                    <button class="tag">전자기기/휴대폰기종/갤럭시S21</button>
                                </section>
                            </div>   
                        </dd>
                    </dl>
                </section>
                <section class="history">
                    <section class="resend">
                        <dl>
                            <dt>재전송 시도 내역</dt>
                            <dd>
                                <section class="resend-txt">
                                    <p>21.10.01</p>
                                    <p>13:38PM</p>
                                    <p>3,000 건</p>
                                </section>
                            </dd>
                        </dl>
                    </section>
                    <section class="confirm">
                        <dl>
                            <dt>설문 승인 여부</dt>
                            <dd>
                                <section class="confirm-txt">
                                    <p>21.10.01</p>
                                    <p>13:38PM</p>
                                    <p>설문거부 (설문 미적합)</p>
                                </section>
                            </dd>
                        </dl>
                    </section>
                </section>
            </div>
            <div class="research-btnarea">
                <button class="modify-btn">수정</button>
                <button class="list-btn">목록</button>
            </div>
    )
}

export default MarketResearch;