import { useState, useCallback } from "react";
import "./styles/Work.css";
// If WorkImage is just an <img>, you can replace it with <img src={image} />
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward, MdLaunch } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Nivaran: Govt Compliance AI",
    category: "ML & NLP Governance Architect",
    tools: ["YOLOv11", "NLP", "DBSCAN", "Python", "FastAPI"],
    description: "An automated triage system for civic grievances using unsupervised clustering and multi-class classification to optimize government SLA response times.",
    image: "/images/p1.png",
    liveLink: "https://nivaran-ai.vercel.app/",
    github: "https://github.com/Rajshree-Dandge/Gov_Complaint_Intell",
  },
  {
    title: "FinSim: Banking Engine",
    category: "Fintech & ACID Systems",
    tools: ["Java", "Spring Boot", "PostgreSQL", "Docker", "WebClient"],
    description: "A production-grade financial simulator ensuring ACID compliance for multi-threaded transactions, integrated with an AI-driven fraud detection layer.",
    image: "/images/p2.png",
    liveLink: "https://fin-sim.onrender.com",
    github: "https://github.com/Sakshi13-05/FIN-SIM",
  },
  {
    title: "MediGo Search Engine",
    category: "MERN Stack Optimization",
    tools: ["React", "Node.js", "MongoDB Atlas", "Express"],
    description: "High-performance medical search engine achieving sub-200ms retrieval using compound indexing and fuzzy search logic.",
    image: "/images/p3.png",
    liveLink: "https://medi-go-web-app-azdf.vercel.app/",
    github: "https://github.com/Sakshi13-05/MediGoWebApp",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const goToPrev = () => goToSlide(currentIndex === 0 ? projects.length - 1 : currentIndex - 1);
  const goToNext = () => goToSlide(currentIndex === projects.length - 1 ? 0 : currentIndex + 1);

  return (
    <section className="work-section" id="work">
      <div className="work-container section-container">
        <h2 className="work-title">Featured <span>Projects</span></h2>

        <div className="carousel-wrapper">
          <div className="carousel-track-container">
            <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="project-card">

                    <div className="project-content">
                      <span className="project-number">0{index + 1}</span>
                      <h4 className="project-category">{project.category}</h4>
                      <h3 className="project-title-text">{project.title}</h3>
                      <p className="project-description">{project.description}</p>

                      <div className="project-tools">
                        {project.tools.map((tool, i) => (
                          <span key={i} className="tool-tag">{tool}</span>
                        ))}
                      </div>

                      <div className="project-actions">
                        <a href={project.liveLink} target="_blank" rel="noreferrer" className="btn-primary">
                          Live Demo <MdLaunch />
                        </a>
                        <a href={project.github} target="_blank" rel="noreferrer" className="btn-outline">
                          View Code <FaGithub />
                        </a>
                      </div>
                    </div>

                    <div className="project-image-container">
                      <div className="image-browser-mockup">
                        <div className="browser-dots"><span></span><span></span><span></span></div>
                        <WorkImage image={project.image} alt={project.title} />
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="nav-controls">
            <button className="nav-btn" onClick={goToPrev}><MdArrowBack /></button>
            <div className="nav-dots">
              {projects.map((_, i) => (
                <span key={i} className={`dot ${i === currentIndex ? "active" : ""}`} onClick={() => goToSlide(i)} />
              ))}
            </div>
            <button className="nav-btn" onClick={goToNext}><MdArrowForward /></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;