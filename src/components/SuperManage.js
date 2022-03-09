import React from 'react'
import { Button } from './Button'
import Gnb from './Gnb'

function SuperManage() {
  return (
    <div>
    <Gnb />
<main>
<ul className="tab">
  <li className="tab-item">
    <a href="/account">계정변경</a>
  </li>
  <li className="tab-item">
    <a href="/account/generate">관리자 계정생성</a>
  </li>
  <li className="tab-item current">
    <a href="#">계정관리</a>
  </li>
</ul>
{/* ! tab */}
<form className="content">
  <div className="row department">
    <label htmlFor="department">소속</label>
    <input
      type="text"
      readOnly
      className="plaintext"
      id="department"
      value={"(주)A"}
    />
  </div>
  {/* department */}
  <div className="row userID">
    <label htmlFor="userID">ID</label>
    <input
      type="text"
      readOnly
      className="plaintext"
      id="userID"
      value={"admin"}
    />
  </div>
  {/* userID */}
  <div className="row password">
    <label htmlFor="password">비밀번호</label>
    <input type="password" id="password" />
    <span className="alert">
      <i class="fa-solid fa-circle-info fa-lg"></i>사용 가능합니다
    </span>
  </div>
  {/* password */}
  <div className="row checkPassword">
    <label htmlFor="password">비밀번호 확인</label>
    <input type="password" id="checkPassword" />
    <span className="alert">
      <i class="fa-solid fa-circle-info fa-lg"></i>비밀번호 정보가
      일치하지 않습니다
    </span>
  </div>
  {/* check password */}
  <div className="row email">
    <label htmlFor="email">E-mail</label>
    <input
      type="email"
      id="email"
      placeholder="admin@digitalzone.co.kr"
    />
  </div>
  {/* Email */}
  <div className="row userName">
    <label htmlFor="userName">사용자명</label>
    <input type="text" id="userName" placeholder="admin" />
  </div>
  {/* user name */}
  <div className="row mobile">
    <label htmlFor="userName">휴대폰 번호</label>
    <input
      type="number"
      id="mobile"
      readOnly
      className="plaintext"
      placeholder="010-0000-0000"
    />
    <Button buttonSize="btn--small" buttonStyle="btn--gray">
      변경
    </Button>
  </div>
  {/* mobile */}
  <Button buttonStyle="btn--yellow" type="submit">
    저장
  </Button>
</form>
</main>
</div>
  )
}

export default SuperManage