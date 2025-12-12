// ProjectCard for portfolio website
// Displays project title, image, descriptions, and link to repository and live demo

import React from "react";

const ProjectCard = ({ title, image, description, repoLink, liveDemoLink }) => {
  return (
    <div className="project-card">
      <img src={image} alt={`${title} screenshot`} className="project-image" />
      <h2 className="project-title">{title}</h2>
      <p className="project-description">{description}</p>
      <div className="project-links">
        <a
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="repo-link"
        >
          View Repository
        </a>
        <a
          href={liveDemoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="live-demo-link"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};
export default ProjectCard;
