import { useState, useEffect } from "react";

function Profile() {
  return (
    <>
      <div className="component-wrap">
        <div className="component">
          <div className="component-inner left">
            <div className="text title">PROFILE</div>
            {/* <div className="profile-photo"></div> */}
            <div className="photo-frame">
              <img className="profile-photo" src="/images/capybara.jpg" />
            </div>
          </div>
          <div className="component-inner right">
            <div className="profile text">
              <p className="text body">
                I am a Software Engineer with 3 years of experience,
                participated in a web development project as a full-stack
                developer. Holding a degree in Machine Learning and currently
                working as a Research Assistant, conducting research in the
                field of Computer Vision for the past year while staying updated
                with the latest AI technologies.
              </p>
              <br/>
              <p className="text heading">SKILLS</p>
              <p className="text body">
                Programming Languages: Python, React.js, JavaScript, Java,
                C/C++, Kotlin, etc.
              </p>
              <p className="text body">
                Machine Learning & AI: PyTorch, OpenCV, TensorFlow, etc.
              </p>
              <p className="text body">
                Tools & Others: Git, SQL, Linux, HTML, CSS etc.
              </p>
              <p className="text heading">LANGUAGE</p>
              <p className="text body">Korean: native</p>
              <p className="text body">English: fluent</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Profile;
