import React from "react";
import Gnb from "../Gnb";
import { useState } from "react";
import MyPage from "../MyPage";
import AccChange from "../AccChange";

function Account() {
  const [managerStat, setManagerState] = useState(false);
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
