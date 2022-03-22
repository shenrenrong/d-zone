import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import Loginbf_pannel1 from "../Loginbf_pannel1";
import Loginbf_pannel2 from "../Loginbf_pannel2";
import Loginbf_pannel3 from "../Loginbf_pannel3";

export default function LogIn() {
  return (
    <div className="log-in">
      <h1>Log In</h1>
      <Button buttonSize="btn--large">
        <Link to="/home">로그인</Link>
      </Button>
      {/* 링크 연결 전 출력 확인 */}
      <Loginbf_pannel1 />
      <Loginbf_pannel2 />
      <Loginbf_pannel3 />
    </div>
  );
}
