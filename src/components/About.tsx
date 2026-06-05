import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      {/* Added the section-container here to apply your CSS widths */}
      <div className="section-container">
        <div className="about-me">
          <h3 className="title">About Me</h3>
          <p className="para">
            Software Developer passionate about building scalable,
            high-performance backend systems. Currently in my 3rd year of Computer Engineering
            with a 9+ CGPA, I focus on creating optimized architectures that solve real-world compliance
            and financial challenges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;