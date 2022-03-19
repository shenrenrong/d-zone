import React from "react";
import styles from "./Loginbf_pannel2.module.css";

function Loginbf_pannel2() {
  // 인증번호 발송
  const certifNumSend = (e) => {
    var findForm = document.findForm;
    var tel1 = findForm.tel1.value;
    var tel2 = findForm.tel2.value;
    var tel3 = findForm.tel3.value;
    
    if (!tel1 || !tel2 || !tel3) {
      alert("휴대폰 번호를 모두 입력해주세요.");
    } else {
      findForm.submit();
      alert("입력하신 휴대폰번호로 인증번호가 발송 되었습니다.");
      return false;
      
    }
  };

  // 인증번호 확인
  const certifNum = () => {
    var findForm = document.findForm;
    var codeNumber = findForm.codeNumber.value;

    if (!codeNumber) {
      alert("올바른 인증번호를 입력해주세요.");
    } else {
      findForm.submit();
      
      alert("인증번호가 확인 되었습니다.");
      
    }
  };

  // 인증번호 발급 후 확인버튼 활성화
  const certifBtnActive = () => {
    const target = document.getElementById("certifBtn");
    target.disabled = false;
  };

  // 휴대폰 번호 글자수 제한
  const handleOnInput = (e) => {
    if (e.value.length > e.maxLength) {
      e.value = e.value.substr(0, e.maxLength);
    }
  };

  return (
    <main>
      <h2 className={styles.pannelText}>비밀번호 찾기</h2>
      <span className={styles.pannelDes}>
        가입한 이메일 주소로 임시 비밀번호를 알려드립니다.
        <br />
        로그인 후 비밀번호를 꼭 변경해주세요.
      </span>
      <div className={styles.content}>
        <form name="findForm">
          <div className={`${styles.row} ${styles.emailRow}`}>
            <label for="inputEmail">이메일</label>
            <div className={styles.col}>
              <input type="email" id="inputEmail" required />
            </div>
          </div>
          {/* e:emailRow */}

          <div className={`${styles.row} ${styles.usernameRow}`}>
            <label for="inputUsername">아이디</label>
            <div className={styles.col}>
              <input type="text" id="inputUsername" required />
            </div>
          </div>
          {/* e:usernameRow */}

          <div className={`${styles.row} ${styles.phoneRow}`}>
            <label for="phoneNumber">휴대폰번호</label>
            <div className={styles.col}>
              <input
                type="number"
                className={styles.phoneBox}
                maxLength="3"
                onChange={(e)=>{handleOnInput(e);}}
                id="tel1"
              />
              <div className={styles.hipen}></div>
              <input
                type="number"
                className={styles.phoneBox}
                maxLength="4"
                onChange={(e)=>{handleOnInput(e);}}
                id="tel2"
              />
              <div className={styles.hipen}></div>
              <input
                type="number"
                className={styles.phoneBox}
                maxLength="4"
                onChange={(e)=>{handleOnInput(e);}}
                id="tel3"
              />
              <button
                type="button"
                className={styles.btn}
                onClick={() => {
                  certifNumSend();
                  certifBtnActive();
                  return false;
                }}
              >
                인증번호 발송
              </button>
            </div>
          </div>
          {/* e:phoneRow */}

          <div className={`${styles.row} ${styles.codeRow}`}>
            <label for="codeNumber">인증번호</label>
            <div className={styles.col}>
              <input type="text" id="codeNumber" />
              <button
                type="button"
                className={styles.btn}
                id="certifBtn"
                disabled
                onClick={() => {
                  certifNum();
                  return false;
                }}
              >
                확인
              </button>
            </div>
          </div>
          {/* e:codeRow */}

          <div className={styles.btnContainer}>
            <button
              type="submit"
              className={`${styles.btn} ${styles.btnPrimary}`}
            >
              임시비밀번호 발송
            </button>
            <button type="cancel" className={styles.btn}>
              <a href="login.html">취소</a>
            </button>
          </div>
          {/* e:btnContainer */}
        </form>
      </div>
    </main>
  );
}

export default Loginbf_pannel2;
