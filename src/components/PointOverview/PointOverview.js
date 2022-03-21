import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import style from "./point_overview.module.css";
import Gnb from "../Gnb";
import PointBoard1 from "./PointBoard1";
import PointBoard2 from "./PointBoard2";

function PointOverview() {
  return (
    <div className="point_overview">
      <Gnb />
      <main className={style.content}>
        <div className={style.route_box}>
          <span className={style.route1}>통합관리</span>
          <Link to="#" className={style.route2}>포인트 현황조회</Link>
        </div>
        <div className={style.condition_box}>
          <div className={style.date_box}>
            <span>일시</span>
            <label for="start">Start date:</label>
            <input type="date" value="2022-02-01" min="2022-01-01" max="2022-12-31" />
            <span>~</span>
            <label for="end">End date:</label>
            <input type="date" value="2022-02-23" min="2022-01-01" max="2022-12-31" />
          </div>
          <div className={style.process_box}>
            <span>구분</span>
            <select name="process" className={style.process_select}>
              <option value="reception">충전</option>
              <option value="proceeding">환불신청</option>
              <option value="complete">환불완료</option>
            </select>
          </div>
          <div className={style.search_box}>
            <input type="text" className={style.search_box_input} />
            <Link to="#"><FontAwesomeIcon icon={faSearch} className={style.search_icon} /></Link>
          </div>
          {/* <button className="search_btn">검색</button> */}
        </div>
        <PointBoard1 />
        
        <div className={style.controller_box}>
          <Link to="#" className={style.btn}><FontAwesomeIcon icon={faCaretLeft} /></Link>
          <Link to="#">1</Link>
          <Link to="/point-overview/2">2</Link>
          <Link to="#">3</Link>
          <Link to="#">4</Link>
          <Link to="#">5</Link>
          <Link to="#" className={style.btn}><FontAwesomeIcon icon={faCaretRight} /></Link>
        </div>
    </main>
    </div>
  );
}

export default PointOverview;