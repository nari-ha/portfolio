import "./App.css";
import Header from "./components/Header";
import Work from "./pages/Work";
import Profile from "./pages/Profile";
import Intro from "./pages/Intro";
import Experience from "./pages/Experience";
import WorkMobile from "./pages/WorkMobile";
import { useState, useEffect } from "react";

import { Routes, Route, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function App() {
  let navigate = useNavigate();
  let isMobile = useMediaQuery({ maxWidth: 768 });
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const page = document.querySelector(".page");

    if (!page) {
      return;
    }

    // console.log("📏 page.clientHeight:", page.clientHeight);
    // console.log("📜 page.scrollHeight:", page.scrollHeight);
    // console.log("📍 page.offsetHeight:", page.offsetHeight);

    const Scroll = () => {
      setScroll(page.scrollTop > 0);
    };

    page.addEventListener("scroll", Scroll);

    return () => {
      page.removeEventListener("scroll", Scroll);
    };
  }, []);

  return (
    <>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <Header isMobile={isMobile} navigate={navigate} scroll={scroll} />
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
