import React from 'react';
import "./Background.css"

// import hs from "/assets/HwitiHS.png";
import ul from "/assets/UL-Green-alpha.png";
// import unisa from "/assets/unisa-logo.png";
import codetribe from "/assets/codetribe.png";



const Background = () => {
    return (
        <div className='about-me-container' style={{ overflow: "auto" }}>
            <div className="timeline-content" id="my-journey">
                <h2>My Journey</h2>
                <p>
                    I'm a <span>Junior Full Stack Developer</span> with a background in
                    BSc in Mathematical Sciences from University of Limpopo.
                    My journey combines analytical thinking with
                    creative problem-solving to build innovative web applications.
                </p>
                <br />
                <p>
                    Recenty completed my training with mLab CodeTribe Academy,
                    specializing specializing in React.js, Node.js, and modern web technologies.
                    I'm passionate about UI/UX design and creating user-friendly
                    interfaces that deliver exceptional experiences.
                </p>
                <p>
                    My goal is to build intuitive, user-friendly applications that address real-world challenges.
                </p>
            </div>

            <div className="timeline-content" id="education">
                <ul>
                    <li>
                        <div className='description-container'>
                            <div className="title">
                                <div className="">👨‍🎓</div>
                                <h3> Education</h3>

                            </div>

                            <div className='description-details'>
                                <img src={ul} width={64} height={64} />
                                <div>
                                    <p>BSc in Mathematical Science</p>
                                    <small>University of Limpopo (2016 - 2024)</small>
                                    {/* <small>
                                        <p> A focus on computer science, acquiring skills in algorithms, data structures,</p>
                                        <p> and programming (C++, Java, JavaScript, HTML and CSS). </p>
                                    </small> */}
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className='description-container'>
                            <div className="title">
                                <div className=""></div>
                                <h3>Personal</h3>
                            </div>

                            <div className='description-details'>
                                <div style={{ height: "64px" }}></div>
                                <div>
                                    <p>📆 Born July 10th, 1997 </p>
                                    <small>Single, Never Married</small>
                                    {/* <small>THEORY OF ELECTROMAGNETISM AND RELATIVITY</small>
                                    <p>A focus on Special Relativity,</p>
                                    <p> Electricity and Magnetism (Physics)</p> */}
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className='description-container'>
                            <div className="title">
                                <div className="">📍</div>
                                <h3>Location</h3>
                            </div>

                            <div className='description-details'>
                                <div style={{ height: "64px" }}></div>
                                <div>
                                    <p> Polokwane, South Africa </p>
                                    <small>Available for remote work</small>
                                    {/* <small>THEORY OF ELECTROMAGNETISM AND RELATIVITY</small>
                                    <p>A focus on Special Relativity,</p>
                                    <p> Electricity and Magnetism (Physics)</p> */}
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>



            <div className="timeline-content" id="experience">
                <ul>
                    <li>
                        <div className='description-container'>
                            <img src={codetribe} width={126} />

                            <div>
                                <h3>mLab CodeTribe Academy</h3>
                                <p><strong>Full Stack Development Training</strong></p>
                                <small>March 2024 - March 2025 </small>

                                <div className='info'>
                                    <p>
                                    Introduction to ReactJS, Native and Node.js 
                                    - intensive training in modern web technologies
                                    </p>
                                </div>
                            </div>
                            {/* <hr /> */}

                            {/* */}
                        </div>
                    </li>

                    <li>
                        <div className='description-container'>
                            <img src={ul} width={126} />

                            <div>
                                <h3>University of Limpopo, ICT</h3>
                                <p><strong>Computer Laboratory Student Assistant</strong></p>
                                <small>July 2022 – December 2022</small>

                                <div className='info'>
                                    <p>
                                        Assisted students with computer lab activities 
                                        and provided technical support
                                    </p>
                                </div>
                            </div>                           
                        </div>
                    </li>
                </ul>



            </div>

        </div>
    )
}

export default Background