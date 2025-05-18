import React from "react";

const IFrameProjectCard = ({ project, onPreview, onMore }) => (
  <div className="project-card project-with-footer">
    <div className="project-header">
      <p className="project-subtitle">{project.technologies.join(", ")}</p>
      <h4 className="project-title">{project.title}</h4>
    </div>
    <img
      className="project-image"
      src={project.previewImage}
      alt={`${project.title} background`}
    />
    <div className="project-footer">
      <p className="footer-text">{project.description}</p>
      <button className="notify-btn" onClick={onPreview}>👁 Preview</button>
      <button className="notify-btn" onClick={onMore}>More</button>
    </div>
  </div>
);

export default IFrameProjectCard;