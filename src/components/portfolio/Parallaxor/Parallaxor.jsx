import "./Parallaxor.css";
import React, { useEffect, useRef, useState } from 'react';
import SymbolCircle from '../../particles/SymbolCircle';
import RotatingCircles from '../../particles/RotatingCircles';

import About from '../About';
import Background from '../Background'; //Educational-Background
import SkillsMatrix from '../Skills/SkillsMatrix';
import WorkExperience from '../WorkExperience/WorkExperience';
import Projects from '../Projects/Projects';
import Contact from '../Contacts/Contact';

import myPic from "../../../assets/20240926-main.png"


const Parallaxor = () => {

    const edu_Ref = useRef(null);
    const [onEduPage, setEduPageVisible] = useState(false);

    useEffect(() => {
        // console.log("Edu_Ref:", edu_Ref.current);
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setEduPageVisible(entry.isIntersecting); 
        })
        
        if (edu_Ref.current) 
        {
            observer.observe(edu_Ref.current);
        }
      }, []);

    console.log("onEduPage: ", onEduPage);

    return (
        <div className="app">    
            <div className="container"> {/* plx-wrp */}
                <RotatingCircles onEduPage={onEduPage}/>

                <section className="content-section" id="about"> {/* plx-grp */}
                    
                    <div className="intro-layer">
                        <p className="tags">{'< >'} </p>
                            <div className="about-info">
                                <h1><span>Hello</span></h1>
                                <h2 className="name">I'm
                                    <span className="shadow-text">P</span>
                                    <span className="highlight-text">P</span>eter,
                                </h2>
                                <div className="smry">
                                    <h3>Junior Web Developer</h3>
                                    <p>Specializing in Front-End & Back-End Development</p>
                                </div>
                                
                                {/* <button className="contact-btn">Contact Me</button> */}
                            </div>
                        <p className="tags">{'< / >'}</p>
                    </div>                

                    <div className="about-me-layer" id='about-me'>
                        <About />
                    </div>                      

                </section>

                <div className={`mid-layer ${onEduPage ? "onEduPage": ""}`}>                    
                    <img src={myPic} />                   
                </div>  

                <div className={`base-layer ${onEduPage ? "onEduPage": ""}`}>
                    <SymbolCircle />
                </div> 

                <section className="content-section" id="education">                
                    <div ref={edu_Ref} className="top-layer">
                        <h1 className="section-title">Educational Background</h1>
                        <p className="subtitle">
                            Explore the foundation that has shaped my expertise and knowledge.
                        </p>
                        <hr/>                    
                    </div>
                    <Background />                
                </section>
                
                <section className="content-section" id="skills">
                    <div className="top-layer">                  
                        <h1 className="section-title">Skills Matrix</h1>
                        <p className="subtitle">
                            From programming languages to frameworks, here's a snapshot of my skills.
                        </p>
                        <hr/>
                    </div>
                    <SkillsMatrix />  
                    <h3>GitHub Activity</h3>
                    <div className="github-matrix">
                        <img
                            src="https://ghchart.rshah.org/DeLightPlus"
                            alt="GitHub Contribution Chart"
                            style={{ width: "100%", maxWidth: 700, background: "#fff", borderRadius: 8, boxShadow: "0 2px 12px #0001" }}
                        />
                    </div>                  
                </section>

                <section className="content-section" id="experience">
                    <div className="top-layer">
                        <h1 className="section-title">Professional Work Experience</h1>
                        <p className="subtitle">
                            Insights into my professional journey and the impact I've made in various roles.
                        </p>
                        <hr/>
                    </div>   

                    <WorkExperience />
                </section>

                <section className="content-section" id="projects">
                    <div className="top-layer">
                        <h1 className="section-title">Projects</h1>
                        <p className="subtitle">
                            Here are some of the projects that showcase my skills and creativity.
                        </p>
                        <hr/>
                    </div>  
                    <Projects />
                </section>

                <section className="content-section" id="contacts">
                    <div className="top-layer">
                        <h1 className="section-title">Contact Me</h1>
                        <p className="subtitle">
                            Get in touch with me through any of the channels below or send a direct message!
                        </p>
                        <hr/>
                    </div> 
                    <Contact/>                
                </section>
                
                
            </div>           
                
        </div>
    )
}

export default Parallaxor

