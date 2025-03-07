import { useState, useEffect } from "react";

function Side({ navigate, setSide, side, isMobile }) {
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
                  isMobile?setSide(false):null;
                }}
              >
                home
              </li>
              <li
                onClick={() => {
                  navigate("/about");
                  isMobile?setSide(false):null;
                }}
              >
                about
              </li>
              <li
                onClick={() => {
                  navigate("/exp");
                  isMobile?setSide(false):null;
                }}
              >
                experience
              </li>
              <li
                onClick={() => {
                  navigate("/work");
                  isMobile?setSide(false):null;
                }}
              >
                work
              </li>
              <li
                onClick={() => {
                  navigate("/contact");
                  isMobile?setSide(false):null;
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
