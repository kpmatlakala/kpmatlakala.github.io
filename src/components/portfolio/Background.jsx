import React from 'react';

import hs from "/assets/HwitiHS.png";
import ul from "/assets/UL-Green-alpha.png";
import unisa from "/assets/unisa-logo.png";
import codetribe from "/assets/mLab codetribe.png";


const Background = () => {
  return (
    <div className='edu-bg-container' style={{overflow:"auto"}}>
        <div className="timeline-content" id="secondary">
            <p>Secondary Education:</p> 
            <div className='description-container'>
                <img src={hs} width={128} />                
                <hr/> 
                <div className='description-details'>
                    <b>Matriculation (Grade 12)</b>
                    <p><strong><u>Hwiti High School</u></strong></p>
                    <p>2011 - 2015</p>
                    <p>Science Stream</p>
                    <small> 
                        <span>(FAL) English</span> | <span>(HL): Sepedi</span>
                        <br />
                        <span>Mathematics</span> | <span>Geography</span> | <span>Life Sciences</span> | <span>Physical Sciences</span>
                    </small>
                </div>
            </div>            
        </div>
        
        <div className="timeline-content" id="tertiary">
            <p>Tertiary Education: </p>
            <ul>
                <li>
                    <div className='description-container'>
                        <img src={ul} width={128} />      
                        <hr/>                  
                        <div className='description-details'>
                            <b>Degree in BSc (Mathematical Science)</b>
                            <p><strong><u>University of Limpopo</u></strong></p>
                            <p>2016 - 2024</p>
                            <small>
                                <p> A focus on computer science, acquiring skills in algorithms, data structures,</p> 
                                <p> and programming (C++, Java, JavaScript, HTML and CSS). </p>
                            </small>
                        </div>
                    </div>
                </li>

                <li>
                    <div className='description-container'>
                        <img src={unisa} height={48}/>
                        <hr/>
                        <div className='description-details'>
                            <p>Non-Degree Purpose</p>
                            <p><strong><u>University of South Africa</u></strong></p>
                            <p>2023-2024</p>
                            <small>THEORY OF ELECTROMAGNETISM AND RELATIVITY</small>
                            {/* <p>A focus on Special Relativity,</p>
                            <p> Electricity and Magnetism (Physics)</p> */}
                        </div>
                    </div>
                </li>
            </ul>            
        </div>
        
        <div className="timeline-content" id="additional-training">
            <p >Additional Education & Training: </p>
            <div className='description-container'>
                <div>
                    <img src={codetribe} width={256}/>   
                    <p><strong>CodeTribe Academy</strong></p>
                    <p>2024/2025 <span>(in progress)</span></p>
                    <p></p>                 
                </div>
                {/* <hr /> */}
                
                <div className='info'>
                    <small>
                        <p>CodeTribe Academy empowers South African youth with skills in
                            <span> Android, iOS, Web development </span> 
                            <span>, cloud technologies</span>, and 
                            <span>scrum agile project management</span>, 
                            fostering both employment and self-employment opportunities.
                        </p>
                    </small>
                </div>
            </div>        
           
        </div>
        
    </div>
  )
}

export default Background