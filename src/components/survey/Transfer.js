import React from "react";
import styles from "./css/transfer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
//import './css/transfer.module.css';
import '../../reset.css';

function Transfer(){
    return(
        <div className={styles.transferArea}>
            <div className={styles.titlebox}>
                <section className={styles.titletext}>
                    <span>설문 전송</span>
                </section>
                <section className={styles.xbox}>
                    <a href="#">
                        <FontAwesomeIcon
                            icon={faTimes} className={`${styles.fa}${styles.faTimes}`}
                        />
                    </a>
                </section> 
            </div>
            <div className={styles.contentsBox}>
                <section className={styles.transferText}>
                    <span>설문을 등록하시겠습니까?</span>
                </section>
            </div>
            <div className={styles.btnArea}>
                <button className={styles.confirmBtn}>확인</button>
                <button className={styles.cancelBtn}>취소</button>
            </div>
        </div>
    )
}

export default Transfer;