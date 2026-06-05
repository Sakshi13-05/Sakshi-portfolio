import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
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
        {children}
      </div>
    </>
  );
};

export default Landing;
