import React from 'react'
import { NavLink } from 'react-router-dom'

function AccManage() {
  return (
    <>
    <ul>
        <NavLink exact to="/account">계정변경</NavLink>
        <NavLink exact to="/account/create">관리자 계정생성</NavLink>
        <NavLink exact to="/account/manage">계정관리</NavLink>
      </ul>
    </>
  )
}

export default AccManage