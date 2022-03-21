import React from 'react'
import { NavLink, Link } from "react-router-dom";
import './Join2_1.css'

function Join2_1() {
  return (
    <div>
      <main>
    <div className="inner-box">
        <h2>회원가입</h2>
        <div className="step-box">
          <ul>
            <li className="on">Step1. 약관 동의<img src="img/step1.png" alt="동의" /></li>
            <li>Step2. 정보 입력<img src="img/step1.png" alt="입력" /></li>
            <li>Step3. 가입 완료<img src="img/step1.png" alt="완료" /></li>
          </ul>
        </div>

        <h4>기본정보입력<span>(*필수)</span></h4>


        <form name="write_form_member" method="post">
          <table>
            <tr>
              {/* 회원구분 옆에 물음표 추가하여 가이드라인 띄우기 */}
                <th><span>*</span> 회원구분</th>
                  <td className="s">
                    {/* toggle로 내용구분 */}
                    <input type="radio" name="chk_member" checked /> 개인회원
                    <input type="radio" name="chk_member" className="chk_member" /> 법인회원
                  </td>
            </tr>
            <tr>
              <th><span>*</span> 아이디</th>
              <td>
              <input type="text" name="cursor:pointer" className="input-box" />
              {/* <!-- alert 창 띄우기 --> */}
              <a href='#'>중복확인</a>
              </td>
            </tr>
            <tr>
              <th><span>*</span> 사용자 이름</th>
              <td>
              <input type="text" className="input-box" name="" />
              </td>
            </tr>
            <tr>
              <th><span>*</span> 비밀번호 입력</th>
              <td><input type="password" name="" className="input-box" placeholder=" 영문 대소문자/숫자 혼합 10~15자리 내로 입력해주세요."/>
              <a href='#' className="eye-btn"></a></td>
            </tr>
            <tr>
              <th><span>*</span> 비밀번호 확인</th>
              <td><input type="password" className="input-box" name="" />
              <a href='#' className="eye-btn"></a></td>
            </tr>
              <tr>
              <th><span>*</span> 휴대폰 번호</th>
                <td><input type="text" className="phone-box" /> -
                    <input type="text" className="phone-box" name="tel_h2_1" /> -
                    <input type="text" className="phone-box"  name="tel_h2_2" />
                    <a href='#'>인증번호발송</a>
                </td>
              </tr>
              <tr>
                <th><span>*</span> 인증번호 입력</th>
                <td>
                <input type="text" className="input-box" name="" />
                <a href='#'>확인</a>
                </td>
              </tr>
              <tr>
                <th><span>*</span> 이메일 입력</th>
                <td>
                <input type="text" className="input-box" name="" />
                {/* <!-- 해당버튼 클릭시 '인증완료'문구 보이게하기 --> */}
                <a href='#'>인증</a>
                </td>
              </tr>
                </table>
            </form>            
          <div className="btn-group">
            <NavLink to="/join1" className="back-btn">이전페이지</NavLink>
            <NavLink to="/join3" className="join-btn">회원가입</NavLink>
          </div>


      </div>
    </main>
    </div>
  )
}

export default Join2_1