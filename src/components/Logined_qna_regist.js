import React from "react";
import Gnb from "./Gnb";
import styles from "./Logined_qna_regist.module.css";

function Logined_qna_regist() {
  return (
    <div>
      <main>
        <div className={styles.container}>
          <div className={styles.qnaRegist}>
            <div className={styles.pannelCategory}>
              <h2 className={styles.pannelTitle}>
                Q&A <span>{">"}</span> Q&A 게시판
              </h2>
            </div>

            <div className={styles.describe}>
              <img src="/img/qna_regist_process.png" alt="" />
              <p>
                설문 관련하여 궁금하신 점을 아래에 작성해주시면
                <br />
                최대한 빠른 시간 내 답변을 등록하겠습니다.
              </p>
            </div>

            <form>
              <div className={styles.contents}>
                <div className={styles.titleInput}>
                  <label htmlFor="inputBox" className={styles.title}>
                    제목
                  </label>
                  <input
                    className={styles.titleInputBox}
                    aria-label="With textarea"
                    type="text"
                  ></input>
                </div>

                <div className={styles.contentInput}>
                  <label htmlFor="inputBox" className={styles.content}>
                    신청 / 문의내용
                  </label>
                  <textarea
                    className={styles.contentInputBox}
                    aria-label="With textarea"
                    placeholder="보다 신속 정확한 확인을 위하여&#13;&#10;신청/문의 내용을 구체적으로 알려주세요."
                  ></textarea>
                </div>
              </div>
            </form>

            <div className={styles.registCancleBtn}>
              <button
                type="button"
                className={`${styles.btn} ${styles.regist}`}
              >
                등록
              </button>
              <button
                type="button"
                className={`${styles.btn} ${styles.cancle}`}
              >
                취소
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Logined_qna_regist;
