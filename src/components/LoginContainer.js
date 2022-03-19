import React from "react";
import { Link } from "react-router-dom";
import "./LoginContainer.css";

function LoginContainer() {
  return (

    <div className="loginContainer">
      <div className="container">
        <h1>WELCOME TO DIGITAL ZONE</h1>
        <form className="form">
          <input type="text" placeholder="ID" />
          <input type="password" placeholder="PASSWORD" />
          <button type="submit" id="login-button">로그인</button>
          <ul className="service-group">
            <li><a href="#">아이디 찾기</a></li>
            <li><span>|</span></li>
            <li><a href="#">비밀번호 찾기</a></li>
            <li><span>|</span></li>
            <li><a href="#">회원가입</a></li>
          </ul>
          <button type="submit" id="pannel-button">패널인증시스템</button>
        </form>
      </div>
      <ul className="bg-bubbles">
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
      </ul>
    </div>
  );
}

export default LoginContainer;