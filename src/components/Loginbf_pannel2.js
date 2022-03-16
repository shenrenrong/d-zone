import React from "react";
import styles from './Loginbf_pannel2.module.css'

function Loginbf_pannel2() {
  return (
    <main>
      <h2 className={styles.pannelText}>비밀번호 찾기</h2>
      <span className={styles.pannelDes}>
        가입한 이메일 주소로 임시 비밀번호를 알려드립니다.
        <br />
        로그인 후 비밀번호를 꼭 변경해주세요.
      </span>
      <div className={styles.content}>
        <form>
          <div className={`${styles.row} ${styles.emailRow}`}>
            <label for="inputEmail">이메일</label>
            <div className={styles.col}>
              <input type="email" id="inputEmail" />
            </div>
          </div>

          <div className={`${styles.row} ${styles.usernameRow}`}>
            <label for="inputUsername">아이디</label>
            <div className={styles.col}>
              <input type="text" id="inputUsername" />
            </div>
          </div>

          <div className={`${styles.row} ${styles.phoneRow}`}>
            <label for="phoneNumber">휴대폰번호</label>
            <div className={styles.col}>
              <input type="text" className={styles.phoneBox} />
              <div className={styles.hipen}></div>
              <input type="text" className={styles.phoneBox} name="tel_h2_1" />
              <div className={styles.hipen}></div>
              <input type="text" className={styles.phoneBox} name="tel_h2_2" />
              <button type="submit" className={styles.btn}>
                인증번호 발송
              </button>
            </div>
          </div>

          <div className={`${styles.row} ${styles.codeRow}`}>
            <label for="codeNumber">인증번호</label>
            <div className={styles.col}>
              <input type="text" id="codeNumber" />
              <button type="submit" className={styles.btn}>
                확인
              </button>
            </div>
          </div>

          <div className={styles.btnContainer}>
            <button type="submit" className={`${styles.btn} ${styles.btnPrimary}`}>
              임시비밀번호발송
            </button>
            <button type="cancel" className={styles.btn}>
              <a href="login.html">취소</a>
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Loginbf_pannel2;
