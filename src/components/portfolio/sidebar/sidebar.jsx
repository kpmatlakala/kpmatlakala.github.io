import "./sidebar.css"  
import React from 'react';

import {
    FaLinkedinIn,
    FaInstagram,
    FaGithub,
    FaDownload,
    FaBars,
    FaTimes,
    FaUser,
    FaGraduationCap,
    FaBriefcase,
    FaCode,
    FaProjectDiagram,
    FaEnvelope
  } from '../../../utils/icons';
  
import { useState } from "react";
   
const SideBar = ({ activeSection, onScrollToSection }) => 
{
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen); }

    const handleMenuClick = (section) => {
      onScrollToSection(section);
      if (window.innerWidth <= 1024) {
        setIsSidebarOpen(true);
      }
    };

    const menuItems = [
      { id: "about", icon: <FaUser size={16} />, label: "About" },
      { id: "education", icon: <FaGraduationCap size={16} />, label: "Education" },
      { id: "experience", icon: <FaBriefcase size={16} />, label: "Experience" },
      { id: "skills", icon: <FaCode size={16} />, label: "Skills" },
      { id: "projects", icon: <FaProjectDiagram size={16} />, label: "Projects" },
      { id: "contacts", icon: <FaEnvelope size={16} />, label: "Contacts" }
    ];
    
    return (
      <>        
        <aside className={`fixed-menu ${isSidebarOpen ? 'open' : ''}`}>
          <div className="logo" onClick={() => handleMenuClick("home")}>
            <div className="logo-actual">
              <div className="fstLetter">K</div>
              <div className="sndLetter">P</div>
            </div>
      
            <div className="nameNstack">
              <div className="name">Peter</div>
              {/* <div className="description">
              Jnr Web Developer
              </div> */}
              <div className="status">Ready to contribute</div>
              
            </div>
          </div>       

          {/* Hamburger Icon */}
          <div className={`hamburger-icon ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}>
            {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </div>      
      
          <div className="menu">
            <ul>
              {menuItems.map(({ id, icon, label }) => (
                <li
                  key={id}
                  className={activeSection === id ? "active" : ""}
                  onClick={() => handleMenuClick(id)}
                  title={label}
                >
                  {icon}
                  <span className="menu-label">{label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <a href="assets/Mr-Kabelo-Peter-Matlakala-Resume.pdf" download="KP_Matlakala_Resume">
              <button className="resume-btn">
                <FaDownload size={10} /> 
                <span>Resume</span>
              </button>
            </a>
          </div>
      
          <div className="social-icons">          
              <a href="https://linkedin.com/in/kabelo-matlakala-704349273" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn size={16} color="white" />
              </a>
             
              <a href="https://instagram.com/your_instagram" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={16} color="white" />
              </a> 

              <a href="https://github.com/DeLightPlus" target="_blank" rel="noopener noreferrer">
                <FaGithub size={16} color="white" />
              </a>
          </div>
          
        </aside> 
      </>
     )
   }
   
   export default SideBar; 
    