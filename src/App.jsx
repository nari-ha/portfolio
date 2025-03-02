import { useState, useEffect } from "react";
import "./App.css";
import Work from "./components/Work";
import List from "./components/List";
import Profile from "./components/Profile";
import Intro from "./components/Intro";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  let navigate = useNavigate();

  return (
    <>
      <div className="header">
        <div className="main-logo">Nari</div>
        <div className="nav-bar">
          <ul>
            <li
              title="home"
              onClick={() => {
                navigate("/");
              }}
            >
              home
            </li>
            <li
              title="profile"
              onClick={() => {
                navigate("/profile");
              }}
            >
              profile
            </li>
            <li
              title="experience"
              onClick={() => {
                navigate("/experience");
              }}
            >
              experience
            </li>
            <li
              title="work"
              onClick={() => {
                navigate("/work");
              }}
            >
              work
            </li>
            <li
              title="contact"
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
      <Routes>
        <Route path="/" element={<Intro />}></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </>
  );
}

export default App;
