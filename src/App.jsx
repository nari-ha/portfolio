import { useState, useEffect, useRef } from "react";
import "./App.css";
import Work from "./pages/Work";
import List from "./pages/List";
import Profile from "./pages/Profile";
import Intro from "./pages/Intro";
import Experience from "./pages/Experience";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function App() {
  const [count, setCount] = useState(0);
  let navigate = useNavigate();
  let location = useLocation();

  return (
    <>
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
                navigate("/profile");
              }}
            >
              profile
            </li>
            <li
              onClick={() => {
                navigate("/experience");
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
          <Route path="/profile" element={<Profile />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
