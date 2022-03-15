import React from "react";
import './css/send.css';
import './css/common.css';

function Send(){
    return(
        <div className="send-box">
            <div className="title-box">
                <section className="x-box">
                    <a href="#"><i className="fa fa-times"></i></a>
                </section>
            </div>
            <div className="contents-area">
                <section className="headertxt-area">
                    <span>설문을 발송하시겠습니까?</span>
                </section>
                <div className="specification">
                    <section className="sub-txt">
                        <p>[설문명세서]</p>
                    </section>
                    <section className="form-area">
                        <ul>
                            <li><strong>조사명 :</strong>'\u00A0' 갤럭시S21 사용자 만족도 조사</li>
                            <li><strong>설문링크 :</strong>'\u00A0'<a href="#" className="a_link">www.a.com</a></li>
                            <li><strong>필요샘플 수 :</strong>'\u00A0' 500</li>
                            <li><strong>참여포인트 :</strong>'\u00A0' 100pt</li>
                            <li>
                                <span><strong>설문기간'\u00A0'</strong></span>
                                <label></label>
                                <input type="date" /> ~ <input type="date" />
                            </li>
                            <li><strong>발송패널 수 :</strong>'\u00A0' 2,500건</li>
                            <li>
                                <span><strong>설문 프로파일 :</strong></span>
                                <button className="tag">남성</button>
                                <button className="tag">20세~39세</button>
                                <button className="tag">SKT</button>
                                <button className="tag">갤럭시S21</button>
                            </li>
                        </ul>
                    </section> 
                </div> 
                <section className="msg-box">
                    <p>총 250,000 point가 차감됩니다.</p>
                </section>
            </div>
            <div className="btn-area">
                <button className="confirm-btn">확인</button>
                <button className="cancel-btn">취소</button>
            </div>
        </div>
    )
}

export default Send;