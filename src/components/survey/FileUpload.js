import React from "react";
import './css/file-upload.css';

function FileUpload(){
    return(
        <div className="file_upload_box">
            <div className="title_box">
                <section className="title_text">
                    <span>파일등록</span>
                </section>
                <section className="x_box">
                    <a href="#"><i className="fa fa-times"></i></a>
                </section> 
            </div>
            <div className="contents_box">
                <section className="filebox">
                    <span>파일 첨부</span>
                    <label for="upload_btn">첨부</label> 
                    <input type="file" id="upload_btn" />
                    <input className="upload-name" value="" placeholder="" />
                </section>
                <section className="btn_area">
                    <button className="submit_btn">등록</button>
                </section>
            </div>
        </div>
    )
}

export default FileUpload;