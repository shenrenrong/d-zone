import React from "react";
import styles from "./css/file-upload.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
//import './css/file-upload.module.css';
import '../../reset.css';


function FileUpload(){
    return(
        <div className={styles.fileUploadbox}>
            <div className={styles.titlebox}>
                <section className={styles.titletext}>
                    <span>파일등록</span>
                </section>
                <section className={styles.xbox}>
                    <a href="#">
                        <FontAwesomeIcon
                            icon={faTimes} className={`${styles.fa}${styles.faTimes}`}
                        />
                    </a>
                </section> 
            </div>
            <div className={styles.contentsbox}>
                <section className={styles.filebox}>
                    <span>파일 첨부</span>
                    <label for="upload_btn">첨부</label> 
                    <input type="file" id="upload_btn" />
                    <input className={styles.uploadName} value="" placeholder="" />
                </section>
                <section className={styles.btnArea}>
                    <button className={styles.submitBtn}>등록</button>
                </section>
            </div>
        </div>
    )
}

export default FileUpload;