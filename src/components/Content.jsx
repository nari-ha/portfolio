import { useState, useEffect } from "react";
import { useMediaQuery, MediaQuery } from "react-responsive";
import data from "../data.jsx";

function Content({ id, data, isMobile, setOpen, setShow }) {
  const [isVisible, setIsVisible] = useState(false);
  let [tran, setTran] = useState("open");
  let [load, setLoad] = useState(false);

  useEffect(() => {
    if (isMobile) setTran("show");
    setTimeout(() => setIsVisible(true), 10);
    setTimeout(() => setLoad(true), 500);
  }, []);

  return (
    <>
      <div className={`content ${isVisible ? tran : ""}`}>
        <div className={"content-inner"}>
          {isMobile ? (
            <div
              className="back-btn"
              onClick={() => {
                setOpen(true);
                setShow(false);
              }}
            >
              <span></span>
              <span></span>
            </div>
          ) : null}
          <div className={`post ${load ? "load" : ""}`}>
            <div className="content-title text title">{data[id].title}</div>
            <div className="img-wrap">
              <img className="content-image" src={data[id].img} />
            </div>
            <div className="content-detail text body">{data[id].detail}</div>
            <div className="text heading">
              {data[id].type == "research" ? "STUDY AREA" : "USED SKILLS"}
            </div>
            <div className="text body mb20">{data[id].skills}</div>
            {data[id].github !== "" ? <Button url={data[id].github} /> : null}
            <div className="h30"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;

function Button(props) {
  let [tran, setTran] = useState("");
  useEffect(() => {
    setTimeout(() => setTran("show"), 500);
  }, []);
  return (
    <>
      <div
        onClick={() => {
          window.open(`${props.url}`, "_blank");
        }}
        className={`github-button ${tran}`}
      >
        <div className="btn text">go</div>
        <div className="arrow">
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
}
