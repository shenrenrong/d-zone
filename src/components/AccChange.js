import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from './Button'
import "./AccChange.css";
import useForm from './useForm';
import validateInfo from './validateInfo';

function AccChange() {
    const { handleChange, handleSubmit, values, errors } = useForm(
        validateInfo
    );

  return (
    <div className='account AccChange'>
    <ul className='acc-tab'>
        <li><NavLink to="/account">계정변경</NavLink></li>
        <li><NavLink to="/account/create">관리자 계정생성</NavLink></li>
        <li><NavLink to="/account/manage">계정관리</NavLink></li>
      </ul>
      <div className="form-content">
          <form className="form" onSubmit={handleSubmit}>
              <div className="form-inputs">
                  <label htmlFor="department" className="form-label">소속</label>
                  <input 
                  className='form-input readOnly'
                  type="text"
                  readOnly
                  name='department'
                  defaultValue={values.department}
                   />
              </div>{/* department */}
              <div className="form-inputs">
                  <label htmlFor="userid" className="form-label">아이디</label>
                  <input 
                  className='form-input readOnly'
                  type="text"
                  readOnly
                  name='userid'
                  defaultValue={values.userid}
                   />
              </div>{/* userid */}
              <div className="form-inputs">
                  <label htmlFor="password" className="form-label">비밀번호</label>
                  <input 
                  className='form-input'
                  type="password"
                  name='password'
                  value={values.password}
                  onChange={handleChange}
                   />
                   { errors.password && <span className='error-msg'>{errors.password}</span> }
              </div>{/* password */}
              <div className="form-inputs">
                  <label htmlFor="password2" className="form-label">비밀번호 확인</label>
                  <input 
                  className='form-input'
                  type="password"
                  name='password2'
                  value={values.password2}
                  onChange={handleChange}
                   />
                   { errors.password && <span className='error-msg'>{errors.password2}</span> }
              </div>{/* password2 */}
              <div className="form-inputs">
                  <label htmlFor="email" className="form-label">E-Mail</label>
                  <input 
                  className='form-input'
                  type="email"
                  name='email'
                  value={values.email}
                  onChange={handleChange}
                   />
              </div>{/* email */}
              <div className="form-inputs">
                  <label htmlFor="username" className="form-label">사용자명</label>
                  <input 
                  className='form-input'
                  type="text"
                  name='username'
                  value={values.username}
                  onChange={handleChange}
                   />
              </div>{/* username */}
              <div className="form-inputs">
                  <label htmlFor="mobile" className="form-label">휴대폰 번호</label>
                  <input 
                  className='form-input readOnly'
                  type="text"
                  name='mobile'
                  defaultValue={values.mobile}
                   />{/* https://velog.io/@seob/React-js-%EC%A0%95%EA%B7%9C%EC%8B%9D%EC%9C%BC%EB%A1%9C-%ED%95%B8%EB%93%9C%ED%8F%B0-%EB%B2%88%ED%98%B8-input-%EB%A7%8C%EB%93%A4%EA%B8%B0 */}
                <Button type="button" buttonStyle="btn--gray">변경</Button>
              </div>{/* mobile */}
              <Button type="submit" buttonStyle="btn--yellow">저장</Button>
          </form>
      </div>
    </div>
  )
}

export default AccChange