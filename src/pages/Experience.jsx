import { useState, useEffect } from "react";
import data from "../exp.jsx";

function Experience() {
  let [exp, setExp] = useState(data);
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
            <div className="work-detail text body pl10">
              {exp.map((e, i) => {
                return <Block exp={exp[i]} key={i}></Block>;
              })}
            </div>
          </div>
          <div className="component-inner right">
            <div className="edu-title text title">EDUCATION</div>
            <div className="edu-detail text body pl10">
              <p className="fb">Queen Mary, University of London</p>
              <p className="mb5">MSc in Machine Learning for Visual Data Analytics</p>
              <p className="text date mb20">Aug 2023 - Dec 2024</p>
              <p className="fb">
                Konkuk University &#40;Seoul, South Korea&#41;
              </p>
              <p className="mb5">BS in Software Engineering</p>
              <p className="text date mb20">Mar 2016 - Aug 2020</p>
              <p className="fb">
                International House London 
              </p>
              <p className="mb5">Certificated in Language School</p>
              <p className="text date mb10">Jan 2023 - Jun 2023</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Block({ exp }) {
  return (
    <>
      <p className="fb">{exp.company}</p>
      <p className="">{exp.job}</p>
      <p className="jd mb5">{exp.des}</p>
      <p className="text date mb10">{exp.date}</p>
    </>
  );
}

export default Experience;
