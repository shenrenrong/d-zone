import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import "./panel_system_info.css"
import Gnb from "../Gnb";

function PanelSystemInfo() {
  return (
    <div className="PanelSystemInfo">
      <Gnb />
        <main class="content cf">
        <h2>패널인증시스템 신청현황 상세정보</h2>
        <table class="info">
          <caption>패널인증시스템 신청현황 상세정보</caption>
            <colgroup>
              <col style={{width: "150px"}} />
              <col style={{width: "650px"}} />
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
              <td>연락처</td>
              <td>010-0000-0000</td>
            </tr>
            <tr>
              <td>이메일</td>
              <td>a@a.com</td>
            </tr>
            <tr class="last">
              <td>신청/문의내용</td>
              <td>패널인증시스템 신청합니다.</td>
            </tr>
        </table>
        <div class="info_btn_box">
          <span>상태</span>
          <select name="process" class="process_select">
            <option value="reception">접수</option>
            <option value="proceeding">처리중</option>
            <option value="complete">완료</option>
          </select>
          <button class="save_btn">저장</button>
          <button class="list_btn">목록</button>
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
  )
}

export default PanelSystemInfo