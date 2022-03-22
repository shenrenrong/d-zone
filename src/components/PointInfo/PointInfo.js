import React from "react";
import styles from "./point_info.module.css";
import Gnb from "../Gnb";

function PointInfo() {
  return (
    <div className={styles.point_info}>
      <Gnb />
      <main className={`${styles.content} ${styles.cf}`}>
      <h2>패널인증시스템 신청현황 상세정보</h2>
      <table className={styles.info}>
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
          <tr>
            <td>구분</td>
            <td>환불</td>
          </tr>
          <tr>
            <td>포인트</td>
            <td>20,000 point</td>
          </tr>
          <tr className={styles.last}>
            <td>계좌정보</td>
            <td>기업은행 | 0000-0000-0000-00 | 홍길동</td>
          </tr>
        </table>
        <div className={styles.info_btn_box}>
          <span>상태</span>
          <select name="process" className={styles.process_select}>
            <option value="reception">접수</option>
            <option value="proceeding">처리중</option>
            <option value="complete">완료</option>
          </select>
          <button className={styles.save_btn}>저장</button>
          <button className={styles.list_btn}>목록</button>
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

export default PointInfo;