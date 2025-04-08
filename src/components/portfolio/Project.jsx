import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Project.css';

const ProjectCard = ({ id, title, description, liveLink, image }) => {
  const navigate = useNavigate();

  return (
    <div className="project-card">
      <div className="project-image-wrapper">
        <img src={image} alt={title} className="project-image" />
      </div>

      <div className="project-details"> {/* This adds the padding/spaced block */}
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>

        <div className="project-links">
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className="live-demo">
            Live Demo ↗
          </a>
          <button className="details-btn" onClick={() => navigate(`/project/${id}`)}>
            Details →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
