import React from 'react';
import './Projects.css';

const ProjectModal = ({ project, isModalOpen, onClose }) => {
  return (
    <div className={`project-modal ${isModalOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <button className="close-modal" onClick={onClose}>×</button>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <p className="project-technologies">
          <strong>Technologies:</strong> {project.technologies.join(', ')}
        </p>

        {/* Key Features Section */}
        <div className="project-features">
          <h4>Key Features:</h4>
          <ul>
            {project.keyFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Challenges Faced Section */}
        <div className="project-challenges">
          <h4>Challenges Faced and Solutions:</h4>
          <ul>
            {project.challenges.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
        </div>

        <div className="action-links">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="action-link github-link"
            >
              GitHub
            </a>
          )}
          {project.livePreviewLink && (
            <a
              href={project.livePreviewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="action-link live-preview-link"
            >
              Live
            </a>
          )}
        </div>

        {project.screenshots && project.screenshots.length > 0 && (
          <div className="screenshots-container">
            {project.screenshots.map((src, i) => (
              <img
                key={i}
                className="project-screenshot-img"
                src={src}
                alt={`Screenshot ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;
