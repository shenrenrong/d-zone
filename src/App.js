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
import AccManage from "./components/AccManage";
import MarketResearch from "./components/survey/MarketResearch";
import SurveyModify from "./components/survey/SurveyModify";
import AccCreate from "./components/AccCreate";
import MyPage from "./components/MyPage";

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
            <Route path='/surveymodify' element={<SurveyModify />} />
            <Route path='/marketresearch' element={<MarketResearch />} />
          </Routes>
      {notLogIn && <Footer />}

    </div>
  );
}
