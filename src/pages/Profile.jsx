function Profile() {
  return (
    <>
      <div className="component-wrap">
        <div className="component">
          <div className="component-inner left">
            <div className="photo"></div>
            {/* <img className="photo" src="/images/capybara.jpg"/> */}
          </div>
          <div className="component-inner right">
            <div className="profile text">
            <p>Hello</p>
            <p>My name is Nari Ha, born in Seoul, based in London.</p>
            <p>This is picture of Capybara.</p>
            <p className="text title">SKILLS</p>
            <p className="text body">Programming Languages: Python, React.js, JavaScript, Java, C/C++, Kotlin, etc.</p>
            <p className="text body">Machine Learning & AI: PyTorch, OpenCV, TensorFlow, etc.</p>
            <p className="text body">Tools & Others: Git, SQL, Linux, HTML, CSS etc.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Profile;
