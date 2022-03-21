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
import PanelSystem from "./components/PanelSystem/PanelSystem";
import PointOverview from "./components/PointOverview/PointOverview";
import PointBoard2 from "./components/PointOverview/PointBoard2";
import SurveyOverview from "./components/SurveyOverview/SurveyOverview";
import PointInfo from "./components/PointInfo/PointInfo";
import PanelSystemInfo from "./components/PanelSystemInfo/PanelSystemInfo";
import SurveyInfo from "./components/SurveyInfo/SurveyInfo";
import Join1 from "./components/Join1/Join1";
import Join2_1 from "./components/Join2_1/Join2_1";
import Join2_2 from "./components/Join2_2/Join2_2";
import Join3 from "./components/Join3/Join3";


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
            <Route path='/panel-system' element={<PanelSystem />} />
            <Route path='/point-overview' element={<PointOverview />}>
              {/* <Route path='/2' element={<PointBoard2 />} /> */}
            </Route>
            <Route path='/survey-overview' element={<SurveyOverview />} />
            <Route path='/point-info' element={<PointInfo />} />
            <Route path='/panelsystem-info' element={<PanelSystemInfo />} />
            <Route path='/survey-info' element={<SurveyInfo />} />

            <Route path='/join1' element={<Join1 />} />
            <Route path='/join2_1' element={<Join2_1 />} />
            <Route path='/join2_2' element={<Join2_2 />} />
            <Route path='/join3' element={<Join3 />} />
          </Routes>
          <Footer />
    </div>
  );
}
