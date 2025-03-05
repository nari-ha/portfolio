import { useState, useEffect } from "react";
function List({ data, setIdx, setOpen, setShow, isMobile }) {
  let [tran, setTran] = useState("fade");
  let [work, setWork] = useState(data);
  useEffect(() => {
    if (isMobile) setTran("show");
  }, []);
  return (
    <>
      <div className={`list ${tran}`}>
        {work.map((e, i) => {
          return (
            <div
              key={i}
              onClick={() => {
                setIdx(work[i].id);
                setOpen(false);
                setShow(true);
              }}
              className="card-wrapper"
            >
              <Card key={i} data={work[i]} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default List;

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
