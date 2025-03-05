import List from "../components/List.jsx";
import { useState, useEffect } from "react";
import { useMediaQuery, MediaQuery } from "react-responsive";
import data from "../data.jsx";
import Content from "../components/Content.jsx";

function Work() {
  let [idx, setIdx] = useState(0);
  let [work, setWork] = useState(data);
  let [show, setShow] = useState(true); // Content 표시 여부

  let click = (id) => {
    setShow(false); // 먼저 Content를 언마운트

    setTimeout(() => {
      setIdx(id); // 새로운 id 설정
      setShow(true); // 일정 시간 후 다시 Content 마운트
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
                  click(work[i].id);
                }}
                className="card-wrapper"
              >
                <Card key={i} data={work[i]} />
              </div>
            );
          })}
        </div>
        <div className="section">
          {show && <Content id={idx} data={work} />}
        </div>
      </div>
    </>
  );
}

export default Work;

function Card(props) {
  return (
    <>
      <div className="card">
        <div className="card-inner">
          <div className="card-title">{props.data.title}</div>
          <div className="card-detail">{props.data.summary}</div>
        </div>
      </div>
    </>
  );
}