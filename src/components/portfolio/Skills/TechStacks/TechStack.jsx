import React from 'react';
import './TechStack.css'; // External CSS for styles

const techStack = [
    'React',
    'Node.js',
    'JavaScript',
    'CSS',
    'HTML',
    'MongoDB',
    'Git',
    'Firebase',
    'GraphQL',
    'TypeScript',
    'Express',
];

const TechStack = () => {
    return (
        <div className="tech-stack-container">
            <div className="tech-stack">
                {techStack.map((tech, index) => (
                    <div className="tech-item" key={index}>
                        <span>{tech}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechStack;
