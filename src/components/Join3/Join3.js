import React from 'react'
import './Join3.css'

function Join3() {
  return (
    <div>
      <main>
        <div className="inner-box">
          <h2>회원가입</h2>
          <div className="step-box">
            <ul>
              <li>Step1. 약관 동의<img src="img/step1.jpg" alt="동의" /></li>
              <li>Step2. 정보 입력<img src="img/step2.png" alt="입력" /></li>
              <li className="on">Step3. 가입 완료<img src="img/step3.png" alt="완료" /></li>
            </ul>
          </div>

          <div className="contents">
            <div className="contents-box">
              <img src="img/join_fin.png" alt="체크박스" />
              <div className="contents-box-p">
                <p>회원가입이 완료되었습니다.</p>
                <p>디지털존 회원이 되신 것을 진심으로 환영합니다.</p>
                <div className="btn-group">
                  <a href="start.html" className="complete-btn">메인으로</a>
                </div>
              </div>
            </div>
          </div>

          

        </div>
      </main>
    </div>
  )
}

export default Join3