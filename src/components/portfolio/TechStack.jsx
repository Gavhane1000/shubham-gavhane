import React from "react";
import "./TechStack.css";
import Vue from "../../assets/techstack/vuejs.svg";
import Spring from "../../assets/techstack/spring.svg";
import java from "../../assets/techstack/java.svg";
import react from "../../assets/techstack/reactjs.svg";
import css from "../../assets/techstack/css.svg";
import html from "../../assets/techstack/html.svg";
import python from "../../assets/techstack/python.svg";
import flask from "../../assets/techstack/flask.svg";
import js from "../../assets/techstack/js.svg";
import arango from "../../assets/techstack/arangodb.svg";
import docker from "../../assets/techstack/docker.svg";
import git from "../../assets/techstack/git.svg";
import kubernetes from "../../assets/techstack/kubernetes.svg";
import sql from "../../assets/techstack/mysql.svg";
import psql from "../../assets/techstack/postgresql.svg";

const certificateImages = [
  { id: 1, image: Spring, name: "Spring Boot" },
  { id: 2, image: Vue, name: "Vue Js" },
  { id: 3, image: java, name: "Java" },
  { id: 4, image: flask, name: "Flask" },
  { id: 5, image: python, name: "Python" },
  { id: 6, image: react, name: "React" },
  { id: 7, image: js, name: "Java Script" },
  { id: 8, image: docker, name: "Docker" },
  { id: 9, image: kubernetes, name: "Kubernetes" },
  { id: 10, image: html, name: "HTML" },
  { id: 11, image: css, name: "CSS" },
  { id: 12, image: git, name: "Git" },
  { id: 13, image: arango, name: "Arango DB" },
  { id: 14, image: sql, name: "MySQL" },
  { id: 15, image: psql, name: "PostgreSQL" }

];

const TechStack = () => {
  return (
    <div className="techstack-grid">
      {certificateImages.map(({ id, image, name }) => (
        <div className="techstack-card" key={id}>
          <img
            src={image}
            alt={`certificate-${id}`}
            className="techstack-img"
          />
          <p className="name">{name}</p>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
