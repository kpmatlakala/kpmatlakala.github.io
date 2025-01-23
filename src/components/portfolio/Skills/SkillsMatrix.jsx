import React from 'react';
import './SkillsMatrix.css';

const skills = [
  {
    skill: 'HTML',
    proficiency: 'Intermediate',
    notes: 'Used in multiple projects.'
  },
  {
    skill: 'CSS',
    proficiency: 'Advanced',
    notes: 'Styled responsive layouts.'
  },
  {
    skill: 'JavaScript',
    proficiency: 'Intermediate',
    notes: 'Built dynamic web applications.'
  },
  {
    skill: 'React.js',
    proficiency: 'Advanced',
    notes: 'Developed complex UIs and SPAs with hooks and context.'
  },
  {
    skill: 'Node.js',
    proficiency: 'Intermediate',
    notes: 'Built RESTful APIs and backend logic.'
  },
  {
    skill: 'Express.js',
    proficiency: 'Intermediate',
    notes: 'Created server-side routes and middleware for APIs.'
  },
  {
    skill: 'MySQL',
    proficiency: 'Intermediate',
    notes: 'Worked with relational databases and wrote SQL queries.'
  },
  {
    skill: 'SQLite3',
    proficiency: 'Beginner',
    notes: 'Used for lightweight, local database storage in projects.'
  },
  {
    skill: 'MongoDB',
    proficiency: 'Intermediate',
    notes: 'Used MongoDB for data storage and implemented CRUD operations.'
  },
  {
    skill: 'Firebase',
    proficiency: 'Intermediate',
    notes: 'Integrated Firebase authentication and Firestore database.'
  },
  {
    skill: 'Redux',
    proficiency: 'Intermediate',
    notes: 'Managed global state in React applications.'
  },  
  {
    skill: 'React Native',
    proficiency: 'Intermediate',
    notes: 'Developed cross-platform mobile apps, e.g., a to-do list app.'
  },
  {
    skill: 'Git',
    proficiency: 'Advanced',
    notes: 'Version control with Git and GitHub for project collaboration.'
  },
  {
    skill: 'GitHub',
    proficiency: 'Advanced',
    notes: 'Collaborated on open-source projects and version-controlled code.'
  },
  {
    skill: 'Figma',
    proficiency: 'Intermediate',
    notes: 'Designed UI/UX prototypes and mockups for web and mobile applications.'
  },
  {
    skill: 'Canva',
    proficiency: 'Intermediate',
    notes: 'Created graphics, mockups, and marketing materials for web apps.'
  },
  {
    skill: 'Scrum',
    proficiency: 'Intermediate',
    notes: 'Worked in Agile Scrum teams to manage project timelines and sprints.'
  },  
  {
    skill: 'Tailwind CSS',
    proficiency: 'Intermediate',
    notes: 'Styled modern web apps using utility-first CSS.'
  },
  {
    skill: 'Next.js',
    proficiency: 'Beginner',
    notes: 'Built server-side rendered React applications.'
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
  return (
    <div className="skills-matrix">      
      <table className="skills-table">
        <thead>
          <tr>
            <th>Skill</th>
            <th>Proficiency</th>
            <th>Examples/Notes</th>
          </tr>
        </thead>
        <tbody>
          {skills.map((skill, index) => (
            <tr key={index}>
              <td>{skill.skill}</td>
              <td>
                <div className="proficiency-bar">
                  <div
                    className={`bar ${skill.proficiency.toLowerCase()}`}
                    style={{
                      width: `${getProficiencyWidth(skill.proficiency)}%`
                    }}
                  ></div>
                </div>
              </td>
              <td>{skill.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SkillsMatrix;
