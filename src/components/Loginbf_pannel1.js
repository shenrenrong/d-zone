import React from "react";
import styles from './Loginbf_pannel1.module.css'

function Loginbf_pannel1() {
  return (
    <main>
      <h2 className={styles.pannelText}>아이디 찾기</h2>
      <span className={styles.pannelDes}>
        아이디는 가입시 입력하신 이메일을 통해 찾을 수 있습니다.
      </span>
      <div className={styles.content}>
        <form>
          <div className={`${styles.row} ${styles.emailRow}`}>
            <label htmlFor="inputEmail">
              <img src="img/pannel1_img.png" />
            </label>
            <div className={styles.col}>
              <input type="email" id="inputEmail" placeholder="이메일" />
            </div>
          </div>
          <div className={`${styles.row} ${styles.usernameRow}`}>
            <label htmlFor="inputUsername">
              <img src="img/pannel1_img.png" />
            </label>
            <div className={styles.col}>
              <input type="text" id="inputUsername" placeholder="사용자명" />
            </div>
          </div>
          <div className={styles.btnContainer}>
            <button type="submit" className={`${styles.btn} ${styles.btnPrimary}`}>
              아이디발송
            </button>
            <button type="cancel" className={`${styles.btn} ${styles.btnPrimary}`}>
              <a href="login.html">취소</a>
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Loginbf_pannel1;
