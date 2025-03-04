import List from "../components/List.jsx";
import { useState, useEffect } from "react";
import data from "../data.jsx";

function Work() {
  let [idx, setIdx] = useState(0);
  let [work, setWork] = useState(data);
  let [showContent, setShowContent] = useState(true); // Content 표시 여부

  const handleClick = (newId) => {
    setShowContent(false); // 먼저 Content를 언마운트

    setTimeout(() => {
      setIdx(newId); // 새로운 id 설정
      setShowContent(true); // 일정 시간 후 다시 Content 마운트
    }, 300); // 200ms 딜레이 후 마운트
  };

  return (
    <>
      <div className="work-wrap">
        <div className="list">
          {work.map((e, i) => {
            return (
              <div
                key={i}
                onClick={() => {
                  handleClick(data[i].id);
                }}
                className="card-wrapper"
              >
                <List key={i} data={work[i]}></List>
              </div>
            );
          })}
        </div>
        <div className="section">
          {showContent && <Content id={idx} data={data} />}
        </div>
      </div>
    </>
  );
}

export default Work;

function Content({ id, data }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 10);
  }, []);

  return (
    <>
      <div className={`content ${isVisible ? "open" : ""}`}>
        <div className="content-inner">
          <div className="post">
            <div className="content-title text title">{data[id].title}</div>
            <div className="img-wrap">
              <img className="content-image" src={data[id].img} />
            </div>
            <div className="content-detail text body">{data[id].detail}</div>
            <div className="text heading">
              {data[id].type == "research" ? "STUDY AREA" : "USED SKILLS"}
            </div>
            <div className="text body mb20">{data[id].skills}</div>
            {
              data[id].github !== "" ? <Button url={data[id].github}/> : null
            }
            <div className="h30"></div>
          </div>
        </div>
      </div>
    </>
  );
}

function Button(props) {
  let [tran, setTran] = useState("");
  useEffect(() => {
    setTimeout(() => setTran("show"), 500);
  }, []);
  return (
    <>
    <div onClick={()=>{window.open(`${props.url}`, "_blank")}} className={`github-button ${tran}`}>
      <div className="btn text">go</div>
      <div className="arrow">
        <span></span>
        <span></span>
      </div>
    </div>
    </>
  )
}