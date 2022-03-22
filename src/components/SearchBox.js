import { Button } from "./Button";
import React, { useState } from "react";
import userData from "./userData";
import "./SearchBox.css";

function SearchBox() {
  const [indexKey, setIndex] = useState(null);

  return (
    <div className="search-box">
      <div className="left-container">
        <input type="text" className="search-input"/>
        <ul className="search-list">

        {userData.map((values, index) => {
            return (
                <li className="search-item"
                key={index}
                onClick={() => {
                    setIndex(index);
                }}
                >
              {values.department} {values.username}
            </li>
          );
        })}
        </ul>
      </div>
      <div className="right-container">
        <form className="search-field">
          <div className="form-inputs">
            <label htmlFor="userid" className="form-label">
              아이디
            </label>
            <input
              type="text"
              className="readOnly"
              readOnly
              value={indexKey != null ? userData[indexKey].userid : ""}
            />
          </div>
          <div className="form-inputs">
            <label htmlFor="password" className="form-label">
              비밀번호
            </label>
            <input
              type="text"
              defaultValue={indexKey != null ? userData[indexKey].password : ""}
            />
          </div>
          <div className="form-inputs">
            <label htmlFor="email" className="form-label">
              이메일
            </label>
            <input
              type="email"
              defaultValue={indexKey != null ? userData[indexKey].email : ""}
            />
          </div>
          <div className="form-inputs">
            <label htmlFor="username" className="form-label">
              사용자명
            </label>
            <input
              type="text"
              defaultValue={indexKey != null ? userData[indexKey].username : ""}
            />
          </div>
          <div className="form-inputs">
            <label htmlFor="mobile" className="form-label">
              휴대폰 번호
            </label>
            <input
              type="text"
              defaultValue={indexKey != null ? userData[indexKey].mobile : ""}
            />
          </div>
          <div className="search-field-btn">

          <Button type="button" buttonStyle="btn--yellow">
            삭제
          </Button>
          <Button type="submit" buttonStyle="btn--yellow">
            저장
          </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchBox;
