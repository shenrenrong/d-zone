import React from 'react';
import { NavLink, Link } from "react-router-dom";

export default function SignUp() {
  return (
    <h1 className='sign-up'>
      <main>
        <div className="inner-box">
          <h2>회원가입</h2><div className="step-box">
              <ul>
                <li>Step1. 약관 동의<img src="img/step1.jpg" alt="동의" /></li>
                <li>Step2. 정보 입력<img src="img/step2.png" alt="입력" /></li>
                <li className="on">Step3. 가입 완료<img src="img/step3.png" alt="완료" /></li>
              </ul>
          </div>

          {/* 체크박스 미클릭시 다음 버튼 비활성화해야함! */}
          <form action="" id="joinForm">
              <ul className="join_box">
                  <li className="checkBox check01">
                      <ul className="clearfix">
                          <li>이용약관<span>(*필수)</span></li>
                          <li className="checkBtn">
                              <input type="checkbox" name="chk" /> 동의합니다.
                          </li>
                      </ul>
                      <textarea name="" id="">여러분을 환영합니다.
  사이트 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 서비스의 이용과 관련하여 서비스를 제공하는 주식회사와 이를 이용하는 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다. 여러분을 환영합니다.
  사이트 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 서비스의 이용과 관련하여 서비스를 제공하는 주식회사와 이를 이용하는 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.
  사이트 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 서비스의 이용과 관련하여 서비스를 제공하는 주식회사와 이를 이용하는 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.
                          </textarea>
                  </li>
                  <li className="checkBox check02">
                      <ul className="clearfix">
                          <li>개인정보 수집 및 이용에 대한 안내<span>(*필수)</span></li>
                          <li className="checkBtn">
                              <input type="checkbox" name="chk" /> 동의합니다.
                          </li>
                      </ul>

                      <textarea name="" id="">여러분을 환영합니다.
  사이트 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 서비스의 이용과 관련하여 서비스를 제공하는 주식회사와 이를 이용하는 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다. 여러분을 환영합니다.
  사이트 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 서비스의 이용과 관련하여 서비스를 제공하는 주식회사와 이를 이용하는 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.
  사이트 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 서비스의 이용과 관련하여 서비스를 제공하는 주식회사와 이를 이용하는 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.
                          </textarea>
                  </li>
              </ul>
          </form>
        <div className="foot-btn">
          <NavLink to="/join2_1">다음</NavLink>
        </div>
          
        </div>
      </main>
    </h1>
  )
}