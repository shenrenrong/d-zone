import React from "react";

function FileUpload(){
    return(
        <div class="file_upload_box">
            <div class="title_box">
                <section class="title_text">
                    <span>파일등록</span>
                </section>
                <section class="x_box">
                    <a href="#"><i class="fa fa-times"></i></a>
                </section> 
            </div>
            <div class="contents_box">
                <section class="filebox">
                    <span>파일 첨부</span>
                    <label for="upload_btn">첨부</label> 
                    <input type="file" id="upload_btn">
                    <input class="upload-name" value="" placeholder="">
                </section>
                <section class="btn_area">
                    <button class="submit_btn">등록</button>
                </section>
            </div>
        </div>
    )
}

export default FileUpload;