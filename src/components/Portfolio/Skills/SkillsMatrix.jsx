import React, { useState, useEffect } from 'react';
import './SkillsMatrix.css';

// Define skill categories
const skillCategories = {
  frontend: {
    name: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'React Native', 'Tailwind CSS', 'Next.js']
  },
  backend: {
    name: 'Backend',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'MySQL', 'SQLite3', 'Supabase']
  },
  tools: {
    name: 'Tools & Others',
    skills: ['Git', 'GitHub', 'Firebase', 'Redux', 'Figma', 'Canva', 'Scrum']
  }
};

// Define the skills array with icons (replace these URLs with actual icon URLs)
const skills = [
  {
    skill: 'HTML',
    proficiency: 'Intermediate',
    notes: 'Used in multiple projects.',
    icon: 'https://img.icons8.com/?size=100&id=20909&format=png&color=000000' // Example URL
  },
  {
    skill: 'CSS',
    proficiency: 'Advanced',
    notes: 'Styled responsive layouts.',
    icon: 'https://img.icons8.com/?size=100&id=21278&format=png&color=000000' // Example URL
  },
  {
    skill: 'JavaScript',
    proficiency: 'Intermediate',
    notes: 'Built dynamic web applications.',
    icon: 'https://img.icons8.com/?size=100&id=108784&format=png&color=000000' // Example URL
  },

  {
    skill: 'MongoDB',
    proficiency: 'Intermediate',
    notes: 'Used MongoDB for data storage and implemented CRUD operations.',
    icon: 'https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000' // Example URL
  },
  {
    skill: 'PostgreSQL',
    proficiency: 'Intermediate',
    notes: 'Worked with relational databases, complex queries, and data modeling.',
    icon: 'https://img.icons8.com/?size=100&id=38561&format=png&color=000000'
  },
  {
    skill: 'Supabase',
    proficiency: 'Intermediate',
    notes: 'Implemented authentication, real-time databases, and storage solutions.',
    icon: 'https://img.icons8.com/?size=100&id=38561&format=png&color=000000'
  },
  {
    skill: 'Express.js',
    proficiency: 'Intermediate',
    notes: 'Created server-side routes and middleware for APIs.',
    icon: 'https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000' // Example URL
  },
  {
    skill: 'React.js',
    proficiency: 'Advanced',
    notes: 'Developed complex UIs and SPAs with hooks and context.',
    icon: 'https://img.icons8.com/?size=100&id=123603&format=png&color=000000' // Example URL
  },
  {
    skill: 'Node.js',
    proficiency: 'Intermediate',
    notes: 'Built RESTful APIs and backend logic.',
    icon: 'https://img.icons8.com/?size=100&id=54087&format=png&color=000000' // Example URL
  },
  
  {
    skill: 'MySQL',
    proficiency: 'Intermediate',
    notes: 'Worked with relational databases and wrote SQL queries.',
    icon: 'https://img.icons8.com/?size=100&id=9nLaR5KFGjN0&format=png&color=000000' // Example URL
  },
  {
    skill: 'SQLite3',
    proficiency: 'Beginner',
    notes: 'Used for lightweight, local database storage in projects.',
    icon: 'https://img.icons8.com/?size=100&id=VMRAbKfEzssG&format=png&color=000000' // Example URL
  },
  
  {
    skill: 'Firebase',
    proficiency: 'Intermediate',
    notes: 'Integrated Firebase authentication and Firestore database.',
    icon: 'https://img.icons8.com/?size=100&id=62452&format=png&color=000000' // Example URL
  },
  {
    skill: 'Redux',
    proficiency: 'Intermediate',
    notes: 'Managed global state in React applications.',
    icon: 'https://img.icons8.com/?size=100&id=jD-fJzVguBmw&format=png&color=000000' // Example URL
  },  
  {
    skill: 'React Native',
    proficiency: 'Intermediate',
    notes: 'Developed cross-platform mobile apps, e.g., a to-do list app.',
    icon: 'https://img.icons8.com/?size=100&id=123603&format=png&color=000000' // Example URL
  },
  {
    skill: 'Git',
    proficiency: 'Advanced',
    notes: 'Version control with Git and GitHub for project collaboration.',
    icon: 'https://img.icons8.com/?size=100&id=20906&format=png&color=000000' // Example URL
  },
  {
    skill: 'GitHub',
    proficiency: 'Advanced',
    notes: 'Collaborated on open-source projects and version-controlled code.',
    icon: 'https://img.icons8.com/?size=100&id=62856&format=png&color=000000' // Example URL
  },
  {
    skill: 'Figma',
    proficiency: 'Intermediate',
    notes: 'Designed UI/UX prototypes and mockups for web and mobile applications.',
    icon: 'https://img.icons8.com/?size=100&id=W0YEwBDDfTeu&format=png&color=000000' // Example URL
  },
  {
    skill: 'Canva',
    proficiency: 'Intermediate',
    notes: 'Created graphics, mockups, and marketing materials for web apps.',
    icon: 'https://img.icons8.com/?size=100&id=iWw83PVcBpLw&format=png&color=000000' // Example URL
  },
  {
    skill: 'Scrum',
    proficiency: 'Intermediate',
    notes: 'Worked in Agile Scrum teams to manage project timelines and sprints.',
    icon: 'https://img.icons8.com/?size=100&id=d9MaqNTok1pu&format=png&color=000000' // Example URL
  },  
  {
    skill: 'Tailwind CSS',
    proficiency: 'Intermediate',
    notes: 'Styled modern web apps using utility-first CSS.',
    icon: 'https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000' // Example URL
  },
  {
    skill: 'Next.js',
    proficiency: 'Beginner',
    notes: 'Built server-side rendered React applications.',
    icon: 'https://icons8.com/icon/EnfJ-Rm3EXQu/next-js' // Example URL
  },
];

const getProficiencyWidth = (proficiency) => {
  switch (proficiency.toLowerCase()) {
    case 'beginner':
      return 33;
    case 'intermediate':
      return 66;
    case 'advanced':
      return 100;
    default:
      return 0;
  }
};

const SkillsMatrix = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderMobileView = () => {
    return (
      <div className="mobile-skills">
        {Object.entries(skillCategories).map(([key, category]) => (
          <div key={key} className="mobile-category">
            <h3>{category.name}</h3>
            <div className="mobile-skills-grid">
              {category.skills.map(skillName => {
                const skill = skills.find(s => s.skill === skillName);
                if (!skill) return null;
                return (
                  <div key={skillName} className="mobile-skill-item">
                    <img src={skill.icon} alt={skill.skill} className="skill-icon" />
                    <span className="skill-name">{skill.skill}</span>
                    <div className="proficiency-bar">
                      <div
                        className={`bar ${skill.proficiency.toLowerCase()}`}
                        style={{ width: `${getProficiencyWidth(skill.proficiency)}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
        <div className="mobile-github">
          <h3>GitHub Activity</h3>
          <div className="github-matrix">
            <img
              src="https://ghchart.rshah.org/DeLightPlus"
              alt="GitHub Contribution Chart"
              style={{ width: "100%", maxWidth: 700, background: "#fff", borderRadius: 8, boxShadow: "0 2px 12px #0001" }}
            />
          </div>
        </div>
      </div>
    );
  };

  const renderDesktopView = () => {
    return (
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card" style={{ '--index': index }}>
            <div className="skill-header">
              <img src={skill.icon} alt={skill.skill} className="skill-icon" />
              <h3>{skill.skill}</h3>
            </div>
            <div className="skill-content">
              <div className="proficiency-container">
                <span className="proficiency-label">{skill.proficiency}</span>
                <div className="proficiency-bar">
                  <div
                    className={`bar ${skill.proficiency.toLowerCase()}`}
                    style={{ width: `${getProficiencyWidth(skill.proficiency)}%` }}
                  ></div>
                </div>
              </div>
              <p className="skill-notes">{skill.notes}</p>
            </div>
          </div>
        ))}
        <div className="skill-card">
          <h3>GitHub Activity</h3>
          <div className="github-matrix">
            <img
              src="https://ghchart.rshah.org/DeLightPlus"
              alt="GitHub Contribution Chart"
              style={{ width: "100%", maxWidth: 700, background: "#fff", borderRadius: 8, boxShadow: "0 2px 12px #0001" }}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="skills-matrix">
      {isMobile ? renderMobileView() : renderDesktopView()}
    </div>
  );
};

export default SkillsMatrix;
