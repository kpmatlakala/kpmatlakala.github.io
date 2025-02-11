import React, { useState } from 'react'
import './Projects.css';

const ProjectModalWithIFrame = ({ projectWithIFrame, isModalOpen, onClose }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => {
        setIsOpen(!isOpen);
      };


  return (
    <>
    {
        isModalOpen != null &&
        <div className={`project-modal ${isModalOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <button className="close-modal" onClick={onClose}>×</button>
                <h3 className="project-title">{projectWithIFrame.title}</h3>
                <p className="project-description">
                    {projectWithIFrame.description.split('.').map((part, index) => (
                        <span key={index}>
                        {part.trim()}
                        {index < projectWithIFrame.description.split('.').length - 1 && <br />} {/* Adds a line break except for the last part */}
                        </span>
                    ))}
                </p>
                <p className="project-technologies">
                    <strong>Technologies Used:</strong> {projectWithIFrame.technologies.join(', ')}
                </p>
            
                {/* Key Features Section */}
                <div className="project-features">
                    <h4>Key Features:</h4>
                    <ul>
                    {projectWithIFrame.keyFeatures.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                    </ul>
                </div>

                 {/* Challenges Faced and Solutions */}
                <div className="project-challenges">
                    <h4>Challenges Faced and Solutions:</h4>
                    <ul>
                    {projectWithIFrame.challenges.map((challenge, index) => (
                        <li key={index}>{challenge}</li>
                    ))}
                    </ul>
                </div>                
            
                {/* Project Image Preview */}
                {/* <div className="project-image">
                    <img
                    src={projectWithIFrame.previewImage}
                    alt="Memory Game Preview"
                    className="project-preview-img"
                    />
                </div> */}

                <div className="project-actions">
                    <button className="action-btn">
                        Preview

                        <div className="action-links">
                            <a 
                                href={projectWithIFrame.githubLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="action-link github-link"
                            >
                                GitHub Repo
                            </a>
                            {projectWithIFrame.livePreviewLink && (
                                <a 
                                    href={projectWithIFrame.livePreviewLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="action-link live-preview-link"
                                >
                                Live Preview
                                </a>
                            )}
                            <button className="action-link" onClick={toggleModal}>
                               👁 Preview
                            </button>
                        </div>
                    </button>
                </div>

                {projectWithIFrame.screenshots && projectWithIFrame.screenshots.length > 0 && (
                    <div className="screenshots-container">
                        {projectWithIFrame.screenshots.map((screenshot, index) => (
                        <img
                            key={index}
                            src={screenshot}
                            alt={`${projectWithIFrame.title} screenshot ${index + 1}`}
                            className="project-screenshot-img"
                        />
                        ))}
                    </div>
                )}

                    
                {/* Modal for Preview */}
                <div className={`game-modal ${!isOpen ? 'go-back' : ''}`}>
                    <button onClick={toggleModal}> ◀ Close The Game</button>
                    <iframe 
                    src={projectWithIFrame.iframeLink}
                    width="100%"
                    height="100%"
                    title={`${projectWithIFrame.title} Preview`}
                    style={{ border: 'none' }}
                    />
                </div>
            </div>
          
      
         
      
          
      
          
        </div>
      }
    </>
  )
}

export default ProjectModalWithIFrame