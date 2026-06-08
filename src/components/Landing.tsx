import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children, isMobile }: PropsWithChildren<{ isMobile?: boolean }>) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="landing-intro">
            <h2>Hii! I'm</h2>
            <h1>
              SAKSHI
              <br />
              <span>CHAVAN</span>
            </h1>
          </div>

          <div className="landing-info">
            <h3>I engineer scalable backend systems</h3>
            {/* FIX: Simplified div structure to allow CSS wrapping to work */}
            <h2 className="landing-info-h2">
              and high-performance architectures.
            </h2>
          </div>
        </div>
        {!isMobile ? children : (
          <div className="mobile-fallback-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.1, background: 'linear-gradient(to bottom, #00d2ff, #8b5cf6)' }} />
        )}
      </div>
    </>
  );
};

export default Landing;
