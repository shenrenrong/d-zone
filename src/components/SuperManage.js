import React from 'react'
import { Button } from './Button'
import Gnb from './Gnb'

function SuperManage() {
  return (
    <div>
    <Gnb />
<main className="super-manage">
<ul className="tab">
  <li className="tab-item">
    <a href="/account">계정변경</a>
  </li>
  <li className="tab-item">
    <a href="/account/generate">관리자 계정생성</a>
  </li>
  <li className="tab-item current">
    <a href="account/manage">계정관리</a>
  </li>
</ul>
{/* ! tab */}
<div className="content">

<div class="search-box">
            <div class="search-bar">
              <input class="form-control" type="search" aria-label="Search" />
              <button class="btn search-btn" type="submit">
                <i class="fa-solid fa-magnifying-glass fa-3x"></i>
              </button>
            </div>
            <ul class="search-list">
              <li>
                <a href="#">김주리</a>
              </li>
              <li>
                <a href="#">전선향</a>
              </li>
            </ul>
          </div>
<form>
  <div className="row userID">
    <label htmlFor="userID">ID</label>
    <input
      type="text"
      id="userID"
    />
  </div>
  {/* userID */}
  <div className="row password">
    <label htmlFor="password">비밀번호</label>
    <input type="password" id="password" />
  </div>
  {/* password */}
  <div className="row email">
    <label htmlFor="email">E-mail</label>
    <input
      type="email"
      id="email"
    />
  </div>
  {/* Email */}
  <div className="row userName">
    <label htmlFor="userName">사용자명</label>
    <input type="text" id="userName" />
  </div>
  {/* user name */}
  <div className="row mobile">
          <label htmlFor="userName">휴대폰 번호</label>
          <input
            type="number"
            id="mobile"
          />
          <span> - </span>
          <input
            type="number"
            id="mobile"
          />
          <span> - </span>
          <input
            type="number"
            id="mobile"
          />
        </div>
        {/* mobile */}
  <Button className="form-btn" buttonStyle="btn--yellow" type="submit">
    저장
  </Button>
</form>
</div>
</main>
</div>
  )
}

export default SuperManage