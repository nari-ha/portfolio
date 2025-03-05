import List from "../components/List.jsx";
import { useState, useEffect } from "react";
import { useMediaQuery, MediaQuery } from "react-responsive";
import data from "../data.jsx";
import Content from "../components/Content.jsx";

function WorkMobile() {
  let [idx, setIdx] = useState(0);
  let [work, setWork] = useState(data);
  let [show, setShow] = useState(false); // 
  let [open, setOpen] = useState(true); //

  //   let click = (id) => {
  //     setShow(false); // 먼저 Content를 언마운트

  //     setTimeout(() => {
  //       setIdx(id); // 새로운 id 설정
  //       setShow(true); // 일정 시간 후 다시 Content 마운트
  //     }, 200); // 200ms 딜레이 후 마운트
  //   };

  return (
    <>
      <div className="work-wrap">
        {open == true ? (
          <List
            data={data}
            isMobile={true}
            setOpen={setOpen}
            setShow={setShow}
            setIdx={setIdx}
          />
        ) : null}
        <div className="section">
          {show && (
            <Content
              id={idx}
              data={data}
              isMobile={true}
              setOpen={setOpen}
              setShow={setShow}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default WorkMobile;
