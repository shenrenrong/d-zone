import React from "react";
import Gnb from "../Gnb";
import { useState } from "react";
import MyPage from "../MyPage";
import SuperCng from "../SuperCng";

function Account() {
  const [managerStat,setManagerState] = useState(true);
  return (
    <div className="account">
      <Gnb />
      {
        managerStat ? <SuperCng /> : <MyPage />
      }
    </div>
  )
}

export default Account
