import React from "react";
import { Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import style from "./survey_overview.module.css";
import Gnb from "../Gnb";

function SurveyOverview() {
  return (
    <div className={style.survey_overview}>
      <Gnb />
      <main className={style.content}>
        <h2>설문승인 현황조회</h2>
        <div className={style.route_box}>
          <span className={style.route1}>통합관리</span>
          <Link to="#" className={style.route2}>설문승인 현황조회</Link>
        </div>
        <div className={style.search_box}>
          <input type="text" className={style.search_box_input} />
          <Link to="#"><FontAwesomeIcon icon={faSearch} className={style.search_icon} /></Link>
        </div>
        <table className={style.panel_table}>
          <caption>설문승인 현황</caption>
              <colgroup>
                  <col style={{width: "60px;"}} />
                  <col style={{width: "280px;"}} />
                  <col style={{width: "230px;"}} />
                  <col style={{width: "120px;"}} />
                  <col style={{width: "120px;"}} />
                  <col style={{width: "80px;"}} />
                  <col style={{width: "120px;"}} />
                  <col style={{width: "120px;"}} />
                  <col style={{width: "100px;"}} />
              </colgroup>
          <thead>
            <tr>
              <th scope="col">번호</th>
              <th scope="col">조사명</th>
              <th scope="col">조사요청기관</th>
              <th scope="col">필요샘플 수</th>
              <th scope="col">완료샘플 수</th>
              <th scope="col">상태</th>
              <th scope="col">상태변경일</th>
              <th scope="col">상태변경자</th>
              <th scope="col">소속</th>
            </tr>
          </thead>
          <tbody>
            <tr className={style.accepted}>
              <td>160</td>
              <td>갤럭시 S21 사용자 만족도 조사</td>
              <td>2021.10.28 ~ 2021.11.28</td>
              <td>500</td>
              <td>0</td>
              <td>승인완료</td>
              <td>2021.10.28</td>
              <td>홍길동</td>
              <td>해당없음</td>
            </tr>
            <tr className={style.accepted}>
              <td>160</td>
              <td>갤럭시 S21 사용자 만족도 조사</td>
              <td>2021.10.28 ~ 2021.11.28</td>
              <td>500</td>
              <td>0</td>
              <td>승인완료</td>
              <td>2021.10.28</td>
              <td>홍길동</td>
              <td>해당없음</td>
            </tr>
            <tr className={style.waiting}>
              <td>160</td>
              <td>갤럭시 S21 사용자 만족도 조사</td>
              <td>2021.10.28 ~ 2021.11.28</td>
              <td>500</td>
              <td>0</td>
              <td>승인대기</td>
              <td>2021.10.28</td>
              <td>홍길동</td>
              <td>해당없음</td>
            </tr>
            <tr className={style.waiting}>
              <td>160</td>
              <td>갤럭시 S21 사용자 만족도 조사</td>
              <td>2021.10.28 ~ 2021.11.28</td>
              <td>500</td>
              <td>0</td>
              <td>승인대기</td>
              <td>2021.10.28</td>
              <td>홍길동</td>
              <td>해당없음</td>
            </tr>
            <tr className={style.rejected}>
              <td>160</td>
              <td>갤럭시 S21 사용자 만족도 조사</td>
              <td>2021.10.28 ~ 2021.11.28</td>
              <td>500</td>
              <td>0</td>
              <td>승인거부</td>
              <td>2021.10.28</td>
              <td>홍길동</td>
              <td>해당없음</td>
            </tr>
            <tr className={style.rejected}>
              <td>160</td>
              <td>갤럭시 S21 사용자 만족도 조사</td>
              <td>2021.10.28 ~ 2021.11.28</td>
              <td>500</td>
              <td>0</td>
              <td>승인거부</td>
              <td>2021.10.28</td>
              <td>홍길동</td>
              <td>해당없음</td>
            </tr>
            <tr className={style.finished}>
              <td>160</td>
              <td>갤럭시 S21 사용자 만족도 조사</td>
              <td>2021.10.28 ~ 2021.11.28</td>
              <td>500</td>
              <td>0</td>
              <td>설문종료</td>
              <td>2021.10.28</td>
              <td>홍길동</td>
              <td>해당없음</td>
            </tr>
            <tr className={style.finished}>
              <td>160</td>
              <td>갤럭시 S21 사용자 만족도 조사</td>
              <td>2021.10.28 ~ 2021.11.28</td>
              <td>500</td>
              <td>0</td>
              <td>설문종료</td>
              <td>2021.10.28</td>
              <td>홍길동</td>
              <td>해당없음</td>
            </tr>
            <tr className={style.finished}>
              <td>160</td>
              <td>갤럭시 S21 사용자 만족도 조사</td>
              <td>2021.10.28 ~ 2021.11.28</td>
              <td>500</td>
              <td>0</td>
              <td>설문종료</td>
              <td>2021.10.28</td>
              <td>홍길동</td>
              <td>해당없음</td>
            </tr>
            <tr className={style.finished}>
              <td>160</td>
              <td>갤럭시 S21 사용자 만족도 조사</td>
              <td>2021.10.28 ~ 2021.11.28</td>
              <td>500</td>
              <td>0</td>
              <td>설문종료</td>
              <td>2021.10.28</td>
              <td>홍길동</td>
              <td>해당없음</td>
            </tr>
          </tbody>
        </table>
        <div className={style.controller_box}>
          <Link to="#" className={style.btn}><FontAwesomeIcon icon={faCaretLeft} /></Link>
          <Link to="#">1</Link>
          <Link to="#">2</Link>
          <Link to="#">3</Link>
          <Link to="#">4</Link>
          <Link to="#">5</Link>
          <Link to="#" className={style.btn}><FontAwesomeIcon icon={faCaretRight} /></Link>
        </div>
      </main>
    </div>
  );
}

export default SurveyOverview;