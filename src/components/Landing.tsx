import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <div className="landing-wrapper"> {/* unified background */}
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              ZANIX
              <br />
            </h1>
          </div>

          <div className="landing-info">
            <h3>A Creative</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">UI/UX</div>
              <div className="landing-h2-2">FRONTEND</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Designer</div>
              <div className="landing-h2-info-1">Developer</div>
            </h2>
          </div>
        </div>
      </div>

      {/* Children will sit inside the same black background */}
      <div className="landing-children">{children}</div>
    </div>
  );
};

export default Landing;
