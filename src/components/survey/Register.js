import React from "react";
import styles from "./css/register.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
//import './css/register.module.css';
import '../../reset.css';
import { useState } from 'react';

function Register(){
    return(
        <div className={styles.registerArea}>
            <div className={styles.titlebox}>
                <section className={styles.titletext}>
                    <span>신규설문 등록</span>
                </section>
            </div>
            <form className={styles.form}>
                <dl className={styles.dl1}>
                    <dt><span>조사명</span></dt>
                    <dd>
                        <label></label>
                        <input type="text" placeholder="" name="" id="" />
                    </dd> 
                </dl>
                <dl className={styles.dl2}>
                    <dt><span>설문링크</span></dt>
                    <dd>
                        <input type="text" placeholder="설문 URL을 기입해주세요" name="" id="" />
                    </dd>
                </dl>
                <dl className={styles.dl3}>
                    <dt>
                        <span>필요샘플 수</span>
                        <input type="number" min="0" placeholder="숫자만 입력 가능합니다." name="" id="" />
                    </dt>    
                    <dd>
                        <span>참여포인트</span>
                        <input type="number" min="0" placeholder="숫자만 입력 가능합니다." name="" id="" />  
                    </dd>   
                </dl>
                <dl className={styles.dl4}>
                    <dt><span>발송패널 등록</span></dt>
                    <dd>
                        <div className={styles.fileupload}>
                            <a href="#">파일 등록</a>
                        </div>
                        <p>8,545건</p>
                    </dd>
                </dl>
                <dl className={styles.dl5}>
                    <dt><span>요청기간</span></dt>
                    <dd className={styles.dataarea}>
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
                                        <div className={styles.tag}>
                                            <span>남성</span>
                                            <FontAwesomeIcon
                                                icon={faTimes} className={`${styles.fa}${styles.faTimes}${styles.tagX}` }
                                            />
                                        </div>
                                        <div className={styles.tag}>
                                            20세~39세
                                            <FontAwesomeIcon
                                                icon={faTimes} className={`${styles.fa}${styles.faTimes}${styles.tagX}`}
                                            />
                                            </div>
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
                                        <div className={styles.tag}>
                                            SKT
                                            <FontAwesomeIcon
                                                icon={faTimes} className={`${styles.fa}${styles.faTimes}${styles.tagX}`}
                                            />
                                            </div>
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
                                        <div className={styles.tag}>
                                            갤럭시S1
                                            <FontAwesomeIcon
                                                icon={faTimes} className={`${styles.fa}${styles.faTimes}${styles.tagX}`}
                                            />
                                            </div>
                                    </section>
                                </dd>
                            </li>
                        </ul>
                    </dd>
                </dl>
            </form>
            <section className={styles.btnArea}>
                <button className={styles.saveBtn}>저장</button>
            </section>
        </div>
    )
}

export default Register;