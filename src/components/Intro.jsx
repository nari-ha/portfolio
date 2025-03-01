import { useState, useEffect } from 'react';

function Intro() {
    let tmp = "Hi, I'm Nari Ha, a Software Engineer.";
    let content = [...tmp];
    content[16] = "<br/>";

    let [text, setText] = useState('');
    let [idx, setIdx] = useState(0);


    useEffect (()=> {
        let interval = setInterval(()=> {
            if (idx < content.length) {
                setText((prev)=> prev + content[idx]);
                setIdx((idx)=> idx + 1);
            } else {
                clearInterval(interval);
                setTimeout(()=> {
                    setText("");
                    setIdx(0);
                }, 2000);
            }
        }, 100);
        return () => {
            clearInterval(interval);
        }
    }, [text]);
    return (
        <>
        <div className="intro">
        <span dangerouslySetInnerHTML={{ __html: text + '<span class="typing">|</span>' }}></span>
        </div>
        </>
    )
}

export default Intro