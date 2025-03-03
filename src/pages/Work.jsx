import List from "../pages/List";
import Card from "./Card";
import { useState } from "react";

function Work() {
  let [content, setContent] = useState(0);
  let data = [
    {
      id: 0,
      title: "hi im nari",
      detail: "this is description of the project1this is description of the project1",
    },
    {
      id: 1,
      title: "hi im asdf",
      detail: "this is description of the project2 this is description of the project2",
    },
    {
      id: 2,
      title: "hi im erer",
      detail: "this is description of the project3 this is description of the project2",
    },
    {
      id: 3,
      title: "hi sdfi",
      detail: "this is description of the project4 this is description of the project2",
    },
    {
      id: 4,
      title: "hasdsdi",
      detail: "this is description of the project15 this is description of the project2",
    },
  ];
  return (
    <>
      <div className="work-wrap">
        <div className="list">
          {data.map((e, i) => {
            return (
              <div
                onClick={() => {
                  setContent(data[i].id);
                }}
              >
                <List key={i} data={data[i]}></List>
              </div>
            );
          })}
        </div>
        <div className="section">
          <Content num={content} data={data} />
        </div>
      </div>
    </>
  );
}

export default Work;

function Content({ num, data }) {
  return (
    <>
      <div className="content">
        <div className="cotent-inner">
          <img src="" />
          <div className="content-title">{data[num].title}</div>
          <div className="content-title">{data[num].detail}</div>
        </div>
      </div>
    </>
  );
}
