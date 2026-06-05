import React from "react";

const myTech = [
  { name: "Java", url: "/images/java.png" },
  { name: "Spring", url: "/images/spring.png" },
  { name: "Python", url: "/images/py.jpg" },
  { name: "MongoDB", url: "/images/mongo.png" },
  { name: "MySQL", url: "/images/sql.webp" },
  { name: "Node.js", url: "/images/node.png" },
  { name: "React", url: "/images/react.png" },
  { name: "Docker", url: "/images/docker.png" },
  { name: "Express", url: "/images/ex.png" },
  { name: "Machine Learning", url: "/images/ml.png" },
  { name: "Rest API", url: "/images/rest.png" },
];

const TechStack = () => {
  return (
    <section className="techstack-section" style={{
      padding: "80px 20px",
      background: "#000",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      {/* Heading */}
      <h2 style={{
        color: "#fff",
        fontSize: "2.5rem",
        textTransform: "uppercase",
        letterSpacing: "8px",
        marginBottom: "60px",
        textAlign: "center"
      }}>
        Technical <span style={{ color: "#00d2ff" }}>Stack</span>
      </h2>

      {/* Grid Container */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
        gap: "30px",
        width: "100%",
        maxWidth: "1000px",
      }}>
        {myTech.map((tech) => (
          <div
            key={tech.name}
            style={{
              background: "#1a1a1a", // Dark grey card
              border: "1px solid #333",
              borderRadius: "12px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              transition: "transform 0.2s ease"
            }}
          >
            {/* The Image - Guaranteed Sharp */}
            <img
              src={tech.url}
              alt={tech.name}
              style={{
                width: "60px",
                height: "60px",
                objectFit: "contain", // Prevents stretching
                marginBottom: "15px",
                filter: "drop-shadow(0px 0px 5px rgba(255,255,255,0.1))" // Subtle lift
              }}
            />

            {/* The Text - Perfectly Readable */}
            <p style={{
              color: "#fff",
              fontSize: "0.9rem",
              fontWeight: "600",
              margin: 0,
              textAlign: "center",
              letterSpacing: "1px"
            }}>
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;