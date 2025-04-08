import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import { GiSparkles } from "react-icons/gi";
import { FaCode, FaFileDownload } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import Me from "../../assets/me.png";
import { scroller } from "react-scroll";

const AboutMe = () => {
  const titleRef = useRef();
  const infoRef = useRef();
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsTitleVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    return () => titleRef.current && observer.unobserve(titleRef.current);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInfoVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (infoRef.current) observer.observe(infoRef.current);
    return () => infoRef.current && observer.unobserve(infoRef.current);
  }, []);

  const handleProjectClick = () => {
    console.log("Hahaha");

    scroller.scrollTo("portfolio", {
      smooth: true,
      offset: -40, // Adjust this as needed for your navbar height
      duration: 800,
    });
  };

  return (
    <section>
      {/* About Title Section */}
      <div
        ref={titleRef}
        className={`about-container ${
          isTitleVisible ? "pop-in about-section" : "pop-out about-section"
        }`}
      >
        <h1 className="about-title">About Me</h1>
        <p className="about-subtitle">
          <GiSparkles className="glitter-icon" />
          Transforming ideas into digital experiences
          <GiSparkles className="glitter-icon" />
        </p>
      </div>

      {/* About Info Section */}
      <div
        ref={infoRef}
        className={`about-info ${isInfoVisible ? "slide-in" : "slide-out"}`}
      >
        <div className="my-info-heading">
          <p className="my-info-heading-1">Hello I'm</p>
          <p className="my-info-heading-2">Shubham Gavhane</p>
          <div className="info-details">
            <p className="desc">
              Software Developer with a background in Computer Engineering. I
              specialize in Front-End development and enjoy building clean,
              intuitive digital experiences. I'm passionate about turning ideas
              into scalable solutions and constantly strive for excellence in
              every project.
            </p>
          </div>
          <div className="button-group slide-target">
            <a
              href={`${import.meta.env.BASE_URL}Shubham_Gavhane.pdf`}
              download
              className="btn btn-primary attention"
            >
              <FaFileDownload style={{ marginRight: "8px" }} />
              Download CV
            </a>
            <button
              onClick={handleProjectClick}
              className="btn btn-outline attention"
            >
              <FaCode style={{ marginRight: "8px" }} />
              View Projects
            </button>
          </div>
        </div>
        <div
          className={`profile-image ${
            isInfoVisible ? "slide-in-image" : "slide-out-image"
          }`}
        >
          <img src={Me} alt="Profile" />
        </div>
      </div>

      {/* Stats Section */}
      <div
        className={`stats-section ${isInfoVisible ? "slide-in" : "slide-out"}`}
      >
        <div className="stat-card">
          <div className="stat-icon">
            <FaCode />
          </div>
          <div className="stat-info">
            <h3>TOTAL PROJECTS</h3>
            <p>Innovative web solutions crafted</p>
          </div>
          <div className="stat-value">3</div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <PiCertificateFill />
          </div>
          <div className="stat-info">
            <h3>CERTIFICATES</h3>
            <p>Professional skills validated</p>
          </div>
          <div className="stat-value">5</div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <FaGlobe />
          </div>
          <div className="stat-info">
            <h3>YEARS OF EXPERIENCE</h3>
            <p>Continuous learning journey</p>
          </div>
          <div className="stat-value">3</div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
