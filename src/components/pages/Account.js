import React from "react";
import Gnb from "../Gnb";
import { useState } from "react";
import AccChange from "../AccChange";
import MyPage from "../MyPage";

function Account() {
  const [managerStat, setManagerState] = useState(true);
  return (
    <div className="account">
      <Gnb />
      {managerStat ? (
        <>
        <AccChange/>
        </>
      ) : (
        <>
        <MyPage />
        </>
      )}
    </div>
  );
}

export default Account;
