import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
function Side({ navigate, setSide, side }) {
  let [tran, setTran] = useState("");
  useEffect(() => {
    setTran("open")
  }, [side]);
  return (
    <>
      <>
        <div className={`side-bg ${tran}`}></div>
        <div className={`side ${tran}`}>
          <div className="nav-bar">
            <ul>
              <li
                onClick={() => {
                  navigate("/");
                  setSide(false);
                }}
              >
                home
              </li>
              <li
                onClick={() => {
                  navigate("/about");
                  setSide(false);
                }}
              >
                about
              </li>
              <li
                onClick={() => {
                  navigate("/exp");
                  setSide(false);
                }}
              >
                experience
              </li>
              <li
                onClick={() => {
                  navigate("/work");
                  setSide(false);
                }}
              >
                work
              </li>
              <li
                onClick={() => {
                  navigate("/contact");
                  setSide(false);
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
      </>
    </>
  );
}

export default Side;
