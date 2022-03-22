import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import "./reset.css";
import Navbar from "./components/Navbar";
import Main from "./components/pages/Main";
import FAQ from "./components/pages/FAQ";
import LogIn from "./components/pages/LogIn";
import SignUp from "./components/pages/SignUp";
import Footer from "./components/Footer";
import TermsOfUse from "./components/pages/TermsOfUse";
import Home from "./components/pages/Home";
import QA from "./components/pages/QA";
import Account from "./components/pages/Account";
import Registration from "./components/pages/Registration";
import Points from "./components/pages/Points";
import General from "./components/pages/General";
import UserGuide from "./components/pages/UserGuide";
import Information from "./components/pages/Information";

import AccManage from "./components/AccManage";
import MarketResearch from "./components/survey/MarketResearch";
import SurveyModify from "./components/survey/SurveyModify";
import AccCreate from "./components/AccCreate";
import MyPage from "./components/MyPage";

// hayeon component
import Logined_qna_article from "./components/Logined_qna_article"
import Logined_qna_regist from "./components/Logined_qna_regist"
import Loginbf_pannel1 from "./components/Loginbf_pannel1"
import Loginbf_pannel2 from "./components/Loginbf_pannel2"
import Loginbf_pannel3 from "./components/Loginbf_pannel3"


export default function App() {
  const [notLogIn, setNotLogIn] = useState(true);
  const location = useLocation();

  useEffect(()=>{
    if (location.pathname === "/log-in") {
      console.log(location.pathname);
      setNotLogIn(false)
    } else {
      setNotLogIn(true)
    }
  },[location.pathname])
  return (
    <div className="App">
    
      {notLogIn && <Navbar />}
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/Information' element={<Information />} />
            <Route path='/FAQ' element={<FAQ />} />
            <Route path='/log-in' element={<LogIn />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/terms-of-use' element={<TermsOfUse />} />
            <Route path='/home' element={<Home />} />
            <Route path='/QA' element={<QA />} />
            <Route path='/account' element={<Account />} />
            <Route path='/registration' element={<Registration />} />
            <Route path='/points' element={<Points />} />
            <Route path='/general' element={<General />} />
            <Route path='/user-guide' element={<UserGuide />} />
            <Route path="/account/manage" element={<AccManage />} />
            <Route path="/account/create" element={<AccCreate />} />
            <Route path='/registration/surveymodify' element={<SurveyModify />} />
            <Route path='/registration/marketresearch' element={<MarketResearch />} />

            {/* hayeon component */}
            <Route path="/QA/qna_article" element={<Logined_qna_article />} />
            <Route path="/QA/qna_regist" element={<Logined_qna_regist />} />
            <Route path="/log-in/search-id" element={<Loginbf_pannel1 />} />
            <Route path="/log-in/search-password" element={<Loginbf_pannel2 />} />
            <Route path="/request-pannel-certif" element={<Loginbf_pannel3 />} />
          </Routes>
      {notLogIn && <Footer />}

    </div>
  );
}
