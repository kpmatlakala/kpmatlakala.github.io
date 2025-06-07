import React from "react";
import WeatherCard from "../../Cards/WeatherCard";
import NotFoundDiv from "../../Cards/NotFound/notfounddiv";
// import NotFoundDiv from "../../Cards/notfounddiv";
const ProjectCard = ({ project, onMore, isWeatherApp }) => (
    <div className={`project-card ${project.iframeLink ? 'has-iframe' : ''}`}>
        <div className="project-header">
            <p className="project-subtitle">{project.technologies.join(", ")}</p>
            <h4 className="project-title">{project.title}</h4>
        </div>
        {isWeatherApp ? (
            <WeatherCard />
        ) : (project.previewImage || project.previewImage == '') ? (
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

            {project.livePreviewLink && (
                <a
                    className="notify-btn"
                    href={project.livePreviewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Live Preview"
                    onClick={e => e.stopPropagation()}
                >
                    👁
                </a>
            )}
            <button className="get-app-btn" onClick={onMore}>
                More...
            </button>
        </div>
    </div>
);

export default ProjectCard;