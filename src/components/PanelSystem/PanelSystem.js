import React from "react";
import { Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import "./panel_system.css";

export const PanelSystem = ()=>{
  return (
    <div className="panel_system">
      <main class="content cf">
      <h2>패널인증시스템 신청현황</h2>
      <div class="route_box">
        <span class="route1">통합관리</span>
        <Link to="#" class="route2">패널인증시스템 신청현황</Link>
      </div>
      <div class="search_box">
        <input type="text" class="search_box_input" />
        <Link to="#"><FontAwesomeIcon icon={faSearch} size={'2x'} className="search_icon" /></Link>
      </div>
      <table class="panel_table">
        <caption>패널인증시스템 신청현황</caption>
            <colgroup>
                <col style={{width: "100px"}} />
                <col style={{width: "100px"}} />
                <col style={{width: "150px"}} />
                <col style={{width: "250px"}} />
                <col style={{width: "200px"}} />
                <col style={{width: "200px"}} />
                <col style={{width: "200px"}} />
                <col style={{width: "120px"}} />
            </colgroup>
        <thead>
          <tr>
            <th scope="col">번호</th>
            <th scope="col">업체명</th>
            <th scope="col">연락처</th>
            <th scope="col">이메일</th>
            <th scope="col">신청일</th>
            <th scope="col">상태변경일</th>
            <th scope="col">상태</th>
            <th scope="col">상태변경자</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>160</td>
            <td>A</td>
            <td>010-0000-0000</td>
            <td>A@A.com</td>
            <td>2021.10.28</td>
            <td>2021.10.28</td>
            <td>접수</td>
            <td>해당없음</td>
          </tr>
          <tr>
            <td>160</td>
            <td>A</td>
            <td>010-0000-0000</td>
            <td>A@A.com</td>
            <td>2021.10.28</td>
            <td>2021.10.28</td>
            <td>접수</td>
            <td>해당없음</td>
          </tr>
          <tr>
            <td>160</td>
            <td>A</td>
            <td>010-0000-0000</td>
            <td>A@A.com</td>
            <td>2021.10.28</td>
            <td>2021.10.28</td>
            <td>접수</td>
            <td>해당없음</td>
          </tr>
          <tr>
            <td>160</td>
            <td>A</td>
            <td>010-0000-0000</td>
            <td>A@A.com</td>
            <td>2021.10.28</td>
            <td>2021.10.28</td>
            <td>접수</td>
            <td>해당없음</td>
          </tr>
          <tr>
            <td>160</td>
            <td>A</td>
            <td>010-0000-0000</td>
            <td>A@A.com</td>
            <td>2021.10.28</td>
            <td>2021.10.28</td>
            <td>접수</td>
            <td>해당없음</td>
          </tr>
          <tr>
            <td>160</td>
            <td>A</td>
            <td>010-0000-0000</td>
            <td>A@A.com</td>
            <td>2021.10.28</td>
            <td>2021.10.28</td>
            <td>접수</td>
            <td>해당없음</td>
          </tr>
          <tr>
            <td>160</td>
            <td>A</td>
            <td>010-0000-0000</td>
            <td>A@A.com</td>
            <td>2021.10.28</td>
            <td>2021.10.28</td>
            <td>접수</td>
            <td>해당없음</td>
          </tr>
          <tr>
            <td>160</td>
            <td>A</td>
            <td>010-0000-0000</td>
            <td>A@A.com</td>
            <td>2021.10.28</td>
            <td>2021.10.28</td>
            <td>접수</td>
            <td>해당없음</td>
          </tr>
          <tr>
            <td>160</td>
            <td>A</td>
            <td>010-0000-0000</td>
            <td>A@A.com</td>
            <td>2021.10.28</td>
            <td>2021.10.28</td>
            <td>접수</td>
            <td>해당없음</td>
          </tr>
          <tr>
            <td>160</td>
            <td>A</td>
            <td>010-0000-0000</td>
            <td>A@A.com</td>
            <td>2021.10.28</td>
            <td>2021.10.28</td>
            <td>접수</td>
            <td>해당없음</td>
          </tr>
        </tbody>
      </table>
      <div class="controller_box">
        <Link to="#" class="btn"><FontAwesomeIcon icon={faCaretLeft} /></Link>
        <Link to="#">1</Link>
        <Link to="#">2</Link>
        <Link to="#">3</Link>
        <Link to="#">4</Link>
        <Link to="#">5</Link>
        <Link to="#" class="btn"><FontAwesomeIcon icon={faCaretRight} /></Link>
      </div>
    </main>
    </div>
  );
};

export default PanelSystem;