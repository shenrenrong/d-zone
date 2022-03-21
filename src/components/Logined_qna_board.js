import React from "react";
import styles from "./Logined_qna_board.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import Gnb from "./Gnb";
import FadeIn from "react-fade-in";

export default function Logined_qna_board() {
  // 답글 수
  const replyNumber = 3;

  // 테이블 자동생성
  const qnaContentsNum = 60;
  const makeTableContents = (numberOfContents) => {
    const result = [];
    for (let i = 0; i <= numberOfContents; i++) {
      result.push(
        <tr>
          <td scope="row">160</td>
          <td>
            <a href="#">Q&A 게시판 ({replyNumber})</a>
          </td>
          <td>2021.11.28</td>
          <td>홍길동</td>
        </tr>
      );
    }
    return result;
  };

  return (
    <div>
      <main>
        <FadeIn>
          <div>
            <h1 className={styles.pannelText}>Q&A</h1>
          </div>
          <div className={styles.qnaBox}>
            <div className={styles.registSearch}>
              <div className={styles.registBox}>
                <button className={styles.regist}>신규등록</button>
              </div>
              {/* e: registBox */}
              <form>
                <div className={styles.searchBox}>
                  <input
                    type="text"
                    className={styles.formControl}
                    placeholder=""
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className={`${styles.btn} ${styles.btnOutlineSecondary}`}
                    type="button"
                    id="button-addon2"
                  >
                    <img src="/img/btn_search.png" alt="" />
                  </button>
                </div>
              </form>
              {/* e: searchBox */}
            </div>
            {/* e: registSearch */}
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col" className={styles.number}>
                    번호
                  </th>
                  <th scope="col" className={styles.title}>
                    제목
                  </th>
                  <th scope="col" className={styles.registDate}>
                    등록일
                  </th>
                  <th scope="col" className={styles.register}>
                    등록자
                  </th>
                </tr>
              </thead>
              <tbody>
                {makeTableContents(qnaContentsNum)}
              </tbody>
            </table>
            {/* e: table */}
            <div className={styles.qnaPageNumber}>
              <div className={styles.controllerBox}>
                <a href="#" className={styles.btn}>
                  <FontAwesomeIcon
                    icon={faCaretLeft}
                    className={`${styles.fa} ${styles.faCaretLeft}`}
                  />
                </a>
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">5</a>
                <a href="#" className={styles.btn}>
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    className={`${styles.fa} ${styles.fasCaretRight}`}
                  />
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </main>
    </div>
  );
}
