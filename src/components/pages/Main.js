import React from 'react';
import Cards from '../Cards';
import "./Main.css";
import { Link } from "react-router-dom";
import { useRef, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";


function Main() {
  useEffect(() => {
    AOS.init();
  }) //fade 효과

  /* section 나타나기 효과 */
  const target1 = useRef(null)
  const target2 = useRef(null)

  const onIntersect =  (entrys, observer) => {
    entrys.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // 관찰 취소
        }
    });
};


   // intersection observer 옵션
  let options = { 
    root : null ,// documnet.querySelector('#scrollArea') 등으로 // 관찰 대상의 부모 요소를 지정 (기본값 null)  
    rootMargin:'0px',// 관찰하는 뷰포트의 마진 지정 (기본값 0 0 0 0)
    threshold :0.6// 관찰 요소와 어느정도 겹쳤을 때 콜백을 수행할지 지정 (기본값 0/1-0)  
 }
 useEffect(() => {
  const observer = new IntersectionObserver(onIntersect, options);
  [target1, target2].forEach(target => {
      if (target.current) observer.observe(target.current);
  });
  return () => observer.disconnect();

 // 관찰 종료
  }, []);

  return (
    <div>
      <div className="content1" ref={target1}>
        <div className="inner-box">
          <div className="text-box-1"> 
            <h2>설문조사로 해결책을 얻으세요!</h2>
            <p>편리한 설문조사 시스템을 이용해보세요. 디지털존의 설문조사에서 <br />실행 가능한 통찰력과 신선한 관점을 확보할 수 있습니다. <br /> 어려운 설문조사 양식 등을 쉽게 만들고 발송할 수 있습니다.</p>
            <div className="join-btn"><span></span><Link to="/sign-up">회원가입</Link></div>
          </div>
          <div className="icon-box-1" data-aos="fade-left"> 
            <img src="img/content01-display.png" alt="설문조사이미지" />
          </div>
        </div>
      </div>

      <div className="content2" ref={target2}>
        <div className="inner-box">
          <h2><span>Digital Zone</span>의 설문조사 솔루션이 필요하십니까?</h2>
          <div className="text-box-2">
            <p>도입 관련하여 궁금하신 점을 자세히 알아보고 패널인증시스템을 신청하세요.</p>
          </div>
          <div className="pannel-btn"><Link to="/sign-up">패널인증시스템 신청하기</Link></div>
        </div>
      </div>

    <div className="content3" data-aos="fade-up" data-aos-anchor-placement="top-center">
      <div className="inner-box">
        <h4>#실행가능한</h4>
        <h2>최고의 설문 조사 발송 시스템</h2>
        <p>디지털존만의 특별한 설문조사 발송 시스템을 사용해보세요!</p>
        <div className="cont3-box" data-aos="fade-up" data-aos-anchor-placement="top-center">
          <ul>
          <li>디지털존 설문 조사 솔루션은<br />
                <span>DID 패널자격인증 시스템</span>을 기반으로! </li>
          <li>개인정보관리에 있어<br />
          사용자의 <span>안전성 확보!</span></li>
            </ul>
        </div>
        <div className="icon-box" data-aos="fade-up" data-aos-anchor-placement="top-center"> 
            <img src="img/content03-phone.png" alt="설문조사이미지" />
          </div>
      </div>
    </div>

    <div className="content34" data-aos="fade-up" data-aos-anchor-placement="top-center">
     <Cards />
    </div>
   
    <div className="content4" data-aos="fade-up" data-aos-anchor-placement="top-center">
      <div className="inner-box">
        <h1>디지털존 주요 기능</h1>
          <ul className="cont4-box1" data-aos="zoom-in">
            <li>
              <h4>아주 쉬운<br />사용법</h4>
              <p><span>직관적인 UI</span>를 이용해 처음 사용하는 사용자도<br />
              쉽게 온라인 설문을 만들고 발송할 수 있습니다</p>
            </li>
            <li>
              <h4>설문 수<br />제한없음</h4>
              <p>회원 구분에 관계 없이 발송할 수 있는 설문의<br />
                  <span>개수, 질문의 개수에 전혀 제한이 없습니다.</span></p>
            </li>
            </ul>
            <ul className="cont4-box2" data-aos="zoom-in">
            <li>
              <h4>패널선정<br />수고 불필요</h4>
              <p>패널 선정이 랜덤으로 이루어지기 때문에 선정<br />
              절차나 선정 프로세스가 필요 없습니다</p>
            </li>
            <li>
              <h4>편리한 이용</h4>
              <p>자사의 설문 양식을 자유롭게 이용할 수 있습니다.<br /> 
              양식의 제한이 없이 발송이 가능하므로 편리합니다.
              </p>
            </li>
          </ul>
      </div>
    </div>


    <div className="content5" data-aos="fade-up" data-aos-anchor-placement="top-center">
      <div className="inner-box">
        <div className="left">
          <div className="container5-top"></div>
          <div className="container5-bottom">
            <p>새로운</p>
            <p>설문조사의 시작</p>
            <p>디지털존과 함께하세요.</p>
            <button buttonStyle="btn--footer">자세히 알아보기</button>
          </div>
        </div>
        <div className="right" data-aos="fade-up" data-aos-anchor-placement="top-center">
          <img src="img/content05.png" alt="" />
        </div>
        </div>
    </div>



  </div>
  )
}

export default Main;