import React from "react";
import Gnb from "../Gnb";
import Logined_home from "../Logined_home";

export default function Home() {
  return (
    <div className="home">
        <Gnb />
        {/* userState가 true일 때 */}
        <Logined_home />
    </div>
  );
}
