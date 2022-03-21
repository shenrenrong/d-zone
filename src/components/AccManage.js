import React from "react";
import "./Acc.css";
import Gnb from "./Gnb";
import SupTab from "./SupTab";

function AccManage() {
  return (
    <div className="account">
      <Gnb />
      <div className="manage">
        <SupTab />
        
      </div>
    </div>
  );
}

export default AccManage;
