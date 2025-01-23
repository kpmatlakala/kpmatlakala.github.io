
// import './WorkExperience.css';
import React from 'react';

const WorkExperience = () => {
  return (
    <div className="work-experience-container"> 

        {/* Eskom Expo for Young Scientists Mentorship Program */}
        <div className="work-item">
            <h3 className="work-title">Eskom Expo for Young Scientists Mentorship Program (2019)</h3>
            <hr/>
            <p className="work-description">
            Participated in the Eskom Expo for Young Scientists mentorship program, gaining valuable insights into research, project development, and scientific presentations.
            </p>
        </div>

        {/* Computer Laboratory Student Assistant at University of Limpopo, ICT */}
        <div className="work-item">
            <h3 className="work-title">Computer Laboratory Student Assistant, University of Limpopo, ICT (2022)</h3>
            <hr/>
            <p className="work-description">
            Assisted students and staff with technical support in the computer lab, helped with software installations, and maintained hardware systems.
            </p>
        </div>

        {/* Current Enrollment at CodeTribe Academy */}
        <div className="work-item" id="codetribe">
            <h3 className="work-title">
                Currently Enrolled at <br/>
                <span>Code</span>Tribe <span>academy</span>
                <small> (2024-2025) </small>
            </h3>
            <hr/>
            <p className="work-description">
                Enrolled in <strong><span>Code</span>Tribe <span>academy</span></strong>, focusing on <span>Android, iOS, and Web solutions,</span> 
                 with training in <span>cloud technologies,</span> agile project management, 
                and soft skills for career development.
            </p>
        </div>

    </div>
  );
};

export default WorkExperience;
