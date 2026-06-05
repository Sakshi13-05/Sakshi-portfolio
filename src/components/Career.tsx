import "./styles/Career.css";

const Career = () => {
  const journey = [
    {
      role: "SDE Intern (Infosys Springboard)",
      organization: "Infosys",
      period: "Current",
      type: "Experience",
      description: "Selected as a AI Engineer Intern at Infosys Springboard."
    },
    {
      role: "Software Developer Intern",
      organization: "Sapphire Infocom Pvt Ltd",
      period: "Recent",
      type: "Experience",
      description: "Optimized React/Node.js applications, reducing API latency by 22%. Implemented secure Role-Based Access Control (RBAC) and participated in Agile design reviews for B2B tools."
    },
    {
      role: "GirlScript Summer of Code (GSSoC) '26",
      organization: "Open Source Contributor",
      period: "2026",
      type: "Achievement",
      description: "Active contributor to open-source AI and Web architectures. Collaborating with global developers to build scalable solutions and improving codebase efficiency."
    },
    {
      role: "3rd Year B.Tech in Computer Science",
      organization: "Terna Engineering College, Navi Mumbai",
      period: "2023 - Present",
      type: "Education",
      description: "Ranked 2nd in the Department with a 9.68/10.0 CGPA. Focused on Multi-modal AI, Scalable Backend Systems, and Data Structures."
    },
    {
      role: "Problem Solving & Leadership",
      organization: "LeetCode & Avalon",
      period: "Milestones",
      type: "Achievement",
      description: "Solved 60+ LeetCode problems (Specialist in Arrays, DP, and Graph Algorithms). Led the Avalon Festival as Sponsorship Head, managing corporate outreach."
    }
  ];

  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2 className="section-title">
          Professional <span>&</span>
          <br /> Academic Journey
        </h2>

        <div className="career-info">
          {/* Vertical Timeline Line */}
          <div className="career-timeline">
            <div className="timeline-line"></div>
          </div>

          <div className="career-info-box-container">
            {journey.map((item, index) => (
              <div className="career-info-box" key={index}>
                <div className="career-info-in">
                  <div className="career-role">
                    <h4>{item.role}</h4>
                    <h5>{item.organization}</h5>
                  </div>
                  <h3 className={`period-tag ${item.period === "Current" ? "active" : ""}`}>
                    {item.period}
                  </h3>
                </div>
                <p>{item.description}</p>
                <span className="category-label">{item.type}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;