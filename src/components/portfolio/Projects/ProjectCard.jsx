import React from "react";
import WeatherCard from "../../Cards/WeatherCard";

const ProjectCard = ({ project, onMore, isWeatherApp }) => (
  <div className="project-card">
    <div className="project-header">
      <p className="project-subtitle">{project.technologies.join(", ")}</p>
      <h4 className="project-title">{project.title}</h4>
    </div>
    {isWeatherApp ? (
      <WeatherCard />
    ) : (
      <img
        className="project-image"
        src={project.previewImage || "default-image.jpg"}
        alt={`${project.title} background`}
      />
    )}
    <div className="project-footer">
      <p className="footer-text">{project.description}</p>
      <button className="notify-btn" onClick={onMore}>
        👁 More
      </button>
    </div>
  </div>
);

export default ProjectCard;