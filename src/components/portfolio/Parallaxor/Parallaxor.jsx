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
                                <h1><span>H</span>ello</h1>
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
                        <p>Educational Background</p>                    
                    </div>
                    <Background />                
                </section>

                
                <section className="content-section" id="skills">
                    
                    <div className="top-layer">
                        <p>Skills Matrix</p>                    
                    </div>
                    <SkillsMatrix />
                    
                </section>

                <section className="content-section" id="work">
                    <div className="top-layer">
                        <p className="section-title">Professional Work Experience</p>
                    </div>               
                    <WorkExperience />
                </section>

                <section className="content-section" id="projects">
                    <div className="top-layer">
                        <p className="section-title">Projects</p>
                    </div>  
                    <Projects />
                </section>

                <section className="content-section" id="contacts">
                <Contact/>                
                </section>
                
                
            </div>           
                
        </div>
    )
}

export default Parallaxor

