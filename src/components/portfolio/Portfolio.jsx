import React, { useEffect, useRef, useState } from "react";
import "./Portfolio.css";
import { FaLaptopCode, FaCertificate, FaBriefcase } from "react-icons/fa";
import { PiStackSimpleFill } from "react-icons/pi";
import Project from "./Project";
import Img1 from "../../assets/project/1.jpg";
import Certificate from "./Certificate";
import TechStack from "./TechStack";
import Experience from "./Experience";

const Portfolio = () => {
  const titleRef = useRef();
  const tabsRef = useRef();

  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [tabsVisible, setTabsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("projects");

  useEffect(() => {
    const titleObserver = new IntersectionObserver(
      ([entry]) => setIsTitleVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (titleRef.current) titleObserver.observe(titleRef.current);
    return () => titleRef.current && titleObserver.unobserve(titleRef.current);
  }, []);

  useEffect(() => {
    const tabsObserver = new IntersectionObserver(
      ([entry]) => setTabsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (tabsRef.current) tabsObserver.observe(tabsRef.current);
    return () => tabsRef.current && tabsObserver.unobserve(tabsRef.current);
  }, []);

  const projects = [
    {
      id: "ai-chatbot",
      title: "AI ChatBot",
      description: "Conversational AI chatbot using GPT-4 and React.",
      image: Img1,
      liveDemo: "https://yourdemo.com/chatbot",
    },
    {
      id: "ecommerce-app",
      title: "E-Commerce App",
      description: "Full-stack app built with Spring Boot and PostgreSQL.",
      image: Img1,
      liveDemo: "https://yourdemo.com/ecommerce",
    },
    {
      id: "ecommerce-app-1",
      title: "E-Commerce App",
      description: "Full-stack app built with Spring Boot and PostgreSQL.",
      image: Img1,
      liveDemo: "https://yourdemo.com/ecommerce",
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "projects":
        return (
          <div
            className={`project-cards-wrapper ${
              activeTab === "projects" ? "animate-projects" : ""
            }`}
          >
            {projects.map((project) => (
              <Project key={project.id} {...project} />
            ))}
          </div>
        );
      case "certificates":
        return <div className="tab-content"><Certificate /></div>;
      case "techstack":
        return <div className="tab-content"><TechStack /></div>;
      case "experience":
        return <div className="tab-content"><Experience /></div>;
      default:
        return null;
    }
  };

  return (
    <section className="portfolio-section">
      <div
        ref={titleRef}
        className={`about-container ${
          isTitleVisible ? "pop-in about-section" : "pop-out about-section"
        }`}
      >
        <h1 className="about-title">Portfolio Showcase</h1>
        <p className="about-subtitle">
          A curated timeline of my projects, certifications, experience, and tech stack—
          <br/>
          showcasing continuous growth and hands-on expertise.
        </p>
      </div>

      <div ref={tabsRef} className="tabs-wrapper">
        <div className={`tabs ${tabsVisible ? "slide-in" : ""}`}>
          <div
            className={`tab ${activeTab === "projects" ? "active" : ""}`}
            onClick={() => setActiveTab("projects")}
          >
            <FaLaptopCode className="tab-icon" />
            <span>Projects</span>
            <div className="click-fill"></div>
          </div>
          <div
            className={`tab ${activeTab === "certificates" ? "active" : ""}`}
            onClick={() => setActiveTab("certificates")}
          >
            <FaCertificate className="tab-icon" />
            <span>Certificates</span>
            <div className="click-fill"></div>
          </div>
          <div
            className={`tab ${activeTab === "experience" ? "active" : ""}`}
            onClick={() => setActiveTab("experience")}
          >
            <FaBriefcase className="tab-icon" />
            <span>Experience</span>
            <div className="click-fill"></div>
          </div>
          <div
            className={`tab ${activeTab === "techstack" ? "active" : ""}`}
            onClick={() => setActiveTab("techstack")}
          >
            <PiStackSimpleFill className="tab-icon" />
            <span>Tech Stack</span>
            <div className="click-fill"></div>
          </div>
        </div>
      </div>

      <div
        key={activeTab}
        className={`tab-content-wrapper ${
          tabsVisible ? "slide-in" : ""
        } slide-left`}
      >
        {renderContent()}
      </div>
    </section>
  );
};

export default Portfolio;

// 