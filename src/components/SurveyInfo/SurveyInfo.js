import React from "react";
import { Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./survey_info.module.css";
import Gnb from "../Gnb";

function SurveyInfo() {
  return (
    <div className={styles.SurveyInfo}>
      <Gnb />
        <main className={`${styles.content} ${styles.cf}`}>
        <h2>설문 상세정보</h2>
        <div className={styles.route_box}>
          <span className={styles.route1}>통합관리</span>
          <Link to="#" className={styles.route2}>설문승인 현황</Link>
        </div>
        <div className={`${styles.container} ${styles.cf}`}>
          <table className={styles.client_info}>
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
              <tr className={styles.last}>
                <td>이메일</td>
                <td>a@a.com</td>
              </tr>
          </table>
          <div className={styles.survey_info}>
            <ul>
              <li>조사명 : 갤럭시S21 사용자 만족도 조사</li>
              <li>설문링크 : <Link to="#">www.a.com</Link></li>
              <li>필요샘플 수 : 500</li>
              <li>참여포인트 : 100pt</li>
              <li>설문기간 : 2021.10.28~2021.11.28</li>
              <li>발송패널 수 : 2,500건</li>
              <li className={styles.survey_profile}>설문 프로파일 : 
                <Link to="#">남성</Link>
                <Link to="#">20세~39세</Link>
                <Link to="#">SKT</Link>
                <Link to="#">갤럭시S21</Link>
              </li>
              <li className={styles.survey_point}>결제 포인트 : 250,000 point</li>
            </ul>
          </div>
        </div>
        <div className={`${styles.state_box} ${styles.cf}`}>
          <div className={styles.state_process_box}>
            <span>상태</span>
            <select name="process" className={styles.process_select}>
              <option value="wait">승인대기</option>
              <option value="admission">승인완료</option>
              <option value="refusal">승인거부</option>
              <option value="complete">설문종료</option>
            </select> <br />
            <span>사유</span>
            <input type="text" value="사유를 입력해주세요" />
          </div>
          <div className={styles.state_btn_box}>
            <button className={styles.save_btn}>저장</button>
            <button className={styles.list_btn}>목록</button>
          </div>
        </div>
        <div className={styles.change_log}>
          <p>[기록]</p>
          <ul className={styles.change_log_list}>
            <li>2021.12.06 13:36 김주리 님이 상태를 접수 에서 처리중 으로 변경하였습니다.</li>
            <li>2021.12.06 17:55 김주리 님이 상태를 처리중 에서 완료 로 변경하였습니다.</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default SurveyInfo;