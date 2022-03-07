import React, { useState } from 'react'
import Gnb from '../Gnb';

export default function FAQ() {
  const [memberStat,setMemberStat]=useState(false);/* 회원(true)에게만 gnb 보임, 디폴트는 비회원(false) */
  return (
    <div className='FAQ'>
    { memberStat && <Gnb /> }
    <h1>FAQ</h1>
    </div>
  )
}
