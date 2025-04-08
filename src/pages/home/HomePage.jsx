import React from "react";
import NavBar from "../../components/nav/NavBar";
import "./HomePage.css";
import Home from "../../components/home/home";
import About from "../../components/about/About";
import Portfolio from "../../components/portfolio/Portfolio";
import Contact from "../../components/contact/Contact";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <section id="home" className="section" >
        <Home />
      </section>
      <section id="about" className="section">
        <About />
      </section>
      <section id="portfolio" className="section">
        <Portfolio />
      </section>
      <section id="contact" className="section">
        <Contact />
      </section>
    </>
  );
};

export default HomePage;
