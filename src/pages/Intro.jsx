import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Intro() {
  let navigate = useNavigate();
  let tmp = "Hi, I'm Nari Ha, a Software Engineer.";
  let content = [...tmp];
  content[16] = "<br/>";

  let [text, setText] = useState("");
  let [idx, setIdx] = useState(0);
  let [tran, setTran] = useState("");

  useEffect(() => {
    setTimeout(() => setTran("show"), 100);
  }, []);
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
  }, [text, content, idx]);
  
  return (
    <>
        <div className="intro">
          <div className="phrase-wrap">
            <div
              className="phrase"
              dangerouslySetInnerHTML={{
                __html: text + '<span class="typing">|</span>',
              }}
            ></div>
          </div>
          <div>
            <div
              className={`button ${tran}`}
              onClick={() => {
                navigate("/about");
              }}
            >
              <div style={{ marginLeft: "-7px", marginTop: "-4px" }}>
                profile
              </div>
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
