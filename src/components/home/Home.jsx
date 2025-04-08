import React from "react";
import "./Home.css";
import { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import CodingImg from "../../assets/coding.svg";
import { scroller } from "react-scroll";

const Home = () => {
  const sentences = [
    "Crafting beautiful UI with precision.",
    "Responsive designs, pixel-perfect results.",
    "Turning ideas into interactive experiences.",
    "Bringing life to code with animations.",
  ];
  const techStack = ["Spring Boot","Vue.js", "Flask", "React"];

  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const sentence = sentences[currentSentenceIndex];
    let typingSpeed = isDeleting ? 60 : 120;

    const timer = setTimeout(() => {
      if (isDeleting) {
        setDisplayText((prev) => prev.slice(0, -1));
      } else {
        setDisplayText(sentence.slice(0, displayText.length + 1));
      }

      if (!isDeleting && displayText === sentence) {
        setTimeout(() => setIsDeleting(true), 1500); // pause before deleting
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentSentenceIndex((prev) => (prev + 1) % sentences.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentSentenceIndex]);

  const handleProjectClick = () => {
    console.log("Hahaha");

    scroller.scrollTo("portfolio", {
      smooth: true,
      offset: -40, // Adjust this as needed for your navbar height
      duration: 800,
    });
  };

  const handleContactClick = () => {
    scroller.scrollTo("contact", {
      smooth: true,
      offset: -40,
      duration: 800,
    });
  };

  return (
    <div className="home">
      <div className="left">
        <div className="heading">
          <span className="heading-1">Full-Stack</span>
          <br />
          <span className="heading-2">Developer</span>
        </div>
        <br />
        <h2 className="typewriter">
          {displayText}
          <span className="cursor">|</span>
        </h2>
        <span className="sentence">
          Innovative solutions. Functional designs. Seamless user experiences.
        </span>
        <div className="techstack">
          {techStack.map((tech, index) => (
            <span className="techstack-name" key={index}>
              {tech}
            </span>
          ))}
        </div>
        <div className="button-wrapper">
          <button onClick={handleProjectClick} className="glow-btn">
            Projects <span className="icon">↗</span>
          </button>
          <button onClick={handleContactClick} className="glow-btn">
            Contact <span className="icon">✉</span>
          </button>
        </div>
        <div className="social-icons">
          <a
            href="https://github.com/Gavhane1000"
            className="icon-btn"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/shubham-gavhane1080"
            className="icon-btn"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="mailto:shubhamgavhanework@gmail.com" className="icon-btn">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
      <div className="lottie-container">
        <img src={CodingImg} loop autoPlay />
      </div>
    </div>
  );
};

export default Home;
