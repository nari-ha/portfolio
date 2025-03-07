import Side from "./Side";
import { useState, useEffect } from "react";

function Header({ isMobile, navigate, scroll }) {
  let [side, setSide] = useState(false);

  useEffect(() => {
    isMobile ? setSide(false) : setSide(true);
  }, [isMobile]);
  return (
    <>
      <div className={`header ${scroll ? "scroll" : ""}`}>
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
            side={side}
            navigate={navigate}
            setSide={setSide}
            isMobile={isMobile}
          />
        ) : null}
      </div>
    </>
  );
}

export default Header;