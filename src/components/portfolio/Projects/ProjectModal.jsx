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

        <div className="project-actions">
            <button className="action-btn">
                Preview
                <div className="action-links">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="action-link github-link"
                  >
                    GitHub Repo
                  </a>
                  {project.livePreviewLink && (
                      <a 
                          href={project.livePreviewLink} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="action-link live-preview-link"
                      >
                        👁 Live Preview
                      </a>
                  )}
                  
                </div>
            </button>
        </div>

        {/* Project Image Preview */}
        {/* <div className="project-image">
          {project.previewImage && (
            <img src={project.previewImage} alt={project.title} className="project-preview-img" />
          )}
        </div> */}

        {/* Show screenshots horizontally if they exist */}
        {project.screenshots && project.screenshots.length > 0 && (
          <div className="screenshots-container">
            {project.screenshots.map((screenshot, index) => (
              <img
                key={index}
                src={screenshot}
                alt={`${project.title} screenshot ${index + 1}`}
                className="project-screenshot-img"
              />
            ))}
          </div>
        )}

        {/* Live Preview Link */}
        <div className="project-actions">
          {project.livePreviewLink && (
            <a href={project.livePreviewLink} target="_blank" rel="noopener noreferrer">
              <button className="preview-btn">View Live Demo</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
