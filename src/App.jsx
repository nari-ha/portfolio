import { useState, useEffect } from "react";
import "./App.css";
import Work from "./pages/Work";
import Profile from "./pages/Profile";
import Intro from "./pages/Intro";
import Experience from "./pages/Experience";

import Side from "./components/Side";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import WorkMobile from "./pages/WorkMobile";

function App() {
  let navigate = useNavigate();
  let isMobile = useMediaQuery({ maxWidth: 768 });
  let [side, setSide] = useState(false);

  useEffect(() => {
    isMobile ? setSide(false) : setSide(true);
  }, [isMobile]);

  return (
    <>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="header">
        <div
          onClick={() => {
            setSide(!side);
          }}
          className={`ham-btn ${side ? "active" : ""}`}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="main-logo">Nari</div>
        {side == true ? (
          <Side
            isMobile={isMobile}
            side={side}
            navigate={navigate}
            setSide={setSide}
          />
        ) : null}
      </div>

      <div className="page">
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/about" element={<Profile />} />
          <Route path="/exp" element={<Experience />} />
          <Route path="/work" element={!isMobile ? <Work /> : <WorkMobile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
