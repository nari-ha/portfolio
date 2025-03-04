import { useState, useEffect, useRef } from "react";
import "./App.css";
import Work from "./pages/Work";
import Profile from "./pages/Profile";
import Intro from "./pages/Intro";
import Experience from "./pages/Experience";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  let navigate = useNavigate();
  let location = useLocation();

  return (
    <>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

      <div className="header">
        <div className="main-logo">Nari</div>
        <div className="nav-bar">
          <ul>
            <li
              onClick={() => {
                navigate("/");
              }}
            >
              home
            </li>
            <li
              onClick={() => {
                navigate("/about");
              }}
            >
              about
            </li>
            <li
              onClick={() => {
                navigate("/exp");
              }}
            >
              experience
            </li>
            <li
              onClick={() => {
                navigate("/work");
              }}
            >
              work
            </li>
            <li
              onClick={() => {
                navigate("/contact");
              }}
            >
              contact
            </li>
          </ul>
        </div>
        <div className="links">
          <ul>
            <li className="ig">
              <a href="https://www.linkedin.com/in/narihanar/">
                <img src="/images/li-logo.svg" />
              </a>
            </li>
            <li className="gh">
              <a href="https://github.com/nari-ha">
                <img src="/images/gh-logo.svg" />
              </a>
            </li>
            <li className="li">
              <img src="/images/ig-logo.svg" />
            </li>
          </ul>
        </div>
      </div>

      <div className="page">
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/about" element={<Profile />} />
          <Route path="/exp" element={<Experience />} />ㅊ
          <Route path="/work" element={<Work />} />ㅊ
        </Routes>
      </div>
    </>
  );
}

export default App;
