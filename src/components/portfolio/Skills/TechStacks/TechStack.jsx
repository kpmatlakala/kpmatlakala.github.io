import React from 'react';
import './TechStack.css'; // External CSS for styles

// Define the tech stack with icons as URLs
const techStack = [    
    { name: 'HTML', icon: 'https://img.icons8.com/?size=100&id=20909&format=png&color=000000' },
    { name: 'CSS', icon: 'https://img.icons8.com/?size=100&id=21278&format=png&color=000000' },
    { name: 'JavaScript', icon: 'https://img.icons8.com/?size=100&id=108784&format=png&color=000000' },
   
    { name: 'MongoDB', icon: 'https://img.icons8.com/?size=100&id=74402&format=png&color=000000' },
    { name: 'Express.Js', icon: 'https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000' },
    { name: 'React', icon: 'https://img.icons8.com/?size=100&id=123603&format=png&color=000000' },
    { name: 'Node.js', icon: 'https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000' },

    { name: 'TypeScript', icon: 'https://img.icons8.com/?size=100&id=wpZmKzk11AzJ&format=png&color=000000' },
    { name: 'Git', icon: 'https://img.icons8.com/?size=100&id=20906&format=png&color=000000' },
    { name: 'Firebase', icon: 'https://img.icons8.com/?size=100&id=62452&format=png&color=000000' },
    { name: 'Tailwind', icon: 'https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000' },
    ,
    
];

const TechStack = () => {
    return (
        <div className="tech-stack-container">
            <div className="tech-stack">
                {techStack.map((tech, index) => (
                    <div className="tech-item" key={index}>
                        <img src={tech.icon} alt={tech.name} className="tech-icon" />
                        <span>{tech.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechStack;
