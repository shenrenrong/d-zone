import React from "react";
import './css/transfer.css';
import './css/common.css';

function Transfer(){
    return(
        <div className="transfer_box">
            <div className="title_box">
                <section className="title_text">
                    <span>설문 전송</span>
                </section>
                <section className="x_box">
                    <a href="#"><i className="fa fa-times"></i></a>
                </section> 
            </div>
            <div className="contents_box">
                <section className="transfer_text">
                    <span>설문을 등록하시겠습니까?</span>
                </section>
            </div>
            <div className="btn_area">
                <button className="confirm_btn">확인</button>
                <button className="cancel_btn">취소</button>
            </div>
        </div>
    )
}

export default Transfer;