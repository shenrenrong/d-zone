import React from "react";
import styles from "./css/transfer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
//import './css/transfer.module.css';
import '../../reset.css';

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    zIndex: 1000
}
const OVERLAY_STYLE = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.7)',
    zIndex: 1000
}

function Transfer({trans, children, onClose}){
    if (!trans) return null
    return(
        <>
        <div style={OVERLAY_STYLE} /> {/* 검은창 */}
        <div style={MODAL_STYLES}>
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
        </div>
        </>
    )
}

export default Transfer;