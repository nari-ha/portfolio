import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function Button(props) {
  let [tran, setTran] = useState("");
  let navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => setTran("show"), 600);
  }, []);
  return (
    <>
      <div
        onClick={() => {
            navigate("/"+props.link);
        }}
        className={`link-button ${tran} ${props.link}`}
      >
        <div className="btn text">{props.link}</div>
        <div className="arrow">
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
}
export default Button;
