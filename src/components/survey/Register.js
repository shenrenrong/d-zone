import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import './css/register.css';
import '../../reset.css';

function Register(){
    return(
        <div className="modalarea">
            <div className="title-box">
                <section className="title-text">
                    <span>신규설문 등록</span>
                </section>
            </div>
            <form className="form">
                <dl className="dl_1">
                    <dt><span>조사명</span></dt>
                    <dd>
                        <label></label>
                        <input type="text" placeholder="" name="" id="" />
                    </dd> 
                </dl>
                <dl className="dl_2">
                    <dt><span>설문링크</span></dt>
                    <dd>
                        <input type="text" placeholder="설문 URL을 기입해주세요" name="" id="" />
                    </dd>
                </dl>
                <dl className="dl_3">
                    <dt>
                        <span>필요샘플 수</span>
                        <input type="number" min="0" placeholder="숫자만 입력 가능합니다." name="" id="" />
                    </dt>    
                    <dd>
                        <span>참여포인트</span>
                        <input type="number" min="0" placeholder="숫자만 입력 가능합니다." name="" id="" />  
                    </dd>   
                </dl>
                <dl className="dl_4">
                    <dt><span>발송패널 등록</span></dt>
                    <dd>
                        <div className="fileupload">
                            <a href="#">파일 등록</a>
                        </div>
                        <p>8,545건</p>
                    </dd>
                </dl>
                <dl className="dl_5">
                    <dt><span>요청기간</span></dt>
                    <dd className="datearea">
                        <input type="date" data-placeholder="" required aria-required="ture"/> 
                        <span>~</span>
                        <input type="date" data-placeholder="" required aria-required="ture"/>
                    </dd>
                </dl>
                <dl className="dl_6">
                    <dt className="survey-profile">설문프로파일</dt>
                    <dd>
                        <ul>
                            <li className="steparea">
                                <dt>1단계</dt>
                                <dd>
                                    <section className="selectarea">
                                        <select name="성별" required className="select-box">
                                            <option value="" disabled selected>성별</option>
                                            <option value="man">남자</option>
                                            <option value="woman">여자</option>
                                        </select>
                                        <select name="나이" required className="select-box">
                                            <option value="" disabled selected>나이</option>
                                            <option value="">0 ~ 19세</option>
                                            <option value="">20세 ~ 39세</option>
                                            <option value="">40세 ~ 59세</option>
                                            <option value="">60세 ~ </option>
                                        </select>
                                    </section>
                                    <section className="scrollbar">
                                        <div className="tag">
                                            남성
                                            <FontAwesomeIcon
                                                icon={faTimes} className={`${styles.fa}${styles.faTimes}${styles.tag_x}`}
                                            />
                                        </div>
                                        <div className="tag">
                                            20세~39세
                                            <FontAwesomeIcon
                                                icon={faTimes} className={`${styles.fa}${styles.faTimes}${styles.tag_x}`}
                                            />
                                            </div>
                                    </section>
                                </dd>
                            </li>
                            <li className="steparea">
                                <dt>2단계</dt>
                                <dd>
                                    <section className="selectarea">
                                        <select name="통신사" className="select-box">
                                            <option value="">통신사</option>
                                        </select>
                                        <select name="통신사선택" required className="select-box">
                                            <option value="SKT" selected>SKT</option>
                                            <option value="KT">KT</option>
                                            <option value="U+">U+</option>
                                            <option value="알뜰폰">알뜰폰</option>
                                        </select>
                                    </section>
                                    <section className="scrollbar">
                                        <div className="tag">
                                            SKT
                                            <FontAwesomeIcon
                                                icon={faTimes} className={`${styles.fa}${styles.faTimes}${styles.tag_x}`}
                                            />
                                            </div>
                                    </section>
                                </dd>
                            </li>
                            <li className="steparea">
                                <dt>3단계</dt>
                                <dd>
                                    <section className="selectarea">
                                        <select name="전자기기" className="select-box">
                                            <option>전자기기</option>
                                        </select>
                                        <select name="휴대폰기종" className="select-box">
                                            <option>휴대폰기종</option>
                                        </select>
                                        <select name="기종선택" required className="select-box">
                                            <option value="" selected>갤럭시S1</option>
                                            <option value="">갤럭시S20</option>
                                            <option value="">갤럭시노트20</option>
                                            <option value="">아이폰13</option>
                                        </select>
                                    </section>
                                    <section className="scrollbar">
                                        <div className="tag">
                                            갤럭시S1
                                            <FontAwesomeIcon
                                                icon={faTimes} className={`${styles.fa}${styles.faTimes}${styles.tag_x}`}
                                            />
                                            </div>
                                    </section>
                                </dd>
                            </li>
                        </ul>
                    </dd>
                </dl>
            </form>
            <section className="btn-area">
                <button className="save-btn">저장</button>
            </section>
        </div>
    )
}

export default Register;