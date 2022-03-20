import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import MarketResearch from "./components/survey/MarketResearch";
import SurveyModify from "./components/survey/SurveyModify";

export default function App() {
  return (
    <div className="App">

          <Navbar />
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
            <Route path='/surveymodify' element={<SurveyModify />} />
            <Route path='/marketresearch' element={<MarketResearch />} />
          </Routes>
          <Footer />
    </div>
  );
}
