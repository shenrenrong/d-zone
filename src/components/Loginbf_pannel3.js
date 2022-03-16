import React, { useRef, useState } from "react";
import styles from './Loginbf_pannel3.module.css'

function Loginbf_pannel3() {
    // button onClick
    const handleInputFile=(inputId)=>{
        let inputedId=document.getElementById(inputId);
        inputedId.click();
        document.getElementById('');
    }


    // image preview
    const [imageSrc, setImageSrc] = useState('');
    const encodeFileToBase64 = (fileBlob) => { 
        const reader = new FileReader(); 
        reader.readAsDataURL(fileBlob); 
        
        return new Promise((resolve) => { 
            reader.onload = () => { 
                setImageSrc(reader.result); 
                resolve(); 
            }; 
        }); 
    };

  
    return (
    <main>
      <h2 className={styles.pannelText}>패널인증시스템 신청</h2>
      <p>
        도입 관련하여 궁금하신 점을 아래에 작성해주시면 <br />
        최대한 빠른 시간 내 담당자가 연락 드리도록 하겠습니다.
      </p>
      <div className={styles.content}>
        <form>
          <div className={`${styles.row} ${styles.companynameRow}`}>
            <label htmlFor="inputCompanyname">업체명</label>
            <div className={styles.col}>
              <input
                type="name"
                id="inputCompanyname"
                placeholder="정보를 입력하세요"
              />
            </div>
          </div>

          <div className={`${styles.row} ${styles.usernameRow}`}>
            <label htmlFor="inputUsername">담당자명</label>
            <div className={styles.col}>
              <input
                type="text"
                id="inputUsername"
                placeholder="정보를 입력하세요"
              />
            </div>
          </div>

          <div className={`${styles.row} ${styles.phoneRow}`}>
            <label htmlFor="inputPhonenumber">연락처</label>
            <div className={styles.col}>
              <input
                type="text"
                id="inputPhonenumber"
                placeholder="정보를 입력하세요."
              />
            </div>
          </div>

          <div className={`${styles.row} ${styles.emailRow}`}>
            <label htmlFor="inputEmail">이메일</label>
            <div className={styles.col}>
              <input
                type="email"
                id="inputEmail"
                placeholder="정보를 입력하세요"
              />
            </div>
          </div>

          <div className={`${styles.row} ${styles.requestRow}`}>
            <label htmlFor="inputRequest">신청/문의내용</label>
            <div className={styles.col}>
              <textarea
                name="my-textarea"
                cols="53"
                rows="10"
                id="inputRequest"
                className={styles.request}
                placeholder="보다 신속 정확한 확인을 위하여&#13;&#10;신청/문의 내용을 구체적으로 알려주세요."
              ></textarea>
            </div>
          </div>

          <div className={`${styles.row} ${styles.addfileRow}`}>
            <label htmlFor="">첨부파일</label>
            <div className={styles.addfileCol}>
              <input type="file" id="addfile1" className="addfile1" style={{display:"none"}} onChange={(e)=>{
                  encodeFileToBase64(e.target.files[0]);
              }} />
              <button className={styles.addfileBtn1} onClick={(e)=>{
                  e.preventDefault();
                  handleInputFile("addfile1");
              }}>
                {imageSrc ? <img src={imageSrc} alt="preview-img" /> : <img src="img/addfile_camera.png" alt="" />}
              </button>
              <input type="file" id="addfile2" className="addfile2" style={{display:"none"}} onChange={(e)=>{
                  encodeFileToBase64(e.target.files[0]);
              }} />
              <button className={styles.addfileBtn2} onClick={(e)=>{
                  e.preventDefault();
                  handleInputFile("addfile2");
              }}>
                <img src="img/addfile_camera.png" alt="" />
              </button>
              <input type="file" id="addfile3" className="addfile3" style={{display:"none"}} onChange={(e)=>{
                  encodeFileToBase64(e.target.files[0]);
              }} />
              <button className={styles.addfileBtn3} onClick={(e)=>{
                  e.preventDefault();
                  handleInputFile("addfile3");
              }}>
                <img src="img/addfile_camera.png" alt="" />
              </button>
              <span className={styles.addfileDes}>
                이미지 파일(GIF,PNG,JPG)을 기준으로 최대 10MB이하, 최대 3개까지
                등록 가능합니다.
              </span>
            </div>
          </div>

          <div className={styles.btnContainer}>
            <button type="submit" className={styles.btn}>
              문의신청
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

export default Loginbf_pannel3;
