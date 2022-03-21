import React from "react";
import { Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import "./survey_info.css";
import Gnb from "../Gnb";

function SurveyInfo() {
  return (
    <div>
      <Gnb />
        <main class="content cf">
        <h2>설문 상세정보</h2>
        <div class="route_box">
          <span class="route1">통합관리</span>
          <Link to="#" class="route2">설문승인 현황</Link>
        </div>
        <div class="container cf">
          <table class="client_info">
            <caption>설문 상세정보</caption>
              <colgroup>
                <col style={{width: "100px"}} />
                <col style={{width: "260px"}} />
              </colgroup>
              <tr>
                <td>업체명</td>
                <td>주식회사A</td>
              </tr>
              <tr>
                <td>담당자명</td>
                <td>홍길동</td>
              </tr>
              <tr>
                <td>아이디</td>
                <td>aaa</td>
              </tr>
              <tr>
                <td>연락처</td>
                <td>010-0000-0000</td>
              </tr>
              <tr class="last">
                <td>이메일</td>
                <td>a@a.com</td>
              </tr>
          </table>
          <div class="survey_info">
            <ul>
              <li>조사명 : 갤럭시S21 사용자 만족도 조사</li>
              <li>설문링크 : <a href="#">www.a.com</a></li>
              <li>필요샘플 수 : 500</li>
              <li>참여포인트 : 100pt</li>
              <li>설문기간 : 2021.10.28~2021.11.28</li>
              <li>발송패널 수 : 2,500건</li>
              <li class="survey_profile">설문 프로파일 : 
                <Link to="#">남성</Link>
                <Link to="#">20세~39세</Link>
                <Link to="#">SKT</Link>
                <Link to="#">갤럭시S21</Link>
              </li>
              <li class="survey_point">결제 포인트 : 250,000 point</li>
            </ul>
          </div>
        </div>
        <div class="state_box cf">
          <div class="state_process_box">
            <span>상태</span>
            <select name="process" class="process_select">
              <option value="wait">승인대기</option>
              <option value="admission">승인완료</option>
              <option value="refusal">승인거부</option>
              <option value="complete">설문종료</option>
            </select> <br />
            <span>사유</span>
            <input type="text" value="사유를 입력해주세요" />
          </div>
          <div class="state_btn_box">
            <button class="save_btn">저장</button>
            <button class="list_btn">목록</button>
          </div>
        </div>
        <div class="change_log">
          <p>[기록]</p>
          <ul class="change_log_list">
            <li>2021.12.06 13:36 김주리 님이 상태를 접수 에서 처리중 으로 변경하였습니다.</li>
            <li>2021.12.06 17:55 김주리 님이 상태를 처리중 에서 완료 로 변경하였습니다.</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default SurveyInfo;