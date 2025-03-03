import { useState, useEffect } from "react";

function Experience() {
  let [tran, setTran] = useState("");
  useEffect(() => {
    setTimeout(() => setTran("show"), 100);
  }, []);
  return (
    <>
      <div className={`component-wrap ${tran}`}>
        <div className="exp component">
          <div className="component-inner left">
            <div className="work-title text title">WORK EXPERIENCE</div>
            <div className="work-detail text body">
              <p className="">Queen Mary, University of London</p>
              <p>Research Assistant</p>
              <p className="">Lotte Innovate Co Ltd</p>
              <p>Software Engineer</p>
              <p>Bluestream Corporation</p>
              <p>Front-end Developer</p>
              <p>KU Human Computer Interaction Lab</p>
              <p>Undergraduate Internship</p>
            </div>
          </div>
          <div className="component-inner right">
            <div className="edu-title text title">EDUCATION</div>
            <div className="edu-detail text body">
              <p>Queen Mary, University of London</p>
              <p>MSc in Machine Learning for Visual Data Analytics</p>
              <p>Aug 2023 - Dec 2024</p>
              <br />
              <p></p>
              <p>Konkuk University &#40;Seoul, South Korea&#41;</p>
              <p>BS in Software Engineering</p>
              <p>Mar 2016 - Aug 2020</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
