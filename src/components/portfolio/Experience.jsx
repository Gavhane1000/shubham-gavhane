import React from "react";
import "./Experience.css";

const experienceData = [
  {
    id: 1,
    role: "Bachelor of Engineering",
    company: "Mumbai University",
    duration: "2018 - 2022",
    description: "Computer Engineering",
    marks: "9.02 CGPA",
    current: false,
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "LTIMindtree",
    duration: "2022 - Present",
    description: "Handling modules like, MLOPs, Ops Copilot, FLT & FCR Agents.",
    marks: "",
    current: true,
  },
];

const Experience = () => {
  return (
    <div className="experience">
      <div className="experience-cards">
        {experienceData.map((exp) => (
          <div
            className={`experience-card ${exp.current ? "current " : ""}`}
            key={exp.id}
          >
          {exp.current && <span className="top-right-tick">✔</span>}
            <div className="heading-com">
              <p className="company">
                {exp.company}
              </p>
              <p className="duration">{exp.duration}</p>
            </div>
            <p className="role">{exp.role}</p>
            <div className="heading-com">
              <p className="description">{exp.description}</p>
              <p className="marks">{exp.marks}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
