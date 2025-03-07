
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
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
      console.log(hasScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
  }, []);

  return (
    <>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <Header isMobile={isMobile} navigate={navigate} hasScrolled={hasScrolled}/>
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
