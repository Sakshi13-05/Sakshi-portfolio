import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="section-container">
        <div className="about-me">
          <h3 className="title">About Me</h3>
          <p className="para">
            Software Developer passionate about building scalable, <br />
            <span style={{ color: "var(--accentColor)", display: "inline-block" }}>
              high-performance
            </span>{" "}
            backend systems. Currently in my 3rd year of Computer Engineering
            with a 9+ CGPA, I focus on creating optimized architectures that solve real-world compliance
            and financial challenges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;