import React, { useState } from "react";
import Gnb from "../Gnb";

export default function QA() {
  const [memberStat,setMemberStat]=useState(false);/* 회원(true)에게만 gnb 보임, 디폴트는 비회원(false) */
  return (
    <div className="QA">
      { memberStat && <Gnb /> }
      <h1>Q&amp;A</h1>
    </div>
  );
}
