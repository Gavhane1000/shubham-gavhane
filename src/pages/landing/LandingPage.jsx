import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCode, FaUser, FaGithub } from "react-icons/fa";
import "./LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 3000);
    const navigateTimer = setTimeout(() => navigate("/home"), 4500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(navigateTimer);
    };
  }, [navigate]);

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
