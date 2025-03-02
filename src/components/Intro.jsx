import { useState, useEffect } from "react";

function Intro() {
  let tmp = "Hi, I'm Nari Ha, a Software Engineer.";
  let content = [...tmp];
  content[16] = "<br/>";

  let [text, setText] = useState("");
  let [idx, setIdx] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      if (idx < content.length) {
        setText((prev) => prev + content[idx]);
        setIdx((idx) => idx + 1);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setText("");
          setIdx(0);
        }, 2000);
      }
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, [text]);
  return (
    <>
      <div className="intro">
        <div>
          <div
            className="phrase"
            dangerouslySetInnerHTML={{
              __html: text + '<span class="typing">|</span>',
            }}
          ></div>
        </div>
        <div>
          <div className="button">
            <div style={{marginLeft: '-7px', marginTop: '-3px'}}>profile</div>
            <div className="arrow">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
