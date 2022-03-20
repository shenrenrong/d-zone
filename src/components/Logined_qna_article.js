import React from "react";
import styles from "./Logined_qna_article.module.css";
import FadeIn from "react-fade-in";

function Logined_qna_article() {
  // 게시글 삭제
  const deleteArticle = () => {
    alert("게시글 삭제가 완료되었습니다.")
  }

  return (
    <main>
      <FadeIn>
      <div className={styles.container}>
          <div className={styles.articleWrap}>
            <div className={styles.pannelCategory}>
              <h2 className={styles.pannelTitle}>
                Q&A <span>{">"}</span> Q&A 게시판
              </h2>
            </div>
            <div className={styles.article}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th scope="col" className={styles.articleNum}>
                      159
                    </th>
                    <th scope="col" className={styles.articleTitle}>
                      Q&A 게시판
                    </th>
                    <th scope="col" className={styles.articleWritter}>
                      홍길동
                    </th>
                    <th scope="col" className={styles.articleDate}>
                      2022.02.04
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
            <div className={styles.content}>
              <span>Q&A 게시판의 내용입니다.</span>
            </div>
            <div className={styles.comment}>
              <div className={styles.commentUserInfo}>
                <img src="/img/qna_article_admin.png" alt="" />
                <span className={styles.admin}>관리자</span>
                <span className={styles.date}>2022-02-07</span>
                <span className={styles.time}>09:02:25</span>
              </div>
              <div className={styles.commentBtn}>
                <button
                  type="button"
                  className={`${styles.btn} ${styles.modify}`}
                >
                  수정
                </button>
                <button
                  type="button"
                  className={`${styles.btn} ${styles.delete}`}
                >
                  삭제
                </button>
              </div>
            </div>

            <div className={styles.replyContent}>
              <span>댓글입니다.</span>
            </div>
            <form>
              <div className={styles.replyRegist}>
                <span className={styles.inputGroupText}>댓글입력</span>
                <textarea
                  className={styles.formControl}
                  aria-label="With textarea"
                ></textarea>
                <div className={styles.replyConfirm}>
                  <button
                    type="button"
                    className={`${styles.btn} ${styles.btnOutlinePrimary}`}
                  >
                    확인
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className={styles.modifyButton}>
            <button type="button" className={`${styles.btn} ${styles.modify}`}>
              수정
            </button>
            <button type="button" className={`${styles.btn} ${styles.delete}`} onClick={()=>{
              deleteArticle();
            }} >
              삭제
            </button>
            <button type="button" className={`${styles.btn} ${styles.list}`}>
              목록
            </button>
          </div>
      </div>
      </FadeIn>
    </main>
  );
}

export default Logined_qna_article;
