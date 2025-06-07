import React from "react";
import NotFoundDiv from "../../Cards/NotFound/notfounddiv";
import WeatherCard from "../../Cards/WeatherCard";

const IFrameProjectCard = ({ project, onPreview, onMore, isWeatherApp }) => (
    <div className="project-card project-with-footer">
        <div className="project-header">
            <p className="project-subtitle">{project.technologies.join(", ")}</p>
            <h4 className="project-title">{project.title}</h4>
        </div>
        {isWeatherApp ? (
            <WeatherCard />
        ) : (project.previewImage ? (
            <img
                className="project-image"
                src={project.previewImage}
                alt={`${project.title} background`}
            />
        ) : (
            <NotFoundDiv />
        ))}
        <div className="project-footer">
            <p className="footer-text">{project.description}</p>
            {project.livePreviewLink && (
                <a
                    className="notify-btn"
                    href={project.livePreviewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Live Preview"
                >
                    👁
                </a>
            )}
            <button className="get-app-btn" onClick={onMore}>More</button>
        </div>
    </div>
);

export default IFrameProjectCard;