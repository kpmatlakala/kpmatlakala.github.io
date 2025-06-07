import "./Parallaxor.css";
import React, { useEffect, useRef, useState } from 'react';
import SymbolCircle from '../../particles/SymbolCircle';
// import RotatingCircles from '../../particles/RotatingCircles';


import Background from '../Background/Background'; //Educational-Background
import SkillsMatrix from '../Skills/SkillsMatrix';
import WorkExperience from '../WorkExperience/WorkExperience';
import Projects from '../Projects/Projects';
import Contact from '../Contacts/Contact';

import banner from "/assets/banner.png"


const Parallaxor = () => {

    const about_Ref = useRef(null);
    const [onAboutMe, setEduPageVisible] = useState(false);

    useEffect(() => {
        // console.log("Edu_Ref:", edu_Ref.current);
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setEduPageVisible(entry.isIntersecting); 
        })
        
        if (about_Ref.current) 
        {
            observer.observe(about_Ref.current);
        }
      }, []);

    console.log("onEduPage: ", onAboutMe);

    return (
        <div className="app">    
            <div className="container"> {/* plx-wrp */}
                {/* <RotatingCircles onEduPage={onEduPage}/> */}

                <section className="content-section" id="home"> {/* plx-grp */}                    
                    <div className="intro-layer">
                        <p className="tags">{'< >'} </p>
                            <div className="intro-info">
                                <h1><span>Hello</span></h1>
                                <h2 className="name">I'm 
                                    <span className="shadow-text">K</span>
                                    <span className="highlight-text">K</span>abelo
                                    <span className="shadow-text">P</span>
                                    <span className="highlight-text">P</span>eter 
                                    Matlakala
                                </h2>
                                <div className="smry">
                                    <h3>Junior Full Stack Developer</h3>
                                    <p>
                                        Passionate about creating innovative web solutions 
                                        <br/>with modern technologies and elegant design.
                                    </p>
                                </div>
                                
                                {/* <button className="contact-btn">Contact Me</button> */}
                            </div>
                        <p className="tags">{'< / >'}</p>
                    </div>                

                    {/* <div className="about-me-layer" id='about-me'>
                        <About />
                    </div>                       */}

                </section>

                <div className={`mid-layer ${onAboutMe ? "onAboutPage": ""}`}>                    
                    <img src={banner} />                   
                </div>  

                <div className={`base-layer ${onAboutMe ? "onAboutPage": ""}`}>
                    <SymbolCircle />
                </div> 

                <section className="content-section" id="about-me">                
                    <div ref={about_Ref} className="top-layer">
                        <h1 className="section-title">About Me</h1>
                        <p className="subtitle">
                        Passionate about creating exceptional digital experiences through code and design
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

