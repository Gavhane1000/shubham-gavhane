import React, { useEffect, useState } from "react";
import { FaCode, FaUser, FaGithub } from "react-icons/fa";
import "./LandingPage.css";

function LandingPage() {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 3000);
    return () => clearTimeout(fadeTimer);
  }, []);

  return (
    <div className={`landing ${fadeOut ? "fade-out" : ""}`}>
      <div className="icon-row">
        <div className="icon-wrapper" style={{ animationDelay: "0.1s" }}>
          <FaCode />
        </div>
        <div className="icon-wrapper" style={{ animationDelay: "0.4s" }}>
          <FaUser />
        </div>
        <div className="icon-wrapper" style={{ animationDelay: "0.7s" }}>
          <FaGithub />
        </div>
      </div>

      <h1 className="hero-heading font">
        <div className="animated-line" style={{ animationDelay: "1s" }}>
          Welcome to my
        </div>
        <div
          className="highlight-text animated-line"
          style={{ animationDelay: "1.5s", marginTop: "1rem" }}
        >
          Portfolio Website
        </div>
      </h1>
    </div>
  );
}

export default LandingPage;
