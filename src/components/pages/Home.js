import React from "react";
import Gnb from "../Gnb";
import Logined_home from "../Logined_home";

export default function Home() {
  return (
    <div className="home">
        <Gnb />
        <Logined_home />
    </div>
  );
}
