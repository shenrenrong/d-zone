import React from 'react';
import { NavLink } from "react-router-dom";
import './Gnb.css';



function Gnb() {
  return (
    <nav className='gnb'>
        <ul className='gnb-nav-list'>
            <NavLink to="/home">홈</NavLink>
            <NavLink to="/FAQ" >FAQ</NavLink>
            <NavLink to="/QA">Q&amp;A</NavLink>
            <NavLink to="/account" >계정설정</NavLink>
            <NavLink to="/registration">설문등록/현황조회</NavLink>
            <NavLink to="/points">포인트관리</NavLink>
            <NavLink to="/general" >통합관리</NavLink>
        </ul>
    </nav>

    
  )
}

export default Gnb