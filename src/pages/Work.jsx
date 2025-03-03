import List from "../pages/List";
import Card from "./Card";
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
                    handleClick(data[i].id)
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
          <img className="content-image" src={data[id].img} />
          <div className="content-title">{data[id].title}</div>
          <div className="content-title">{data[id].detail}</div>
        </div>
      </div>
    </>
  );
}
