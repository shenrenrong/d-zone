import React from "react";

function Transfer(){
    return(
        <div class="transfer_box">
            <div class="title_box">
                <section class="title_text">
                    <span>설문 전송</span>
                </section>
                <section class="x_box">
                    <a href="#"><i class="fa fa-times"></i></a>
                </section> 
            </div>
            <div class="contents_box">
                <section class="transfer_text">
                    <span>설문을 등록하시겠습니까?</span>
                </section>
            </div>
            <div class="btn_area">
                <button class="confirm_btn">확인</button>
                <button class="cancel_btn">취소</button>
            </div>
        </div>
    )
}

export default Transfer;