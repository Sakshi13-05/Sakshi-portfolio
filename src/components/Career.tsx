import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>3rd Year BE in Computer Engineering (9+ CGPA)</h4>
                <h5>Education</h5>
              </div>
              <h3>Current</h3>
            </div>
            <p>
              Previously completed 12th from RV Nerurkar High School (88% - 2023) and 10th from Don Bosco High School (91% - 2021).
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SDE Intern</h4>
                <h5>Saphire Infocom Pvt Ltd</h5>
              </div>
              <h3>Recent</h3>
            </div>
            <p>
              Focused on Backend development, designing scalable APIs and optimizing database queries for high-performance applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SDE Intern</h4>
                <h5>Sudesh Education</h5>
              </div>
              <h3>Earlier</h3>
            </div>
            <p>
              Collaborated on software solutions, assisted in feature implementation, and solved key architectural challenges.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sponsorship Head & Awards</h4>
                <h5>Avalon Committee</h5>
              </div>
              <h3>Achievements</h3>
            </div>
            <p>
              Led sponsorship drives. Received the Academic Excellence Award and successfully solved 400+ LeetCode problems demonstrating strong algorithmic problem-solving skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
