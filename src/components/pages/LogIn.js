import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";

export default function LogIn() {
  return (
    <div className="log-in">
      <h1>Log In</h1>
      <Button buttonSize="btn--large">
        <Link to="/home">로그인</Link>
      </Button>
    </div>
  );
}
