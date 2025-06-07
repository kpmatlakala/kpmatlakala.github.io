import React from "react";
import NotFoundDiv from "../../Cards/NotFound/notfounddiv";

const GroupProjectCard = ({ project, onMore }) => (
  <div className="project-card">
    <div className="project-header">
      <p className="project-subtitle">{project.technologies.join(", ")}</p>
      <h4 className="project-title">{project.title}</h4>
    </div>

    {(project.previewImage || project.previewImage == '') ? (
      <img
        className="project-image"
        src={project.previewImage}
        alt={`${project.title} background`}
      />
    ) : (
      <NotFoundDiv />
    )}
    
    <div className="project-footer">
      <p className="footer-text">{project.description}</p>
      <button className="get-app-btn" onClick={onMore}>
        More...
      </button>
    </div>
  </div>
);

export default GroupProjectCard;