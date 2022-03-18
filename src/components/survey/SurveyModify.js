import React from "react";
import styles from "./css/survey-modify.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
//import './css/survey-modify.module.css';
import '../../reset.css';

function SurveyModify(){
    return(
        <div className={styles.modifybox}>
            <form className={styles.form}>
                <dl className={styles.dl1}>
                    <dt><span>조사명</span></dt>
                    <dd>
                        <label></label>
                        <input type="text" placeholder="비대면 시장조사 필요성 인식 조사" name="" id="" />
                    </dd> 
                </dl>
                <dl className={styles.dl2}>
                    <dt><span>설문링크</span></dt>
                    <dd>
                        <input type="text" placeholder="www.google.com" name="" id="" />
                        <a href="#" className={styles.shortcut}>설문지 바로가기</a>
                    </dd>
                </dl>
                <dl className={styles.dl4}>
                    <dt><span>발송패널 수</span></dt>
                    <dd>
                        <div className={styles.fileuploadArea}>
                            <a href="#" className={styles.fileuploadBtn}>파일 등록</a>
                        </div>
                        <p>12,500건</p>
                    </dd>
                </dl>
                <dl className={styles.dl5}>
                    <dt><span>조사기간</span></dt>
                    <dd className={styles.datearea}>
                        <input type="date" data-placeholder="" required aria-required="ture"/> 
                        <span> ~ </span>
                        <input type="date" data-placeholder="" required aria-required="ture"/>
                    </dd>
                </dl>
                <dl className={styles.dl6}>
                    <dt className={styles.surveyProfile}>설문프로파일</dt>
                    <dd>
                        <ul>
                            <li className={styles.stepArea}>
                                <dt>1단계</dt>
                                <dd>
                                    <section className={styles.selectArea}>
                                        <select name="성별" required className={styles.selectbox}>
                                            <option value="" disabled selected>성별</option>
                                            <option value="man">남자</option>
                                            <option value="woman">여자</option>
                                        </select>
                                        <select name="나이" required className={styles.selectbox}>
                                            <option value="" disabled selected>나이</option>
                                            <option value="">0 ~ 19세</option>
                                            <option value="">20세 ~ 39세</option>
                                            <option value="">40세 ~ 59세</option>
                                            <option value="">60세 ~ </option>
                                        </select>
                                    </section>
                                    <section className={styles.scrollbar}>
                                        <button className={styles.tag}>
                                            <span>남성</span>
                                            <div className={styles.tagX}>
                                                <FontAwesomeIcon
                                                    icon={faTimes} className={`${styles.fa}${styles.faTimes}${styles.tag_x}`}
                                                />
                                            </div>
                                        </button>
                                        <button className={styles.tag}>
                                            <span>20세~39세</span>
                                            <div className={styles.tagX}>
                                                <FontAwesomeIcon
                                                    icon={faTimes} className={`${styles.fa}${styles.faTimes}${styles.tag_x}`}
                                                />
                                            </div>
                                        </button>
                                    </section>
                                </dd>
                            </li>
                            <li className={styles.stepArea}>
                                <dt>2단계</dt>
                                <dd>
                                    <section className={styles.selectArea}>
                                        <select name="통신사" className={styles.selectbox}>
                                            <option value="">통신사</option>
                                        </select>
                                        <select name="통신사선택" required className={styles.selectbox}>
                                            <option value="SKT" selected>SKT</option>
                                            <option value="KT">KT</option>
                                            <option value="U+">U+</option>
                                            <option value="알뜰폰">알뜰폰</option>
                                        </select>
                                    </section>
                                    <section className={styles.scrollbar}>
                                        <button className={styles.tag}>
                                            <span>SKT</span>
                                            <div className={styles.tagX}>
                                                <FontAwesomeIcon
                                                    icon={faTimes} className={`${styles.fa}${styles.faTimes}${styles.tag_x}`}
                                                />
                                            </div>
                                            </button>
                                    </section>
                                </dd>
                            </li>
                            <li className={styles.stepArea}>
                                <dt>3단계</dt>
                                <dd>
                                    <section className={styles.selectArea}>
                                        <select name="전자기기" className={styles.selectbox}>
                                            <option>전자기기</option>
                                        </select>
                                        <select name="휴대폰기종" className={styles.selectbox}>
                                            <option>휴대폰기종</option>
                                        </select>
                                        <select name="기종선택" required className={styles.selectbox}>
                                            <option value="" selected>갤럭시S1</option>
                                            <option value="">갤럭시S20</option>
                                            <option value="">갤럭시노트20</option>
                                            <option value="">아이폰13</option>
                                        </select>
                                    </section>
                                    <section className={styles.scrollbar}>
                                        <button className={styles.tag}>
                                            <span>갤럭시S1</span>
                                            <div className={styles.tagX}>
                                                <FontAwesomeIcon
                                                    icon={faTimes} className={`${styles.fa}${styles.faTimes}${styles.tag_x}`}
                                                />
                                            </div>
                                            </button>
                                    </section>
                                </dd>
                            </li>
                        </ul>
                    </dd>
                </dl>
            </form>
            <section className={styles.btnArea}>
                <button className={styles.saveBtn}>저장</button>
                <button className={styles.cancelBtn}>취소</button>
            </section>
        </div>
    )
}

export default SurveyModify;