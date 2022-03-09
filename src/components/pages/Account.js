import React from "react";
import Gnb from "../Gnb";
import { useState } from "react";
import MyPage from "../MyPage";
import Super from "../Super";

function Account() {
  const [managerStat,setManagerState] = useState(false);
  return (
    <div className="account">
      <Gnb />
      {
        managerStat ? <Super /> : <MyPage />
      }
    </div>
  )
}

export default Account
