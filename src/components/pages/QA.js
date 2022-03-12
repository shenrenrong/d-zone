import React, { useState } from "react";
import Gnb from "../Gnb";
import Qna_article from "../Qna_article";
import Qna_board from "../Qna_board";
import Qna_regist from "../Qna_regist";

export default function QA() {
  const [memberStat,setMemberStat]=useState(true);/* 회원(true)에게만 gnb 보임, 디폴트는 비회원(false) */
  return (
    <div className="QA">
      { memberStat && <Gnb /> }
        {/* <Qna_board /> */}
        {/* <Qna_regist /> */}
        <Qna_article />
    </div>
  );
}
