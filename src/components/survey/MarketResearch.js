import React from "react";
import './css/market-research.module.css';
import '../../reset.css';

function MarketResearch(){
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
    return(
        <div>
            <div className="market-research">
                <div className="toparea">
                    <section className="imgarea">
                        <img src="./img/digitalnet.png" />
                    </section>
                    <section className="txtarea">
                        <h2>비대면 시장조사 필요성 인식 조사</h2>
                        <p>2021.09.30 ~ 2021.10.25</p>
                    </section>
                </div>
                <div className="chartarea">
                    <div className="chart-txt">
                        <div className="result">
                            <h2>설문지 현황</h2>
                            <section className="result-txt">
                                <span>필요설문</span>
                                <span>2,500 건</span>
                            </section>
                            <section className="result-txt">
                                <span>응답완료</span>
                                <span>1,500 건</span>
                            </section>
                            <section className="result-txt">
                                <span>응답미완료</span>
                                <span>1,000 건</span>
                            </section>
                        </div>
                        <div className="result">
                            <h2>매칭 현황</h2>
                            <section className="result-txt">
                                <span>매칭발송</span>
                                <span>12,500 건</span>
                            </section>
                            <section className="result-txt">
                                <span>매칭성공</span>
                                <span>5,000 건</span>
                            </section>
                            <section className="result-txt">
                                <span>매칭실패</span>
                                <span>7,500 건</span>
                            </section>
                        </div>
                    </div>
                    <div className="donut-chart">
                        <section className="result1">
                            <div id="donut1" style={{minWidth: '310px', height: '400px', maxWidth: '600px', margin: '0 auto'}}></div>
                        </section>
                        <section className="result2">
                            <div id="donut2" style={{minWidth: '310px', height: '400px', maxWidth: '600px', margin: '0 auto'}}></div>
                        </section>
                    </div>
                </div>
            </div>
            
            <div className="profile">
                <section className="txtarea">
                    <h2>설문 프로파일</h2>
                </section>
                <section className="step">
                    <dl className="step-area">
                        <dt>1단계</dt>
                        <dd>
                            <div className="scrollbar">
                                <section className="step-tag">
                                    <button className="tag">성별/남성</button>
                                    <button className="tag">나이/20세~39세</button>
                                </section>
                            </div>
                        </dd>
                    </dl>
                    <dl className="step-area">
                        <dt>2단계</dt>
                        <dd>
                            <div className="scrollbar">
                                <section className="step-tag">   
                                    <button className="tag">통신사/SKT</button>
                                </section>
                            </div>
                        </dd>
                    </dl>
                    <dl className="step-area">
                        <dt>3단계</dt>
                        <dd>
                            <div className="scrollbar">
                                <section className="step-tag">
                                    <button className="tag">전자기기/휴대폰기종/갤럭시S21</button>
                                </section>
                            </div>   
                        </dd>
                    </dl>
                </section>
                <section className="history">
                    <section className="resend">
                        <dl>
                            <dt>재전송 시도 내역</dt>
                            <dd>
                                <section className="resend-txt">
                                    <p>21.10.01</p>
                                    <p>13:38PM</p>
                                    <p>3,000 건</p>
                                </section>
                            </dd>
                        </dl>
                    </section>
                    <section className="confirm">
                        <dl>
                            <dt>설문 승인 여부</dt>
                            <dd>
                                <section className="confirm-txt">
                                    <p>21.10.01</p>
                                    <p>13:38PM</p>
                                    <p>설문거부 (설문 미적합)</p>
                                </section>
                            </dd>
                        </dl>
                    </section>
                </section>
            </div>
            <div className="research-btnarea">
                <button className="modify-btn">수정</button>
                <button className="list-btn">목록</button>
            </div>
    </div>
    )
}

export default MarketResearch;